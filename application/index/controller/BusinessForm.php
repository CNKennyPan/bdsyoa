<?php
namespace app\index\controller;

use think\Controller;
use think\Session;
use think\Request; 
use think\Db;
use app\index\model\BusinessForm as BusinessFormModel;
use app\index\model\PersonalBusiness as PersonalBusinessModel;
use app\index\model\UserInfo as UserInfoModel;


//主函数
class BusinessForm extends Controller
{
    public function show(Request $request)
    {

		$bfm = new BusinessFormModel($request->param('businessid'),$request->param('method'),$request->session('id'));
		
		if($bfm->formtype!=''){
			//加载表格
			$this->assign('body',$bfm->formtype);
		
			//加载表格内容
			$i = 0;
			foreach($bfm->content as $value){
				$this->assign("input".$i,$value);
				$i = $i + 1 ;
			}
		
			//加载审批栏
			switch($request->param('method'))
			{
				case "read":
					$this->assign('submitinfo',$bfm->submitinfo);
					$this->assign('submit','');
				break;
				case "submit":
					$this->assign('submitinfo',$bfm->submitinfo);
					$this->assign('submit',$bfm->submit);
				break;
				default:
					$this->assign('submitinfo',$bfm->submitinfo);
					$this->assign('submit','');
			}
		
			//加载表格按钮
			$this->assign('footer',$bfm->footer);
		
			//加载步骤提示信息
			$this->assign('tip',$bfm->tip);
		}else{
			$this->assign('body','business_form/error');
		}
		
		
		//return dump($bfm->formtype);
		return $this->fetch();
	
    }
	
		

	 public function update(Request $request){
		
		$pb = PersonalBusinessModel::get($request->param('businessid'));
		
		
		//添加审批信息
		$submitinfotemp = json_decode($pb->submitinfo,true);
		$nowstep = count($submitinfotemp);
		$submitinfotemp[] = array(
			'submiterid' => $request->session('id'),
			'submit' => $request->param('result'),
			'content' => $request->param('content'),
			'step' => $nowstep+1,
			'time' => date("Y-m-d H:i:s")
		);
		$pb->submitinfo = json_encode($submitinfotemp,JSON_UNESCAPED_UNICODE);
		$pb->receiverid = $request->param('receiverid');
		switch($request->param('result')){
			case '0':
				$pb->state = 'false';
			break;
			case '1':
				$pb->state = 'submit';
			break;
			case '2':
				$pb->state = 'success';
			break;
		}
		$pb->haveread = null;
		$pb->deleterecord = null;
		$pb->sumbittime = date("Y-m-d H:i:s");
		
		 if($pb->save()){
			return '事项审批成功';
			}else{
			return '事项审批成功'.$pb->getError();
			}
		 
	 }
	 
	 //添加删除记录
	 public function deleterecord(Request $request){
		 $pb = PersonalBusinessModel::get($request->param('businessid'));
		 $pb->deleterecord = $pb->deleterecord . $request->session('id') . ',';
		  if($pb->save()){
			return '事项删除成功';
			}else{
			return '事项删除失败'.$pb->getError();
		}
	 }
	
	
}
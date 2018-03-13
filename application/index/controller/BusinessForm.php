<?php
namespace app\index\controller;

use think\Controller;
use think\Session;
use think\Request; 
use think\Db;
use app\index\model\BusinessForm as BusinessFormModel;


//主函数
class BusinessForm extends Controller
{
    public function show(Request $request)
    {
		$bfm = new BusinessFormModel($request->param('businessid'),$request->param('method'),$request->session('id'));
		
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
		
		return $this->fetch();
		
    }
	
	 public function update(Request $request){
		 
	 }
	
	
	
}
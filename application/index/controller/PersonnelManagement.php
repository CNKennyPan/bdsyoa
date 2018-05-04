<?php
namespace app\index\controller;

use think\Controller;
use think\Session;
use think\Request; 
use app\index\model\PersonalBusiness as PersonalBusinessModel;
use think\Db;
use app\index\model\PersonnelManagement as PersonnelManagementModel;

//主函数
class PersonnelManagement extends Controller
{
    public function show(Request $request)
    {
		$this->assign('name',$request->session('name'));
		$this->assign('department',$request->session('department'));
		$this->assign('position',$request->session('position'));
		$this->assign('reason',"");
		$this->assign('dealwith',"");
		$this->assign('begintime',"");
		$this->assign('endtime',"");
		
		if($request->session('department')=='综合部'&&$request->session('position')=='部门主管'){
			$result = Db::table('bdsy_personal_business business,bdsy_user_info user')->where('user.id = business.posterid')->select();
			if (count($result)>0){
				$this->assign('myworkrecordlist',$result);
			}else{
				$result=array(array());
				$this->assign('myworkrecordlist',$result);
			}
		}else{
			$result=array(array());
			$this->assign('myworkrecordlist',$result);
		}
		
		
		//显示申请记录
		$pm = new PersonnelManagementModel;
		
		if (count($pm->showotpost($request->session('id')))>0){
			$this->assign('myworkrecordlist',$pm->showotpost($request->session('id')));
		}else{
			$temp=array(array());
			$this->assign('myworkrecordlist',$temp);
		}
		
		
		return $this->fetch();
		
		
    }
	
	public function otpost(Request $request)
    {
		$pb = new PersonalBusinessModel;
		$pb->type = $request->param('type');
		$pb->businessname = $request->param('businessname');
		$pb->posterid = $request->session('id');
		$pb->receiverid = $request->param('receiverid');
		$pb->content = $request->param('content');
		$pb->submitinfo = json_encode(array(
			array('submiterid' => $request->session('id'),
			      'submit' => 1,
				  'content' => '提交申请',
				  'step' => 1,
				  'time' => date("Y-m-d H:i:s"))
		),JSON_UNESCAPED_UNICODE);
		$pb->step = 5;
		$pb->state = 'submit';
		$pb->sumbittime = date("Y-m-d H:i:s");
		
		 if($pb->save()){
           return '提交成功';
       }else{
           return '提交失败'.$pb->getError();
       }

		
    }
	
	
	public function otpostdelete(Request $request){
		
		$pb = new PersonalBusinessModel;
		
		$matter = PersonalBusinessModel::get($request->param('businessid'));
		
		if ($matter) {
			$matter->delete();
			return '删除事项成功';
		}else{
			return '删除事项失败';
		}
		
	}
	
	
}
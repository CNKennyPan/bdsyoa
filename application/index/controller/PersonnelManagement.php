<?php
namespace app\index\controller;

use think\Controller;
use think\Session;
use think\Request; 
use app\index\model\PersonalBusiness as PersonalBusinessModel;

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
		$pb->step = $request->param('step')-1;
		$pb->submitinfo = "";
		
		 if($pb->save()){
           return '提交成功';
       }else{
           return '提交失败'.$pb->getError();
       }

		
    }
	
	
	
}
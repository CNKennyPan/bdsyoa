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
		
		 if($pb->save()){
           return '提交成功';
       }else{
           return '提交失败'.$pb->getError();
       }

		
    }
	
	
	
}
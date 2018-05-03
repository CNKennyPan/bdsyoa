<?php
namespace app\index\controller;

use think\Controller;
use think\Session;
use think\Request; 
use think\Db;
use app\index\model\PersonalBusiness as PersonalBusinessModel;


//主函数
class PersonalBusiness extends Controller
{
    public function show(Request $request)
    {
		$pbm = new PersonalBusinessModel;
		$pbm->showbusiness($request->session('id'));
		
		if (count($pbm->myworkcontent)>0){
			$this->assign('myworklist',$pbm->myworkcontent);
		}else{
			$temp=array(array());
			$this->assign('myworklist',$temp);
		}
		
		
		if (count($pbm->myworkrecordcontent)>0){
			$this->assign('myworkrecordlist',$pbm->myworkrecordcontent);
		}else{
			$temp=array(array());
			$this->assign('myworkrecordlist',$temp);
		}
		
		
		//显示未读消息
		$this->assign('recordnumber',$pbm->recordnumber);
		$this->assign('matternumber',$pbm->matternumber);
	
		//return dump($pbm->myworkrecordcontent);
		return $this->fetch();
		
    }
	
	
	
	
}
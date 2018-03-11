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
		$this->assign('myworklist',$pbm->showbusiness($request->session('id')));
		return $this->fetch();
		
    }
	
	
	
}
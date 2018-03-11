<?php
namespace app\index\controller;

use think\Controller;
use think\Session;
use think\Request; 

//主函数
class PublicAdministration extends Controller
{
    public function show(Request $request)
    {
		return $this->fetch();
		
    }
	
	
	
}
<?php
namespace app\index\controller;

use think\Controller;
use think\Session;
use think\Request; 

//主函数
class Index extends Controller
{
    public function index(Request $request)
    {
		if(Session::has('name')){
			//重定向浏览器
			header("Location: /index/index/warning?warningmsg=已登录账号！&url=/index/index/workspace");
			//确保重定向后，后续代码不会被执行
			exit;	
		}else{
			$this->assign('name',$request->session('name'));
			$this->assign('department',$request->session('department'));
			$this->assign('cellphone',$request->session('cellphone'));
			return $this->fetch('index/login');
		}
    }
	
	public function register()
    {
        return $this->fetch();
    }
	
	public function workspace(Request $request)
    {
		if(Session::has('name')){
			$this->assign('id',$request->session('id'));
			$this->assign('name',$request->session('name'));
			$this->assign('department',$request->session('department'));
			$this->assign('position',$request->session('position'));
			$this->assign('cellphone',$request->session('cellphone'));
			$this->assign('jsfunction','showpersonalbusiness()');
			return $this->fetch();
		}else{
			//重定向浏览器
			header("Location: /index/index/warning?warningmsg=请先登录账号！");
			//确保重定向后，后续代码不会被执行
			exit;			
		}
    }
	
	public function warning($warningmsg = '系统出错！',$url = 'index')
    {
		$this->assign('warningmsg',$warningmsg);
		$this->assign('url',$url);
		return $this->fetch();
    }
	
}
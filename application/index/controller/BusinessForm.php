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
		$bfm = new BusinessFormModel($request->param('businessid'));
		
		
		
		switch($request->param('form'))
		{
			case "otform":
				$this->otform($request->param('businessid'),$request->param('method'),$request->session('position'));
				$this->assign('body','otform');
			break;
			default:
				$this->otform($request->param('businessid'),$request->param('method'),$request->session('position'));
		}
		
		switch($request->param('method'))
		{
			case "read":
				$this->assign('footer',$bfm->getfooter('read'));
			break;
			case "submit":
				$this->assign('footer',$bfm->getfooter('submit'));
			break;
			default:
				$this->assign('footer',$bfm->getfooter('read'));
		}
		
		return $this->fetch();
		
    }
	
	//private
	public function otform($businessid,$method,$position)
    {
		$bfm = new BusinessFormModel($businessid);
		$content = $bfm->getcontent();
		
		$i = 0;
		foreach($content as $value){
			$this->assign("input".$i,$value);
			$i = $i + 1 ;
		}
		
		switch($method)
		{
			case "read":
				$this->assign('submitinfo',$bfm->submitinfo);
				$this->assign('submit','');
			break;
			case "submit":
				$this->assign('submitinfo',$bfm->getsubmitinfo());
				$this->assign('submit',$bfm->getsubmit($position));
			break;
			default:
				$this->assign('submitinfo',$bfm->getsubmitinfo());
				$this->assign('submit','');
		}
	    
		
    }
	
	
	
	
}
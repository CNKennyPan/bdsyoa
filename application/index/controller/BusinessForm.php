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
		
		$this->assign('body',$this->otform($request->param('businessid')));
		
		switch($request->param('method'))
		{
			case "read":
				$this->assign('submitinfo',$bfm::submitinfo);
				$this->assign('submit','');
				$this->assign('footer',$bfm->getfooter('read'));
			break;
			case "submit":
				$this->assign('submitinfo',$bfm->getsubmitinfo());
				$this->assign('submit',$bfm->getsubmit());
				$this->assign('footer',$bfm->getfooter('submit'));
			break;
			default:
				$this->assign('submitinfo',$bfm->getsubmitinfo());
				$this->assign('submit','');
				$this->assign('footer',$bfm->getfooter('read'));
		}
		
		return $this->fetch();
		
    }
	
	//2018年3月12日待解决问题。Invalid argument supplied for foreach()
	// private function otform($businessid)
    // {
		// $bfm = new BusinessFormModel($businessid);
		// $content = $bfm->getcontent();
		
		// $i = 0;
		
		// foreach($content as $value){
			// $this->assign($i,$value);
			// $i = $i + 1 ;
		// }

		// return $this->display();
		
    // }
	
	
	
	
}
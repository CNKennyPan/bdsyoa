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

		$result = Db::query('select bdsy_personal_business.*,bdsy_user_info.name from bdsy_personal_business,bdsy_user_info where bdsy_personal_business.receiverid = "'.$request->session('id').'" and bdsy_personal_business.receiverid=bdsy_user_info.id');
		if (count($result)>0){
			$this->assign('myworklist',$result);
		}else{
			$result=array(array('type'=>'暂时未有业务','businessname'=>'','name'=>'','posttime'=>'','sumbittime'=>'','id'=>''));
			$this->assign('myworklist',$result);
		}
		
		
		return $this->fetch();
		
    }
	
	
	
}
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

		$resultA = Db::query('select bdsy_personal_business.*,bdsy_user_info.name from bdsy_personal_business,bdsy_user_info where bdsy_personal_business.receiverid = "'.$request->session('id').'" and bdsy_personal_business.receiverid=bdsy_user_info.id');
		if (count($resultA)>0){
			$this->assign('myworklist',$resultA);
		}else{
			$resultA=array(array('type'=>'暂时未有业务','businessname'=>'','name'=>'','posttime'=>'','sumbittime'=>'','id'=>''));
			$this->assign('myworklist',$resultA);
		}
		
		
		$resultB = Db::query('select bdsy_personal_business.*,bdsy_user_info.name from bdsy_personal_business,bdsy_user_info where bdsy_personal_business.posterid = "'.$request->session('id').'" and bdsy_personal_business.posterid=bdsy_user_info.id');
		if (count($resultB)>0){
			$this->assign('myworkrecordlist',$resultB);
		}else{
			$resultB=array(array('type'=>'暂时未有业务','businessname'=>'','name'=>'','posttime'=>'','sumbittime'=>'','id'=>''));
			$this->assign('myworkrecordlist',$resultB);
		}
		
		return $this->fetch();
		
    }
	
	
	
}
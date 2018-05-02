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

		$resultA = Db::query('select bdsy_personal_business.*,bdsy_user_info.name from bdsy_personal_business,bdsy_user_info where bdsy_personal_business.receiverid = "'.$request->session('id').'" and bdsy_personal_business.posterid=bdsy_user_info.id');
		if (count($resultA)>0){
			$this->assign('myworklist',$resultA);
		}else{
			$resultA=array(array());
			$this->assign('myworklist',$resultA);
		}
		
		
		//获取所有审批人
			$submiter = Db::query('select bdsy_personal_business.*,bdsy_user_info.name from bdsy_personal_business,bdsy_user_info where bdsy_personal_business.posterid=bdsy_user_info.id');
			$resultB = array();
			foreach($submiter as $value){
				$submitinfo = json_decode($value['submitinfo'],true);
				foreach($submitinfo as $infolist){
					if($infolist['submiterid']==$request->session('id')){
						$resultB[] =  $value;
					}
				}
			}
			//return dump($resultB);
			
		//$resultB = Db::query('select bdsy_personal_business.*,bdsy_user_info.name from bdsy_personal_business,bdsy_user_info where bdsy_personal_business.posterid = "'.$request->session('id').'" and bdsy_personal_business.posterid=bdsy_user_info.id');
		if (count($resultB)>0){
			$this->assign('myworkrecordlist',$resultB);
		}else{
			$resultB=array(array());
			$this->assign('myworkrecordlist',$resultB);
		}
		

		//消息已读检测
		$user = UserInfoModel::get($request->session('id'));
		$haveread = explode(',',$user->pmread);
		
		
		return $this->fetch();
		
    }
	
	
	
	
}
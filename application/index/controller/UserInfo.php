<?php
namespace app\index\controller;

use app\index\model\UserInfo as UserInfoModel;
use think\Request; 
use think\Session;
use think\Db;

class UserInfo
{
    public function login(Request $request)
    {
	   if($request->param('account') == null){
		   return '请输入账号';
	   }else if($request->param('userpassword') == null){
		   return '请输入密码';
	   }else{
			$account = $request->param('account');
			$password = $request->param('userpassword');
			$id = Db::query('select id from bdsy_user_info where account = "'.$account.'"');
			$userread = UserInfoModel::get($id[0]['id']);
			if ($userread != null) {
				if($userread->password == $password){
					Session::set('id',$userread->id);
					Session::set('account',$userread->account);
					Session::set('name',$userread->name);
					Session::set('cellphone',$userread->cellphone);
					Session::set('department',$userread->department);
					Session::set('position',$userread->position);
					Session::set('birthday',$userread->birthday);
					Session::set('permission',$userread->permission);
					return '登录成功';
				}else{
					return '密码输入错误';
				}
			}else{
				return '账号不存在';
			}	
	   }
	}
	
	public function logout(Request $request)
    {
		Session::delete('id');
		Session::delete('account');
		Session::delete('name');
		Session::delete('cellphone');
		Session::delete('department');
		Session::delete('position');
		Session::delete('birthday');
		Session::delete('permission');
		
		return '注销成功';
				
	}
	
	
	public function existTest(Request $request)
    {
	   if($request->param('account') == null){
		    return '请输入账号';
	   }else{
			$account = $request->param('account');
			$id = Db::query('select id from bdsy_user_info where account = "'.$account.'"');
			$userread = UserInfoModel::get($id[0]['id']);
			if ($userread != null) {
				return '已存在账号';
			}else{
				return '此账号可以注册';
			}
	   }		
	}
	

	public function register(Request $request)
    {
		
	   $user = new UserInfoModel;
	   $user->account = $request->param('account');
	   $user->password = $request->param('userpassword');
	   $user->name = $request->param('name');
	   $user->cellphone = $request->param('cellphone');
	   $user->department = $request->param('department');
	   $user->position = $request->param('position');
	   $user->birthday = $request->param('birthday');
	   
	   if($user->save()){
		   return '注册成功';
	   }else{
		   return '注册失败' . $user->getError();
	   }
	   
	}
	
	public function userList(Request $request)
    {
		
	   $result = Db::query('select id,name,position from bdsy_user_info WHERE department = "'.$request->param('department').'"');
	   if (count($result)>0){
		   //return dump($result);
		   return json_encode($result);
	   }else{
		   return "暂未有成员".$request->param('department');
	   }
	}
	
	public function departmentList()
    {
	   $result = Db::query('select distinct department from bdsy_user_info');
	   if (count($result)>0){
		   //return dump($result);
		   return json_encode($result);
	   }else{
		   return "暂未有部门";
	   }
	}
	
	public function getUserName($userid)
    {
	   $result = Db::query('select name from bdsy_user_info WHERE id="'.$userid.'"');
	   if (count($result)>0){
		   //return dump($result);
		   return $result[0]['name'];
	   }else{
		   return "没有该成员";
	   }
	}
	
}
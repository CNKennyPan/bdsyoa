<?php
namespace app\index\controller;

use think\Controller;
use think\Session;
use think\Request; 
use think\Db;
use app\index\controller\UserInfo as UserInfo;

//主函数
class PersonalBusiness extends Controller
{
    public function show(Request $request)
    {
		$userinfo = new UserInfo ;
		$result = Db::query('select * from bdsy_personal_business where receiverid = "'.$request->session('id').'"');
		
		if (count($result)>0){
			$myworklist='';
			foreach ($result as $value){
				//return dump($userinfo->getUserName($value['posterid']));
				$myworklist = $myworklist.'<tr>'.
				'<td>'.$value['type'].'</td>'.
				'<td>'.$value['businessname'].'</td>'.
				'<td>'.$userinfo->getUserName($value['posterid']).'</td>'.
				'<td>'.$value['posttime'].'</td>'.
				'<td>'.$value['sumbittime'].'</td>'.
				'<td>'.
				'<button type="button" class="btn btn-primary btn-xs" id="'.$value['id'].'" onclick = "showPBsubmit(this.id)">审批</button>&#12288'.
				'<button type="button" class="btn btn-danger btn-xs">退回</button>'.
				'</td></tr>';
			}
		}else{
			$myworklist='<tr><td colspan="5">暂时未有业务！</td></tr>';
		}
		$this->assign('myworklist',$myworklist);
		return $this->fetch();
		
    }
	
	public function showsubmit(Request $request)
    {
		$userinfo = new UserInfo ;
		$result = Db::query('select * from bdsy_personal_business where id = "'.$request->param('id').'"');
		
		if (count($result)>0){
			$myworklist='';
			foreach ($result as $value){
				//return dump($userinfo->getUserName($value['posterid']));
				$myworklist = $myworklist.'<tr>'.
				'<td>'.$value['type'].'</td>'.
				'<td>'.$value['businessname'].'</td>'.
				'<td>'.$userinfo->getUserName($value['posterid']).'</td>'.
				'<td>'.$value['posttime'].'</td>'.
				'<td>'.$value['sumbittime'].'</td>'.
				'<td>'.
				'<button type="button" class="btn btn-primary btn-xs" id="'.$value['id'].'" onclick = "showPBsubmit(this.id)">审批</button>&#12288'.
				'<button type="button" class="btn btn-danger btn-xs">退回</button>'.
				'</td></tr>';
			}
		}else{
			$myworklist='<tr><td colspan="5">暂时未有业务！</td></tr>';
		}
		$this->assign('myworklist',$myworklist);
		return $this->fetch();
		
    }
	
	
	
}
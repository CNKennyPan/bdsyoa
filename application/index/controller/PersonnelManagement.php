<?php
namespace app\index\controller;

use think\Controller;
use think\Session;
use think\Request; 
use app\index\model\PersonalBusiness as PersonalBusinessModel;
use think\Db;

//主函数
class PersonnelManagement extends Controller
{
    public function show(Request $request)
    {
		$this->assign('name',$request->session('name'));
		$this->assign('department',$request->session('department'));
		$this->assign('position',$request->session('position'));
		$this->assign('reason',"");
		$this->assign('dealwith',"");
		$this->assign('begintime',"");
		$this->assign('endtime',"");
		
		//$result = Db::table('bdsy_personal_business')->where('type','人事管理')->paginate(5);
		$result = Db::table('bdsy_personal_business business,bdsy_user_info user')->where('user.id = business.posterid')->paginate(3);
		
		//$result = Db::query('select bdsy_personal_business.*,bdsy_user_info.name from bdsy_personal_business,bdsy_user_info where bdsy_personal_business.type="人事管理"')->paginate(5);
		if (count($result)>0){
			$this->assign('myworkrecordlist',$result);
		}else{
			$result=array(array('type'=>'暂时未有业务','businessname'=>'','name'=>'','posttime'=>'','sumbittime'=>'','id'=>''));
			$this->assign('myworkrecordlist',$result);
		}
		
		return $this->fetch();
		
		
		
		return $this->fetch();
		
    }
	
	public function otpost(Request $request)
    {
		$pb = new PersonalBusinessModel;
		$pb->type = $request->param('type');
		$pb->businessname = $request->param('businessname');
		$pb->posterid = $request->session('id');
		$pb->receiverid = $request->param('receiverid');
		$pb->content = $request->param('content');
		$pb->submitinfo = json_encode(array(
			array('submiterid' => $request->session('id'),
			      'submit' => 1,
				  'content' => '提交申请',
				  'step' => 1,
				  'time' => date("Y-m-d H:i:s"))
		),JSON_UNESCAPED_UNICODE);
		$pb->step = 5;
		$pb->state = 'submit';
		
		
		 if($pb->save()){
           return '提交成功';
       }else{
           return '提交失败'.$pb->getError();
       }

		
    }
	
	
	
}
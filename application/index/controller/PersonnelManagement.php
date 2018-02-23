<?php
namespace app\index\controller;

use think\Controller;
use think\Session;
use think\Request; 
use app\index\model\PersonalBusiness as PersonalBusinessModel;

//主函数
class PersonnelManagement extends Controller
{
    public function show(Request $request)
    {
		$this->assign('department',$request->session('department'));
		$this->assign('name',$request->session('name'));
		$this->assign('position','');
		$this->assign('begintime','');
		$this->assign('endtime','');
		$this->assign('reason','');
		$this->assign('dealwith','');
		return $this->fetch();
		
    }
	
	public function otpost(Request $request)
    {
		$pb = new PersonalBusinessModel;
		$pb->type = $request->param('type');
		$pb->businessname = $request->param('businessname');
		$pb->posterid = $request->session('id');
		$pb->receiverid = $request->param('receiverid');
		
		//记录内容
		$id = array('申请人','部门','职位','开始时间','结束时间','加班原因','处理方式');
		$pb->content = $this->contentrecord($request->param('content'),$id);
		
		//记录流程
		
		switch ($request->session('position'))
		{
			case '部门专员':
			  $approval[poster] = '部门专员';
			break;
			case '部门主管':
				$approval[poster] = '部门主管';
			break;
			case '部门经理':
				$approval[poster] = '部门经理';
			break;
			case '副总经理':
				$approval[poster] = '副总经理';
			break;
			case '总经理':
				$approval[poster] = '总经理';
			break;
			default:
				$approval[poster] = '未知错误';
		}
		
		
		 if($pb->save()){
           return '提交成功';
       }else{
           return '提交失败'.$pb->getError();
       }
	  
	  
		
		
    }
	
	//内容记录，转换成json，添加键
	private function contentrecord($ct,$id)
	{
	    $content = json_encode($ct);
		$i = 0;
		foreach ($id as $value){
            $postcontent[$value] = $content[$i];
			$i = $i +1;
		}
		return json_encode($postcontent);
		
	}
	
	 //流程记录
	private function flowrecord($ct,$position)
	{
	    $content = json_encode($ct);
		$i = 0;
		foreach ($id as $value){
            $postcontent[$value] = $content[$i];
			$i = $i +1;
		}
		return json_encode($postcontent);
		
	}
	
	
}
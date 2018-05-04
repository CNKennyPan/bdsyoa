<?php
//在模型里单独设置数据库连接信息
namespace app\index\model;

use think\Model;
use think\Db;
use think\Request; 
use app\index\model\UserInfo as UserInfoModel;
use app\index\model\PersonalBusiness as PersonalBusinessModel;

class BusinessForm extends Model
{
	var $id = "";
	var $type = "";
	var $businessname = "";
	var $receiverid = "";
	var $posterid = "";
	var $content = "";
	var $posttime = "";
	var $sumbittime = "";
	var $step = "";
	var $nowstep = "";
	var $submitinfo = "";
	var $submitinfotemp = "";
	var $formtype = "";
	var $submit = "";
	var $footer = "";
	var $tip = '';
	
	public function __construct($businessid,$method,$submiterid){
		
		//获取审批人信息
		$userread = Db::query('select name,position from bdsy_user_info where id = "'.$submiterid.'"');
		
		//获取事项信息
		$result = Db::query('select * from bdsy_personal_business where id = "'.$businessid.'"');
		if (count($result)>0){
			
			$this->id = $result[0]['id'];
			$this->type = $result[0]['type'];
			$this->businessname = $result[0]['businessname'];
			$this->receiverid = $result[0]['receiverid'];
			$this->posterid = $result[0]['posterid'];
			$this->content = $result[0]['content'];
			$this->posttime = $result[0]['posttime'];
			$this->sumbittime = $result[0]['sumbittime'];
			$this->step = $result[0]['step'];
			$this->submitinfotemp = json_decode($result[0]['submitinfo'],true);
			$this->content = json_decode($this->content,true);
			$this->nowstep = count($this->submitinfotemp);
		
			
		//消息已读
		$pb = PersonalBusinessModel::get($businessid);
		$pb->haveread = $pb->haveread . $submiterid . ',';
		$pb->save();
		
		
		//表格类型
		switch($this->businessname)
		{
			case "加班申请单":
				$this->formtype="business_form/otform";
			break;
			default:
				$this->formtype="business_form/error";
		}
		
		//审批按钮
		switch ($method)  //submit   //read   
		{
			case "read":
				$this->footer = '<button type="button" class="btn btn-default" data-dismiss="modal">完成</button>';
			break;
			case "submit":
				if($this->nowstep==$this->step-1){
					$this->footer = '<button type="button" class="btn btn-success businessformsubmit" value="2'.$businessid.'" >&#8194备案&#8194</button>';
				}else{
					$this->footer = '<button type="button" class="btn btn-success businessformsubmit" value="1'.$businessid.'" >&#8194同意&#8194</button><button type="button" class="btn btn-danger businessformsubmit" value="0'.$businessid.'">不同意</button>';
				}
			break;
			default:
				$this->footer = '<button type="button" class="btn btn-default" data-dismiss="modal">完成</button>';
		}
		
		//获取历史审批信息
		foreach($this->submitinfotemp as $n){
			$this->tip[] = 'default';
			$feedback = $n['submit']!=0 ? 'ok' : 'remove';
			$olduserread = Db::query('select name,position from bdsy_user_info where id = "'.$n['submiterid'].'"');
			//$state = $n['step']==1 ? 'info' : ($this->step - $n['step'] == 0 ? 'info' : 'warning');

			$this->submitinfo = $this->submitinfo.'
				<div class="row">
					<div class="form-group col-lg-12 has-feedback">
						<span class="label label-default">'.$n['time'].'</span>
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">'.$olduserread[0]['position'].$olduserread[0]['name'].'：</span>
							<input type="text" class="form-control" placeholder="未有具体意见" value="'.$n['content'].'" aria-describedby="basic-addon1" readonly>
							<span class="glyphicon glyphicon-'.$feedback.' form-control-feedback"></span>
						</div>
					</div>
				</div>';
		}
		
		//获取步骤提示信息
		if(count($this->tip)<$this->step){
			$this->tip[]='primary';
		}
		while(count($this->tip)<$this->step)
		{
			$this->tip[]='default';
		}

		
		//获取审批栏
		switch ($userread[0]['position'])
		{
			case "部门专员":
				$submiter = '一般审批';
			break;
			case "部门主管":
				$submiter = '主管审批';
			break;
			case "部门经理":
				$submiter = '经理审批';
			break;
			case "副总经理":
				$submiter = '副总审批';
			break;
			case "总经理":
				$submiter = '总经理审批';
			break;
			default:
				$submiter = '一般审批';
		}
		
		if($this->nowstep==$this->step-1){
			$i = '备案';
			//$s = 'info';
		}else{
			$i = '审批';
			//$s = 'warning';
		}
		
		$this->submit = '
				<div class="row">
					<div class="form-group col-lg-12">
						<span class="label label-default">请输入'.$i.'意见</span>
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">'.$userread[0]['position'].$userread[0]['name'].'：</span>
							<input type="text" class="form-control" id="businessformsubmitcontent" placeholder="请输入'.$i.'意见" value="" aria-describedby="basic-addon1">
						</div>
					</div>
				</div>';
				
		
		}
				
		
	}
	
	

	
	
	
}
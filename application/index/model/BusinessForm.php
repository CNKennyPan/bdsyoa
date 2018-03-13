<?php
//在模型里单独设置数据库连接信息
namespace app\index\model;

use think\Model;
use think\Db;
use think\Request; 


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
	var $submitinfo = "";
	var $formtype = "";
	var $submit = "";
	var $footer = "";
	
	public function __construct($businessid,$method,$submiterid){
		
		//获取审批人信息
		$userread = Db::query('select * from bdsy_user_info where id = "'.$submiterid.'"');
		
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
			$this->submitinfo = $result[0]['submitinfo'];
			$this->content = json_decode($this->content,true);
		}
		
		//表格类型
		switch($this->businessname)
		{
			case "加班申请单":
				$this->formtype="business_form/otform";
			break;
			default:
				$this->formtype="business_form/otform";
		}
		
		//审批按钮
		switch ($method)  //submit   //read   
		{
			case "read":
				$this->footer = '<button type="button" class="btn btn-info" data-dismiss="modal">完成</button>';
			break;
			case "submit":
				$this->footer = '<button type="button" class="btn btn-success businessformsubmit" data-dismiss="modal" value="1'.$businessid.'" >&#8194同意&#8194</button><button type="button" class="btn btn-warning businessformsubmit" data-dismiss="modal" value="0'.$businessid.'">不同意</button>';
			break;
			default:
				$this->footer = '<button type="button" class="btn btn-info" data-dismiss="modal">完成</button>';
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
		
		
		$number = count($this->content)+1;
		$this->submit = '
				<div class="row">
					<div class="form-group col-lg-12">
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">'.$userread[0]['position'].$userread[0]['name'].'审批意见</span>
							<input type="text" class="form-control" id="businessformsubmitcontent" placeholder="请输入审批意见" value="" aria-describedby="basic-addon1">
						</div>
					</div>
				</div>';
				
		
	}
	
	
	// <div class="form-group has-success has-feedback">
							// <label class="control-label" for="otforminput'.$number.'">'.$userread[0]['position'].'&#12288'.$userread[0]['name'].'&#12288审批</label>
							// <input type="text" class="form-control" id="otforminput'.$number.'" readonly>
							// <span class="glyphicon glyphicon-ok form-control-feedback"></span>
						// </div>
	

	
	
	
}
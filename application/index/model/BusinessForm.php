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
	
	var $submit = "";
	
	var $footer = "";
	
	public function __construct($businessid){
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
	}
	
	public function getcontent(){
		return $this->content;
	}
	
	public function getsubmitinfo(){
		return $this->submitinfo;
	}
	
	
	public function getsubmit($position){
		//审批栏
		$submiter = "";
		
		switch ($position)
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
		$submit = '<div class="row">
					<div class="form-group col-lg-12">
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">'.$submiter.'</span>
							<input type="text" class="form-control" id="otforminput'.$number.'" placeholder="请输入审批意见" value="" aria-describedby="basic-addon1">
						</div>
					</div>
				</div>';
				
		return $submit;
	}
	
	public function getfooter($type){  //submit   //read   
		switch ($type)
		{
			case "nomal":
				$footer = '<button type="button" class="btn btn-info" data-dismiss="modal">完成</button>';
			break;
			case "submit":
				$footer = '<button type="button" class="btn btn-success" data-dismiss="modal">&#8194同意&#8194</button><button type="button" class="btn btn-warning" data-dismiss="modal">不同意</button>';
			break;
			default:
				$footer = '<button type="button" class="btn btn-info" data-dismiss="modal">完成</button>';
		}
		return $footer;
		
	}
	
	
}
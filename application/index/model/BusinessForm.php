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
			
			$id = $result[0]['id'];
			$type = $result[0]['type'];
			$businessname = $result[0]['businessname'];
			$receiverid = $result[0]['receiverid'];
			$posterid = $result[0]['posterid'];
			$content = $result[0]['content'];
			$posttime = $result[0]['posttime'];
			$sumbittime = $result[0]['sumbittime'];
			$step = $result[0]['step'];
			$submitinfo = $result[0]['submitinfo'];
			$content = json_decode($content);
		}
	}
	
	public function getcontent(){
		return $this->content;
	}
	
	public function getsubmitinfo(){
		return $this->submitinfo;
	}
	
	
	public function getsubmit(){
		//审批栏
		$submiter = "";
		
		switch ($request->session('position'))
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
		
		
		$content = json_decode($content, true);
		$number = count($content)+1;
		$submit = '<div class="row">
					<div class="form-group col-lg-12">
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">'.$submiter.'</span>
							<input type="text" class="form-control" id="otforminput'.$number.'" placeholder="请输入审批意见" value="{$reason}" aria-describedby="basic-addon1">
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
				$footer = '<button type="button" class="btn btn-success" data-dismiss="modal">同意</button>';
				$footer = '<button type="button" class="btn btn-danger" data-dismiss="modal">不同意</button>';
			break;
			default:
				$footer = '<button type="button" class="btn btn-info" data-dismiss="modal">完成</button>';
		}
		return $footer;
		
	}
	
	
}
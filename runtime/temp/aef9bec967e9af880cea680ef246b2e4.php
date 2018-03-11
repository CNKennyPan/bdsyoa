<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:80:"C:\wamp64\bdsyoa\public/../application/index\view\personnel_management\show.html";i:1518076723;}*/ ?>
<div>
  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#otpostform" aria-controls="otpostform" role="tab" data-toggle="tab">加班申请</a></li>
    <li role="presentation"><a href="#eatsituation" aria-controls="eatsituation" role="tab" data-toggle="tab">请假申请</a></li>
	<li role="presentation"><a href="#eatsituation" aria-controls="eatsituation" role="tab" data-toggle="tab">转正申请</a></li>
	<li role="presentation"><a href="#eatsituation" aria-controls="eatsituation" role="tab" data-toggle="tab">薪酬调整</a></li>
	<!-- 备用
    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
	 -->
  </ul>

  <!-- Tab panes -->
  <div class="tab-content" style="margin:10px">
    <div role="tabpanel" class="tab-pane active" id="otpostform">
		<div class="panel panel-default" >
			<div class="panel-heading text-center"><h3>加班申请单</h3></div>
			<div class="panel-body" style="padding:10px">
				<div class="row">
					<div class="form-group col-lg-4">
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">申&#8194请&#8194人</span>
							<input type="text" class="form-control" placeholder="请输入申请人姓名" aria-describedby="basic-addon1">
						</div>
					</div>
					<div class="form-group col-lg-4">
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">工&#12288&#12288号</span>
							<input type="text" class="form-control" placeholder="请输入申请人工号" aria-describedby="basic-addon1">
						</div>
					</div>
					<div class="form-group col-lg-4">
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">职&#12288&#12288位</span>
							<input type="text" class="form-control" placeholder="请输入申请人职位" aria-describedby="basic-addon1">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="form-group col-lg-4">
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">所属部门</span>
							<input type="text" class="form-control" placeholder="请输入部门名称" aria-describedby="basic-addon1">
						</div>
					</div>
					<div class="form-group col-lg-4">
							<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">开始时间</span>
							<input type="text" class="form-control" placeholder="请选择加班开始时间" aria-describedby="basic-addon1">
						</div>
					</div>
					<div class="form-group col-lg-4">
							<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">结束时间</span>
							<input type="text" class="form-control" placeholder="请选择加班结束时间" aria-describedby="basic-addon1">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="form-group col-lg-12">
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">加班原因</span>
							<input type="text" class="form-control" placeholder="请输入加班原因" aria-describedby="basic-addon1">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="form-group col-lg-4">
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">处理方式</span>
							<input type="text" class="form-control" placeholder="请选择加班处理方式" aria-describedby="basic-addon1">
						</div>
					</div>
					<div class="form-group col-lg-4">
					<input type="radio" name="inlineRadioOptions" id="inlineRadio1"  value="option1"><span>调休</span>
					</div>
					<div class="form-group col-lg-4">
					<input type="radio" name="inlineRadioOptions" id="inlineRadio2"  value="option2"><span>计加班费</span>
					</div>
				</div>
				<div class="row">
					<div class="form-group col-lg-12">
					<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">负责人审批</span>
							<input type="text" class="form-control" placeholder="请负责人填写意见" aria-describedby="basic-addon1">
					</div>
					</div>
				</div>
				<div class="row">
					<div class="form-group col-lg-12">
					<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">总经理审批</span>
							<input type="text" class="form-control" placeholder="请总经理填写意见" aria-describedby="basic-addon1">
					</div>
					</div>
				</div>
				<div class="row text-center">
					<button type="submit" class="btn btn-primary " onclick="selectuser.showdepartmentlist('otpost')">提交申请</button>
				</div>
			</div>
		</div>
		<div class="panel panel-default">
			<div class="panel-heading text-center"><h3>审批流程</h3></div>
			<div class="panel-body">
			<button type="button" class="btn btn-info">申请人递交</button>-->
			<button type="button" class="btn btn-warning">部门负责人审批</button>-->
			<button type="button" class="btn btn-warning">综合部初审</button>-->
			<button type="button" class="btn btn-warning">总经理审批</button>-->
			<button type="button" class="btn btn-success">综合部备案</button>
		</div></div>

		
	</div>
    <div role="tabpanel" class="tab-pane" id="eatsituation">
	
	</div>
	<!-- 备用
    <div role="tabpanel" class="tab-pane" id="messages">...</div>
    <div role="tabpanel" class="tab-pane" id="settings">...</div>
	 -->
  </div>

</div>
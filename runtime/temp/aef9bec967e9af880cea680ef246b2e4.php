<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:80:"C:\wamp64\bdsyoa\public/../application/index\view\personnel_management\show.html";i:1520762319;s:76:"C:\wamp64\bdsyoa\application\index\view\personnel_management\otpostform.html";i:1520764210;}*/ ?>
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
							<input type="text" class="form-control" id="otforminput0" placeholder="请输入申请人姓名" value="<?php echo $name; ?>" aria-describedby="basic-addon1" readonly>
						</div>
					</div>
					<div class="form-group col-lg-4">
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">所属部门</span>
							<input type="text" class="form-control" id="otforminput1" placeholder="请输入部门名称" value="<?php echo $department; ?>" aria-describedby="basic-addon1" readonly>
						</div>
					</div>
					<div class="form-group col-lg-4">
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">职&#12288&#12288位</span>
							<input type="text" class="form-control" id="otforminput2" placeholder="请输入申请人职位" value="<?php echo $position; ?>" aria-describedby="basic-addon1" readonly>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="form-group col-lg-6">
							<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">开始时间</span>
							<input type="text" class="form-control " id="otforminput3" placeholder="请选择加班开始时间" aria-describedby="basic-addon1" value="<?php echo $begintime; ?>"  readonly>
							<span class="input-group-addon"><span class="glyphicon glyphicon-calendar form_date" data-link-field="otforminput3" data-link-format="yyyy-mm-dd hh:ii"></span></span>
						</div>
					</div>
					<div class="form-group col-lg-6">
							<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">结束时间</span>
							<input type="text" class="form-control " id="otforminput4" placeholder="请选择加班结束时间" aria-describedby="basic-addon1" value="<?php echo $endtime; ?>" readonly>
							<span class="input-group-addon"><span class="glyphicon glyphicon-calendar form_date" data-link-field="otforminput4" data-link-format="yyyy-mm-dd hh:ii"></span></span>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="form-group col-lg-12">
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">加班原因</span>
							<input type="text" class="form-control" id="otforminput5" placeholder="请输入加班原因" value="<?php echo $reason; ?>" aria-describedby="basic-addon1">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="form-group col-lg-4">
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">处理方式</span>
							<input type="text" class="form-control" id="otforminput6" placeholder="请选择加班处理方式" value="<?php echo $dealwith; ?>" aria-describedby="basic-addon1" readonly>
						</div>
					</div>
					<div class="form-group col-lg-4" style="margin-bottom:0px;padding-top:6px;">
						<input type="radio" name="inlineRadioOptions" id="otformradio1"  value="调休"><span style="margin-left:10px;margin-top:5px">调休</span>
					</div>
					<div class="form-group col-lg-4" style="margin-bottom:0px;padding-top:6px;">
					<input type="radio" name="inlineRadioOptions" id="otformradio2"  value="计加班费"><span style="margin-left:10px;margin-top:5px">计加班费</span>
					</div>
				</div>
				<!-- <div class="row"> -->
					<!-- <div class="form-group col-lg-12"> -->
					<!-- <div class="input-group"> -->
							<!-- <span class="input-group-addon" id="basic-addon1">负责人审批</span> -->
							<!-- <input type="text" class="form-control" placeholder="请负责人填写意见" aria-describedby="basic-addon1"> -->
					<!-- </div> -->
					<!-- </div> -->
				<!-- </div> -->
				<!-- <div class="row"> -->
					<!-- <div class="form-group col-lg-12"> -->
					<!-- <div class="input-group"> -->
							<!-- <span class="input-group-addon" id="basic-addon1">总经理审批</span> -->
							<!-- <input type="text" class="form-control" placeholder="请总经理填写意见" aria-describedby="basic-addon1"> -->
					<!-- </div> -->
					<!-- </div> -->
				<!-- </div> -->
				<div class="row text-center">
					<button type="submit" class="btn btn-primary " onclick="selectuser.showdepartmentlist('otpost')">提交申请</button>
				</div>
			</div>
		</div>
		
		
<!-- 包括datetimepicker插件 -->
<script type="text/javascript" src="/static/js/bootstrap-datetimepicker.min.js" charset="UTF-8"></script>
<script type="text/javascript" src="/static/js/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
<link href="/static/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">
<script type="text/javascript">
	$('.form_date').datetimepicker({
		format: 'yyyy-mm-dd hh:ii',
        weekStart: 1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 0,
		forceParse: 0,
		language: 'zh-CN',
		minuteStep:30,
		pickerPosition: 'top-right'
    });
</script>

<!-- 包括iCheck插件 -->
<link href="/static/css/square/grey.css" rel="stylesheet">
<script type="text/javascript" src="/static/js/icheck.min.js" charset="UTF-8"></script>
<script>
$(document).ready(function(){
  $('input').iCheck({
    checkboxClass: 'icheckbox_square-grey',
    radioClass: 'iradio_square-grey',
    increaseArea: '20%' // optional
  });
});
</script>

<!-- 获取单选值 -->
<script>
$('input').on('ifChecked', function(event){
  $('#otforminput6').val($('#'+this.id).val());
});

</script>
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
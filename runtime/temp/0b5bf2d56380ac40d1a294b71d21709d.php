<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:70:"C:\wamp64\bdsyoa\public/../application/index\view\index\workspace.html";i:1518081137;s:55:"C:\wamp64\bdsyoa\application\index\view\index\head.html";i:1518150717;s:55:"C:\wamp64\bdsyoa\application\index\view\index\foot.html";i:1517221364;}*/ ?>
<!DOCTYPE html>
<head>
      <title>北大数研OA</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <!-- 引入 Bootstrap -->
      <link href='/static/css/bootstrap.min.css' rel='stylesheet'>
	  <link rel="stylesheet" href="/static/css/font-awesome.min.css">
      <!--[if IE 7]>
      <link rel="stylesheet" href="assets/css/font-awesome-ie7.min.css">
      <![endif]-->
      <!-- HTML5 Shim 和 Respond.js 用于让 IE8 支持 HTML5元素和媒体查询 -->
      <!-- 注意： 如果通过 file://  引入 Respond.js 文件，则该文件无法起效果 -->
      <!--[if lt IE 9]>
         <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
         <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
      <![endif]-->
	  <!-- jQuery (Bootstrap 的 JavaScript 插件需要引入 jQuery) -->
      <script src='/static/js/jquery.js'></script>
      <!-- 包括所有已编译的插件 -->
      <script src='/static/js/bootstrap.min.js'></script>
	  <script language="JavaScript" src="/static/js/loginfunction.js"></script>
	  <style>
	  th,td{
	  text-align:center;
	  } 
	  </style>
	  
   </head>
   
   <!--导航栏-->
<nav class="navbar navbar-default navbar-inverse" id="indexnavbar">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-index-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a style="padding:0px" class="navbar-brand" href="<?php echo url('index'); ?>"><img src="/static/image/logo.png"></a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-index-navbar-collapse-1">
      <!-- <ul class="nav navbar-nav"> -->
        <!-- <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li> -->
        <!-- <li><a href="#">Link</a></li> -->
        <!-- <li class="dropdown"> -->
          <!-- <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a> -->
          <!-- <ul class="dropdown-menu"> -->
            <!-- <li><a href="#">Action</a></li> -->
            <!-- <li><a href="#">Another action</a></li> -->
            <!-- <li><a href="#">Something else here</a></li> -->
            <!-- <li role="separator" class="divider"></li> -->
            <!-- <li><a href="#">Separated link</a></li> -->
            <!-- <li role="separator" class="divider"></li> -->
            <!-- <li><a href="#">One more separated link</a></li> -->
          <!-- </ul> -->
        <!-- </li> -->
      <!-- </ul> -->
      <!-- <form class="navbar-form navbar-left"> -->
        <!-- <div class="form-group"> -->
          <!-- <input type="text" class="form-control" placeholder="Search"> -->
        <!-- </div> -->
        <!-- <button type="submit" class="btn btn-default">Submit</button> -->
      <!-- </form> -->
      <!-- <ul class="nav navbar-nav navbar-right"> -->
        <!-- <li><a href="#">Link</a></li> -->
        <!-- <li class="dropdown"> -->
          <!-- <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a> -->
          <!-- <ul class="dropdown-menu"> -->
            <!-- <li><a href="#">Action</a></li> -->
            <!-- <li><a href="#">Another action</a></li> -->
            <!-- <li><a href="#">Something else here</a></li> -->
            <!-- <li role="separator" class="divider"></li> -->
            <!-- <li><a href="#">Separated link</a></li> -->
          <!-- </ul> -->
        <!-- </li> -->
      <!-- </ul> -->
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
	
	

<!-- 小消息 -->
<div class="modal fade" id="smallmodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-dialog modal-sm" role="document">
<div class="modal-content">
<div class="modal-header">
<h4 class="modal-title" id="myModalLabel">系统消息</h4>
</div>
<div id="smallmessage" class="modal-body">
</div>
<div class="modal-footer" id="myModalfooter">
<a type="button" id="smallmodalsubmit" class="btn btn-primary" data-dismiss="modal">确认</a>
<!-- <button type="button" class="btn btn-primary">Save changes</button> -->
</div>
</div>
</div></div>


<!-- 框架 -->
<div class="container-fluid">
<script language="JavaScript" src="/static/js/workspacefunction.js"></script>
<div class="row clearfix">
<div class="col-lg-3 column">
<div class="panel panel-primary">
  <div class="panel-heading">
    <h3 class="panel-title">用户信息</h3>
  </div>
  <div class="panel-body">

	<div style="margin:20px" class="text-center" style="width:100%">
	<i class="icon-user icon-4x icon-border"></i>
	</div>
	<div>
	<hr>
	<p>工号：<?php echo $id; ?></p>
    <p>姓名：<?php echo $name; ?></p>
	<p>部门：<?php echo $department; ?></p>
	<p>职位：<?php echo $position; ?></p>
	<p>电话：<?php echo $cellphone; ?></p>
	<hr>
	</div>
	<div class="text-center"><button type="button" class="btn btn-danger" onclick="registerjs.logout()">退出系统</button></div>
  </div>
</div>
<div class="list-group">
  <button id="personalbusiness" type="button" class="list-group-item leftmenu active" onclick="changemenu(this.id)">个人事项</button>
  <button id="eateveryday" type="button" class="list-group-item leftmenu " onclick="changemenu(this.id)">每日报餐</button>
  <button id="personnelmanagement" type="button" class="list-group-item leftmenu" onclick="changemenu(this.id)">人事管理</button>
  <button id="publicadministration" type="button" class="list-group-item leftmenu" onclick="changemenu(this.id)">行政管理</button>
  <button id="propagateneedmenu" type="button" class="list-group-item leftmenu" onclick="changemenu(this.id)">推广需求</button>
  <button id="purchaseapplymenu" type="button" class="list-group-item leftmenu" onclick="changemenu(this.id)">采购申请</button>
  <button id="salesrecordmenu" type="button" class="list-group-item leftmenu" onclick="changemenu(this.id)">销售记录</button>
</div>

</div>
<div class="col-lg-9 column">
	<div id="mainworkspace">
	</div>
</div>
</div>

<script>
<?php echo $jsfunction; ?>
</script>
<!--框架结尾-->
</div>

<!--底线-->
<div class="row clearfix">
<div class="col-md-12 column text-center" style="background-color:#000000;color:#FFFFFF">
<div>我也是有底线的</div>
</div>
</div>


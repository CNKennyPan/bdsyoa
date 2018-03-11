<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:77:"C:\wamp64\bdsyoa\public/../application/index\view\personal_business\show.html";i:1518149113;}*/ ?>
<div>
  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#mywork" aria-controls="mywork" role="tab" data-toggle="tab">我的业务</a></li>
	<li role="presentation"><a href="#mynews" aria-controls="mynews" role="tab" data-toggle="tab">消息通知</a></li>
	<!-- 备用
    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
	 -->
  </ul>

  <!-- Tab panes -->
  <div class="tab-content" style="margin:10px">
    <div role="tabpanel" class="tab-pane active" id="mywork">
		<table class="table table-striped">
			<caption class="text-center"><h3>业务列表</h3></caption>
			<tr><th>业务类型</th><th>业务名称</th><th>申请人</th><th>接收时间</th><th>最近步骤变更时间</th><th>操作</th></tr>
			<?php echo $myworklist; ?>
		</table>
	</div>
    <div role="tabpanel" class="tab-pane" id="mynews">
	
	</div>
	<!-- 备用
    <div role="tabpanel" class="tab-pane" id="messages">...</div>
    <div role="tabpanel" class="tab-pane" id="settings">...</div>
	 -->
  </div>

</div>


//注册类
var registerjs = {
    nulltest : true,
	errorpass : new Array(),
	pass: true,
	errormsg : "",
	

//登录监测
login:function(){
	
	if($("#loginforminput0").val() == "" || $("#loginforminput0").val() == null){
		alert("请输入账号！");
	}else if($("#loginforminput1").val() == "" || $("#loginforminput1").val() == null){
		alert("请输入密码！");
	}else{
	//alert('提交申请');
	$.post("/index/user_info/login",
    {
        account:$("#loginforminput0").val(),
		userpassword:$("#loginforminput1").val()
    },
	function(data,status){
		//alert(data);
		if(data=="登录成功"){
			$("#smallmessage").text("登录成功!点击下方确认跳转到工作界面！");
			$("#smallmodal").modal('show');
			//还原
			$('#smallmodal').on('hidden.bs.modal', function (e) {
				$("#smallmessage").text(""); 
				window.location.href='/index/index/workspace';
			});
		}else if(data=="密码输入错误"){
			$("#smallmessage").text("密码输入错误!请重新输入！");
			$("#smallmodal").modal('show');
			//还原
			$('#smallmodal').on('hidden.bs.modal', function (e) {
				$("#smallmessage").text(""); 
			});
		}else if(data=="账号不存在"){
			$("#smallmessage").text("账号不存在!请重新输入！");
			$("#smallmodal").modal('show');
			//还原
			$('#smallmodal').on('hidden.bs.modal', function (e) {
				$("#smallmessage").text(""); 
			});
		}else{
			$("#smallmessage").text("系统出错！");
			$("#smallmodal").modal('show');
			//还原
			$('#smallmodal').on('hidden.bs.modal', function (e) {
				$("#smallmessage").text(""); 
			});
		}
    });
	
	}
},

//检测是否已经存在用户
existTest:function(){
	$.post("/index/user_info/existTest",
    {
        account:$("#registerforminput0").val()
    },
	function(data,status){
		if(data=="已存在账号"){
			$("#registerformhelpBlock0").text("已存在账号，请输入别的账号！");
			$("#registerformstate0").removeClass('form-group has-success');
			$("#registerformstate0").addClass("form-group has-error");
			registerjs.errorpass[0] = false;
		}else if(data=="此账号可以注册"){
			$("#registerformhelpBlock0").text("此账号可以注册！");
			$("#registerformstate0").removeClass('form-group has-error');
			$("#registerformstate0").addClass('form-group has-success');
			registerjs.errorpass[0] = true;
		}else if(data=="请输入账号"){
			$("#registerformhelpBlock0").text("请输入账号！");
			$("#registerformstate0").removeClass('form-group has-success');
			$("#registerformstate0").addClass('form-group has-error');
			registerjs.errorpass[0] = false;
		}
    });
},


//注销登录
logout:function(){
	$.post("/index/user_info/logout",
    {},
	function(data,status){
		if(data=="注销成功"){
			$("#smallmessage").text("注销成功！点击下方确定键返回主页！");
			$("#smallmodal").modal('show');
			//还原
			$('#smallmodal').on('hidden.bs.modal', function (e) {
				$("#smallmessage").text(""); 
				window.location.href='/';
			});
		}else{
			$("#smallmessage").text("注销失败！请重试！");
			$("#smallmodal").modal('show');
			//还原
			$('#smallmodal').on('hidden.bs.modal', function (e) {
				$("#smallmessage").text(""); 
			});
		}
    });
},


//检测密码强度
passwordComplexTest:function(){
	var userpassword = $("#registerforminput1").val();
	var isnum = /^\d+$/.test(userpassword);
	var isletter = /^[a-zA-Z]+$/.test(userpassword);
	var isValid = /^\w+$/.test(userpassword);
	
	if(isnum == true || isletter == true){
		$("#registerformhelpBlock1").text("当前密码强度较弱！");
		$("#registerformstate1").removeClass('form-group has-success');
		$("#registerformstate1").removeClass('form-group has-error');
		$("#registerformstate1").addClass('form-group has-warning');
		registerjs.errorpass[1] = true;
	}else if(isValid == true){
		$("#registerformhelpBlock1").text("当前密码强度较强！");
		$("#registerformstate1").removeClass('form-group has-warning');
		$("#registerformstate1").removeClass('form-group has-error');
		$("#registerformstate1").addClass('form-group has-success');
		registerjs.errorpass[1] = true;
	}else{
		$("#registerformhelpBlock1").text("请输入数字、英文和下划线组合的密码！");
		$("#registerformstate1").removeClass('form-group has-warning');
		$("#registerformstate1").removeClass('form-group has-success');
		$("#registerformstate1").addClass('form-group has-error');
		registerjs.errorpass[1] = false;
	}
},



//检测密码是否一致
passwordRepeatTest:function(){
	if($("#registerforminput1").val() != $("#registerforminput2").val()){
		$("#registerformhelpBlock2").text("两次密码输入不一致，请重新输入！");
		$("#registerformstate2").removeClass('form-group has-success');
		$("#registerformstate2").addClass('form-group has-error');
		registerjs.errorpass[2] = false;
	}else{
		$("#registerformhelpBlock2").text("两次密码输入一致！");
		$("#registerformstate2").removeClass('form-group has-error');
		$("#registerformstate2").addClass('form-group has-success');
		registerjs.errorpass[2] = true;
	}
},


//提交注册信息
postRegisterInfo:function(){
	
	//监测是否有空值
	for (var i=0; i<=7; i++) { 
		if($("#registerforminput"+i).val() == null || $("#registerforminput"+i).val() == ""  ){
			//alert("#registerforminput"+i);
			registerjs.errorpass[3] = false ;
		}else{
			registerjs.errorpass[3] = true ;
		}
	}
	if(registerjs.errorpass[3] == false){
			registerjs.errormsg = registerjs.errormsg + '请填写完整信息！';
	}

	//添加提示信息
	for(var i=0; i<=3; i++){
		//alert(registerjs.errormsg);
		if(registerjs.errorpass[i] == false){
			registerjs.pass = false;
			if(i!=3){
				registerjs.errormsg = registerjs.errormsg + $("#registerformhelpBlock" + i).text();
			}
		}
	}
	
	//最后监测是否通过
	if(registerjs.pass != true){
		alert(registerjs.errormsg);
		registerjs.errormsg = "";
		registerjs.pass = true;
	}else if(registerjs.pass == true){
		//alert('检测通过');
	$.post("/index/user_info/register",
    {
        account:$("#registerforminput0").val(),
		userpassword:$("#registerforminput2").val(),
		name:$("#registerforminput3").val(),
		cellphone:$("#registerforminput4").val(),
		department:$("#registerforminput5").val(),
		position:$("#registerforminput6").val(),
		birthday:$("#registerforminput7").val()
    },
	function(data,status){
		if(data == "注册成功"){
			$("#smallmessage").text("注册成功!");
			$("#smallmodal").modal('show');
			//还原
			$('#smallmodal').on('hidden.bs.modal', function (e) {
				$("#smallmessage").text(""); 
				window.location.href='/';
			});
		}else{
			$("#smallmessage").text("注册失败，请重试!"+data);
			$("#smallmodal").modal('show');
			$('#smallmodal').on('hidden.bs.modal', function (e) {
				$("#smallmessage").text("");
			});
		}
    });
	}
}

};


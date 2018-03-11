
//工作栏左侧列表切换
function changemenu(id){
	$(".leftmenu").removeClass("active");
	$("#"+id).addClass("active");
	targetfunction('show'+id,'');
}


//动态调用函数
function targetfunction(funcName,parameter){
	if(typeof(eval(funcName)) == "function"){
		//alert(parameter);
		var s = eval(funcName+"("+parameter+");");
	}else{
		alert('函数不存在！');
	}

}

//显示个人业务
function showpersonalbusiness(){
	$.post("/index/personal_business/show",
    {},
	function(data,status){
		$('#mainworkspace').html(data);
    });
}


//显示人资管理系统
function showpersonnelmanagement(){
	$.post("/index/personnel_management/show",
    {},
	function(data,status){
		$('#mainworkspace').html(data);
    });
}


//显示行政管理系统
function showpublicadministration(){
	$.post("/index/public_administration/show",
    {},
	function(data,status){
		$('#mainworkspace').html(data);
    });
}


//选择成员
var selectuser = {
	postsumbit:0,
    postmethodname:'',
	postval:'',
	showdepartmentlist:function(postmethodname){
		selectuser.postmethodname = postmethodname
		$.post("/index/user_info/departmentList",
    {},
	function(data,status){
		var ul = JSON.parse(data);
		//$("#mainworkspace").html(data)
		var uls = '<select class="form-control" id="smallselectdepartment" onchange="selectuser.showuserlist(this.value)"><option>请选择部门</option>';
		var ulv = '';
		for (l in ul) 
		{	
		uls = uls + '<option>' + ul[l].department + '</option>'; 
		}
		uls = uls + '</select>';
		$("#smallmessage").html("<p>请选择部门！</p><p>"+uls+"</p>");
		$('#myModalLabel').text('请选择下一步接收人');
		$("#myModalfooter").html('<a type="button" id="smallmodalcencel" class="btn btn-default" data-dismiss="modal" >取消</a>');
		$("#smallmodal").modal('show');
		$('#smallmodal').on('hidden.bs.modal', function (e) {
			if(selectuser.postsumbit==0){
				$("#myModalfooter").html('<a type="button" id="smallmodalsubmit" class="btn btn-primary" data-dismiss="modal">确认</a>');
			$("#smallmessage").html(""); 
			$('#myModalLabel').text('系统消息');
			//alert('第一步');
			}
		});
		});
	},
	
	showuserlist:function(val){
		if(val=='请选择部门'){
		$('#smallselectuser').empty();
		$('#smallmodalsubmit').remove()
	}else{
	$.post("/index/user_info/userList",
    {
		department:val
	},
	function(data,status){
		var ul = JSON.parse(data);
		//$("#mainworkspace").html(data);
		// alert(data);
		var uls = '';
		var ulv = '';
		for (l in ul) 
		{	
		uls = uls + '<option>（' + ul[l].id + '）' + ul[l].name + '</option>'; 
		}
	if(document.getElementById("smallselectuser"))
	{
	// 存在
		$('#smallselectuser').html(uls);
	}else{
	// 不存在
		uls = '<select class="form-control" id="smallselectuser">' + uls + '</select>';
		$("#smallmessage").append("<p>请选择成员！</p><p>"+uls+"</p>");
		$("#myModalfooter").prepend('<a type="button" id="smallmodalsubmit" class="btn btn-primary" data-dismiss="modal" onclick="selectuser.postsumbit=1;">确认</a>');
		$('#smallmodal').on('hidden.bs.modal', function (e) {
			selectuser.postval = $('#smallselectuser').val();
			$("#myModalfooter").html('<a type="button" id="smallmodalsubmit" class="btn btn-primary" data-dismiss="modal">确认</a>');
			$("#smallmessage").html(""); 
			$('#myModalLabel').text('系统消息');
			if(selectuser.postsumbit==1){
				//alert(selectuser.postval);
				var receiverid = selectuser.postval.substring((selectuser.postval.indexOf('（')+1),selectuser.postval.lastIndexOf('）'));
				targetfunction(selectuser.postmethodname,receiverid);
				selectuser.postsumbit=0;
				selectuser.postmethodname='';
				selectuser.postval='';
			}
			$('#smallmodal').off().on( 'hidden', 'hidden.bs.modal');  
		});
	}
	});
	}
	}
	
};



//提交加班申请
function otpost(receiverid){
	//alert(id);
	$.post("/index/personnel_management/otpost",
    {
		type:'人事管理',
		businessname:'加班申请单',
		receiverid:receiverid,
		content:$('#otpostform').html()
	},
	function(data,status){
		if(data=='提交成功'){
			$("#smallmessage").html("<p>提交成功！</p>");
		}else{
			$("#smallmessage").html("<p>提交失败！请重试！</p>");
		}
		$("#smallmodal").modal('show');
			$('#smallmodal').on('hidden.bs.modal', function (e) {
				$("#smallmessage").html(""); 
			});
	});
}



//显示每日报餐
function showeateveryday(){
	
	
	$.post("/index/eat_everyday/show", 
    {}, 
		function(data,status){ 
		$('#mainworkspace').html(data);
		var now = $('#time').text().split("-");
		var y = now[0];
		var mo = now[1];
		var d = now[2];
		var h = now[3];
		var m = now[4];
		var s = now[5];
		var today = "";
		
		function format(){
			s = parseInt(s,10) + 1;
			if (s%60 == 0){
				m = parseInt(m,10) + 1;
				if(m < 10){
					m = '0' + m;
				}
				s = '00';
				if(m%60 == 0){
					h = parseInt(h,10) + 1;
					if(h < 10){
						h = '0' + h;
					}
					m = '00';
					if(h%24 == 0){
						d = parseInt(d,10) + 1;
						if(d < 10){
							d = '0' + d;
						}
						h = '00';
					}
				}
			}
			if( s < 10){
				ss= '0'+s;
			}else{
				ss= s;
			}
			
			parseInt("10",   10);
			var today = y+"年"+mo+"月"+d+"日"+"  "+h+":"+m+":"+ss;
			return today;
		}

		window.setInterval(function(){$("#time").text(format())},1000);
 
    }); 
	

}

//报餐操作
function eatchange(id,yon){
	$('#'+id+'type').removeClass('alert-info');
	$('#'+id+'type').removeClass('alert-success');
	$('#'+id+'type').removeClass('alert-warning');
	if(yon == '1'){
		$('#'+id+'type').addClass('alert-success');
		$("#"+id).val("1");
	}else if(yon == '0'){
		$('#'+id+'type').addClass('alert-warning');
		$("#"+id).val("0");
	}else{
		alert("未知错误");
	}
}

//报餐提交
function eatsignup(){

	$.post("/index/eat_everyday/signup",
    {
		lunch:$("#lunch").val(),
		dinner:$("#dinner").val(),
		suggest:$("#eatsuggest").val(),
		checksignup:$("#checksignup").val()
	},
	function(data,status){
		
		if($("#lunch").val() == 1){
			var lunchs = '吃饭';
		}else{
			var lunchs = '不吃';
		}
		
		if($("#dinner").val() == 1){
			var dinners = '吃饭';
		}else{
			var dinners = '不吃';
		}
		
		//alert(data);
		if(data=="报餐成功" ||data=="修改成功"){
			$("#smallmessage").html("<p>"+data+"！</p><p><strong>午餐:</strong>"+lunchs+"</p>"+"<p><strong>晚餐:</strong>"+dinners+"</p>");
			$("#smallmodal").modal('show');
			$('#smallmodal').on('hidden.bs.modal', function (e) {
				$("#smallmessage").html(""); 
				$('#eatsignup').text("修改");
				$('#eatsignup').removeClass("btn-primary");
				$('#eatsignup').addClass('alert-warning');
				$("#eatsuggest").val('');
				showeateveryday();
				$('#smallmodal').off().on( 'hidden', 'hidden.bs.modal');  
			});
		}else{
			$("#smallmessage").text(data);
			$("#smallmodal").modal('show');
			$('#smallmodal').on('hidden.bs.modal', function (e) {
			$("#smallmessage").text(""); 
			$('#smallmodal').off().on( 'hidden', 'hidden.bs.modal');  
			});
		}
    });
}


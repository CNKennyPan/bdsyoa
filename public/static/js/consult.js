
//窗口加载就运行
window.onload = function(){
				checklogin();
			}





//提交注册和登录表单空值检测
function formtest(f,n) {
var forminfo = new Array(); 
var errornumber = 0;
//alert("我的第一个 JavaScript");
for (var i=0;i<n;i++){
	forminfo[i] = document.forms[f][f+"input"+i].value;
	if (forminfo[i] == null || forminfo[i] == "") {
		//修改状态
		document.getElementById(f+"state"+i).className = "form-group has-error";
		//提示信息
		document.getElementById(f+"helpBlock"+i).style.visibility="visible";
		errornumber = errornumber + 1; 
    }else{
		document.getElementById(f+"state"+i).className = "form-group";
		document.getElementById(f+"helpBlock"+i).style.visibility="hidden";
		
	}

}
	
    if(errornumber >= 1){
		return false;
	}else{
		if(f=="loginform"){
			login(f,n);
			return false;
		}else{
			if(f=="registerform"){
			//注册用语句
				if(document.getElementById("registerforminput1").value!=document.getElementById("registerforminput2").value){
					alert("请确认两次输入的密码是否一致!");
					return false;
				}else{
					register(f,n);
					return false;
				}
			}
		}
			
	}
}




//注册表格AJAX
function register(f,n)
{
  //alert("调用register成功");
  document.getElementById("registerformbutton").innerHTML="<div class=\"alert alert-info\" role=\"alert\"><i class=\"icon-spinner icon-spin\"></i><strong>正在提交！</strong>请稍后片刻！</div>";
  var register;
  var t=4;

  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    register=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    register=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
function myTimer()
{
	t=t-1;
	if(t<1){window.location.href="index.php";}
	document.getElementById("registerformbutton").innerHTML="<div class=\"alert alert-success\" role=\"alert\"><strong>注册成功！</strong>" + t + "秒后返回登录界面！</div>";
	
	
}
  
  register.onreadystatechange=function()
  {
    if (register.readyState==4 && register.status==200)
    {
	  //alert(register.responseText);
	  if(register.responseText=="写入成功"){
		var myVar=setInterval(function(){myTimer()},1000);
	  }else{
		document.getElementById("registerformbutton").innerHTML="<button type=\"submit\"  name=\"submit\"  id=\"submit\" class=\"btn btn-default\" value=\"register\">注册</button><a class=\"btn btn-default\" href=\"index.php\">返回</a>";
		document.getElementById("registerformbutton").innerHTML=document.getElementById("registerformbutton").innerHTML + "<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>注册失败！</strong>" + "请检查信息是否填写正确！ </div>";
	  }
	  
    }
  }
  var formvalue = new Array(); 
  var formpost = "";
  for (var i=0;i<n;i++){
	formvalue[i] = document.forms[f][f+"input"+i].value;
	formpost = formpost+f+"input"+i+"="+formvalue[i]+"&";
  }
    formpost = formpost + "submit" + "=" + "register";
  //alert(formpost);
  register.open("post","submit.php",true);
  register.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  register.send(formpost);
}



//登录表格AJAX表格AJAX
function login(f,n)
{
  //alert("调用login成功");
  document.getElementById("loginformbutton").innerHTML="<div class=\"alert alert-info\" role=\"alert\"><i class=\"icon-spinner icon-spin\"></i><strong>正在登录！</strong>请稍后片刻！</div>";
  var login;
  var t=4;

  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    login=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    login=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
function myTimer()
{   
    t=t-1;
	if(t<1){
	
	window.location.href="workspace.html";}
	document.getElementById("loginformbutton").innerHTML="<div class=\"alert alert-success\" role=\"alert\"><strong>登录成功！</strong>" + t + "秒后登录工作界面！</div>";

	
}
  
  login.onreadystatechange=function()
  {
	
    if (login.readyState==4 && login.status==200)
    {
	  var userinfo = JSON.parse(login.responseText);
	  if (userinfo.login == "success" ){
		  var myVar=setInterval(function(){myTimer()},1000);
		  setCookie("userid",userinfo.userid,1);
		  setCookie("account",userinfo.account,1);
          setCookie("name",userinfo.name,1);
		  setCookie("cellphone",userinfo.cellphone,1);
		  setCookie("department",userinfo.department,1);
		  setCookie("birthday",userinfo.birthday,1);
		  setCookie("permission",userinfo.permission,1);
	  }else{
		document.getElementById("loginformbutton").innerHTML="<button type=\"submit\" class=\"btn btn-default\">登录</button><a class=\"btn btn-default\" href=\"register.php\">注册</a><a class=\"btn btn-link\" href=\"register.php\" >忘记密码</a>";
		document.getElementById("loginformbutton").innerHTML=document.getElementById("loginformbutton").innerHTML + "<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>登录失败！</strong>" + "请账号或者密码是否正确！ </div>";
	  }
	  
    }
  }
  var formvalue = new Array(); 
  var formpost = "";
  for (var i=0;i<n;i++){
	formvalue[i] = document.forms[f][f+"input"+i].value;
	formpost = formpost+f+"input"+i+"="+formvalue[i]+"&";
  }
    formpost = formpost + "submit" + "=" + "login";
  //alert(formpost);
  login.open("post","submit.php",true);
  login.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  login.send(formpost);
}


function logout(){
	deletecookie("userid");
	deletecookie("account");
	deletecookie("name");
	deletecookie("cellphone");
	deletecookie("department");
	deletecookie("birthday");
	deletecookie("permission");
	
	
	
	//alert("调用logout成功");

  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    logoutajax=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    logoutajax=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  
  logoutajax.onreadystatechange=function()
  {
	
    if (logoutajax.readyState==4 && logoutajax.status==200)
    {
		alert(logoutajax.responseText);
		window.location.href="index.html";
    }
  }
  var formpost = "";
    formpost = "submit" + "=" + "logout";
  //alert(formpost);
  logoutajax.open("post","submit.php",false);
  logoutajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  logoutajax.send(formpost);
}

//检查是否已经登录
function checklogin(){
	//alert("正在检查是否已经登录！")
	
	if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    logoutajax=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    logoutajax=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  logoutajax.onreadystatechange=function()
  {
	
    if (logoutajax.readyState==4 && logoutajax.status==200)
    {
		//alert(logoutajax.responseText);
		if(logoutajax.responseText=="未登录账号"){
				deletecookie("userid");
				deletecookie("account");
				deletecookie("name");
				deletecookie("cellphone");
				deletecookie("department");
				deletecookie("birthday");
				deletecookie("permission");
			alert("请重新登录！");
			window.location.href="index.html";
		}else{
			if( getCookie("userid")=="" || getCookie("userid")==null ){
				alert("请重新登录！");
				window.location.href="index.html";
			}else{
			changesurface("navindex");
			loadstate=true;
			websocket = new websocket(getCookie("name"));  
			websocket.creatwebsocket();
			E = window.wangEditor;
			editor = new E('#editor');
			$("#top").css("height",$(window).height()*0.9);
			}
		}
		
    }
  }
  var formpost = "";
    formpost = "submit" + "=" + "checklogin";
  //alert(formpost);
  logoutajax.open("post","submit.php",true);
  logoutajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  logoutajax.send(formpost);
	
	
}


//获得当前日期
function date(state)
{

  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    getdate=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    getdate=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  getdate.onreadystatechange=function()
  {
	
    if (getdate.readyState==4 && getdate.status==200)
    {
		if(state=="administration"){
			document.getElementById("time").innerHTML=getdate.responseText.substr(0,11);
			//document.getElementById("dinnerdate").innerHTML=getdate.responseText.substr(0,11);
			//document.getElementById("dinnerdateinput").value=getdate.responseText.substr(11);
		}
		if(state=="index")
			document.getElementById("time").innerHTML=getdate.responseText.substr(0,11);
    }
  }
  var formpost = "";
  formpost = "submit" + "=" + "getdate";
  getdate.open("post","submit.php",true);
  getdate.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  getdate.send(formpost);
}


//获得当前时间
function time()
{

  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    gettime=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    gettime=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  gettime.onreadystatechange=function()
  {
	
    if (gettime.readyState==4 && gettime.status==200)
    {
		if(!document.getElementById("dinnertime")){
			
		}else{	
			document.getElementById("dinnertime").innerHTML=gettime.responseText;
		}
    }
  }
  var formpost = "";
  formpost = "submit" + "=" + "gettime";
  gettime.open("post","submit.php",true);
  gettime.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  gettime.send(formpost);
}



//检测账户是否重复
function registeraccount()
{
  //("调用registeraccount成功");
  var registeraccount;
  var account;
  account=document.getElementById("registerforminput0").value;

  if (account == null || account == "") {
	  document.getElementById("registerformstate0").className = "form-group";
	  document.getElementById("registerformhelpBlock0").innerHTML="请输入账号！";
      document.getElementById("registerformhelpBlock0").style.visibility="hidden";
  }else{
  
  
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    registeraccount=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    registeraccount=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  registeraccount.onreadystatechange=function()
  {
	
    if (registeraccount.readyState==4 && registeraccount.status==200)
    {
	  //alert(registeraccount.responseText);
	  if(registeraccount.responseText=="账号可用"){
		document.getElementById("registerformhelpBlock0").innerHTML="该账号可以使用！";
		document.getElementById("registerformhelpBlock0").style.visibility="visible";
		document.getElementById("registerformstate0").className = "form-group has-success";
	  }else{
		document.getElementById("registerformhelpBlock0").innerHTML="该账号已被使用！";
		document.getElementById("registerformhelpBlock0").style.visibility="visible";
		document.getElementById("registerformstate0").className = "form-group has-error";
	  }
	  
    }
  }

  var formpost = "";

	formpost = "registerforminput0="+account+"&";

    formpost = formpost + "submit" + "=" + "registeraccount";
  //alert(formpost);
  registeraccount.open("post","submit.php",true);
  registeraccount.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  registeraccount.send(formpost);
  }
}


//系统首页公司新闻新闻管理
function newsmanage()
{	
  //alert("调用newsmanage成功");
  var newstitle;
  var newslink;
  var newsdescription;
  var issuer;
  newstitle=document.getElementById("editornewstitle").value;
  newslink=document.getElementById("editornewslink").value;
  newsdescription=editor.txt.html()

  //newsdescription=editor.txt.html();
  issuer=document.getElementById("newsissuer").value;

  setCookie("newstitle",newstitle,1);
  setCookie("newslink",newslink,1);
  setCookie("newsdescription",newsdescription,1);
  
  
  if (newstitle == null || newstitle == "") {
	  document.getElementById("editornewstitlegroup").className = "form-group has-error";
      document.getElementById("editornewstitlehelpBlock").style.visibility="visible";
  }else{
	  document.getElementById("editornewstitlegroup").className = "form-group";
      document.getElementById("editornewstitlehelpBlock").style.visibility="hidden";
  
  
  
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    newsmanage=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    newsmanage=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  newsmanage.onreadystatechange=function()
  {
	
    if (newsmanage.readyState==4 && newsmanage.status==200)
    {
	  //alert(newsmanage.responseText);
	  if(newsmanage.responseText=="写入成功"){
		document.getElementById("editornews").innerHTML="<div class='alert alert-success alert-dismissible text-center' role='alert'>"+
		"<h1 style=\"margin-bottom:20px\">新闻已提交成功！</h1><p><button class='btn btn-success' data-dismiss='alert' type='submit' onclick='location.reload()'>确认</button></p></div>";
		deletecookie("newstitle");
		deletecookie("newslink");
		deletecookie("newsdescription");
	  }else{
		
		document.getElementById("editornews").innerHTML="<div class='alert alert-warning alert-dismissible text-center' role='alert'>"+
		"<h1 style=\"margin-bottom:20px\">新闻提交失败！请检查内容是否由网页复制文字，若为网页复制文字，请先粘贴于记事本，并重新复制再粘贴至本网页。</h1><p><button class='btn btn-warning' data-dismiss='alert' type='submit' onclick='location.reload()'>确认</button></p></div>";
	  }
	  
    }
  }

  var formpost = "";

	formpost = "newstitle="+newstitle+"&"+"newslink="+newslink+"&"+"newsdescription="+newsdescription+"&"+"issuer="+issuer+"&";
    formpost = formpost + "submit" + "=" + "newsmanage";
  //alert(formpost);
  newsmanage.open("post","submit.php",true);
  newsmanage.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  newsmanage.send(formpost);
 }
}


//恢复新闻
function recoverynewsmanage(){
	if(getCookie("newstitle") || getCookie("newslink") || getCookie("newsdescription") != ""){
		$('#myTabs li:eq(2) a').tab('show');
		document.getElementById("editornewstitle").value=getCookie("newstitle");
		    document.getElementById("editornewslink").value=getCookie("newslink");
			editor.txt.html(getCookie("newsdescription"));


	}
	deletecookie("newstitle");
	deletecookie("newslink");
	deletecookie("newsdescription");
}



//设置cookie
function setCookie(cname,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

//获得cookie
function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

//删除cookie
function deletecookie(cname){
	document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}


//报餐
function dinnerregistration(state)
{
  //alert("调用dinnerregistration成功");
  var userid;
  var lunch;
  var dinner;
  var dinnerdate;
  var lunchsubmit;
  var dinnersubmit;
  var username;
  userid=document.getElementById("userid").value;
  username=document.getElementById("username").value;
  lunch=document.getElementsByName("lunch");
  dinner=document.getElementsByName("dinner");
  dinnerdate=document.getElementById("dinnerdateinput").value;
  for(var i=0; i<lunch.length; i ++){
        if(lunch[i].checked){
            //alert(lunch[i].value);
			lunchsubmit=lunch[i].value;
        }
    }
  for(var i=0; i<dinner.length; i ++){
        if(dinner[i].checked){
            //alert(dinner[i].value);
			dinnersubmit=dinner[i].value;
        }
  }

  
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    dinnerregistrationajax=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    dinnerregistrationajax=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  dinnerregistrationajax.onreadystatechange=function()
  {
	
    if (dinnerregistrationajax.readyState==4 && dinnerregistrationajax.status==200)
    {
	  //alert(dinnerregistrationajax.responseText);
	  if(dinnerregistrationajax.responseText=="写入成功"){
		document.getElementById("dinnerregistration").innerHTML="<div class='alert alert-success alert-dismissible text-center' role='alert'>"+
		"<h1 style=\"margin-bottom:20px\">报餐已提交成功！</h1><p><button class='btn btn-success' data-dismiss='alert' type='submit' onclick=\""+"workspacecenter('216','0')"+"\">确认</button></p></div>";
	  }else{
		document.getElementById("dinnerregistration").innerHTML="<div class='alert alert-warning alert-dismissible text-center' role='alert'>"+
		"<h1 style=\"margin-bottom:20px\">报餐提交失败！</h1><p><button class='btn btn-warning' data-dismiss='alert' type='submit' onclick=\""+"workspacecenter('216','0')"+"\">确认</button></p></div>";
	  }
	  
    }
  }

  var formpost = "";

	formpost = "userid="+userid+"&";
	formpost = formpost+"lunch="+lunchsubmit+"&";
	formpost = formpost+"dinner="+dinnersubmit+"&";
	formpost = formpost+"dinnerdate="+dinnerdate+"&";
	formpost = formpost+"username="+username+"&";
  if(state=="change"){
	 formpost = formpost + "submit" + "=" + "changedinnerregistration";
  }else{
	 formpost = formpost + "submit" + "=" + "dinnerregistration";
  }
  //alert(formpost);
  dinnerregistrationajax.open("post","submit.php",true);
  dinnerregistrationajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  dinnerregistrationajax.send(formpost);
  
}


//取消禁用状态
function canceldisabled(checkedparent){
	n=document.getElementById(checkedparent).innerHTML.indexOf("disabled");
	m=n+8;
	a=document.getElementById(checkedparent).innerHTML.substr(0,n);
	b=document.getElementById(checkedparent).innerHTML.substr(m);
	c=a+b;
	document.getElementById(checkedparent).innerHTML=c;
	
}


//报餐修改
function canceldinnerdisabled(){
	canceldisabled("lunchchecked1");
	canceldisabled("lunchchecked2");
	canceldisabled("dinnerchecked1");
	canceldisabled("dinnerchecked2");
	//alert(document.getElementById("changedinnersubmit").onclick);
	document.getElementById("changedinnersubmit").onclick=function onclick(event){
		dinnerregistration('change')
	};
	document.getElementById("changedinnersubmit").innerHTML="报餐";
	document.getElementById("changedinnersubmit").className="btn btn-primary btn-lg";
	document.getElementById("dinnerhelp").innerHTML="<div class=\"alert alert-info\"  role=\"alert\">"+
					"<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">"+
					"<span aria-hidden=\"true\">&times;</span></button>"+
					"<strong>提醒：</strong>现可重新选择，请选择完成后请按报餐按钮提交。</div>"+
					"</div>";
}



//饭菜建议提交
function dinnersuggest()
{
	

  //alert("调用dinnerregistration成功");
  var eatsuggest;
  eatsuggest=document.getElementById("eartsuggestinput").value;
  if(eatsuggest==""){
	  document.getElementById("eatsuggest").className = "form-group row has-error";
	  document.getElementById("eartsuggestinputhelpBlock").style.visibility="visible";
  }else{

  document.getElementById("eatsuggest").className = "form-group row";
  document.getElementById("eartsuggestinputhelpBlock").style.visibility="hidden";
  
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    dinnersuggestajax=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    dinnersuggestajax=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  dinnersuggestajax.onreadystatechange=function()
  {
	
    if (dinnersuggestajax.readyState==4 && dinnersuggestajax.status==200)
    {
	  //alert(dinnersuggestajax.responseText);
	  if(dinnersuggestajax.responseText=="写入成功"){
		Modal.build('modal-sm','feedback','btn-success','提交建议成功!','信息提交成功',showdinnersuggest());
		Modal.show();
		$("#eartsuggestinput").val("");
	  }else{
		Modal.build('modal-sm','feedback','btn-warning','提交建议失败!','信息提交失败',showdinnersuggest());
		Modal.show();
		$("#eartsuggestinput").val("");
	  }
	  
    }
  }

  var formpost = "";

	formpost = "eatsuggest="+eatsuggest+"&";

	formpost = formpost + "submit" + "=" + "dinnersuggest";
  //alert(formpost);
  dinnersuggestajax.open("post","submit.php",true);
  dinnersuggestajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  dinnersuggestajax.send(formpost);
  }
}


//显示饭菜建议
function showdinnersuggest()
{
	
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    showdinnersuggestajax=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    showdinnersuggestajax=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  showdinnersuggestajax.onreadystatechange=function()
  {
	
    if (showdinnersuggestajax.readyState==4 && showdinnersuggestajax.status==200)
    {
	  //alert(showdinnersuggestajax.responseText);
		$("#readeatsuggest").html(showdinnersuggestajax.responseText);
		var scrollDiv = document.getElementById("readeatsuggest");
		scrollDiv.scrollTop = scrollDiv.scrollHeight;
    }
  }

  var formpost = "";

	formpost = "submit" + "=" + "showeatsuggest";
  //alert(formpost);
  showdinnersuggestajax.open("post","submit.php",true);
  showdinnersuggestajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  showdinnersuggestajax.send(formpost);
  
}


//显示工作主界面
function workspacecenter(id,k)
{
  //alert("调用workspacecenter成功");
  
  n=id.split("");

  for(var i=1;i<=n[2];i++){
	   document.getElementById(n[0]+i+n[2]).className = "list-group-item";
  }
	document.getElementById(id).className="list-group-item active";

 // document.getElementById(id).className="list-group-item active";
  
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    workspacecenteraxaj=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    workspacecenteraxaj=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  workspacecenteraxaj.onreadystatechange=function()
  {
	
    if (workspacecenteraxaj.readyState==4 && workspacecenteraxaj.status==200)
    {
	  //alert(workspacecenteraxaj.responseText);
		document.getElementById("workspacecenter"+n[0]).innerHTML=workspacecenteraxaj.responseText;
		if(id=="115"){
			editor.create();
			readnoticeboard("主页");
		}
		if(id=="216"){
			var now=setInterval(function(){time()},1000);
			readnoticeboard("综合部");
		}
		if(id=="226"){
			os.old="";
			osindex();
			readnoticeboard("综合部");
		}
		if(id=="313"){
			readnoticeboard("财务部");
		}
		if(id=="814"){
			os.old="";
			goodsinventoryform();
			readnoticeboard("销售部");
			var myDate = new Date();
			//时间选择器
			$('.form_date').datetimepicker({
				weekStart: 1,
				autoclose: 1,
				todayHighlight: 1,
				startView: 2,
				minView: 2,
				forceParse: 0,
				language: 'zh-CN',
				pickerPosition: 'top-left',
				todayBtn:1,
				startDate: '2017-1-1',
				endDate: '2050-1-1',
			});
		

		}
		showtab(k);
		$(id).attr("width","500");
    }
  }

  
  var formpost = "";

	formpost = "main0="+n[0]+"&";
	formpost = formpost + "main1="+n[1]+"&";
	formpost = formpost + "submit" + "=" + "workspacecenter";
  //alert(formpost);
  workspacecenteraxaj.open("post","submit.php",true);
  workspacecenteraxaj.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  workspacecenteraxaj.send(formpost);
  
}

//显示指定标签页
function showtab(k){
		  n='#myTab li:eq('+k+') a';
		  $(n).tab('show');
}

//显示生日
function getbirthday(){
   //alert("调用getbirthday成功");
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    getbirthdayajax=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    getbirthdayajax=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  getbirthdayajax.onreadystatechange=function()
  {
	
    if (getbirthdayajax.readyState==4 && getbirthdayajax.status==200)
    {
	  //alert(getbirthdayajax.responseText);
	  $("#birthdaypanel").html(getbirthdayajax.responseText);
    }
  }

  
  var formpost = "";

	formpost = "submit" + "=" + "getbirthday";
  //alert(formpost);
  getbirthdayajax.open("post","submit.php",true);
  getbirthdayajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  getbirthdayajax.send(formpost);
	
}



//切换界面
function changesurface(id){
  // alert("调用changesurface成功");
  $("#"+id).parent().siblings().removeClass("active");
  $("#"+id).parent().addClass("active");
  //alert(id);
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    changesurfaceajax=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    changesurfaceajax=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  changesurfaceajax.onreadystatechange=function()
  {
	
    if (changesurfaceajax.readyState==4 && changesurfaceajax.status==200)
    {
	  //alert(changesurfaceajax.responseText);
	 switch(id)
	{
	//1
    case "navindex":
		$("#top").html(changesurfaceajax.responseText);
		date('index');
		workspacecenter("115","0");
		getbirthday();
		$("#navusername").html("<i class='icon-user' aria-hidden='true'></i>&#12288用户："+ getCookie("name")+"&#12288<i class='icon-group' ></i>&#12288部门：" + getCookie("department"));
		$("#userinfo").html("<li>姓&#12288&#12288名："+getCookie("name")+"</li>"+"<li>部&#12288&#12288门："+getCookie("department")+"</li>"+"<li>联系方式："+getCookie("cellphone")+"</li>"+"<li>生&#12288&#12288日："+getCookie("birthday")+"</li>"); 
        break;
	//2
    case "navadministration":
        $("#top").html(changesurfaceajax.responseText);
		date('administration');
		workspacecenter("216","0");
		getbirthday();
		$("#userinfo").html("<li>姓&#12288&#12288名："+getCookie("name")+"</li>"+"<li>部&#12288&#12288门："+getCookie("department")+"</li>"+"<li>联系方式："+getCookie("cellphone")+"</li>"+"<li>生&#12288&#12288日："+getCookie("birthday")+"</li>");
        break;
	//3
	case "navfinance":
		$("#top").html(changesurfaceajax.responseText);
		workspacecenter("313","0");
		break;
	//8
	case "navsales":
		$("#top").html(changesurfaceajax.responseText);
		date('administration');
		workspacecenter("814","0");
		break;
	
    default:
        
	}

	  
    }
  }

  
  var formpost = "";
	formpost = "changesurface" + "=" + id + "&";
	formpost = formpost + "submit" + "=" + "changesurface";
  //alert(formpost);
  changesurfaceajax.open("post","submit.php",true);
  changesurfaceajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  changesurfaceajax.send(formpost);
}





		
//显示办公用品目录
function osindex()
{
  //alert("调用osindex成功");
  
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    osindexaxaj=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    osindexaxaj=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  osindexaxaj.onreadystatechange=function()
  {
	
    if (osindexaxaj.readyState==4 && osindexaxaj.status==200)
    {
	  //alert(osindexaxaj.responseText);
	  os.loadindex(osindexaxaj.responseText,"osindex","#os","10");
	  os.osselect();
	  os.shownav();
	  os.laquoandraquo();
    }
  }

  
  var formpost = "";

	formpost = "submit" + "=" + "osindex";
  //alert(formpost);
  osindexaxaj.open("post","submit.php",true);
  osindexaxaj.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  osindexaxaj.send(formpost);
  
}



//显示办公用品入库记录
function osinbound()
{
  //alert("调用osin成功");
  
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    osinboundajax=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    osinboundajax=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  osinboundajax.onreadystatechange=function()
  {
	
    if (osinboundajax.readyState==4 && osinboundajax.status==200)
    {
	  //alert(osinboundajax.responseText);
	  os.loadindex(osinboundajax.responseText,"osinbound","#osin","10");
	  os.osselect();
	  os.shownav()
	  os.laquoandraquo();
    }
  }

  
  var formpost = "";

	formpost = "submit" + "=" + "osinbound";
  //alert(formpost);
  osinboundajax.open("post","submit.php",true);
  osinboundajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  osinboundajax.send(formpost);
  
}


//显示办公用品出库记录
function osoutbound()
{
  //alert("调用osin成功");
  
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    osoutboundajax=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    osoutboundajax=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  osoutboundajax.onreadystatechange=function()
  {
	
    if (osoutboundajax.readyState==4 && osoutboundajax.status==200)
    {
	  //alert(osoutboundajax.responseText);
	  os.loadindex(osoutboundajax.responseText,"osoutbound","#osout","20");
	  os.osselect();
	  os.shownav()
	  os.laquoandraquo();
    }
  }

  
  var formpost = "";

	formpost = "submit" + "=" + "osoutbound";
  //alert(formpost);
  osoutboundajax.open("post","submit.php",true);
  osoutboundajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  osoutboundajax.send(formpost);
  
}




//办公用品管理
var os = {
	//条目的数量
	l:"",
	//分页数量
	f:"",
	//每页数量
	y:"10",
	//显示第几页
	x:{data:{fenye: ""}},
	//填充条目
	t:"",
	//表格id
	tid:"",
	//行id
	trid:"",
	//历史项目
	old:"",
	//新旧检测
	pass:"",
	//当前项目
	now:"",
	
	
	
	//读取旧分页信息（备用）
	loadoldos:function(l,f,y,t,tid,trid){
		if(RegExp(os.tid).test(os.old)){
			os.pass="false";
			m=os.old.split(",");
			os.old="";
			//alert(m.length);
			for(var i=0;i<m.length;i++){
				//alert(m[i]);
				if(RegExp(os.tid).test(m[i])){
					os.now=m[i].split("@");
					m[i]=l+"@"+f+"@"+y+"@"+t+"@"+tid+"@"+trid+",";
					os.old= os.old + m[i];
					//alert(1);
				}else{
					if(m[i]!="" && m[i]!=null){
						os.old= os.old + m[i] + ",";
					}
					//alert(2);
				}
			}
			//alert(os.old);
			//alert(os.now[4]+"||"+os.now[5]+"||"+os.now[0]+"||"+os.now[3])
			os.deleteinner(os.now[4],os.now[5],os.now[0],os.now[3]);
		}else{
			os.pass="true";
			os.old=os.old+l+"@"+f+"@"+y+"@"+t+"@"+tid+"@"+trid+",";
			//alert(os.old);
		}
	},
	
	
	//载入办公用品条目
	loadindex:function(s,tid,trid,y){
		os.y=y;
		//alert("初始化办公用品");
		n=s.split("@");
		u=n[1].match(/<td>/g).length;
		os.l=n.length-1;
		os.tid=tid;
		os.trid=trid;
		os.f=Math.ceil(os.l/os.y);
		if(os.l%os.y==0){
			os.t=0;
		}else{
			os.t=os.y-os.l%os.y;
		}
		
		os.loadoldos(os.l,os.f,os.y,os.t,tid,trid);
		
		if(os.pass=="true"){
		
	  if(os.l==0){
		  $("#"+os.tid).append(n);
	  }
	  
	  for(var i=1;i<=os.l;i++){
		  
		  //创建填充行
		  if(i==os.l){
			  for(var k=1;k<=os.t;k++){
			  n[i]=n[i]+"<tr id=\"ost"+os.tid+k+"\"><td colspan=\""+u+"\">&#12288</td></tr>";
			  }
		  }
		  
		  $("#"+os.tid).append(n[i]);
		  d=os.trid+i;
		  $(d).hide();
	  }
	  //填充行隐藏
	  for(var k=1;k<=os.t;k++){
		  td="#ost"+os.tid+k;
		  $(td).hide();
	  }
		
	  }
	  
	},
	
	//选择条目改变颜色
	osselect:function(){
		//检测填充行ID
		//alert("注册改变颜色事件！");

		$("tr").click(function(){
			//alert(/ost/.test($(this).attr("id")));
			if(/ost/.test($(this).attr("id"))){
			}else{
				if($(this).css("background-color")=="rgb(237, 248, 251)"){
								$(this).css("background-color","");
							}else{
								$(this).css("background-color","#edf8fb");
								$(this).attr("id")
							}
			}
		}
		)
			
	},
	
	//初始化分页栏
	shownav:function(){
		
		if(os.pass=="true"){
		
			//alert("初始化分页");
			
			//alert(os.old);
		
		$("#"+os.tid).after("<nav id=\"osnav"+os.tid+"\" class=\"text-center\" aria-label=\"Page navigation\"><ul style=\"margin:0px\" id=\""+os.tid+"nav\" class=\"pagination\"></ul></nav>");
		for(var i=1;i<=os.f;i++){
			a="<li id=\""+os.tid+"nav"+i+"\" ><a href=\"javascript:void(0)\">"+i+"</a></li>";
			$("#"+os.tid+"nav").append(a);
			r="#"+os.tid+"nav"+i;
			//click(data,fn)中的data其实是json对象,取的时候,只能通过当前的事件源来取,data是默认放在event中的,所以这里的data是eventdata,引用的时候也使用event.data.name,也就是说JQuery中的所有触发时间的方法,需要传递参数都可以通过eventdata对象来传递参数: 
			//alert(r);
			//注册click事件。
			$(r).click({fenye: i},os.showindex);
		}
		}
		os.x.data.fenye=1;
		os.showindex(os.x);
		
	},
	
	//显示隐藏指定分页内容
	showindex:function(event){
		b=(event.data.fenye-1)*os.y+1;
		c=event.data.fenye*os.y;
		os.x.data.fenye=event.data.fenye;
		for(var i=1;i<=os.l;i++){
			d=os.trid+i;
			$(d).hide();
		}
		
		for(var i=b;i<=c;i++){
			d=os.trid+i;
			$(d).show();
		} 
		//显示隐藏补充行
		
		if(event.data.fenye==os.f){
			for(var k=1;k<=os.t;k++){
				td="#ost"+os.tid+k;
				$(td).show();
			}
		}else{
			for(var k=1;k<=os.t;k++){
				td="#ost"+os.tid+k;
				$(td).hide();
			}
		}
		os.laquoandraquo();
		
	},
	
	//删除内容
	deleteinner:function(tid,trid,l,t){
		//alert("正在删除内容！");
		os.pass="true";
		for(var i=1; i<=l ;i++){
			d=trid+i;
			//alert("删除"+d);
			$(d).remove();
		}
		for(var k=1;k<=t;k++){
			  d="#ost"+tid+k;
			  //alert("删除"+d);
			  $(d).remove();
		}
		//alert("准备删除osnav");
		d="#osnav"+tid;
		$(d).remove();
	},
	
	//导航栏前进后退重置
	laquoandraquo:function(){
		//alert(os.f);
		//alert(os.x.data.fenye);
		for(var i=1;i<=os.f;i++){
			h="#"+os.tid+"nav"+i;
			//alert(h);
			$(h).removeClass("active");
		}
		
		if(os.f == 1){
			$("#osnavlaquo").remove();
			$("#osnavraquo").remove();
			$("#"+os.tid+"nav").prepend("<li id=\"osnavlaquo\"><span aria-hidden=\"true\">&laquo;</span></li>");
			$("#"+os.tid+"nav").append("<li id=\"osnavraquo\"><span aria-hidden=\"true\">&raquo;</span></li>");
			$("#osnavlaquo").click(function(){});
			$("#osnavraquo").click(function(){});
		}else{
		
		//假如当前是第一页
		if(os.x.data.fenye==1){
			//alert("A1");
			$("#osnavlaquo").remove();
			$("#osnavraquo").remove();
			$("#"+os.tid+"nav").prepend("<li id=\"osnavlaquo\"><span aria-hidden=\"true\">&laquo;</span></li>");
			$("#"+os.tid+"nav").append("<li id=\"osnavraquo\"><a href=\"javascript:void(0)\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a></li>");
			$("#osnavlaquo").click(function(){});
			$("#osnavraquo").click(function(){
					os.x.data.fenye=os.x.data.fenye+1;
					os.showindex(os.x);
				});
		}
		//假如当前是第一页和最后一页之间
		if(os.x.data.fenye>1 && os.x.data.fenye<os.f){
			//alert("A2");
			$("#osnavlaquo").remove();
			$("#osnavraquo").remove();
			$("#"+os.tid+"nav").prepend("<li id=\"osnavlaquo\"><a href=\"javascript:void(0)\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li>");
			$("#"+os.tid+"nav").append("<li id=\"osnavraquo\"><a href=\"javascript:void(0)\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a></li>");
			$("#osnavlaquo").click(function(){
					os.x.data.fenye=os.x.data.fenye-1;
					os.showindex(os.x);
				});
			$("#osnavraquo").click(function(){
					os.x.data.fenye=os.x.data.fenye+1;
					os.showindex(os.x);
				});
		}
		
		//假如当前是最后一页
		if(os.x.data.fenye==os.f){
			//alert("A3");
			$("#osnavlaquo").remove();
			$("#osnavraquo").remove();
			$("#"+os.tid+"nav").prepend("<li id=\"osnavlaquo\"><a href=\"javascript:void(0)\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li>");
			$("#"+os.tid+"nav").append("<li id=\"osnavraquo\"><span aria-hidden=\"true\">&raquo;</span></li>");
			$("#osnavlaquo").click(function(){
					os.x.data.fenye=os.x.data.fenye-1;
					os.showindex(os.x);
				});
			$("#osnavraquo").click(function(){});
		}
		
		}
		
		j="#"+os.tid+"nav"+os.x.data.fenye;
		$(j).attr("class","active");
		
		
	},
	
};



//创建在线聊天
function websocket(name){
	
	
	this.ws = "";
	this.wsname = name;
	this.wsid = "";
	this.exist = false;
	this.windowheight = $(window).height();
	this.tryconnect = 1;
	
	//初始化聊天窗口大小
	$("#onlinebody").css("height",this.windowheight*0.8);
	$("#online").css("height",this.windowheight*0.8*0.95);
	//浏览器窗口调整大小触发函数
	$(window).resize(function() {
		a = $(window).height();
		$("#onlinebody").css("height",a*0.8);
		$("#online").css("height",a*0.8*0.95);
		$("#comunication").css("margin-top",$("#indexnav").height()+20);
		//左侧界面调整
		$("#top").css("margin-top",$("#indexnav").height()+20);
	});
	
		this.creatwebsocket=creatwebsocket;
		function creatwebsocket(){
			if ("WebSocket" in window){
               //alert("您的浏览器支持 WebSocket!");
               // 打开一个 web socket
			   
               this.ws = new WebSocket("ws://127.0.0.1:8080");		
			   
               this.ws.onopen = function()
               {
				  websocket.exist=true;
				  websocket.tryconnect = 1;
				  $("#online").append("<p>已成功连接服务器</p>");
               };
                
               this.ws.onmessage = function (evt) 
               { 
                  //alert("您收到信息！");
				  var received_msg = JSON.parse(evt.data);
				  //alert(received_msg);
					switch(received_msg.type){
					case "system":
						//接收服务器档案编号
						websocket.wsid=received_msg.id;
						//发送用户信息告诉服务器
						now = $.now();
						message={"type":"login","name":websocket.wsname,"id":websocket.wsid,"time":now};
						data=JSON.stringify(message);
						websocket.ws.send(data);
					break;
					case "login":
						$("#online").append("<p>"+received_msg.time+received_msg.name+":已登录</p>");
						websocket.scrollDiv();
						websocket.numberchange(received_msg.number);
					break;
					case "logout":
						$("#online").append("<p>"+received_msg.time+received_msg.name+":已退出</p>");
						websocket.scrollDiv();
						websocket.numberchange(received_msg.number);
					break;
					case "user":
						$("#online").append("<p>"+received_msg.time+received_msg.name+":"+received_msg.content+"</p>");
						websocket.scrollDiv();
					break;
					default:
					 alert("无法识别服务器传来的信息，可能您连了一个假服务器！");
					}

               };
			   
               this.ws.onerror = function () {
					//reconnect();
			   };
				
               this.ws.onclose = function()
               { 
                   //alert(websocket.ws.readyState);
				   $("#online").append("<p>服务器异常，5秒后重新连接！"+"现在是第"+websocket.tryconnect+"次尝试！</p>");
				   websocket.tryconnect += 1;
				   setTimeout(function(){websocket.creatwebsocket()},5000);
               };
			   
            }else
            {
               // 浏览器不支持 WebSocket
               alert("您的浏览器不支持 WebSocket!");
            }
			
			}
			
			this.sendwebsocket=sendwebsocket;
			function sendwebsocket(){
				//alert($("#message").val());
				message={"type":"user","name":this.wsname,"content":$("#message").val()};
				websocket.ws.send(JSON.stringify(message));
				$("#message").val("");
			}
			
			this.heartbeat=heartbeat;
			function heartbeat(){
				message={"type":"heartbeat","name":websocket.wsname,"id":websocket.wsid,"time":now};
				data=JSON.stringify(message);
				setInterval(function(){websocket.ws.send(data)},3000);
			}
			
			this.onclose=onclose;
			function onclose(){
				websocket.ws.close();
			}
			
			this.entersend = entersend;
			function entersend(e){
				//alert(e.keyCode);
				if(e.keyCode == 13){
				websocket.sendwebsocket();
				}
			}
			
			this.scrollDiv = scrollDiv;
			function scrollDiv(){
				var scrollDiv = document.getElementById("online");
				scrollDiv.scrollTop = scrollDiv.scrollHeight;
			}
			
			this.numberchange = numberchange;
			function numberchange(number){
				$("#onlinenumber").html(number+"人");
			}

}

//采购申请添加条目空格检查
function Purchasingrequisitionformformcheck(f,n) {
var forminfo = new Array(); 
var errornumber = 0;
//alert($("#Purchasingrequisitionformformstate6").val());
for (var i=0;i<n;i++){
	forminfo[i] = document.getElementById(f+"input"+i).value;
	document.getElementById(f+"input"+i).value = "";
	//alert(forminfo[i]);
	if (forminfo[i] == null || forminfo[i] == "") {
		//修改状态
		document.getElementById(f+"state"+i).className = "form-group has-error";
		//提示信息
		document.getElementById(f+"helpBlock"+i).style.visibility="visible";
		errornumber = errornumber + 1; 
    }else{
		document.getElementById(f+"state"+i).className = "form-group";
		document.getElementById(f+"helpBlock"+i).style.visibility="hidden";
		
	}

}
    if(errornumber >= 1){
		Modal.build('modal-sm','feedback','btn-warning','请检查条目信息是否填写完整!','信息提交失败');
		Modal.show();
		return false;
	}else{
		//goodnewpost(forminfo);
		var tiaomu = $("#Purchasingrequisitionforminput4").val();
		$("#Purchasingrequisitionforminput4").val(tiaomu + forminfo[0]+"-"+forminfo[1]+"-"+forminfo[2]+"-"+forminfo[3]+"-"+forminfo[4]+"-"+forminfo[5]+"-"+forminfo[6]+"-"+forminfo[7]+"@");
		Showpurchasingrequisitionform();
		return false;
	}
}

//采购申请显示条目
function Showpurchasingrequisitionform() {
	var tiaomu = $("#Purchasingrequisitionforminput4").val();
	var tiaomu2 = tiaomu.split("@");
	var tiaomu3 = [];
	for(var i=0;i<tiaomu2.length-1;i++){
		tiaomu3[i] = tiaomu2[i].split("-");
		
		//alert(tiaomu3[i].length);
	}
	$("#Purchasingrequisitionformtable").html("<thead style=\"font-weight:bold\"><tr><td>序号</td><td>名称</td><td>型号</td><td>数量</td><td>单位</td><td>单价</td><td>运费</td><td>备注</td><td>申请人</td><td>操作</td></tr></thead>");
	
	
	for(var i=0;i<tiaomu2.length-1;i++){
		var tiaomu4 = "<td>"+(i+1)+"</td>";
		for(var u=0;u<tiaomu3[i].length;u++){
			tiaomu4 = tiaomu4 + "<td>"+tiaomu3[i][u]+"</td>";
			//alert(tiaomu4)
			//$("#Purchasingrequisitionformtable").append("<td>"+tiaomu3[i][u]+"</td>");
			//alert("i="+i+"u="+u);
		}
		tiaomu4 = tiaomu4 + "<td><button type=\"button\" class=\"btn btn-warning btn-xs\" onclick=\"deletepurchasingrequisitionform("+(i+1)+")\"><span class=\"glyphicon glyphicon-remove\"></span></button></td>";
		$("#Purchasingrequisitionformtable").append("<tr>"+tiaomu4+"</tr>");
	}
	
}


//采购申请删除条目
function deletepurchasingrequisitionform(d) {
	var tiaomu = $("#Purchasingrequisitionforminput4").val();
	alert(tiaomu);
	var tiaomu2 = tiaomu.split("@");
	alert(tiaomu2);
	var k=d-1;
	tiaomu2[k]="";
	tiaomu="";
	for(i=0;i<tiaomu2.length;i++){
		alert(tiaomu);
		if(tiaomu2[i]!=""){
			tiaomu = tiaomu + tiaomu2[i] + "@";
		}
	}
	
	$("#Purchasingrequisitionforminput4").val(tiaomu);
	Showpurchasingrequisitionform();
}



//采购申请空格检查
function Purchasingrequisition(f,n) {
var forminfo = new Array(); 
var errornumber = 0;
//alert("Purchasingrequisition");
for (var i=0;i<n;i++){
	forminfo[i] = document.forms[f][f+"input"+i].value;
	//document.forms[f][f+"input"+i].value = "";
	//alert(forminfo[i]);
	if (forminfo[i] == null || forminfo[i] == "") {
		//修改状态
		document.getElementById(f+"state"+i).className = "form-group has-error";
		//提示信息
		document.getElementById(f+"helpBlock"+i).style.visibility="visible";
		errornumber = errornumber + 1; 
    }else{
		document.getElementById(f+"state"+i).className = "form-group";
		document.getElementById(f+"helpBlock"+i).style.visibility="hidden";
		
	}

}
    if(errornumber >= 1){
		Modal.build('modal-sm','feedback','btn-warning','请检查采购申请信息是否填写完整!','信息提交失败');
		Modal.show();
		return false;
	}else{
		Purchasingrequisitionpost(forminfo);
		return false;	
	}
}


//采购申请发送信息给服务器
function Purchasingrequisitionpost(forminfo){
		//alert("新建");
		
		if (window.XMLHttpRequest)
		{
			// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			Purchasingrequisitionpostajax=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			Purchasingrequisitionpostajax=new ActiveXObject("Microsoft.XMLHTTP");
		}
  
  
		Purchasingrequisitionpostajax.onreadystatechange=function()
		{
		if (Purchasingrequisitionpostajax.readyState==4 && Purchasingrequisitionpostajax.status==200)
		{
		//alert(Purchasingrequisitionpostajax.responseText);
		if(Purchasingrequisitionpostajax.responseText=="写入成功"){
		Modal.build('modal-sm','feedback','btn-success','新商品新建成功!','信息提交成功',"goodsinventoryform()");
		Modal.show();
		$("#goodsnewforminput0").val("");
		$("#goodsnewforminput1").val("");
		$("#goodsnewforminput2").val("");
		$("#goodsnewforminput3").val("");
		}else{
		Modal.build('modal-sm','feedback','btn-warning','新商品新建失败，请重试！','信息提交失败');	
		Modal.show();
		}
		
		}
		}

		var formpost = "";
		formpost = "goodsname" + "=" + forminfo[0] + "&";
		formpost = formpost + "goodsbrand" + "=" + forminfo[1] + "&";
		formpost = formpost + "goodsspecifications" + "=" + forminfo[2] + "&";
		formpost = formpost + "goodsunit" + "=" + forminfo[3] + "&";
		formpost = formpost + "submit" + "=" + "goodsnew";
		//alert(formpost);
		Purchasingrequisitionpostajax.open("post","submit.php",true);
		Purchasingrequisitionpostajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		Purchasingrequisitionpostajax.send(formpost);
}




//显示商品库存
function goodsinventoryform()
{
  //alert("调用goodsinventoryform成功");
  
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    goodsinventoryformajax=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    goodsinventoryformajax=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  goodsinventoryformajax.onreadystatechange=function()
  {
	
    if (goodsinventoryformajax.readyState==4 && goodsinventoryformajax.status==200)
    {
	  //alert(goodsinventoryformajax.responseText);
	  os.loadindex(goodsinventoryformajax.responseText,"goodsinventorytable","#goods","10");
	  os.osselect();
	  os.shownav();
	  //os.laquoandraquo();
    }
  }

  
  var formpost = "";

	formpost = "submit" + "=" + "goodsinventoryform";
  //alert(formpost);
  goodsinventoryformajax.open("post","submit.php",true);
  goodsinventoryformajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  goodsinventoryformajax.send(formpost);
  
}






//新商品登记空格检查
function goodsnew(f,n) {
var forminfo = new Array(); 
var errornumber = 0;
//alert("goodsnew");
for (var i=0;i<n;i++){
	forminfo[i] = document.forms[f][f+"input"+i].value;
	//document.forms[f][f+"input"+i].value = "";
	//alert(forminfo[i]);
	if (forminfo[i] == null || forminfo[i] == "") {
		//修改状态
		document.getElementById(f+"state"+i).className = "form-group has-error";
		//提示信息
		document.getElementById(f+"helpBlock"+i).style.visibility="visible";
		errornumber = errornumber + 1; 
    }else{
		document.getElementById(f+"state"+i).className = "form-group";
		document.getElementById(f+"helpBlock"+i).style.visibility="hidden";
		
	}

}
    if(errornumber >= 1){
		Modal.build('modal-sm','feedback','btn-warning','请检查商品入库信息是否填写完整!','信息提交失败');
		Modal.show();
		return false;
	}else{
		goodnewpost(forminfo);
		return false;	
	}
}

//新商品登记发送信息给服务器
function goodnewpost(forminfo){
		//alert("新建");
		
		if (window.XMLHttpRequest)
		{
			// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			goodsnewajax=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			goodsnewajax=new ActiveXObject("Microsoft.XMLHTTP");
		}
  
  
		goodsnewajax.onreadystatechange=function()
		{
		if (goodsnewajax.readyState==4 && goodsnewajax.status==200)
		{
		//alert(goodsnewajax.responseText);
		if(goodsnewajax.responseText=="写入成功"){
		Modal.build('modal-sm','feedback','btn-success','新商品新建成功!','信息提交成功',"goodsinventoryform()");
		Modal.show();
		$("#goodsnewforminput0").val("");
		$("#goodsnewforminput1").val("");
		$("#goodsnewforminput2").val("");
		$("#goodsnewforminput3").val("");
		}else{
		Modal.build('modal-sm','feedback','btn-warning','新商品新建失败，请重试！','信息提交失败');	
		Modal.show();
		}
		
		}
		}

		var formpost = "";
		formpost = "goodsname" + "=" + forminfo[0] + "&";
		formpost = formpost + "goodsbrand" + "=" + forminfo[1] + "&";
		formpost = formpost + "goodsspecifications" + "=" + forminfo[2] + "&";
		formpost = formpost + "goodsunit" + "=" + forminfo[3] + "&";
		formpost = formpost + "submit" + "=" + "goodsnew";
		//alert(formpost);
		goodsnewajax.open("post","submit.php",true);
		goodsnewajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		goodsnewajax.send(formpost);
}


//显示商品入库记录
function goodsinvoicingform()
{
  //alert("调用goodsInvoicingfrom成功");
  
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    goodsInvoicingformajax=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    goodsInvoicingformajax=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  goodsInvoicingformajax.onreadystatechange=function()
  {
	
    if (goodsInvoicingformajax.readyState==4 && goodsInvoicingformajax.status==200)
    {
	  
	  //alert(goodsInvoicingformajax.responseText);
	  os.loadindex(goodsInvoicingformajax.responseText,"goodsInvoicingtable","#goodsin","10");
	  os.osselect();
	  os.shownav();
	  os.laquoandraquo();
    }
  }

  
  var formpost = "";

	formpost = "submit" + "=" + "goodsInvoicingform";
  //alert(formpost);
  goodsInvoicingformajax.open("post","submit.php",true);
  goodsInvoicingformajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  goodsInvoicingformajax.send(formpost);
  
}





//自动填充商品入库登记
function autofillgoodsInvoicing(goodsid){
		//alert("自动");
		//goodsid = $("#goodsnewforminput0").val();
		
		if (window.XMLHttpRequest)
		{
			// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			autofillgoodnewpostajax=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			autofillgoodnewpostajax=new ActiveXObject("Microsoft.XMLHTTP");
		}
  
  
		autofillgoodnewpostajax.onreadystatechange=function()
		{
		if (autofillgoodnewpostajax.readyState==4 && autofillgoodnewpostajax.status==200)
		{
		//alert(autofillgoodnewpostajax.responseText);
		if(autofillgoodnewpostajax.responseText=="没找到商品"){
			for(i=3;i<8;i++){
				$("#goodsInvoicingforminput"+i).val("没找到商品！请重新输入编号")
			}
		}else{
			goods = JSON.parse(autofillgoodnewpostajax.responseText);
			//alert(goods.goodsname);
			$("#goodsInvoicingforminput3").val(getCookie("name"));
			$("#goodsInvoicingforminput4").val(goods.goodsname);
			$("#goodsInvoicingforminput5").val(goods.goodsbrand);
			$("#goodsInvoicingforminput6").val(goods.goodsspecifications);
			$("#goodsInvoicingforminput7").val(goods.goodsunit);
			$("#goodsInvoicingforminput8").val(getCookie("userid"));			
		}
		
		}
		}

		var formpost = "";
		formpost = "goodsnewforminput0" + "=" + goodsid + "&";
		formpost = formpost + "submit" + "=" + "autofillgoodsnewpost";
		//alert(formpost);
		autofillgoodnewpostajax.open("post","submit.php",true);
		autofillgoodnewpostajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		autofillgoodnewpostajax.send(formpost);
}



//商品入库检查
function goodsInvoicing(f,n) {
var forminfo = new Array(); 
var errornumber = 0;
//alert("goodsInvoicing");
for (var i=0;i<n;i++){
	forminfo[i] = document.forms[f][f+"input"+i].value;
	document.forms[f][f+"input"+i].value = "";
	//alert(forminfo[i]);
	if (forminfo[i] == null || forminfo[i] == "") {
		//修改状态
		document.getElementById(f+"state"+i).className = "form-group has-error";
		//提示信息
		document.getElementById(f+"helpBlock"+i).style.visibility="visible";
		errornumber = errornumber + 1; 
    }else{
		document.getElementById(f+"state"+i).className = "form-group";
		document.getElementById(f+"helpBlock"+i).style.visibility="hidden";
		
	}

}
    if(errornumber >= 1){
		Modal.build('modal-sm','feedback','btn-warning','请检查商品入库信息是否填写完整!','信息提交失败');	
		Modal.show();
		return false;
	}else{
		goodsInvoicingpost(forminfo);
		return false;	
	}
}

//商品入库信息登记
function goodsInvoicingpost(forminfo){
		//alert("新建");
		var goodsInvoicingpostjson;
		goodsInvoicingpostjson = { "goodsid":forminfo[0], "goodsprice":forminfo[1], "goodsInvoicingnumber":forminfo[2], "goodsInvoicinguser":forminfo[3], "goodsname":forminfo[4], "goodsbrand":forminfo[5], "goodsspecifications":forminfo[6], "goodsunit":forminfo[7]};
		
		if (window.XMLHttpRequest)
		{
			// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			goodsnewajax=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			goodsnewajax=new ActiveXObject("Microsoft.XMLHTTP");
		}
  
  
		goodsnewajax.onreadystatechange=function()
		{
		if (goodsnewajax.readyState==4 && goodsnewajax.status==200)
		{
		//alert(goodsnewajax.responseText);
		if(goodsnewajax.responseText=="写入成功"){
		Modal.build('modal-sm','feedback','btn-success','商品入库信息记录成功!','信息提交成功',"goodsinvoicingform()");
		Modal.show();
		changegoodsindex(goodsInvoicingpostjson,"in");
		}else{
		Modal.build('modal-sm','feedback','btn-warning','请检查商品入库信息是否填写正确!','信息提交失败');	
		Modal.show();
		}
		
		}
		}
		
		var formpost = "";
		formpost = "goodsid" + "=" + forminfo[0] + "&";
		formpost = formpost + "goodsprice" + "=" + forminfo[1] + "&";
		formpost = formpost + "goodsInvoicingnumber" + "=" + forminfo[2] + "&";
		formpost = formpost + "goodsInvoicinguser" + "=" + forminfo[8] + "&";
		formpost = formpost + "goodsname" + "=" + forminfo[4] + "&";
		formpost = formpost + "goodsbrand" + "=" + forminfo[5] + "&";
		formpost = formpost + "goodsspecifications" + "=" + forminfo[6] + "&";
		formpost = formpost + "goodsunit" + "=" + forminfo[7] + "&";
		formpost = formpost + "submit" + "=" + "goodsInvoicingpost";
		//alert(formpost);
		goodsnewajax.open("post","submit.php",true);
		goodsnewajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		goodsnewajax.send(formpost);
}

//商品入库后更新商品目录
function changegoodsindex(goodsInvoicingpostjson,goodschange){
		//alert("新建");
		
		if (window.XMLHttpRequest)
		{
			// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			goodsnewajax=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			goodsnewajax=new ActiveXObject("Microsoft.XMLHTTP");
		}
  
  
		goodsnewajax.onreadystatechange=function()
		{
		if (goodsnewajax.readyState==4 && goodsnewajax.status==200)
		{
		//alert(goodsnewajax.responseText);
		if(goodsnewajax.responseText=="写入成功"){
		//alert("更新商品目录成功！");
		}else{
	    //alert("更新商品目录失败！");
		}
		
		}
		}

		var formpost = "";
		formpost = "goodsid" + "=" + goodsInvoicingpostjson.goodsid + "&";
		formpost = formpost + "goodsprice" + "=" + goodsInvoicingpostjson.goodsprice + "&";
		formpost = formpost + "goodsInvoicingnumber" + "=" + goodsInvoicingpostjson.goodsInvoicingnumber + "&";
		formpost = formpost + "goodsInvoicinguser" + "=" + goodsInvoicingpostjson.goodsInvoicinguser + "&";
		formpost = formpost + "goodsname" + "=" + goodsInvoicingpostjson.goodsname + "&";
		formpost = formpost + "goodsbrand" + "=" + goodsInvoicingpostjson.goodsbrand + "&";
		formpost = formpost + "goodsspecifications" + "=" + goodsInvoicingpostjson.goodsspecifications + "&";
		formpost = formpost + "goodsunit" + "=" + goodsInvoicingpostjson.goodsunit + "&";
		formpost = formpost + "goodschange" + "=" + goodschange + "&";
		formpost = formpost + "submit" + "=" + "changegoodsindex";
		//alert(formpost);
		goodsnewajax.open("post","submit.php",true);
		goodsnewajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		goodsnewajax.send(formpost);
}


//显示商品销售记录
function goodssalesform()
{
  //alert("调用goodssalesform成功");
  
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    goodssalesformajax=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    goodssalesformajax=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  
  goodssalesformajax.onreadystatechange=function()
  {
	
    if (goodssalesformajax.readyState==4 && goodssalesformajax.status==200)
    {
	  
	  //alert(goodssalesformajax.responseText);
	  os.loadindex(goodssalesformajax.responseText,"goodssalestable","#goodsout","10");
	  os.osselect();
	  os.shownav();
	  os.laquoandraquo();
    }
  }
  
  var formpost = "";

	formpost = "submit" + "=" + "goodssalesfrom";
  //alert(formpost);
  goodssalesformajax.open("post","submit.php",true);
  goodssalesformajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  goodssalesformajax.send(formpost);
  
}


//自动填充商品销售记录
function autofillgoodssales(goodsid){
		//alert("自动");
		//goodsid = $("#goodsnewforminput0").val();
		
		if (window.XMLHttpRequest)
		{
			// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			autofillgoodssalesajax=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			autofillgoodssalesajax=new ActiveXObject("Microsoft.XMLHTTP");
		}
  
  
		autofillgoodssalesajax.onreadystatechange=function()
		{
		if (autofillgoodssalesajax.readyState==4 && autofillgoodssalesajax.status==200)
		{
		//alert(autofillgoodssalesajax.responseText);
		if(autofillgoodssalesajax.responseText=="没找到商品"){
			for(i=3;i<8;i++){
				$("#goodsInvoicingforminput"+i).val("没找到商品！请重新输入编号")
			}
		}else{
			goods = JSON.parse(autofillgoodssalesajax.responseText);
			//alert(goods.goodsname);
			$("#goodssalesfrominput5").val(getCookie("name"));
			$("#goodssalesfrominput6").val(goods.goodsname);
			$("#goodssalesfrominput7").val(goods.goodsbrand);
			$("#goodssalesfrominput8").val(goods.goodsspecifications);
			$("#goodssalesfrominput9").val(goods.goodsunit);
			$("#goodssalesfrominput10").val(getCookie("userid"));			
		}
		
		}
		}

		var formpost = "";
		formpost = "goodsnewforminput0" + "=" + goodsid + "&";
		formpost = formpost + "submit" + "=" + "autofillgoodssales";
		//alert(formpost);
		autofillgoodssalesajax.open("post","submit.php",true);
		autofillgoodssalesajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		autofillgoodssalesajax.send(formpost);
}


//商品销售记录检查
function goodssales(f,n) {
var forminfo = new Array(); 
var errornumber = 0;
//alert("goodsInvoicing");
for (var i=0;i<n;i++){
	forminfo[i] = document.forms[f][f+"input"+i].value;
	document.forms[f][f+"input"+i].value = "";
	//alert(forminfo[i]);
	if (forminfo[i] == null || forminfo[i] == "") {
		//修改状态
		document.getElementById(f+"state"+i).className = "form-group has-error";
		//提示信息
		document.getElementById(f+"helpBlock"+i).style.visibility="visible";
		errornumber = errornumber + 1; 
    }else{
		document.getElementById(f+"state"+i).className = "form-group";
		document.getElementById(f+"helpBlock"+i).style.visibility="hidden";
		
	}

}
    if(errornumber >= 1){
		Modal.build('modal-sm','feedback','btn-warning','请检查商品入库信息是否填写完整!','信息提交失败');
		Modal.show();	
		return false;
	}else{
		goodssalespost(forminfo);
		return false;	
	}
}

//商品销售信息登记
function goodssalespost(forminfo){
		//alert("新建");
		var goodssalespostjson;
		goodssalespostjson = { "goodsid":forminfo[0], "goodsprice":forminfo[1], "goodsInvoicingnumber":forminfo[2], "goodsInvoicinguser":forminfo[5], "goodsname":forminfo[6], "goodsbrand":forminfo[7], "goodsspecifications":forminfo[8], "goodsunit":forminfo[9]};
		
		if (window.XMLHttpRequest)
		{
			// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			goodssalespostajax=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			goodssalespostajax=new ActiveXObject("Microsoft.XMLHTTP");
		}
  
  
		goodssalespostajax.onreadystatechange=function()
		{
		if (goodssalespostajax.readyState==4 && goodssalespostajax.status==200)
		{
		//alert(goodssalespostajax.responseText);
		if(goodssalespostajax.responseText=="写入成功"){
		Modal.build('modal-sm','feedback','btn-success','商品入库信息记录成功!','信息提交成功',"goodssalesform()");
		Modal.show();
		changegoodsindex(goodssalespostjson,"out");
		}else{
		Modal.build('modal-sm','feedback','btn-warning','请检查商品入库信息是否填写正确!','信息提交失败');	
		Modal.show();
		}
		
		}
		}
		
		var formpost = "";
		formpost = "goodsid" + "=" + forminfo[0] + "&";
		formpost = formpost + "goodsprice" + "=" + forminfo[1] + "&";
		formpost = formpost + "discountamount" + "=" + forminfo[4] + "&";
		formpost = formpost + "goodsbuyer" + "=" + forminfo[3] + "&";
		formpost = formpost + "goodssalesnumber" + "=" + forminfo[2] + "&";
		formpost = formpost + "goodssalesuser" + "=" + forminfo[10] + "&";
		formpost = formpost + "goodsname" + "=" + forminfo[6] + "&";
		formpost = formpost + "goodsbrand" + "=" + forminfo[7] + "&";
		formpost = formpost + "goodsspecifications" + "=" + forminfo[8] + "&";
		formpost = formpost + "goodsunit" + "=" + forminfo[9] + "&";
		formpost = formpost + "submit" + "=" + "goodssalespost";
		//alert(formpost);
		goodssalespostajax.open("post","submit.php",true);
		goodssalespostajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		goodssalespostajax.send(formpost);
}


//商品销售数据选择周期
function selectcycle(id){
		var myDate = new Date();
		switch(id){
		case "year":
			//alert(id);
			$ ('.form_date').datetimepicker('remove');
			$('.form_date').datetimepicker({
				format: 'yyyy',
				weekStart: 1,
				autoclose: 1,
				todayHighlight: 1,
				startView: 4,
				minView: 4,
				forceParse: 0,
				language: 'zh-CN',
				pickerPosition: 'top-left',
				startDate: '2017-1-1',
				endDate: '2050-1-1',
			});
			$("#goodssalesdataforminput1").val("");
			$("#goodssalesdataforminput2").val("");
		break;
		case "moon":
			//alert(id);
			$ ('.form_date').datetimepicker('remove');
			$('.form_date').datetimepicker({
				format: 'yyyy-mm',
				weekStart: 1,
				autoclose: 1,
				todayHighlight: 1,
				startView: 3,
				minView: 3,
				forceParse: 0,
				language: 'zh-CN',
				pickerPosition: 'top-left',
				startDate: '2017-1-1',
				endDate: '2050-1-1',
			});
			$("#goodssalesdataforminput1").val("");
			$("#goodssalesdataforminput2").val("");
		break;
		case "date":
			//alert(id);
			$ ('.form_date').datetimepicker('remove');
			$('.form_date').datetimepicker({
				format: 'yyyy-mm-dd',
				weekStart: 1,
				autoclose: 1,
				todayHighlight: 1,
				startView: 2,
				minView: 2,
				forceParse: 0,
				language: 'zh-CN',
				pickerPosition: 'top-left',
				startDate: '2017-1-1',
				endDate: '2050-1-1',
				todayBtn:1,
			});
			$("#goodssalesdataforminput1").val("");
			$("#goodssalesdataforminput2").val("");
		break;
	}
}

//商品销售数据读取
function readgoodsdata(){
	
       //alert("readgoodsdata");
	   
		var bg = $("#goodssalesdataforminput1").val();
		var ed = $("#goodssalesdataforminput2").val();
		n=bg.split("-");
		m=ed.split("-");
		
		var cycletest = /-/g;
		if(bg.match(cycletest)==null || bg.match(cycletest)==""){
			//alert("年");
			if(m[0]-n[0]<0){
				alert("结束日期在开始日期之前，请重新选择！");
				$("#goodssalesdataforminput1").val("");
				$("#goodssalesdataforminput2").val("");
				return false;
			}else{
				cycle = "year";
				readgoodsdatapost(bg,ed,cycle);
				return false;
			}
		}else{
		switch(bg.match(cycletest).length){
			case 2:
				//alert("日");
				if(m[0]-n[0]<0){
					alert("结束日期在开始日期之前，请重新选择！");
					$("#goodssalesdataforminput1").val("");
					$("#goodssalesdataforminput2").val("");
					return false;
				}else if(m[0]-n[0]==0){
					if(m[1]-n[1]<0){
						alert("结束日期在开始日期之前，请重新选择！");
						$("#goodssalesdataforminput1").val("");
						$("#goodssalesdataforminput2").val("");
						return false;
					}else if(m[1]-n[1]==0){
						if(m[2]-n[2]<0){
							alert("结束日期在开始日期之前，请重新选择！");
							$("#goodssalesdataforminput1").val("");
							$("#goodssalesdataforminput2").val("");
							return false;
						}else{
							cycle = "date";
							readgoodsdatapost(bg,ed,cycle)
							return false;
						}
					}else{
						cycle = "date";
						readgoodsdatapost(bg,ed,cycle)
						return false;
					}
				}else{
					cycle = "date";
					readgoodsdatapost(bg,ed,cycle)
					return false;
				}
				
			break;
			case 1:
				//alert("月");
				if(m[0]-n[0]<0){
					alert("结束日期在开始日期之前，请重新选择！");
					$("#goodssalesdataforminput1").val("");
					$("#goodssalesdataforminput2").val("");
					return false;
				}else if(m[0]-n[0]==0){
					if(m[1]-n[1]<0){
						alert("结束日期在开始日期之前，请重新选择！");
						$("#goodssalesdataforminput1").val("");
						$("#goodssalesdataforminput2").val("");
						return false;
					}else{
						cycle = "moon";
						readgoodsdatapost(bg,ed,cycle)
						return false;
					}
				}else{
					cycle = "moon";
					readgoodsdatapost(bg,ed,cycle)
					return false;
				}
			break;
		}}
}

//读取商品销售数据表格
function readgoodsdatapost(bg,ed,cycle){
	if (window.XMLHttpRequest)
		{
			//IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			readgoodsdataajax=new XMLHttpRequest();
		}
		else
		{
			//IE6, IE5 浏览器执行代码
			readgoodsdataajax=new ActiveXObject("Microsoft.XMLHTTP");
		}
  
  
		readgoodsdataajax.onreadystatechange=function()
		{
		if (readgoodsdataajax.readyState==4 && readgoodsdataajax.status==200)
		{
		n=readgoodsdataajax.responseText.split("*");
		a=n[0].split("@");
		b=n[1].split("@");
		//alert(readgoodsdataajax.responseText);
		//alert(n[0]);
		//alert(a[0]);
		labelsa = JSON.parse(a[0]);
		dataa = JSON.parse(a[1]);
		labelsb = JSON.parse(b[0]);
		datab = JSON.parse(b[1]);
		//ShowObjProperty(data);
		
		
		
		var ctx = document.getElementById("myChart").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: labelsa,
				datasets: [{
				label: '销售金额',
				data: dataa,
				backgroundColor: 'rgba(91, 192, 222, 0)',
				borderColor: 'rgba(66, 139, 202, 1)',
				borderWidth: 2
				},{
				label: '利润',
				data: datab,
				backgroundColor: 'rgba(117, 237, 112, 0.2)',
				borderColor: 'rgba(92,184,92, 1)',
				borderWidth: 2
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				},
			}
		});
		
		
		if(readgoodsdataajax.responseText=="写入成功"){
		
		}else{
		
		}
		
		}
		}
		
		var formpost = "";
		formpost = "bg" + "=" + bg + "&";
		formpost = formpost + "ed" + "=" + ed + "&";
		formpost = formpost + "cycle" + "=" + cycle + "&";
		formpost = formpost + "submit" + "=" + "readgoodsdata";
		//alert(formpost);
		readgoodsdataajax.open("post","submit.php",true);
		readgoodsdataajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		readgoodsdataajax.send(formpost);	
}


//读取对象内容
function ShowObjProperty(Obj) 
{ 
var PropertyList=''; 
var PropertyCount=0; 
for(i in Obj){ 
if(Obj.i !=null) 
PropertyList=PropertyList+i+'属性：'+Obj.i+'\r\n'; 
else 
PropertyList=PropertyList+i+'方法\r\n'; 
} 
alert(PropertyList); 
} 

//读取公告栏
function readnoticeboard(department){
		//alert("自动");
		//goodsid = $("#goodsnewforminput0").val();
		
		if (window.XMLHttpRequest)
		{
			// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			readnoticeboardajax=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			readnoticeboardajax=new ActiveXObject("Microsoft.XMLHTTP");
		}
  
  
		readnoticeboardajax.onreadystatechange=function()
		{
		if (readnoticeboardajax.readyState==4 && readnoticeboardajax.status==200)
		{
		//alert(readnoticeboardajax.responseText);
		var noticeboard = JSON.parse(readnoticeboardajax.responseText);
			
			$("#noticeboardtitle").text(noticeboard.title);
			if(noticeboard.body!=null && noticeboard.body!="null"){
				//alert(noticeboard.body);
				$("#noticeboardbody").html(noticeboard.body);
				$("#noticeboardissuer").html(noticeboard.issuer);
				$("#noticeboardpubdate").html(noticeboard.pubdate);
			}
		
		}
		}

		var formpost = "";
		formpost = "department" + "=" + department + "&";
		formpost = formpost + "submit" + "=" + "readnoticeboard";
		//alert(formpost);
		readnoticeboardajax.open("post","submit.php",true);
		readnoticeboardajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		readnoticeboardajax.send(formpost);
}

//读取修改公告栏表格
function readnoticeboardpostform(department){

		var userdepartment=new RegExp(getCookie("department"));
		var permission=new RegExp(getCookie("permission"));
		//alert(permission);
		//alert(permission.test($("#noticeboardhead").text()));
		//监测是否本部门
        if(userdepartment.test($("#noticeboardhead").text()) || permission.test($("#noticeboardhead").text()) ){
			
		if (window.XMLHttpRequest)
		{
			// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			noticeboardpostformajax=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			noticeboardpostformajax=new ActiveXObject("Microsoft.XMLHTTP");
		}
  
  
		noticeboardpostformajax.onreadystatechange=function()
		{
		if (noticeboardpostformajax.readyState==4 && noticeboardpostformajax.status==200)
		{
		//alert(noticeboardpostformajax.responseText);
		//alert(inner);
		//$("#Modalbody").html(noticeboardpostformajax.responseText);
		Modal.build('modal-lg','post','btn-primary',noticeboardpostformajax.responseText,'修改公告栏',"noticeboard('noticeboardpostform','5')");
		Modal.show();
		$("#noticeboardpostforminput1").attr("value",getCookie("name"));
		$("#noticeboardpostforminput3").attr("value",getCookie("userid"));
		if(department!=getCookie("department")){
			$("#noticeboardpostforminput4").attr("value","主页");
		}else{
			$("#noticeboardpostforminput4").attr("value",getCookie("department"));
		}
		// $("#noticeboardpostforminput1").val(getCookie("name"));
		// $("#noticeboardpostforminput3").val(getCookie("userid"));
		// $("#noticeboardpostforminput4").val(getCookie("department"));
		//alert("结束")
		}
		}

		var formpost = "";
		formpost = formpost + "submit" + "=" + "noticeboardpostform";
		//alert(formpost);
		noticeboardpostformajax.open("post","submit.php",true);
		noticeboardpostformajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		noticeboardpostformajax.send(formpost);
		
		}else{
			Modal.build('modal-sm','feedback','btn-warning','没有权限修改!','注意');
			Modal.show();
		}
		
}



//修改公告栏信息提交
function setnoticeboard(forminfo){
		//alert("自动");
		//goodsid = $("#goodsnewforminput0").val();
		
		if (window.XMLHttpRequest)
		{
			// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			setnoticeboardajax=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			setnoticeboardajax=new ActiveXObject("Microsoft.XMLHTTP");
		}
  
  
		setnoticeboardajax.onreadystatechange=function()
		{
		if (setnoticeboardajax.readyState==4 && setnoticeboardajax.status==200)
		{
		//alert(setnoticeboardajax.responseText);
		if(setnoticeboardajax.responseText=="写入成功"){
			Modal.build('modal-sm','feedback','btn-success','修改公告栏成功!','信息提交成功',readnoticeboard(forminfo[4]));
			Modal.show();
		}else{
			Modal.build('modal-sm','feedback','btn-warning','修改公告栏失败','信息提交失败');
			Modal.show();
		}
		}
		}

		var formpost = "";
		formpost = "department" + "=" + forminfo[4] + "&";
		formpost = formpost + "title" + "=" + forminfo[0] + "&";
		formpost = formpost + "body" + "=" + forminfo[2] + "&";
		formpost = formpost + "issuer" + "=" + forminfo[3] + "&";
		formpost = formpost + "submit" + "=" + "setnoticeboard";
		//alert(formpost);
		setnoticeboardajax.open("post","submit.php",true);
		setnoticeboardajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		setnoticeboardajax.send(formpost);
}



//公告栏修改检查
function noticeboard(f,n) {
var forminfo = new Array(); 
var errornumber = 0;
//alert("goodsInvoicing");
for (var i=0;i<n;i++){
	forminfo[i] = document.forms[f][f+"input"+i].value;
	//document.forms[f][f+"input"+i].value = "";
	//alert(forminfo[i]);
	if (forminfo[i] == null || forminfo[i] == "") {
		//修改状态
		document.getElementById(f+"state"+i).className = "form-group has-error";
		//提示信息
		document.getElementById(f+"helpBlock"+i).style.visibility="visible";
		errornumber = errornumber + 1; 
    }else{
		//alert(f+"state"+i);
		document.getElementById(f+"state"+i).className = "form-group";
		document.getElementById(f+"helpBlock"+i).style.visibility="hidden";
		
	}

}
    if(errornumber >= 1){
		//Modal.build('modal-sm','feedback','btn-warning','请检查信息是否填写完整!','信息提交失败');	
		//Modal.show();
		return false;
	}else{
		setnoticeboard(forminfo);
		return false;	
	}
}

var Modal = {
	size:'modal-sm',  //size:modal-lg  modal-sm
	style:'feedback',	//style:post feedback
	state:'btn-primary', //state:  btn-primary   btn-success  btn-info  btn-warning  btn-danger
	title:'',
	body:'',
	
	
	build:function(size,style,state,body,title,target){
		Modal.size=size;
		Modal.style=style;
		Modal.state=state;
		Modal.body=body;
		Modal.title=title;
		Modal.target=target;
		$("#Modalsize").attr("Class","modal-dialog "+Modal.size);
		$("#Modalbody").html(Modal.body);
		$("#Modaltitle").html(Modal.title);
		if(Modal.style=="feedback"){
			if( Modal.target!="" || Modal.target != null){
				$("#Modalstyle").html("<button type=\"button\" class=\"btn "+Modal.state+"\" data-dismiss=\"modal\" onclick=\""+Modal.target+"\" >确认</button>");
			}else{
				$("#Modalstyle").html("<button type=\"button\" class=\"btn "+Modal.state+"\" data-dismiss=\"modal\" >确认</button>");
			}
		}else{
			$("#Modalstyle").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" >关闭</button><button type=\"button\" class=\"btn "+Modal.state+"\" onclick=\""+Modal.target+"\">提交</button>");
		}
	},
	
	show:function(){
		$('#Modal').modal('show'); 
	},
	
	clear:function(){
		Modal.title='';
		Modal.body='';
	},
}

//成功模态框
// function Modal(size,style,state,inner,title,target){

// var body=inner+"";

// if(style=="feedback"){
	// if( target!="" || target != null){
		// $("#Modalstyle").html("<button type=\"button\" class=\"btn "+state+"\" data-dismiss=\"modal\" onclick=\""+target+"\" >确认</button>");
	// }else{
		// $("#Modalstyle").html("<button type=\"button\" class=\"btn "+state+"\" data-dismiss=\"modal\" >确认</button>");
	// }
// }else{
	// $("#Modalstyle").html("<button type=\"button\" class=\"btn btn-default\" onclick=\"Modaltoggle()\">关闭</button><button type=\"button\" class=\"btn "+state+"\" onclick=\""+target+"\">提交</button>");
// }
// $("#Modalbody").html(body);
// $("#Modaltitle").html(title);
// $('#Modal').modal('toggle'); 


// }

//必须先变更模态框内容，不然主函数会失效，未知原因。
// function Modaltoggle(){
	// $("#Modalbody").html("");
	// $('#Modal').modal('toggle'); 
// }



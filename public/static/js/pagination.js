//分页
function pagination(content,sign,userpage)
{
    this.sign=sign;
	this.alltr=content.match(/\<tr\>/g);
	this.prepagenumber=userpage;
	this.page=Math.ceil((this.alltr.length-1)/this.prepagenumber);
	this.temp=content;
	this.navhead='<div class="text-center"><nav aria-label="Page navigation" id='+this.sign+'nav ><ul class="pagination">';
	this.Previous='<li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>';
	this.navbody='';
	this.next='<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>';
	this.navfoot=' </ul></nav></div>';
	this.nav='';
	this.now=1;
	this.column=0;
	this.pageselect='<select id="'+this.sign+'navselect"><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="60">60</option></select>';
	
	
	//【初始化】
	
	//获取列数
	var columntemp=content.match(/\<tr\>\S+\<\/tr\>/);
	var columntemp2=columntemp[0].match(/\<th\>/g);
	this.column=columntemp2.length;
	
	//截取table
	var temptemp = this.temp.match(/\<table[\s\S]+\<\/table\>/);
	this.temp = temptemp[0];
	
	//将获取的字符串分段以方便插入空白行
	var addtemp1=this.temp.substr(0,this.temp.lastIndexOf('</tr>'));
	var addtemp3=this.temp.substr(this.temp.lastIndexOf('</tr>'));
    var addtemp2='';
	
	
	//填充空白位置
	for(var i=0;i<=(this.alltr.length%this.prepagenumber);i++){
		addtemp2=addtemp2+'<tr>';
		for(var b=0;b<this.column;b++){
			addtemp2=addtemp2+'<td>';
		}
		addtemp2=addtemp2+'</tr>';
	}
	this.temp = addtemp1+addtemp2+addtemp3;
	//alert(addtemp2);
	
	
	//添加标记
    for(id in (this.alltr+this.alltr.length%this.prepagenumber)){
		this.content=this.temp.replace("<tr>","<tr "+"id="+this.sign+'tb'+id+">");
		this.temp=this.content;
	}
	
	
	//重新添加表格
	$('#'+sign).html(this.content);
	
	//alert(this.column);
	
	//检测当前页数并变化导航栏
	if(this.now==1){
		this.Previous='<li class="disabled"><a href="javascript:void(0)" aria-label="Previous" id="'+this.sign+'navpagerevious"><span aria-hidden="true">&laquo;</span></a></li>';
	}else{
		this.Previous='<li><a href="javascript:void(0)" aria-label="Previous" id="'+this.sign+'navpagerevious"><span aria-hidden="true">&laquo;</span></a></li>';
	}
	if(this.now-this.page==0){
		this.next='<li class="disabled"><a href="javascript:void(0)" aria-label="Next" id="'+this.sign+'navnex"><span aria-hidden="true">&raquo;</span></a></li>';
	}else{
		this.next='<li><a href="javascript:void(0)" aria-label="Next" id="'+this.sign+'navnex"><span aria-hidden="true">&raquo;</span></a></li>';
	}
	
	//合拼导航栏
	for(var i=1;i<=this.page;i++){
		if(i==1){
			this.navbody=this.navbody+'<li class="active"><a href="javascript:void(0)" class="'+this.sign+'navpage" id="'+this.sign+'navpage'+i+'">'+i+'</a></li>';
		}else{
			this.navbody=this.navbody+'<li><a href="javascript:void(0)" class="'+this.sign+'navpage" id="'+this.sign+'navpage'+i+'">'+i+'</a></li>';
		}
		
	}
	this.nav=this.navhead+this.Previous+this.navbody+this.next+this.navfoot;
	
	
	//注册页数点击事件
	this.signupClick=signupClick;
	function signupClick(sign){
		//$('.'+this.sign+'navpage').on("click", {page:"123"}, this.selectOperate);
		$('#'+this.sign+'navpagerevious').click({sign:sign},this.previousOperate)
		$('#'+this.sign+'navnex').click({sign:sign},this.nextOperate);
		$('.'+this.sign+'navpage').click({sign:sign},this.selectOperate);
	}
	
	
	
	//显示表格
	this.showtb=showtb;
	function showtb(){
		//隐藏所有
		for(id in (this.alltr+this.alltr.length%this.prepagenumber)){
			//alert('隐藏'+'#'+this.sign+'tb'+id);
			$('#'+this.sign+'tb'+id).hide();
		}
		//显示表头
		$('#'+this.sign+'tb'+0).show();
		//显示内容
		for(var i=(this.now-1)*this.prepagenumber+1;i<=this.now*this.prepagenumber;i++){
		//alert('显示'+'#'+this.sign+'tb'+i);
		//alert(this.now);
		$('#'+this.sign+'tb'+i).show();
		}
		
	}
	
	this.showtb();
	
	//前一页操作
	this.previousOperate=previousOperate;
    function previousOperate(event)
    {
		var tempnow =eval(event.data.sign+'.now');
		if((tempnow-1)==0){
			alert('现在已经是第一页');
		}else{
		eval(event.data.sign+'.now='+event.data.sign+'.now-1');
		eval(event.data.sign+'.showtb()');
		eval(event.data.sign+'.navRenovate()');
		}
		eval(event.data.sign+'.navActive()');
		//alert(eval(event.data.sign+'.now'));
    }
	
	
	//后一页操作
	this.nextOperate=nextOperate;
    function nextOperate(event)
    {
		var tempnow =eval(event.data.sign+'.now');
		var temppage =eval(event.data.sign+'.page');
		if(tempnow+1>temppage){
			alert('现在已经是最后一页');
		}else{
			eval(event.data.sign+'.now='+event.data.sign+'.now+1');
			eval(event.data.sign+'.showtb()');
			eval(event.data.sign+'.navRenovate()');	
		}
		eval(event.data.sign+'.navActive()');
        //alert(eval(event.data.sign+'.now'));
    }
	
	//选取页操作
	this.selectOperate=selectOperate;
    function selectOperate(event)
    {
		var temppage = event.currentTarget.id;
        eval(event.data.sign+'.now=temppage.match(/[0-9]+/)');
		eval(event.data.sign+'.showtb()');
		eval(event.data.sign+'.navRenovate()');
		eval(event.data.sign+'.navActive()');
		//alert(eval(event.data.sign+'.now'));
	}
	
	//导航栏刷新
	this.navRenovate=navRenovate;
	function navRenovate(){
		if(this.now==1){
			$('#'+this.sign+'navpagerevious').parent().addClass("disabled");
			$('#'+this.sign+'navnex').parent().removeClass("disabled");
		}else if(this.now-this.page==0){
			$('#'+this.sign+'navpagerevious').parent().removeClass("disabled");
			$('#'+this.sign+'navnex').parent().addClass("disabled");
		}
		//alert('导航栏已刷新');
		//alert('#'+this.sign+'navpagerevious')
	}

	//激活刷新
	this.navActive=navActive;
	function navActive(){
		for(var i=0;i<=this.page;i++){
			$('#'+this.sign+'navpage'+i).parent().removeClass('active');
		}
		$('#'+this.sign+'navpage'+this.now).parent().addClass('active');
	}
	
}

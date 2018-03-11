<?php
namespace app\index\controller;

use think\Controller;
use app\index\model\EatEveryday as EatEverydayModel;
use think\Request; 
use think\Session;
use think\Db;

class EatEveryday extends Controller
{
    public function signUp(Request $request)
    { 
	  
	  
	  if($request->param('checksignup')==""){
			$eat = new EatEverydayModel;
			$eat->userid = $request->session('id');
			$eat->name = $request->session('name');
			$eat->lunch = $request->param('lunch');
			$eat->dinner = $request->param('dinner');
			$eat->suggest = $request->param('suggest');
			//$eat->ordertime = date("Y-m-d-H-i-s"); 
			//return $request->session('userid')."-".$request->session('name')."-".$request->param('lunch')."-".$request->param('dinner')."-".$request->param('suggest');
		if($eat->save()){
			return '报餐成功';
		}else{
			return '报餐失败' . $eat->getError();
		}
	   }else{
			$eat = EatEverydayModel::get($request->param('checksignup'));
			$eat->lunch = $request->param('lunch');
			$eat->dinner = $request->param('dinner');
			$eat->suggest = $request->param('suggest');
			if($eat->save()){
				return '修改成功';
			}else{
				return '修改失败' . $eat->getError();
			}

	   }
	}
	
	
	 public function show(Request $request)
    { 
		$this->assign('day',date("Y年m月d日"));
	
		if(date("Y-m-d-H-i-s")>date("Y-m-d-10-00-00")){
			
			//提前报餐
		$tomorrow = (date("d")+1)<10 ? "0".(date("d")+1) : date("d")+1;
		$tomorrowday = date("Y-m-").$tomorrow;
		$tomorrowtime = date("Y-m-").$tomorrow."-"."10"."-"."00"."-"."00";
		$result = Db::query('select * from bdsy_eat_everyday where userid = "'.$request->session('id').'" AND ordertime > "'.date("Y-m-d-10-00-00").'" AND ordertime < "'.$tomorrowtime.'"');
		
			//已经提前报餐
			//return 'select * from bdsy_eat_everyday where userid = "'.$request->session('id').'" AND ordertime > "'.date("Y-m-d-10-00-00").'" AND ordertime < "'.$tomorrowtime.'"'."------".dump($result);
			if (count($result)>0){
			if($result[0]['lunch']==1){
				$lunch = '<span class="label label-success">吃饭</span>';
				$lscene = 'success';
			}else{
				$lunch = '<span class="label label-warning">不吃</span>
';
				$lscene = 'warning';
			}
			if($result[0]['dinner']==1){
				$dinner = '<span class="label label-success">吃饭</span>';
				$dscene = 'success';
			}else{
				$dinner = '<span class="label label-warning">不吃</span>
';
				$dscene = 'warning';
			}
			$this->assign('effectiveday','<span class="label label-info">'.$tomorrowday.'</span>'); 
			$this->assign('tip','<div class="alert alert-warning" role="alert"><strong>今天报餐已结束！若错过了今天的报餐，请及时联系综合部，谢谢！</strong></div><div class="alert alert-success" role="alert"><strong>您已提交了明天的报餐！</strong></div>');
			$this->assign('today',date("Y-m-d-H-i-s"));
			$this->assign('checksignup',$result[0]['id']);
			$this->assign('posttime',$result[0]['ordertime']);
			$this->assign('lunch',$lunch);
			$this->assign('dinner',$dinner);
			$this->assign('lunchi',$result[0]['lunch']);
			$this->assign('dinneri',$result[0]['dinner']);
			$this->assign('lscene',$lscene);
			$this->assign('dscene',$dscene);
			$this->assign('suggest',$result[0]['suggest']);
			$this->assign('pscene','warning');
			$this->assign('ptext','修改');
			$this->assign('eatsuggest',$result[0]['suggest']);
			//return json($result);
		}else{
			
			//未提前报餐
			$this->assign('effectiveday','<span class="label label-info">'.$tomorrowday.'</span>');      
			$this->assign('tip','<div class="alert alert-warning" role="alert"><strong>今天报餐已结束！若错过了今天的报餐，请及时联系综合部，谢谢！</strong></div><div class="alert alert-info" role="alert"><strong>您现在可以进行明天的报餐！</strong></div>');
			$this->assign('today',date("Y-m-d-H-i-s"));
			$this->assign('checksignup','');
			$this->assign('posttime','未有提交');
			$this->assign('lunch','<span class="label label-danger">未报餐</span>');
			$this->assign('dinner','<span class="label label-danger">未报餐</span>');
			$this->assign('lunchi',"");
			$this->assign('dinneri',"");
			$this->assign('lscene','info');
			$this->assign('dscene','info');
			$this->assign('suggest','<span class="label label-danger">未报餐</span>');
			$this->assign('pscene','primary');
			$this->assign('ptext','提交');
			$this->assign('eatsuggest','');
		}
			
			//显示已报餐情况
			$this->assign('eatcount',$this->eatcount());
			$this->assign('eatsituation',$this->eatsituation());
			return $this->fetch();
		
		}else{
			
			
			
		//当天报餐
		$lastday = (date("d")-1)<10 ? "0".(date("d")-1) : date("d");
		$lastdaytime = date("Y-m-").$lastday."-"."10"."-"."00"."-"."00";
		$result = Db::query('select * from bdsy_eat_everyday where userid = "'.$request->session('id').'" AND ordertime > "'.$lastdaytime.'" AND ordertime < "'.date("Y-m-d-10-00-00").'"');
		
		//当天已经报餐
		if (count($result)>0){
			if($result[0]['lunch']==1){
				$lunch = '<span class="label label-success">吃饭</span>';
				$lscene = 'success';
			}else{
				$lunch = '<span class="label label-warning">不吃</span>
';
				$lscene = 'warning';
			}
			if($result[0]['dinner']==1){
				$dinner = '<span class="label label-success">吃饭</span>';
				$dscene = 'success';
			}else{
				$dinner = '<span class="label label-warning">不吃</span>
';
				$dscene = 'warning';
			}
			$this->assign('effectiveday','<span class="label label-info">'.date("Y-m-d").'</span>');
			$this->assign('tip','<div class="alert alert-danger" role="alert"><strong>今天报餐仍在进行中！</strong>您已提交了今天的报餐！</div>');
			$this->assign('today',date("Y-m-d-H-i-s"));
			$this->assign('checksignup',$result[0]['id']);
			$this->assign('posttime',$result[0]['ordertime']);
			$this->assign('lunch',$lunch);
			$this->assign('dinner',$dinner);
			$this->assign('lunchi',$result[0]['lunch']);
			$this->assign('dinneri',$result[0]['dinner']);
			$this->assign('lscene',$lscene);
			$this->assign('dscene',$dscene);
			$this->assign('suggest',$result[0]['suggest']);
			$this->assign('pscene','warning');
			$this->assign('ptext','修改');
			$this->assign('eatsuggest',$result[0]['suggest']);
			//return json($result);
		}else{
			
			
			
		//当天未报餐
			$this->assign('effectiveday','<span class="label label-info">'.date("Y-m-d").'</span>');
			$this->assign('tip','<div class="alert alert-warning" role="alert"><strong>今天报餐仍在进行中！</strong>建议您尽快进行报餐！</div>');
			$this->assign('today',date("Y-m-d-H-i-s"));
			$this->assign('checksignup','');
			$this->assign('posttime','未有提交');
			$this->assign('lunch','<span class="label label-danger">未报餐</span>');
			$this->assign('dinner','<span class="label label-danger">未报餐</span>');
			$this->assign('lunchi',"");
			$this->assign('dinneri',"");
			$this->assign('lscene','info');
			$this->assign('dscene','info');
			$this->assign('suggest','<span class="label label-danger">未报餐</span>');
			$this->assign('pscene','primary');
			$this->assign('ptext','提交');
			$this->assign('eatsuggest','');
		}
		}
		
		//显示已报餐情况
		$this->assign('eatcount',$this->eatcount());
		$this->assign('eatsituation',$this->eatsituation());
		return $this->fetch();
	}
	
	
	//显示已经报餐情况的方法
	private function eatsituation()
	{	
		//测试用
		//$result = $this->tomorrow();
		
		//实际调用
		$result = $this->lastday();
		
		$eatsituation='<tr><td colspan="5">今天暂未有人报餐！</td></tr>';
		if (count($result)>0){
			$eatsituation = '';
			foreach ($result as $value){
				$eatsituation = $eatsituation.'<tr>';
				$eatsituation = $eatsituation.'<td>'.$value['ordertime'].'</td>';
				$eatsituation = $eatsituation.'<td>'.$value['name'].'</td>';
				$value['lunch'] = $value['lunch']==1 ? '<span class="label label-success">吃饭</span>' : '<span class="label label-warning">不吃</span>';
				$eatsituation = $eatsituation.'<td>'.$value['lunch'].'</td>';
				$value['dinner'] = $value['dinner']==1 ? '<span class="label label-success">吃饭</span>' : '<span class="label label-warning">不吃</span>';
				$eatsituation = $eatsituation.'<td>'.$value['dinner'].'</td>';
				$eatsituation = $eatsituation.'<td>'.$value['suggest'].'</td>';
				$eatsituation = $eatsituation.'</tr>';
			}
		}else{
			$eatsituation='<tr><td colspan="5">今天暂未有人报餐！</td></tr>';
		}
		
		
		return $eatsituation;
		//return dump($result);
	}
	
	
	//统计已经报餐情况的方法
	private function eatcount()
	{	
		//测试用
		//$result = $this->tomorrow();
		
		//实际调用
		$result = $this->lastday();
	
		$lunch = 0;
		$dinner = 0;
		if (count($result)>0){
			foreach ($result as $value){
				$lunch = $value['lunch']==1 ? $lunch+1 : $lunch;
				$dinner = $value['dinner']==1 ? $dinner+1 : $dinner;
			}
			$eatcount='<div class="alert alert-info" role="alert">今天已经报餐的人数为：<strong>'.count($result).'</strong>人；午餐吃饭人数为：<strong>'.$lunch.'</strong>人；晚餐吃饭人数为：<strong>'.$dinner.'</strong>人</div>';
		}else{
			$eatcount='<div class="alert alert-warning" role="alert"><strong>今天暂未有人报餐！</strong></div>';
		}

		
		return $eatcount;
		//return dump($result);
	}
	
	
	//获得提前报餐的情况
	private function tomorrow()
	{	
		$tomorrow = (date("d")+1)<10 ? "0".(date("d")+1) : date("d");
		$tomorrowday = date("Y-m-").$tomorrow;
		$tomorrowtime = date("Y-m-").$tomorrow."-"."10"."-"."00"."-"."00";
		$result = Db::query('select * from bdsy_eat_everyday where  ordertime > "'.date("Y-m-d-10-00-00").'" AND ordertime < "'.$tomorrowtime.'"');
		return $result;
		//return dump($result);
	}
	
	//获得当前报餐的情况
	private function lastday()
	{	
		$lastday = (date("d")-1)<10 ? "0".(date("d")-1) : date("d");
		$lastdaytime = date("Y-m-").$lastday."-"."10"."-"."00"."-"."00";
		$result = Db::query('select * from bdsy_eat_everyday where ordertime > "'.$lastdaytime.'" AND ordertime < "'.date("Y-m-d-10-00-00").'"');
		return $result;
		//return dump($result);
	}
	
}
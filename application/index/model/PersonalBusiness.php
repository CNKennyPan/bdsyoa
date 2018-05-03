<?php
//在模型里单独设置数据库连接信息
namespace app\index\model;

use think\Model;
use think\Db;

class PersonalBusiness extends Model
{
    protected $connection = [
        // 数据库类型
        'type'        => 'mysql',
        // 数据库连接DSN配置
        'dsn'         => '',
        // 服务器地址
        'hostname'    => '127.0.0.1',
        // 数据库名
        'database'    => 'bdsyoa',
        // 数据库用户名
        'username'    => 'root',
        // 数据库密码
        'password'    => '',
        // 数据库连接端口
        'hostport'    => '',
        // 数据库连接参数
        'params'      => [],
        // 数据库编码默认采用utf8
        'charset'     => 'utf8',
        // 数据库表前缀
        'prefix'      => 'bdsy_',
    ];
	
	var $myworkcontent='';
	var $myworkrecordcontent='';
	var $matternumber = 0;
	var $recordnumber = 0;
	var $userid = '';
	
	public function showbusiness($userid){
		
		$this->userid = $userid;
		$this->showbusinesssubmit($this->userid);
		$this->myworkrecordcontent = $this->deletetest($this->readtest($this->showbusinessrecord()));

		
	}
	
	//获取需审批内容
	private function showbusinesssubmit($userid){
		$this->myworkcontent = Db::query('select bdsy_personal_business.*,bdsy_user_info.name from bdsy_personal_business,bdsy_user_info where bdsy_personal_business.receiverid = "'.$userid.'" and bdsy_personal_business.posterid=bdsy_user_info.id');
		$this->matternumber = count($this->myworkcontent);
	}
	
	
	//获取当前用户审批过的信息
	private function showbusinessrecord(){
		
		$submiter = Db::query('select bdsy_personal_business.*,bdsy_user_info.name from bdsy_personal_business,bdsy_user_info where bdsy_personal_business.posterid=bdsy_user_info.id');
		$myworkrecordcontenttemp = array();
		$readnumber = 0;
		foreach($submiter as $value){
			$submitinfo = json_decode($value['submitinfo'],true);
			foreach($submitinfo as $infolist){
				if($infolist['submiterid']==$this->userid){
					$myworkrecordcontenttemp[] =  $value;
					break;
				}
			}
		}
		return $myworkrecordcontenttemp;
	}
	
	
	//消息已读检测
	private function readtest($content){
		
		$result = array();
		$sum = 0;
		$readnumber = 0;
		foreach($content as $value){
			$sum=++$sum;
			$haveread = explode(',',$value['haveread']);
			foreach($haveread as $id){
				if($id==$this->userid){
					$value['read'] = 'true';
					$readnumber=++$readnumber;
					break;
				}else{
					$value['read'] = 'false';
				}
			}
			$result[] = $value;
		}
		$this->recordnumber = $sum - $readnumber;
		
		return $result;
	}
	
	//删除检测
	private function deletetest($content){
		$result = array();
		foreach($content as $value){
			$d = false;
			$havedeletetest = explode(',',$value['deleterecord']);
			foreach($havedeletetest as $id){
				if($id==$this->userid){
					$d = true;
					break;
				}
			}
			if($d==false){
				$result[] = $value;
			}
		}
		return $result;
	}
	
}
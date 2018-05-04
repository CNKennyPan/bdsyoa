<?php
//在模型里单独设置数据库连接信息
namespace app\index\model;

use think\Model;
use think\Db;
use app\index\model\PersonalBusiness as PersonalBusinessModel;

class PersonnelManagement extends Model
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
	
	var $userid = '';
	var $otpostrecord = '';
	
	public function showotpost($userid){
		
		$this->userid = $userid;
		
		$result = Db::query('select bdsy_personal_business.*,bdsy_user_info.name from bdsy_personal_business,bdsy_user_info where bdsy_personal_business.posterid = "'.$userid.'" and bdsy_personal_business.posterid=bdsy_user_info.id');
		
		$this->otpostrecord = $result;
		
		return $result;
	}
	
	
	
	
	
	
}
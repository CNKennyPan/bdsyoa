<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件
function statechange($state){
		switch($state){
			case 'false':
				return '<span class="label label-default">未通过</span>';
			break;
			case 'submit':
				return '<span class="label label-warning">审批中</span>';
			break;
			case 'success':
				return '<span class="label label-success">已办结</span>';
			break;
			default:
				return '暂时未有业务';
			break;
		}
		
	}
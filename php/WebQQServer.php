<?php
/**
 * Created by PhpStorm.
 * User: CoolCats
 */
//debug string:http://localhost:8000/WebQQ/php/WebQQServer.php?request=%7B%22type%22%3A%22USER_LOGIN%22%2C%22params%22%3A%7B%22username%22%3A%22zad%22%2C%22password%22%3A%22%22%7D%7D
include_once 'UserServer.php';
if (isset($_REQUEST["request"])) {
//    $requestobj = json_decode($_REQUEST["request"],true);//接收json格式的request字符串，并进行解析
    $requestobj = json_decode($_REQUEST["request"]);//接收json格式的request字符串，并进行解析
    $type = explode('_', $requestobj->type);

    switch ($type[0]) {
        case 'USER':
            $sv = new UserServer();//用户服务器
    }
    $sv->setRequest($requestobj);//设置请求成员
    $sv->openConnection();
    $sv->run();//connect to the db
} else {
//    $sv->makeResponse(false, "用户无请求", array());
    echo json_encode(array(
        "type" => "USER_LOGIN",
        "success" => false,
        "message" => "Ruquest not set!"
    ));
}

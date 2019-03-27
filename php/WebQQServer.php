<?php
/**
 * Created by PhpStorm.
 * User: CoolCats
 * Date: 2019/3/27
 * Time: 15:40
 */
//debug string:http://localhost:8000/WebQQ/php/WebQQServer.php?request=%7B%22type%22%3A%22USER_LOGIN%22%2C%22params%22%3A%7B%22username%22%3A%22zad%22%2C%22password%22%3A%22%22%7D%7D
include_once 'Server.php';//引入Server.php
if(isset($_REQUEST["request"])){
    $requestobj = json_decode($_REQUEST["request"],true);//接收json格式的request字符串，并进行解析
//echo $requestobj;
//echo $_REQUEST["request"];
//request:{"type":"USER_LOGIN","params":{"username":"","password":""}}
    $sv = new Server();         //实例化一个Server对象
    $sv->setRequest($requestobj);//设置请求成员
    $sv->run();//connect to the db

    $sql_handle = $sv->getSQLhandler();
//$sv->makeSuccessResponse("Successfully Login",array());
//    $response = $sv->getResponse();
//    echo($response);

}else{
    echo json_encode(array(
    "type"=>"USER_LOGIN",
    "success"=>false,
    "message"=>"Ruquest not set!"
));
}

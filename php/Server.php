<?php
/**
 * Created by PhpStorm.
 * User: CoolCats
 * Date: 2019/3/27
 * File: Server.php
 */
include_once 'PgSQL.php';

class Server
{

    protected $_requests = NULL;
    protected $_response = NULL;
    protected $_pgsql = NULL;



    public function __construct()
    {
    }

    public function __destruct()
    {
        // TODO: Implement __destruct() method.
    }

    public function run()
    {

    }

    /**
     * 打开数据库连接
     */
    public function openConnection(){
        //初始化数据库对象
        $this->_pgsql = new PgSQL();
        //连接数据库
        $this->_pgsql->connect();
        //登录逻辑——判断用户是否存在及密码是否匹配
    }

    /**
     * @param $message
     * @param $data
     */
    public function makeResponse($success,$message, $data)
    {
        $this->_response = json_encode(array(
            "success" => $success,
            "message" => $message,
            "data" => $data
        ));

    }



    /**
     * @return mixed : in json format
     */
    public function getResponse()
    {
        return $this->_response;
    }

    /**
     * @param $requestobj json decode object
     */
    public function setRequest($requestobj)
    {
        $this->_requests = $requestobj;
    }

    public function debugTips($msgtype = 0,$message="Debug Success")
    {
        if ($msgtype === 0) {
            return json_encode(array(
                "message" => $message
            ));
        } else {
            return json_encode(array(
                "message" => "Debug Fail!"
            ));
        }


    }



    public function getSQLhandler()
    {
        return $this->_pgsql;
    }
}
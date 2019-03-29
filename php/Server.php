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
    protected $tb_user = "qq_user";//用户账户数据表
    protected $tb_userdetail = "user_detail";//用户详细信息表
    protected $tb_friendship = "qq_friendships";//好友关系表
    protected $tb_messages = "qq_messages";//消息表
    protected $tb_posts = "qq_posts";//post


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
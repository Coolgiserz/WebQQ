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
        //判断登录是否成功
        if ($this->_requests["type"] === "USER_LOGIN") {
//            echo json_encode($this->_requests);
            //初始化数据库对象
            $this->_pgsql = new PgSQL();
            //连接数据库
            $this->_pgsql->connect();
            //登录逻辑——判断用户是否存在及密码是否匹配
            $this->onLogin();
//            echo $this->debugTips();
//            var_dump($this->_requests["params"]);

            //若用户登录信息正确，则成功登录，否则给出错误提示
        } else {
            var_dump($this->_requests);
//            echo $this->debugTips(1);
        }
    }


    private function onLogin()
    {
        $tb_name = "qq_user";
        //构造SQL语句查询用户是否存在，密码采用md5散列存储
        $query = "select count(1) from ".$tb_name." where username=$1 and ". '"password"=md5($2)';
        $params = $this->_requests["params"];
//        var_dump($params);

        $this->_pgsql->queryParams($query,$params);
        $row = $this->_pgsql->fetchRow();
        if($row[0]==1){//存在用户
//            echo $this->debugTips();
             $this->makeSuccessResponse("LOGIN SUCCESS",array());
             echo $this->_response;//对登录成功进行响应
        }else{//不存在此用户
//            echo $this->debugTips(1);
            $this->makeFailureResponse("LOGIN FAILURE",NULL);
            echo $this->_response;//对登录失败进行响应

        }
//        var_dump($row);
    }

    /**
     * @param $message
     * @param $data
     */
    public function makeSuccessResponse($message, $data)
    {
        $this->_response = json_encode(array(
            "success" => true,
            "message" => $message,
            "data" => $data
        ));

    }
    public function makeFailureResponse($message, $data)
    {
        $this->_response = json_encode(array(
            "success" => false,
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

    public function setRequest($requestobj)
    {
        $this->_requests = $requestobj;
    }

    public function debugTips($msgtype = 0)
    {
        if ($msgtype === 0) {
            return json_encode(array(
                "message" => "Debug Success!"
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
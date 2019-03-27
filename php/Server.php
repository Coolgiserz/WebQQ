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
    private $tb_user = "qq_user";//用户账户数据表
    private $tb_userdetail = "user_detail";//用户详细信息表
    private $tb_friendship = "qq_friendships";//好友关系表
    private $tb_messages = "qq_messages";//消息表
    private $tb_posts = "qq_posts";//post


    public function __construct()
    {
    }

    public function __destruct()
    {
        // TODO: Implement __destruct() method.
    }

    public function run()
    {
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
        } else if ($this->_requests["type"] === "USER_REGISTER") {
            //检查用户输入
            $isValid = $this->checkInput();
            if($isValid){
                //初始化数据库对象
                $this->_pgsql = new PgSQL();
                //连接数据库
                $this->_pgsql->connect();
                //注册逻辑——判断用户是否存在及密码是否匹配
                $this->onRegister();
            }else{
                $this->makeFailureResponse("注册失败，请检查您的输入！",array());
                echo $this->_response;//对注册失败进行响应
            }


        } else {
            var_dump($this->_requests);
//            echo $this->debugTips(1);
        }
    }

    /**
     * 处理注册逻辑
     */
    private function onRegister()
    {
        $query1 = "insert into " . $this->tb_user . " (username,".'"password")' . " values($1,md5($2))";
        $query2 = "insert into " . $this->tb_userdetail
            . " (realname,".'"gender",email,mobile,industry)'
            . " values($1,$2,$3,$4,$5)";

        $params = $this->_requests["params"];
        $username = $params["username"];
        $password = $params["password"];
        $realname = $params["realname"];
        $gender = $params["gender"];
        $email = $params["email"];
        $mobile = $params["mobile"];
        $industry = $params["industry"];

//        var_dump($params);

        $this->_pgsql->queryParams($query1, array(
            $username,$password
        ));
//        $row = $this->_pgsql->_querycount;
//        var_dump($row);
//        echo $this->debugTips(0,"语句1影响行数："+$row);
        $this->_pgsql->queryParams($query2, array(
            $realname,$gender,$email,$mobile,$industry
        ));
        $this->makeSuccessResponse("注册成功！",NULL);
//        $affected_row = $this->_pgsql->affectedRows();
//        echo $this->debugTips(0,"语句2影响行数："+$affected_row);

    }

    /**
     * 处理登录逻辑
     */
    private function onLogin()
    {
        $tb_name = "qq_user";
        //构造SQL语句查询用户是否存在，密码采用md5散列存储
        $query = "select count(1) from " . $tb_name . " where username=$1 and " . '"password"=md5($2)';
        $params = $this->_requests["params"];
//        var_dump($params);

        $this->_pgsql->queryParams($query, $params);
        $row = $this->_pgsql->fetchRow();
        if ($row[0] == 1) {//存在用户
//            echo $this->debugTips();
            $this->makeSuccessResponse("LOGIN SUCCESS", array());
            echo $this->_response;//对登录成功进行响应
        } else {//不存在此用户
//            echo $this->debugTips(1);
            $this->makeFailureResponse("LOGIN FAILURE", NULL);
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

    /**
     * 检查用户输入
     * @return bool
     */
    private function checkInput()
    {
        return true;
    }

    public function getSQLhandler()
    {
        return $this->_pgsql;
    }
}
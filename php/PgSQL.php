<?php
/**
 * Created by PhpStorm.
 * User: CoolCats
 * Date: 2019/3/27
 * Time: 17:28
 */

class PgSQL
{
    private $_host;
    private $_port;
    private $_dbuser;
    private $_dbpass;
    private $_dbname;

    public $_result;
    public $_querycount;// 执行的查询总数

    private $_linkid;
    private $_sqlresponse;
    /**
     * PgSQL constructor.
     * @param $host
     * @param $port
     * @param $dbname
     * @param $dbuser
     * @param $dbpass
     */
    public function __construct($host = "127.0.0.1", $port = "5432", $dbname = "webqq", $dbuser = "postgres", $dbpass = "zhugepost")
    {
        $this->_host = $host;
        $this->_port = $port;
        $this->_dbuser = $dbuser;
        $this->_dbpass = $dbpass;
        $this->_dbname = $dbname;
    }

    /**
     * 数据库连接
     */
    public function connect()
    {
        try {
            $this->_linkid = pg_connect("host=$this->_host port=$this->_port dbname=$this->_dbname
user=$this->_dbuser password=$this->_dbpass");//@
            if (!$this->_linkid) {
                $this->makeSQLResponse(false,"Could not connect to PostgreSQL server.",NULL);
//                throw new Exception("Could not connect to PostgreSQL server.");
            } else {
//                echo "Connect Success";
            }
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }

    /**
     * 执行语句
     * @param $query ：SQL语句
     * @return resource ：资源变量
     */
    public function query($query)
    {
        try {
            $this->_result = pg_query($this->_linkid, $query);
            if (!$this->_result) {
                $this->makeSQLResponse(false,"The database query failed.",NULL);

//                throw new Exception("The database query failed.");
            }
        } catch (Exception $e) {
            echo $e->getMessage();
        }
        $this->_querycount++;
        return $this->_result;
    }

    public function queryParams($query, $params)
    {
        try {
//            var_dump($params);
            $this->_result = pg_query_params($this->_linkid, $query, $params);
            if (!$this->_result) {
                $this->makeSQLResponse(false,"The database query failed.",NULL);

//                throw new Exception("数据库查询失败");
            }
        } catch (Exception $e) {
            $this->makeSQLResponse(false,$e->getMessage(),NULL);

//            echo $e->getMessage();
        }
        $this->_querycount++;
        return $this->_result;
    }

    /**
     * 将查询结果作为索引数组返回
     * @return array
     */
    public function fetchRow()
    {
        $row = @pg_fetch_row($this->_result);
        return $row;
    }

    /**
     * 确定查询所返回的行数
     * @return int
     */
    public function numRows()
    {
        $count = @pg_num_rows($this->_result);
        return $count;
    }

    /**
     * 返回查询、插入、更改所影响的行的总数
     * @return int
     */
    public function affectedRows()
    {
        $count = @pg_affected_rows($this->_linkid);
        return $count;
    }

    public function fetchAll()
    {
        $row = @pg_fetch_all($this->_result);
        return $row;
    }

    public function getLinkID()
    {
//        echo $this->_linkid;
        return $this->_linkid;
    }
    public function makeSQLResponse($success,$message, $data)
    {
        $this->_sqlresponse =  json_encode(array(
            "success" => $success,
            "message" => $message,
            "data" => $data
        ));

    }

    public function getResponse(){
        return $this->_sqlresponse;
    }
}
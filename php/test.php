<?php
/**
 * Created by PhpStorm.
 * User: CoolCats
 * Date: 2019/3/27
 * Time: 17:36
 */
include_once 'PgSQL.php';
$tb_name = "qq_user";
$dbconn = new PgSQL();
$dbconn->connect();
$query = "select * from ".$tb_name." where username='zhuge'";
$res = $dbconn->query($query);
$row = $dbconn->fetchRow();
var_dump($row);
//echo pg_fetch_row($dbconn->getLinkID(),$res);
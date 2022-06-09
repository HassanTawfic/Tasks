<?php

use Illuminate\Database\Capsule\Manager as dB;

class MySQLHandler
{
    static public function connect()
    {
        $db = new dB();
        $db->addConnection([
            "driver" => _Driver_,
            "host" => _Host_,
            "database" => _Database_,
            "username" => _Username_,
            "password" => _Password_
        ]);
        $db->setAsGlobal();
        $db->bootEloquent();
    }

    static public function get_data($start = 0)
    {
        $all_requrds = dB::table("items")->skip($start)->take(_Pager_size_)->get();
        return $all_requrds;
    }

    static public function get_record_by_id($id)
    {
        $searched_glasses = dB::table('items')->find($id);
        return $searched_glasses;
    }
}
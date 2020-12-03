<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function store(Request $request)
    {

        $query = DB::select("CALL sp_insertuser('".$request->login."', '".$request->firstName."', '".$request->lastName."' , '".$request->regionalCouncilCode."', '".$request->password."', '".$request->email."', '".$request->foneNumber."', @p_msg_retorno);");

        return response()->json($query);

    }
}


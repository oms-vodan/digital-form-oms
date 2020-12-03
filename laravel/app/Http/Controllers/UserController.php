<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Hash;

class UserController extends Controller
{
    public function store(Request $request)
    {
        try {
            $query = DB::select("CALL sp_insertuser('".$request->email."',
                                                    '".$request->firstName."',
                                                    '".$request->lastName."' ,
                                                    '".$request->regionalCouncilCode."',
                                                    '".$request->password."',
                                                    '".$request->email."',
                                                    '".$request->foneNumber."',
                                                    @p_msg_retorno);");

            $query_msg = $query[0]->p_msg_retorno;

            if($query_msg == 'Campos obrigatórios devem ser preenchidos. Verifique.'
            || $query_msg == 'Login já existe. Verifique.'
            || $query_msg == 'e-mail já cadastrado no sistema. Verifique.') {
                return response()->json($query_msg, 404);
            }
            return response()->json($query_msg);
        } catch(Exception $e) {
            return response()->json($e, 500);
        }
    }

    public function login(Request $request)
    {
        try {
            $query = DB::select("CALL getuser('{$request->login}', '{$request->password}')");
            if($query) {
                return response()->json($query);
            } else {
                return response()->json('Email ou senha incorreta.', 403);
            }
        } catch(Expection $e) {
            return response()->json($e, 500);
        }
    }
}


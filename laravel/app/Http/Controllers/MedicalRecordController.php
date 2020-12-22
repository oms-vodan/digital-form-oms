<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MedicalRecordController extends Controller
{
    public function insert(Request $request)
    {
        try {
            $query_msg = DB::select("CALL postMedicalRecord('{$request->userid}',
                                                            '{$request->groupRoleid}',
                                                            '{$request->hospitalUnitid}',
                                                            '1',
                                                            '{$request->medicalRecord}')");
            $query_msg = $query_msg[0];
            if($query_msg->msgRetorno == 'Informe o numero do prontuário eletronico para cadastro. '
            || $query_msg->msgRetorno == 'Prontuário já registrado para o Hospital.'
            || $query_msg->msgRetorno == 'Erro no registro do Prontuario Medico. Verifique!'
            || $query_msg->msgRetorno == 'Hospital não identificado no cadastro. Verifique.') {
                return response()->json($query_msg, 404);
            }

            if($query_msg->Message) {
                if($query_msg->Message == 'Ocorreu um erro durante a execução do procedimento. Contacte o administrador!') {
                    return response()->json($query_msg, 404);
                }
            }

            return response()->json($query_msg);
        } catch(Exception $e) {
            return response()->json($e.getMessage(), 500);
        }
        
    }
}

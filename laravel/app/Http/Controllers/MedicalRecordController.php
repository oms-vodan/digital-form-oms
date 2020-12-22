<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MedicalRecordController extends Controller
{
    public function insert(Request $request)
    {
        try {
            return response()->json(DB::select("CALL postMedicalRecord('{$request->userid}',
                                                                        '{$request->groupRoleid}',
                                                                        '{$request->hospitalUnitid}',
                                                                        '1',
                                                                        '{$request->medicalRecord}',
                                                                        @p_participantid,
                                                                        @p_msg_retorno)"));
        } catch(Exception $e) {
            return response()->json($e, 500);
        }
        
    }
}

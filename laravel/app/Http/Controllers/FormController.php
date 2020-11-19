<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FormController extends Controller
{
    public function show($id)
    {
        return response()->json(DB::select("CALL getqst_rsp_modulo('{$id}')"));
    }
}

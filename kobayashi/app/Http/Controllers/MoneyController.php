<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MoneyController extends Controller
{
    public function index(Request $request) {
        return 'This is returned from backend api';
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test(): string
    {
        return 'This is a test route.';
    }
}

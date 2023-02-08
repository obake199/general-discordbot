<?php

use App\Http\Controllers\CommandController;
use App\Http\Controllers\MoneyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Commands routes
Route::post('/command/create', [CommandController::class, 'registerCommand']);
Route::post('/command/fetch', [CommandController::class, 'fetchCommand']);
Route::post('/command/remove', [CommandController::class, 'removeCommand']);
Route::post('/command/list', [CommandController::class, 'listCommand']);

// Money routes
// Route::post('/money/add', [MoneyController::class, 'addMoney']);

// TEST ROUTES
Route::post('/test/api', [\App\Http\Controllers\TestController::class, 'test']);

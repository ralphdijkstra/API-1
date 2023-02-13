<?php

use App\Http\Controllers\FunctieController;
use App\Http\Controllers\WerknemerController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('werknemers', WerknemerController::class);

Route::apiResource('functies', FunctieController::class)
    ->parameters(['functies' => 'functie'])
    ->only(['index', 'show']);

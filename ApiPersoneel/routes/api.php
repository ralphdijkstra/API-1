<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WerknemerController;
use App\Http\Controllers\FunctieController;

Route::apiResource('werknemers', WerknemerController::class);
Route::apiResource('functies', FunctieController::class)->parameters(['functies' => 'functie'])->only(['index', 'show']);

Route::get('functies/{id}/werknemers', [WerknemerController::class, 'indexFunctie']);
Route::delete('functies/{id}/werknemers', [WerknemerController::class, 'destroyFunctie']);


Route::fallback(function(){
    return response()->json([
        'message' => 'Page Not Found. If error persists, contact info@website.com'], 404);
});

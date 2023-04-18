<?php

use App\Http\Controllers\GenreController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\TrailerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('movies', MovieController::class);
Route::get('/movies/{id}/trailers', [MovieController::class, 'trailers']);
Route::get('/movies/{id}/genres', [MovieController::class, 'genres']);

Route::apiResource('trailers', TrailerController::class);

Route::apiResource('genres', GenreController::class);
// Route::get('/genres/{id}/movies', [GenreController::class, 'movies']);

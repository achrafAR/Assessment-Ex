<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

// public routes
// Route::resource('products',ProductController::class);
Route::post('/register',[AuthController::class, 'register']);
Route::post('/login',[AuthController::class, 'login']);

Route::get('/products',[ProductController::class,'index']);
Route::get('/products/{id}',[ProductController::class, 'show']);
Route::get('products/search/{name}',[ProductController::class, 'search']);

Route::get('/user',[AuthController::class,'getUser']);





// protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/products',[ProductController::class, 'store']);
    Route::put('/products/{id}',[ProductController::class, 'update']);
    Route::delete('/products/{id}',[ProductController::class, 'destroy']);
    Route::post('/logout',[AuthController::class, 'logout']);


});






// 1|nIOBoxUm7DBHrEY7prthppzFEO2SFp4wykKv5eFR achraf
// 2|Qa3m7iH99tB9N953WbpzQ6mSTBbWEv0ZF10MUlr5 nour
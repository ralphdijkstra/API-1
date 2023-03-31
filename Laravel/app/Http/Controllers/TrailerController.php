<?php

namespace App\Http\Controllers;

use App\Models\Trailer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class TrailerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        if ($request->has('movie')) {
            return response(Trailer::where('movie_id', $request->movie)->get());
        }
        return response(Trailer::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
         $validator = Validator::make($request->all(), [
             'type' => 'required',
             'url' => 'required',
             'movie_id' => 'required',
         ]);
         if ($validator->fails()) {
             //header('Content-Type: application/json');
             return response('{"Foutmelding":"Data niet correct"}', 400)->header('Content-Type','application/json');
         }
         else return Trailer::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Trailer $trailer): Response
    {
        return response($trailer);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Trailer $trailer)
    {
        $trailer->update($request->all());
        return $trailer;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Trailer::where('id', $id)->delete();
    }
}

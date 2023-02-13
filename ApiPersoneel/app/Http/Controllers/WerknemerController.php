<?php

namespace App\Http\Controllers;

use App\Models\Werknemer;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class WerknemerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Werknemer::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [

            'email' => 'email',

            'naam' => 'required'

        ]);

        if ($validator->fails()) {

            return response('{"Foutmelding":"Data niet correct"}', 400)

                ->header('Content-Type', 'application/json');
        } else return Werknemer::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Werknemer  $werknemer
     * @return \Illuminate\Http\Response
     */
    public function show(Werknemer $werknemer)
    {
        return $werknemer;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Werknemer  $werknemer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Werknemer $werknemer)
    {
        $werknemer->update($request->all());
        return $werknemer;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Werknemer  $werknemer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Werknemer $werknemer)
    {
        $werknemer->delete();
    }
}

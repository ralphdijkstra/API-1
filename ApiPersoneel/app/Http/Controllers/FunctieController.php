<?php

namespace App\Http\Controllers;

use App\Models\Functie;
use Illuminate\Http\Request;

class FunctieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Functie::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Functie  $functie
     * @return \Illuminate\Http\Response
     */
    public function show(Functie $functie)
    {
        return $functie;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Functie  $functie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Functie $functie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Functie  $functie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Functie $functie)
    {
        //
    }
}

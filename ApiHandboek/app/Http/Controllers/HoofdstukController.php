<?php

namespace App\Http\Controllers;

use App\Models\Hoofdstuk;
use Illuminate\Http\Request;

class HoofdstukController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Hoofdstuk::all();
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
     * @param  \App\Models\Hoofdstuk  $hoofdstuk
     * @return \Illuminate\Http\Response
     */
    public function show(Hoofdstuk $hoofdstuk)
    {
        return $hoofdstuk;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Hoofdstuk  $hoofdstuk
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Hoofdstuk $hoofdstuk)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Hoofdstuk  $hoofdstuk
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hoofdstuk $hoofdstuk)
    {
        //
    }
}

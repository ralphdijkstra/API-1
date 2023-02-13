<?php

namespace App\Http\Controllers;

use App\Models\Script;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ScriptController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Script::all();
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
            'hoofdstuk_id' => 'required',
            'naam' => 'required',
            // 'bestand' => 'required|regex:/^[\w,\s-]+\.[A-Za-z]{3}$/',
        ]);

        if ($validator->fails()) {
            return response('{"Foutmelding":"Data niet correct"}', 400)
                ->header('Content-Type', 'application/json');
        } else return Script::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Script  $script
     * @return \Illuminate\Http\Response
     */
    public function show(Script $script)
    {
        return $script;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Script  $script
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Script $script)
    {
        $validator = Validator::make($request->all(), [
            'hoofdstuk_id' => 'required',
            'volgorde' => 'required|numeric',
            'naam' => 'required',
            'bestand' => 'required|regex:/^[\w,\s-]+\.[A-Za-z]{3}$/',
            'PHP-versie' => 'required'

        ]);

        if ($validator->fails()) {
            return response('{"Foutmelding":"Data niet correct"}', 400)
                ->header('Content-Type', 'application/json');
        } else $script->update($request->all());
        return $script;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Script  $script
     * @return \Illuminate\Http\Response
     */
    public function destroy(Script $script)
    {
        $script->delete();
    }
    public function indexHoofdstuk(Request $request, $id)
    {
        if ($request->has('sort')) {
            return Script::where('hoofdstuk_id',$id)->orderBy($request->sort)->get();
        }
        return Script::where('hoofdstuk_id',$id)->get();
    }
    public function destroyHoofdstuk($id)
    {
        Script::where('hoofdstuk_id', $id)->delete();
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Werknemer;
use Illuminate\Http\Request;
//use Illuminate\Http\Validation\Validator;
use Illuminate\Support\Facades\Validator;

class WerknemerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->has('naam')) return Werknemer::where('naam', 'like', '%'.$request->naam.'%')->get();
        if ($request->has('sort')) return Werknemer::orderBy($request->sort)->get();
        return Werknemer::All();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       // dd($request->all());
        $validator = Validator::make($request->all(), [
            'email' => 'email',
            'naam' => 'required'
        ]);
        if ($validator->fails()) {
            //header('Content-Type: application/json');
            return response('{"Foutmelding":"Data niet correct"}', 400)->header('Content-Type','application/json');
        }
        else return Werknemer::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Werknemer  $werknemer
     * @return \Illuminate\Http\Response
     */
    public function show(Werknemer $werknemer)
    {
//        dd('show');
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
    public function indexFunctie(Request $request, $id)
    {
        if ($request->has('sort')) 
            return Werknemer::where('functie_id',$id)->orderBy($request->sort)->get();
        return Werknemer::where('functie_id',$id)->get();
    }
    public function destroyFunctie($id)
    {
        Werknemer::where('functie_id', $id)->delete();
    }


}

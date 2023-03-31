<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use App\Models\Movie;
use App\Models\MovieGenre;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if ($request->has('genre')) {
            $movies = Movie::all();
            $genres = collect([]);
            foreach ($movies as $movie) {
                foreach ($movie->genres as $genre) {
                    if ($genre->name == $request->genre) $genres->push($movie);
                }
            }
            return $genres;
        } else return response(Movie::orderBy('release_date', 'asc')->get());
    }

    public function genres($id)
    {
        $movie = Movie::find($id);
        return response($movie->genres);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required',
            'release_date' => 'required',
            'runtime' => 'required',
            'image' => 'required',
            'url' => 'required',
        ]);
        if ($validator->fails()) {
            //header('Content-Type: application/json');
            return response('{"Foutmelding":"Data niet correct"}', 400)->header('Content-Type', 'application/json');
        } else return Movie::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie): Response
    {
        return response($movie);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie): Response
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Movie $movie)
    {
        $movie->update($request->all());
        return $movie;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie): RedirectResponse
    {
        //
    }
}
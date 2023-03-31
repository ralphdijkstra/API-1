<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use App\Models\Movie;
use App\Models\MovieGenre;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class GenreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return response(Genre::all());
    }

    public function movies($id)
    {
        $genre = Genre::find($id);
        return response($genre->movies);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): Response
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(genre $genre): Response
    {
        return response($genre);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, genre $genre): Response
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(genre $genre): Response
    {
        //
    }
}

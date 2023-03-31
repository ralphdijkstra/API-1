<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class GenreMovie extends Pivot
{
    use HasFactory;
    protected $table = 'genre_movie';
    protected $fillable = ["movie_id", "genre_id"];
    public $timestamps = false;
}

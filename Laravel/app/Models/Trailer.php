<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trailer extends Model
{
    use HasFactory;
    protected $fillable = ['movie_id', 'type', 'url'];
    public $timestamps = false;
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Werknemer extends Model
{
    protected $fillable = ["naam", "telefoon", "email", "functie_id"];
    public $timestamps = false;
}

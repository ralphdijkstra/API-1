<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Script extends Model
{
    use HasFactory;

    protected $fillable = ["hoofdstuk_id", "volgorde", "naam", "bestand", "PHP-versie"];

    public $timestamps = false;
}

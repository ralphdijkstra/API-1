<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Movie extends Model
{
    use HasFactory;
    protected $fillable = ["title", "description", "release_date", "runtime", "image", "url"];
    public $timestamps = false;

    public function genres(): BelongsToMany
    {
        return $this->belongsToMany(Genre::class)->using(GenreMovie::class);
    }
}

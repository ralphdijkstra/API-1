<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TrailerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('trailers')->insert([
            'url' => '32RAq6JzY-w',
            'type' => 'Official Trailer',
            'movie_id' => '1',
        ]);
        DB::table('trailers')->insert([
            'url' => 'KydqdKKyGEk',
            'type' => 'Official Teaser Trailer',
            'movie_id' => '2',
        ]);
        DB::table('trailers')->insert([
            'url' => 'TnGl01FkMMo',
            'type' => 'Official Trailer',
            'movie_id' => '2',
        ]);
        DB::table('trailers')->insert([
            'url' => 'EiKXJ-ObtGk',
            'type' => 'Sneak Peek',
            'movie_id' => '3',
        ]);
        DB::table('trailers')->insert([
            'url' => 'qEVUtrk8_B4',
            'type' => 'Official Trailer',
            'movie_id' => '3',
        ]);
        DB::table('trailers')->insert([
            'url' => 'yjRHZEUamCc',
            'type' => 'Final Trailer',
            'movie_id' => '3',
        ]);
        DB::table('trailers')->insert([
            'url' => 'AHmCH7iB_IM',
            'type' => 'Official Trailer',
            'movie_id' => '4',
        ]);
        DB::table('trailers')->insert([
            'url' => 'xTaIZo8OJYE',
            'type' => 'Final Trailer',
            'movie_id' => '4',
        ]);
        DB::table('trailers')->insert([
            'url' => 'ZlNFpri-Y40',
            'type' => 'Official Trailer',
            'movie_id' => '5',
        ]);
        DB::table('trailers')->insert([
            'url' => '5WfTEZJnv_8',
            'type' => 'New Trailer',
            'movie_id' => '5',
        ]);
    }
}

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
            'url' => 'RjNcTBXTk4I',
            'type' => 'Final Trailer',
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
        DB::table('trailers')->insert([
            'url' => 'Zi88i4CpHe4',
            'type' => 'Official Trailer 1',
            'movie_id' => '6',
        ]);
        DB::table('trailers')->insert([
            'url' => 'AIc671o9yCI',
            'type' => 'Official Trailer 2',
            'movie_id' => '6',
        ]);
        DB::table('trailers')->insert([
            'url' => 'IiMinixSXII',
            'type' => 'Official Trailer',
            'movie_id' => '13',
        ]);
        DB::table('trailers')->insert([
            'url' => 'HGvv-Hhft3U',
            'type' => 'NEW Trailer',
            'movie_id' => '13',
        ]);
        DB::table('trailers')->insert([
            'url' => 'ODYz0jkj-cQ',
            'type' => 'International Trailer',
            'movie_id' => '13',
        ]);
        DB::table('trailers')->insert([
            'url' => '9LLOLEBlVIA',
            'type' => 'Final Trailer',
            'movie_id' => '13',
        ]);
        DB::table('trailers')->insert([
            'url' => 'Euy4Yu6B3nU',
            'type' => 'Official Trailer',
            'movie_id' => '14',
        ]);
        DB::table('trailers')->insert([
            'url' => 'u3V5KDHRQvk',
            'type' => 'Official Trailer',
            'movie_id' => '7',
        ]);
        DB::table('trailers')->insert([
            'url' => 'JqcncLPi9zw',
            'type' => 'New Trailer',
            'movie_id' => '7',
        ]);
        DB::table('trailers')->insert([
            'url' => 'BbXJ3_AQE_o',
            'type' => 'First Look',
            'movie_id' => '9',
        ]);
        DB::table('trailers')->insert([
            'url' => 'cqGjhVJWtEg',
            'type' => 'Official Trailer',
            'movie_id' => '9',
        ]);
        DB::table('trailers')->insert([
            'url' => 'M0zdJOM_5Vg',
            'type' => 'Big Game TV Spot',
            'movie_id' => '10',
        ]);
        DB::table('trailers')->insert([
            'url' => 'hebWYacbdvc',
            'type' => 'Official Trailer',
            'movie_id' => '10',
        ]);
        DB::table('trailers')->insert([
            'url' => 'TQpwONzpcy4',
            'type' => 'Big Game TV Spot',
            'movie_id' => '8',
        ]);
        DB::table('trailers')->insert([
            'url' => 'ZfVYgWYaHmE',
            'type' => 'Official Trailer',
            'movie_id' => '8',
        ]);
        DB::table('trailers')->insert([
            'url' => 'hflCiNtY6MA',
            'type' => 'Announcement',
            'movie_id' => '11',
        ]);
        DB::table('trailers')->insert([
            'url' => 'bK6ldnjE3Y0',
            'type' => 'Official Trailer',
            'movie_id' => '11',
        ]);
        DB::table('trailers')->insert([
            'url' => '8zIf0XvoL9Y',
            'type' => 'Teaser Trailer',
            'movie_id' => '12',
        ]);
    }
}

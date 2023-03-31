<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('movies')->insert([
            'title' => 'Fast X',
            'description' => "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.",
            'release_date' => '2023-05-18',
            'runtime' => 'Unknown',
            'image' => 'https://m.media-amazon.com/images/M/MV5BODI2OGMyN2UtYjBiYS00OTExLWJkM2YtNTE2NmNmMGYzOTI0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
        ]);
        DB::table('genre_movie')->insert([
            'movie_id' => '1',
            'genre_id' => '1',
        ]);
        DB::table('genre_movie')->insert([
            'movie_id' => '1',
            'genre_id' => '5',
        ]);
        DB::table('genre_movie')->insert([
            'movie_id' => '1',
            'genre_id' => '12',
        ]);
        DB::table('movies')->insert([
            'title' => 'The Super Mario Bros. Movie',
            'description' => "The story of The Super Mario Bros. on their journey through the Mushroom Kingdom",
            'release_date' => '2023-04-06',
            'runtime' => '1h32m',
            'image' => 'https://upload.wikimedia.org/wikipedia/en/4/44/The_Super_Mario_Bros._Movie_poster.jpg',
        ]);
        DB::table('genre_movie')->insert([
            'movie_id' => '2',
            'genre_id' => '2',
        ]);
        DB::table('genre_movie')->insert([
            'movie_id' => '2',
            'genre_id' => '3',
        ]);
        DB::table('genre_movie')->insert([
            'movie_id' => '2',
            'genre_id' => '4',
        ]);
        DB::table('movies')->insert([
            'title' => 'John Wick: Chapter 4',
            'description' => "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
            'release_date' => '2023-03-23',
            'runtime' => '2h49m',
            'image' => 'https://i.etsystatic.com/28976030/r/il/c52fb2/4682067537/il_1140xN.4682067537_hcx9.jpg',
        ]);
        DB::table('genre_movie')->insert([
            'movie_id' => '3',
            'genre_id' => '1',
        ]);
        DB::table('genre_movie')->insert([
            'movie_id' => '3',
            'genre_id' => '5',
        ]);
        DB::table('genre_movie')->insert([
            'movie_id' => '3',
            'genre_id' => '17',
        ]);
        DB::table('movies')->insert([
            'title' => 'Creed III',
            'description' => "Adonis has been thriving in both his career and family life, but when a childhood friend and former boxing prodigy resurfaces, the face-off is more than just a fight.",
            'release_date' => '2023-03-02',
            'runtime' => '1h56m',
            'image' => 'https://m.media-amazon.com/images/M/MV5BYWY1ZDY4MmQtYjhiYS00N2QwLTk1NzgtOWI2YzUwZThjNDYwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
        ]);
        DB::table('genre_movie')->insert([
            'movie_id' => '4',
            'genre_id' => '7',
        ]);
        DB::table('genre_movie')->insert([
            'movie_id' => '4',
            'genre_id' => '15',
        ]);
        DB::table('movies')->insert([
            'title' => 'Ant-Man and The Wasp: Quantumania',
            'description' => "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.",
            'release_date' => '2023-02-15',
            'runtime' => '2h04m',
            'image' => 'https://m.media-amazon.com/images/M/MV5BMDIzM2FlNTctNjAzZi00YzhkLThjYWQtMDY5Njc0NjdmMGVlXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg',
        ]);
        DB::table('genre_movie')->insert([
            'movie_id' => '5',
            'genre_id' => '1',
        ]);
        DB::table('genre_movie')->insert([
            'movie_id' => '5',
            'genre_id' => '2',
        ]);
        DB::table('genre_movie')->insert([
            'movie_id' => '5',
            'genre_id' => '4',
        ]);
        DB::table('movies')->insert([
            'title' => 'Shazam! Fury of the Gods',
            'description' => 'The film continues the story of teenage Billy Batson who, upon reciting the magic word "SHAZAM!" is transformed into his adult Super Hero alter ego, Shazam.',
            'release_date' => '2023-03-16',
            'runtime' => '2h10m',
            'image' => 'https://m.media-amazon.com/images/M/MV5BZTJkMTBjZWEtMzhhMy00MjlkLTkyNTYtNGZjNGM4Mjk5YTEyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
        ]);
        DB::table('movies')->insert([
            'title' => 'Guardians of the Galaxy vol. 3',
            'description' => 'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.',
            'release_date' => '2023-05-05',
            'runtime' => '?',
            'image' => 'https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
        ]);
        DB::table('movies')->insert([
            'title' => 'Indiana Jones and the Dial of Destiny',
            'description' => 'The plot is unknown at this time.',
            'release_date' => '2023-06-30',
            'runtime' => '?',
            'image' => 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Indy_5_-_Teaser_Poster.jpeg/220px-Indy_5_-_Teaser_Poster.jpeg',
        ]);
        DB::table('movies')->insert([
            'title' => 'Spider-Man: Across the Spider-Verse',
            'description' => 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.',
            'release_date' => '2023-06-02',
            'runtime' => '?',
            'image' => 'https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg',
        ]);
        DB::table('movies')->insert([
            'title' => 'The Flash',
            'description' => 'Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.',
            'release_date' => '2023-06-16',
            'runtime' => '?',
            'image' => 'https://m.media-amazon.com/images/M/MV5BMDFhZTc3NWQtY2UyZS00OGYzLTgxNTUtYjYxMjZjMmEyMjcwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
        ]);
        DB::table('movies')->insert([
            'title' => 'Oppenheimer',
            'description' => 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
            'release_date' => '2023-07-21',
            'runtime' => '?',
            'image' => 'https://m.media-amazon.com/images/M/MV5BZWI2YWU2ODItYzBmNi00Yjc2LWJlMDQtMGJlMmUxM2M3NzMxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg',
        ]);
        DB::table('movies')->insert([
            'title' => 'Barbie',
            'description' => "To live in Barbie Land is to be a perfect being in a perfect place. Unless you have a full-on existential crisis. Or you're a Ken.",
            'release_date' => '2023-07-21',
            'runtime' => '?',
            'image' => 'https://m.media-amazon.com/images/M/MV5BMzQ3NTRjZDUtNGVhYS00OWQ0LTljMjEtYzJkOGJhYWViNjIxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
        ]);
        DB::table('movies')->insert([
            'title' => 'Dungeons & Dragons: Honor among Thieves',
            'description' => "A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
            'release_date' => '2023-03-30',
            'runtime' => '2h14m',
            'image' => 'https://media.pathe.nl/nocropthumb/620x955/gfx_content//api/filmdepot/v1/movie/download/23699/23699_161216_ps_sd-high.jpg',
        ]);
        DB::table('movies')->insert([
            'title' => 'Air',
            'description' => "Follows the history of shoe salesman Sonny Vaccaro, and how he led Nike in its pursuit of the greatest athlete in the history of basketball: Michael Jordan.",
            'release_date' => '2023-04-13',
            'runtime' => '1h52m',
            'image' => 'https://cdn.kinepolis.nl/images/NL/65459BAD-CA99-4711-A97B-E049A5FA94D2/HO00004583/0000015262/Air.jpg',
        ]);
    }
}

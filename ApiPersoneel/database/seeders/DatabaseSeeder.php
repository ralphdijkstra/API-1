<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        exec("C:\\xampp\mysql\bin\mysql --user=root --password= --host=localhost --database personeel < ..\personeel.sql");
        // sql-bestand zit 1 niveau dieper dan de projectmap
        // C:\\ ipv C:\ omdat \x betekent iets
    }
}

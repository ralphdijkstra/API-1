<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Werknemer;

class EersteTest extends TestCase
{
    public function test_werknemer_op_id()
    {
        $response = $this->get('api/werknemers/1');
        $response->assertStatus(200);
        $response->assertJson(['naam'=>'Jan','email'=>'jan@summa.nl', ]);
    }

    public function test_werknemer_op_naam()
    {
        $response = $this->get('api/werknemers?naam=J');
        $response->assertStatus(200);
        $response->assertJsonCount(3);
        $response->assertJsonFragment(['naam'=>'Jan','email'=>'jan@summa.nl', ]);
    }

    public function test_insert_werknemer()
    {
        $data = ['naam'=>'Karel', 'email'=> 'karel@summa.nl'];
        $response = $this->json('POST','api/werknemers', $data);
        $this->assertDatabaseHas('werknemers', ['naam'=>'Karel','email'=>'karel@summa.nl', ]);
        $response->assertStatus(201);
        $response->assertJson(['naam'=>'Karel','email'=>'karel@summa.nl', ]);
    }
    
    public function test_delete_werknemer()
    {
        $response = $this->delete('api/werknemers/7');
        $response->assertStatus(200);
    }
    
    public function test_delete_created_werknemer()
    {
        $werknemer = Werknemer::create(array('naam'=>'Carlos', 'email'=> 'carlos@summa.nl'));
        $response = $this->delete('api/werknemers/'.$werknemer->id);
        $this->assertDatabaseMissing('werknemers', ['email' => 'carlos@summa.nl',]);
        $response->assertStatus(200);
    }
    
}

// zie  https://laravel.com/docs/8.x/http-tests#response-assertions

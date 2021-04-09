<?php

use Illuminate\Database\Seeder;
use App\User;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $users=array(
      	[
      		'name'         =>'Administration',
      		'email'        =>'admin@admin.com',
      		'phone_number' =>'9868549759',
      		'address'      =>'Kailali Nepal',
      		'role'				 =>'admin',
      		'password'		 =>'123456789'
      	],[
			'name'         =>'Bishal',
			'email'        =>'bishal@admin.com',
			'phone_number' =>'9866784444',
			'address'      =>'Jhapa Nepal',
			'role'				 =>'admin',
			'password'		 =>'123456789'
		],
		[
			'name'         =>'Nischal',
			'email'        =>'nischal@admin.com',
			'phone_number' =>'986335468',
			'address'      =>'Kathmandu Nepal',
			'role'				 =>'admin',
			'password'		 =>'123456789'
		],
		[
			'name'         =>'Rajendra',
			'email'        =>'rajen@admin.com',
			'phone_number' =>'9868444021',
			'address'      =>'Kailali Nepal',
			'role'				 =>'admin',
			'password'		 =>'123456789'
		],
		  [
			'name'         =>'Rajesh Sanjyal',
			'email'        =>'rajesh.sanjyal@gmail.com',
			'phone_number' =>'9868549759',
			'address'      =>'Kailali Nepal',
			'role'				 =>'user',
			'password'		 =>'12345'
		],
      	
      );

      foreach ($users as $user){
      	User::create([
	      	'name'         =>$user['name'],
      		'email'        =>$user['email'],
      		'phone_number' =>$user['phone_number'],
      		'address'      =>$user['address'],
      		'role'				 =>$user['role'],
      		'password'		 =>Hash::make($user['password'])
	      ]);
	    }
    }
}

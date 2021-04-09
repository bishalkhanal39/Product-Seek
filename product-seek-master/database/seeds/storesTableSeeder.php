<?php

use Illuminate\Database\Seeder;
use App\Store;

class storesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $stores=array(
      	[
      		'name'           =>'Unique Fency Store',
      		'email'          =>'uniquefencystore@gmail.com',
      		'contact'        =>'+9779843614451',
          'store_image'    =>'/images/store/1.jpg',
      		'address'        =>'46H4+6P Bagbazzar, Kathmandu, Nepal',
      		'google_maps_url'=>'https://www.google.com/maps/@27.7070717,85.3172674,15.33z',
          'followers'      =>serialize(array())
      	],
      	[
      		'name'           =>'Shrestha shop',
      		'email'          =>'sshop@gmail.com',
      		'contact'        =>'+9779862350155',
          'store_image'    =>'/images/store/2.jpg',
      		'address'        =>'46J4+3R Ghantaghar, Kathmandu, Nepal',
      		'google_maps_url'=>'https://www.google.com/maps/@27.7078015,85.3170552,15.51z',
          'followers'      =>serialize(array()),
      	],
      	[
      		'name'           =>'Chadani Jewellery NewRoad',
      		'email'          =>'chadanijeweller@gmail.com',
      		'contact'        =>'+61292690898',
          'store_image'    =>'/images/store/3.jpg',
      		'address'        =>'46G4+XG Newroad, Kathmandu, Nepal',
      		'google_maps_url'=>'https://www.google.com/maps/@27.689218,85.32633,15.51z',
          'followers'      =>serialize(array()),
      	],
      	[
      		'name'           =>'Maria Sports Shop ',
      		'email'          =>'mariaclassicalsports@gmail.com',
      		'contact'        =>'+9779852328894',
          'store_image'    =>'/images/store/4.jpg',
      		'address'        =>'Shop/2049 Dhamilkuwa, Lamjung, Nepal',
      		'google_maps_url'=>'https://www.google.com/maps/@28.2240872,84.1352707,9.93z',
          'followers'      =>serialize(array()),
      	],

      );
      
      foreach ($stores as $store){
      	Store::create([
	      	'name'            =>$store['name'],
	      	'email'           =>$store['email'],
      		'contact'         =>$store['contact'],
          'store_image'     =>$store['store_image'],
          'followers'       =>$store['followers'],
      		'address'         =>$store['address'],
      		'google_maps_url' =>$store['google_maps_url']
	      ]);
	    }


    }
}

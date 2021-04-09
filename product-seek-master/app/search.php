<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class search extends Model
{
   protected $guarded=[];

   protected $table= 'search';

  public function userSearch(){
   	return $this->belongsTo(User::class);
  }

}

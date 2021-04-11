<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Interest extends Model
{
    protected $guarded=[];

    protected $table= 'interests';
 
   public function userInterest(){
        return $this->belongsToMany(User::class);
   }
}

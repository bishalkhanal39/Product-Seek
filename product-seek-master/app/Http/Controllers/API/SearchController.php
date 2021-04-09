<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\search;

class SearchController extends Controller
{
	// create search
	public function store(Request $request){
		$this->validate($request,[
			'search_term'=>'required',
		]);

		$search_term=search::create([
			'search_term'=>$request['serch_term'],
			'user_id'=>$request['user_id'],
		]);

	}//create serach
	//update feed back

	public function getSearch($user_id){
		return search::where('user_id',$user_id)->first();
        
    }

}

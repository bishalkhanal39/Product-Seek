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
			'user_id'=>'required',
			'search_term'=>'required',
		]);
		$search=new search;
		$search->search_term=$request->search_term;
		$search->user_id=$request->user_id;

		$result=$search->save();
		if($result){
			return ["Result"=>"Search Submitted"];
		}else{
			return ["Result"=>"Operation failed"];
		}
	}//create serach
	//update search
	public function update(Request $request){
		$this->validate($request,[
			'search_term'=>'required',
		]);
		$search=search::find($request->id);
		$search->search_term=$request->search_term;
		$result=$feedback->save();
		if($result){
			return ["Result"=>"search has been updated"];
		}else{
			return ["Result"=>"search updates failed"];
		}
	}
	//delete search
	public function delete_search($id){
		$search=search::findOrFail($id);
		$search->delete();
	}
	//get search
	public function getSearch($user_id){
		return search::where('user_id',$user_id)->first();
        
    }

}

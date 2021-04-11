<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Feedback;

class FeedbackController extends Controller
{
	// create feedback
	public function store(Request $request){
		$this->validate($request,[
			'user_id'=>'required',
			'feedback'=>'required',
		]);
		$feedback=new Feedback;
		$feedback->feedback=$request->feedback;
		$feedback->user_id=$request->user_id;

		$result=$feedback->save();
		if($result){
			return ["Result"=>"Feedback Submitted"];
		}else{
			return ["Result"=>"Operation failed"];
		}
	}//create feedback


	//update feedback
	public function update(Request $request){
		$this->validate($request,[
			'feedback'=>'required',
		]);
		$feedback=Feedback::find($request->id);
		$feedback->feedback=$request->feedback;
		$result=$feedback->save();
		if($result){
			return ["Result"=>"Feedback has been updated"];
		}else{
			return ["Result"=>"Feedback updates failed"];
		}
	}
	//update feed back
	//delete feedback
	public function delete_feedback($id){
		$feedback=Feedback::findOrFail($id);
		$feedback->delete();
	}
	//get feedback
	public function getFeedback($user_id){
		return Feedback::where('user_id',$user_id)->first();
	}

}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Productcategory;
use App\Store;
use App\Review;

class Product extends Model
{
  use SoftDeletes;

	protected $data=['deleted_at'];

	protected $guarded=[];

	public function productCategory(){
		return $this->belongsToMany(Productcategory::class);
	}

	public function productStore(){
		return $this->belongsToMany(Store::class);
	}

	 public function productReview(){
  	return $this->belongsToMany(Review::class);
  }
  public function scopeWithFilters($query,$categories,$stores,$prices){
	  return ($query);
// 	  return($query->when(count(request()->input(key:'categories',[])),function($query){
// 		  $query->whereIn('Productcategories_id',request()->input(key:'categories'));
// 	  })
// 	  ->when(count(request()->input(key:'stores[])),function($query){
// 		  $query->whereIn('store_id',request()->input(key:'stores'));
// 	  })
// 	  ->when(count(request()->input(key:'prices',[])),function($query){
// 		  $query->when(in_array(needle:0,request()->input(key:'prices')),function($query){
// 			  $query->orWhere('price','<','500');
// 		})
// 		->when(in_array(needle:1,request()->input(key:'prices')),function($query){
// 			$query->orWhereBetween('price',['500','1000']);
// 		})
// 		->when(in_array(needle:2,request()->input(key:'prices')),function($query){
// 			$query->orWhereBetween('price',['1000','5000']);
// 		})
// 		->when(in_array(needle:3,request()->input(key:'prices')),function($query){
// 			$query->orWhereBetween('price',['5000','10000']);
// 		})
// 		->when(in_array(needle:4,request()->input(key:'prices')),function($query){
// 			$query->orWhereBetween('price',['10000','50000']);
// 		})
// 		->when(in_array(needle:5,request()->input(key:'prices')),function($query){
// 			$query->orWhere('price','>','50000');
// 		});
// 	});
  }
}

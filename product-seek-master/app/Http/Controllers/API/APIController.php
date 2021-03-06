<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;
use App\Productcategory;
use App\Store;
use App\User;
use App\search;
use App\Interest;
class APIController extends Controller
{
	// api to get all the products
  public function products(){
  	$products= Product::inRandomOrder()->with('productCategory','productStore')->get();

  	foreach ($products as $product){
  		$product->product_image=unserialize($product->product_image);
  	}

    foreach ($products as $product){
      foreach($product->productStore as $store){
        $store->followers=unserialize($store->followers);
      }
    }

  	return $products;
  }
  // end api to get all the products
// api to get all the products
public function single_product($id){
  $product= Product::latest()->with('productCategory','productStore');
  $product= $product->findOrFail($id);
  return $product;
}
  // api to get all the products category
  public function categories(){
  	return Productcategory::inRandomOrder()->get();
  }
  // end api to get all the products category

 // api to get all the products category by id
  public function show_category($id){
    $category= Productcategory::latest()->with('productCategory');
     $category= $category->findOrFail($id);
     $category->products=unserialize($category->products);
      $categoryProduct=[];
     foreach($category->productCategory as $p){
      $product=Product::latest()->with('productStore','productCategory');
      $product=$product->findOrFail($p->id);
      $product->product_image=unserialize($product->product_image);
      array_push($categoryProduct,$product);
     }
     $category->Categoryproduct= $categoryProduct;
     return $category;

  }
  // end api to get all the products category by id

 // api to get all the products store by id
  public function show_store($id){
  	$store= Store::latest()->with('productStore','userFollow');
     $store= $store->findOrFail($id);
     $store->followers=unserialize($store->followers);
      $storeProduct=[];
     foreach($store->productStore as $p){
      $product=Product::latest()->with('productCategory','productStore');
      $product=$product->findOrFail($p->id);
      $product->product_image=unserialize($product->product_image);
      array_push($storeProduct,$product);
     }
     $store->Storeproduct= $storeProduct;
     return $store;
  }
  // end api to get all the products store by id


  // get all the store9
  public function stores(){
  	$stores= Store::latest()->get();
    foreach($stores as $store){
      $store->followers=unserialize($store->followers);
    }
    return $stores;
  }
  // end get all the store


  // filter by cat
  public function filter_by_cat($id){
  	$cat=Productcategory::findOrFail($id);
 		$products= Product::latest()->with('productStore','productCategory')->get();
      foreach ($products as $product){
      foreach($product->productStore as $store){
        $store->followers=unserialize($store->followers);
      }
    }
 		
 		//filtercategory
 		$products=$this->filter_product_cat($products,$cat->id);
 		//filtercategory

    foreach ($products as $product){
      $product->product_image=unserialize($product->product_image);
    }

 		return $products;
  }

  public function filter_product_cat($product,$category_id){
  	$filtered_products=[];
  	foreach($product as $p){
  		$productCategory=$p->productCategory;

  		$productCat_id=[];

  		foreach($productCategory as $pc){
  			array_push($productCat_id,$pc->id);
  		}	

  		if(in_array($category_id, $productCat_id)){
  			array_push($filtered_products,$p);
  		}

  	}
  	return $filtered_products;

  }
  // end filter by cat


  // filter by store
   public function filter_by_store($id){
  	$store=Store::findOrFail($id);
 		$products= Product::latest()->with('productStore','productCategory')->get();

    foreach ($products as $product){
      foreach($product->productStore as $store){
        $store->followers=unserialize($store->followers);
      }
    }
 		
 		//filtercategory
 		$products=$this->filter_product_store($products,$store->id);
 		//filtercategory
    foreach ($products as $product){
      $product->product_image=unserialize($product->product_image);
    }

 		return $products;
  }

  
   public function filter_product_store($product,$category_id){
  	$filtered_products=[];
  	foreach($product as $p){
  		$productCategory=$p->productStore;

  		$productCat_id=[];

  		foreach($productCategory as $pc){
  			array_push($productCat_id,$pc->id);
  		}	

  		if(in_array($category_id, $productCat_id)){
  			array_push($filtered_products,$p);
  		}

  	}
  	return $filtered_products;

  }

	// end filter by store
	

	// search product
	public function product_search($search_term){
		$products = Product::where('title', 'LIKE', "%{$search_term}%")->with('productCategory','productStore','productReview')->get();
    foreach ($products as $product){
      $product->product_image=unserialize($product->product_image);
    }
		return $products;
	}
	// end search product

  public function product_review($product_id){
    $product=Product::latest()->with('productReview');
    $product=$product->findOrFail($product_id);
    $reviews=$product->productReview;

    foreach($reviews as $r){
      $user=User::findOrFail($r->user_id);
      $r->username=$user->name;
    }

    return $reviews;
  }
  public function  might_like_products(){
    $products= Product::inRandomOrder()->with('productCategory','productStore')->take(4)->get();

  	foreach ($products as $product){
  		$product->product_image=unserialize($product->product_image);
  	}

    foreach ($products as $product){
      foreach($product->productStore as $store){
        $store->followers=unserialize($store->followers);
      }
    }

  	return $products;
  } 
  //insert interest
  public function interests(Request $request){
    $this->validate($request,[
			'user_id'=>'required',
			'interest'=>'required',
		]);
		$interest=new Interest;
		$interest->interest=$request->interest;
		$interest->user_id=$request->user_id;

		$result=$interest->save();
		if($result){
			return ["Result"=>"Interest Submitted"];
		}else{
			return ["Result"=>"Operation failed"];
		}
  } 
  public function interest_get($id){
    return Interest::inRandomOrder()->get();

  }
  public function filter_by_content(Request $req){
    $myArray=[];
    $category= Productcategory::latest()->with('productCategory');
      $interest=Interest::inRandomOrder()->take(1)->get();
      foreach ($interest as $interest){
         $term=$req->interest;
      }
     $products=Product::where('title', 'LIKE', "%{$term}%")->with('productCategory','productStore','productReview')->get();
      foreach($products as $p){
      array_push($myArray,$p);
      }
      foreach ($products as $product){
        $productcat=$product->productCategory;
        foreach($productcat as $c){
         $me=$c->id;
          $category= $category->findOrFail($me);
          foreach($category->productCategory as $p){
            $product=Product::inRandomOrder()->with('productStore','productCategory');
            $product=$product->findOrFail($p->id);
            $product->product_image=unserialize($product->product_image);
            array_push($myArray,$product);
          }
        }
      }
      return $myArray;

  }
}
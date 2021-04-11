<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;
use App\Productcategory;
use App\Store;
use App\User;
use App\search;
class APIController extends Controller
{
  //algorithm
  // protected $products       = [];
  // protected $storeWeight    = 1;
  // protected $warrentyWeight = 1;
  // protected $priceWeight    = 1;
  // protected $categoryWeight = 1;
  // protected $warrentyHighRange=3;
  // protected $priceHighRange = 1000;

  // public function __construct(array $products)
  // {
  //     $this->products       = $products;
  //     $this->warrentyHighRange = max(array_column($products, 'warrenty'));
  //     $this->priceHighRange = max(array_column($products, 'price'));
  // }

  // public function setStoreWeight(float $weight): void
  // {
  //     $this->storeWeight = $weight;
  // }

  // public function setWarrentyWeight(float $weight): void
  // {
  //     $this->warrentyWeight = $weight;
  // }

  // public function setPriceWeight(float $weight): void
  // {
  //     $this->priceWeight = $weight;
  // }

  // public function setCategoryWeight(float $weight): void
  // {
  //     $this->categoryWeight = $weight;
  // }

  // public function calculateSimilarityMatrix(): array
  // {
  //     $matrix = [];

  //     foreach ($this->products as $product) {

  //         $similarityScores = [];

  //         foreach ($this->products as $_product) {
  //             if ($product->id === $_product->id) {
  //                 continue;
  //             }
  //             $similarityScores['product_id_' . $_product->id] = $this->calculateSimilarityScore($product, $_product);
  //         }
  //         $matrix['product_id_' . $product->id] = $similarityScores;
  //     }
  //     return $matrix;
  // }

  // public function getProductsSortedBySimularity(int $productId, array $matrix): array
  // {
  //     $similarities   = $matrix['product_id_' . $productId] ?? null;
  //     $sortedProducts = [];

  //     if (is_null($similarities)) {
  //         return latest();
  //     }
  //     arsort($similarities);

  //     foreach ($similarities as $productIdKey => $similarity) {
  //         $id      = intval(str_replace('product_id_', '', $productIdKey));
  //         $products = array_filter($this->products, function ($product) use ($id) { return $product->id === $id; });
  //         if (! count($products)) {
  //             continue;
  //         }
  //         $product = $products[array_keys($products)[0]];
  //         $product->similarity = $similarity;
  //         $sortedProducts[] = $product;
  //     }
  //     return $sortedProducts;
  // }

  // protected function calculateSimilarityScore($productA, $productB)
  // {
  //     $productAStores = implode('', get_object_vars($productA->stores));
  //     $productBStores = implode('', get_object_vars($productB->stores));

  //     return array_sum([
  //         (Similarity::hamming($productAStores, $productBStores) * $this->storeWeight),
  //         (Similarity::euclidean(
  //             Similarity::minMaxNorm([$productA->price], 0, $this->priceHighRange),
  //             Similarity::minMaxNorm([$productB->price], 0, $this->priceHighRange)
  //         ) * $this->priceWeight),
  //         (Similarity::euclidean(
  //             Similarity::minMaxNorm([$productA->warrenty], 0, $this->warrentyHighRange),
  //             Similarity::minMaxNorm([$productB->warrenty], 0, $this->warrentyHighRange)
  //         ) * $this->warrentyWeight),
  //         (Similarity::jaccard($productA->categories, $productB->categories) * $this->categoryWeight),
  //     ]) / ($this->storeWeight + $this->priceWeight + $this->categoryWeight);
  // }

 // $products        = json_decode(file_get_contents(storage_path('data/products-data.json')));
    // $selectedId      = intval(app('request')->input('id') ?? '8');
    // $selectedProduct = $products[0];

    // $selectedProducts = array_filter($products, function ($product) use ($selectedId) { return $product->id === $selectedId; });
    // if (count($selectedProducts)) {
    //     $selectedProduct = $selectedProducts[array_keys($selectedProducts)[0]];
    // }

    // $productSimilarity = new App\ProductSimilarity($products);
    // $similarityMatrix  = $productSimilarity->calculateSimilarityMatrix();
    // $products          = $productSimilarity->getProductsSortedBySimularity($selectedId, $similarityMatrix);

    // return view('welcome', compact('selectedId', 'selectedProduct', 'products'));

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
  // $product->productCategory=unserialize($product->productCategory);
  // $product->productStore=unserialize($product->productStore);
  // $category= Productcategory::latest()->with('productCategory');
    //  $category= $category->findOrFail($id);
    //  $category->products=unserialize($category->products);
      // $categoryProduct=[];
    //  foreach($category->productCategory as $p){
      // $product=Product::latest()->with('productStore','productCategory');
      // $product=$product->findOrFail($p->id);
      // $product->product_image=unserialize($product->product_image);
      // array_push($categoryProduct,$product);
    //  }
    //  $category->Categoryproduct= $categoryProduct;
  return $product;
  // $products= Product::inRandomOrder()->with('productCategory','productStore')->get();

  // 	foreach ($products as $product){
  // 		$product->product_image=unserialize($product->product_image);
  // 	}

  //   foreach ($products as $product){
  //     foreach($product->productStore as $store){
  //       $store->followers=unserialize($store->followers);
  //     }
  //   }

  // 	return $products;
  // $product= Product::latest()->with('product');
  // $product= $product->findOrFail($id);
  // $product->productCategory=unserialize($product->productCategory);
  // $product->productStore=unserialize($product->productStore);
  // return $product;
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
    // $products= Product::inRandomOrder()->with('productCategory','productStore')->paginate(4);

  	// foreach ($products as $product){
  	// 	$product->product_image=unserialize($product->product_image);
  	// }
    // return Product::inRandomOrder()->paginate(4);
  	// return $products;
  }  
}

<?php declare(strict_types=1);

namespace App;

use Exception;

class ProductSimilarity
{
    protected $products       = [];
    protected $storeWeight    = 1;
    protected $warrentyWeight = 1;
    protected $priceWeight    = 1;
    protected $categoryWeight = 1;
    protected $warrentyHighRange=3;
    protected $priceHighRange = 1000;

    public function __construct(array $products)
    {
        $this->products       = $products;
        $this->warrentyHighRange = max(array_column($products, 'warrenty'));
        $this->priceHighRange = max(array_column($products, 'price'));
    }

    public function setStoreWeight(float $weight): void
    {
        $this->storeWeight = $weight;
    }

    public function setWarrentyWeight(float $weight): void
    {
        $this->warrentyWeight = $weight;
    }

    public function setPriceWeight(float $weight): void
    {
        $this->priceWeight = $weight;
    }

    public function setCategoryWeight(float $weight): void
    {
        $this->categoryWeight = $weight;
    }

    public function calculateSimilarityMatrix(): array
    {
        $matrix = [];

        foreach ($this->products as $product) {

            $similarityScores = [];

            foreach ($this->products as $_product) {
                if ($product->id === $_product->id) {
                    continue;
                }
                $similarityScores['product_id_' . $_product->id] = $this->calculateSimilarityScore($product, $_product);
            }
            $matrix['product_id_' . $product->id] = $similarityScores;
        }
        return $matrix;
    }

    public function getProductsSortedBySimularity(int $productId, array $matrix): array
    {
        $similarities   = $matrix['product_id_' . $productId] ?? null;
        $sortedProducts = [];

        if (is_null($similarities)) {
            throw new Exception('Can\'t find product with that ID.');
        }
        arsort($similarities);

        foreach ($similarities as $productIdKey => $similarity) {
            $id      = intval(str_replace('product_id_', '', $productIdKey));
            $products = array_filter($this->products, function ($product) use ($id) { return $product->id === $id; });
            if (! count($products)) {
                continue;
            }
            $product = $products[array_keys($products)[0]];
            $product->similarity = $similarity;
            $sortedProducts[] = $product;
        }
        return $sortedProducts;
    }

    protected function calculateSimilarityScore($productA, $productB)
    {
        $productAStores = implode('', get_object_vars($productA->stores));
        $productBStores = implode('', get_object_vars($productB->stores));

        return array_sum([
            (Similarity::hamming($productAStores, $productBStores) * $this->storeWeight),
            (Similarity::euclidean(
                Similarity::minMaxNorm([$productA->price], 0, $this->priceHighRange),
                Similarity::minMaxNorm([$productB->price], 0, $this->priceHighRange)
            ) * $this->priceWeight),
            (Similarity::euclidean(
                Similarity::minMaxNorm([$productA->warrenty], 0, $this->warrentyHighRange),
                Similarity::minMaxNorm([$productB->warrenty], 0, $this->warrentyHighRange)
            ) * $this->warrentyWeight),
            (Similarity::jaccard($productA->categories, $productB->categories) * $this->categoryWeight),
        ]) / ($this->storeWeight + $this->priceWeight + $this->categoryWeight);
    }
}
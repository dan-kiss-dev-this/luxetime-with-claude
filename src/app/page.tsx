'use client';
import { HeroBanner, ProductGrid } from '@/components/product';
import { products } from '@/data/products';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ProductGrid products={products} />
    </>
  );
}

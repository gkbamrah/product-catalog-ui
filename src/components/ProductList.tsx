import { ProductCard } from './ProductCard'
import type { Product } from '@/types/Product'
import.meta.env.VITE_API_URL

interface ProductListProps {
  products: Product[]
  loading: boolean
  error: string | null
}

export const ProductList: React.FC<ProductListProps> = ({ products, loading, error }) => {



    return (
        <div className="max-w-5xl mx-auto ">
            {loading ? (
            <p>Loading products...</p>
            ) : error ? (
            <p>{error}</p>
            ) : (
            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {products.map(product => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
            )}
        </div>
    )

}
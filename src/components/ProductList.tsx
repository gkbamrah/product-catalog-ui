import { ProductCard } from './ProductCard'
import type { Product } from '@/types/Product'
import.meta.env.VITE_API_URL

interface ProductListProps {
  products: Product[]
  loading: boolean
  error: string | null
  showSlowMessage: boolean
}

export const ProductList: React.FC<ProductListProps> = ({ products, loading, error, showSlowMessage }) => {



    return (
        <div className="max-w-5xl mx-auto ">
            {loading ? (
                showSlowMessage ? (
                    <p> Waking up the server. This can take some time on the first load. Thanks for your patience!</p>)
                    : <p>Loading products...</p>
            ) : error ? (
            <p className="text-center">Something went wrong loading products. This can happen if the server is starting up. If the issue persists, please check back later.</p>
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
import {useState, useEffect} from 'react'
import type { Product } from '@/types/Product'

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)


  
      useEffect(() => {
          searchParams({ search: "", category: "" })
      }, [])
  
      const searchParams = async ({ search, category }: { search: string; category: string }) => {
          setLoading(true)
          setError(null)
          try {
              const queryParams = new URLSearchParams()
              if (search) queryParams.append('search', search)
              if (category) queryParams.append('category', category)
  
              const response = await fetch(`${import.meta.env.VITE_API_URL}/products/api/?${queryParams.toString()}`)
              const data = await response.json()
              setProducts(data)
          } catch (error) {
              setError('Failed to fetch products' + error)
          } finally {
              setLoading(false)
          }

      }

    return { products, loading, error, searchParams }

}
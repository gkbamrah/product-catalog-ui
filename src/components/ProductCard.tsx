import React from 'react'
import type { Product } from '@/types/Product'

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Category: {product.category ? product.category.name : 'N/A'}</p>
      <div className="tags">
        {product.tags.map((tag) => (
          <span key={tag.id} className="tag">{tag.name}</span>
        ))}
      </div>
    </div>
  )
}
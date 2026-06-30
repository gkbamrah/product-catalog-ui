import React from 'react'
import type { Product } from '@/types/Product'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card className="w-80 border border-solid">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.category?.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{product.description}</p>
      </CardContent>
      <CardContent>
        <p>Price: ${product.price}</p>
      </CardContent>
    </Card>
  )
}
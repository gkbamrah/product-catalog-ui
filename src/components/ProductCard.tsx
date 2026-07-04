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
    <Card className="w-full border border-solid mx-auto ">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className='line-clamp-3'>{product.category?.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{product.description}</p>
      </CardContent>
      <CardContent>
        <p className="font-semibold text-md">Price: ${product.price}</p>
      </CardContent>
    </Card>
  )
}
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"

export function SearchForm({ onSubmit }: { onSubmit: (params: { search: string; category: string }) => void }) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState([])


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()  // prevents page reload
    onSubmit({ search, category })
  }
    useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/categories/api/`)
        const data = await response.json()
        setCategories(data)
      } catch (error) {
        console.error("Failed to fetch categories:", error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="search">Search</Label>
      <Input
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
      />

      <Label htmlFor="category">Category</Label>
      <Select onValueChange={(value) => setCategory(value)}>
        <SelectTrigger>
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {categories?.map((cat) => (
            <SelectItem key={cat.id} value={cat.name}>
              {cat.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button type="submit">Search</Button>
    </form>
  )
}
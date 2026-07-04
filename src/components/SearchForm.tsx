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

export const SearchForm:  React.FC<{ onSubmit: (params: { search: string; category: string }) => void }> = ({ onSubmit }) => {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState<any[]>([])
    const inputWrapperClass = "flex-1 min-w-[200px]"


  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
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
    <form onSubmit={handleSubmit} className="flex flex-wrap md:flex-nowrap gap-3 my-4 items-center justify-between">
        <div className={inputWrapperClass}>
            <Label htmlFor="search" className="sr-only">Search</Label>
            <Input
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
            />
        </div>
        <div className={inputWrapperClass}>
            <Label htmlFor="category" className="sr-only">Category</Label>
            <Select onValueChange={(value) => setCategory(value)} >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                {categories?.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id.toString()}>
                    {cat.name}
                    </SelectItem>
                ))}
                </SelectContent>
            </Select>
        </div>
      <Button className="w-full md:w-auto" type="submit">Search</Button>
    </form>
  )
}
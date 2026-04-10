"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Eye, Package, DollarSign, ImageIcon } from "lucide-react"

// Mock data for products
const products = [
  {
    id: 1,
    name: "Origami Paper Set - Premium",
    category: "Materials",
    price: 24.99,
    inventory: 45,
    status: "published",
    sku: "OPS-001",
    description: "High-quality origami paper in 20 vibrant colors. Perfect for all skill levels.",
    image: "/placeholder-j0pac.png",
  },
  {
    id: 2,
    name: "Handcrafted Paper Crane Mobile",
    category: "Finished Art",
    price: 89.99,
    inventory: 12,
    status: "published",
    sku: "PCM-002",
    description: "Beautiful mobile featuring 12 hand-folded paper cranes in gradient colors.",
    image: "/placeholder-xixvk.png",
  },
  {
    id: 3,
    name: "Kirigami Greeting Cards (Set of 8)",
    category: "Cards",
    price: 16.99,
    inventory: 28,
    status: "published",
    sku: "KGC-003",
    description: "Intricate pop-up greeting cards featuring traditional kirigami designs.",
    image: "/placeholder-u2z9h.png",
  },
  {
    id: 4,
    name: "3D Paper Sculpture Kit",
    category: "Kits",
    price: 45.99,
    inventory: 0,
    status: "published",
    sku: "PSK-004",
    description: "Complete kit for creating stunning 3D paper sculptures with templates and instructions.",
    image: "/paper-sculpture-kit.png",
  },
  {
    id: 5,
    name: "Custom Wedding Installation",
    category: "Custom Work",
    price: 299.99,
    inventory: 999,
    status: "draft",
    sku: "CWI-005",
    description: "Bespoke paper art installation for weddings and special events.",
    image: "/wedding-paper-installation.png",
  },
]

interface Product {
  id: number
  name: string
  category: string
  price: number
  inventory: number
  status: "published" | "draft"
  sku: string
  description: string
  image: string
}

export function ProductManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const getStatusBadge = (status: string) => {
    return status === "published" ? (
      <Badge className="bg-primary/10 text-primary">Published</Badge>
    ) : (
      <Badge variant="secondary">Draft</Badge>
    )
  }

  const getInventoryBadge = (inventory: number) => {
    if (inventory === 0) {
      return <Badge className="bg-destructive/10 text-destructive">Out of Stock</Badge>
    } else if (inventory < 10) {
      return <Badge className="bg-accent/10 text-accent">Low Stock</Badge>
    } else if (inventory === 999) {
      return <Badge variant="outline">Custom Order</Badge>
    }
    return <Badge variant="outline">{inventory} in stock</Badge>
  }

  const categories = ["Materials", "Finished Art", "Cards", "Kits", "Custom Work"]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Product Management</h1>
          <p className="text-muted-foreground mt-2">Manage your product catalog, inventory, and pricing.</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add New Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
            </DialogHeader>
            <ProductForm onClose={() => setIsAddDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products, SKU, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="low-stock">Low Stock</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Products table */}
      <Card>
        <CardHeader>
          <CardTitle>Products ({filteredProducts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Inventory</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = "none"
                            target.nextElementSibling?.classList.remove("hidden")
                          }}
                        />
                        <Package className="h-6 w-6 text-muted-foreground hidden" />
                      </div>
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground line-clamp-1">{product.description}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{product.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{product.price.toFixed(2)}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getInventoryBadge(product.inventory)}</TableCell>
                  <TableCell>{getStatusBadge(product.status)}</TableCell>
                  <TableCell>
                    <code className="text-sm bg-muted px-2 py-1 rounded">{product.sku}</code>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setEditingProduct(product)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Product
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ImageIcon className="h-4 w-4 mr-2" />
                          Manage Images
                        </DropdownMenuItem>
                        <DropdownMenuItem>{product.status === "published" ? "Unpublish" : "Publish"}</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit product dialog */}
      <Dialog open={!!editingProduct} onOpenChange={() => setEditingProduct(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          {editingProduct && <ProductForm product={editingProduct} onClose={() => setEditingProduct(null)} />}
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface ProductFormProps {
  product?: Product
  onClose: () => void
}

function ProductForm({ product, onClose }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: product?.name || "",
    description: product?.description || "",
    category: product?.category || "",
    price: product?.price || 0,
    inventory: product?.inventory || 0,
    sku: product?.sku || "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Product data:", formData)
    onClose()
  }

  const categories = ["Materials", "Finished Art", "Cards", "Kits", "Custom Work"]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="col-span-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe the product features and benefits"
            rows={3}
            required
          />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="sku">SKU</Label>
          <Input
            id="sku"
            value={formData.sku}
            onChange={(e) => setFormData({ ...formData, sku: e.target.value.toUpperCase() })}
            placeholder="e.g., OPS-001"
            required
          />
        </div>

        <div>
          <Label htmlFor="price">Price ($)</Label>
          <Input
            id="price"
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
            min="0"
            step="0.01"
            required
          />
        </div>

        <div>
          <Label htmlFor="inventory">Inventory Count</Label>
          <Input
            id="inventory"
            type="number"
            value={formData.inventory}
            onChange={(e) => setFormData({ ...formData, inventory: Number(e.target.value) })}
            min="0"
            placeholder="0 for out of stock, 999 for custom orders"
            required
          />
        </div>

        <div className="col-span-2">
          <Label htmlFor="images">Product Images</Label>
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
            <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">
              Drag and drop images here, or{" "}
              <button type="button" className="text-primary hover:underline">
                browse files
              </button>
            </p>
            <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB each</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">{product ? "Update Product" : "Create Product"}</Button>
      </div>
    </form>
  )
}

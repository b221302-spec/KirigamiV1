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
import { Plus, Search, MoreHorizontal, Edit, Trash2, Eye, FileText, Calendar, User, ImageIcon } from "lucide-react"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Art of Paper Folding: A Beginner's Journey",
    author: "Sarah Kim",
    date: "2024-12-10",
    status: "published",
    category: "Tutorial",
    excerpt: "Discover the meditative world of origami and learn your first basic folds in this comprehensive guide.",
    readTime: "5 min read",
    views: 1234,
    featuredImage: "/origami-tutorial.png",
  },
  {
    id: 2,
    title: "Behind the Scenes: Creating Custom Wedding Installations",
    author: "Sarah Kim",
    date: "2024-12-08",
    status: "published",
    category: "Behind the Scenes",
    excerpt:
      "Take a peek into our creative process as we design and install breathtaking paper art for special occasions.",
    readTime: "8 min read",
    views: 892,
    featuredImage: "/wedding-paper-installation-bts.png",
  },
  {
    id: 3,
    title: "Seasonal Inspiration: Holiday Card Making Workshop Recap",
    author: "Sarah Kim",
    date: "2024-12-05",
    status: "published",
    category: "Workshop Recap",
    excerpt:
      "Highlights from our recent holiday card making workshop, featuring beautiful creations from our participants.",
    readTime: "4 min read",
    views: 567,
    featuredImage: "/holiday-cards-workshop.png",
  },
  {
    id: 4,
    title: "Advanced Techniques: 3D Paper Sculpture Mastery",
    author: "Sarah Kim",
    date: "2024-12-03",
    status: "draft",
    category: "Tutorial",
    excerpt: "Explore advanced paper sculpting techniques to create stunning three-dimensional artworks.",
    readTime: "12 min read",
    views: 0,
    featuredImage: "/3d-paper-sculpture-advanced.png",
  },
  {
    id: 5,
    title: "The History and Cultural Significance of Kirigami",
    author: "Sarah Kim",
    date: "2024-11-28",
    status: "draft",
    category: "Educational",
    excerpt: "Delve into the rich history and cultural importance of the Japanese art of paper cutting.",
    readTime: "10 min read",
    views: 0,
    featuredImage: "/kirigami-history-culture.png",
  },
]

interface BlogPost {
  id: number
  title: string
  author: string
  date: string
  status: "published" | "draft"
  category: string
  excerpt: string
  readTime: string
  views: number
  featuredImage: string
}

export function BlogManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || post.category === categoryFilter
    const matchesStatus = statusFilter === "all" || post.status === statusFilter
    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    return status === "published" ? (
      <Badge className="bg-primary/10 text-primary">Published</Badge>
    ) : (
      <Badge variant="secondary">Draft</Badge>
    )
  }

  const categories = ["Tutorial", "Behind the Scenes", "Workshop Recap", "Educational", "News"]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Blog Management</h1>
          <p className="text-muted-foreground mt-2">Create and manage your blog posts and content.</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Blog Post</DialogTitle>
            </DialogHeader>
            <BlogPostForm onClose={() => setIsAddDialogOpen(false)} />
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
                placeholder="Search blog posts..."
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
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Posts</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Drafts</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Blog posts table */}
      <Card>
        <CardHeader>
          <CardTitle>Blog Posts ({filteredPosts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Post</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Views</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-16 w-24 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                        <img
                          src={post.featuredImage || "/placeholder.svg"}
                          alt={post.title}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = "none"
                            target.nextElementSibling?.classList.remove("hidden")
                          }}
                        />
                        <FileText className="h-8 w-8 text-muted-foreground hidden" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium line-clamp-1">{post.title}</p>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{post.excerpt}</p>
                        <p className="text-xs text-muted-foreground mt-1">{post.readTime}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{post.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{post.author}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(post.status)}</TableCell>
                  <TableCell>
                    <span className="text-sm font-medium">{post.views.toLocaleString()}</span>
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
                          Preview Post
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setEditingPost(post)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Post
                        </DropdownMenuItem>
                        <DropdownMenuItem>{post.status === "published" ? "Unpublish" : "Publish"}</DropdownMenuItem>
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

      {/* Edit post dialog */}
      <Dialog open={!!editingPost} onOpenChange={() => setEditingPost(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Blog Post</DialogTitle>
          </DialogHeader>
          {editingPost && <BlogPostForm post={editingPost} onClose={() => setEditingPost(null)} />}
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface BlogPostFormProps {
  post?: BlogPost
  onClose: () => void
}

function BlogPostForm({ post, onClose }: BlogPostFormProps) {
  const [formData, setFormData] = useState({
    title: post?.title || "",
    excerpt: post?.excerpt || "",
    category: post?.category || "",
    content: "Start writing your blog post here...",
    tags: "",
    featuredImage: post?.featuredImage || "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Blog post data:", formData)
    onClose()
  }

  const categories = ["Tutorial", "Behind the Scenes", "Workshop Recap", "Educational", "News"]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <Label htmlFor="title">Post Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter an engaging blog post title"
            required
          />
        </div>

        <div className="col-span-2">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            placeholder="Write a brief summary that will appear in blog previews"
            rows={2}
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
          <Label htmlFor="tags">Tags</Label>
          <Input
            id="tags"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            placeholder="origami, tutorial, beginner (comma separated)"
          />
        </div>

        <div className="col-span-2">
          <Label htmlFor="featuredImage">Featured Image</Label>
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
            <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">
              Drag and drop an image here, or{" "}
              <button type="button" className="text-primary hover:underline">
                browse files
              </button>
            </p>
            <p className="text-xs text-muted-foreground mt-1">Recommended: 1200x630px, PNG or JPG</p>
          </div>
        </div>

        <div className="col-span-2">
          <Label htmlFor="content">Content</Label>
          <div className="border border-border rounded-lg">
            {/* Rich text editor toolbar */}
            <div className="border-b border-border p-3 flex items-center gap-2 bg-muted/30">
              <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                <strong>B</strong>
              </Button>
              <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                <em>I</em>
              </Button>
              <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                <u>U</u>
              </Button>
              <div className="w-px h-6 bg-border mx-1" />
              <Button type="button" variant="ghost" size="sm" className="text-xs">
                H1
              </Button>
              <Button type="button" variant="ghost" size="sm" className="text-xs">
                H2
              </Button>
              <Button type="button" variant="ghost" size="sm" className="text-xs">
                H3
              </Button>
              <div className="w-px h-6 bg-border mx-1" />
              <Button type="button" variant="ghost" size="sm" className="text-xs">
                Link
              </Button>
              <Button type="button" variant="ghost" size="sm" className="text-xs">
                Image
              </Button>
              <Button type="button" variant="ghost" size="sm" className="text-xs">
                List
              </Button>
            </div>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="min-h-[300px] border-0 resize-none focus-visible:ring-0"
              placeholder="Start writing your blog post here..."
              required
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Use Markdown formatting for rich text. Images can be uploaded and inserted using the toolbar.
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
          <Button type="button" variant="outline">
            Preview
          </Button>
        </div>
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">{post ? "Update Post" : "Publish Post"}</Button>
        </div>
      </div>
    </form>
  )
}

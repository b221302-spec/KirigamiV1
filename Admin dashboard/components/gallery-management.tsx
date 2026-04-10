"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Eye, Upload, ImageIcon, Video } from "lucide-react"

// Mock data for gallery items
const galleryItems = [
  {
    id: 1,
    title: "Cherry Blossom Wedding Installation",
    type: "image",
    url: "/wedding-paper-installation.png",
    caption:
      "Custom paper art installation featuring delicate cherry blossoms and origami cranes for a spring wedding ceremony.",
    tags: ["wedding", "installation", "cherry-blossom", "cranes"],
    uploadDate: "2024-12-01",
    size: "2.4 MB",
    dimensions: "1920x1080",
  },
  {
    id: 2,
    title: "3D Paper Sculpture Process",
    type: "video",
    url: "/paper-sculpture-thumbnail.png",
    caption: "Time-lapse video showing the creation process of a complex 3D paper sculpture from start to finish.",
    tags: ["process", "sculpture", "timelapse", "tutorial"],
    uploadDate: "2024-11-28",
    size: "15.7 MB",
    dimensions: "1280x720",
  },
  {
    id: 3,
    title: "Origami Paper Collection",
    type: "image",
    url: "/placeholder-miri1.png",
    caption:
      "Premium origami paper collection showcasing the vibrant colors and textures available in our workshop kits.",
    tags: ["materials", "origami", "colors", "products"],
    uploadDate: "2024-11-25",
    size: "1.8 MB",
    dimensions: "1600x1200",
  },
  {
    id: 4,
    title: "Workshop Participants Creating",
    type: "image",
    url: "/holiday-cards-workshop.png",
    caption: "Students engaged in learning paper folding techniques during our popular holiday card making workshop.",
    tags: ["workshop", "students", "learning", "holiday"],
    uploadDate: "2024-11-20",
    size: "3.1 MB",
    dimensions: "1920x1280",
  },
  {
    id: 5,
    title: "Kirigami Pop-up Cards",
    type: "image",
    url: "/kirigami-geometric-cards.png",
    caption: "Intricate kirigami greeting cards featuring traditional Japanese pop-up designs and geometric patterns.",
    tags: ["kirigami", "cards", "geometric", "traditional"],
    uploadDate: "2024-11-15",
    size: "2.2 MB",
    dimensions: "1500x1000",
  },
  {
    id: 6,
    title: "Paper Crane Mobile Tutorial",
    type: "video",
    url: "/paper-crane-mobile-assembly-thumbnail.png",
    caption: "Step-by-step tutorial showing how to assemble our signature paper crane mobile for home decoration.",
    tags: ["tutorial", "mobile", "cranes", "decoration"],
    uploadDate: "2024-11-10",
    size: "22.3 MB",
    dimensions: "1920x1080",
  },
]

interface GalleryItem {
  id: number
  title: string
  type: "image" | "video"
  url: string
  caption: string
  tags: string[]
  uploadDate: string
  size: string
  dimensions: string
}

export function GalleryManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null)
  const [selectedType, setSelectedType] = useState("all")

  const filteredItems = galleryItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesType = selectedType === "all" || item.type === selectedType
    return matchesSearch && matchesType
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gallery Management</h1>
          <p className="text-muted-foreground mt-2">Upload and manage your portfolio images and videos.</p>
        </div>
        <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Upload Media
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Upload New Media</DialogTitle>
            </DialogHeader>
            <MediaUploadForm onClose={() => setIsUploadDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats and filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Items</p>
                <p className="text-2xl font-bold text-foreground">{galleryItems.length}</p>
              </div>
              <ImageIcon className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Images</p>
                <p className="text-2xl font-bold text-accent">
                  {galleryItems.filter((item) => item.type === "image").length}
                </p>
              </div>
              <ImageIcon className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Videos</p>
                <p className="text-2xl font-bold text-secondary">
                  {galleryItems.filter((item) => item.type === "video").length}
                </p>
              </div>
              <Video className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Storage Used</p>
                <p className="text-2xl font-bold text-foreground">47.5 MB</p>
              </div>
              <Upload className="h-8 w-8 text-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by title, caption, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedType === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType("all")}
              >
                All
              </Button>
              <Button
                variant={selectedType === "image" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType("image")}
              >
                Images
              </Button>
              <Button
                variant={selectedType === "video" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType("video")}
              >
                Videos
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative aspect-video bg-muted">
              <img src={item.url || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2">
                <Badge variant={item.type === "image" ? "default" : "secondary"}>
                  {item.type === "image" ? <ImageIcon className="h-3 w-3 mr-1" /> : <Video className="h-3 w-3 mr-1" />}
                  {item.type}
                </Badge>
              </div>
              <div className="absolute top-2 right-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      View Full Size
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setEditingItem(item)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Details
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium line-clamp-1 mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{item.caption}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {item.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {item.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{item.tags.length - 3}
                  </Badge>
                )}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{new Date(item.uploadDate).toLocaleDateString()}</span>
                <span>{item.size}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit item dialog */}
      <Dialog open={!!editingItem} onOpenChange={() => setEditingItem(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Media Details</DialogTitle>
          </DialogHeader>
          {editingItem && <MediaEditForm item={editingItem} onClose={() => setEditingItem(null)} />}
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface MediaUploadFormProps {
  onClose: () => void
}

function MediaUploadForm({ onClose }: MediaUploadFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    caption: "",
    tags: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Upload data:", formData)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
        <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <p className="text-lg font-medium mb-2">Upload Images or Videos</p>
        <p className="text-sm text-muted-foreground mb-4">
          Drag and drop files here, or{" "}
          <button type="button" className="text-primary hover:underline">
            browse files
          </button>
        </p>
        <p className="text-xs text-muted-foreground">
          Supported formats: JPG, PNG, GIF, MP4, MOV • Max size: 50MB per file
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter a descriptive title"
            required
          />
        </div>

        <div>
          <Label htmlFor="caption">Caption</Label>
          <Textarea
            id="caption"
            value={formData.caption}
            onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
            placeholder="Describe the content and context of this media"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="tags">Tags</Label>
          <Input
            id="tags"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            placeholder="workshop, origami, tutorial (comma separated)"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">Upload Media</Button>
      </div>
    </form>
  )
}

interface MediaEditFormProps {
  item: GalleryItem
  onClose: () => void
}

function MediaEditForm({ item, onClose }: MediaEditFormProps) {
  const [formData, setFormData] = useState({
    title: item.title,
    caption: item.caption,
    tags: item.tags.join(", "),
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Edit data:", formData)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="edit-title">Title</Label>
          <Input
            id="edit-title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="edit-caption">Caption</Label>
          <Textarea
            id="edit-caption"
            value={formData.caption}
            onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="edit-tags">Tags</Label>
          <Input
            id="edit-tags"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          />
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  )
}

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
import { Plus, Search, MoreHorizontal, Edit, Trash2, Eye, Users } from "lucide-react"

// Mock data for workshops
const workshops = [
  {
    id: 1,
    title: "Paper Folding Basics",
    date: "2024-12-15",
    time: "10:00 AM",
    status: "published",
    bookings: 8,
    maxSeats: 15,
    fee: 45,
    category: "Beginner",
    description: "Learn the fundamentals of paper folding and create beautiful origami pieces.",
  },
  {
    id: 2,
    title: "Advanced Origami Techniques",
    date: "2024-12-20",
    time: "2:00 PM",
    status: "published",
    bookings: 12,
    maxSeats: 12,
    fee: 75,
    category: "Advanced",
    description: "Master complex folding techniques and create intricate origami sculptures.",
  },
  {
    id: 3,
    title: "Holiday Card Making",
    date: "2024-12-22",
    time: "11:00 AM",
    status: "published",
    bookings: 15,
    maxSeats: 15,
    fee: 35,
    category: "Seasonal",
    description: "Create beautiful handmade holiday cards using various paper crafting techniques.",
  },
  {
    id: 4,
    title: "3D Paper Sculptures",
    date: "2024-12-28",
    time: "1:00 PM",
    status: "draft",
    bookings: 0,
    maxSeats: 10,
    fee: 85,
    category: "Advanced",
    description: "Learn to create stunning three-dimensional paper sculptures and installations.",
  },
]

interface Workshop {
  id: number
  title: string
  date: string
  time: string
  status: "published" | "draft"
  bookings: number
  maxSeats: number
  fee: number
  category: string
  description: string
}

export function WorkshopManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingWorkshop, setEditingWorkshop] = useState<Workshop | null>(null)

  const filteredWorkshops = workshops.filter(
    (workshop) =>
      workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workshop.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusBadge = (status: string) => {
    return status === "published" ? (
      <Badge className="bg-primary/10 text-primary">Published</Badge>
    ) : (
      <Badge variant="secondary">Draft</Badge>
    )
  }

  const getBookingStatus = (bookings: number, maxSeats: number) => {
    if (bookings >= maxSeats) {
      return <Badge className="bg-destructive/10 text-destructive">Full</Badge>
    } else if (bookings > maxSeats * 0.7) {
      return <Badge className="bg-accent/10 text-accent">Almost Full</Badge>
    }
    return (
      <Badge variant="outline">
        {bookings}/{maxSeats}
      </Badge>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Workshop Management</h1>
          <p className="text-muted-foreground mt-2">Manage your workshops, bookings, and schedules.</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add New Workshop
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Workshop</DialogTitle>
            </DialogHeader>
            <WorkshopForm onClose={() => setIsAddDialogOpen(false)} />
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
                placeholder="Search workshops..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Workshops</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Workshops table */}
      <Card>
        <CardHeader>
          <CardTitle>Workshops ({filteredWorkshops.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Workshop Title</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Bookings</TableHead>
                <TableHead>Fee</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredWorkshops.map((workshop) => (
                <TableRow key={workshop.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{workshop.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1">{workshop.description}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{new Date(workshop.date).toLocaleDateString()}</p>
                      <p className="text-sm text-muted-foreground">{workshop.time}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{workshop.category}</Badge>
                  </TableCell>
                  <TableCell>{getStatusBadge(workshop.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      {getBookingStatus(workshop.bookings, workshop.maxSeats)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">${workshop.fee}</span>
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
                        <DropdownMenuItem onClick={() => setEditingWorkshop(workshop)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Workshop
                        </DropdownMenuItem>
                        <DropdownMenuItem>{workshop.status === "published" ? "Unpublish" : "Publish"}</DropdownMenuItem>
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

      {/* Edit workshop dialog */}
      <Dialog open={!!editingWorkshop} onOpenChange={() => setEditingWorkshop(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Workshop</DialogTitle>
          </DialogHeader>
          {editingWorkshop && <WorkshopForm workshop={editingWorkshop} onClose={() => setEditingWorkshop(null)} />}
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface WorkshopFormProps {
  workshop?: Workshop
  onClose: () => void
}

function WorkshopForm({ workshop, onClose }: WorkshopFormProps) {
  const [formData, setFormData] = useState({
    title: workshop?.title || "",
    description: workshop?.description || "",
    date: workshop?.date || "",
    time: workshop?.time || "",
    fee: workshop?.fee || 0,
    maxSeats: workshop?.maxSeats || 10,
    category: workshop?.category || "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Workshop data:", formData)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <Label htmlFor="title">Workshop Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter workshop title"
            required
          />
        </div>

        <div className="col-span-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe the workshop content and what participants will learn"
            rows={3}
            required
          />
        </div>

        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="time">Time</Label>
          <Input
            id="time"
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="fee">Workshop Fee ($)</Label>
          <Input
            id="fee"
            type="number"
            value={formData.fee}
            onChange={(e) => setFormData({ ...formData, fee: Number(e.target.value) })}
            min="0"
            step="5"
            required
          />
        </div>

        <div>
          <Label htmlFor="maxSeats">Maximum Seats</Label>
          <Input
            id="maxSeats"
            type="number"
            value={formData.maxSeats}
            onChange={(e) => setFormData({ ...formData, maxSeats: Number(e.target.value) })}
            min="1"
            max="50"
            required
          />
        </div>

        <div className="col-span-2">
          <Label htmlFor="category">Category</Label>
          <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
              <SelectItem value="Seasonal">Seasonal</SelectItem>
              <SelectItem value="Kids">Kids</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">{workshop ? "Update Workshop" : "Create Workshop"}</Button>
      </div>
    </form>
  )
}

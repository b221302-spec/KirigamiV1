"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Search,
  MoreHorizontal,
  Eye,
  MessageSquare,
  CheckCircle,
  Clock,
  Download,
  Mail,
  Phone,
  Calendar,
  DollarSign,
} from "lucide-react"

// Mock data for inquiries
const inquiries = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    projectType: "Wedding Installation",
    size: "Large (50+ guests)",
    budget: "$2,000 - $5,000",
    status: "new",
    priority: "high",
    date: "2024-12-10",
    message:
      "Hi! I'm planning my wedding for March 2025 and would love to discuss a custom paper art installation for the ceremony backdrop. The venue has a 20ft wall that would be perfect for a large-scale piece. I'm envisioning something with cherry blossoms and cranes. Could we schedule a consultation?",
    notes: "",
    lastContact: null,
  },
  {
    id: 2,
    name: "Tech Corp Events",
    email: "events@techcorp.com",
    phone: "+1 (555) 987-6543",
    projectType: "Corporate Event Decor",
    size: "Medium (20-50 guests)",
    budget: "$1,000 - $2,000",
    status: "in-progress",
    priority: "medium",
    date: "2024-12-08",
    message:
      "We're hosting our annual company retreat and would like custom paper decorations that reflect our tech brand. Looking for modern, geometric designs in our brand colors (blue and silver). Event is January 15th, 2025.",
    notes: "Sent initial proposal. Waiting for feedback on design concepts.",
    lastContact: "2024-12-09",
  },
  {
    id: 3,
    name: "Metropolitan Art Museum",
    email: "curator@metmuseum.org",
    phone: "+1 (555) 456-7890",
    projectType: "Gallery Exhibition",
    size: "Large (Gallery Space)",
    budget: "$5,000+",
    status: "closed",
    priority: "high",
    date: "2024-11-28",
    message:
      "We're curating an exhibition on contemporary paper arts and would like to commission 3-5 large-scale pieces for our main gallery. The exhibition runs from April to August 2025. Please send your portfolio and availability.",
    notes: "Project completed successfully. 4 pieces delivered on time. Client very satisfied.",
    lastContact: "2024-12-01",
  },
  {
    id: 4,
    name: "Emma Chen",
    email: "emma.chen@gmail.com",
    phone: "+1 (555) 234-5678",
    projectType: "Home Decor",
    size: "Small (Personal)",
    budget: "$200 - $500",
    status: "new",
    priority: "low",
    date: "2024-12-09",
    message:
      "I recently moved into a new apartment and would love some custom paper art for my living room. I'm drawn to minimalist designs with nature themes. Could you create something around 24x36 inches?",
    notes: "",
    lastContact: null,
  },
  {
    id: 5,
    name: "David Rodriguez",
    email: "david.r.design@email.com",
    phone: "+1 (555) 345-6789",
    projectType: "Collaboration Inquiry",
    size: "Variable",
    budget: "To be discussed",
    status: "in-progress",
    priority: "medium",
    date: "2024-12-07",
    message:
      "I'm an interior designer working on a high-end restaurant project. The client wants unique art installations throughout the space. Would you be interested in collaborating? I can share more details if you're available.",
    notes: "Scheduled call for December 12th to discuss project scope and timeline.",
    lastContact: "2024-12-08",
  },
]

interface Inquiry {
  id: number
  name: string
  email: string
  phone: string
  projectType: string
  size: string
  budget: string
  status: "new" | "in-progress" | "closed"
  priority: "low" | "medium" | "high"
  date: string
  message: string
  notes: string
  lastContact: string | null
}

export function InquiriesManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null)
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesSearch =
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.projectType.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || inquiry.status === statusFilter
    const matchesPriority = priorityFilter === "all" || inquiry.priority === priorityFilter
    return matchesSearch && matchesStatus && matchesPriority
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge className="bg-destructive/10 text-destructive">New</Badge>
      case "in-progress":
        return <Badge className="bg-accent/10 text-accent">In Progress</Badge>
      case "closed":
        return <Badge className="bg-muted text-muted-foreground">Closed</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-destructive/10 text-destructive">High</Badge>
      case "medium":
        return <Badge className="bg-accent/10 text-accent">Medium</Badge>
      case "low":
        return <Badge variant="outline">Low</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  const updateInquiryStatus = (inquiryId: number, newStatus: string) => {
    // Handle status update here
    console.log(`Updating inquiry ${inquiryId} to status: ${newStatus}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inquiries Management</h1>
          <p className="text-muted-foreground mt-2">Manage custom installation requests and contact inquiries.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">New Inquiries</p>
                <p className="text-2xl font-bold text-destructive">
                  {inquiries.filter((i) => i.status === "new").length}
                </p>
              </div>
              <MessageSquare className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                <p className="text-2xl font-bold text-accent">
                  {inquiries.filter((i) => i.status === "in-progress").length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-primary">
                  {inquiries.filter((i) => i.status === "closed").length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">High Priority</p>
                <p className="text-2xl font-bold text-foreground">
                  {inquiries.filter((i) => i.priority === "high").length}
                </p>
              </div>
              <MessageSquare className="h-8 w-8 text-foreground" />
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
                placeholder="Search inquiries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High Priority</SelectItem>
                <SelectItem value="medium">Medium Priority</SelectItem>
                <SelectItem value="low">Low Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Inquiries table */}
      <Card>
        <CardHeader>
          <CardTitle>Inquiries ({filteredInquiries.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact</TableHead>
                <TableHead>Project Type</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInquiries.map((inquiry) => (
                <TableRow key={inquiry.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{inquiry.name}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center gap-1">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{inquiry.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{inquiry.phone}</span>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{inquiry.projectType}</p>
                      <p className="text-sm text-muted-foreground">{inquiry.size}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{inquiry.budget}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getPriorityBadge(inquiry.priority)}</TableCell>
                  <TableCell>{getStatusBadge(inquiry.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{new Date(inquiry.date).toLocaleDateString()}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setSelectedInquiry(inquiry)}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => updateInquiryStatus(inquiry.id, "in-progress")}>
                          <Clock className="h-4 w-4 mr-2" />
                          Mark In Progress
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => updateInquiryStatus(inquiry.id, "closed")}>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Mark Resolved
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

      {/* Inquiry details dialog */}
      <Dialog open={!!selectedInquiry} onOpenChange={() => setSelectedInquiry(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Inquiry Details</DialogTitle>
          </DialogHeader>
          {selectedInquiry && <InquiryDetails inquiry={selectedInquiry} onClose={() => setSelectedInquiry(null)} />}
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface InquiryDetailsProps {
  inquiry: Inquiry
  onClose: () => void
}

function InquiryDetails({ inquiry, onClose }: InquiryDetailsProps) {
  const [notes, setNotes] = useState(inquiry.notes)

  const handleSaveNotes = () => {
    // Handle saving notes here
    console.log("Saving notes:", notes)
    onClose()
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium text-muted-foreground">Contact Information</Label>
          <div className="mt-2 space-y-2">
            <p className="font-medium">{inquiry.name}</p>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{inquiry.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{inquiry.phone}</span>
            </div>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-muted-foreground">Project Details</Label>
          <div className="mt-2 space-y-2">
            <p>
              <span className="font-medium">Type:</span> {inquiry.projectType}
            </p>
            <p>
              <span className="font-medium">Size:</span> {inquiry.size}
            </p>
            <p>
              <span className="font-medium">Budget:</span> {inquiry.budget}
            </p>
            <div className="flex items-center gap-2">
              <span className="font-medium">Priority:</span>
              <Badge
                variant={
                  inquiry.priority === "high" ? "destructive" : inquiry.priority === "medium" ? "default" : "outline"
                }
              >
                {inquiry.priority}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Label className="text-sm font-medium text-muted-foreground">Original Message</Label>
        <div className="mt-2 p-4 bg-muted rounded-lg">
          <p className="text-sm">{inquiry.message}</p>
        </div>
      </div>

      <div>
        <Label htmlFor="notes">Internal Notes</Label>
        <Textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add internal notes about this inquiry..."
          rows={4}
          className="mt-2"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          <p>Received: {new Date(inquiry.date).toLocaleDateString()}</p>
          {inquiry.lastContact && <p>Last Contact: {new Date(inquiry.lastContact).toLocaleDateString()}</p>}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button onClick={handleSaveNotes}>Save Notes</Button>
        </div>
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Package, FileText, MessageSquare, Users, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Total Workshops",
    value: "12",
    subtitle: "3 upcoming",
    icon: Calendar,
    color: "text-chart-1",
  },
  {
    title: "Products Published",
    value: "48",
    subtitle: "5 new this week",
    icon: Package,
    color: "text-chart-2",
  },
  {
    title: "Blog Posts",
    value: "24",
    subtitle: "2 drafts",
    icon: FileText,
    color: "text-chart-3",
  },
  {
    title: "New Inquiries",
    value: "8",
    subtitle: "3 pending",
    icon: MessageSquare,
    color: "text-chart-4",
  },
  {
    title: "Site Visitors",
    value: "1,234",
    subtitle: "This week",
    icon: Users,
    color: "text-chart-5",
  },
  {
    title: "Bookings",
    value: "32",
    subtitle: "+12% from last week",
    icon: TrendingUp,
    color: "text-primary",
  },
]

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back! Here's what's happening with Kirigami Arts today.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">{stat.title}</CardTitle>
              <stat.icon className={cn("h-5 w-5", stat.color)} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Workshops</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Paper Folding Basics</p>
                  <p className="text-sm text-muted-foreground">Dec 15, 2024 • 8 bookings</p>
                </div>
                <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">Published</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Advanced Origami Techniques</p>
                  <p className="text-sm text-muted-foreground">Dec 20, 2024 • 12 bookings</p>
                </div>
                <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">Published</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Holiday Card Making</p>
                  <p className="text-sm text-muted-foreground">Dec 22, 2024 • 15 bookings</p>
                </div>
                <span className="text-sm bg-secondary/10 text-secondary px-2 py-1 rounded">Full</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Latest Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Custom Wedding Installation</p>
                  <p className="text-sm text-muted-foreground">Sarah Johnson • 2 hours ago</p>
                </div>
                <span className="text-sm bg-destructive/10 text-destructive px-2 py-1 rounded">New</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Corporate Event Decor</p>
                  <p className="text-sm text-muted-foreground">Tech Corp • 1 day ago</p>
                </div>
                <span className="text-sm bg-accent/10 text-accent px-2 py-1 rounded">In Progress</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Gallery Exhibition Pieces</p>
                  <p className="text-sm text-muted-foreground">Art Museum • 3 days ago</p>
                </div>
                <span className="text-sm bg-muted text-muted-foreground px-2 py-1 rounded">Closed</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

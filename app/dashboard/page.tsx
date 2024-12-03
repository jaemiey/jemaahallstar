import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users, DollarSign, Clock, Plus } from 'lucide-react'
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* Welcome Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, User!</h1>
          <p className="text-muted-foreground">Here's what's happening with your Jemaah</p>
        </div>
        <Link href="/create-jemaah">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create New Jemaah
          </Button>
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Jemaah</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">RM 1,250</div>
            <p className="text-xs text-muted-foreground">
              +RM 450 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +3 new members
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Jemaah</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Waiting for more members
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Jemaah Activity</CardTitle>
          <CardDescription>Your latest group buy activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
                <div className="ml-auto font-medium">{activity.status}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Jemaah */}
      <Card>
        <CardHeader>
          <CardTitle>Active Jemaah Progress</CardTitle>
          <CardDescription>Track your ongoing group buys</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {activeJemaah.map((jemaah, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{jemaah.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {jemaah.participants} participants
                    </p>
                  </div>
                  <div className="font-medium">{jemaah.progress}%</div>
                </div>
                <Progress value={jemaah.progress} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const recentActivity = [
  {
    title: "Adobe Creative Suite",
    description: "New member joined",
    status: "Just now",
  },
  {
    title: "Microsoft Office 365",
    description: "Payment received",
    status: "2h ago",
  },
  {
    title: "Sketch App",
    description: "Group buy completed",
    status: "5h ago",
  },
]

const activeJemaah = [
  {
    name: "Adobe Creative Suite",
    participants: 8,
    progress: 80,
  },
  {
    name: "Microsoft Office 365",
    participants: 15,
    progress: 75,
  },
  {
    name: "Sketch App",
    participants: 5,
    progress: 62,
  },
]


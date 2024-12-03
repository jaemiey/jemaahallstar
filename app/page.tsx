import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, Users, DollarSign, Clock } from 'lucide-react'
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">JemaahBuy Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Jemaah</CardTitle>
            <CardDescription>Group buys you're participating in</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <Link href="/active-jemaah">
              <Button className="mt-4">View Active Jemaah</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your Jemaah</CardTitle>
            <CardDescription>Group buys you're managing as Imam</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
            <Link href="/your-jemaah">
              <Button className="mt-4">Manage Your Jemaah</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Create New Jemaah</CardTitle>
            <CardDescription>Start a new group buy project</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/create-jemaah">
              <Button className="mt-4">
                <PlusCircle className="mr-2 h-4 w-4" /> Create Jemaah
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      <h2 className="text-2xl font-semibold mt-12 mb-6">Recent Activity</h2>
      <div className="space-y-4">
        {recentActivity.map((activity, index) => (
          <Card key={index}>
            <CardContent className="flex items-center p-4">
              {activity.icon}
              <div className="ml-4">
                <h3 className="font-semibold">{activity.title}</h3>
                <p className="text-sm text-gray-500">{activity.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const recentActivity = [
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "New Makmum joined your Jemaah",
    description: "Adobe Creative Suite group buy - 2 minutes ago",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-green-500" />,
    title: "Payment received",
    description: "Microsoft Office 365 group buy - 1 hour ago",
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-500" />,
    title: "Jemaah closing soon",
    description: "Sketch App group buy - Closes in 2 days",
  },
]


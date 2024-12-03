"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Clock, CheckCircle } from 'lucide-react'
import Link from "next/link"

interface Jemaah {
  id: number
  name: string
  imam: string
  participants: number
  requiredParticipants: number
  myContribution: number
  totalPrice: number
  timeLeft?: string
  status: 'active' | 'pending' | 'completed'
}

const myMakmumData: Jemaah[] = [
  {
    id: 1,
    name: "Photoshop CC",
    imam: "John Doe",
    participants: 7,
    requiredParticipants: 10,
    myContribution: 120,
    totalPrice: 1200,
    timeLeft: "3 days",
    status: 'active',
  },
  {
    id: 2,
    name: "Notion Team",
    imam: "Jane Smith",
    participants: 18,
    requiredParticipants: 20,
    myContribution: 50,
    totalPrice: 1000,
    timeLeft: "1 day",
    status: 'active',
  },
  {
    id: 3,
    name: "Affinity Designer",
    imam: "Mike Johnson",
    participants: 4,
    requiredParticipants: 8,
    myContribution: 80,
    totalPrice: 640,
    timeLeft: "5 days",
    status: 'pending',
  },
  {
    id: 4,
    name: "Final Cut Pro",
    imam: "Sarah Lee",
    participants: 15,
    requiredParticipants: 15,
    myContribution: 200,
    totalPrice: 3000,
    status: 'completed',
  },
]

export default function MyMakmum() {
  const [activeTab, setActiveTab] = useState("active")

  const filteredJemaah = myMakmumData.filter(jemaah => jemaah.status === activeTab)

  const stats = {
    active: myMakmumData.filter(j => j.status === 'active').length,
    pending: myMakmumData.filter(j => j.status === 'pending').length,
    completed: myMakmumData.filter(j => j.status === 'completed').length,
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Makmum</h1>
      
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Jemaah</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.active}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Jemaah</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Jemaah</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completed}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value={activeTab}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredJemaah.map((jemaah) => (
              <Card key={jemaah.id}>
                <CardHeader>
                  <CardTitle>{jemaah.name}</CardTitle>
                  <CardDescription>
                    <Badge variant={jemaah.status === 'active' ? 'default' : jemaah.status === 'pending' ? 'secondary' : 'outline'}>
                      {jemaah.status.charAt(0).toUpperCase() + jemaah.status.slice(1)}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Imam:</span>
                      <span>{jemaah.imam}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Participants:</span>
                      <span>{jemaah.participants}/{jemaah.requiredParticipants}</span>
                    </div>
                    <Progress value={(jemaah.participants / jemaah.requiredParticipants) * 100} />
                    <div className="flex justify-between">
                      <span>Your Contribution:</span>
                      <span>RM {jemaah.myContribution.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Price:</span>
                      <span>RM {jemaah.totalPrice.toFixed(2)}</span>
                    </div>
                    {jemaah.timeLeft && (
                      <div className="flex justify-between">
                        <span>Time Left:</span>
                        <span>{jemaah.timeLeft}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardContent>
                  <Link href={`/jemaah/${jemaah.id}`}>
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Users, DollarSign, Clock, AlertTriangle } from 'lucide-react'
import Link from "next/link"
import { JemaahDetailsDialog } from "@/components/jemaah-details-dialog"

export default function YourJemaah() {
  const [activeJemaah, setActiveJemaah] = useState<Jemaah | null>(null)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Your Jemaah</h1>
      <Tabs defaultValue="active" className="w-full">
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeJemaahData.map((jemaah) => (
              <JemaahCard key={jemaah.id} jemaah={jemaah} setActiveJemaah={setActiveJemaah} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedJemaahData.map((jemaah) => (
              <JemaahCard key={jemaah.id} jemaah={jemaah} setActiveJemaah={setActiveJemaah} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <JemaahDetailsDialog jemaah={activeJemaah} setJemaah={setActiveJemaah} />
    </div>
  )
}

interface Jemaah {
  id: number
  name: string
  currentParticipants: number
  requiredParticipants: number
  totalPrice: number
  timeLeft: string
  status: 'active' | 'completed'
}

interface JemaahCardProps {
  jemaah: Jemaah
  setActiveJemaah: (jemaah: Jemaah) => void
}

function JemaahCard({ jemaah, setActiveJemaah }: JemaahCardProps) {
  const progress = (jemaah.currentParticipants / jemaah.requiredParticipants) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {jemaah.name}
          <Badge variant={jemaah.status === 'active' ? 'default' : 'secondary'}>
            {jemaah.status === 'active' ? 'Active' : 'Completed'}
          </Badge>
        </CardTitle>
        <CardDescription>Jemaah ID: {jemaah.id}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              Participants
            </span>
            <span>{jemaah.currentParticipants}/{jemaah.requiredParticipants}</span>
          </div>
          <Progress value={progress} className="w-full" />
          <div className="flex justify-between items-center">
            <span className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4" />
              Total Price
            </span>
            <span>${jemaah.totalPrice}</span>
          </div>
          {jemaah.status === 'active' && (
            <div className="flex justify-between items-center">
              <span className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                Time Left
              </span>
              <span>{jemaah.timeLeft}</span>
            </div>
          )}
          {jemaah.status === 'active' && progress < 50 && (
            <div className="flex items-center text-yellow-500">
              <AlertTriangle className="mr-2 h-4 w-4" />
              <span>Low participation</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => setActiveJemaah(jemaah)} className="w-full">
          Manage Jemaah
        </Button>
      </CardFooter>
    </Card>
  )
}

const activeJemaahData: Jemaah[] = [
  {
    id: 1,
    name: "Adobe Creative Suite",
    currentParticipants: 8,
    requiredParticipants: 10,
    totalPrice: 1200,
    timeLeft: "2 days",
    status: 'active',
  },
  {
    id: 2,
    name: "Microsoft Office 365",
    currentParticipants: 15,
    requiredParticipants: 20,
    totalPrice: 1000,
    timeLeft: "5 days",
    status: 'active',
  },
  {
    id: 3,
    name: "Sketch App",
    currentParticipants: 5,
    requiredParticipants: 8,
    totalPrice: 640,
    timeLeft: "1 day",
    status: 'active',
  },
]

const completedJemaahData: Jemaah[] = [
  {
    id: 4,
    name: "Figma Pro",
    currentParticipants: 12,
    requiredParticipants: 10,
    totalPrice: 960,
    timeLeft: "",
    status: 'completed',
  },
  {
    id: 5,
    name: "AutoCAD 2023",
    currentParticipants: 15,
    requiredParticipants: 15,
    totalPrice: 2250,
    timeLeft: "",
    status: 'completed',
  },
]


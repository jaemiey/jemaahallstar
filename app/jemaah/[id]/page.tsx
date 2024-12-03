"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Users, DollarSign, Clock } from 'lucide-react'

interface Jemaah {
  id: number
  name: string
  imam: string
  participants: number
  requiredParticipants: number
  totalPrice: number
  timeLeft?: string
  status: 'active' | 'pending' | 'completed'
  description: string
}

export default function JemaahDetails({ params }: { params: { id: string } }) {
  const [jemaah, setJemaah] = useState<Jemaah | null>(null)
  const router = useRouter()

  useEffect(() => {
    // In a real app, you would fetch the Jemaah details from an API
    // For this example, we'll use dummy data
    const dummyJemaah: Jemaah = {
      id: parseInt(params.id),
      name: "Adobe Creative Suite",
      imam: "John Doe",
      participants: 8,
      requiredParticipants: 10,
      totalPrice: 1200,
      timeLeft: "2 days",
      status: 'active',
      description: "Join our group buy for Adobe Creative Suite! Get access to industry-leading creative tools at a fraction of the cost."
    }
    setJemaah(dummyJemaah)
  }, [params.id])

  if (!jemaah) {
    return <div>Loading...</div>
  }

  const handleJoinJemaah = () => {
    router.push(`/payment/${jemaah.id}`)
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{jemaah.name}</CardTitle>
          <CardDescription>
            <Badge variant={jemaah.status === 'active' ? 'default' : jemaah.status === 'pending' ? 'secondary' : 'outline'}>
              {jemaah.status.charAt(0).toUpperCase() + jemaah.status.slice(1)}
            </Badge>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>{jemaah.description}</p>
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              Participants
            </span>
            <span>{jemaah.participants}/{jemaah.requiredParticipants}</span>
          </div>
          <Progress value={(jemaah.participants / jemaah.requiredParticipants) * 100} className="w-full" />
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4" />
              Total Price
            </span>
            <span>RM {jemaah.totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              Time Left
            </span>
            <span>{jemaah.timeLeft}</span>
          </div>
          <div>
            <strong>Imam:</strong> {jemaah.imam}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleJoinJemaah} className="w-full">Join Jemaah</Button>
        </CardFooter>
      </Card>
    </div>
  )
}


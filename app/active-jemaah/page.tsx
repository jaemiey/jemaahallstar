import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function ActiveJemaah() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Active Jemaah</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeJemaahData.map((jemaah, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{jemaah.name}</CardTitle>
              <CardDescription>Imam: {jemaah.imam}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Progress:</span>
                  <span>{jemaah.currentParticipants}/{jemaah.requiredParticipants} Makmum</span>
                </div>
                <Progress value={(jemaah.currentParticipants / jemaah.requiredParticipants) * 100} />
                <div className="flex justify-between">
                  <span>Your Cost:</span>
                  <span>${jemaah.costPerPerson}</span>
                </div>
                <div className="flex justify-between">
                  <span>Ends in:</span>
                  <span>{jemaah.timeLeft}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/jemaah/${jemaah.id}`} className="w-full">
                <Button className="w-full">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

const activeJemaahData = [
  {
    id: 1,
    name: "Adobe Creative Suite",
    imam: "John Doe",
    currentParticipants: 8,
    requiredParticipants: 10,
    costPerPerson: 120,
    timeLeft: "2 days",
  },
  {
    id: 2,
    name: "Microsoft Office 365",
    imam: "Jane Smith",
    currentParticipants: 15,
    requiredParticipants: 20,
    costPerPerson: 50,
    timeLeft: "5 days",
  },
  {
    id: 3,
    name: "Sketch App",
    imam: "Mike Johnson",
    currentParticipants: 5,
    requiredParticipants: 8,
    costPerPerson: 80,
    timeLeft: "1 day",
  },
]


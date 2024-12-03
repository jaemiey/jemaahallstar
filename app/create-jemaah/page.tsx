"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/ui/date-picker"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CreateJemaah() {
  const [endDate, setEndDate] = useState<Date>()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create New Jemaah</CardTitle>
          <CardDescription>Start a new group buy project as an Imam</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="software-name">Software Name</Label>
              <Input id="software-name" placeholder="Enter the name of the software" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Describe the software and group buy details" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Total Price ($)</Label>
              <Input id="price" type="number" placeholder="Enter the total price" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="min-participants">Minimum Participants</Label>
              <Input id="min-participants" type="number" placeholder="Enter the minimum number of participants" required />
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <DatePicker date={endDate} setDate={setEndDate} />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Create Jemaah</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}


"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Jemaah {
  id: number
  name: string
  totalPrice: number
  requiredParticipants: number
}

export default function PaymentForm({ params }: { params: { id: string } }) {
  const [jemaah, setJemaah] = useState<Jemaah | null>(null)
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvc, setCvc] = useState('')
  const router = useRouter()

  useEffect(() => {
    // In a real app, you would fetch the Jemaah details from an API
    // For this example, we'll use dummy data
    const dummyJemaah: Jemaah = {
      id: parseInt(params.id),
      name: "Adobe Creative Suite",
      totalPrice: 1200,
      requiredParticipants: 10
    }
    setJemaah(dummyJemaah)
  }, [params.id])

  if (!jemaah) {
    return <div>Loading...</div>
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would process the payment here
    console.log('Processing payment...')
    // Redirect to a success page or back to the dashboard
    router.push('/dashboard')
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Join Jemaah: {jemaah.name}</CardTitle>
          <CardDescription>Enter your payment details to join this Jemaah</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount to Pay</Label>
              <Input 
                id="amount" 
                value={`RM ${(jemaah.totalPrice / jemaah.requiredParticipants).toFixed(2)}`} 
                disabled 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input 
                id="card-number" 
                placeholder="1234 5678 9012 3456" 
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input 
                  id="expiry" 
                  placeholder="MM/YY" 
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input 
                  id="cvc" 
                  placeholder="123" 
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  required 
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Pay and Join Jemaah</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}


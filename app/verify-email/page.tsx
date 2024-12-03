"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

export default function VerifyEmail() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const [isVerifying, setIsVerifying] = useState(true)
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        toast({
          title: "Error",
          description: "Invalid verification link",
          variant: "destructive",
        })
        setIsVerifying(false)
        return
      }

      try {
        // Here you would typically send a request to your backend to verify the email
        // For this example, we'll simulate a successful verification
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsVerified(true)
        toast({
          title: "Email Verified",
          description: "Your email has been successfully verified.",
        })
      } catch (error) {
        toast({
          title: "Error",
          description: "An error occurred during email verification. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsVerifying(false)
      }
    }

    verifyEmail()
  }, [token])

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Email Verification</CardTitle>
          <CardDescription>Verifying your email address</CardDescription>
        </CardHeader>
        <CardContent>
          {isVerifying ? (
            <p>Verifying your email...</p>
          ) : isVerified ? (
            <p>Your email has been successfully verified. You can now log in to your account.</p>
          ) : (
            <p>There was an error verifying your email. Please try again or contact support.</p>
          )}
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <a href="/login">Go to Login</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}


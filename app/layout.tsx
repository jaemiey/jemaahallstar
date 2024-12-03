import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UserButton } from "@/components/ui/user-button"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">JemaahBuy</Link>
            <div className="space-x-4">
              <Link href="/active-jemaah">
                <Button variant="ghost">Active Jemaah</Button>
              </Link>
              <Link href="/your-jemaah">
                <Button variant="ghost">Your Jemaah</Button>
              </Link>
              <Link href="/create-jemaah">
                <Button>Create Jemaah</Button>
              </Link>
              <UserButton />
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}


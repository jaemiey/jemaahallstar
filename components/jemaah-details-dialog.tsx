"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Users, DollarSign, Clock } from 'lucide-react'

interface Jemaah {
  id: number
  name: string
  currentParticipants: number
  requiredParticipants: number
  totalPrice: number
  timeLeft: string
  status: 'active' | 'completed'
}

interface JemaahDetailsDialogProps {
  jemaah: Jemaah | null
  setJemaah: (jemaah: Jemaah | null) => void
}

export function JemaahDetailsDialog({ jemaah, setJemaah }: JemaahDetailsDialogProps) {
  const [editMode, setEditMode] = useState(false)
  const [editedJemaah, setEditedJemaah] = useState<Jemaah | null>(null)

  const handleClose = () => {
    setJemaah(null)
    setEditMode(false)
  }

  const handleEdit = () => {
    setEditedJemaah(jemaah)
    setEditMode(true)
  }

  const handleSave = () => {
    // Here you would typically send a request to update the Jemaah in your backend
    console.log("Saving edited Jemaah:", editedJemaah)
    setJemaah(editedJemaah)
    setEditMode(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editedJemaah) {
      setEditedJemaah({
        ...editedJemaah,
        [e.target.name]: e.target.value
      })
    }
  }

  if (!jemaah) return null

  return (
    <Dialog open={!!jemaah} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{editMode ? "Edit Jemaah" : "Jemaah Details"}</DialogTitle>
          <DialogDescription>
            {editMode ? "Make changes to your Jemaah here. Click save when you're done." : `Details for Jemaah ID: ${jemaah.id}`}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            {editMode ? (
              <Input
                id="name"
                name="name"
                value={editedJemaah?.name}
                onChange={handleInputChange}
                className="col-span-3"
              />
            ) : (
              <span className="col-span-3">{jemaah.name}</span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="participants" className="text-right">
              <Users className="h-4 w-4 inline mr-2" />
              Participants
            </Label>
            {editMode ? (
              <Input
                id="participants"
                name="currentParticipants"
                type="number"
                value={editedJemaah?.currentParticipants}
                onChange={handleInputChange}
                className="col-span-3"
              />
            ) : (
              <span className="col-span-3">{jemaah.currentParticipants}/{jemaah.requiredParticipants}</span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              <DollarSign className="h-4 w-4 inline mr-2" />
              Total Price
            </Label>
            {editMode ? (
              <Input
                id="price"
                name="totalPrice"
                type="number"
                value={editedJemaah?.totalPrice}
                onChange={handleInputChange}
                className="col-span-3"
              />
            ) : (
              <span className="col-span-3">${jemaah.totalPrice}</span>
            )}
          </div>
          {jemaah.status === 'active' && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="timeLeft" className="text-right">
                <Clock className="h-4 w-4 inline mr-2" />
                Time Left
              </Label>
              {editMode ? (
                <Input
                  id="timeLeft"
                  name="timeLeft"
                  value={editedJemaah?.timeLeft}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              ) : (
                <span className="col-span-3">{jemaah.timeLeft}</span>
              )}
            </div>
          )}
        </div>
        <DialogFooter>
          {editMode ? (
            <>
              <Button type="button" variant="secondary" onClick={() => setEditMode(false)}>
                Cancel
              </Button>
              <Button type="button" onClick={handleSave}>
                Save changes
              </Button>
            </>
          ) : (
            <>
              <Button type="button" variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="button" onClick={handleEdit}>
                Edit Jemaah
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


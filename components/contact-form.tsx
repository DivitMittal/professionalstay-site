"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/app/actions"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
      disabled={pending}
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, null)

  return (
    <form action={formAction} className="space-y-6 max-w-md mx-auto">
      <div className="space-y-2">
        <Input
          name="name"
          placeholder="Your Name"
          required
          className="bg-background text-foreground border-primary/20 focus:border-primary focus:ring-primary"
        />
      </div>
      <div className="space-y-2">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="bg-background text-foreground border-primary/20 focus:border-primary focus:ring-primary"
        />
      </div>
      <div className="space-y-2">
        <Input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          required
          className="bg-background text-foreground border-primary/20 focus:border-primary focus:ring-primary"
        />
      </div>
      <div className="space-y-2">
        <Textarea
          name="message"
          placeholder="Tell us about your property management needs"
          required
          className="bg-background text-foreground border-primary/20 focus:border-primary focus:ring-primary"
        />
      </div>
      <SubmitButton />
      {state?.message && (
        <p className={`text-sm font-semibold ${state.success ? "text-secondary" : "text-destructive"}`}>
          {state.message}
        </p>
      )}
    </form>
  )
}


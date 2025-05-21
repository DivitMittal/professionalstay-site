"use server"

import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
})

export async function submitContactForm(formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  }

  try {
    const validated = formSchema.parse(data)

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Create CRM entry
    // For demo, we'll simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Thank you for your message. We'll be in touch soon!" }
  } catch (error) {
    return { success: false, message: "Please check your input and try again." }
  }
}


import type React from "react"
import type { MouseEvent } from "react"

export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) {
  e.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}


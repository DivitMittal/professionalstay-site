"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { smoothScroll } from "@/utils/smoothScroll"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-foreground">Professional</span> <span className="text-primary">Property</span>{" "}
              <span className="text-secondary">Management</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Maximize your property's potential with our comprehensive management services. We handle everything from
              tenant screening to maintenance, so you don't have to.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/properties" passHref>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  View Properties
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold"
                onClick={(e) => smoothScroll(e, "contact")}
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 relative z-0">
            <div className="relative mx-auto md:mr-0 max-w-max">
              <div className="relative rounded-2xl w-full h-[400px] lg:h-[500px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20 z-10"></div>
                <Image
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
                  alt="Elegant Living Room Interior"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


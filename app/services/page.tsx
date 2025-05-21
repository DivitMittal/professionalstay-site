import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Shield, Users, Wrench, Banknote, FileCheck } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Property Management",
    description: "Comprehensive property management including tenant screening, rent collection, and maintenance.",
  },
  {
    icon: Users,
    title: "Tenant Relations",
    description: "Professional tenant communication and support for smooth operations.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "24/7 maintenance support and regular property inspections.",
  },
  {
    icon: Shield,
    title: "Legal Compliance",
    description: "Ensuring all properties meet legal requirements and regulations.",
  },
  {
    icon: Banknote,
    title: "Financial Management",
    description: "Detailed financial reporting, rent collection, and expense tracking.",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "Complete handling of all property-related documentation and contracts.",
  },
]

export default function ServicesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-muted-foreground mb-8 text-lg">
        Comprehensive property management solutions tailored to your needs
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Card key={index}>
              <CardHeader>
                <Icon className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}


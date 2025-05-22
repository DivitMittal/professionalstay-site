import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Rajmahal",
    location: "Civil Lines, Jaipur",
    price: "₹2,50,000/month",
    beds: 4,
    baths: 4.5,
    sqft: 4500,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80",
  },
  {
    id: 2,
    title: "Modern Apartment in Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹1,20,000/month",
    beds: 3,
    baths: 3,
    sqft: 2200,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

export default function PropertiesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">
        Available Properties in Jaipur
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative h-64 w-full">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <p className="text-muted-foreground mb-2">{property.location}</p>
              <p className="text-lg font-bold text-accent mb-4">
                {property.price}
              </p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold">{property.beds}</p>
                  <p className="text-muted-foreground">Beds</p>
                </div>
                <div>
                  <p className="font-semibold">{property.baths}</p>
                  <p className="text-muted-foreground">Baths</p>
                </div>
                <div>
                  <p className="font-semibold">{property.sqft}</p>
                  <p className="text-muted-foreground">Sq Ft</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

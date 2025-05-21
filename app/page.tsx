import { Hero } from "@/components/hero"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Shield, Users, Wrench, Mail, Phone, MapPin } from "lucide-react"

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted dark:bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card hover:bg-accent transition-colors duration-300">
              <CardHeader>
                <Building2 className="w-10 h-10 mb-4 text-primary" />
                <CardTitle className="text-secondary">Property Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive property management including tenant screening, rent collection, and maintenance.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card hover:bg-accent transition-colors duration-300">
              <CardHeader>
                <Users className="w-10 h-10 mb-4 text-secondary" />
                <CardTitle className="text-primary">Tenant Relations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional tenant communication and support for smooth operations.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card hover:bg-accent transition-colors duration-300">
              <CardHeader>
                <Wrench className="w-10 h-10 mb-4 text-primary" />
                <CardTitle className="text-secondary">Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">24/7 maintenance support and regular property inspections.</p>
              </CardContent>
            </Card>
            <Card className="bg-card hover:bg-accent transition-colors duration-300">
              <CardHeader>
                <Shield className="w-10 h-10 mb-4 text-secondary" />
                <CardTitle className="text-primary">Legal Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ensuring all properties meet legal requirements and regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/20 dark:to-secondary/20"
      >
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">About Professional Stay</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6 text-lg text-foreground">
              <span className="text-primary font-semibold">Professional Stay</span> is a leading property management
              company dedicated to maximizing the potential of your real estate investments. With years of experience
              and a commitment to excellence, we provide comprehensive solutions for property owners and tenants alike.
            </p>
            <p className="mb-6 text-lg text-foreground">
              Our team of <span className="text-secondary font-semibold">experts</span> handles every aspect of property
              management, from tenant screening and rent collection to maintenance and legal compliance. We understand
              that each property is unique, and we tailor our services to meet the specific needs of our clients.
            </p>
            <p className="text-lg text-foreground">
              At Professional Stay, we believe in building{" "}
              <span className="text-primary font-semibold">long-lasting relationships</span> with our clients based on
              trust, transparency, and results. Let us take the stress out of property management so you can enjoy the
              benefits of your investment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted dark:bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Let us help you manage your property portfolio with professional expertise.
            </p>
            <ContactForm />
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Mail className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">Email</h3>
              <p className="text-muted-foreground">info@professionalstay.com</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Phone className="w-10 h-10 mb-4 text-secondary" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">Phone</h3>
              <p className="text-muted-foreground">+91 72499 43270</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">Address</h3>
              <p className="text-muted-foreground">
                Golf Course Road, DLF Phase 5,
                <br />
                Sector 54, Gurugram, Haryana 122002
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


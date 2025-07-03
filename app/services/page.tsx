import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Briefcase,
  TrendingUp,
  Calculator,
  HeadphonesIcon,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      icon: Users,
      title: "Permanent Staffing",
      description:
        "Find the right talent for long-term positions across all industries and skill levels.",
      features: [
        "Extensive candidate database",
        "Rigorous screening process",
        "Cultural fit assessment",
        "Post-placement support",
      ],
      image: "/S1.webp",
    },
    {
      icon: Briefcase,
      title: "Contract Hiring",
      description:
        "Flexible staffing solutions for project-based and temporary workforce needs.",
      features: [
        "Quick turnaround time",
        "Flexible contract terms",
        "Skilled temporary professionals",
        "Seamless onboarding process",
      ],
      image: "/S2.webp",
    },
    {
      icon: TrendingUp,
      title: "Executive Search",
      description:
        "Strategic leadership recruitment for C-level and senior management positions.",
      features: [
        "Confidential search process",
        "Global talent network",
        "Leadership assessment",
        "Succession planning support",
      ],
      image: "/S3.webp",
    },
    {
      icon: Calculator,
      title: "Payroll Outsourcing",
      description:
        "Complete payroll management solutions to streamline your HR operations.",
      features: [
        "Automated payroll processing",
        "Tax compliance management",
        "Employee self-service portal",
        "Detailed reporting and analytics",
      ],
      image: "/S4.webp",
    },
    {
      icon: HeadphonesIcon,
      title: "HR Consulting",
      description:
        "Comprehensive HR solutions to optimize your workforce management strategies.",
      features: [
        "HR policy development",
        "Performance management systems",
        "Training and development programs",
        "Compliance and risk management",
      ],
      image: "/S5.webp",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner with background image */}
      <section className="relative text-white h-[60vh]">
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <Image
            src="/services-hero-image.webp"
            alt="Services Hero"
            fill
            className="object-cover object-center brightness-75 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive recruitment and HR solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.title.toLowerCase().replace(/\s+/g, "-")}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Card className="border-0 shadow-lg rounded-xl overflow-hidden h-full">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  </Card>
                </div>
                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 rounded-lg">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let’s discuss how our services can help you build the perfect team
            for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-lg"
              >
                Get Started Today
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 rounded-lg bg-transparent"
              >
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

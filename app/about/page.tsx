import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, TrendingUp } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Quality",
      description:
        "We are committed to providing our customers with the best quality recruitment services.",
    },
    {
      icon: Target,
      title: "Time Gain & Dedication",
      description:
        "Reliable and robust services delivered in the shortest possible time with dedication.",
    },
    {
      icon: Award,
      title: "Client-Centric",
      description: "Tailored solutions to meet our clients’ specific needs.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner with background image */}
      <section className="relative text-white h-[60vh]">
        {/* Background image + darker overlay */}
        <div className="absolute inset-0">
          <Image
            src="/about-us-hero-image.webp"
            alt="About Us Hero"
            fill
            className="object-cover object-center filter brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Joblistin</h1>
          <p className="text-2xl md:text-3xl text-blue-100 max-w-3xl mx-auto">
            We love what we do, and we do what we love!
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Joblistin</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Joblistin is a recruitment consultancy firm providing full-service solutions to
              organizations of all sizes and industries. We have deep experience working with local
              and global organizations in IT, Manufacturing, Banking, Commerce, Education,
              Engineering, Financial Services, Retail, Consumer Products, and Technology.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are an agile company based in Pune, Maharashtra, with extensive partners locally
              and nationally. Our belief is that we win only when you win, which drives us to exceed
              your expectations and be your preferred partner in recruitment solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To connect exceptional talent with outstanding opportunities, creating lasting
                partnerships that drive success for both candidates and clients.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be a globally respected recruitment consultancy that provides the best talent
                solutions, leveraging our expertise and network, delivered by our dedicated team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Detail */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values shape our culture and guide our decisions every day.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg rounded-xl">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

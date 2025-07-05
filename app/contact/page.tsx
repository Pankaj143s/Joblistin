"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

/* ------------------------------------------------------------------ */
/*  🔧  1)  PUT YOUR GOOGLE-FORM IDs & ACTION URL HERE                 */
/* ------------------------------------------------------------------ */
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc3UwLqneV_Ut9kVma2ySqH0eYKJvPLPENE-eyEpWRGNAWE5w/formResponse" // <-- replace

const GOOGLE_FORM_ENTRIES = {
  firstName: "entry.1308910398", // <-- replace
  lastName: "entry.184276340",  // <-- replace
  phone: "entry.1750671874",     // <-- replace
  email: "entry.233167334",     // <-- replace
  message: "entry.115745265",   // <-- replace
}
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office - Pune",
      details: [
        "Joblistin",
        "Shewale Complex, A-4 First Floor,",
        "Near Shahu Colony, Karve Nagar,",
        "Pune – 411052",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 9860608927",
        "+91 9860608950",
        "+91 9860608903",
        "+91 9860608931",
      ],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@joblistin.com", "resume@joblistin.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
      ],
    },
  ]

  const branches = [
    {
      location: "USA",
      address: "7082, Sawmill Village Dr., Columbus, OH 43235",
    },
    {
      location: "Mumbai",
      address:
        "Gover Complex, 003/B Second Floor, N.M. Joshi Marg, Lower Parel East, Mumbai 400013",
    },
    {
      location: "Kolhapur",
      address:
        "Shivswaroop, 749/A Ground Floor, Near SBI Timber Market Branch, Shivaji Peth, Kolhapur - 416012",
    },
  ]

  /* ------------------- form status state ------------------- */
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle")

  /* ------------------- submit handler ---------------------- */
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const data = new FormData()

    data.append(GOOGLE_FORM_ENTRIES.firstName, form.firstName.value)
    data.append(GOOGLE_FORM_ENTRIES.lastName, form.lastName.value)
    data.append(GOOGLE_FORM_ENTRIES.phone, form.phone.value)
    data.append(GOOGLE_FORM_ENTRIES.email, form.email.value)
    data.append(GOOGLE_FORM_ENTRIES.message, form.message.value)

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: data,
      })
      form.reset()
      setStatus("sent")
    } catch {
      alert("There was a problem sending the form. Please try again.")
      setStatus("idle")
    }
  }

  /* --------------------------- JSX -------------------------- */
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner */}
      <section className="relative text-white h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/contact-hero-image.webp"
            alt="Contact Us Hero"
            fill
            className="object-cover object-center brightness-75 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            It would be great to meet! Get in touch with our team of recruitment
            experts.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* ------ Contact Form ------ */}
            <div>
              <Card className="border-0 shadow-lg rounded-xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-gray-900">
                    Submit a Request
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    We’d love to hear from you. Fill out the form below.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {status === "sent" ? (
                    <p className="text-green-600 text-lg">
                      ✅ Thank you! Your message has been sent.
                    </p>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Tell us how we can help you..."
                          rows={5}
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                      >
                        {status === "loading" ? "Sending…" : "Get in Touch"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* ------ Contact Information ------ */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Start a conversation with our representative. We’re here to
                  assist with all your recruitment needs.
                </p>
              </div>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-600">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Branches
            </h2>
            <p className="text-xl text-gray-600">
              We work across several cities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <Card key={index} className="border-0 shadow-md rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {branch.location}
                      </h3>
                      <p className="text-gray-600">{branch.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Our Pune Office
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at our head office location
            </p>
          </div>
          <div className="rounded-xl h-96 overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.753580873354!2d73.82532857509452!3d18.495347171098714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea8e605a7e13%3A0xbecf9c2e579b4e0b!2sShewale%20Complex%2C%20Karve%20Nagar%2C%20Pune%2C%20Maharashtra%20411052%2C%20India!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

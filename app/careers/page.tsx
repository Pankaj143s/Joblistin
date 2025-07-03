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
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Clock,
  DollarSign,
  Star,
} from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Recruitment Consultant",
      company: "Joblistin",
      location: "Pune, India",
      type: "Full-time",
      salary: "Competitive",
      posted: "1 day ago",
      description: "Join our team to connect talent with opportunities for our clients.",
      requirements: ["2+ years experience", "Excellent communication", "Recruitment knowledge"],
      featured: true,
    },
    {
      id: 2,
      title: "HR Specialist",
      company: "Joblistin",
      location: "Pune, India",
      type: "Full-time",
      salary: "Competitive",
      posted: "3 days ago",
      description: "Support our consultancy with HR expertise and client relations.",
      requirements: ["3+ years HR experience", "Policy development", "Compliance knowledge"],
      featured: false,
    },
    {
      id: 3,
      title: "Business Development Manager",
      company: "Joblistin",
      location: "Pune, India",
      type: "Full-time",
      salary: "Competitive",
      posted: "5 days ago",
      description: "Drive business growth by building client partnerships.",
      requirements: ["4+ years sales experience", "Networking skills", "Strategic thinking"],
      featured: false,
    },
    {
      id: 4,
      title: "Payroll Administrator",
      company: "Joblistin",
      location: "Pune, India",
      type: "Full-time",
      salary: "Competitive",
      posted: "1 week ago",
      description: "Manage payroll services for our clients efficiently.",
      requirements: ["2+ years payroll experience", "Attention to detail", "Software proficiency"],
      featured: false,
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
            src="/career-hero-image.webp"
            alt="Careers Hero"
            fill
            className="object-cover object-center brightness-75 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Explore career opportunities at Joblistin. We’re looking for talented individuals to join our consultancy team.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {jobOpenings.length} Job{jobOpenings.length !== 1 ? "s" : ""} Available
            </h2>
            <p className="text-gray-600">Discover opportunities to grow with us</p>
          </div>

          <div className="grid gap-6">
            {jobOpenings.map((job) => (
              <Card
                key={job.id}
                className={`border-0 shadow-lg rounded-xl hover:shadow-xl transition-shadow ${
                  job.featured ? "ring-2 ring-blue-200" : ""
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl text-gray-900">{job.title}</CardTitle>
                        {job.featured && (
                          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <p className="text-blue-600 font-medium text-lg">{job.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {job.posted}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">{job.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.requirements.map((req, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                        {req}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">Apply Now</Button>
                  </div>
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

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
import { MapPin, Clock, Star } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CareersPage() {
  const [openJdId, setOpenJdId] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle")

  // Google Form endpoint & entry IDs
  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfSz5d7xKOopBOxlula3kMIyepNWXtju6InHOyz2U0MWkdX5Q/formResponse"
  const ENTRY_IDS = {
    firstName: "entry.331423382",
    lastName:  "entry.170736401",
    phone:     "entry.764368829",
    email:     "entry.963965146",
    cvLink:    "entry.920090581",
    position:  "entry.2018911209",
  }

  const jobOpenings = [
    {
      id: 1,
      title: "Recruitment Consultant",
      company: "Joblistin",
      location: "Pune, India",
      type: "Full-time",
      salary: "Competitive",
      posted: "1 day ago",
      description:
        "Join our team to connect talent with opportunities for our clients.",
      requirements: [
        "2+ years experience in recruitment",
        "Excellent communication skills",
        "Strong candidate sourcing abilities",
      ],
      featured: true,
      jd: `As a Recruitment Consultant at Joblistin, you will:
- Partner with clients to understand their hiring needs and organizational culture.
- Source candidates via LinkedIn, job boards, and networking.
- Conduct interviews, assessments, and negotiate offers.
- Build and maintain relationships for future hiring needs.

**Key Requirements:**
- 2+ years in recruitment or talent acquisition.
- Proven track record filling roles across industries.
- Excellent interpersonal and organizational skills.

**Why You’ll Love It:**
- Collaborative culture and mentoring.
- Competitive commission and benefits.`,
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
      requirements: [
        "3+ years HR experience",
        "Deep knowledge of labor laws",
        "Policy development skills",
      ],
      featured: false,
      jd: `As an HR Specialist at Joblistin, you will:
- Advise clients on HR best practices and compliance.
- Develop policies, handbooks, and performance frameworks.
- Conduct audits and manage employee relations.
- Facilitate training and onboarding programs.

**Key Requirements:**
- 3+ years in HR roles, preferably consultancy.
- Strong analytical and communication skills.

**Benefits:**
- Professional development support.
- Diverse client exposure.`,
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
      requirements: [
        "4+ years sales or BD experience",
        "Strong negotiation skills",
        "Strategic networking abilities",
      ],
      featured: false,
      jd: `As a Business Development Manager at Joblistin, you will:
- Identify new market opportunities and develop go-to-market plans.
- Build relationships with key decision-makers and negotiate contracts.
- Collaborate with recruitment teams to tailor service offerings.
- Meet and exceed quarterly revenue targets.

**Key Requirements:**
- 4+ years in B2B sales or business development.
- Proven track record of exceeding sales quotas.
- Excellent communication and presentation skills.`,
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
      requirements: [
        "2+ years payroll experience",
        "Proficiency with payroll software",
        "Strong numerical accuracy",
      ],
      featured: false,
      jd: `As a Payroll Administrator at Joblistin, you will:
- Process payroll accurately and on time using payroll systems.
- Calculate wages, deductions, taxes, and benefits.
- Reconcile reports and resolve discrepancies.
- Ensure compliance with tax regulations and labor laws.

**Key Requirements:**
- 2+ years payroll administration experience.
- Familiarity with ADP, QuickBooks, or similar tools.`,
    },
    {
      id: 5,
      title: "Data Analyst",
      company: "Joblistin",
      location: "Pune, India",
      type: "Full-time",
      salary: "Competitive",
      posted: "2 days ago",
      description:
        "Analyze data to provide insights and support decision-making processes.",
      requirements: [
        "3+ years data analysis experience",
        "SQL, Python/R proficiency",
        "Experience with visualization tools",
      ],
      featured: false,
      jd: `As a Data Analyst at Joblistin, you will:
- Collect, clean, and analyze data sets from various sources.
- Perform statistical analysis and build dashboards.
- Partner with teams to drive data-informed decisions.

**Key Requirements:**
- 3+ years in data analysis.
- Strong skills in SQL and Python or R.`,
    },
  ]

  async function handleApplySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: data,
      })
      form.reset()
      setStatus("sent")
    } catch {
      alert("Submission failed. Please try again.")
      setStatus("idle")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner */}
      <section className="relative text-white h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/career-hero-image.webp"
            alt="Careers Hero"
            fill
            className="object-cover object-center brightness-75 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Explore career opportunities at Joblistin. We’re looking for talented
            individuals to join our consultancy team.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {jobOpenings.length} Job
              {jobOpenings.length !== 1 ? "s" : ""} Available
            </h2>
            <p className="text-gray-600">Discover opportunities to grow with us</p>
          </div>
          <div className="grid gap-6">
            {jobOpenings.map((job) => (
              <Card
                key={job.id}
                className={`border-0 shadow-lg rounded-xl hover:shadow-xl transition-shadow cursor-pointer ${
                  job.featured ? "ring-2 ring-blue-200" : ""
                }`}
                onClick={() =>
                  setOpenJdId(openJdId === job.id ? null : job.id)
                }
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        {job.title}
                      </CardTitle>
                      <p className="text-blue-600 font-medium">
                        {job.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {job.posted}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {job.description}
                  </CardDescription>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {job.requirements.map((req, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700"
                      >
                        {req}
                      </Badge>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">₹ {job.salary}</div>
                  </div>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedJob(job.title)
                      setIsModalOpen(true)
                      setStatus("idle")
                    }}
                  >
                    Apply Now
                  </Button>
                  {openJdId === job.id && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">
                        Job Description
                      </h3>
                      <p className="text-gray-700 whitespace-pre-line">
                        {job.jd}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apply for {selectedJob}</DialogTitle>
          </DialogHeader>
          {status === "sent" ? (
            <p className="text-green-600 text-center">
              ✅ Your application has been received!
            </p>
          ) : (
            <form
              onSubmit={handleApplySubmit}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name={ENTRY_IDS.firstName}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name={ENTRY_IDS.lastName}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name={ENTRY_IDS.phone}
                  type="tel"
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit phone number"
                  placeholder="e.g., 9876543210"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name={ENTRY_IDS.email}
                  type="email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="cvLink">CV Link</Label>
                <Input
                  id="cvLink"
                  name={ENTRY_IDS.cvLink}
                  placeholder="Paste your CV link"
                  required
                />
                <p className="mt-1 text-sm text-gray-500">
                  Upload to Drive & paste shareable link.
                </p>
              </div>
              <div>
                <Label htmlFor="position">Position</Label>
                <select
                  id="position"
                  name={ENTRY_IDS.position}
                  value={selectedJob}
                  onChange={(e) => setSelectedJob(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select a role</option>
                  {jobOpenings.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 rounded-lg"
              >
                {status === "loading" ? "Submitting…" : "Submit Application"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}

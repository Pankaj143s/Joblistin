import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Briefcase,
  TrendingUp,
  Award,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HomePage() {
  /* ────────────────────────── Data ────────────────────────── */
  const services = [
    {
      icon: Users,
      title: "Permanent Staffing",
      description:
        "Find the right talent for long-term positions across all industries and skill levels.",
    },
    {
      icon: Briefcase,
      title: "Contract Hiring",
      description: "Flexible staffing for project-based and temporary needs.",
    },
    {
      icon: TrendingUp,
      title: "Executive Search",
      description:
        "Strategic leadership recruitment for C-level and senior roles.",
    },
    {
      icon: Award,
      title: "HR Consulting",
      description:
        "Comprehensive HR solutions to optimise workforce-management strategies.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: "Quality",
      description:
        "We are committed to providing our customers with the best quality recruitment services.",
    },
    {
      icon: Clock,
      title: "Time Gain & Dedication",
      description:
        "Reliable and robust services delivered in the shortest possible time with unwavering dedication.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Tailored solutions crafted to each client’s specific goals.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "HR Director",
      content:
        "Outstanding service! They found us the perfect candidates within weeks. Their understanding of our needs was exceptional.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Global Industries",
      role: "CEO",
      content:
        "Professional, efficient, and results-driven. They've been our trusted recruitment partner for over 3 years.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      company: "Innovation Labs",
      role: "Talent Manager",
      content:
        "Their executive search service helped us find our new CTO. Highly recommend their expertise and dedication.",
      rating: 5,
    },
  ];

  /* ───────────────────────── Page ───────────────────────── */
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Header />

      {/* ── Hero Section (100 vh, no laptop scroll) ────────────────── */}
      <section className="relative flex items-center overflow-hidden min-h-[100vh]">
        {/* Background image */}
        <Image
          src="/hero-9.webp"
          alt="Professional team collaboration"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Decorative SVG (subtle) */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-5/6 pointer-events-none">
          <Image
            src="/decor.svg"
            alt=""
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="w-full lg:w-2/3 xl:w-1/2 lg:pl-10 xl:pl-0">
            <h1 className="text-[2.25rem] md:text-5xl 2xl:text-6xl font-bold leading-tight text-white mb-6">
              Connecting Talent
              <br />
              with Opportunity
            </h1>
            <p className="text-lg md:text-xl 2xl:text-2xl text-white/90 mb-8 max-w-lg">
              Your trusted partner in building exceptional teams and advancing
              careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="soft-hover  bg-blue-600 text-white hover:bg-blue-700 px-8 py-3"
              >
                Post a Job
              </Button>
              <Link href="/careers">
                <Button
                  size="lg"
                  variant="outline"
                  className="soft-hover  border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
                >
                  Explore Openings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive recruitment solutions tailored to your business
              needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <Card
                key={s.title}
                className="soft-hover text-center border-0 shadow-md rounded-xl"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <s.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {s.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Joblistin?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through expertise, dedication, and
              innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center soft-hover">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <Card key={t.name} className="soft-hover border-0 shadow-lg rounded-xl">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">“{t.content}”</p>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                    <p className="text-sm text-blue-600">{t.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map / CTA ───────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Looking for a Job?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We have an extensive network of capable recruiters to help you
                meet your career goals. Submit your CV today.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">
                    Shewale Complex, A-4 First Floor, Karve Nagar, Pune 411052
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">+91 9860608927</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">info@joblistin.com</span>
                </div>
              </div>
              <Link href="/contact">
                <Button size="lg" className="soft-hover bg-blue-600 hover:bg-blue-700 px-8 py-3">
                  Contact Us Today
                </Button>
              </Link>
            </div>

            <div className="bg-gray-200 rounded-xl h-80 w-full overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.753580873354!2d73.82532857509452!3d18.495347171098714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea8e605a7e13%3A0xbecf9c2e579b4e0b!2sShewale%20Complex%2C%20Karve%20Nagar%2C%20Pune%2C%20Maharashtra%20411052%2C%20India!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

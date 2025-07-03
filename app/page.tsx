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
  /* ─────────────────────────────────────────────────────────────────────
     Data arrays
  ───────────────────────────────────────────────────────────────────── */
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
      description:
        "Flexible staffing solutions for project-based and temporary workforce needs.",
    },
    {
      icon: TrendingUp,
      title: "Executive Search",
      description:
        "Strategic leadership recruitment for C-level and senior management positions.",
    },
    {
      icon: Award,
      title: "HR Consulting",
      description:
        "Comprehensive HR solutions to optimize your workforce management strategies.",
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
      description:
        "Tailored solutions crafted to meet each client’s specific needs and goals.",
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

  /* ─────────────────────────────────────────────────────────────────────
     Page markup
  ───────────────────────────────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 text-white py-28 lg:py-48">
        {/* background photo + dark overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-9.webp"
            alt="Professional team collaboration"
            fill
            className="object-cover object-center"
            style={{ opacity: 0.8 }}
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* full-height decorative SVG on the left */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-4/5 pointer-events-none">
          <Image
            src="/decor.svg"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        {/* foreground content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-start">
            <div className="w-full lg:w-1/2 p-8 text-left -ml-2 sm:-ml-4 md:-ml-6 lg:-ml-12 xl:-ml-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Connecting Talent
                <br />
                with Opportunity
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white ">
                Our Services Your trusted partner in building exceptional teams
                and advancing careers
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-3 rounded-lg shadow-lg"
                >
                  Post a Job
                </Button>
                <Link href="/careers">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg px-8 py-3 rounded-lg"
                  >
                    Explore Openings
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Summary ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
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
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md rounded-xl"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────────────── */}
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
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
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
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-xl">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map Preview & Call-to-Action ─────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Looking for a Job?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We have an extensive network of highly capable recruiters to
                help you meet your career needs. Submit your CV here.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">
                    Shewale Complex, A-4 First Floor, Near Shahu Colony, Karve
                    Nagar, Pune – 411052
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
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 rounded-lg"
                >
                  Contact Us Today
                </Button>
              </Link>
            </div>

            {/* Placeholder for interactive map */}
            <div className="bg-gray-200 rounded-xl h-80 w-full overflow-hidden">
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
        </div>
      </section>

      <Footer />
    </div>
  );
}

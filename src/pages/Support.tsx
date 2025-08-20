import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  HelpCircle,
  Clock,
  Shield,
  FileText,
  Users
} from "lucide-react";

const Support = () => {
  const faqItems = [
    {
      question: "How do I book a worker?",
      answer: "Simply browse through our verified workers, check their profiles and ratings, then click 'Hire Now' to book instantly or schedule for later."
    },
    {
      question: "Are all workers verified?",
      answer: "Yes, all workers on ShramSetu go through a thorough verification process including ID verification, background checks, and skill assessments."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a satisfaction guarantee. If you're not happy with the service, contact our support team within 24 hours and we'll resolve the issue or provide a refund."
    },
    {
      question: "How do payments work?",
      answer: "Payments are securely processed through our wallet system. You can add money via UPI, cards, or net banking. Payment is released to workers only after job completion."
    },
    {
      question: "Can I cancel a booking?",
      answer: "Yes, you can cancel bookings up to 2 hours before the scheduled time without any charges. Cancellations within 2 hours may incur a small fee."
    },
    {
      question: "How are workers rated?",
      answer: "Workers are rated by customers based on quality of work, punctuality, and professionalism. Only verified bookings can leave ratings and reviews."
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our support team",
      contact: "+91 9876543210",
      availability: "24/7 Available"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help through chat",
      contact: "Start Chat",
      availability: "Online Now"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your detailed queries",
      contact: "support@shramsetu.com",
      availability: "Response within 2 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How can we help you?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get quick answers to your questions or reach out to our support team
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <method.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    <p className="font-medium text-primary mb-2">{method.contact}</p>
                    <p className="text-xs text-accent">{method.availability}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Section */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-border last:border-b-0 pb-6 last:pb-0">
                      <h4 className="font-semibold text-foreground mb-2">{item.question}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <p className="text-muted-foreground">
                  Can't find what you're looking for? Send us a detailed message and we'll get back to you.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name
                      </label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address
                      </label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input placeholder="What is this about?" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Describe your issue or question in detail..."
                      rows={6}
                    />
                  </div>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-accent hover:bg-accent-hover border-0"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Help */}
            <Card className="bg-gradient-hero text-primary-foreground shadow-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Need Immediate Help?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-primary-foreground/90">
                  Our support team is available 24/7 to assist you with any urgent issues.
                </p>
                <Button 
                  className="w-full bg-accent hover:bg-accent-hover text-accent-foreground border-0"
                  size="lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* Help Categories */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Browse Help Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { icon: Users, name: "Account & Profile", count: 12 },
                    { icon: FileText, name: "Booking & Payments", count: 18 },
                    { icon: Shield, name: "Safety & Security", count: 8 },
                    { icon: MessageCircle, name: "Communication", count: 6 }
                  ].map((category, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <category.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium text-foreground">{category.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{category.count} articles</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200 shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Emergency?
                </h3>
                <p className="text-red-700 text-sm mb-4">
                  If you're facing any safety concerns or emergency situations, contact us immediately.
                </p>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  className="w-full"
                >
                  Emergency Contact
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
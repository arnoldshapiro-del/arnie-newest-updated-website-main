import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  AlertCircle,
  CheckCircle,
  Star,
  Quote
} from "lucide-react";
import patientSuccess from "@/assets/patient-success.jpg";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "(859) 341-7453",
      description: "Same-day response to calls and questions",
      action: "tel:859-341-7453"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@arnoldshapiromd.com",
      description: "Secure, confidential communication",
      action: "mailto:contact@arnoldshapiromd.com"
    },
    {
      icon: MapPin,
      title: "Locations",
      info: "Cincinnati, OH & Fort Wright, KY",
      description: "Two convenient locations to serve you",
      action: "#"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "By Appointment" },
    { day: "Sunday", hours: "Emergency Only" }
  ];

  const testimonials = [
    {
      text: "Dr. Shapiro is the most compassionate doctor I've ever met. He listens and involves me in every decision. The best experience I've ever had.",
      author: "Long-time Patient"
    },
    {
      text: "The family-like environment and same-day response to questions made all the difference in my treatment journey.",
      author: "Grateful Patient"
    },
    {
      text: "Finally found a psychiatrist who treats me as an equal and explains everything clearly. Highly recommend!",
      author: "Current Patient"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-calm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-warm-accent/10 text-warm-accent border-warm-accent/20 mb-4">
            <Phone className="w-4 h-4 mr-1" />
            Contact Us
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Start Your 
            <span className="text-primary"> Healing Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today to schedule your comprehensive evaluation. We're here to help you 
            every step of the way with compassionate, professional care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="bg-card border-border hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <contact.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1">{contact.title}</h4>
                          <a 
                            href={contact.action}
                            className="text-primary font-medium hover:text-primary/80 transition-colors"
                          >
                            {contact.info}
                          </a>
                          <p className="text-muted-foreground text-sm mt-1">{contact.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="w-5 h-5 text-healing" />
                  <h4 className="text-lg font-semibold text-foreground">Office Hours</h4>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="text-foreground font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Information */}
            <Card className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Emergency Services</h4>
                    <p className="text-muted-foreground text-sm">
                      If you're experiencing a psychiatric emergency, call 911 or go to your nearest emergency room. 
                      For non-emergency concerns, call our office at (859) 341-7453.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Image and Testimonials */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-large">
                <img 
                  src={patientSuccess} 
                  alt="Happy patients showing successful treatment outcomes" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">What Our Patients Say</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <Quote className="w-5 h-5 text-healing flex-shrink-0 mt-1" />
                        <div>
                          <blockquote className="text-muted-foreground italic mb-3">
                            "{testimonial.text}"
                          </blockquote>
                          <div className="flex items-center space-x-1">
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-warm-accent fill-current" />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground ml-2">- {testimonial.author}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <Card className="bg-gradient-to-br from-warm-accent/5 to-primary/5 border-warm-accent/20">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-12 h-12 text-healing mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Ready to Begin?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Schedule your comprehensive evaluation today and take the first step 
                  toward better mental health.
                </p>
                <Button 
                  size="lg" 
                  className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium w-full"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Evaluation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
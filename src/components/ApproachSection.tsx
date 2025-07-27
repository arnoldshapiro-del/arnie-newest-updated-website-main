import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Heart, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Handshake
} from "lucide-react";
import therapyRoom from "@/assets/therapy-room.jpg";

const ApproachSection = () => {
  const approachSteps = [
    {
      number: "01",
      title: "Three-Part Evaluation",
      description: "Comprehensive assessment using our unique evaluation system",
      details: "We examine medical history, current symptoms, and psychosocial factors"
    },
    {
      number: "02", 
      title: "Collaborative Planning",
      description: "Together we explore all treatment options and their pros/cons",
      details: "You're an equal partner in every treatment decision"
    },
    {
      number: "03",
      title: "Personalized Treatment",
      description: "Tailored combination of therapy and medication management",
      details: "Evidence-based approaches adapted to your unique needs"
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "Continuous monitoring with same-day response to concerns",
      details: "Adjustments and backup plans as needed for optimal results"
    }
  ];

  const coreValues = [
    {
      icon: Users,
      title: "Patient Equality",
      description: "Every patient is treated as an equal, never looked down upon"
    },
    {
      icon: Heart,
      title: "Family Environment", 
      description: "Warm, caring atmosphere where patients feel like family"
    },
    {
      icon: BookOpen,
      title: "Education First",
      description: "Teaching patients about their conditions and treatment options"
    },
    {
      icon: Clock,
      title: "Accessibility",
      description: "Same-day response to questions and flexible scheduling"
    },
    {
      icon: Shield,
      title: "Confidentiality",
      description: "Secure, private environment for all communications"
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Working together to find the best treatment approach"
    }
  ];

  return (
    <section id="approach" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 mb-4">
            <Heart className="w-4 h-4 mr-1" />
            Our Approach
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            A Different Kind of 
            <span className="text-primary"> Psychiatric Care</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our approach to treatment is different from any other practice in the tri-state area. 
            We combine decades of experience with genuine compassion and collaborative care.
          </p>
        </div>

        {/* Treatment Process */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground">
              Our Treatment Process
            </h3>
            <div className="space-y-6">
              {approachSteps.map((step, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-muted-foreground mb-2">{step.description}</p>
                    <p className="text-sm text-primary font-medium">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={therapyRoom} 
                alt="Comfortable therapy room with calming atmosphere" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            What Sets Us Apart
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-healing/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-healing" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy Statement */}
        <Card className="bg-gradient-to-br from-primary/5 to-healing/5 border-primary/20 mb-16">
          <CardContent className="p-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Philosophy
            </h3>
            <blockquote className="text-xl text-muted-foreground italic mb-6 leading-relaxed">
              "I never insist and say 'you must do this.' Instead, I say 'let's look at the pros and cons.' 
              There's more than one way to accomplish healing. We spell out the plans together, and if 
              they're not successful, we create backup plans. You're never alone in this journey."
            </blockquote>
            <div className="text-foreground font-semibold">— Dr. Arnold G. Shapiro</div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Experience the Difference
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of patients who have found healing through our collaborative, 
            compassionate approach to mental health care.
          </p>
          <Button 
            size="lg" 
            className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Your Evaluation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
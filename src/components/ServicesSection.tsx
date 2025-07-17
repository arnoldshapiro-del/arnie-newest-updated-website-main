import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Heart, 
  Users, 
  Stethoscope, 
  BookOpen, 
  Shield,
  Zap,
  Baby,
  GraduationCap,
  Clock,
  Target,
  Lightbulb
} from "lucide-react";

const ServicesSection = () => {
  const childServices = [
    {
      icon: Brain,
      title: "ADHD Treatment",
      description: "Comprehensive evaluation and treatment for attention deficit hyperactivity disorder",
      details: "Both medication and behavioral interventions"
    },
    {
      icon: Heart,
      title: "Anxiety & Depression",
      description: "Specialized care for childhood anxiety disorders and mood concerns",
      details: "Age-appropriate therapeutic approaches"
    },
    {
      icon: Users,
      title: "Behavioral Issues",
      description: "Support for ODD, conduct disorders, and behavioral challenges",
      details: "Family-centered treatment plans"
    },
    {
      icon: Baby,
      title: "Autism Support",
      description: "Assessment and support for autism spectrum disorders",
      details: "Comprehensive developmental approach"
    }
  ];

  const adultServices = [
    {
      icon: Zap,
      title: "Bipolar Disorder",
      description: "Expert management of mood stabilization and episode prevention",
      details: "Personalized medication and lifestyle planning"
    },
    {
      icon: Shield,
      title: "Anxiety Disorders",
      description: "Treatment for generalized anxiety, panic, OCD, and phobias",
      details: "Evidence-based therapeutic approaches"
    },
    {
      icon: Target,
      title: "Depression Treatment",
      description: "Comprehensive care for major depression and mood disorders",
      details: "Combined therapy and medication options"
    },
    {
      icon: Lightbulb,
      title: "ADHD in Adults",
      description: "Specialized treatment for adult attention deficit challenges",
      details: "Work and life optimization strategies"
    }
  ];

  const treatmentApproach = [
    {
      icon: BookOpen,
      title: "Three-Part Evaluation",
      description: "Our unique comprehensive assessment system ensures accurate diagnosis and optimal treatment planning."
    },
    {
      icon: GraduationCap,
      title: "Patient Education Priority",
      description: "We teach you about your condition, treatment options, and empower you to make informed decisions."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Convenient appointment times that work with your life and schedule."
    },
    {
      icon: Stethoscope,
      title: "Combined Care",
      description: "Both therapy and medication management available in one comprehensive practice."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-calm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-trust/10 text-trust border-trust/20 mb-4">
            <Stethoscope className="w-4 h-4 mr-1" />
            Our Services
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Comprehensive Mental Health Care for 
            <span className="text-primary"> All Ages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in outpatient treatment of psychiatric disorders in children, families, and adults. 
            Our approach combines evidence-based medicine with compassionate, individualized care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {/* Child & Adolescent Services */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Child & Adolescent Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {childServices.map((service, index) => (
                <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border-border">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-healing/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-healing" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{service.description}</p>
                    <div className="text-sm text-healing font-medium">{service.details}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Adult Services */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Adult Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {adultServices.map((service, index) => (
                <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border-border">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{service.description}</p>
                    <div className="text-sm text-primary font-medium">{service.details}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Treatment Approach */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Our Treatment Approach
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentApproach.map((approach, index) => (
                <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border-border">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-warm-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <approach.icon className="w-6 h-6 text-warm-accent" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{approach.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{approach.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional conditions */}
        <div className="mt-16 bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Additional Conditions We Treat
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Tourette's Syndrome",
              "Disruptive Mood Dysregulation Disorder",
              "Adjustment Disorders",
              "Attachment Disorders",
              "Compulsive Disorders",
              "Conduct Disorders",
              "Emotional Regulation Issues",
              "School-related Challenges",
              "Family Relationship Issues"
            ].map((condition, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-healing rounded-full" />
                <span className="text-muted-foreground">{condition}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Journey to Better Mental Health?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your comprehensive evaluation and begin your personalized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium"
            >
              Schedule Your Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/5"
            >
              Learn About Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
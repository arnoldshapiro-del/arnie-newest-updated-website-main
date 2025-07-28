import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  BookOpen, 
  GraduationCap, 
  Clock,
  FileText,
  PillIcon,
  UserCheck,
  Check,
  TestTube,
  Users,
  GamepadIcon
} from "lucide-react";

const ServicesSection = () => {
  const treatmentApproach = [
    {
      icon: FileText,
      title: "Comprehensive Evaluation",
      description: "Our three-part evaluation system ensures we understand each patient's unique needs, history, and circumstances before developing a treatment plan."
    },
    {
      icon: PillIcon,
      title: "Medication & Therapy",
      description: "Unlike many psychiatrists that only prescribe medication, or programs that can only offer therapy, our practice provides both therapy and medication management."
    },
    {
      icon: UserCheck,
      title: "Patient Education",
      description: "We put a heavy emphasis on patient education to empower our patients with knowledge about their conditions and treatment options."
    }
  ];

  const childServices = [
    { col1: ["ADHD", "Anxiety disorders", "Autism spectrum disorder", "Bipolar disorder", "Disruptive Mood Dysregulation", "OCD", "Tourette's syndrome"], 
      col2: ["Adjustment disorders", "Attachment disorders", "Behavior & discipline concerns", "Depression", "Fears, panic & anxiety", "Oppositional Defiant Disorder", "Sleep problems"] }
  ];

  const adultServices = [
    { col1: ["Anxiety disorders", "Bipolar disorder", "Obsessive-Compulsive Disorder", "Panic disorder", "Work-related stress", "Insomnia"], 
      col2: ["ADHD", "Depression", "Mood disorders", "Relationship difficulties", "Life transitions", "Family problems"] }
  ];

  const additionalServices = [
    {
      icon: TestTube,
      title: "Genetic Testing",
      description: "We offer GeneSight Testing to help identify how your genes may affect your response to certain medications, allowing for more personalized treatment."
    },
    {
      icon: Users,
      title: "Family Therapy",
      description: "Individual and family psychotherapy sessions help address family dynamics and improve communication between family members."
    },
    {
      icon: GamepadIcon,
      title: "Play Therapy",
      description: "Play therapy for young children offering comfort and a therapeutic environment where they can express themselves naturally."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-calm">
      <div className="container mx-auto px-4">
        {/* Treatment Approach */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our Unique Approach
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
            Our approach to treatment is different from any other practice in the tri-state area. Dr. Shapiro and his 
            team use a unique three-part evaluation system to best treat patients. Scheduling is flexible, education 
            is a priority, and nothing matters more than working together with patients for optimal results.
          </p>
        </div>

        {/* Treatment Approach Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {treatmentApproach.map((approach, index) => (
            <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 border-border text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-warm-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <approach.icon className="w-8 h-8 text-warm-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">{approach.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{approach.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in outpatient treatment of many psychiatric disorders in children, 
            families, and adults. Our diverse clinical staff is trained in a variety of treatment 
            modalities and are ready to help.
          </p>
        </div>

        {/* Services Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Child & Adolescent Services */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Child & Adolescent Services</h3>
            <p className="text-muted-foreground mb-6">Effective treatment for childhood disorders & concerns:</p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                {childServices[0].col1.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {childServices[0].col2.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Adult Services */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Adult Services</h3>
            <p className="text-muted-foreground mb-6">Comprehensive psychiatric care for adults:</p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                {adultServices[0].col1.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {adultServices[0].col2.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Additional Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
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
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Schedule Your Evaluation
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
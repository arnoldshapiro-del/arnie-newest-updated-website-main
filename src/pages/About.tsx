import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Heart } from "lucide-react";
import doctorProfile from "@/assets/doctor-profile.jpg";

const About = () => {
  const achievements = [
    { icon: Award, title: "Board Certified", desc: "American Board of Psychiatry" },
    { icon: Users, title: "15+ Years", desc: "Clinical Experience" },
    { icon: Clock, title: "24/7 Support", desc: "Crisis Intervention" },
    { icon: Heart, title: "Compassionate Care", desc: "Patient-Centered Approach" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">About Our Practice</Badge>
          <h1 className="text-4xl font-bold mb-6">Dr. Sarah Chen, M.D.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated to providing compassionate, evidence-based psychiatric care 
            to help you achieve mental wellness and live your best life.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Doctor Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src={doctorProfile} 
              alt="Dr. Sarah Chen" 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Meet Dr. Sarah Chen</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dr. Sarah Chen is a board-certified psychiatrist with over 15 years of experience 
              in treating a wide range of mental health conditions. She completed her medical 
              degree at Johns Hopkins University and her psychiatry residency at Mayo Clinic.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dr. Chen specializes in anxiety disorders, depression, bipolar disorder, and 
              trauma-related conditions. She believes in a holistic approach that combines 
              evidence-based treatments with compassionate care.
            </p>
            <div className="space-y-2">
              <p className="font-semibold">Education & Training:</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• M.D. Johns Hopkins University School of Medicine</li>
                <li>• Psychiatry Residency, Mayo Clinic</li>
                <li>• Fellowship in Anxiety Disorders, UCLA</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="pt-6">
                <achievement.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy Section */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Philosophy</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
              <p>
                Mental health is just as important as physical health. Every individual deserves 
                access to quality psychiatric care that respects their unique circumstances, 
                cultural background, and personal goals.
              </p>
              <p>
                We believe in the power of the therapeutic relationship and work collaboratively 
                with our patients to develop treatment plans that are both effective and sustainable. 
                Our approach integrates the latest research with time-tested therapeutic techniques.
              </p>
              <p>
                Recovery is possible, and hope is always within reach. We're here to support 
                you every step of the way on your journey to mental wellness.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take the first step towards better mental health. Schedule a consultation 
            to discuss how we can help you achieve your wellness goals.
          </p>
          <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Schedule Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import BackButton from "@/components/BackButton";

const Slideshows = () => {
  const [adhdSlides, setAdhdSlides] = useState<string[]>([]);

  useEffect(() => {
    // Load ADHD slides
    const loadAdhdSlides = async () => {
      const candidates = [];
      for (let i = 1; i <= 30; i++) {
        const n = String(i).padStart(2, "0");
        candidates.push(`/about-conditions/adhd/adhd-slide-${n}.png.PNG`);
        candidates.push(`/about-conditions/adhd/ADHD${n}.png`);
      }
      
      const validSlides = [];
      for (const src of candidates) {
        try {
          const response = await fetch(src, { method: 'HEAD' });
          if (response.ok) {
            validSlides.push(src);
          }
        } catch (error) {
          // Slide doesn't exist, skip it
        }
      }
      
      setAdhdSlides(validSlides.slice(0, 20)); // Limit to first 20 found
    };

    loadAdhdSlides();
  }, []);

  const conditions = [
    { id: 'adhd', name: 'ADHD', slides: adhdSlides, pdfUrl: '/about-conditions/adhd/ADHD-Education.pdf' },
    { id: 'anxiety', name: 'Anxiety', slides: [], pdfUrl: null },
    { id: 'depression', name: 'Depression', slides: [], pdfUrl: null },
    { id: 'bipolar', name: 'Bipolar', slides: [], pdfUrl: null },
    { id: 'ptsd', name: 'PTSD', slides: [], pdfUrl: null },
    { id: 'ocd', name: 'OCD', slides: [], pdfUrl: null },
    { id: 'autism', name: 'Autism', slides: [], pdfUrl: null },
    { id: 'eating', name: 'Eating Disorders', slides: [], pdfUrl: null },
    { id: 'substance', name: 'Substance Use', slides: [], pdfUrl: null },
    { id: 'sleep', name: 'Sleep Disorders', slides: [], pdfUrl: null },
    { id: 'panic', name: 'Panic Disorder', slides: [], pdfUrl: null }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BackButton />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">Patient Education</Badge>
          <h1 className="text-4xl font-bold mb-6">Condition Slideshows</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Educational slide presentations for each mental health condition we treat.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-16">
        <Tabs defaultValue="adhd" className="w-full">
          <TabsList className="grid w-full grid-cols-6 lg:grid-cols-11 mb-8">
            {conditions.map((condition) => (
              <TabsTrigger 
                key={condition.id} 
                value={condition.id}
                className="text-xs"
              >
                {condition.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {conditions.map((condition) => (
            <TabsContent key={condition.id} value={condition.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{condition.name} Education</CardTitle>
                  {condition.pdfUrl && (
                    <Button asChild className="w-fit">
                      <a href={condition.pdfUrl} download>
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                  )}
                </CardHeader>
                <CardContent>
                  {condition.slides.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {condition.slides.map((slide, index) => (
                        <div key={slide} className="border rounded-lg overflow-hidden shadow-sm">
                          <img 
                            src={slide}
                            alt={`${condition.name} Education Slide ${index + 1}`}
                            className="w-full h-auto"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground mb-4">
                        Slides for {condition.name} are coming soon.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Contact Dr. Shapiro for more information about {condition.name}.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Disclaimer */}
        <Card className="mt-12 bg-muted/50">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> This educational material is for informational purposes only and does not constitute medical advice. 
              Please consult with Dr. Arnold G. Shapiro or another qualified healthcare provider for proper evaluation and treatment.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Slideshows;
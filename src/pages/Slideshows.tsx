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
    // Load ADHD slides from the actual file paths
    const loadAdhdSlides = async () => {
      const knownSlides = [
        '/about-conditions/adhd/adhd-slide-01.png.PNG',
        '/about-conditions/adhd/adhd-slide-02.png.PNG',
        '/about-conditions/adhd/adhd-slide-03.png.PNG',
        '/about-conditions/adhd/adhd-slide-04.png.PNG',
        '/about-conditions/adhd/adhd-slide-05.png.PNG',
        '/about-conditions/adhd/adhd-slide-06.png.PNG',
        '/about-conditions/adhd/adhd-slide-07.png.PNG',
        '/about-conditions/adhd/adhd-slide-08.png.PNG',
        '/about-conditions/adhd/adhd-slide-09.png.PNG',
        '/about-conditions/adhd/adhd-slide-10.png.PNG',
        '/about-conditions/adhd/adhd-slide-11.png.PNG',
        '/about-conditions/adhd/adhd-slide-12.png.PNG',
        '/about-conditions/adhd/adhd-slide-13.png.PNG',
        '/about-conditions/adhd/adhd-slide-14.png.PNG',
        '/about-conditions/adhd/adhd-slide-15.png.PNG',
        '/about-conditions/adhd/adhd-slide-16.png.PNG',
        '/about-conditions/adhd/adhd-slide-17.png.PNG',
        '/about-conditions/adhd/adhd-slide-18.png.PNG',
        '/about-conditions/adhd/adhd-slide-19.png.PNG',
        '/about-conditions/adhd/adhd-slide-20.png.PNG'
      ];
      
      setAdhdSlides(knownSlides);
    };

    loadAdhdSlides();
  }, []);

  const conditions = [
    { 
      id: 'adhd', 
      name: 'ADHD', 
      slides: adhdSlides, 
      pdfUrl: '/about-conditions/adhd/ADHD-Education.pdf',
      description: 'Comprehensive ADHD education slides covering symptoms, diagnosis, and treatment options.'
    },
    { 
      id: 'anxiety', 
      name: 'Anxiety', 
      slides: [], 
      pdfUrl: null,
      description: 'Understanding anxiety disorders, symptoms, and effective treatment approaches.'
    },
    { 
      id: 'depression', 
      name: 'Depression', 
      slides: [], 
      pdfUrl: null,
      description: 'Major depressive disorder education including causes, symptoms, and recovery.'
    },
    { 
      id: 'bipolar', 
      name: 'Bipolar', 
      slides: [], 
      pdfUrl: null,
      description: 'Bipolar disorder education covering mood episodes and mood stabilization.'
    },
    { 
      id: 'ptsd', 
      name: 'PTSD', 
      slides: [], 
      pdfUrl: null,
      description: 'Post-traumatic stress disorder education and trauma-informed treatment.'
    },
    { 
      id: 'ocd', 
      name: 'OCD', 
      slides: [], 
      pdfUrl: null,
      description: 'Obsessive-compulsive disorder education and exposure therapy approaches.'
    },
    { 
      id: 'autism', 
      name: 'Autism', 
      slides: [], 
      pdfUrl: null,
      description: 'Autism spectrum disorder education for patients and families.'
    },
    { 
      id: 'eating', 
      name: 'Eating Disorders', 
      slides: [], 
      pdfUrl: null,
      description: 'Eating disorder education covering anorexia, bulimia, and binge eating.'
    },
    { 
      id: 'substance', 
      name: 'Substance Use', 
      slides: [], 
      pdfUrl: null,
      description: 'Substance use disorder education and recovery approaches.'
    },
    { 
      id: 'sleep', 
      name: 'Sleep Disorders', 
      slides: [], 
      pdfUrl: null,
      description: 'Sleep disorder education including insomnia and sleep hygiene.'
    },
    { 
      id: 'panic', 
      name: 'Panic Disorder', 
      slides: [], 
      pdfUrl: null,
      description: 'Panic disorder education and anxiety management techniques.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BackButton />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">Patient Education</Badge>
          <h1 className="text-4xl font-bold mb-6">Educational Slideshows</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Educational slide presentations for each mental health condition we treat.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-16">
        <Tabs defaultValue="adhd" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 xl:grid-cols-11 mb-8">
            {conditions.map((condition) => (
              <TabsTrigger 
                key={condition.id} 
                value={condition.id}
                className="text-xs px-2"
              >
                {condition.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {conditions.map((condition) => (
            <TabsContent key={condition.id} value={condition.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center justify-between">
                    {condition.name} Education
                    {condition.pdfUrl && (
                      <Button asChild variant="outline">
                        <a href={condition.pdfUrl} download>
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </a>
                      </Button>
                    )}
                  </CardTitle>
                  <p className="text-muted-foreground">{condition.description}</p>
                </CardHeader>
                <CardContent>
                  {condition.slides.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {condition.slides.map((slide, index) => (
                        <div key={slide} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                          <img 
                            src={slide}
                            alt={`${condition.name} Education Slide ${index + 1}`}
                            className="w-full h-auto"
                            loading="lazy"
                            onError={(e) => {
                              console.log(`Failed to load slide: ${slide}`);
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                          <div className="p-2 bg-muted/50">
                            <p className="text-xs text-center text-muted-foreground">
                              Slide {index + 1}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-muted/20 rounded-lg">
                      <div className="text-6xl mb-4">📚</div>
                      <h3 className="text-xl font-semibold mb-2">Slides Coming Soon</h3>
                      <p className="text-muted-foreground mb-4">
                        Educational slides for {condition.name} are being prepared.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Contact Dr. Shapiro at (859) 341-7453 for more information about {condition.name}.
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
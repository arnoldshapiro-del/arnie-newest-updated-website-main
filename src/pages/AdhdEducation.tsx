import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, ChevronLeft, ChevronRight, X, Maximize } from "lucide-react";
import { Link } from "react-router-dom";

// Generate candidate images for any condition
const generateCandidateImages = (condition: string) => {
  const candidates = [];
  for (let i = 1; i <= 30; i++) {
    const n = String(i).padStart(2, "0");
    candidates.push(`/about-conditions/${condition}/${condition}-slide-${n}.png.PNG`);
    candidates.push(`/education-assets/${condition}/${condition.toUpperCase()}${n}.png`);
    candidates.push(`/education-assets/${condition}/${condition}-slide-${n}.png`);
  }
  return candidates;
};

export default function AdhdEducation() {
  const [currentCondition, setCurrentCondition] = useState('adhd');
  const [validImages, setValidImages] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  useEffect(() => {
    const candidates = generateCandidateImages(currentCondition);
    const imagePromises = candidates.map(src => 
      new Promise<string | null>((resolve) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => resolve(null);
        img.src = src;
      })
    );
    
    Promise.all(imagePromises).then(results => {
      const valid = results.filter(Boolean) as string[];
      // Remove duplicates and sort by slide number
      const unique = Array.from(new Set(valid)).sort((a, b) => {
        const getNum = (path: string) => {
          const match = path.match(/(\d+)\.png/i);
          return match ? parseInt(match[1]) : 0;
        };
        return getNum(a) - getNum(b);
      });
      setValidImages(unique);
    });
  }, [currentCondition]);

  const conditions = [
    { id: 'adhd', name: 'ADHD', icon: '🧠' },
    { id: 'anxiety', name: 'Anxiety', icon: '😰' },
    { id: 'depression', name: 'Depression', icon: '🌧️' },
    { id: 'bipolar', name: 'Bipolar', icon: '🎭' },
    { id: 'ptsd', name: 'PTSD', icon: '🛡️' },
    { id: 'ocd', name: 'OCD', icon: '🔄' },
    { id: 'autism', name: 'Autism', icon: '🧩' },
    { id: 'eating-disorder', name: 'Eating Disorders', icon: '🍽️' },
    { id: 'substance-abuse', name: 'Substance Use', icon: '🚫' },
    { id: 'sleep-disorder', name: 'Sleep Disorders', icon: '😴' },
    { id: 'personality', name: 'Personality', icon: '🎭' }
  ];
  const openSlide = (index: number) => {
    setCurrentSlide(index);
    setIsFullscreen(true);
  };

  const closeSlide = () => {
    setIsFullscreen(false);
    setCurrentSlide(null);
  };

  const nextSlide = () => {
    if (currentSlide !== null && currentSlide < validImages.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide !== null && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeSlide();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  return (
    <main className="min-h-screen bg-background p-6">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Mental Health Education Slideshows</h1>
          <p className="text-muted-foreground mb-6">
            Comprehensive educational materials about mental health conditions from Dr. Arnold G. Shapiro
          </p>
          
          {/* Crystal clear but subtle directions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
            <p className="text-sm text-blue-800 font-medium mb-2">📖 How to Use:</p>
            <div className="text-sm text-blue-700 space-y-1">
              <p>• Click any slide thumbnail to start presentation mode</p>
              <p>• Click slide or → arrow to go to next slide</p>
              <p>• Press ESC or click X to exit presentation</p>
            </div>
          </div>
          
          <Button asChild className="mb-4">
            <a 
              href={`/about-conditions/${currentCondition}/${currentCondition.toUpperCase()}-Education.pdf`} 
              download={`${currentCondition.toUpperCase()}-Education-Dr-Shapiro.pdf`}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download {conditions.find(c => c.id === currentCondition)?.name} Education PDF
            </a>
          </Button>
        </div>

        {/* Working Condition Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {conditions.map((condition) => (
              <Button
                key={condition.id}
                variant={currentCondition === condition.id ? "default" : "outline"}
                onClick={() => setCurrentCondition(condition.id)}
                className={currentCondition === condition.id ? "bg-primary text-primary-foreground" : ""}
              >
                {condition.icon} {condition.name}
              </Button>
            ))}
          </div>
          
          {validImages.length === 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-4xl mx-auto">
              <p className="text-sm text-amber-800 font-medium mb-2">📁 No slides found for {conditions.find(c => c.id === currentCondition)?.name}</p>
              <div className="text-sm text-amber-700 space-y-1">
                <p><strong>To add slides:</strong></p>
                <p>1. Create folder: <code className="bg-amber-100 px-1 rounded">/public/about-conditions/{currentCondition}/</code></p>
                <p>2. Add slide images: <code className="bg-amber-100 px-1 rounded">{currentCondition}-slide-01.png.PNG, {currentCondition}-slide-02.png.PNG</code>, etc.</p>
                <p>3. Add PDF: <code className="bg-amber-100 px-1 rounded">{currentCondition.toUpperCase()}-Education.pdf</code></p>
              </div>
            </div>
          )}
        </div>

        {/* Slide Grid */}
        <h2 className="text-2xl font-bold text-center mb-6">
          {conditions.find(c => c.id === currentCondition)?.icon} {conditions.find(c => c.id === currentCondition)?.name} Education Slides
          {validImages.length > 0 && <span className="text-muted-foreground ml-2">({validImages.length} slides)</span>}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {validImages.map((src, idx) => (
            <div 
              key={src} 
              className="relative group cursor-pointer hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden border border-border"
              onClick={() => openSlide(idx)}
            >
              <img 
                src={src} 
                alt={`${conditions.find(c => c.id === currentCondition)?.name} Education Slide ${idx + 1}`} 
                loading="lazy" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <Maximize className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                Slide {idx + 1}
              </div>
              <div className="absolute top-2 right-2 bg-blue-600/90 text-white px-2 py-1 rounded text-xs">
                Click to present
              </div>
            </div>
          ))}
        </div>

        {validImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading slides...</p>
          </div>
        )}

        {/* Fullscreen Slideshow Modal */}
        {isFullscreen && currentSlide !== null && (
          <div 
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={closeSlide}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Slide counter */}
            <div className="absolute top-4 left-4 text-white bg-black/50 px-3 py-1 rounded z-10">
              {currentSlide + 1} / {validImages.length}
            </div>

            {/* Previous button */}
            {currentSlide > 0 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
            )}

            {/* Next button */}
            {currentSlide < validImages.length - 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={nextSlide}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            )}

            {/* Main slide */}
            <div className="w-full h-full flex items-center justify-center p-8">
              <img 
                src={validImages[currentSlide]} 
                alt={`${conditions.find(c => c.id === currentCondition)?.name} Education Slide ${currentSlide + 1}`}
                className="max-w-full max-h-full object-contain"
                onClick={nextSlide}
              />
            </div>

            {/* Instructions */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded">
              Click slide or use arrow keys to navigate • ESC to close
            </div>
          </div>
        )}
        
        <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
          <p className="text-muted-foreground text-sm">
            <strong>Disclaimer:</strong> This educational material is for informational purposes only and does not constitute medical advice. 
            Please consult with Dr. Arnold G. Shapiro or another qualified healthcare provider for proper evaluation and treatment.
          </p>
        </div>
      </div>
    </main>
  );
}
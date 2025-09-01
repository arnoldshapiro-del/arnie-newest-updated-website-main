import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, ChevronLeft, ChevronRight, X, Maximize } from "lucide-react";
import { Link } from "react-router-dom";

// Try both naming patterns up to 30 slides
const generateCandidateImages = () => {
  const candidates = [];
  for (let i = 1; i <= 30; i++) {
    const n = String(i).padStart(2, "0");
    candidates.push(`/about-conditions/adhd/adhd-slide-${n}.png.PNG`);
    candidates.push(`/education-assets/adhd/ADHD${n}.png`);
    candidates.push(`/education-assets/adhd/adhd-slide-${n}.png`);
  }
  return candidates;
};

export default function AdhdEducation() {
  const [validImages, setValidImages] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  useEffect(() => {
    const candidates = generateCandidateImages();
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
  }, []);

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
          <h1 className="text-4xl font-bold mb-4">ADHD Education Slides</h1>
          <p className="text-muted-foreground mb-6">
            Comprehensive educational materials about ADHD from Dr. Arnold G. Shapiro
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Click any slide to view in presentation mode. Use arrow keys or buttons to navigate.
          </p>
          <Button asChild className="mb-4">
            <a 
              href="/about-conditions/adhd/ADHD-Education.pdf" 
              download="ADHD-Education-Dr-Shapiro.pdf"
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Complete ADHD Education PDF
            </a>
          </Button>
        </div>

        {/* Slide Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {validImages.map((src, idx) => (
            <div 
              key={src} 
              className="relative group cursor-pointer hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden border border-border"
              onClick={() => openSlide(idx)}
            >
              <img 
                src={src} 
                alt={`ADHD Education Slide ${idx + 1}`} 
                loading="lazy" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <Maximize className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                Slide {idx + 1}
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
                alt={`ADHD Education Slide ${currentSlide + 1}`}
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
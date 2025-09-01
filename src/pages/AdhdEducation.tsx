import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

// Try both naming patterns up to 30 slides
const generateCandidateImages = () => {
  const candidates = [];
  for (let i = 1; i <= 30; i++) {
    const n = String(i).padStart(2, "0");
    candidates.push(`/about-conditions/adhd/adhd-slide-${n}.png.PNG`);
    candidates.push(`/education-assets/adhd/ADHD${n}.png`);
    candidates.push(`/education-assets/adhd/adhd-slide-${n}.png`);
    candidates.push(`/education-assets/adhd/ADHD${n}.png`);
  }
  return candidates;
};

export default function AdhdEducation() {
  const [validImages, setValidImages] = useState<string[]>([]);
  
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
          const match = path.match(/(\d+)\.png$/);
          return match ? parseInt(match[1]) : 0;
        };
        return getNum(a) - getNum(b);
      });
      setValidImages(unique);
    });
  }, []);

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
          <Button asChild className="mb-4">
            <a 
              href="/about-conditions/adhd/ADHD-Education.pdf" 
              download
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download the Full ADHD PDF
            </a>
          </Button>
          <Button asChild className="mb-4">
            <a 
              href="/education-assets/adhd/ADHD-Education.pdf" 
              download
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download the Full ADHD PDF
            </a>
          </Button>
        </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        alignItems: "start"
      }}>
        {validImages.map((src, idx) => (
          <img 
            key={src} 
            src={src} 
            alt={`ADHD Education Slide ${idx + 1}`} 
            loading="lazy" 
            style={{ 
              width: "100%", 
              height: "auto", 
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          />
        ))}
      </div>
        
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
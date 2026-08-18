import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";

import { allGalleryPhotos } from "@/data/galleryData";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % allGalleryPhotos.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + allGalleryPhotos.length) % allGalleryPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-college-green/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-college-gold/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-college-green/10 text-college-green border border-college-green/20 mb-4 text-sm px-6 py-2 uppercase tracking-widest font-black rounded-full">
            Visual Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 font-heading tracking-tight">
            Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-college-green to-college-gold">Grace College of Nursing</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Explore photos from our batch relieving ceremonies, certificate distribution events, campus celebrations, and admissions activities.
          </p>
        </div>

        {/* Gallery Uniform Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allGalleryPhotos.slice(0, 18).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative aspect-[16/11] overflow-hidden rounded-3xl border border-border/70 bg-card shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1.5"
            >
              <img
                src={item.src}
                alt="Grace College of Nursing Gallery"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Eye Icon Hover Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <div className="w-12 h-12 rounded-full bg-nursing-green text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <Eye className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Photos Button */}
        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-nursing-green hover:bg-nursing-green/90 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl text-sm transition-all transform hover:-translate-y-0.5"
          >
            Explore Complete Visual Gallery ({allGalleryPhotos.length} Photos) <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={selectedImageIndex !== null}
        onOpenChange={(open) => !open && setSelectedImageIndex(null)}
      >
        <DialogContent className="max-w-4xl p-2 sm:p-4 overflow-hidden bg-card border-border shadow-2xl rounded-3xl text-foreground">
          <DialogTitle className="sr-only">Gallery Photo</DialogTitle>

          {selectedImageIndex !== null && (
            <div className="relative flex items-center justify-center min-h-[350px]">
              <div className="relative w-full flex items-center justify-center bg-black/5 rounded-2xl overflow-hidden p-2">
                <img
                  src={allGalleryPhotos[selectedImageIndex].src}
                  alt="Gallery Preview"
                  className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
                />

                {allGalleryPhotos.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white text-foreground p-2 border border-border shadow-md"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white text-foreground p-2 border border-border shadow-md"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { allGalleryPhotos } from "@/data/galleryData";

export default function GalleryPage() {
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
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        <BreadcrumbNav
          badge="Photo Gallery"
          title="Campus, Laboratories & Events Gallery"
          subtitle="Explore visual glimpses of our simulation labs, hospital clinical postings, classroom seminars, hostel living, and convocation ceremonies."
          items={[{ label: "Gallery" }]}
        />

        <div className="container mx-auto px-4 sm:px-8 py-12 space-y-12">
          {/* Photos Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allGalleryPhotos.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(idx)}
                className="group relative aspect-[16/11] overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1.5"
              >
                <img
                  src={item.src}
                  alt="Grace College of Nursing Photo"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <div className="w-11 h-11 rounded-full bg-nursing-green text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
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
                    alt="Gallery Photo"
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
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

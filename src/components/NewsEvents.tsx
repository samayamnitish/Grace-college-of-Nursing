import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NewsEvents = () => {
  const newsItems = [
    {
      title: "New admission in BSc Nursing",
      date: "2024-07-20",
      type: "Admission",
      description: "Applications are now open for BSc Nursing program for the academic year 2024-25. Limited seats available.",
      isNew: true
    },
    {
      title: "Campus Placement Drive",
      date: "2024-07-15",
      type: "Placement",
      description: "Leading hospitals and healthcare institutions visiting campus for recruitment of nursing graduates.",
      isNew: true
    },
    {
      title: "Nursing Week Celebration",
      date: "2024-07-10",
      type: "Event",
      description: "Annual nursing week celebration with various activities, competitions and guest lectures.",
      isNew: false
    },
    {
      title: "Scholarship Program Announced",
      date: "2024-07-05",
      type: "Scholarship",
      description: "Merit-based scholarships available for deserving students. Apply before the deadline.",
      isNew: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Admission": return "bg-green-100 text-green-800";
      case "Placement": return "bg-blue-100 text-blue-800";
      case "Event": return "bg-purple-100 text-purple-800";
      case "Scholarship": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-college-green mb-4">
            News & Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and announcements from Grace College of Nursing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getTypeColor(item.type)}>
                        {item.type}
                      </Badge>
                      {item.isNew && (
                        <Badge className="bg-red-100 text-red-800">
                          New
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg text-college-green line-clamp-2">
                      {item.title}
                    </CardTitle>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(item.date)}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <Button variant="outline" size="sm" className="group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Announcement */}
        <div className="bg-gradient-to-r from-college-green to-college-green/80 rounded-lg text-white p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-6 h-6" />
            <span className="font-semibold">Latest Update</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">
            Admissions Open for Academic Year 2024-25
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Don't miss the opportunity to join Grace College of Nursing. Applications are now being accepted 
            for BSc Nursing program. Limited seats available - Apply today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-college-green hover:bg-gray-100">
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-college-green">
              Download Prospectus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
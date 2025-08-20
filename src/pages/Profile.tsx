import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Star, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  Calendar,
  Shield,
  Award,
  Briefcase
} from "lucide-react";

const Profile = () => {
  const worker = {
    id: "1",
    name: "Priya Sharma",
    skill: "Professional House Cleaner",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b332c3f5?w=300&h=300&fit=crop&crop=face",
    rating: 4.8,
    reviewCount: 124,
    hourlyRate: 200,
    dailyRate: 1500,
    location: "Sector 18, Noida",
    experience: "5+ years",
    isVerified: true,
    joinedDate: "Jan 2022",
    completedJobs: 280,
    responseTime: "< 2 hours",
    languages: ["Hindi", "English"],
    skills: ["Deep Cleaning", "Kitchen Cleaning", "Bathroom Cleaning", "Laundry", "Dishwashing", "Floor Mopping"],
    description: "Experienced house cleaner with 5+ years of experience. I provide thorough cleaning services for homes and offices. My attention to detail and reliable service has earned me excellent ratings from customers.",
    availability: {
      monday: "9:00 AM - 6:00 PM",
      tuesday: "9:00 AM - 6:00 PM",
      wednesday: "9:00 AM - 6:00 PM",
      thursday: "9:00 AM - 6:00 PM",
      friday: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 4:00 PM",
      sunday: "Closed"
    }
  };

  const reviews = [
    {
      id: "1",
      customerName: "Anita M.",
      rating: 5,
      date: "2 days ago",
      comment: "Excellent service! Priya is very thorough and professional. She cleaned our 3BHK apartment perfectly. Highly recommended!",
      serviceType: "Deep Cleaning"
    },
    {
      id: "2",
      customerName: "Rajesh K.",
      rating: 5,
      date: "1 week ago",
      comment: "Very punctual and hardworking. Did a great job cleaning our office space. Will definitely book again.",
      serviceType: "Office Cleaning"
    },
    {
      id: "3",
      customerName: "Meera S.",
      rating: 4,
      date: "2 weeks ago",
      comment: "Good service overall. She pays attention to details and is very polite. Kitchen and bathrooms were spotless.",
      serviceType: "Regular Cleaning"
    },
    {
      id: "4",
      customerName: "Amit P.",
      rating: 5,
      date: "3 weeks ago",
      comment: "Outstanding work! She cleaned our entire house including windows and balcony. Very satisfied with the service.",
      serviceType: "Full House Cleaning"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src={worker.photo} alt={worker.name} />
                      <AvatarFallback className="text-2xl">{worker.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {worker.isVerified && (
                      <CheckCircle className="absolute -bottom-2 -right-2 w-8 h-8 text-accent bg-background rounded-full p-1" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-2xl font-bold text-foreground">{worker.name}</h1>
                      {worker.isVerified && (
                        <Badge className="bg-accent text-accent-foreground">
                          <Shield className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-lg text-primary font-medium mb-3">{worker.skill}</p>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-accent text-accent" />
                        <span className="font-semibold text-foreground">{worker.rating}</span>
                        <span className="text-muted-foreground">({worker.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{worker.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{worker.description}</p>
                    
                    <div className="flex gap-3">
                      <Button size="lg" className="bg-gradient-accent hover:bg-accent-hover border-0">
                        <Phone className="w-5 h-5 mr-2" />
                        Book Now
                      </Button>
                      <Button variant="outline" size="lg">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills & Services */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Skills & Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {worker.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  Reviews ({worker.reviewCount})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-border last:border-b-0 pb-6 last:pb-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="font-semibold text-primary">{review.customerName.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{review.customerName}</p>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'fill-accent text-accent' : 'text-muted'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-foreground mb-2">{review.comment}</p>
                      <Badge variant="secondary" className="text-xs">
                        {review.serviceType}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Button variant="outline">View All Reviews</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="bg-gradient-hero text-primary-foreground shadow-hover">
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Hourly Rate</span>
                    <span className="font-bold">₹{worker.hourlyRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily Rate</span>
                    <span className="font-bold">₹{worker.dailyRate}</span>
                  </div>
                </div>
                <Button 
                  className="w-full mt-6 bg-accent hover:bg-accent-hover text-accent-foreground border-0"
                  size="lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Booking
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-medium">{worker.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Jobs Completed</span>
                    <span className="font-medium">{worker.completedJobs}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-medium">{worker.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Member Since</span>
                    <span className="font-medium">{worker.joinedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Languages</span>
                    <span className="font-medium">{worker.languages.join(", ")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(worker.availability).map(([day, time]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="capitalize text-muted-foreground">{day}</span>
                      <span className="font-medium text-foreground">{time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
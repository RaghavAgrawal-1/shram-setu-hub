import { useState } from "react";
import Navigation from "@/components/Navigation";
import LabourCard from "@/components/LabourCard";
import FloatingHelp from "@/components/FloatingHelp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Filter, 
  Star,
  SlidersHorizontal
} from "lucide-react";

const HireLabour = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services", count: 156 },
    { id: "cleaning", name: "House Cleaning", count: 45 },
    { id: "painting", name: "Painting", count: 32 },
    { id: "construction", name: "Construction", count: 28 },
    { id: "repairs", name: "Repairs", count: 51 },
  ];

  const filters = [
    { name: "Near Me", active: true },
    { name: "Top Rated", active: false },
    { name: "Available Now", active: false },
    { name: "Budget Friendly", active: false },
  ];

  const labourData = [
    {
      id: "1",
      name: "Priya Sharma",
      skill: "House Cleaner",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b332c3f5?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      reviewCount: 124,
      hourlyRate: 200,
      dailyRate: 1500,
      location: "Sector 18, Noida",
      isVerified: true,
      skills: ["Deep Cleaning", "Kitchen", "Bathroom", "Laundry"],
      distance: "2.3 km away"
    },
    {
      id: "2",
      name: "Rajesh Kumar",
      skill: "Painter",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4.6,
      reviewCount: 89,
      hourlyRate: 300,
      dailyRate: 2000,
      location: "Lajpat Nagar, Delhi",
      isVerified: true,
      skills: ["Interior Painting", "Exterior", "Wall Texture", "Wood Polish"],
      distance: "5.1 km away"
    },
    {
      id: "3",
      name: "Sunita Devi",
      skill: "Cook",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      reviewCount: 67,
      hourlyRate: 250,
      dailyRate: 1800,
      location: "Vasant Kunj, Delhi",
      isVerified: true,
      skills: ["North Indian", "South Indian", "Chinese", "Snacks"],
      distance: "3.7 km away"
    },
    {
      id: "4",
      name: "Amit Singh",
      skill: "Electrician",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.7,
      reviewCount: 156,
      hourlyRate: 400,
      dailyRate: 2500,
      location: "Gurgaon Sector 15",
      isVerified: true,
      skills: ["Wiring", "AC Repair", "Switch Installation", "LED Setup"],
      distance: "1.8 km away"
    },
    {
      id: "5",
      name: "Meera Patel",
      skill: "Babysitter",
      photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      reviewCount: 43,
      hourlyRate: 180,
      dailyRate: 1200,
      location: "Indirapuram, Ghaziabad",
      isVerified: true,
      skills: ["Newborn Care", "Toddler Care", "Activity Planning", "Basic Teaching"],
      distance: "4.2 km away"
    },
    {
      id: "6",
      name: "Ravi Yadav",
      skill: "Carpenter",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 4.5,
      reviewCount: 92,
      hourlyRate: 350,
      dailyRate: 2200,
      location: "Karol Bagh, Delhi",
      isVerified: true,
      skills: ["Furniture Making", "Repairs", "Cabinet Installation", "Wood Work"],
      distance: "6.5 km away"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Skilled Workers Near You
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through verified workers, compare ratings, and hire the best talent for your needs
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for workers, skills, or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-background border-border shadow-soft"
              />
              <Button 
                size="sm" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-accent hover:bg-accent-hover border-0"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            {/* Categories */}
            <Card className="bg-gradient-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors flex items-center justify-between ${
                        selectedCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-muted-foreground"
                      }`}
                    >
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Filters */}
            <Card className="bg-gradient-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" />
                  Quick Filters
                </h3>
                <div className="space-y-2">
                  {filters.map((filter, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked={filter.active}
                        className="rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-muted-foreground">{filter.name}</span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-gradient-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Location
                </h3>
                <Input
                  placeholder="Enter your location"
                  className="bg-background border-border"
                />
                <div className="mt-3 text-sm text-primary cursor-pointer hover:underline">
                  Use current location
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  {labourData.length} Workers Found
                </h2>
                <p className="text-muted-foreground">
                  Showing workers near your location
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Button variant="outline" size="sm" className="gap-2">
                  <Star className="w-4 h-4" />
                  Top Rated
                </Button>
              </div>
            </div>

            {/* Labour Cards Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {labourData.map((labour, index) => (
                <div key={labour.id} style={{ animationDelay: `${index * 100}ms` }}>
                  <LabourCard {...labour} />
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8"
              >
                Load More Workers
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <FloatingHelp />
    </div>
  );
};

export default HireLabour;
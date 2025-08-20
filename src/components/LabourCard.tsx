import { Star, MapPin, Clock, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface LabourCardProps {
  id: string;
  name: string;
  skill: string;
  photo: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  dailyRate: number;
  location: string;
  isVerified: boolean;
  skills: string[];
  distance?: string;
}

const LabourCard = ({
  name,
  skill,
  photo,
  rating,
  reviewCount,
  hourlyRate,
  dailyRate,
  location,
  isVerified,
  skills,
  distance
}: LabourCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 animate-fade-in">
      <CardContent className="p-6">
        {/* Header with photo and basic info */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <img 
              src={photo} 
              alt={`${name} - ${skill}`}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/10"
            />
            {isVerified && (
              <CheckCircle className="absolute -bottom-1 -right-1 w-5 h-5 text-accent bg-background rounded-full" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-foreground truncate">{name}</h3>
              {isVerified && (
                <Badge variant="secondary" className="text-xs">
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-primary font-medium">{skill}</p>
            
            {/* Rating */}
            <div className="flex items-center gap-1 mt-2">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-medium text-foreground">{rating}</span>
              <span className="text-muted-foreground text-sm">({reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1 mb-4">
          {skills.slice(0, 3).map((skillTag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skillTag}
            </Badge>
          ))}
          {skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{skills.length - 3} more
            </Badge>
          )}
        </div>

        {/* Location and distance */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          {distance && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{distance}</span>
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="bg-muted/50 rounded-lg p-3 mb-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Hourly Rate</span>
              <div className="font-semibold text-foreground">₹{hourlyRate}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Daily Rate</span>
              <div className="font-semibold text-foreground">₹{dailyRate}</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-gradient-accent hover:bg-accent-hover border-0 font-medium"
            size="sm"
          >
            <Phone className="w-4 h-4 mr-2" />
            Hire Now
          </Button>
          <Button variant="outline" size="sm">
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LabourCard;
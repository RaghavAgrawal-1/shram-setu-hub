import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            size="lg" 
            className="bg-gradient-accent hover:bg-accent-hover border-0 px-8"
            onClick={() => window.location.href = "/"}
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-sm text-muted-foreground">
            Need help? <a href="/support" className="text-primary hover:underline">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

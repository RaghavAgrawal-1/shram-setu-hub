import Navigation from "@/components/Navigation";
import FloatingHelp from "@/components/FloatingHelp";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wallet as WalletIcon, 
  Plus, 
  Gift, 
  CreditCard, 
  TrendingUp,
  Clock,
  Star,
  Zap,
  Award
} from "lucide-react";

const Wallet = () => {
  const walletBalance = 2540;
  
  const recentTransactions = [
    {
      id: "1",
      type: "payment",
      description: "Payment to Priya Sharma (House Cleaning)",
      amount: -800,
      date: "Today, 2:30 PM",
      status: "completed"
    },
    {
      id: "2",
      type: "cashback",
      description: "Cashback from painting service",
      amount: +120,
      date: "Yesterday, 4:15 PM",
      status: "completed"
    },
    {
      id: "3",
      type: "add_money",
      description: "Added money via UPI",
      amount: +1500,
      date: "Dec 18, 10:30 AM",
      status: "completed"
    },
    {
      id: "4",
      type: "payment",
      description: "Payment to Rajesh Kumar (Painting)",
      amount: -1200,
      date: "Dec 17, 6:45 PM",
      status: "completed"
    }
  ];

  const rewards = [
    {
      id: "1",
      title: "Welcome Bonus",
      description: "Complete your first booking",
      reward: "₹100 Cashback",
      progress: 100,
      status: "claimed",
      icon: Gift
    },
    {
      id: "2",
      title: "Loyalty Reward",
      description: "Book 5 services this month",
      reward: "₹200 Cashback",
      progress: 60,
      status: "active",
      icon: Award
    },
    {
      id: "3",
      title: "Quick Booker",
      description: "Book within 1 hour of browsing",
      reward: "₹50 Instant Cashback",
      progress: 0,
      status: "available",
      icon: Zap
    }
  ];

  const scratchCards = [
    { id: "1", title: "Daily Surprise", prize: "Up to ₹500", claimed: false },
    { id: "2", title: "Weekend Special", prize: "Up to ₹1000", claimed: false },
    { id: "3", title: "Lucky Draw", prize: "Up to ₹2000", claimed: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Wallet</h1>
          <p className="text-muted-foreground">
            Manage your payments, rewards, and cashback offers
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Wallet Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Wallet Balance Card */}
            <Card className="bg-gradient-hero text-primary-foreground shadow-hover">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <WalletIcon className="w-8 h-8" />
                    <div>
                      <h2 className="text-xl font-semibold">Wallet Balance</h2>
                      <p className="text-primary-foreground/80">Available to spend</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">₹{walletBalance.toLocaleString()}</div>
                    <Badge className="bg-accent text-accent-foreground mt-2">
                      UPI Linked
                    </Badge>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    className="bg-accent hover:bg-accent-hover text-accent-foreground border-0 flex-1"
                    size="lg"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add Money
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary flex-1"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Pay Bills
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Recent Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.amount > 0 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-red-100 text-red-600'
                        }`}>
                          {transaction.type === 'cashback' ? (
                            <Gift className="w-5 h-5" />
                          ) : transaction.type === 'add_money' ? (
                            <Plus className="w-5 h-5" />
                          ) : (
                            <CreditCard className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {transaction.description}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {transaction.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${
                          transaction.amount > 0 ? 'text-green-600' : 'text-foreground'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount)}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Button variant="outline">View All Transactions</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Rewards & Offers */}
          <div className="space-y-6">
            {/* Scratch Cards */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-accent" />
                  Scratch Cards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {scratchCards.map((card) => (
                    <div
                      key={card.id}
                      className={`p-4 rounded-lg border-2 border-dashed transition-all cursor-pointer ${
                        card.claimed
                          ? 'border-muted bg-muted/30 opacity-60'
                          : 'border-accent bg-accent/5 hover:bg-accent/10'
                      }`}
                    >
                      <div className="text-center">
                        <h4 className="font-semibold text-foreground">{card.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{card.prize}</p>
                        <Button
                          size="sm"
                          disabled={card.claimed}
                          className="bg-gradient-accent hover:bg-accent-hover border-0"
                        >
                          {card.claimed ? 'Claimed' : 'Scratch Now'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rewards Progress */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Rewards & Offers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rewards.map((reward) => (
                    <div key={reward.id} className="p-4 rounded-lg bg-muted/20">
                      <div className="flex items-start gap-3 mb-3">
                        <reward.icon className="w-5 h-5 text-primary mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{reward.title}</h4>
                          <p className="text-sm text-muted-foreground">{reward.description}</p>
                          <p className="text-sm font-medium text-accent mt-1">{reward.reward}</p>
                        </div>
                        {reward.status === 'claimed' && (
                          <Badge className="bg-green-100 text-green-700">
                            Claimed
                          </Badge>
                        )}
                      </div>
                      
                      {reward.status !== 'claimed' && (
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${reward.progress}%` }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  Your Stats
                </h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-xs text-muted-foreground">Bookings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">₹580</div>
                    <div className="text-xs text-muted-foreground">Saved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">4.9</div>
                    <div className="text-xs text-muted-foreground">Avg Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">₹320</div>
                    <div className="text-xs text-muted-foreground">Cashback</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <FloatingHelp />
    </div>
  );
};

export default Wallet;
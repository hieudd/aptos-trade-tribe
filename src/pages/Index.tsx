import { Button } from "@/components/ui/button";
import { MarketOverview } from "@/components/dashboard/market-overview";
import { SocialFeed } from "@/components/dashboard/social-feed";
import { BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Welcome to Axora
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The ultimate social trading platform for the Aptos ecosystem. 
          Follow top traders, copy strategies, and grow your portfolio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/portfolio">
            <Button size="lg" className="min-w-[200px]">
              <BarChart3 className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </Link>
          <Link to="/traders">
            <Button variant="outline" size="lg" className="min-w-[200px]">
              <Users className="mr-2 h-5 w-5" />
              Discover Traders
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Market Overview</h2>
          <MarketOverview />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Social Feed</h2>
          <SocialFeed />
        </div>
      </section>
    </div>
  );
};

export default Index;
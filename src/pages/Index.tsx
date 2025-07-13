import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { SidebarNav } from "@/components/ui/sidebar-nav";
import { PortfolioCard } from "@/components/dashboard/portfolio-card";
import { MarketOverview } from "@/components/dashboard/market-overview";
import { TopTraders } from "@/components/dashboard/top-traders";
import { SocialFeed } from "@/components/dashboard/social-feed";
import { Button } from "@/components/ui/button";
import { PanelLeft } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 border-r border-border bg-card/30 min-h-[calc(100vh-4rem)]`}>
          <div className="p-4 border-b border-border">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="w-full"
            >
              <PanelLeft className="h-4 w-4" />
            </Button>
          </div>
          <SidebarNav isCollapsed={sidebarCollapsed} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-xl mb-8 h-48">
            <img 
              src={heroImage} 
              alt="AptosTrader Hero" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20 flex items-center">
              <div className="p-8">
                <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                  Welcome to AptosTrader
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  The future of social trading on Aptos blockchain
                </p>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Start Trading
                </Button>
              </div>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 space-y-6">
              <PortfolioCard />
              <MarketOverview />
            </div>
            <div>
              <TopTraders />
            </div>
          </div>

          {/* Social Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <SocialFeed />
            </div>
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-gradient-card border border-border/50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    Copy Top Trader
                  </Button>
                  <Button variant="outline" className="w-full">
                    Explore Markets
                  </Button>
                  <Button variant="outline" className="w-full">
                    Join Community
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;

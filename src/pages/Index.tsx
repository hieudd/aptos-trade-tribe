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
        <aside className={`${sidebarCollapsed ? 'w-20' : 'w-72'} transition-all duration-300 border-r-thick border-border bg-card min-h-[calc(100vh-5rem)] brutalist-shadow`}>
          <div className="p-6 border-b-thick border-border">
            <Button
              variant="ghost" 
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="w-full brutalist-shadow border-thick border-transparent hover:border-border rounded-brutal h-12"
            >
              <PanelLeft className="h-4 w-4" />
            </Button>
          </div>
          <SidebarNav isCollapsed={sidebarCollapsed} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-brutal mb-10 h-64 brutalist-shadow border-thick border-border">
            <img 
              src={heroImage} 
              alt="Axora Hero" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/30 flex items-center">
              <div className="p-10">
                <h1 className="text-5xl font-black mb-4 bg-gradient-primary bg-clip-text text-transparent">
                  Welcome to Axora
                </h1>
                <p className="text-xl text-muted-foreground mb-6 font-medium max-w-lg">
                  The future of social trading with Soft Brutalism design revolution
                </p>
                <Button className="bg-gradient-primary hover:opacity-90 h-14 px-8 text-lg font-black rounded-brutal border-thick border-foreground brutalist-shadow">
                  Start Trading
                </Button>
              </div>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-2 space-y-8">
              <PortfolioCard />
              <MarketOverview />
            </div>
            <div>
              <TopTraders />
            </div>
          </div>

          {/* Social Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SocialFeed />
            </div>
            <div className="space-y-8">
              {/* Quick Actions */}
              <div className="bg-gradient-secondary rounded-brutal border-thick border-border p-8 brutalist-shadow">
                <h3 className="font-black text-xl mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Button className="w-full bg-gradient-primary hover:opacity-90 h-12 font-black rounded-brutal border-thick border-foreground brutalist-shadow">
                    Copy Top Trader
                  </Button>
                  <Button variant="outline" className="w-full h-12 font-black rounded-brutal border-thick border-border brutalist-shadow hover:brutalist-shadow">
                    Explore Markets
                  </Button>
                  <Button variant="outline" className="w-full h-12 font-black rounded-brutal border-thick border-border brutalist-shadow hover:brutalist-shadow">
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

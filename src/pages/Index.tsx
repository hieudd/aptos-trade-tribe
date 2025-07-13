import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { SidebarNav } from "@/components/ui/sidebar-nav";
import { SocialFeed } from "@/components/dashboard/social-feed";
import { CopyTrading } from "@/components/dashboard/copy-trading";
import { UserProfile } from "@/components/dashboard/user-profiles";
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
                  Welcome to Axora
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Advanced social trading for the Aptos ecosystem
                </p>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Start Trading
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Button size="lg" className="h-16 bg-gradient-primary hover:opacity-90" asChild>
              <a href="/portfolio">
                <div className="text-center">
                  <h3 className="font-semibold">Portfolio</h3>
                  <p className="text-sm opacity-90">View your trading dashboard</p>
                </div>
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="h-16" asChild>
              <a href="/traders">
                <div className="text-center">
                  <h3 className="font-semibold">Top Traders</h3>
                  <p className="text-sm opacity-70">Follow successful traders</p>
                </div>
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="h-16">
              <div className="text-center">
                <h3 className="font-semibold">Start Trading</h3>
                <p className="text-sm opacity-70">Begin your journey</p>
              </div>
            </Button>
          </div>

          {/* Enhanced Social Trading Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <SocialFeed />
            </div>
            <div className="space-y-6">
              <CopyTrading />
              <UserProfile />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;

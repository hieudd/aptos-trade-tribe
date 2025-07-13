import { PortfolioCard } from "@/components/dashboard/portfolio-card";
import { MarketOverview } from "@/components/dashboard/market-overview";

const Portfolio = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
          Portfolio Dashboard
        </h1>
        <p className="text-muted-foreground">
          Track your trading performance and asset allocation
        </p>
      </div>

      {/* Portfolio Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PortfolioCard />
        </div>
        <div>
          <MarketOverview />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
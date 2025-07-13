import { TrendingUp, TrendingDown, DollarSign, PieChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const PortfolioCard = () => {
  const portfolioData = {
    totalValue: 145230.45,
    change24h: 8432.12,
    changePercent: 6.21,
    positions: 12
  };

  const isPositive = portfolioData.changePercent > 0;

  return (
    <Card className="bg-card brutalist-card border-border rounded-brutal bg-gradient-to-br from-brutalist-blue to-brutalist-purple">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <span className="text-xl font-black text-white">Portfolio Overview</span>
          <DollarSign className="h-6 w-6 text-white/80" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="text-4xl font-black text-white">
            ${portfolioData.totalValue.toLocaleString()}
          </div>
          <div className="flex items-center space-x-2 mt-2">
            {isPositive ? (
              <TrendingUp className="h-5 w-5 text-success" />
            ) : (
              <TrendingDown className="h-5 w-5 text-destructive" />
            )}
            <span className={`text-sm font-bold ${isPositive ? 'text-success' : 'text-destructive'}`}>
              ${Math.abs(portfolioData.change24h).toLocaleString()} ({portfolioData.changePercent}%)
            </span>
            <span className="text-xs text-white/60 font-medium">24h</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t-thick border-white/20">
          <div className="flex items-center space-x-3">
            <PieChart className="h-5 w-5 text-white/80" />
            <span className="text-sm text-white/80 font-medium">Active Positions</span>
          </div>
          <Badge variant="secondary" className="bg-white/20 text-white font-bold border-thick border-white/40 rounded-brutal">
            {portfolioData.positions}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
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
    <Card className="bg-gradient-card border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg font-semibold">Portfolio Overview</span>
          <DollarSign className="h-5 w-5 text-muted-foreground" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-3xl font-bold">
            ${portfolioData.totalValue.toLocaleString()}
          </div>
          <div className="flex items-center space-x-2 mt-1">
            {isPositive ? (
              <TrendingUp className="h-4 w-4 text-success" />
            ) : (
              <TrendingDown className="h-4 w-4 text-destructive" />
            )}
            <span className={`text-sm font-medium ${isPositive ? 'text-success' : 'text-destructive'}`}>
              ${Math.abs(portfolioData.change24h).toLocaleString()} ({portfolioData.changePercent}%)
            </span>
            <span className="text-xs text-muted-foreground">24h</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center space-x-2">
            <PieChart className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Active Positions</span>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {portfolioData.positions}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
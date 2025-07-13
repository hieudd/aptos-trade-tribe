import { TrendingUp, TrendingDown, DollarSign, PieChart, Activity, Clock, Percent } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PortfolioCard = () => {
  const portfolioData = {
    totalValue: 145230.45,
    change24h: 8432.12,
    changePercent: 6.21,
    weekChange: 3456.78,
    weekChangePercent: 8.21,
    monthChangePercent: -1.23,
    allTimeReturn: 156.34,
    annualizedReturn: 47.2,
    positions: 12
  };

  const assetAllocation = [
    { name: "APT", value: 48430.56, percentage: 33.4, color: "hsl(var(--primary))" },
    { name: "BTC", value: 39632.78, percentage: 27.3, color: "hsl(var(--success))" },
    { name: "ETH", value: 28465.21, percentage: 19.6, color: "hsl(var(--warning))" },
    { name: "Others", value: 28701.90, percentage: 19.7, color: "hsl(var(--muted))" },
  ];

  const openTrades = [
    { symbol: "APT", entry: 12.45, current: 13.21, pnl: 6.1, size: 100 },
    { symbol: "BTC", entry: 43200, current: 44150, pnl: 2.2, size: 0.5 },
    { symbol: "SOL", entry: 98.30, current: 95.20, pnl: -3.2, size: 25 },
  ];

  const recentActivity = [
    { type: "trade", action: "Buy APT", amount: "$1,250", time: "2h ago" },
    { type: "deposit", action: "Deposit USDC", amount: "$5,000", time: "1d ago" },
    { type: "trade", action: "Sell SOL", amount: "$2,430", time: "2d ago" },
  ];

  const isPositive = portfolioData.changePercent > 0;

  return (
    <Card className="bg-gradient-card border-border/50 shadow-glass">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-primary" />
          Portfolio Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="allocation">Assets</TabsTrigger>
            <TabsTrigger value="trades">Trades</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">
                ${portfolioData.totalValue.toLocaleString()}
              </div>
              <div className={`flex items-center justify-center space-x-1 ${isPositive ? 'text-success' : 'text-destructive'}`}>
                {isPositive ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span className="font-medium">
                  ${Math.abs(portfolioData.change24h).toLocaleString()} ({portfolioData.changePercent}%)
                </span>
                <Badge variant={isPositive ? "default" : "destructive"} className="text-xs">
                  24h
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 rounded-lg bg-background/30 border border-border/50">
                <div className="text-xs text-muted-foreground mb-1">7 Days</div>
                <div className={`font-semibold ${portfolioData.weekChangePercent > 0 ? 'text-success' : 'text-destructive'}`}>
                  {portfolioData.weekChangePercent > 0 ? '+' : ''}{portfolioData.weekChangePercent}%
                </div>
              </div>
              <div className="text-center p-3 rounded-lg bg-background/30 border border-border/50">
                <div className="text-xs text-muted-foreground mb-1">30 Days</div>
                <div className={`font-semibold ${portfolioData.monthChangePercent > 0 ? 'text-success' : 'text-destructive'}`}>
                  {portfolioData.monthChangePercent > 0 ? '+' : ''}{portfolioData.monthChangePercent}%
                </div>
              </div>
              <div className="text-center p-3 rounded-lg bg-background/30 border border-border/50">
                <div className="text-xs text-muted-foreground mb-1">All Time</div>
                <div className="font-semibold text-success">
                  +{portfolioData.allTimeReturn}%
                </div>
              </div>
              <div className="text-center p-3 rounded-lg bg-background/30 border border-border/50">
                <div className="text-xs text-muted-foreground mb-1">Annualized</div>
                <div className="font-semibold text-primary">
                  {portfolioData.annualizedReturn}%
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="allocation" className="space-y-4">
            <div className="space-y-3">
              {assetAllocation.map((asset) => (
                <div key={asset.name} className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-border/50">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: asset.color }}
                    />
                    <span className="font-medium">{asset.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">${asset.value.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{asset.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trades" className="space-y-3">
            {openTrades.map((trade, index) => {
              const pnlPositive = trade.pnl > 0;
              return (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-border/50">
                  <div>
                    <div className="font-medium">{trade.symbol}</div>
                    <div className="text-xs text-muted-foreground">Size: {trade.size}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Entry:</span> ${trade.entry}
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Current:</span> ${trade.current}
                    </div>
                  </div>
                  <Badge variant={pnlPositive ? "default" : "destructive"} className="text-xs">
                    {pnlPositive ? '+' : ''}{trade.pnl}%
                  </Badge>
                </div>
              );
            })}
          </TabsContent>

          <TabsContent value="activity" className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-border/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    {activity.type === 'trade' ? (
                      <Activity className="h-4 w-4 text-primary" />
                    ) : (
                      <DollarSign className="h-4 w-4 text-success" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{activity.action}</div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                  </div>
                </div>
                <div className="font-medium">{activity.amount}</div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
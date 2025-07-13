import { TrendingUp, TrendingDown, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const marketData = [
  {
    symbol: "APT",
    name: "Aptos",
    price: 12.34,
    change: 5.67,
    changePercent: 8.5,
    volume: "245M",
    isWatched: true
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 43250.50,
    change: -1234.20,
    changePercent: -2.78,
    volume: "28.5B",
    isWatched: false
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 2543.80,
    change: 45.20,
    changePercent: 1.81,
    volume: "12.3B",
    isWatched: true
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: 98.45,
    change: -3.21,
    changePercent: -3.16,
    volume: "1.2B",
    isWatched: false
  }
];

export const MarketOverview = () => {
  return (
    <Card className="bg-gradient-card border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Market Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {marketData.map((token) => {
            const isPositive = token.changePercent > 0;
            return (
              <div key={token.symbol} className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-border/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{token.symbol[0]}</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{token.symbol}</div>
                    <div className="text-xs text-muted-foreground">{token.name}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-medium">${token.price.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Vol: {token.volume}</div>
                  </div>

                  <div className="flex items-center space-x-1">
                    {isPositive ? (
                      <TrendingUp className="h-3 w-3 text-success" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-destructive" />
                    )}
                    <span className={`text-xs font-medium ${isPositive ? 'text-success' : 'text-destructive'}`}>
                      {token.changePercent}%
                    </span>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                  >
                    <Star className={`h-3 w-3 ${token.isWatched ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
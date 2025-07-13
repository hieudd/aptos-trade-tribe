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
    <Card className="bg-card brutalist-card border-border rounded-brutal">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-black">Market Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {marketData.map((token) => {
            const isPositive = token.changePercent > 0;
            return (
              <div key={token.symbol} className="flex items-center justify-between p-4 rounded-brutal bg-gradient-to-r from-brutalist-orange/20 to-brutalist-pink/20 border-thick border-border brutalist-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-brutal flex items-center justify-center border-thick border-foreground">
                    <span className="text-sm font-black text-primary-foreground">{token.symbol[0]}</span>
                  </div>
                  <div>
                    <div className="font-black text-base">{token.symbol}</div>
                    <div className="text-sm text-muted-foreground font-medium">{token.name}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <div className="font-black text-base">${token.price.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground font-medium">Vol: {token.volume}</div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {isPositive ? (
                      <TrendingUp className="h-4 w-4 text-success" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-destructive" />
                    )}
                    <span className={`text-sm font-black ${isPositive ? 'text-success' : 'text-destructive'}`}>
                      {token.changePercent}%
                    </span>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 brutalist-shadow border-thick border-transparent hover:border-border rounded-brutal"
                  >
                    <Star className={`h-4 w-4 ${token.isWatched ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
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
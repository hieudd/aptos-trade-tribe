import { useState } from "react";
import { Copy, Play, Pause, StopCircle, Settings, TrendingUp, Users, Target, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const topTraders = [
  { 
    id: 1, 
    name: "CryptoMaster", 
    avatar: "/api/placeholder/32/32", 
    roi: 245.6, 
    winRate: 78.5, 
    followers: 1247, 
    totalTrades: 342,
    riskScore: 6.2,
    isFollowing: false 
  },
  { 
    id: 2, 
    name: "AptosWhale", 
    avatar: "/api/placeholder/32/32", 
    roi: 189.3, 
    winRate: 72.1, 
    followers: 856, 
    totalTrades: 189,
    riskScore: 4.8,
    isFollowing: true 
  },
  { 
    id: 3, 
    name: "TechAnalyst", 
    avatar: "/api/placeholder/32/32", 
    roi: 156.8, 
    winRate: 69.2, 
    followers: 2341, 
    totalTrades: 523,
    riskScore: 3.9,
    isFollowing: false 
  },
];

const activeCopies = [
  {
    trader: "CryptoMaster",
    allocation: 1500,
    pnl: 245.60,
    pnlPercent: 16.4,
    status: "active",
    startDate: "2024-01-15"
  },
  {
    trader: "AptosWhale", 
    allocation: 2000,
    pnl: -89.20,
    pnlPercent: -4.5,
    status: "paused",
    startDate: "2024-01-10"
  }
];

export const CopyTrading = () => {
  const [selectedTrader, setSelectedTrader] = useState(null);
  const [copyAmount, setCopyAmount] = useState([1000]);
  const [stopLoss, setStopLoss] = useState([20]);
  const [takeProfit, setTakeProfit] = useState([50]);
  const [maxDrawdown, setMaxDrawdown] = useState([15]);
  const [autoRebalance, setAutoRebalance] = useState(true);

  return (
    <Card className="bg-gradient-card border-border/50 shadow-glass">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Copy className="h-5 w-5 text-primary" />
          Copy Trading
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="discover" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="discover">Discover</TabsTrigger>
            <TabsTrigger value="active">Active ({activeCopies.length})</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-4">
            <div className="space-y-3">
              {topTraders.map((trader) => (
                <div key={trader.id} className="p-4 rounded-lg bg-background/30 border border-border/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={trader.avatar} />
                        <AvatarFallback className="bg-primary/20 text-primary">
                          {trader.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{trader.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {trader.followers} followers • {trader.totalTrades} trades
                        </div>
                      </div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          size="sm" 
                          className="bg-primary/20 hover:bg-primary/30 text-primary"
                          onClick={() => setSelectedTrader(trader)}
                        >
                          <Copy className="h-4 w-4 mr-1" />
                          Copy
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Copy {trader.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center p-3 bg-background/50 rounded-lg">
                              <div className="text-success font-semibold">{trader.roi}%</div>
                              <div className="text-muted-foreground">ROI</div>
                            </div>
                            <div className="text-center p-3 bg-background/50 rounded-lg">
                              <div className="text-primary font-semibold">{trader.winRate}%</div>
                              <div className="text-muted-foreground">Win Rate</div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <Label>Copy Amount: ${copyAmount[0]}</Label>
                              <Slider
                                value={copyAmount}
                                onValueChange={setCopyAmount}
                                max={10000}
                                min={100}
                                step={100}
                                className="mt-2"
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label>Stop Loss: {stopLoss[0]}%</Label>
                                <Slider
                                  value={stopLoss}
                                  onValueChange={setStopLoss}
                                  max={50}
                                  min={5}
                                  step={5}
                                  className="mt-2"
                                />
                              </div>
                              <div>
                                <Label>Take Profit: {takeProfit[0]}%</Label>
                                <Slider
                                  value={takeProfit}
                                  onValueChange={setTakeProfit}
                                  max={100}
                                  min={10}
                                  step={10}
                                  className="mt-2"
                                />
                              </div>
                            </div>

                            <div>
                              <Label>Max Drawdown: {maxDrawdown[0]}%</Label>
                              <Slider
                                value={maxDrawdown}
                                onValueChange={setMaxDrawdown}
                                max={30}
                                min={5}
                                step={5}
                                className="mt-2"
                              />
                            </div>

                            <div className="flex items-center justify-between">
                              <Label>Auto Rebalance</Label>
                              <Switch 
                                checked={autoRebalance} 
                                onCheckedChange={setAutoRebalance}
                              />
                            </div>
                          </div>

                          <Button className="w-full bg-gradient-primary">
                            Start Copying
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-success font-semibold">{trader.roi}%</div>
                      <div className="text-muted-foreground">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-primary font-semibold">{trader.winRate}%</div>
                      <div className="text-muted-foreground">Win Rate</div>
                    </div>
                    <div className="text-center">
                      <Badge variant="outline" className="text-xs">
                        Risk: {trader.riskScore}/10
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            {activeCopies.map((copy, index) => {
              const isProfitable = copy.pnl > 0;
              return (
                <div key={index} className="p-4 rounded-lg bg-background/30 border border-border/50">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-semibold">{copy.trader}</div>
                      <div className="text-xs text-muted-foreground">
                        Started {copy.startDate} • ${copy.allocation} allocated
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={copy.status === "active" ? "default" : "secondary"}>
                        {copy.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        {copy.status === "active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <Button size="sm" variant="outline">
                        <StopCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground">P&L:</span>
                    </div>
                    <div className={`font-semibold ${isProfitable ? 'text-success' : 'text-destructive'}`}>
                      {isProfitable ? '+' : ''}${copy.pnl} ({copy.pnlPercent}%)
                    </div>
                  </div>
                </div>
              );
            })}
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg bg-background/30 border border-border/50">
                <div className="text-2xl font-bold text-success">+$156.40</div>
                <div className="text-sm text-muted-foreground">Total P&L</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/30 border border-border/50">
                <div className="text-2xl font-bold text-primary">4.4%</div>
                <div className="text-sm text-muted-foreground">ROI</div>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-background/30 border border-border/50">
              <div className="text-sm text-muted-foreground mb-2">Copy Trading Performance</div>
              <div className="text-lg font-semibold">Portfolio growth through copy trading strategies</div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
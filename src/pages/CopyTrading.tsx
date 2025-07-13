import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Users,
  TrendingUp,
  Copy,
  Play,
  Pause,
  StopCircle,
  Settings,
  Wallet,
  Shield,
  AlertTriangle,
  Target,
  DollarSign
} from "lucide-react";

const CopyTrading = () => {
  const [allocation, setAllocation] = useState([1000]);
  const [maxDrawdown, setMaxDrawdown] = useState([20]);
  const [stopLoss, setStopLoss] = useState([10]);
  const [takeProfit, setTakeProfit] = useState([25]);

  const topTraders = [
    {
      id: 1,
      name: "Alex Thompson",
      avatar: "/api/placeholder/40/40",
      roi: "+127.5%",
      winRate: "89%",
      followers: 1247,
      totalTrades: 342,
      risk: "Medium",
      strategy: "Momentum",
      copying: false
    },
    {
      id: 2,
      name: "Sarah Chen",
      avatar: "/api/placeholder/40/40",
      roi: "+95.2%",
      winRate: "76%",
      followers: 890,
      totalTrades: 278,
      risk: "Low",
      strategy: "Swing",
      copying: true
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      avatar: "/api/placeholder/40/40",
      roi: "+203.8%",
      winRate: "82%",
      followers: 2156,
      totalTrades: 456,
      risk: "High",
      strategy: "Scalping",
      copying: false
    }
  ];

  const activeCopies = [
    {
      id: 1,
      trader: "Sarah Chen",
      allocation: "$1,000",
      performance: "+12.5%",
      trades: 8,
      status: "active"
    },
    {
      id: 2,
      trader: "David Kim",
      allocation: "$500",
      performance: "-2.1%",
      trades: 3,
      status: "paused"
    }
  ];

  const recentTrades = [
    {
      id: 1,
      trader: "Sarah Chen",
      token: "APTOS",
      type: "Long",
      entry: "$8.50",
      current: "$9.20",
      pnl: "+8.2%",
      time: "2 hours ago"
    },
    {
      id: 2,
      trader: "Sarah Chen",
      token: "BTC",
      type: "Long",
      entry: "$42,000",
      current: "$43,500",
      pnl: "+3.6%",
      time: "5 hours ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Copy Trading
            </h1>
            <p className="text-muted-foreground">
              Automatically replicate successful traders' strategies
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Wallet className="h-4 w-4 mr-2" />
              Connect Wallet
            </Button>
            <Button>
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Allocated</p>
                  <p className="text-2xl font-bold">$2,500</p>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Copies</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
                <Copy className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total P&L</p>
                  <p className="text-2xl font-bold text-success">+$156.80</p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
                <Target className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="discover" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="discover">Discover Traders</TabsTrigger>
            <TabsTrigger value="active">Active Copies</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="settings">Risk Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-4">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Top Performing Traders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topTraders.map((trader) => (
                    <div
                      key={trader.id}
                      className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={trader.avatar} />
                          <AvatarFallback>{trader.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{trader.name}</h3>
                            <Badge variant="outline">{trader.strategy}</Badge>
                            <Badge 
                              variant={trader.risk === "Low" ? "default" : trader.risk === "Medium" ? "secondary" : "destructive"}
                            >
                              {trader.risk} Risk
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span>{trader.followers} followers</span>
                            <span>{trader.totalTrades} trades</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="font-semibold text-success">{trader.roi}</p>
                          <p className="text-sm text-muted-foreground">{trader.winRate} win rate</p>
                        </div>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant={trader.copying ? "secondary" : "default"}
                              size="sm"
                            >
                              <Copy className="h-4 w-4 mr-2" />
                              {trader.copying ? "Copying" : "Copy"}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Copy {trader.name}</DialogTitle>
                              <DialogDescription>
                                Set up copy trading parameters for this trader
                              </DialogDescription>
                            </DialogHeader>
                            
                            <div className="space-y-4">
                              <div>
                                <Label>Allocation Amount</Label>
                                <Input placeholder="$1000" />
                              </div>
                              
                              <div>
                                <Label>Max Allocation per Trade (%)</Label>
                                <Slider
                                  value={[5]}
                                  max={20}
                                  step={1}
                                  className="mt-2"
                                />
                                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                  <span>1%</span>
                                  <span>20%</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <Label>Copy All Trades</Label>
                                <Switch defaultChecked />
                              </div>
                            </div>
                            
                            <DialogFooter className="gap-2">
                              <Button variant="outline">Cancel</Button>
                              <Button>Start Copying</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>Active Copy Trades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeCopies.map((copy) => (
                      <div
                        key={copy.id}
                        className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50"
                      >
                        <div>
                          <h3 className="font-semibold">{copy.trader}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{copy.allocation}</span>
                            <span>{copy.trades} trades</span>
                            <Badge variant={copy.status === "active" ? "default" : "secondary"}>
                              {copy.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`font-semibold ${
                            copy.performance.startsWith('+') ? 'text-success' : 'text-destructive'
                          }`}>
                            {copy.performance}
                          </span>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              {copy.status === "active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <StopCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>Recent Copied Trades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTrades.map((trade) => (
                      <div
                        key={trade.id}
                        className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <Badge variant={trade.type === "Long" ? "default" : "secondary"}>
                              {trade.type}
                            </Badge>
                            <span className="font-medium">{trade.token}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            by {trade.trader} • {trade.time}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">
                            {trade.entry} → {trade.current}
                          </p>
                          <p className={`font-semibold ${
                            trade.pnl.startsWith('+') ? 'text-success' : 'text-destructive'
                          }`}>
                            {trade.pnl}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Copy Trading Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label>Total Return</Label>
                    <div className="text-2xl font-bold text-success">+6.27%</div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <Label>Win Rate</Label>
                    <div className="text-2xl font-bold">78%</div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <Label>Max Drawdown</Label>
                    <div className="text-2xl font-bold text-destructive">-3.2%</div>
                    <Progress value={16} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Risk Management Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label>Default Allocation per Trader</Label>
                    <div className="mt-2">
                      <Slider
                        value={allocation}
                        onValueChange={setAllocation}
                        max={5000}
                        min={100}
                        step={100}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>$100</span>
                        <span className="font-medium">${allocation[0]}</span>
                        <span>$5000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label>Maximum Drawdown (%)</Label>
                    <div className="mt-2">
                      <Slider
                        value={maxDrawdown}
                        onValueChange={setMaxDrawdown}
                        max={50}
                        min={5}
                        step={5}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>5%</span>
                        <span className="font-medium">{maxDrawdown[0]}%</span>
                        <span>50%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label>Stop Loss (%)</Label>
                    <div className="mt-2">
                      <Slider
                        value={stopLoss}
                        onValueChange={setStopLoss}
                        max={25}
                        min={2}
                        step={1}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>2%</span>
                        <span className="font-medium">{stopLoss[0]}%</span>
                        <span>25%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label>Take Profit (%)</Label>
                    <div className="mt-2">
                      <Slider
                        value={takeProfit}
                        onValueChange={setTakeProfit}
                        max={100}
                        min={5}
                        step={5}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>5%</span>
                        <span className="font-medium">{takeProfit[0]}%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-warning" />
                      <Label>Auto-pause on high volatility</Label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <Button className="w-full">Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CopyTrading;
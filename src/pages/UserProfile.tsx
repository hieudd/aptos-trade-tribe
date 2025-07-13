import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  TrendingUp, 
  Activity, 
  Calendar,
  Edit3,
  UserPlus,
  UserMinus,
  Eye
} from "lucide-react";

const UserProfile = () => {
  const mockTrades = [
    { id: 1, token: "APTOS", entry: "$8.50", exit: "$10.20", pnl: "+20%", date: "2024-01-15", type: "Long" },
    { id: 2, token: "BTC", entry: "$42,000", exit: "$45,500", pnl: "+8.3%", date: "2024-01-14", type: "Long" },
    { id: 3, token: "ETH", entry: "$2,800", exit: "$2,650", pnl: "-5.4%", date: "2024-01-13", type: "Short" },
    { id: 4, token: "SOL", entry: "$95", exit: "$102", pnl: "+7.4%", date: "2024-01-12", type: "Long" },
    { id: 5, token: "APTOS", entry: "$7.80", exit: "$8.90", pnl: "+14.1%", date: "2024-01-11", type: "Long" },
  ];

  const followers = [
    { id: 1, name: "CryptoTrader1", avatar: "/api/placeholder/32/32", roi: "+125%" },
    { id: 2, name: "DeFiExpert", avatar: "/api/placeholder/32/32", roi: "+89%" },
    { id: 3, name: "BlockchainPro", avatar: "/api/placeholder/32/32", roi: "+67%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Profile Header */}
        <Card className="bg-gradient-card border-border/50">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/api/placeholder/96/96" />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  AT
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold">Alex Thompson</h1>
                  <Badge variant="secondary">Pro Trader</Badge>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                  Crypto enthusiast and quantitative trader with 5+ years of experience in DeFi protocols. 
                  Specializing in momentum trading and yield farming strategies across multiple chains.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="font-medium">1,247</span>
                    <span className="text-muted-foreground">Followers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-success" />
                    <span className="font-medium">+127.5%</span>
                    <span className="text-muted-foreground">All-time ROI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="font-medium">89%</span>
                    <span className="text-muted-foreground">Win Rate</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Follow
                </Button>
                <Button variant="outline" size="sm">
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Trades</p>
                  <p className="text-2xl font-bold">342</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Win Rate</p>
                  <p className="text-2xl font-bold text-success">89%</p>
                </div>
                <Activity className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Followers</p>
                  <p className="text-2xl font-bold">1,247</p>
                </div>
                <Users className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">ROI</p>
                  <p className="text-2xl font-bold text-success">+127.5%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="trades" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="trades">Trading History</TabsTrigger>
            <TabsTrigger value="strategy">Strategy</TabsTrigger>
            <TabsTrigger value="followers">Social</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="trades" className="space-y-4">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Recent Trades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTrades.map((trade) => (
                    <div
                      key={trade.id}
                      className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50"
                    >
                      <div className="flex items-center gap-4">
                        <Badge variant={trade.type === "Long" ? "default" : "secondary"}>
                          {trade.type}
                        </Badge>
                        <div>
                          <p className="font-medium">{trade.token}</p>
                          <p className="text-sm text-muted-foreground">{trade.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">
                          {trade.entry} → {trade.exit}
                        </p>
                        <p className={`font-medium ${
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
          </TabsContent>

          <TabsContent value="strategy" className="space-y-4">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Trading Strategy</CardTitle>
                  <Button variant="outline" size="sm">
                    <Edit3 className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Momentum & DeFi Arbitrage Strategy</h3>
                  <Textarea
                    placeholder="Describe your trading strategy, risk management approach, and key insights..."
                    className="min-h-[200px] resize-none"
                    defaultValue="My strategy focuses on momentum trading combined with DeFi yield opportunities. I use a combination of technical analysis and on-chain metrics to identify high-probability setups.

Key elements:
1. Risk Management: Never risk more than 2% per trade
2. Entry Signals: RSI divergence + volume confirmation
3. Exit Strategy: Take profits at 15-20%, stop loss at -5%
4. DeFi Component: Stake idle assets in high-yield protocols

This approach has consistently delivered positive returns while maintaining controlled risk exposure."
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="followers" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Followers (1,247)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {followers.map((follower) => (
                      <div key={follower.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={follower.avatar} />
                            <AvatarFallback>{follower.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{follower.name}</p>
                            <p className="text-sm text-success">{follower.roi}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserPlus className="h-5 w-5" />
                    Following (89)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {followers.slice(0, 3).map((follower) => (
                      <div key={follower.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={follower.avatar} />
                            <AvatarFallback>{follower.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{follower.name}</p>
                            <p className="text-sm text-success">{follower.roi}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <UserMinus className="h-4 w-4" />
                        </Button>
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
                <CardTitle>Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Win Rate</span>
                      <span>89%</span>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Risk Score</span>
                      <span>Medium (6/10)</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Consistency</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserProfile;
import { useState } from "react";
import { User, TrendingUp, Trophy, Users, Heart, MessageCircle, Share2, Calendar, BarChart3, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const userProfile = {
  id: 1,
  name: "Alex Chen",
  username: "@alexcrypto",
  avatar: "/api/placeholder/80/80",
  bio: "Professional trader with 5+ years in crypto markets. Focused on DeFi and emerging L1s. Risk-managed strategies.",
  joinDate: "January 2023",
  verified: true,
  metrics: {
    roi: 234.5,
    winRate: 73.2,
    totalTrades: 1247,
    followers: 3420,
    following: 89,
    copiers: 156
  },
  badges: ["Top Performer", "Risk Manager", "DeFi Expert"],
  strategies: [
    {
      name: "DeFi Yield Farming",
      description: "Conservative approach to yield farming with blue-chip protocols",
      roi: 45.6,
      riskLevel: "Medium"
    },
    {
      name: "Momentum Trading",
      description: "Short-term momentum plays on high-volume altcoins",
      roi: 78.3,
      riskLevel: "High"
    }
  ]
};

const tradingHistory = [
  { symbol: "APT", type: "BUY", entry: 12.45, exit: 13.89, pnl: 11.6, date: "2024-01-15", size: 1000 },
  { symbol: "BTC", type: "SELL", entry: 44200, exit: 43150, pnl: -2.4, date: "2024-01-14", size: 0.5 },
  { symbol: "ETH", type: "BUY", entry: 2456, exit: 2678, pnl: 9.0, date: "2024-01-13", size: 2 },
  { symbol: "SOL", type: "BUY", entry: 98.30, exit: 105.20, pnl: 7.0, date: "2024-01-12", size: 10 },
];

const socialData = {
  followers: [
    { name: "Maria Santos", username: "@maria_trades", avatar: "/api/placeholder/32/32" },
    { name: "John Crypto", username: "@johncrypto", avatar: "/api/placeholder/32/32" },
    { name: "Lisa Wang", username: "@lisawang", avatar: "/api/placeholder/32/32" },
  ],
  following: [
    { name: "CryptoGuru", username: "@cryptoguru", avatar: "/api/placeholder/32/32" },
    { name: "TradeMaster", username: "@trademaster", avatar: "/api/placeholder/32/32" },
  ]
};

export const UserProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <Card className="bg-gradient-card border-border/50 shadow-glass">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5 text-primary" />
          User Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Profile Header */}
        <div className="flex items-start space-x-4 mb-6">
          <Avatar className="h-20 w-20">
            <AvatarImage src={userProfile.avatar} />
            <AvatarFallback className="bg-primary/20 text-primary text-lg">
              {userProfile.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-xl font-bold">{userProfile.name}</h3>
              {userProfile.verified && (
                <Badge variant="default" className="text-xs bg-primary/20 text-primary">
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground text-sm mb-2">{userProfile.username}</p>
            <p className="text-sm mb-3">{userProfile.bio}</p>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Joined {userProfile.joinDate}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button 
                className={isFollowing ? "bg-secondary" : "bg-primary"}
                onClick={() => setIsFollowing(!isFollowing)}
              >
                {isFollowing ? "Following" : "Follow"}
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4 mr-1" />
                Message
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 rounded-lg bg-background/30 border border-border/50">
            <div className="text-2xl font-bold text-success">{userProfile.metrics.roi}%</div>
            <div className="text-xs text-muted-foreground">Total ROI</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-background/30 border border-border/50">
            <div className="text-2xl font-bold text-primary">{userProfile.metrics.winRate}%</div>
            <div className="text-xs text-muted-foreground">Win Rate</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-background/30 border border-border/50">
            <div className="text-2xl font-bold">{userProfile.metrics.totalTrades}</div>
            <div className="text-xs text-muted-foreground">Total Trades</div>
          </div>
        </div>

        {/* Social Stats */}
        <div className="flex justify-around py-3 mb-6 border-t border-b border-border/50">
          <div className="text-center">
            <div className="font-semibold">{userProfile.metrics.followers}</div>
            <div className="text-xs text-muted-foreground">Followers</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">{userProfile.metrics.following}</div>
            <div className="text-xs text-muted-foreground">Following</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">{userProfile.metrics.copiers}</div>
            <div className="text-xs text-muted-foreground">Copiers</div>
          </div>
        </div>

        {/* Badges */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Achievements</h4>
          <div className="flex flex-wrap gap-2">
            {userProfile.badges.map((badge, index) => (
              <Badge key={index} variant="outline" className="bg-primary/10 text-primary">
                <Trophy className="h-3 w-3 mr-1" />
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="history">Trading History</TabsTrigger>
            <TabsTrigger value="strategies">Strategies</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-3">
            {tradingHistory.map((trade, index) => {
              const isProfitable = trade.pnl > 0;
              return (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-border/50">
                  <div className="flex items-center space-x-3">
                    <Badge variant={trade.type === "BUY" ? "default" : "secondary"} className="text-xs">
                      {trade.type}
                    </Badge>
                    <div>
                      <div className="font-medium">{trade.symbol}</div>
                      <div className="text-xs text-muted-foreground">{trade.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm">
                      ${trade.entry} → ${trade.exit}
                    </div>
                    <div className={`text-sm font-semibold ${isProfitable ? 'text-success' : 'text-destructive'}`}>
                      {isProfitable ? '+' : ''}{trade.pnl}%
                    </div>
                  </div>
                </div>
              );
            })}
          </TabsContent>

          <TabsContent value="strategies" className="space-y-4">
            {userProfile.strategies.map((strategy, index) => (
              <div key={index} className="p-4 rounded-lg bg-background/30 border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{strategy.name}</h4>
                  <Badge variant="outline" className={
                    strategy.riskLevel === "High" ? "text-destructive" :
                    strategy.riskLevel === "Medium" ? "text-warning" : "text-success"
                  }>
                    {strategy.riskLevel} Risk
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{strategy.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm">ROI:</span>
                  <span className="font-semibold text-success">+{strategy.roi}%</span>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="social" className="space-y-4">
            <div>
              <h4 className="font-semibold mb-3">Followers ({socialData.followers.length})</h4>
              <div className="space-y-2">
                {socialData.followers.map((follower, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-background/30">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={follower.avatar} />
                        <AvatarFallback className="bg-primary/20 text-primary text-xs">
                          {follower.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium">{follower.name}</div>
                        <div className="text-xs text-muted-foreground">{follower.username}</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Follow Back</Button>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-3">Following ({socialData.following.length})</h4>
              <div className="space-y-2">
                {socialData.following.map((following, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-background/30">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={following.avatar} />
                        <AvatarFallback className="bg-primary/20 text-primary text-xs">
                          {following.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium">{following.name}</div>
                        <div className="text-xs text-muted-foreground">{following.username}</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Unfollow</Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
import { Trophy, TrendingUp, Copy, Users, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const topTraders = [
  {
    id: 1,
    name: "Alex Chen",
    username: "@alextrader",
    roi: 234.5,
    followers: 12500,
    winRate: 78,
    avatar: "/placeholder-avatar.jpg",
    rank: 1,
    isFollowing: false
  },
  {
    id: 2,
    name: "Sarah Moon",
    username: "@cryptosrah",
    roi: 189.2,
    followers: 8900,
    winRate: 82,
    avatar: "/placeholder-avatar.jpg",
    rank: 2,
    isFollowing: true
  },
  {
    id: 3,
    name: "Mike Bitcoin",
    username: "@mikebtc",
    roi: 156.8,
    followers: 15600,
    winRate: 71,
    avatar: "/placeholder-avatar.jpg",
    rank: 3,
    isFollowing: false
  }
];

export const TopTraders = () => {
  return (
    <Card className="bg-gradient-card border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <span className="text-lg font-semibold">Top Traders</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topTraders.map((trader) => (
            <div key={trader.id} className="flex items-center justify-between p-4 rounded-lg bg-background/30 border border-border/50">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={trader.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {trader.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-black">#{trader.rank}</span>
                  </div>
                </div>
                
                <div>
                  <div className="font-medium text-sm">{trader.name}</div>
                  <div className="text-xs text-muted-foreground">{trader.username}</div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      <Users className="h-3 w-3 mr-1" />
                      {trader.followers.toLocaleString()}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {trader.winRate}% Win
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span className="font-bold text-success">+{trader.roi}%</span>
                  </div>
                  <div className="text-xs text-muted-foreground">30d ROI</div>
                </div>

                <div className="flex space-x-1">
                  <Button
                    variant={trader.isFollowing ? "secondary" : "outline"}
                    size="sm"
                    className="h-8"
                  >
                    <Star className={`h-3 w-3 mr-1 ${trader.isFollowing ? 'fill-current' : ''}`} />
                    {trader.isFollowing ? "Following" : "Follow"}
                  </Button>
                  
                  <Button variant="outline" size="sm" className="h-8">
                    <Copy className="h-3 w-3 mr-1" />
                    Copy
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
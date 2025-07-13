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
    <Card className="bg-card brutalist-card border-border rounded-brutal">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-3">
          <Trophy className="h-6 w-6 text-yellow-500" />
          <span className="text-xl font-black">Top Traders</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topTraders.map((trader) => (
            <div key={trader.id} className="flex items-center justify-between p-5 rounded-brutal bg-gradient-to-r from-brutalist-green/20 to-brutalist-blue/20 border-thick border-border brutalist-shadow">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Avatar className="h-14 w-14 brutalist-shadow border-thick border-border">
                    <AvatarImage src={trader.avatar} />
                    <AvatarFallback className="bg-brutalist-pink text-foreground font-black text-lg">
                      {trader.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-brutal flex items-center justify-center border-thick border-foreground brutalist-shadow">
                    <span className="text-xs font-black text-black">#{trader.rank}</span>
                  </div>
                </div>
                
                <div>
                  <div className="font-black text-base">{trader.name}</div>
                  <div className="text-sm text-muted-foreground font-medium">{trader.username}</div>
                  <div className="flex items-center space-x-3 mt-2">
                    <Badge variant="outline" className="text-xs font-bold border-thick rounded-brutal">
                      <Users className="h-3 w-3 mr-1" />
                      {trader.followers.toLocaleString()}
                    </Badge>
                    <Badge variant="outline" className="text-xs font-bold border-thick rounded-brutal">
                      {trader.winRate}% Win
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-success" />
                    <span className="font-black text-success text-lg">+{trader.roi}%</span>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">30d ROI</div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant={trader.isFollowing ? "secondary" : "outline"}
                    size="sm"
                    className="h-10 font-bold border-thick rounded-brutal brutalist-shadow hover:brutalist-shadow"
                  >
                    <Star className={`h-4 w-4 mr-2 ${trader.isFollowing ? 'fill-current' : ''}`} />
                    {trader.isFollowing ? "Following" : "Follow"}
                  </Button>
                  
                  <Button variant="outline" size="sm" className="h-10 font-bold border-thick rounded-brutal brutalist-shadow hover:brutalist-shadow">
                    <Copy className="h-4 w-4 mr-2" />
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
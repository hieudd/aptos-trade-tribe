import { useState } from "react";
import { Trophy, TrendingUp, Copy, Users, Star, Search, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    isFollowing: false,
    profit: 45680,
    totalTrades: 156
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
    isFollowing: true,
    profit: 32100,
    totalTrades: 98
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
    isFollowing: false,
    profit: 28940,
    totalTrades: 203
  },
  {
    id: 4,
    name: "Elena Crypto",
    username: "@elenacrypto",
    roi: 145.3,
    followers: 6700,
    winRate: 75,
    avatar: "/placeholder-avatar.jpg",
    rank: 4,
    isFollowing: false,
    profit: 22560,
    totalTrades: 87
  },
  {
    id: 5,
    name: "David Whale",
    username: "@davidwhale",
    roi: 134.7,
    followers: 22100,
    winRate: 68,
    avatar: "/placeholder-avatar.jpg",
    rank: 5,
    isFollowing: true,
    profit: 19830,
    totalTrades: 134
  }
];

const TopTraders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("roi");

  const filteredTraders = topTraders.filter(trader =>
    trader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trader.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTraders = [...filteredTraders].sort((a, b) => {
    switch (sortBy) {
      case "roi":
        return b.roi - a.roi;
      case "followers":
        return b.followers - a.followers;
      case "winRate":
        return b.winRate - a.winRate;
      case "profit":
        return b.profit - a.profit;
      default:
        return 0;
    }
  });

  const TraderCard = ({ trader }: { trader: typeof topTraders[0] }) => (
    <Card className="bg-gradient-card border-border/50 hover:border-primary/20 transition-all duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src={trader.avatar} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {trader.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-black">#{trader.rank}</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">{trader.name}</h3>
              <p className="text-sm text-muted-foreground">{trader.username}</p>
              <div className="flex items-center space-x-2 mt-2">
                <Badge variant="outline" className="text-xs">
                  <Users className="h-3 w-3 mr-1" />
                  {trader.followers.toLocaleString()}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {trader.totalTrades} trades
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button
              variant={trader.isFollowing ? "secondary" : "outline"}
              size="sm"
            >
              <Star className={`h-4 w-4 mr-2 ${trader.isFollowing ? 'fill-current' : ''}`} />
              {trader.isFollowing ? "Following" : "Follow"}
            </Button>
            
            <Button variant="outline" size="sm">
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1">
              <TrendingUp className="h-4 w-4 text-success" />
              <span className="font-bold text-success">+{trader.roi}%</span>
            </div>
            <p className="text-xs text-muted-foreground">ROI</p>
          </div>
          
          <div className="text-center">
            <p className="font-bold">{trader.winRate}%</p>
            <p className="text-xs text-muted-foreground">Win Rate</p>
          </div>
          
          <div className="text-center">
            <p className="font-bold text-success">${trader.profit.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Profit</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
          Top Traders
        </h1>
        <p className="text-muted-foreground">
          Discover and follow the most successful traders on Axora
        </p>
      </div>

        {/* Search and Filter Bar */}
        <Card className="bg-gradient-card border-border/50 mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search traders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant={sortBy === "roi" ? "secondary" : "outline"}
                  onClick={() => setSortBy("roi")}
                  size="sm"
                >
                  ROI
                </Button>
                <Button
                  variant={sortBy === "followers" ? "secondary" : "outline"}
                  onClick={() => setSortBy("followers")}
                  size="sm"
                >
                  Followers
                </Button>
                <Button
                  variant={sortBy === "winRate" ? "secondary" : "outline"}
                  onClick={() => setSortBy("winRate")}
                  size="sm"
                >
                  Win Rate
                </Button>
                <Button
                  variant={sortBy === "profit" ? "secondary" : "outline"}
                  onClick={() => setSortBy("profit")}
                  size="sm"
                >
                  Profit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard Tabs */}
        <Tabs defaultValue="all-time" className="mb-6">
          <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-3">
            <TabsTrigger value="7d">7 Days</TabsTrigger>
            <TabsTrigger value="30d">30 Days</TabsTrigger>
            <TabsTrigger value="all-time">All Time</TabsTrigger>
          </TabsList>

          <TabsContent value="7d" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {sortedTraders.map((trader) => (
                <TraderCard key={trader.id} trader={trader} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="30d" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {sortedTraders.map((trader) => (
                <TraderCard key={trader.id} trader={trader} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all-time" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {sortedTraders.map((trader) => (
                <TraderCard key={trader.id} trader={trader} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
    </div>
  );
};

export default TopTraders;
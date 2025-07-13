import { Heart, MessageCircle, Share, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const feedPosts = [
  {
    id: 1,
    author: {
      name: "Alex Chen",
      username: "@alextrader",
      avatar: "/placeholder-avatar.jpg"
    },
    content: "Just closed my $APT position with +15% profit! The breakout above $12 resistance was textbook. Next target: $14.50 📈",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8,
    shares: 3,
    trade: {
      action: "SELL",
      token: "APT",
      profit: 15.2,
      amount: "$2,450"
    }
  },
  {
    id: 2,
    author: {
      name: "Sarah Moon",
      username: "@cryptosrah",
      avatar: "/placeholder-avatar.jpg"
    },
    content: "Market looking oversold here. Accumulating $BTC on this dip. DCA strategy in full effect 💪",
    timestamp: "4 hours ago",
    likes: 67,
    comments: 15,
    shares: 8,
    trade: {
      action: "BUY",
      token: "BTC",
      amount: "$5,000"
    }
  },
  {
    id: 3,
    author: {
      name: "Mike Bitcoin",
      username: "@mikebtc",
      avatar: "/placeholder-avatar.jpg"
    },
    content: "Web3 social trading is the future! Loving the transparency on @AptosTrader. Traditional finance could never 🚀",
    timestamp: "6 hours ago",
    likes: 89,
    comments: 23,
    shares: 12
  }
];

export const SocialFeed = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-black">Social Feed</h2>
      
      {feedPosts.map((post) => (
        <Card key={post.id} className="bg-card brutalist-card border-border rounded-brutal">
          <CardContent className="p-6">
            <div className="flex space-x-4">
              <Avatar className="h-12 w-12 brutalist-shadow border-thick border-border">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback className="bg-brutalist-orange text-foreground font-black">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="font-black text-base">{post.author.name}</span>
                  <span className="text-sm text-muted-foreground font-medium">{post.author.username}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground font-medium">{post.timestamp}</span>
                </div>
                
                <p className="text-sm mb-4 leading-relaxed font-medium">{post.content}</p>
                
                {post.trade && (
                  <div className="mb-4 p-4 rounded-brutal bg-gradient-to-r from-brutalist-purple/20 to-brutalist-pink/20 border-thick border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={post.trade.action === "BUY" ? "default" : "secondary"}
                          className={`font-black border-thick rounded-brutal ${post.trade.action === "BUY" ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground"}`}
                        >
                          {post.trade.action}
                        </Badge>
                        <span className="font-black text-base">{post.trade.token}</span>
                        <span className="text-sm text-muted-foreground font-medium">{post.trade.amount}</span>
                      </div>
                      
                      {post.trade.profit && (
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-success" />
                          <span className="text-base font-black text-success">+{post.trade.profit}%</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center space-x-6 text-muted-foreground">
                  <Button variant="ghost" size="sm" className="h-10 px-3 font-bold rounded-brutal border-thick border-transparent hover:border-border brutalist-shadow">
                    <Heart className="h-4 w-4 mr-2" />
                    <span className="text-sm">{post.likes}</span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="h-10 px-3 font-bold rounded-brutal border-thick border-transparent hover:border-border brutalist-shadow">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">{post.comments}</span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="h-10 px-3 font-bold rounded-brutal border-thick border-transparent hover:border-border brutalist-shadow">
                    <Share className="h-4 w-4 mr-2" />
                    <span className="text-sm">{post.shares}</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
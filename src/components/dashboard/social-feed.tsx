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
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Social Feed</h2>
      
      {feedPosts.map((post) => (
        <Card key={post.id} className="bg-gradient-card border-border/50">
          <CardContent className="p-4">
            <div className="flex space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-sm">{post.author.name}</span>
                  <span className="text-xs text-muted-foreground">{post.author.username}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                </div>
                
                <p className="text-sm mb-3 leading-relaxed">{post.content}</p>
                
                {post.trade && (
                  <div className="mb-3 p-3 rounded-lg bg-background/50 border border-border/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant={post.trade.action === "BUY" ? "default" : "secondary"}
                          className={post.trade.action === "BUY" ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground"}
                        >
                          {post.trade.action}
                        </Badge>
                        <span className="font-medium">{post.trade.token}</span>
                        <span className="text-sm text-muted-foreground">{post.trade.amount}</span>
                      </div>
                      
                      {post.trade.profit && (
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="h-4 w-4 text-success" />
                          <span className="text-sm font-medium text-success">+{post.trade.profit}%</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Heart className="h-4 w-4 mr-1" />
                    <span className="text-xs">{post.likes}</span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    <span className="text-xs">{post.comments}</span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Share className="h-4 w-4 mr-1" />
                    <span className="text-xs">{post.shares}</span>
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
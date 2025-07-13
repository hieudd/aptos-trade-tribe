import { Bell, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const Navbar = () => {
  return (
    <nav className="border-b-thick border-border bg-card brutalist-shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-brutal flex items-center justify-center brutalist-shadow border-thick border-foreground">
              <span className="text-primary-foreground font-black text-lg">A</span>
            </div>
            <span className="font-black text-3xl bg-gradient-primary bg-clip-text text-transparent">
              Axora
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search traders, tokens..."
              className="pl-10 bg-background border-thick border-border brutalist-shadow h-12 rounded-brutal font-medium"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="brutalist-shadow border-thick border-transparent hover:border-border rounded-brutal">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative brutalist-shadow border-thick border-transparent hover:border-border rounded-brutal">
            <Bell className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs font-black brutalist-shadow border-thick border-foreground"
            >
              3
            </Badge>
          </Button>

          <Avatar className="h-12 w-12 brutalist-shadow border-thick border-border">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-brutalist-pink text-foreground font-black text-lg">U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};
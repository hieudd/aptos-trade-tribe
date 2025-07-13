import { 
  Home, 
  TrendingUp, 
  Users, 
  Copy, 
  BarChart3, 
  Settings,
  Wallet,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Wallet, label: "Portfolio", href: "/portfolio" },
  { icon: Users, label: "Top Traders", href: "/traders" },
  { icon: TrendingUp, label: "Markets", href: "/markets" },
  { icon: Copy, label: "Copy Trading", href: "/copy" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: BookOpen, label: "Learn", href: "/learn" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

interface SidebarNavProps {
  isCollapsed?: boolean;
}

export const SidebarNav = ({ isCollapsed }: SidebarNavProps) => {
  const location = useLocation();

  return (
    <nav className="space-y-2 p-4">
      {navItems.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Button
            key={item.href}
            variant={isActive ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start h-12 transition-all duration-200",
              isActive && "bg-primary/10 text-primary border border-primary/20",
              isCollapsed && "px-2"
            )}
            asChild
          >
            <Link to={item.href}>
              <item.icon className={cn("h-5 w-5", isCollapsed ? "mx-0" : "mr-3")} />
              {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          </Button>
        );
      })}
    </nav>
  );
};
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

const navItems = [
  { icon: Home, label: "Dashboard", href: "/", isActive: true },
  { icon: TrendingUp, label: "Markets", href: "/markets" },
  { icon: Users, label: "Top Traders", href: "/traders" },
  { icon: Copy, label: "Copy Trading", href: "/copy" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Wallet, label: "Portfolio", href: "/portfolio" },
  { icon: BookOpen, label: "Learn", href: "/learn" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

interface SidebarNavProps {
  isCollapsed?: boolean;
}

export const SidebarNav = ({ isCollapsed }: SidebarNavProps) => {
  return (
    <nav className="space-y-2 p-4">
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant={item.isActive ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start h-12 transition-all duration-200",
            item.isActive && "bg-primary/10 text-primary border border-primary/20",
            isCollapsed && "px-2"
          )}
        >
          <item.icon className={cn("h-5 w-5", isCollapsed ? "mx-0" : "mr-3")} />
          {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
        </Button>
      ))}
    </nav>
  );
};
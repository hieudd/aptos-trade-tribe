import {
  Home,
  TrendingUp,
  Users,
  Copy,
  BarChart3,
  Settings,
  Wallet,
  User,
  Bell
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    icon: Wallet,
  },
  {
    title: "Top Traders",
    url: "/traders",
    icon: Users,
  },
  {
    title: "Copy Trading",
    url: "/copy-trading",
    icon: Copy,
  },
  {
    title: "Market Overview",
    url: "/market",
    icon: TrendingUp,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
];

const secondaryItems = [
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Sidebar className="border-r border-border bg-background/95 backdrop-blur-sm">
      <SidebarHeader className="p-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">A</span>
          </div>
          {!collapsed && (
            <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              Axora
            </span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-2">
            Trading
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className={cn(
                      "w-full justify-start transition-all duration-200 text-foreground hover:bg-primary/5 hover:text-primary",
                      isActive(item.url) && "bg-primary/10 text-primary border border-primary/20 shadow-sm"
                    )}
                  >
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-2">
            System
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {secondaryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className={cn(
                      "w-full justify-start transition-all duration-200 text-foreground hover:bg-primary/5 hover:text-primary",
                      isActive(item.url) && "bg-primary/10 text-primary border border-primary/20 shadow-sm"
                    )}
                  >
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border">
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full justify-start text-foreground hover:bg-primary/5 hover:text-primary transition-all duration-200"
        >
          <Bell className="h-4 w-4 mr-2" />
          {!collapsed && <span>Notifications</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
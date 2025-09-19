import { useState } from "react";
import { Home, BookOpen, Headphones, Briefcase, Trophy, Bot, BarChart3, Award, TrendingUp, Settings, ChevronDown, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const sidebarItems = [
  { title: "Home", url: "/", icon: Home },
  { 
    title: "Learning Module", 
    icon: BookOpen,
    subItems: [
      { title: "Grammar", url: "/modules/grammar-levels" },
      { title: "Communication", url: "/modules/communication-levels" },
      { title: "Vocabulary ", url: "/modules/vocabulary-levels" },
      { title: "Resume/Email", url: "/modules/pronunciation-levels" }
    ]
  },
  { title: "LSRW Module",
    icon: Headphones,
  subItems: [
      { title: "Listening", url: "/modules/grammar-levels" },
      { title: "Reading", url: "/modules/communication-levels" },
      { title: "Speaking", url: "/modules/vocabulary-levels" },
      { title: "Writing", url: "/modules/pronunciation-levels" }
    ] },
  { title: "Interview Toolkit", url: "/interview", icon: Briefcase },
  { title: "Daily Challenges", url: "/challenges", icon: Trophy },
  { title: "FluencyBot", url: "/fluencybot", icon: Bot },
  { title: "Leaderboard", url: "/leaderboard", icon: BarChart3 },
  { title: "Certificates & Badges", url: "/certificates", icon: Award },
  { title: "Progress Reports", url: "/progress", icon: TrendingUp },
  { title: "Settings & Profile", url: "/settings", icon: Settings },
];

export function VocaBeeSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const isActive = (path: string) => currentPath === path;
  const isSubItemActive = (subItems: any[]) => 
    subItems?.some(subItem => currentPath.startsWith(subItem.url));
  
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" : "hover:bg-muted/50 text-foreground";

  const toggleDropdown = (itemTitle: string) => {
    setOpenDropdowns(prev => 
      prev.includes(itemTitle) 
        ? prev.filter(title => title !== itemTitle)
        : [...prev, itemTitle]
    );
  };

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-sidebar-background">
        {/* Logo Header */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/vocabee-main-logo.png" alt="VocabBee" className="w-6 h-6" />
            </div>
            {!collapsed && (
              <span className="text-lg font-bold text-primary">VocabBee</span>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 p-2">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {(item as any).subItems ? (
                    <Collapsible 
                      open={openDropdowns.includes(item.title) || isSubItemActive((item as any).subItems)} 
                      onOpenChange={() => toggleDropdown(item.title)}
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton 
                          className={`flex items-center gap-3 p-3 rounded-lg transition-all w-full justify-between ${
                            isSubItemActive((item as any).subItems) 
                              ? "bg-primary/10 text-primary font-medium" 
                              : "hover:bg-muted/50 text-foreground"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="w-5 h-5 flex-shrink-0" />
                            {!collapsed && <span className="text-sm">{item.title}</span>}
                          </div>
                          {!collapsed && (
                            <ChevronDown 
                              className={`w-4 h-4 transition-transform ${
                                openDropdowns.includes(item.title) || isSubItemActive((item as any).subItems) ? "rotate-180" : ""
                              }`} 
                            />
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {(item as any).subItems.map((subItem: any) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <NavLink 
                                  to={subItem.url}
                                  className={({ isActive }) => `flex items-center gap-3 p-2 pl-10 rounded-lg transition-all text-sm ${getNavCls({ isActive })}`}
                                >
                                  {!collapsed && subItem.title}
                                </NavLink>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={(item as any).url} 
                        className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg transition-all ${getNavCls({ isActive })}`}
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        {!collapsed && <span className="text-sm">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
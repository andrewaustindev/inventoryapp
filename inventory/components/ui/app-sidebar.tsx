import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  Container, 
  UserCog,
  FileText,
  Settings
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items with icons
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Customers",
    url: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Inventory",
    url: "/dashboard/inventory",
    icon: GraduationCap,
  },
  {
    title: "Equipment",
    url: "/dashboard/equipment",
    icon: Container,
  },
  {
    title: "Staff",
    url: "/dashboard/staff",
    icon: UserCog,
  },
  {
    title: "Reports",
    url: "/dashboard/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={pathname === item.url}
                    className={`transition-colors duration-200 ${
                      pathname === item.url 
                        ? 'bg-accent' 
                        : 'hover:bg-accent'
                    }`}
                  >
                    <Link href={item.url} className="group">
                      <item.icon className={`h-4 w-4 transition-colors duration-200 ${
                        pathname === item.url 
                          ? 'text-foreground' 
                          : 'text-muted-foreground group-hover:text-foreground'
                      }`} />
                      <span className={`${
                        pathname === item.url 
                          ? 'font-medium text-foreground' 
                          : 'text-muted-foreground group-hover:text-foreground'
                      }`}>
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

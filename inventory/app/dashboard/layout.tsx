'use client'

import React from 'react';
import { UserButton } from "@clerk/nextjs";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from '@/components/ui/app-sidebar';
import { usePathname } from 'next/navigation';
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ModeToggle } from "@/components/themetoggle"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              {pathSegments.length > 1 && <BreadcrumbSeparator />}
              {pathSegments.slice(1).map((segment, index) => (
                <React.Fragment key={segment}>
                  <BreadcrumbItem>
                    {index === pathSegments.length - 2 ? (
                      <BreadcrumbPage>
                        {segment.split('-').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={`/dashboard/${segment}`}>
                        {segment.split('-').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < pathSegments.length - 2 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto flex items-center gap-4">
            <ModeToggle />  
            <UserButton />
          </div>
        </header>
        <div className="flex-1 overflow-auto">
          <main className="h-full w-full">
            <div className="p-6">
              {children}
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

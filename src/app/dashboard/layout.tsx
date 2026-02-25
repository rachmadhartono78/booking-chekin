"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  CalendarDays, 
  MapPin, 
  Users, 
  Settings, 
  LogOut, 
  CalendarCheck,
  ChevronRight,
  Bell
} from "lucide-react";
import { signOut } from "@/actions/auth";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Bookings", href: "/dashboard/bookings", icon: CalendarDays },
  { name: "Lokasi", href: "/dashboard/locations", icon: MapPin },
  { name: "Pengunjung", href: "/dashboard/users", icon: Users },
  { name: "Pengaturan", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 w-72 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 hidden lg:block">
        <div className="flex flex-col h-full">
          <div className="flex h-16 items-center px-6 border-b border-zinc-100 dark:border-zinc-800">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/20">
                <CalendarCheck className="h-5 w-5" />
              </div>
              Booking<span className="text-blue-600">Chekin</span>
            </Link>
          </div>

          <nav className="flex-1 space-y-1 px-4 py-6">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                    active 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25" 
                      : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${active ? "text-white" : "text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50"}`} />
                  {item.name}
                  {active && <ChevronRight className="ml-auto h-4 w-4" />}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
            <button 
              onClick={() => signOut()}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-red-600 transition-all hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
            >
              <LogOut className="h-5 w-5" />
              Keluar
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-72 flex flex-col flex-1">
        {/* Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-zinc-200 bg-white/80 px-6 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
          <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
            {navigation.find(n => n.href === pathname)?.name || "Dashboard"}
          </h1>

          <div className="flex items-center gap-4">
            <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 focus:outline-none">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>
            </button>
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border border-white dark:border-zinc-800"></div>
          </div>
        </header>

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

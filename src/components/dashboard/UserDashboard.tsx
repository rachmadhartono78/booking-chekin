import { 
  CalendarDays, 
  MapPin, 
  Clock, 
  ChevronRight,
  Plus
} from "lucide-react";
import Link from "next/link";

export default function UserDashboard() {
  const upcomingBookings = [
    { id: "BK-102", location: "Meeting Room A", date: "Besok, 10:00 AM", status: "Terkonfirmasi" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl shadow-blue-500/20">
        <h2 className="text-2xl font-bold">Halo, Selamat Datang! 👋</h2>
        <p className="mt-2 text-blue-100 opacity-90">Siap untuk produktif hari ini? Kamu punya 1 booking aktif.</p>
        <div className="mt-8">
            <Link 
                href="/dashboard/bookings"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-600 transition-all hover:bg-blue-50"
            >
                <Plus className="h-4 w-4" /> Buat Booking Baru
            </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Upcoming Booking */}
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-50">Booking Berikutnya</h3>
            <Link href="/dashboard/bookings" className="text-xs font-bold text-blue-600">Lihat Semua</Link>
          </div>
          
          {upcomingBookings.map((booking) => (
            <div key={booking.id} className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <CalendarDays className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-zinc-900 dark:text-zinc-50">{booking.location}</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-zinc-500">
                  <span className="flex items-center gap-1"><Clock className="h-3.3 w-3" /> {booking.date}</span>
                  <span className="flex items-center gap-1 font-bold text-green-600">{booking.status}</span>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-zinc-300" />
            </div>
          ))}
        </div>

        {/* Quick Actions / Help */}
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
          <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-6">Butuh Bantuan?</h3>
          <div className="space-y-4">
            <button className="flex w-full items-center gap-4 rounded-2xl border border-zinc-100 p-4 text-left transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-800/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <MapPin className="h-5 w-5 text-zinc-600" />
                </div>
                <div>
                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Cari Lokasi</p>
                    <p className="text-xs text-zinc-500">Lihat semua cabang yang tersedia.</p>
                </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

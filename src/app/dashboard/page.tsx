import { 
  Users, 
  CalendarCheck, 
  Clock, 
  ArrowUpRight, 
  MoreHorizontal, 
  Download,
  Filter
} from "lucide-react";

const stats = [
  { name: "Total Booking", value: "1,284", icon: CalendarCheck, change: "+12.5%", changeType: "increase" },
  { name: "Check-in Hari Ini", value: "48", icon: Users, change: "+3.2%", changeType: "increase" },
  { name: "Rata-rata Okupansi", value: "84%", icon: Clock, change: "-2.1%", changeType: "decrease" },
];

const recentBookings = [
  { id: "BK-001", user: "Rachmad Fauzi", email: "rach@example.com", time: "10:30 AM", status: "Checked-in", room: "Meeting Room A" },
  { id: "BK-002", user: "Siti Aminah", email: "siti@example.com", time: "11:15 AM", status: "Booking", room: "Coworking Space" },
  { id: "BK-003", user: "Andi Wijaya", email: "andi@example.com", time: "1:00 PM", status: "Booking", room: "Focus Pod 2" },
  { id: "BK-004", user: "Diana Putri", email: "diana@example.com", time: "2:30 PM", status: "Cancelled", room: "Meeting Room B" },
  { id: "BK-005", user: "Budi Santoso", email: "budi@example.com", time: "3:45 PM", status: "Booking", room: "Lounge Area" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-800">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                stat.changeType === "increase" ? "bg-green-50 text-green-600 dark:bg-green-900/20" : "bg-red-50 text-red-600 dark:bg-red-900/20"
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{stat.name}</p>
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Main Section */}
      <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 border-b border-zinc-100 dark:border-zinc-800 gap-4">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Booking Terbaru</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Pantau reservasi yang baru saja masuk ke sistem.</p>
          </div>
          <div className="flex items-center gap-3">
             <button className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800">
               <Filter className="h-4 w-4" /> Filter
             </button>
             <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700">
               <Download className="h-4 w-4" /> Export
             </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50">
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Lokasi</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Waktu</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-zinc-900 dark:text-zinc-50">{booking.user}</div>
                        <div className="text-xs text-zinc-500">{booking.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">{booking.room}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">{booking.time}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                      booking.status === "Checked-in" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                      booking.status === "Cancelled" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                      <MoreHorizontal className="h-4 w-4 text-zinc-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-zinc-100 dark:border-zinc-800">
          <button className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-500 transition-colors">
            Lihat semua booking <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

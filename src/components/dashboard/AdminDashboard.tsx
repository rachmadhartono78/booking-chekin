import { 
  Users, 
  CalendarCheck, 
  Clock, 
  ArrowUpRight, 
  MoreHorizontal, 
  Download,
  Filter,
  QrCode
} from "lucide-react";

const stats = [
  { name: "Total Booking", value: "1,284", icon: CalendarCheck, change: "+12.5%", changeType: "increase" },
  { name: "Check-in Hari Ini", value: "48", icon: Users, change: "+3.2%", changeType: "increase" },
  { name: "Pendapatan Bulan Ini", value: "Rp 12.5jt", icon: QrCode, change: "+5.4%", changeType: "increase" },
];

const recentBookings = [
  { id: "BK-001", user: "Rachmad Fauzi", email: "rach@example.com", time: "10:30 AM", status: "Checked-in", room: "Meeting Room A" },
  { id: "BK-002", user: "Siti Aminah", email: "siti@example.com", time: "11:15 AM", status: "Booking", room: "Coworking Space" },
  { id: "BK-003", user: "Andi Wijaya", email: "andi@example.com", time: "1:00 PM", status: "Booking", room: "Focus Pod 2" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Action Header */}
      <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Ikhtisar Bisnis</h2>
          <button className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900">
              <QrCode className="h-4 w-4" /> Buka Scanner QR
          </button>
      </div>

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

      {/* Bookings Table */}
      <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-zinc-100 dark:border-zinc-800">
          <h2 className="text-lg font-bold">Booking Terbaru</h2>
          <button className="p-2 rounded-lg hover:bg-zinc-50"><Filter className="h-4 w-4 text-zinc-400" /></button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50">
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase">Customer</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {recentBookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold">{booking.user}</div>
                    <div className="text-xs text-zinc-500">{booking.room}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700">
                        {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button><MoreHorizontal className="h-4 w-4 text-zinc-400" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

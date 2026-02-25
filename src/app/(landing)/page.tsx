import { Calendar, CheckCircle2, MapPin, UserCheck, Bell, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium dark:bg-zinc-800">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              Sistem Booking & Check-in Modern
            </div>
            
            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl">
              Kelola <span className="text-blue-600">Booking</span> & <span className="text-zinc-500">Check-in</span> Tanpa Ribet
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
              Solusi all-in-one untuk manajemen reservasi, kehadiran, dan pelaporan yang efisien. Dirancang untuk kecepatan dan kemudahan penggunaan.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link 
                href="/dashboard" 
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                Mulai Sekarang <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                href="#features" 
                className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-200 bg-white px-8 text-base font-semibold transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 active:scale-95"
              >
                Lihat Fitur
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Blur Effects */}
        <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard 
              icon={<Calendar className="h-6 w-6 text-blue-600" />}
              title="Reservasi Cepat"
              description="Proses booking yang intuitif dan cepat hanya dengan beberapa klik."
            />
            <FeatureCard 
              icon={<UserCheck className="h-6 w-6 text-green-600" />}
              title="Sistem Check-in Digital"
              description="Check-in pengunjung dengan mudah melalui dashboard atau scan QR."
            />
            <FeatureCard 
              icon={<Bell className="h-6 w-6 text-orange-600" />}
              title="Notifikasi Real-time"
              description="Dapatkan pemberitahuan instan untuk setiap booking dan kehadiran baru."
            />
            <FeatureCard 
              icon={<MapPin className="h-6 w-6 text-red-600" />}
              title="Manajemen Lokasi"
              description="Kelola berbagai titik lokasi atau ruangan dalam satu platform terpusat."
            />
            <FeatureCard 
              icon={<CheckCircle2 className="h-6 w-6 text-purple-600" />}
              title="Verifikasi Otomatis"
              description="Sistem validasi otomatis untuk mencegah kesalahan data reservasi."
            />
            <FeatureCard 
              icon={<div className="flex -space-x-1 font-bold text-zinc-400">?</div>}
              title="Laporan Detail"
              description="Analisis data booking dan tingkat kehadiran dengan dashboard visual."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-12 dark:border-zinc-800">
        <div className="container mx-auto px-6 text-center text-zinc-500">
          <p>© {new Date().getFullYear()} Booking-Chekin. Build with Next.js & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-blue-500/50 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-900 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-bold">{title}</h3>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}

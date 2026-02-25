import { MapPin, Plus } from "lucide-react";

export default function LocationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Manajemen Lokasi</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Tambahkan atau edit cabang dan lokasi bisnis Anda.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-700 shadow-lg shadow-blue-500/20">
          <Plus className="h-4 w-4" /> Tambah Lokasi
        </button>
      </div>

      <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-zinc-200 bg-white py-24 text-center dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800">
          <MapPin className="h-8 w-8 text-zinc-400" />
        </div>
        <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-zinc-50">Belum ada lokasi terdaftar</h3>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">
          Daftarkan lokasi atau ruangan yang bisa di-booking oleh pelanggan Anda di sini.
        </p>
      </div>
    </div>
  );
}

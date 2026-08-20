import { Activity, Camera, CarFront, MapPin } from "lucide-react";
import { liveVehicles } from "../data/mockData";
import StatusBadge from "../components/StatusBadge";

export default function Live() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">

      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            LIVE MONITORING
          </div>

          <h1 className="mt-2 text-3xl font-bold dark:text-white">
            Parking Control Room
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Real-time vehicle activity from connected camera zones.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-400">
          <Activity size={15} />
          SYSTEM ONLINE
        </div>

      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">

        {/* CAMERA VIEW */}
        <div className="overflow-hidden rounded-3xl bg-slate-950 shadow-xl">

          <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-slate-900 p-2 text-slate-400">
                <Camera size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Camera 01
                </p>

                <p className="text-xs text-slate-500">
                  Main Entrance
                </p>
              </div>
            </div>

            <span className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              LIVE
            </span>
          </div>

          {/* Fake camera screen */}
          <div className="relative flex min-h-[420px] items-center justify-center bg-gradient-to-br from-slate-800 via-slate-950 to-slate-900">

            <div className="absolute inset-0 opacity-10">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative text-center">
              <Camera size={55} className="mx-auto text-slate-600" />

              <p className="mt-4 font-semibold text-slate-400">
                CCTV LIVE FEED
              </p>

              <p className="mt-1 text-xs text-slate-600">
                Camera stream placeholder
              </p>
            </div>

            <div className="absolute left-5 top-5 rounded-lg bg-black/60 px-3 py-2 font-mono text-xs text-white">
              CAM-01 • 12:04:21
            </div>

            <div className="absolute bottom-5 right-5 rounded-lg bg-black/60 px-3 py-2 text-xs text-slate-300">
              Zone A
            </div>

          </div>
        </div>

        {/* VEHICLE EVENTS */}
        <div className="rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          <div className="border-b border-slate-200 px-5 py-5 dark:border-slate-800">
            <h2 className="font-bold dark:text-white">
              Live Vehicle Events
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Latest detected activity
            </p>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">

            {liveVehicles.map((vehicle) => (
              <div key={vehicle.id} className="p-5">

                <div className="flex items-start justify-between">

                  <div className="flex gap-3">
                    <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">
                      <CarFront size={20} className="text-slate-500" />
                    </div>

                    <div>
                      <p className="font-mono text-sm font-bold dark:text-white">
                        {vehicle.plate}
                      </p>

                      <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                        <MapPin size={12} />
                        {vehicle.zone}
                      </p>
                    </div>
                  </div>

                  <StatusBadge status={vehicle.status} />

                </div>

                <div className="mt-4 text-right font-mono text-[10px] text-slate-400">
                  {vehicle.time}
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
import {
  CarFront,
  Clock3,
  AlertTriangle,
  CircleParking,
} from "lucide-react";

import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { vehicles } from "../data/mockData";

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">

      <div className="mb-8">
        <p className="text-sm font-semibold text-emerald-600">
          CIVIPARK / DASHBOARD
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight dark:text-white">
          Parking Overview
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Monitor vehicles, parking sessions and violations.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <StatCard
          title="Total Vehicles"
          value="179"
          subtitle="Today"
          icon={CarFront}
        />

        <StatCard
          title="Currently Parked"
          value="48"
          subtitle="Inside parking"
          icon={CircleParking}
        />

        <StatCard
          title="Avg. Duration"
          value="2.1h"
          subtitle="Today"
          icon={Clock3}
          iconColor="text-blue-600"
        />

        <StatCard
          title="Violations"
          value="03"
          subtitle="Needs review"
          icon={AlertTriangle}
          iconColor="text-red-600"
        />

      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

        <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
          <h2 className="font-bold dark:text-white">
            Vehicle Records
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Entry, exit and current parking status
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">

            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500 dark:bg-slate-950">
              <tr>
                <th className="px-6 py-4">Vehicle</th>
                <th className="px-6 py-4">Plate No.</th>
                <th className="px-6 py-4">Entry</th>
                <th className="px-6 py-4">Exit</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Zone</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">

              {vehicles.map((vehicle) => (
                <tr
                  key={vehicle.id}
                  className="transition hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <td className="px-6 py-4 font-medium dark:text-white">
                    {vehicle.type}
                  </td>

                  <td className="px-6 py-4 font-mono text-xs">
                    {vehicle.plate}
                  </td>

                  <td className="px-6 py-4 text-slate-500">
                    {vehicle.entry}
                  </td>

                  <td className="px-6 py-4 text-slate-500">
                    {vehicle.exit}
                  </td>

                  <td className="px-6 py-4 text-slate-500">
                    {vehicle.duration}
                  </td>

                  <td className="px-6 py-4 font-medium">
                    {vehicle.zone}
                  </td>

                  <td className="px-6 py-4">
                    <StatusBadge status={vehicle.status} />
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
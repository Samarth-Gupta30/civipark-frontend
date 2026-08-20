import { useState } from "react";
import {
  ShieldCheck,
  Camera,
  BrainCircuit,
  Database,
  LogIn,
  LogOut,
} from "lucide-react";

export default function About() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8">

      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

        {/* About */}
        <div>

          <div className="mb-5 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
            ABOUT CIVIPARK
          </div>

          <h1 className="text-4xl font-bold tracking-tight dark:text-white">
            Smarter parking from
            <span className="text-emerald-600"> existing infrastructure.</span>
          </h1>

          <p className="mt-5 max-w-xl leading-7 text-slate-500">
            CiviPark transforms compatible CCTV/NVR footage into useful
            parking events by detecting and tracking vehicles, identifying
            entry and exit, managing parking records and highlighting
            predefined violations.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <MiniFeature icon={Camera} title="CCTV" />
            <MiniFeature icon={BrainCircuit} title="AI Vision" />
            <MiniFeature icon={Database} title="Central Data" />

          </div>
        </div>

        {/* Login */}
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl dark:border-slate-800 dark:bg-slate-900">

          {!loggedIn ? (
            <>
              <div className="mb-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950">
                  <ShieldCheck size={23} />
                </div>

                <h2 className="text-2xl font-bold dark:text-white">
                  Operator Login
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Access the CiviPark monitoring system.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLoggedIn(true);
                }}
                className="space-y-5"
              >

                <div>
                  <label className="mb-2 block text-sm font-semibold dark:text-slate-200">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="operator@civipark.in"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold dark:text-slate-200">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="••••••••"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white transition hover:bg-emerald-500"
                >
                  <LogIn size={17} />
                  Login
                </button>

              </form>
            </>
          ) : (
            <div className="text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950">
                <ShieldCheck size={30} />
              </div>

              <h2 className="mt-5 text-2xl font-bold dark:text-white">
                Operator Active
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                You are currently logged into the CiviPark console.
              </p>

              <button
                onClick={() => setLoggedIn(false)}
                className="mt-7 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <LogOut size={17} />
                Logout
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

function MiniFeature({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <Icon size={19} className="text-emerald-600" />
      <span className="text-sm font-semibold dark:text-white">
        {title}
      </span>
    </div>
  );
}
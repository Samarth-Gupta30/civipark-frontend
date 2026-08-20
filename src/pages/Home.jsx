import {
  Car,
  CarFront,
  AlertTriangle,
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock3,
  Eye,
  MapPin,
  Radio,
} from "lucide-react";

import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f7f3] text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="border-b border-emerald-100 bg-[#e8f3e7] dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">CiviPark / Student Project</p>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">A simple way to see what is happening in the parking lot.</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">This home screen uses CCTV data to show occupied spaces, open spots and parking issues at a glance.</p>
            </div>
            <Link to="/live" className="inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 dark:bg-emerald-500 dark:text-slate-950">
              <Radio size={17} /> Open live view <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <QuickStat label="Occupied" value="48 / 80" color="text-emerald-700" />
            <QuickStat label="Free spaces" value="32" color="text-blue-700" />
            <QuickStat label="Needs checking" value="03" color="text-red-700" />
            <QuickStat label="Last update" value="12:04 PM" color="text-slate-700" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400">Live layout</p>
            <h2 className="mt-1 text-3xl font-black tracking-tight dark:text-white">Parking Zone A</h2>
            <p className="mt-1 text-sm text-slate-500">Main college gate parking · 80 total spaces · updated a few seconds ago</p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-2 text-xs font-bold text-emerald-700 dark:border-emerald-900 dark:bg-slate-900 dark:text-emerald-400"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Camera feed connected</span>
        </div>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex items-center justify-between border-b border-dashed border-slate-200 pb-4 dark:border-slate-700">
              <div className="flex items-center gap-2 text-sm font-bold"><MapPin size={17} className="text-emerald-600" /> Entry side <span className="text-slate-400">→</span> Exit side</div>
              <span className="text-xs text-slate-500">12 spaces shown</span>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              <ParkingSlot label="A-01" status="parked" plate="DL01AB" />
              <ParkingSlot label="A-02" status="empty" />
              <ParkingSlot label="A-03" status="parked" plate="KA05GH" />
              <ParkingSlot label="A-04" status="wrong" plate="UP32EF" />
              <ParkingSlot label="A-05" status="empty" />
              <ParkingSlot label="A-06" status="parked" plate="MH12CD" />
              <ParkingSlot label="A-07" status="parked" plate="RJ14JK" />
              <ParkingSlot label="A-08" status="empty" />
              <ParkingSlot label="A-09" status="parked" plate="GJ08LM" />
              <ParkingSlot label="A-10" status="empty" />
              <ParkingSlot label="A-11" status="parked" plate="TN22PQ" />
              <ParkingSlot label="A-12" status="wrong" plate="HR26XY" />
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 dark:border-slate-800"><Legend color="bg-emerald-500" label="Parked" /><Legend color="bg-blue-500" label="Available" /><Legend color="bg-red-500" label="Wrong parking" /></div>
          </div>

          <aside className="space-y-4">
            <InfoPanel icon={Camera} title="Camera details"><InfoRow label="Source" value="CCTV-01" /><InfoRow label="Location" value="Main gate" /><InfoRow label="Confidence" value="94%" /><InfoRow label="Frame rate" value="15 FPS" /></InfoPanel>
            <InfoPanel icon={Eye} title="Zone summary"><SummaryRow label="Parking rate" value="60%" /><SummaryRow label="Open now" value="32 slots" /><SummaryRow label="Alerts" value="03" danger /></InfoPanel>
          </aside>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400">At the end of the page</p><h2 className="mt-1 text-2xl font-black dark:text-white">What the system noticed</h2></div><Clock3 size={22} className="text-slate-400" /></div>
            <div className="space-y-4"><Activity icon={CheckCircle2} tone="green" title="Vehicle parked correctly" detail="DL01AB1234 · Space A-01" time="12:04:21" /><Activity icon={AlertTriangle} tone="red" title="Parking line crossed" detail="UP32EF9012 · Space A-04" time="12:04:17" /><Activity icon={CarFront} tone="blue" title="Space became available" detail="A-02 · Exit detected" time="12:03:58" /></div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white dark:border-slate-700"><p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">Our idea</p><h2 className="mt-2 text-2xl font-black">Built for a real campus problem.</h2><p className="mt-3 text-sm leading-6 text-slate-300">We designed CiviPark as a working college prototype: readable numbers, quick alerts and a layout that an operator can understand without training.</p><Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300">See how it works <ArrowRight size={16} /></Link></div>
        </section>
      </div>
    </div>
  );
}

function QuickStat({ label, value, color }) {
  return <div className="rounded-xl border border-emerald-100 bg-white/70 p-4 dark:border-slate-700 dark:bg-slate-900"><p className="text-xs font-semibold text-slate-500">{label}</p><p className={`mt-1 text-xl font-black ${color} dark:text-white`}>{value}</p></div>;
}

function ParkingSlot({ label, status, plate }) {
  const styles = {
    parked: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-400",
    empty: "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-400",
    wrong: "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/50 dark:text-red-400",
  };

  return <div className={`flex min-h-32 flex-col justify-between rounded-xl border-2 p-3 ${styles[status]}`}><div className="flex items-center justify-between"><span className="text-xs font-black">{label}</span><span className="h-2 w-2 rounded-full bg-current" /></div><Car size={34} className="mx-auto" /><span className="text-center text-[10px] font-bold">{plate || (status === "empty" ? "Available" : "Reading plate...")}</span></div>;
}

function Legend({ color, label }) {
  return <span className="inline-flex items-center gap-2"><span className={`h-2.5 w-2.5 rounded-full ${color}`} />{label}</span>;
}

function InfoPanel({ icon: Icon, title, children }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"><h3 className="mb-4 flex items-center gap-2 text-sm font-black"><Icon size={17} className="text-emerald-600" />{title}</h3><div className="space-y-3">{children}</div></div>;
}

function InfoRow({ label, value }) {
  return <div className="flex justify-between text-sm"><span className="text-slate-500">{label}</span><span className="font-bold dark:text-slate-200">{value}</span></div>;
}

function SummaryRow({ label, value, danger }) {
  return <div className="flex justify-between text-sm"><span className="text-slate-500">{label}</span><span className={`font-black ${danger ? "text-red-600" : "text-emerald-700 dark:text-emerald-400"}`}>{value}</span></div>;
}

function Activity({ icon: Icon, tone, title, detail, time }) {
  const colors = { green: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950", red: "bg-red-50 text-red-600 dark:bg-red-950", blue: "bg-blue-50 text-blue-600 dark:bg-blue-950" };
  return <div className="flex items-center gap-3"><div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${colors[tone]}`}><Icon size={18} /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold dark:text-white">{title}</p><p className="text-xs text-slate-500">{detail}</p></div><span className="text-xs font-semibold text-slate-400">{time}</span></div>;
}
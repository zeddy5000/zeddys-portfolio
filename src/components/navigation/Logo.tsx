import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
        ZI
      </div>

      <div>
        <p className="font-semibold text-white">
          Zeddy Isu
        </p>

        <p className="text-xs text-slate-400">
          Software Engineer
        </p>
      </div>
    </Link>
  );
}
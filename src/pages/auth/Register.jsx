import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-2xl bg-white p-10 shadow-lg">
        <h1 className="text-2xl font-bold text-slate-900">
          Halaman Register
        </h1>

        <p className="mt-2 text-slate-500">
          Form pendaftaran akan dibuat pada tahap berikutnya.
        </p>

        <Link
          to="/login"
          className="mt-6 inline-block rounded-lg bg-blue-700 px-5 py-3 text-white"
        >
          Kembali ke Login
        </Link>
      </div>
    </div>
  );
}
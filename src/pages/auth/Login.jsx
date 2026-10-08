import { useState } from "react";
import { Link } from "react-router-dom";
import logoFmipa from "webPengaduanFMIPA/src/assets/logo_fmipa.png";
import loginBg from "webPengaduanFMIPA/src/assets/login-bg.jpg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Data Login:", formData);

    // Nanti bagian ini dihubungkan ke Laravel API.
  };

  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-8 lg:p-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[28px] bg-white shadow-2xl md:grid-cols-2">

          {/* ================= LEFT SECTION ================= */}
          <div
            className="relative hidden min-h-[680px] overflow-hidden md:block"
            style={{
              backgroundImage: `url(${loginBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/75 via-cyan-500/70 to-blue-700/75" />

            {/* Decorative circles */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

            <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-white/10" />

            {/* Left content */}
            <div className="relative z-10 flex h-full min-h-[680px] flex-col justify-between p-10 lg:p-14">
              <div>
                <div className="mb-6 inline-flex rounded-2xl bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  Universitas Udayana
                </div>

                <h1 className="max-w-lg text-4xl font-bold leading-tight text-white lg:text-5xl">
                  FMIPA
                  <br />
                  Facility Care
                </h1>

                <p className="mt-5 max-w-md text-base leading-7 text-white/90">
                  Sistem informasi pengaduan dan monitoring fasilitas Dekanat
                  Fakultas Matematika dan Ilmu Pengetahuan Alam.
                </p>
              </div>

              <div>
                <p className="text-sm leading-6 text-white/80">
                  Laporkan masalah fasilitas dengan lebih cepat, mudah, dan
                  terdokumentasi.
                </p>

                <div className="mt-6 flex items-center gap-2">
                  <span className="h-2 w-10 rounded-full bg-white" />
                  <span className="h-2 w-2 rounded-full bg-white/50" />
                  <span className="h-2 w-2 rounded-full bg-white/50" />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <div className="flex min-h-[650px] items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
            <div className="w-full max-w-md">

              {/* Logo */}
              <div className="mb-9">
                <div className="flex items-center gap-4">
                  <img
                    src={logoFmipa}
                    alt="Logo FMIPA Universitas Udayana"
                    className="h-16 w-16 object-contain"
                  />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                      FMIPA UNUD
                    </p>

                    <h2 className="text-lg font-bold text-slate-800">
                      Facility Care
                    </h2>
                  </div>
                </div>
              </div>

              {/* Heading */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Selamat datang kembali
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Masuk menggunakan akun Anda untuk membuat dan memantau
                  pengaduan fasilitas.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Email / NIM */}
                <div>
                  <label
                    htmlFor="identifier"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email / NIM / NIP
                  </label>

                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                      <svg
                        className="h-5 w-5 text-slate-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 21a8 8 0 0 0-16 0" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>

                    <input
                      id="identifier"
                      name="identifier"
                      type="text"
                      value={formData.identifier}
                      onChange={handleChange}
                      placeholder="Masukkan email, NIM, atau NIP"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs font-semibold text-blue-600 transition hover:text-blue-800"
                    >
                      Lupa password?
                    </button>
                  </div>

                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                      <svg
                        className="h-5 w-5 text-slate-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="3" y="11" width="18" height="10" rx="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Masukkan password"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 transition hover:text-blue-600"
                      aria-label={
                        showPassword
                          ? "Sembunyikan password"
                          : "Tampilkan password"
                      }
                    >
                      {showPassword ? (
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M3 3l18 18" />
                          <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                          <path d="M9.9 4.2A10.6 10.6 0 0 1 12 4c5.5 0 9 8 9 8a15.5 15.5 0 0 1-2.1 3.2" />
                          <path d="M6.6 6.6C4.4 8.1 3 12 3 12s3.5 8 9 8a8.8 8.8 0 0 0 3-.5" />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember */}
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />

                  <span className="text-sm text-slate-600">
                    Ingat saya
                  </span>
                </label>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  Masuk
                </button>
              </form>

              {/* Register */}
              <p className="mt-8 text-center text-sm text-slate-500">
                Belum memiliki akun?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  Daftar sekarang
                </Link>
              </p>

              <div className="mt-10 border-t border-slate-100 pt-6 text-center">
                <p className="text-xs leading-5 text-slate-400">
                  © 2026 FMIPA Facility Care
                  <br />
                  Fakultas Matematika dan Ilmu Pengetahuan Alam
                  Universitas Udayana
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
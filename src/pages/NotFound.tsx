import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="text-center p-10 rounded-2xl border border-white/10 bg-card/60 backdrop-blur shadow-sm animate-card">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl">🚧</div>
        <h1 className="mt-4 text-4xl font-bold">404</h1>
        <p className="mt-2 text-gray-600">Page not found. The link may be broken or the page may have moved.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/" className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary via-sky-600 to-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]">Go Home</Link>
          <Link to="/events" className="rounded-md border px-4 py-2">Browse Events</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

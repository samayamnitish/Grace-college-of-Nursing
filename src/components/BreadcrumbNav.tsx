import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbNavProps {
  title: string;
  subtitle?: string;
  items: BreadcrumbItem[];
  badge?: string;
}

export default function BreadcrumbNav({ title, subtitle, items, badge }: BreadcrumbNavProps) {
  return (
    <div className="relative bg-gradient-to-r from-nursing-navy via-[#0d3156] to-nursing-green text-white pt-36 pb-16 px-4 sm:px-8 overflow-hidden">
      {/* Subtle background ornament */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-college-green/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-college-gold/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        {/* Breadcrumb links */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-4 font-medium flex-wrap">
          <Link to="/" className="hover:text-college-gold transition-colors flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {item.path ? (
                <Link to={item.path} className="hover:text-college-gold transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-college-gold font-bold">{item.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Title and subtitle */}
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-block bg-white/15 border border-white/25 text-college-gold font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider mb-3">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight leading-tight mb-3 drop-shadow-sm">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

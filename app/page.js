export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Our Products</h2>
        
        {/* Grid Container with Original Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Card Component Structure */}
          {[
            { title: "Anti Slip Tapes", link: "/blog/anti-slip-tape-supplier-abu-dhabi" },
            { title: "Traffic Cones and Barriers", link: "/blog/traffic-safety-cones-abu-dhabi" },
            { title: "First Aid Boxes and Kits", link: "/blog/first-aid-box-supplier-abu-dhabi" },
            { title: "PPE Equipment", link: "/blog/ppe-safety-helmet-vest-abu-dhabi" },
            { title: "Heavy Duty Wheel Chocks", link: "/blog/heavy-duty-wheel-chocks-abu-dhabi" },
            { title: "Safety Warning Flags", link: "/blog/safety-warning-flags-abu-dhabi" },
            { title: "Industrial Convex Mirrors", link: "/blog/industrial-convex-mirrors-abu-dhabi" },
            { title: "Industrial Safety Shoes", link: "/blog/industrial-safety-shoes-abu-dhabi" },
            { title: "Reflective Safety Vests", link: "/blog/reflective-safety-vests-abu-dhabi" },
            { title: "Safety Harness & Gear", link: "/blog/safety-harness-fall-protection-abu-dhabi" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:border-amber-400 transition-all duration-300">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mt-1 mb-3">{item.title}</h4>
              </div>
              <a href={item.link} className="text-sm font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 transition">
                Explore Range and Specifications →
              </a>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}

export default function Home() {
  const products = [
    { title: "Anti Slip Tapes", category: "SITE UTILITIES", link: "/blog/anti-slip-tape-supplier-abu-dhabi" },
    { title: "Traffic Cones & Barriers", category: "TRAFFIC MANAGEMENT", link: "/blog/traffic-safety-cones-abu-dhabi" },
    { title: "First Aid Boxes & Kits", category: "EMERGENCY CARE", link: "/blog/first-aid-box-supplier-abu-dhabi" },
    { title: "PPE Equipment", category: "PERSONAL PROTECTION", link: "/blog/ppe-safety-helmet-vest-abu-dhabi" },
    { title: "Heavy Duty Wheel Chocks", category: "WAREHOUSE AND FLEET", link: "/blog/heavy-duty-wheel-chocks-abu-dhabi" },
    { title: "Safety Warning Flags", category: "SITE VISIBILITY", link: "/blog/safety-warning-flags-abu-dhabi" },
    { title: "Industrial Convex Mirrors", category: "SITE SURVEILLANCE", link: "/blog/industrial-convex-mirrors-abu-dhabi" },
    { title: "Industrial Safety Shoes", category: "WORKFORCE SAFETY", link: "/blog/industrial-safety-shoes-abu-dhabi" },
    { title: "Reflective Safety Vests", category: "HIGH-VIS APPAREL", link: "/blog/reflective-safety-vests-abu-dhabi" },
    { title: "Safety Harness & Gear", category: "FALL PROTECTION", link: "/blog/safety-harness-fall-protection-abu-dhabi" }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-black text-slate-900 mb-12 text-center tracking-tight">Our Comprehensive Safety Range</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <span className="text-[10px] font-bold text-amber-600 tracking-widest uppercase">{item.category}</span>
              <h4 className="text-xl font-black text-slate-900 mt-2 mb-4">{item.title}</h4>
              <a href={item.link} className="text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1">
                Explore Product Details →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

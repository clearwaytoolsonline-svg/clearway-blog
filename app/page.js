export default function Home() {
  const products = [
    { title: "Anti Slip Tapes", cat: "SITE UTILITIES", link: "/blog/anti-slip-tape-supplier-abu-dhabi" },
    { title: "Traffic Cones & Barriers", cat: "TRAFFIC MANAGEMENT", link: "/blog/traffic-safety-cones-abu-dhabi" },
    { title: "First Aid Boxes & Kits", cat: "EMERGENCY CARE", link: "/blog/first-aid-box-supplier-abu-dhabi" },
    { title: "PPE Equipment", cat: "PERSONAL PROTECTION", link: "/blog/ppe-safety-helmet-vest-abu-dhabi" },
    { title: "Heavy Duty Wheel Chocks", cat: "WAREHOUSE AND FLEET", link: "/blog/heavy-duty-wheel-chocks-abu-dhabi" },
    { title: "Safety Warning Flags", cat: "SITE VISIBILITY", link: "/blog/safety-warning-flags-abu-dhabi" },
    { title: "Industrial Convex Mirrors", cat: "SITE SURVEILLANCE", link: "/blog/industrial-convex-mirrors-abu-dhabi" },
    { title: "Industrial Safety Shoes", cat: "WORKFORCE SAFETY", link: "/blog/industrial-safety-shoes-abu-dhabi" },
    { title: "Reflective Safety Vests", cat: "HIGH-VIS APPAREL", link: "/blog/reflective-safety-vests-abu-dhabi" },
    { title: "Safety Harness & Gear", cat: "FALL PROTECTION", link: "/blog/safety-harness-fall-protection-abu-dhabi" },
    { title: "Fire Safety & Blankets", cat: "FIRE SAFETY", link: "/blog/fire-safety-equipment-abu-dhabi" }
  ];

  const whatsappLink = "https://wa.me/971561080825";

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Header & Top Bar */}
      <header className="bg-white border-b">
        <div className="bg-amber-400 text-center py-1 text-sm font-bold">Leading Wholesale & Retail Safety Equipment Supplier across Abu Dhabi & UAE</div>
        <div className="max-w-7xl mx-auto p-6 flex justify-between items-center">
          <div className="font-black text-2xl text-slate-800">CLEARWAY <span className="text-amber-500">SAFETY</span></div>
          <nav className="flex gap-6 font-bold">
            <a href="#">Our Products</a>
            <a href="#">Why Choose Us</a>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-4 py-2 rounded font-bold hover:bg-emerald-700 transition flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.591 5.52 0 10.016-4.496 10.016-10.016 0-5.52-4.496-10.016-10.016-10.016-5.52 0-10.016 4.496-10.016 10.016 0 2.052.569 3.864 1.531 5.567l-1.011 3.693 3.738-.979z"/></svg>
            WhatsApp
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="bg-slate-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-black mb-4">Premium Industrial Safety Products & PPE</h1>
        <p className="text-xl mb-8">Wholesale & Retail Supplier in Abu Dhabi</p>
        <button className="bg-amber-500 text-black font-bold px-8 py-3 rounded">Explore 5000+ Safety Products</button>
      </section>

      {/* 3. Features Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 border rounded shadow-sm"><strong>Safety Shop In Mussafah-Abudhabi</strong></div>
        <div className="bg-white p-6 border rounded shadow-sm"><strong>Best Safety Equipments Supplier In Mussafah-Abudhabi</strong></div>
        <div className="bg-white p-6 border rounded shadow-sm"><strong>PPE Store In Mussafah-Abudhabi</strong></div>
      </section>

      {/* 4. Product Range Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Our Comprehensive Safety Range</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <div key={index} className="bg-white p-6 border rounded shadow-sm hover:shadow-md transition">
              <span className="text-xs text-amber-600 font-bold tracking-wider">{item.cat}</span>
              <h3 className="font-bold text-lg mt-1 mb-3">{item.title}</h3>
              <a href={item.link} className="text-emerald-600 text-sm font-bold">Explore Product Details →</a>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-slate-900 text-white p-6 text-sm text-center mt-12">
        <p className="mb-4">© 2026 Clearway Safety & General Trading L.L.C</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline flex justify-center items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.591 5.52 0 10.016-4.496 10.016-10.016 0-5.52-4.496-10.016-10.016-10.016-5.52 0-10.016 4.496-10.016 10.016 0 2.052.569 3.864 1.531 5.567l-1.011 3.693 3.738-.979z"/></svg>
          Chat with us on WhatsApp
        </a>
      </footer>
    </main>
  );
}

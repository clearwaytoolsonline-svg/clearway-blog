export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      
      {/* Top Banner */}
      <div className="bg-amber-500 text-slate-950 text-center py-2 px-4 text-sm font-semibold">
        Leading Wholesale & Retail Safety Equipment Supplier across Abu Dhabi & UAE
      </div>

      {/* Main Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              CLEARWAY <span className="text-amber-600">SAFETY</span>
            </h1>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">General Trading L.L.C</p>
          </div>
          <nav className="flex gap-6 font-medium text-slate-600">
            <a href="#products" className="hover:text-amber-600 transition">Our Products</a>
            <a href="#about" className="hover:text-amber-600 transition">Why Choose Us</a>
          </nav>
          <a href="https://wa.me/971501234567" className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-emerald-700 transition flex items-center gap-2 shadow-sm text-sm">
            <span>Get Wholesale Quote</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Abu Dhabi's Trusted Safety Partner
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-6 mb-6 leading-tight">
            Premium Industrial Safety Products & PPE <br />
            <span className="text-amber-500">Wholesale & Retail Supplier in Abu Dhabi</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Bulk supply of premium safety equipment, traffic management systems, and high-quality PPE customized for construction, oil & gas, and industrial projects in UAE.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#products" className="bg-amber-500 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-400 transition shadow-lg">
              Explore 60+ Safety Products
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="about" className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex gap-4 items-start">
          <div className="bg-amber-100 p-3 rounded-lg text-amber-600 font-bold text-xl">01</div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">Wholesale Pricing</h3>
            <p className="text-slate-600 text-sm">Highly competitive bulk rates customized for large enterprises and retailers in Abu Dhabi.</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex gap-4 items-start">
          <div className="bg-amber-100 p-3 rounded-lg text-amber-600 font-bold text-xl">02</div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">Rapid Abu Dhabi Delivery</h3>
            <p className="text-slate-600 text-sm">Direct, safe, and immediate logistics supply chain across Mussafah, Al Ain, and all Emirates.</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex gap-4 items-start">
          <div className="bg-amber-100 p-3 rounded-lg text-amber-600 font-bold text-xl">03</div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">Certified Quality Tools</h3>
            <p className="text-slate-600 text-sm">Every product complies with international and UAE local industrial safety standards.</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Comprehensive Safety Range</h2>
            <p className="text-slate-600 mt-2">Professional Industrial Equipment Catalog</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <span className="text-xs font-bold text-amber-600 uppercase">Site Utilities</span>
              <h4 className="text-lg font-bold text-slate-900 mt-1 mb-3">Anti Slip Tapes</h4>
              <p className="text-xs text-slate-500 mb-4">Heavy-duty anti-slip tapes, convex mirrors, and heavy rubber speed humps for warehouses.</p>
              <a href="/blog/anti-slip-tape-supplier-abu-dhabi" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1">
                Explore Product Details &rarr;
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <span className="text-xs font-bold text-amber-600 uppercase">Traffic Management</span>
              <h4 className="text-lg font-bold text-slate-900 mt-1 mb-3">Traffic Cones & Barriers</h4>
              <p className="text-xs text-slate-500 mb-4">High-visibility reflective PVC traffic cones, warning bollards, and flexible road barricades.</p>
              <a href="/blog/traffic-safety-cones-abu-dhabi" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1">
                Explore Product Details &rarr;
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <span className="text-xs font-bold text-amber-600 uppercase">Emergency Care</span>
              <h4 className="text-lg font-bold text-slate-900 mt-1 mb-3">First Aid Boxes & Kits</h4>
              <p className="text-xs text-slate-500 mb-4">Fully equipped industrial first aid boxes, eye wash stations, and heavy emergency stretchers.</p>
              <a href="/blog/first-aid-box-supplier-abu-dhabi" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1">
                Explore Product Details &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-bold text-white text-lg">&copy; 2026 Clearway Safety & General Trading L.L.C.</p>
            <p className="text-xs mt-1">Mussafah, Abu Dhabi, United Arab Emirates</p>
          </div>
          <p className="text-sm">Premium Brand: <span className="text-amber-500 font-bold tracking-wider">RYXO Safety</span></p>
        </div>
      </footer>

    </main>
  )
}

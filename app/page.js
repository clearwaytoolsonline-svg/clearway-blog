export default function Home() {
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
          <button className="bg-emerald-600 text-white px-4 py-2 rounded">Get Wholesale Quote</button>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="bg-slate-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-black mb-4">Premium Industrial Safety Products & PPE</h1>
        <p className="text-xl mb-8">Wholesale & Retail Supplier in Abu Dhabi</p>
        <button className="bg-amber-500 text-black font-bold px-8 py-3 rounded">Explore 60+ Safety Products</button>
      </section>

      {/* 3. Features Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 border rounded shadow-sm"><strong>01 Wholesale Pricing</strong></div>
        <div className="bg-white p-6 border rounded shadow-sm"><strong>02 Rapid Abu Dhabi Delivery</strong></div>
        <div className="bg-white p-6 border rounded shadow-sm"><strong>03 Certified Quality Tools</strong></div>
      </section>

      {/* 4. Product Range Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Our Comprehensive Safety Range</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 border rounded">
            <span className="text-xs text-amber-600 font-bold">SITE UTILITIES</span>
            <h3 className="font-bold text-lg mt-1">Anti Slip Tapes</h3>
            <a href="#" className="text-emerald-600 text-sm font-bold">Explore Product Details →</a>
          </div>
          {/* Add more cards here following the same structure */}
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-slate-900 text-white p-6 text-sm text-center mt-12">
        © 2026 Clearway Safety & General Trading L.L.C
      </footer>
    </main>
  );
}

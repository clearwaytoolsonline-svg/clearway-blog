export default function PPEBlog() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      
      {/* Mini Header */}
      <header className="bg-white border-b py-4 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-black text-slate-900">
            CLEARWAY <span className="text-amber-600">SAFETY</span>
          </a>
          <a href="https://wa.me/971501234567" className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-emerald-700">
            Inquire Now
          </a>
        </div>
      </header>

      {/* Blog Article Container */}
      <article className="max-w-4xl mx-auto py-12 px-6">
        
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Personal Protective Equipment</span>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-4 leading-tight">
          Safety Helmet & High-Visibility Vest Supplier in Abu Dhabi, UAE
        </h1>
        
        <p className="text-sm text-slate-500 mb-8">Published by Clearway Safety Editorial | Bulk PPE Supply</p>

        {/* Content Section */}
        <div className="prose max-w-none text-slate-700 leading-relaxed space-y-6">
          <p>
            In the oil, gas, construction, and heavy manufacturing sectors across the UAE, high-quality Personal Protective Equipment (PPE) is non-negotiable. As a trusted <strong>Safety Helmet and High-Visibility Vest supplier in Abu Dhabi</strong>, Clearway Safety General Trading L.L.C delivers premium-grade, certified head protection and safety apparel to ensure total site compliance and workforce security.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Certified Safety Helmets for Extreme Industrial Environments</h2>
          <p>
            Our inventory includes industrial safety helmets manufactured to withstand structural impacts and extreme thermal radiation, making them perfect for the intense UAE summers. Sourced under our premium brand <strong>RYXO Safety</strong>, these helmets feature secure suspension systems, sweatbands, and ventilation slots designed for prolonged use on rugged job sites.
          </p>

          {/* Product Highlights Box */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
            <h3 className="font-bold text-slate-900 text-lg mb-2">RYXO Safety PPE Core Features:</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-800">
              <li><strong>International Certifications:</strong> All hard hats and high-vis vests conform to EN and ANSI safety benchmarks.</li>
              <li><strong>Premium High-Vis Materials:</strong> Reflective safety vests made with lightweight, breathable mesh fabric and high-intensity retroreflective tape for maximum night-time visibility.</li>
              <li><strong>Corporate Branding Available:</strong> Custom screen printing and embroidery options for company logos on vests and helmets for bulk corporate orders.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Bulk PPE & Safety Apparel Supplies</h2>
          <p>
            From our commercial logistics hub in Mussafah, we provide an all-in-one supply solution for contractors and retail procurement teams looking for heavy-duty safety gear:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Standard & Ratchet-type Safety Helmets (Multiple Colors for Role Differentiation).</li>
            <li>Class 2 & Class 3 High-Visibility Safety Vests (Zipper, Velcro, multi-pocket variants).</li>
            <li>Industrial Safety Gloves (Cut-resistant, chemical-resistant, leather welding gloves).</li>
            <li>Impact-resistant Safety Goggles and clear face shields.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl text-center mt-12 shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Get Wholesale Pricing for Your Workforce PPE</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto">
            Looking to equip your field staff with bulk quantities of certified hard hats and reflective vests? Reach out to Clearway Safety for premium wholesale deals across Abu Dhabi, Al Ain, and other GCC territories.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/971501234567" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-lg transition text-sm">
              Inquire via WhatsApp
            </a>
            <a href="/" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-lg transition text-sm border border-slate-700">
              Back to Home
            </a>
          </div>
        </div>

      </article>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 text-xs text-center py-6 border-t border-slate-900">
        &copy; 2026 Clearway Safety & General Trading L.L.C. All rights reserved.
      </footer>
    </main>
  );
}

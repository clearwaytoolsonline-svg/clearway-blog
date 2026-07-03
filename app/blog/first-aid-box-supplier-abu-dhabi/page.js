export default function FirstAidKitBlog() {
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
        
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Emergency Medical Supply</span>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-4 leading-tight">
          First Aid Box Supplier in Abu Dhabi, UAE: OSHAD Compliant Kits
        </h1>
        
        <p className="text-sm text-slate-500 mb-8">Published by Clearway Safety Editorial | Industrial Compliance</p>

        {/* Content Section */}
        <div className="prose max-w-none text-slate-700 leading-relaxed space-y-6">
          <p>
            Meeting workplace health and safety regulations is a mandatory requirement for every business operating in the United Arab Emirates. As a premier <strong>First Aid Box supplier in Abu Dhabi</strong>, Clearway Safety General Trading L.L.C specializes in delivering high-quality, fully-stocked emergency medical kits designed to meet OSHAD and Ministry of Labour standards.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Regulatory Approved First Aid Kits Matter</h2>
          <p>
            Whether you run a corporate office in downtown Abu Dhabi, a busy retail outlet, or a heavy-machinery workshop in Mussafah, quick access to first aid can prevent minor injuries from becoming critical compliance issues. Our kits are curated with essential medical components to effectively manage on-site emergencies, minor burns, cuts, and punctures.
          </p>

          {/* Wholesale Benefits Box */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
            <h3 className="font-bold text-slate-900 text-lg mb-2">Clearway Emergency Supply Highlights:</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-800">
              <li><strong>Customized Sizes:</strong> Available in small, medium, and large brackets tailored for varying employee headcounts (10, 25, 50, or 100+ persons).</li>
              <li><strong>Durable Enclosures:</strong> Choice of heavy-duty wall-mountable ABS plastic boxes or weatherproof metallic cabinets for harsh industrial settings.</li>
              <li><strong>Fresh Batches Only:</strong> All medical consumables, bandages, and burn dressings come with maximum shelf life and clear expiry markings.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Our Emergency Safety Product Line</h2>
          <p>
            We supply an extensive range of first aid and emergency response infrastructure directly to wholesale dealers and facility management groups:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Wall-mountable Industrial First Aid Boxes.</li>
            <li>Portable Emergency Medical Bags for field service vehicles.</li>
            <li>Emergency Eye Wash Stations and saline solution refills.</li>
            <li>Heavy-duty folding stretchers and first aid room equipment.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl text-center mt-12 shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Get an Immediate Quote for Bulk First Aid Supplies</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto">
            Ensure complete safety compliance for your workplace today. Contact Clearway Safety for commercial wholesale rates across Abu Dhabi, Mussafah, Al Ain, and the broader GCC.
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

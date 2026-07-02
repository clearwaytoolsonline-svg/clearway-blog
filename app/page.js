"use client";
import React, { useState } from 'react';

// Abu Dhabi Local SEO Keywords constants
const REGION_KEYWORDS = "Abu Dhabi, Mussafah, UAE, United Arab Emirates, Wholesale, Retail, Supplier, Distributor";

const productsList = [
  "ANTI SLIP TAPE", "ARROW LIGHTS", "AUTOMATIC PARKING LOCKS", "BATON LIGHTS", "CABLE BRACKETS", 
  "CABLE PROTECTOR", "CABLE PROTECTOR HUMP", "CONVEX MIRROR", "CORNER GUARD", "CURB RAMP", 
  "DIRECTIONAL ARROW LIGHT", "DISPOSABLE WORK WEARS", "DOOR SAFETY GUARDS", "DRIP TRAYS", 
  "ELECTRICAL INSULATING RUBBER MAT", "ELECTRICAL SAFETY GLOVES", "EMERGENCY STRETCHER", 
  "EMERGENCY EXIT LIGHTS", "EXPANDABLE BARRIER", "EYE WASH & STATIONS", "FACE SHIELDS", 
  "FALL ARRESTER", "FIRE SAFETY EQUIPMENTS", "FIRST AID BOXES", "GOGGLES", "HEADLAMP AND ACCESSORIES", 
  "INDUSTRIAL STORAGE BOXES", "KEY BOXES", "KNEE PADS", "LOCKOUT AND TAGOUT", "MANUAL PARKING LOCK", 
  "MEGAPHONE", "OFF ROAD FLAG", "PERSONAL SAFETY ACCESSORIES", "PIPE MARKING LABELS", "PLASTIC CHAIN", 
  "PPE", "REFLECTIVE STICKERS", "REFLECTIVE TAPES", "ROAD STUDS", "ROPE LADDER", "RUBBER AND PLASTIC SPEED HUMP", 
  "RUBBER SPEED HUMP", "SAFETY GAS DETECTORS", "SAFETY FLAG", "SAFETY GLOVES", "SAFETY HARNESS", 
  "SAFETY HELMET", "SAFETY INSPECTION TAGS", "SAFETY ROPE NET", "SAFETY ROPES AND GRABS", "SAFETY VEST", 
  "SAND BAGS", "SCAFFOLDING BAG", "SCAFFOLDING TOOLS", "MANUAL AND ELECRICAL SIREN", "SPILL BARRIER", 
  "SPILL KITS", "SUN PROTECTION ACCESSORIES", "SAFETY TOOL BELT", "TOWER LIGHT", "TRAFFIC POSTS", 
  "TRAFFIC SAFETY CONES", "TRAFFIC WARNING LIGHTS", "TRIPOD WITH WINCH", "UNDERGROUND TAPES", 
  "VEHICLE SAFETY STICKERS(REFLECTIVE/VINYL)", "VEHICLE WARNING LIGHTS", "WALL GUARDS", "WARNING SIGN BOARDS", 
  "WARNING TAPE", "WATER ABSORBENT BAG", "WHEEL CHOCK", "WHEEL STOPPER", "WINDSOCK"
];

export default function BlogHome() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsList.filter(product =>
    product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      
      {/* LOCAL SEO SCHEMA (Structured Data for Google) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WholesaleStore",
        "name": "Clearway Tools Online",
        "image": "https://www.clearwaytoolsonline.com/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mussafah",
          "addressLocality": "Abu Dhabi",
          "addressRegion": "Abu Dhabi",
          "addressCountry": "AE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "24.3490",
          "longitude": "54.5057"
        },
        "url": "https://www.clearwaytoolsonline.com",
        "description": "Leading safety equipment supplier, wholesaler, and retailer in Abu Dhabi, UAE.",
        "priceRange": "$$"
      })}} />

      {/* HEADER SECTION */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-amber-500">CLEARWAY TOOLS</h1>
            <p className="text-xs text-slate-400">Premium Safety & Industrial Solutions | Abu Dhabi, UAE</p>
          </div>
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#products" className="hover:text-amber-400 transition">Products</a>
            <a href="#about" className="hover:text-amber-400 transition">Wholesale Enquiry</a>
            <a href="#contact" className="bg-amber-500 text-slate-900 px-4 py-2 rounded-md font-semibold hover:bg-amber-400 transition">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-slate-800 text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Top Safety Equipment Supplier in Abu Dhabi</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 leading-tight">
            Approved PPE & Traffic Safety Materials <br/><span className="text-amber-500">Wholesale & Retail in UAE</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Clearway Tools is your trusted distributor for high-grade industrial safety accessories, personal protective equipment, and road safety solutions across Abu Dhabi and global regions.
          </p>
          
          {/* LIVE SEO SEARCH BAR */}
          <div className="max-w-xl mx-auto shadow-xl bg-white p-2 rounded-lg flex items-center">
            <input 
              type="text" 
              placeholder="Search products (e.g., Safety Gloves, Wheel Chock, Speed Hump)..." 
              className="w-full px-4 py-3 text-gray-900 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-amber-500 text-slate-900 font-bold px-6 py-3 rounded-md hover:bg-amber-400 transition shrink-0">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTS / BLOGS CONTAINER */}
      <main id="products" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Our Industrial Product Guide</h3>
            <p className="text-sm text-gray-500 mt-1">SEO Optimized Technical Knowledge Base & Catalog</p>
          </div>
          <span className="text-sm font-semibold bg-slate-200 text-slate-700 px-3 py-1 rounded">
            Showing {filteredProducts.length} Safety items
          </span>
        </div>

        {/* DYNAMIC PRODUCT BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <article key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 flex flex-col justify-between overflow-hidden group">
              <div className="p-6">
                <div className="text-xs font-bold text-amber-600 uppercase tracking-wide mb-2">Abu Dhabi Wholesale Stock</div>
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition mb-3">{product}</h4>
                
                {/* Micro SEO Blog Meta Paragraph */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Looking for high-quality <strong className="text-slate-800">{product.toLowerCase()}</strong> in Abu Dhabi, UAE? Clearway Tools provides premium quality industrial standards wholesale supply and retail options suited for projects in Mussafah and GCC sectors.
                </p>
                
                <div className="bg-slate-50 p-3 rounded-lg text-xs text-gray-500 space-y-1">
                  <div><strong>Application:</strong> Industrial, Construction, Traffic & Site Management</div>
                  <div><strong>Availability:</strong> Ready Stock / Bulk Supply</div>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs font-medium text-slate-500">Mussafah, UAE</span>
                <a 
                  href={`https://wa.me/971561080825?text=Hi%20Clearway%20Tools,%20I%20am%20interested%20in%20wholesale%20rates%20for%20${encodeURIComponent(product)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs bg-slate-900 hover:bg-amber-500 hover:text-slate-900 text-white font-bold py-2 px-4 rounded transition"
                >
                  Get Quote
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No safety products found matching your search term.</p>
          </div>
        )}
      </main>

      {/* WHY CHOOSE US / SEO ASSURANCE */}
      <section id="about" className="bg-slate-100 py-16 px-6 border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">Bulk Safety Tools & PPE Distributor in Abu Dhabi</h3>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            At Clearway Tools Online, we specialize in high-visibility traffic equipment, premium protective workwear, safety barriers, and lockout-tagout items. Serving commercial sites across the UAE, we prioritize premium quality certifications to keep your workforce safe and compliant with Middle Eastern industrial laws.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h5 className="font-bold text-slate-900 mb-2">🇦🇪 Abu Dhabi Stock</h5>
              <p className="text-xs text-gray-600">Fast delivery to Mussafah, Al Ain, and entire UAE industrial zones.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h5 className="font-bold text-slate-900 mb-2">📦 Wholesale Prices</h5>
              <p className="text-xs text-gray-600">Unbeatable bulk B2B rates directly tailored for construction contractors.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h5 className="font-bold text-slate-900 mb-2">🛡️ Certified PPE</h5>
              <p className="text-xs text-gray-600">All tools comply strictly with local and international municipality safety rules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT SECTION */}
      <footer id="contact" className="bg-slate-900 text-slate-400 py-12 px-6 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-3 text-base">Clearway Tools Online</h4>
            <p className="text-xs leading-relaxed">Top-tier wholesale safety products retailer. Operating globally with primary logistics in the heart of Abu Dhabi, United Arab Emirates.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 text-base">Quick Links & Keywords</h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-800 px-2 py-1 rounded">PPE Supplier Abu Dhabi</span>
              <span className="bg-slate-800 px-2 py-1 rounded">Mussafah Safety Tools</span>
              <span className="bg-slate-800 px-2 py-1 rounded">Traffic Safety UAE</span>
              <span className="bg-slate-800 px-2 py-1 rounded">Wholesale Safety Gloves</span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 text-base">Business Enquiries</h4>
            <p className="text-xs">📍 Mussafah, Abu Dhabi, UAE</p>
            <p className="text-xs mt-1">📧 Sales: info@clearwaytoolsonline.com</p>
            <p className="text-xs mt-2 text-amber-500 font-bold">💬 Support via WhatsApp available 24/7</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Clearway Tools Online. All Rights Reserved. Powered by Next.js & Vercel.
        </div>
      </footer>

    </div>
  );
}

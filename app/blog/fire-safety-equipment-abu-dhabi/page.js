export default function FireSafetyBlog() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <div className="max-w-4xl mx-auto py-16 px-6">
        {/* Breadcrumb */}
        <a href="/" className="text-emerald-600 font-bold text-sm hover:underline">← Back to Home</a>
        
        {/* Title Section */}
        <h1 className="text-5xl font-extrabold mt-6 mb-8 tracking-tight">Fire Safety Equipment & Blankets</h1>
        
        {/* Content */}
        <article className="prose prose-lg text-slate-700 leading-relaxed">
          <p className="text-xl mb-6 font-medium text-slate-900">
            Protect your facility and workforce with industrial-grade fire safety solutions in Abu Dhabi.
          </p>
          
          <hr className="my-8" />
          
          <h2 className="text-2xl font-bold text-slate-900">Why Fire Safety Matters</h2>
          <p>
            Fire hazards can arise in any industrial setting. Having the right equipment readily available 
            is not just a legal requirement for compliance in Abu Dhabi, but a critical step in saving 
            lives and preventing major property damage.
          </p>

          <h2 className="text-2xl font-bold mt-8">Our Essential Range</h2>
          <ul className="space-y-4 mt-4">
            <li>🔥 <strong>Fire Blankets:</strong> Made from high-quality fire-resistant glass fiber. Perfect for smothering kitchen fires or wrapping around a person.</li>
            <li>🧯 <strong>Fire Extinguishers:</strong> We supply a range of ABC powder and CO2 extinguishers suitable for different fire classes.</li>
            <li>🪧 <strong>Safety Signage:</strong> Clear, reflective photoluminescent signs to guide evacuation during emergencies.</li>
            <li>🗄️ <strong>Cabinets & Stands:</strong> Durable storage to ensure your safety gear is accessible and protected from environmental wear.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">Safety Compliance</h2>
          <p>
            All our fire safety products are rigorously tested to meet Civil Defense standards. Whether 
            for a warehouse, office, or construction site, we provide solutions that pass inspection 
            and ensure total peace of mind.
          </p>
        </article>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-slate-900 text-white rounded-2xl">
          <h3 className="text-2xl font-bold mb-2">Need Fire Safety Compliance?</h3>
          <p className="text-slate-300 mb-6">Let our experts assess your facility and recommend the right equipment for your needs.</p>
          <button className="bg-amber-500 text-slate-900 px-6 py-3 font-bold rounded-lg hover:bg-amber-400 transition">
            Get a Consultation
          </button>
        </div>
      </div>
    </main>
  );
}

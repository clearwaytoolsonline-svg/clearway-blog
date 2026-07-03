export default function HarnessBlog() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <div className="max-w-4xl mx-auto py-16 px-6">
        {/* Breadcrumb */}
        <a href="/" className="text-emerald-600 font-bold text-sm hover:underline">← Back to Home</a>
        
        {/* Title Section */}
        <h1 className="text-5xl font-extrabold mt-6 mb-8 tracking-tight">Safety Harness & Fall Protection</h1>
        
        {/* Content */}
        <article className="prose prose-lg text-slate-700 leading-relaxed">
          <p className="text-xl mb-6 font-medium text-slate-900">
            Ensure maximum workplace safety with our premium, industrial-grade fall protection equipment in Abu Dhabi.
          </p>
          
          <hr className="my-8" />
          
          <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
          <p>
            At Clearway Safety, we understand the risks involved in working at heights. Our safety harness systems 
            are designed to provide total protection, comfort, and compliance for teams working in construction, 
            oil & gas, and facility management across the UAE.
          </p>

          <h2 className="text-2xl font-bold mt-8">Technical Specifications</h2>
          <ul className="space-y-2 mt-4">
            <li>✅ <strong>Material:</strong> High-tensile synthetic webbing with steel buckles.</li>
            <li>✅ <strong>Certification:</strong> Fully EN 361 & EN 358 compliant.</li>
            <li>✅ <strong>Load Capacity:</strong> Tested up to 140kg.</li>
            <li>✅ <strong>Ergonomics:</strong> Adjustable shoulder and thigh straps for a custom fit.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">Why Professional Equipment Matters</h2>
          <p>
            Using substandard fall protection can lead to severe injuries and legal complications. 
            Our equipment is sourced from leading manufacturers and undergoes rigorous quality checks 
            to ensure durability in extreme temperatures and harsh environments.
          </p>
        </article>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-slate-900 text-white rounded-2xl">
          <h3 className="text-2xl font-bold mb-2">Need a Bulk Quote?</h3>
          <p className="text-slate-300 mb-6">Contact our industrial experts in Abu Dhabi for a customized safety proposal.</p>
          <button className="bg-amber-500 text-slate-900 px-6 py-3 font-bold rounded-lg hover:bg-amber-400 transition">
            Request a Wholesale Quote
          </button>
        </div>
      </div>
    </main>
  );
}

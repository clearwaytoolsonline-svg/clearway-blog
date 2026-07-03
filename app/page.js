export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Existing 9 Cards */}
        <div className="p-4 border rounded">Anti Slip Tapes <br/><a href="/blog/anti-slip-tape-supplier-abu-dhabi" className="text-blue-600">View</a></div>
        <div className="p-4 border rounded">Traffic Cones <br/><a href="/blog/traffic-safety-cones-abu-dhabi" className="text-blue-600">View</a></div>
        <div className="p-4 border rounded">First Aid Kits <br/><a href="/blog/first-aid-box-supplier-abu-dhabi" className="text-blue-600">View</a></div>
        <div className="p-4 border rounded">PPE Equipment <br/><a href="/blog/ppe-safety-helmet-vest-abu-dhabi" className="text-blue-600">View</a></div>
        <div className="p-4 border rounded">Wheel Chocks <br/><a href="/blog/heavy-duty-wheel-chocks-abu-dhabi" className="text-blue-600">View</a></div>
        <div className="p-4 border rounded">Warning Flags <br/><a href="/blog/safety-warning-flags-abu-dhabi" className="text-blue-600">View</a></div>
        <div className="p-4 border rounded">Convex Mirrors <br/><a href="/blog/industrial-convex-mirrors-abu-dhabi" className="text-blue-600">View</a></div>
        <div className="p-4 border rounded">Safety Shoes <br/><a href="/blog/industrial-safety-shoes-abu-dhabi" className="text-blue-600">View</a></div>
        <div className="p-4 border rounded">Safety Vests <br/><a href="/blog/reflective-safety-vests-abu-dhabi" className="text-blue-600">View</a></div>

        {/* 10th Card */}
        <div className="p-4 border-2 border-amber-400 rounded bg-amber-50">
          Safety Harness & Fall Protection <br/>
          <a href="/blog/safety-harness-fall-protection-abu-dhabi" className="text-blue-600 font-bold">View Details →</a>
        </div>
        
      </div>
    </main>
  );
}

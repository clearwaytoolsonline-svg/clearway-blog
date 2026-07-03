export default function Home() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Helper function for card */}
        {[
          { title: "Anti Slip Tapes", link: "/blog/anti-slip-tape-supplier-abu-dhabi" },
          { title: "Traffic Cones", link: "/blog/traffic-safety-cones-abu-dhabi" },
          { title: "First Aid Kits", link: "/blog/first-aid-box-supplier-abu-dhabi" },
          { title: "PPE Equipment", link: "/blog/ppe-safety-helmet-vest-abu-dhabi" },
          { title: "Wheel Chocks", link: "/blog/heavy-duty-wheel-chocks-abu-dhabi" },
          { title: "Warning Flags", link: "/blog/safety-warning-flags-abu-dhabi" },
          { title: "Convex Mirrors", link: "/blog/industrial-convex-mirrors-abu-dhabi" },
          { title: "Safety Shoes", link: "/blog/industrial-safety-shoes-abu-dhabi" },
          { title: "Safety Vests", link: "/blog/reflective-safety-vests-abu-dhabi" },
          { title: "Safety Harness", link: "/blog/safety-harness-fall-protection-abu-dhabi" }
        ].map((item, index) => (
          <div key={index} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
            <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
            <a href={item.link} className="text-emerald-600 font-bold text-sm hover:underline">View Details →</a>
          </div>
        ))}

      </div>
    </main>
  );
}

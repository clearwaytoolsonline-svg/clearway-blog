{/* 4. Product Range Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Our Comprehensive Safety Range</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Anti Slip Tapes", cat: "SITE UTILITIES", link: "/blog/anti-slip-tape-supplier-abu-dhabi" },
            { title: "Traffic Cones & Barriers", cat: "TRAFFIC MANAGEMENT", link: "/blog/traffic-safety-cones-abu-dhabi" },
            { title: "First Aid Boxes & Kits", cat: "EMERGENCY CARE", link: "/blog/first-aid-box-supplier-abu-dhabi" },
            { title: "PPE Equipment", cat: "PERSONAL PROTECTION", link: "/blog/ppe-safety-helmet-vest-abu-dhabi" },
            { title: "Heavy Duty Wheel Chocks", cat: "WAREHOUSE AND FLEET", link: "/blog/heavy-duty-wheel-chocks-abu-dhabi" },
            { title: "Safety Warning Flags", cat: "SITE VISIBILITY", link: "/blog/safety-warning-flags-abu-dhabi" },
            { title: "Industrial Convex Mirrors", cat: "SITE SURVEILLANCE", link: "/blog/industrial-convex-mirrors-abu-dhabi" },
            { title: "Industrial Safety Shoes", cat: "WORKFORCE SAFETY", link: "/blog/industrial-safety-shoes-abu-dhabi" },
            { title: "Reflective Safety Vests", cat: "HIGH-VIS APPAREL", link: "/blog/reflective-safety-vests-abu-dhabi" },
            { title: "Safety Harness & Gear", cat: "FALL PROTECTION", link: "/blog/safety-harness-fall-protection-abu-dhabi" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 border rounded shadow-sm hover:shadow-md transition">
              <span className="text-xs text-amber-600 font-bold tracking-wider">{item.cat}</span>
              <h3 className="font-bold text-lg mt-1 mb-3">{item.title}</h3>
              <a href={item.link} className="text-emerald-600 text-sm font-bold">Explore Product Details →</a>
            </div>
          ))}
        </div>
      </section>

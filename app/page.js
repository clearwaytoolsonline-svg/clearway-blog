export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white p-6 shadow-md text-center">
        <h1 className="text-3xl font-bold text-blue-900">CLEARWAY TOOLS</h1>
        <p className="text-gray-600">Premium Tools Supplier in Abu Dhabi</p>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-900 text-white">
        <h2 className="text-4xl font-bold mb-4">Quality Tools for Your Business</h2>
        <p className="text-xl mb-8">We supply top-grade industrial tools across UAE.</p>
        <a href="https://wa.me/YOUR_NUMBER" className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600">
          WhatsApp Us Now
        </a>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
          <h3 className="text-xl font-bold mb-2">Wholesale</h3>
          <p>Best rates for bulk orders in Abu Dhabi.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
          <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
          <p>Prompt delivery across all Emirates.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
          <h3 className="text-xl font-bold mb-2">Genuine Quality</h3>
          <p>Only top-tier brands and authentic tools.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-8">
        <p>&copy; 2026 Clearway Tools Online. All rights reserved.</p>
        <p>Location: Abu Dhabi, UAE</p>
      </footer>
    </main>
  );
}

export const metadata = {
  title: 'Clearway Safety | Leading Safety Equipment Supplier in Abu Dhabi UAE',
  description: 'Wholesale & Retail Supplier of Premium Safety Tools, PPE, Traffic Safety Cones, and Industrial Safety Equipments across Abu Dhabi and UAE.',
  keywords: 'Safety Equipment Abu Dhabi, PPE Supplier UAE, Traffic Safety Products Abu Dhabi, Wholesale Safety Tools',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}

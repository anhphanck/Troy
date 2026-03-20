export default function ClientSection() {
  return (
    <div id="clients" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">KHÁCH HÀNG</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10">
        {[1,2,3,4].map(i => (
          <div key={i} className="bg-white p-6 shadow">
            Logo {i}
          </div>
        ))}
      </div>
    </div>
  );
}
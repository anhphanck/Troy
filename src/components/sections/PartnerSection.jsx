export default function PartnerSection() {
  return (
    <div id="partners" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">ĐỐI TÁC</h2>

      <div className="flex flex-wrap justify-center gap-10">
        {[1,2,3,4].map(i => (
          <div key={i} className="w-32 h-16 bg-gray-200 flex items-center justify-center">
            Logo
          </div>
        ))}
      </div>
    </div>
  );
}
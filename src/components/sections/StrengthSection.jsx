export default function StrengthSection() {
  const data = [
    { title: "Thiết kế sáng tạo", desc: "Ý tưởng độc đáo" },
    { title: "Kinh nghiệm", desc: "Nhiều năm trong ngành" },
    { title: "Tối ưu chi phí", desc: "Hiệu quả cao" },
  ];

  return (
    <div id="strength" className="py-20 px-10">
      <h2 className="text-3xl font-bold text-center mb-10">THẾ MẠNH</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item, i) => (
          <div key={i} className="p-6 border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
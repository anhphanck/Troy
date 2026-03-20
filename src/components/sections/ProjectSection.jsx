export default function ProjectSection() {
  return (
    <div id="projects" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">DỰ ÁN</h2>

      <div className="grid md:grid-cols-3 gap-4 px-10">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="relative group overflow-hidden">
            <img
              src={`/images/home/project${i}.jpg`}
              className="w-full h-64 object-cover group-hover:scale-110 transition"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white">
              Project {i}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
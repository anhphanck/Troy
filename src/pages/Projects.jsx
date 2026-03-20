import MainLayout from "../components/layout/MainLayout";
import Footer from "../components/sections/Footer";

export default function Projects() {
  const categories = [
    {
      title: "TỔ HỢP VUI CHƠI GIẢI TRÍ",
      projects: [
        { title: "Pit-park", subtitle: "TỔ HỢP VUI CHƠI GIẢI TRÍ", image: "https://placehold.co/600x400" },
        { title: "Công viên Sunworld Hạ Long", subtitle: "TỔ HỢP VUI CHƠI GIẢI TRÍ", image: "https://placehold.co/600x400" },
        { title: "Bến Tàu", subtitle: "TỔ HỢP VUI CHƠI GIẢI TRÍ", image: "https://placehold.co/600x400" },
        { title: "Công ty giải trí Modern", subtitle: "TỔ HỢP VUI CHƠI GIẢI TRÍ", image: "https://placehold.co/600x400" },
      ],
    },
    {
      title: "KHÁCH SẠN / RESORT",
      projects: [
        { title: "Khách sạn Bắc Cường", subtitle: "KHÁCH SẠN / RESORT", image: "https://placehold.co/600x400" },
        { title: "Khách sạn Bạch Đằng", subtitle: "KHÁCH SẠN / RESORT", image: "https://placehold.co/600x400" },
        { title: "Khách sạn Luxe House", subtitle: "KHÁCH SẠN / RESORT", image: "https://placehold.co/600x400" },
        { title: "Khách sạn New", subtitle: "KHÁCH SẠN / RESORT", image: "https://placehold.co/600x400" },
      ],
    },
    {
      title: "VĂN PHÒNG",
      projects: [
        { title: "Văn phòng Vietcom", subtitle: "VĂN PHÒNG", image: "https://placehold.co/600x400" },
        { title: "Văn phòng Tân Minh Nhân", subtitle: "VĂN PHÒNG", image: "https://placehold.co/600x400" },
        { title: "Văn phòng Nam Mỹ", subtitle: "VĂN PHÒNG", image: "https://placehold.co/600x400" },
        { title: "Văn phòng Modern", subtitle: "VĂN PHÒNG", image: "https://placehold.co/600x400" },
      ],
    },
    {
      title: "BIỆT THỰ / VILLA",
      projects: [
        { title: "Villa - Sun Group", subtitle: "BIỆT THỰ / VILLA", image: "https://placehold.co/600x400" },
        { title: "Villa Anh Minh", subtitle: "BIỆT THỰ / VILLA", image: "https://placehold.co/600x400" },
        { title: "Villa Chị Thảo", subtitle: "BIỆT THỰ / VILLA", image: "https://placehold.co/600x400" },
        { title: "Villa Chị Thảo", subtitle: "BIỆT THỰ / VILLA", image: "https://placehold.co/600x400" },
      ],
    },
    {
      title: "NHÀ PHỐ",
      projects: [
        { title: "Nhà anh Hào", subtitle: "NHÀ PHỐ", image: "https://placehold.co/600x400" },
        { title: "Nhà anh Hùng", subtitle: "NHÀ PHỐ", image: "https://placehold.co/600x400" },
        { title: "Nhà Chị Hòa", subtitle: "NHÀ PHỐ", image: "https://placehold.co/600x400" },
        { title: "Nhà Chị Nga", subtitle: "NHÀ PHỐ", image: "https://placehold.co/600x400" },
      ],
    },
    {
      title: "NỘI THẤT",
      projects: [
        { title: "Nội thất SUN GROUP", subtitle: "NỘI THẤT", image: "https://placehold.co/600x400" },
        { title: "Nội thất RICH", subtitle: "NỘI THẤT", image: "https://placehold.co/600x400" },
        { title: "Nội thất Đa Phúc Long", subtitle: "NỘI THẤT", image: "https://placehold.co/600x400" },
        { title: "Nội thất Du Lịch Hội", subtitle: "NỘI THẤT", image: "https://placehold.co/600x400" },
      ],
    },
  ];

  return (
    <MainLayout>
      <div className="bg-gray-50 pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-[0.2em] uppercase">DỰ ÁN</h1>
            <div className="w-12 md:w-16 h-[1px] md:h-[2px] bg-troy-red mx-auto mt-4 mb-2"></div>
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Nơi chúng tôi hiện thực hóa mọi ước mơ</p>
          </div>

          {/* Filter Dropdown */}
          <div className="flex justify-center mb-16 md:mb-20">
            <div className="relative inline-block group">
              <button className="bg-troy-red text-white px-8 md:px-12 py-2.5 md:py-3 text-[9px] md:text-[10px] font-bold tracking-[0.2em] flex items-center gap-4 transition-all hover:bg-black shadow-md">
                XEM TẤT CẢ
                <svg className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Project Categories */}
          <div className="space-y-20 md:space-y-32">
            {categories.map((cat, idx) => (
              <div key={idx} className="space-y-8 md:space-y-12">
                <div className="flex items-center gap-4 md:gap-6">
                  <h2 className="text-base md:text-lg font-serif font-bold text-gray-800 tracking-widest uppercase whitespace-nowrap">
                    {cat.title}
                  </h2>
                  <div className="w-full h-[1px] bg-gray-200"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16">
                  {cat.projects.map((project, pIdx) => (
                    <div key={pIdx} className="space-y-4 md:space-y-6 group cursor-pointer">
                      <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative shadow-sm border border-gray-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                            <button className="bg-white text-troy-red text-[8px] md:text-[9px] font-bold px-6 md:px-8 py-2 md:py-3 tracking-[0.2em] hover:bg-troy-red hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 uppercase">
                                Explore Detail
                            </button>
                        </div>
                      </div>
                      <div className="space-y-1 md:space-y-2 text-center sm:text-left px-2">
                        <h3 className="text-xs md:text-sm font-serif font-bold text-gray-800 uppercase tracking-widest group-hover:text-troy-red transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[8px] md:text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em] flex items-center justify-center sm:justify-start gap-2">
                          <span className="w-3 md:w-4 h-[1px] bg-troy-red opacity-50"></span>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </MainLayout>
  );
}

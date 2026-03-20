import MainLayout from "../components/layout/MainLayout";
import Footer from "../components/sections/Footer";

export default function About() {
  const sectors = [
    { title: "TỔ HỢP VUI CHƠI GIẢI TRÍ", image: "https://placehold.co/600x400" },
    { title: "KHÁCH SẠN / RESORT", image: "https://placehold.co/600x400" },
    { title: "VĂN PHÒNG", image: "https://placehold.co/600x400" },
    { title: "BIỆT THỰ / VILLA", image: "https://placehold.co/600x400" },
    { title: "NHÀ PHỐ", image: "https://placehold.co/600x400" },
    { title: "NỘI THẤT", image: "https://placehold.co/600x400" },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[500px] w-full overflow-hidden">
        <img
          src="https://placehold.co/1920x800/1a1a1a/ffffff?text=Premium+Architecture"
          alt="About Hero"
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[3s]"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-[0.2em] mb-4 text-center">VỀ CHÚNG TÔI</h1>
          <div className="w-12 md:w-16 h-[1px] md:h-[2px] bg-troy-red mb-4"></div>
          <p className="text-[10px] md:text-sm font-light tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-80 text-center">TROY architecture và giá trị cốt lõi</p>
        </div>
      </div>

      {/* Seeking Section */}
      <div className="py-16 md:py-24 bg-white flex flex-col items-center text-center px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-900 tracking-wider mb-2">
          BẠN ĐANG TÌM?
        </h2>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-900 tracking-wider">
          MỘT NHÀ KIẾN TẠO KHÔNG GIAN SỐNG?
        </h2>
        <div className="mt-8 md:mt-10 flex flex-col items-center">
            <div className="w-[1px] h-8 md:h-12 bg-gray-200 mb-4"></div>
            <div className="w-0 h-0 border-l-[8px] md:border-l-[10px] border-l-transparent border-r-[8px] md:border-r-[10px] border-r-transparent border-t-[12px] md:border-t-[15px] border-t-troy-red"></div>
        </div>
      </div>

      {/* Intro Video/Image */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-16 md:mb-20 relative">
        <div className="aspect-video bg-gray-100 rounded-sm overflow-hidden shadow-lg flex items-center justify-center relative group cursor-pointer">
          <img
            src="https://placehold.co/1200x675"
            alt="Intro Video Thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="flex items-center">
              <span className="text-troy-red font-serif font-bold text-4xl sm:text-6xl md:text-7xl tracking-tighter">TROY</span>
              <span className="text-black text-xs sm:text-xl md:text-2xl ml-1 md:ml-2 font-light tracking-[0.2em] mt-1 md:mt-3 uppercase">architecture</span>
            </div>
            {/* Play button icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-troy-red rounded-full flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Details */}
      <div className="bg-white py-16 md:py-24 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-12 md:space-y-20">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-serif text-gray-900 tracking-widest uppercase">GIỚI THIỆU</h3>
            <div className="w-8 md:w-10 h-[1px] bg-troy-red mx-auto mt-4 mb-2"></div>
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Hiểu thêm về đội ngũ và hành trình phát triển</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center group">
            <div className="w-full md:w-1/3 aspect-square bg-gray-50 flex items-center justify-center p-6 md:p-8 overflow-hidden relative shadow-sm">
                <div className="absolute inset-3 md:inset-4 border border-gray-100"></div>
                <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-300 group-hover:text-troy-red transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
            </div>
            <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
              <h4 className="font-serif text-lg md:text-xl text-gray-800 tracking-wider flex items-center justify-center md:justify-start gap-3">
                <span className="w-4 md:w-6 h-[1px] bg-troy-red"></span>
                Về chúng tôi
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed font-light tracking-wide italic">
                Có lịch sử ra đời từ văn phòng kiến trúc <span className="text-troy-red font-bold">TROY</span> thành lập năm 2017, với nòng cốt là các Kiến trúc sư trẻ từ Đà Nẵng và các Kỹ sư nhiều kinh nghiệm thực chiến tại Đà Nẵng.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center group">
            <div className="w-full md:w-2/3 space-y-4 text-center md:text-right">
              <h4 className="font-serif text-lg md:text-xl text-gray-800 tracking-wider flex items-center justify-center md:justify-end gap-3">
                Sứ mệnh của chúng tôi
                <span className="w-4 md:w-6 h-[1px] bg-troy-red"></span>
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed font-light tracking-wide italic">
                <span className="text-troy-red font-bold">TROY</span> mong muốn góp phần nâng tầm giá trị cuộc sống, hiện thực hóa ý tưởng của khách hàng với tiêu chuẩn thẩm mỹ và kỹ thuật cao nhất.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-gray-50 flex items-center justify-center p-6 md:p-8 overflow-hidden relative shadow-sm">
                <div className="absolute inset-3 md:inset-4 border border-gray-100"></div>
                <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-300 group-hover:text-troy-red transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sectors */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-serif text-gray-900 tracking-widest uppercase">NHỮNG LĨNH VỰC CHÍNH</h3>
            <div className="w-8 md:w-10 h-[1px] bg-troy-red mx-auto mt-4 mb-2"></div>
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Nền tảng cốt lõi cho mọi hoạt động của chúng tôi</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {sectors.map((sector, index) => (
              <div key={index} className="space-y-4 text-center group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-gray-50 border border-gray-100 shadow-sm relative">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
                </div>
                <h4 className="text-[10px] font-bold text-gray-800 tracking-widest uppercase opacity-80 group-hover:text-troy-red transition-colors">
                  {sector.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </MainLayout>
  );
}

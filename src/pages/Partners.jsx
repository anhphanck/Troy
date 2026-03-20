import MainLayout from "../components/layout/MainLayout";
import Footer from "../components/sections/Footer";

export default function Partners() {
  const partners = [
    { name: "FPT SECURITIES", logo: "https://placehold.co/200x100" },
    { name: "TAN MINH NHAN", logo: "https://placehold.co/200x100" },
    { name: "SUBARU", logo: "https://placehold.co/200x100" },
    { name: "MAERSK", logo: "https://placehold.co/200x100" },
    { name: "SUN GROUP", logo: "https://placehold.co/200x100" },
    { name: "THACO", logo: "https://placehold.co/200x100" },
    { name: "HAFELE", logo: "https://placehold.co/200x100" },
    { name: "DALAT HASFARM", logo: "https://placehold.co/200x100" },
    { name: "TOYOTA", logo: "https://placehold.co/200x100" },
  ];

  const galleryImages = [
    "https://placehold.co/300x600",
    "https://placehold.co/300x600",
    "https://placehold.co/300x600",
    "https://placehold.co/300x600",
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[500px] w-full overflow-hidden">
        <img
          src="https://placehold.co/1920x600"
          alt="Partners Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-[0.2em] uppercase mb-4">ĐỐI TÁC</h1>
          <div className="w-12 md:w-16 h-[1px] md:h-[2px] bg-troy-red mb-4"></div>
          <p className="mt-2 text-[10px] md:text-sm font-light uppercase tracking-widest max-w-lg opacity-80">
            Mối quan hệ hợp tác bền vững, cùng nhau kiến tạo giá trị
          </p>
        </div>
      </div>

      {/* Partners Gallery */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 tracking-widest uppercase">ĐỒNG HÀNH CÙNG NHỮNG ĐỐI TÁC</h2>
            <div className="w-10 md:w-12 h-[1px] bg-troy-red mx-auto mt-6 mb-3"></div>
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase max-w-2xl mx-auto">
              Sự đồng hành cùng các tên tuổi hàng đầu là minh chứng cho năng lực, chất lượng dịch vụ và sự cam kết bền vững của TROY trong mỗi công trình
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="aspect-[1/2] overflow-hidden bg-gray-50 shadow-sm group border border-gray-100">
                <img
                  src={img}
                  alt={`Partner project ${idx + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Partners Logos */}
      <div className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-xl md:text-2xl font-serif text-gray-900 tracking-widest uppercase">ĐỐI TÁC CHÍNH CỦA TROY</h2>
            <div className="w-8 md:w-10 h-[1px] bg-troy-red mx-auto mt-6 mb-3"></div>
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Hợp lực chuyên môn, nâng tầm giải pháp</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center group hover:shadow-xl transition-all duration-500">
                <div className="h-12 md:h-16 flex items-center justify-center mb-4 md:mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <p className="text-[8px] md:text-[9px] font-bold text-gray-300 group-hover:text-troy-red transition-colors tracking-[0.2em] md:tracking-[0.3em] uppercase">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </MainLayout>
  );
}

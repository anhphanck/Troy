import MainLayout from "../components/layout/MainLayout";
import Footer from "../components/sections/Footer";

export default function Strength() {
  const strengths = [
    {
      number: "1",
      title: "Đội ngũ kiến trúc sư trình độ cao",
      content: "Với các kiến trúc sư tốt nghiệp loại ưu từ các trường kiến trúc danh tiếng, chúng tôi với đội ngũ kết hợp các yêu cầu kỹ thuật cao, am hiểu các đặc điểm địa phương, thổ nhưỡng, tập quán tâm thế sẵn sàng mang lại các giá trị không gian sống cho khách hàng.",
      image: "https://placehold.co/600x400",
    },
    {
      number: "2",
      title: "Kinh nghiệm thực chiến",
      content: "Kinh nghiệm hơn <span className='text-red-800 font-bold'>15 năm trong việc kiến tạo</span> những dự án của nhiều thương hiệu lớn nhỏ được tín nhiệm trên toàn quốc.",
      image: "https://placehold.co/600x400",
      isLogos: true,
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[500px] w-full overflow-hidden">
        <img
          src="https://placehold.co/1920x600"
          alt="Strength Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-[0.2em] uppercase mb-4">THẾ MẠNH</h1>
          <div className="w-12 md:w-16 h-[1px] md:h-[2px] bg-troy-red mb-4"></div>
          <p className="mt-2 text-[10px] md:text-sm font-light uppercase tracking-widest max-w-lg opacity-80">
            Lợi thế cạnh tranh giúp đạt hiệu quả cao trong công việc
          </p>
        </div>
      </div>

      {/* Strengths List */}
      <div className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 tracking-widest uppercase">THẾ MẠNH</h2>
            <div className="w-10 md:w-12 h-[1px] bg-troy-red mx-auto mt-6 mb-3"></div>
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Lợi thế cạnh tranh giúp đạt hiệu quả cao trong công việc</p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {strengths.map((item, index) => (
              <div key={index} className="bg-white p-6 md:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative group hover:shadow-xl transition-all duration-500">
                <div className="w-full md:w-1/2 aspect-[4/3] bg-gray-50 overflow-hidden relative">
                  {item.isLogos ? (
                    <div className="w-full h-full grid grid-cols-3 gap-4 md:gap-6 p-6 md:p-8 items-center justify-center">
                        {/* Placeholder logos */}
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="aspect-square bg-white border border-gray-50 flex items-center justify-center p-2 md:p-3 shadow-sm group-hover:scale-105 transition-transform">
                                <div className="w-full h-full bg-gray-50"></div>
                            </div>
                        ))}
                    </div>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                    />
                  )}
                  <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
                </div>
                <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
                  <h3 className="text-lg md:text-xl font-serif text-gray-800 tracking-wider flex items-center justify-center md:justify-start gap-3">
                    <span className="w-4 md:w-6 h-[1px] bg-troy-red"></span>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light tracking-wide italic" dangerouslySetInnerHTML={{ __html: item.content }}>
                  </p>
                </div>
                {/* Number badge */}
                <div className="absolute top-6 right-6 md:top-10 md:right-10 text-4xl md:text-6xl font-serif font-bold text-gray-100 group-hover:text-troy-red/5 transition-colors duration-500">
                  {item.number}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Box */}
          <div className="mt-16 md:mt-24 bg-white border border-gray-100 p-8 md:p-12 shadow-sm text-center max-w-2xl mx-auto relative group overflow-hidden">
             {/* Background decoration */}
             <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-troy-red/5 transition-colors" />
             
             {/* Phone icon overlay */}
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-md text-troy-red group-hover:bg-troy-red group-hover:text-white transition-all duration-500">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
             </div>
             
             <h3 className="text-base md:text-lg font-serif text-gray-800 tracking-wider mb-4">
                Quan tâm đến giải pháp nội thất từ TROY?
             </h3>
             <p className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-2 px-4">
                Đặt lịch tư vấn với TROY - online hoặc trực tiếp!
             </p>
             <p className="text-lg md:text-xl font-serif text-troy-red tracking-widest font-bold">
                0903 996 123
             </p>
          </div>
        </div>
      </div>

      <Footer />
    </MainLayout>
  );
}

import MainLayout from "../components/layout/MainLayout";
import Footer from "../components/sections/Footer";

export default function Clients() {
  const testimonials = [
    {
      name: "Anh ... - Chủ đầu tư",
      content: "Thật ra ý tưởng ban đầu của mình cũng không mấy rành lắm, từ một người tay mơ về xây dựng, kiến trúc, đã tìm thấy được sự tận tâm, chuyên nghiệp, sự am hiểu và tận tụy của đội ngũ kiến trúc sư tại Sun. Mình cảm thấy hài lòng không chỉ bởi bản thiết kế, mà còn ở cách các bạn tận tâm, chu đáo và đồng hành cùng khách hàng...",
      image: "https://placehold.co/400x300",
    },
    {
      name: "Chị Thảo - Chủ đầu tư",
      content: "Tôi rất hài lòng về bản thiết kế, đúng với những gì gia đình mong muốn. Từng góc nhỏ trong ngôi nhà đều được các kiến trúc sư chăm chút, tối ưu hóa công năng và thẩm mỹ. Đội ngũ nhân viên chuyên nghiệp, nhiệt tình, luôn lắng nghe ý kiến của khách hàng. Sẽ tiếp tục ủng hộ Sun cho những dự án tiếp theo...",
      image: "https://placehold.co/400x300",
    },
    {
      name: "Chủ đầu tư",
      content: "Tôi cảm ơn đội ngũ thiết kế của Sun đã mang lại cho tôi một ngôi nhà mơ ước. Ngôi nhà không chỉ đẹp về kiến trúc mà còn rất ấm cúng và tiện nghi. Sự phối hợp màu sắc và vật liệu rất tinh tế, tạo nên một không gian sống vô cùng lý tưởng. Tôi rất hài lòng với dịch vụ và phong cách làm việc của các bạn...",
      image: "https://placehold.co/400x300",
    },
    {
      name: "Nhà anh Trai - Một khách hàng thân thiết",
      content: "Mỗi khi bước chân vào ngôi nhà, tôi đều cảm nhận được sự tỉ mỉ, tâm huyết mà đội ngũ Sun đã dành cho nó. Không gian sống của tôi giờ đây không chỉ là nơi để ở, mà còn là nơi để thư giãn và tái tạo năng lượng. Cảm ơn Sun đã giúp tôi thực hiện ước mơ về một tổ ấm hoàn hảo...",
      image: "https://placehold.co/400x300",
    },
    {
      name: "Nhà anh Thiên - Một khách hàng thân thiết",
      content: "Kiến trúc của Sun mang một phong cách rất riêng, sang trọng và hiện đại nhưng vẫn giữ được nét ấm cúng, gần gũi. Tôi rất thích cách các bạn tận dụng ánh sáng và gió tự nhiên, tạo nên một không gian sống vô cùng thông thoáng và dễ chịu. Sự hài lòng của tôi đối với Sun là tuyệt đối...",
      image: "https://placehold.co/400x300",
    },
    {
      name: "Anh A",
      content: "Dịch vụ của Sun rất chuyên nghiệp, từ khâu tư vấn đến thiết kế và thi công. Các bạn luôn đảm bảo đúng tiến độ và chất lượng công trình. Tôi cảm thấy rất yên tâm khi giao phó ngôi nhà của mình cho Sun. Kết quả cuối cùng vượt ngoài sự mong đợi của tôi. Cảm ơn các bạn rất nhiều...",
      image: "https://placehold.co/400x300",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[500px] w-full overflow-hidden">
        <img
          src="https://placehold.co/1920x800/1a1a1a/ffffff?text=Our+Clients"
          alt="Clients Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-[0.2em] mb-4">KHÁCH HÀNG</h1>
          <div className="w-12 md:w-16 h-[1px] md:h-[2px] bg-troy-red mb-4"></div>
          <p className="text-[10px] md:text-sm font-light uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-80">Chia sẻ từ những người đã tin tưởng</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 tracking-widest uppercase">KHÁCH HÀNG NÓI VỀ SUN</h2>
            <div className="w-10 md:w-12 h-[1px] bg-troy-red mx-auto mt-6 mb-3"></div>
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Những chia sẻ chân thực từ khách hàng đã đồng hành</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 md:gap-8 group hover:shadow-xl transition-all duration-500">
                <div className="w-full sm:w-2/5 aspect-[4/3] overflow-hidden flex-shrink-0 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 border border-white/20"></div>
                </div>
                <div className="flex flex-col justify-between w-full sm:w-3/5">
                  <div className="space-y-4">
                    <h3 className="text-xs md:text-sm font-serif font-bold text-gray-800 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-4 h-[1px] bg-troy-red"></span>
                        {item.name}
                    </h3>
                    <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed font-light italic opacity-80">
                      "{item.content}"
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="text-[8px] md:text-[9px] font-bold text-gray-400 hover:text-troy-red transition-all uppercase tracking-[0.2em] flex items-center gap-2 group-hover:translate-x-1">
                      Chi tiết 
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center text-[10px] md:text-[11px] text-gray-500 italic max-w-2xl mx-auto px-4">
            <span className="font-bold text-troy-red">TROY</span> xin chân thành cảm ơn đến các <span className="font-bold text-gray-800">quý khách hàng</span> luôn là động lực cho chúng tôi <span className="font-bold text-gray-800 underline">cố gắng và phát triển hơn theo từng ngày</span>.
          </div>
        </div>
      </div>

      {/* Movie Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-troy-red tracking-widest uppercase">MOVIE</h2>
            <div className="w-10 md:w-12 h-[1px] bg-troy-red mx-auto mt-4 mb-2"></div>
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Cảm nhận thực tế từ khách hàng khi đồng hành cùng TROY</p>
          </div>

          <div className="relative aspect-video max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl group cursor-pointer border border-gray-100">
            <img
              src="https://placehold.co/1200x675"
              alt="Video Thumbnail"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
               {/* Golden Frame Border Simulation */}
               <div className="absolute inset-3 md:inset-4 border border-white/10 rounded-lg pointer-events-none"></div>
               
               <div className="w-12 h-12 md:w-20 md:h-20 bg-troy-red rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 md:w-10 md:h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
               </div>
               
               <div className="mt-6 md:mt-8 text-center">
                  <h3 className="text-lg md:text-2xl font-serif font-bold tracking-widest uppercase mb-2">ANH CƯỜNG - BIỆT THỰ EUROVILLA</h3>
                  <p className="text-[10px] md:text-xs tracking-[0.3em] font-light uppercase">Cảm nghĩ khách hàng</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </MainLayout>
  );
}

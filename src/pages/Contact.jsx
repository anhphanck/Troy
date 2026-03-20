import MainLayout from "../components/layout/MainLayout";
import Footer from "../components/sections/Footer";

export default function Contact() {
  const contactMethods = [
    {
      title: "HOTLINE",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: "EMAIL",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "FACEBOOK",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[400px] w-full overflow-hidden">
        <img
          src="https://placehold.co/1920x600/1a1a1a/ffffff?text=Contact+Hero"
          alt="Contact Hero"
          className="w-full h-full object-cover"
        />
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-40 pointer-events-none">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.1" strokeDasharray="1,1" fill="none" />
           </svg>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-[0.2em] uppercase mb-4">LIÊN HỆ</h1>
          <div className="w-12 md:w-16 h-[1px] md:h-[2px] bg-troy-red mb-4"></div>
          <p className="mt-2 text-[10px] md:text-sm font-light uppercase tracking-widest opacity-80">
            Sứ mệnh và giá trị cốt lõi
          </p>
        </div>
      </div>

      {/* Contact Methods Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 tracking-widest uppercase">PHƯƠNG THỨC LIÊN HỆ</h2>
            <div className="w-10 md:w-12 h-[1px] bg-troy-red mx-auto mt-6 mb-3"></div>
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {contactMethods.map((method, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 md:p-12 shadow-sm flex flex-col items-center gap-6 group hover:shadow-xl transition-all duration-500 cursor-pointer">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-troy-red/10 flex items-center justify-center text-troy-red group-hover:bg-troy-red group-hover:text-white transition-all duration-500 shadow-sm">
                  {method.icon}
                </div>
                <h3 className="text-[9px] md:text-[10px] font-bold text-gray-800 tracking-[0.2em] md:tracking-[0.3em] uppercase group-hover:text-troy-red transition-colors">
                  {method.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 tracking-widest uppercase">VỊ TRÍ</h2>
            <div className="w-8 md:w-10 h-[1px] bg-troy-red mx-auto mt-6 mb-3"></div>
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase tracking-widest">Dễ dàng tìm đến - sẵn sàng phục vụ</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="aspect-[21/9] bg-gray-200 shadow-sm overflow-hidden border border-gray-100 relative group">
               {/* Placeholder for Google Map */}
               <img 
                 src="https://placehold.co/1200x500/e2e2e2/666666?text=Google+Maps+Location+TROY+Architecture" 
                 alt="Location Map"
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
            </div>
            <p className="text-[10px] md:text-[11px] text-gray-800 text-center md:text-left px-4">
              <span className="font-bold">Văn phòng:</span> 189 Nguyễn Tất Thành, Quận Hải Châu, TP. Đà Nẵng
            </p>
          </div>
        </div>
      </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="aspect-[21/9] bg-gray-200 shadow-sm overflow-hidden border border-gray-100">
               {/* Placeholder for Google Map */}
               <img 
                 src="https://placehold.co/1200x500/e2e2e2/666666?text=Google+Maps+Location+SUN+Architecture" 
                 alt="Location Map"
                 className="w-full h-full object-cover"
               />
            </div>
            <p className="text-[11px] text-gray-800">
              <span className="font-bold">Văn phòng:</span> 189 Nguyễn Tất Thành, Quận Hải Châu, TP. Đà Nẵng
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </MainLayout>
  );
}

import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  const getBreadcrumb = () => {
    const path = location.pathname;
    if (path === "/ve-chung-toi") return "VỀ CHÚNG TÔI";
    if (path === "/khach-hang") return "KHÁCH HÀNG";
    if (path === "/the-manh") return "THẾ MẠNH";
    if (path === "/du-an") return "DỰ ÁN";
    if (path === "/doi-tac") return "ĐỐI TÁC";
    return "";
  };

  const breadcrumb = getBreadcrumb();

  return (
    <footer className="w-full">
      {/* Call to Action Section */}
      <div className="bg-gray-100 py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {breadcrumb && (
            <div className="text-[9px] md:text-[10px] text-gray-500 mb-6 md:mb-8 tracking-widest">
              TRANG CHỦ &gt; <span className="font-bold">{breadcrumb}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 md:p-6 shadow-sm border-r-4 border-troy-red flex items-center justify-between group hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="text-gray-400 group-hover:text-troy-red transition-colors">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[10px] md:text-xs font-bold text-gray-800 tracking-widest uppercase">DỰ ÁN</h3>
                  <p className="text-[8px] md:text-[10px] text-gray-400 mt-1 uppercase leading-tight">
                    Tổng hợp các dự án tiêu biểu đã thực hiện trên toàn quốc.
                  </p>
                </div>
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-gray-100 flex items-center justify-center text-troy-red group-hover:bg-troy-red group-hover:text-white transition-all">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white p-5 md:p-6 shadow-sm border-r-4 border-troy-red flex items-center justify-between group hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="text-gray-400 group-hover:text-troy-red transition-colors">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[10px] md:text-xs font-bold text-gray-800 tracking-widest uppercase">LIÊN HỆ</h3>
                  <p className="text-[8px] md:text-[10px] text-gray-400 mt-1 uppercase leading-tight">
                    Sẵn sàng lắng nghe và phục vụ hotline: 0948 343 034
                  </p>
                </div>
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-gray-100 flex items-center justify-center text-troy-red group-hover:bg-troy-red group-hover:text-white transition-all">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-troy-red font-serif font-bold text-3xl tracking-tighter transition-all duration-500 hover:tracking-widest cursor-pointer">
                TROY
              </span>
              <span className="text-black text-sm ml-1.5 font-light tracking-[0.3em] mt-1.5 uppercase opacity-70">
                architecture
              </span>
            </div>
            <div className="space-y-3 text-center md:text-left">
              <p className="text-[11px] md:text-xs text-gray-800">
                <span className="font-bold">Văn phòng:</span> 189 Nguyễn Tất Thành, Quận Hải Châu, TP. Đà Nẵng
              </p>
              <p className="text-[11px] md:text-xs text-gray-800">
                <span className="font-bold">Email:</span> info@troy.vn
              </p>
              <p className="text-[11px] md:text-xs text-gray-800">
                <span className="font-bold">Hotline:</span> 0948 343 034
              </p>
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-[10px] md:text-xs font-bold text-gray-800 uppercase tracking-widest">DỰ ÁN</h3>
            <ul className="text-[11px] md:text-xs text-gray-500 space-y-2">
              <li>- Dự Án Tổ Hợp Vui Chơi Giải Trí</li>
              <li>- Dự Án Khách Sạn Resort</li>
              <li>- Dự Án Văn Phòng</li>
              <li>- Dự Án Biệt Thự Villa</li>
              <li>- Dự Án Nhà Phố</li>
              <li>- Dự Án Nội Thất</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-50 py-4 text-center border-t border-gray-100">
        <p className="text-[9px] md:text-[10px] text-gray-400 tracking-widest uppercase opacity-70">© 2025 TROY Architecture</p>
      </div>
    </footer>
  );
}
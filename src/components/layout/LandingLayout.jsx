// components/layout/LandingLayout.jsx
export default function LandingLayout({ children }) {
  return (
    <div className="grid grid-cols-3 h-screen">
      {/* ảnh bên trái */}
      <div className="col-span-2 bg-cover bg-center">
        {children}
      </div>

      {/* logo + welcome */}
      <div className="flex flex-col items-center justify-center">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-red-600">SUN</h1>
      </div>
    </div>
  );
}
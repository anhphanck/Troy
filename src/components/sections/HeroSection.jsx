// HeroSection.jsx
export default function HeroSection() {
  return (
    <div className="h-screen relative">
      <img
        src="/images/home/hero.jpg"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center flex-col text-white">
        <h1 className="text-5xl font-bold mb-4">VỀ CHÚNG TÔI</h1>
        <p className="text-lg">Sứ mệnh và giá trị cốt lõi</p>
      </div>
    </div>
  );
}
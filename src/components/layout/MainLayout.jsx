// MainLayout.jsx
import Navbar from "../common/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="pt-24">{children}</div>
    </>
  );
}
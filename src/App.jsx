import { AnimatePresence } from "framer-motion";
import AppRoutes from "./routes";

function App() {
  return (
    <AnimatePresence mode="wait">
      <AppRoutes />
    </AnimatePresence>
  );
}

export default App;
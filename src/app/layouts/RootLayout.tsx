import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ChatBubble } from "../components/ChatBubble";
import { ScrollToTop } from "../components/ScrollToTop";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <ChatBubble />
    </div>
  );
}
import SpotlightPiece from "@/components/SpotlightPiece/SpotlightPiece";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function HomePage() {
  return <>
  <Header/>
  <main>
  <h1 className="title">Discover</h1>
    <SpotlightPiece/>
  </main>
    <Footer/>
  </>
}

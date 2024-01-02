import Image from "next/image";
import hyperboreaBlack from "@/public/hyperborea preto.png";
import "@/styles/home.scss"

export default function Home() {
  return (
    <>
      <section className="main-page">
        <Image src={hyperboreaBlack} alt="Hyperborea logo"/>
        <h2 className="main__title">Explore Hyperborea complete discography</h2>
      </section>
    </>
  );
}

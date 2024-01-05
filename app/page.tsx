import Image from "next/image";
import hyperboreaBlack from "@/public/hyperborea preto.png";
import "@/styles/home.scss";

export default function Home() {
  return (
    <>
      <section className="main-page">
        <div>
          <h1 className="main__title">Hyperborea Sound Distribution</h1>
          <div>
            <p className="main__description">
              A label that focus on exploring the various sound of electronic, jazz and funk music to beyond imagination, as far as we can.
            </p>
          </div>
          <div className="main__links">
            <i></i>
          </div>
        </div>
      </section>
    </>
  );
}


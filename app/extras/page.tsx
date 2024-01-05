import "@/styles/extras.scss";
import { ImageIcon } from "@radix-ui/react-icons";

export default function Extras() {
  return(
    <section className="extra">
      <div className="form--container">
        <form method="POST">
          <h2>Hyperborea Album Form</h2>
          <div>
            <label className="label-def">Title</label>
            <input className="input-def" type="text" id="title" placeholder="Album title"/>
          </div>
          <div>
            <label className="label-def">Artist</label>
            <input className="input-def" type="text" id="artist" placeholder="Artist name" />
          </div>
          <div>
            <label className="label-def">Genre</label>
            <input className="input-def" type="text" id="genre" placeholder="Genre name" />
          </div>
          <div>
            <label className="label-def">Year</label>
            <input className="input-def" type="number" id="year" placeholder="Release year" />
          </div>
          <div>
            <label className="label-def">Tunes (separate with comma)</label>
            <input className="input-def" type="text" id="tunes" placeholder="Track list" />
          </div>
          <div>
            <label className="label-def input__file--label">
              <ImageIcon />
              Album Image
              <input type="file" accept="image/*" placeholder="dar o cu" className="js-input-image-cover input__file--hidden"/>
            </label>
          </div>
          <div>
            <button className="default-btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

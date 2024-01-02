export default function Extras() {
  return(
    <section className="extra">
      <div className="form--contaier">
        <form method="POST">
          <div>
            <label className="label-def">Title</label>
          </div>
          <div>
            <label className="label-def">Artist</label>
          </div>
          <div>
            <label className="label-def"></label>
          </div>
          <div>
            <label className="label-def"></label>
          </div>
          <div>
            <label className="label-def"></label>
          </div>
          <div>
            <button className="default-btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
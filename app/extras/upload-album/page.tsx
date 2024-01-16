const AlbumForm = (): JSX.Element => {
  // separate inputs into other documents to facilitate validation;

  return (
    <div className="upload-album">
      <header>
        <h1>Upload the album</h1>
      </header>
      <div>
        <form>
          <div>
            <label>Title</label>
            <input type="text" name="title" placeholder="Album title" />
            <div>
              <label>Release year</label>
              <input type="text" name="release_year" placeholder="Optional" />
            </div>
          </div>
          <div>
            <label>Genres</label>
            <input type="text" name="genres" placeholder="Separate genres with a comma" />
          </div>
          <div>
            <label>Image</label>
            <input type="text" name="image" placeholder="Album title" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AlbumForm

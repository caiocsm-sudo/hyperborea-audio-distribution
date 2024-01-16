"use client"

import "@/styles/extras.scss"
import { ImageIcon } from "@radix-ui/react-icons"
import { BaseSyntheticEvent, useState } from "react"

interface Album {
  title: string
  releaseYear: number
}

export default function Extras() {
  const [album, setAlbum] = useState<Album>({ title: '', releaseYear: new Date().getFullYear() })
  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault()

    const res = await fetch("/api/albums", {
      method: "POST",
      body: JSON.stringify(album)
    })

    const serverRes = await res.json()

    console.log(serverRes)
  }

  return (
    <section className="extra">
      <div className="form--container">
        <form method="POST">
          <h2>Hyperborea Album Form</h2>
          <div>
            <label className="label-def">Title</label>
            <input
              className="input-def"
              name="title"
              type="text"
              id="title"
              placeholder="Album title"
            />
            <div>
              <div>
                <label className="label-def">Year</label>
                <input
                  className="input-def"
                  name="year"
                  type="number"
                  id="year"
                  placeholder="Release year"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="label-def">Artist</label>
            <input
              className="input-def"
              name="artist"
              type="text"
              id="artist"
              placeholder="Artist name"
            />
          </div>
          <div>
            <label className="label-def">Genre</label>
            <input
              className="input-def"
              type="text"
              name="genre"
              id="genre"
              placeholder="Separate genres with a comma"
            />
          </div>
          <div>
            <label className="label-def">Tunes (separate with comma)</label>
            <input
              className="input-def"
              name="tunes"
              type="text"
              id="tunes"
              placeholder="Track list"
            />
          </div>
          <div>
            <label className="label-def input__file--label">
              <ImageIcon />
              Album Image
              <input
                type="file"
                name="cover"
                accept="image/*"
                placeholder="dar o cu"
                className="js-input-image-cover input__file--hidden"
              />
            </label>
          </div>
          <div>
            <button
              className="default-btn"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

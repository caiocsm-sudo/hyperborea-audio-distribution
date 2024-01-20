"use client"

import "@/styles/extras.scss"
import { ImageIcon } from "@radix-ui/react-icons"
import { BaseSyntheticEvent, useState } from "react"

interface Album {
  title: string
  artist: string
  releaseYear: number
  genres: string[]
  coverImage: string
  songs: string[]
}

export default function Extras() {
  const emptyAlbum = {
    title: "",
    artist: "Ckaeiront",
    releaseYear: new Date().getFullYear(),
    genres: [""],
    coverImage: "",
    songs: [""],
  }

  const [album, setAlbum] = useState<Album>(emptyAlbum)

  const handleOnChange = (field: string, value: string | number) => {
    setAlbum((prev: Album): Album => {
      if (field === "coverImage") console.log(value)

      if (field === "genres" || field === "tunes") {
        return {
          ...prev,
          [field]: value
            .toString()
            .split(",")
            .map((e) => e.trim()),
        }
      } else {
        return {
          ...prev,
          [field]: value,
        }
      }
    })

    console.log(album)
  }

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault()

    const res = await fetch("/api/albums", {
      method: "POST",
      body: JSON.stringify(album),
    })

    const serverRes = await res.json()

    console.log(serverRes)
  }

  return (
    <section className="extra">
      <div className="form--container">
        <form method="POST">
          <h2>Submit an Album</h2>
          <div className="dual-form">
            <div>
              <label className="label-def">Title</label>
              <input
                className="input-def"
                name="title"
                type="text"
                id="title"
                onChange={(e: BaseSyntheticEvent) =>
                  handleOnChange("title", e.target.value)
                }
                placeholder="Album title"
              />
            </div>
            <div>
              <label className="label-def">Year</label>
              <input
                className="input-def"
                name="year"
                type="number"
                id="year"
                onChange={(e: BaseSyntheticEvent) =>
                  handleOnChange("releaseYear", e.target.value)
                }
                placeholder="Release year"
              />
            </div>
          </div>
          <div>
            <label className="label-def">Artist</label>
            <input
              className="input-def"
              name="artist"
              type="text"
              id="artist"
              onChange={(e: BaseSyntheticEvent) =>
                handleOnChange("artist", e.target.value)
              }
              placeholder="Artist name"
            />
          </div>
          <div>
            <label className="label-def">Genre (separate with comma)</label>
            <input
              className="input-def"
              type="text"
              name="genre"
              id="genre"
              onChange={(e: BaseSyntheticEvent) =>
                handleOnChange("genres", e.target.value.split(","))
              }
              placeholder="Genre list"
            />
          </div>
          <div>
            <label className="label-def">Tunes (separate with comma)</label>
            <input
              className="input-def"
              name="tunes"
              type="text"
              id="tunes"
              onChange={(e: BaseSyntheticEvent) =>
                handleOnChange("tunes", e.target.value.split(","))
              }
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
                onChange={(e: BaseSyntheticEvent) =>
                  handleOnChange("coverImage", e.target.value)
                }
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

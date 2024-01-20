"use client"

import { BaseSyntheticEvent, useState } from "react"

interface Tune {
  title: string
  duration: number
  artist: string
  album?: string
}

import { UploadIcon } from "@radix-ui/react-icons"

const SongForm = (props: {}) => {
  // todo = first, post the tunes into database, then reference them id into album schema

  const [tune, setTune] = useState<Tune>({
    title: "",
    duration: 0,
    artist: "Ckaeiront",
    album: "",
  })

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()
  }

  const handleTuneSubmit = (e: BaseSyntheticEvent) => {
    console.log()
  }

  return (
    <div className="tune-form">
      <div className="title">
        <h2>Insert a tune</h2>
      </div>
      <form>
        <div>
          <label className="label-def input__file--label">
            <UploadIcon />
            Upload Song
            <input
              type="file"
              name="tune"
              accept="audio/*"
              placeholder="Upload song"
              onChange={handleTuneSubmit}
              className="js-input-image-cover input__file--hidden"
            />
          </label>
        </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            className="input-def"
            name="title"
            placeholder="Song title"
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            className="input-def"
            name="title"
            placeholder="Song duration"
          />
        </div>
        <div>
          <label>Artist</label>
          <input
            type="text"
            className="input-def"
            name="artist"
            placeholder="Song artist"
          />
        </div>
        <div>
          <label>Album (Leave empty if it's a single)</label>
          <input
            type="text"
            className="input-def"
            name="title"
            placeholder="Song album"
          />
        </div>
      </form>
    </div>
  )
}

export default SongForm

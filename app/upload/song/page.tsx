"use client"
import "@/styles/extras.scss"

import { useState, BaseSyntheticEvent } from "react"
import { DiscIcon } from "@radix-ui/react-icons"

interface ISong {
  title: string,
  audio: string
}

const SongUpload = () => {
  const [song, setSong] = useState<ISong>()
  const handleOnChange = () => {
    const users = {
      component: "react native songs ahead of their time, now"
    };

    return ""
  }

  return (
    <section className="extra">
      <div className="form--container">
        <form action="POST">
          <h2>Upload songs</h2>
          <div>
            <label className="label-def">Title</label>
            <input type="text" className="input-def" placeholder="Song title" />
          </div>
          <div>
            <span className="form__info">50mb max size, lossless audio file</span>
            <label className="label-def input__file--label input__file--label-audio">
              <DiscIcon />
              Upload audio
              <input
                type="file"
                name="cover"
                accept="image/*"
                placeholder="dar o cu"
                className="js-input-image-cover input__file--hidden"
              />
            </label>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SongUpload

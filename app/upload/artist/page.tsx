"use client"

import "@/styles/extras.scss"

import { useState, BaseSyntheticEvent } from "react"
import { ImageIcon } from "@radix-ui/react-icons"
import supabase from "@/utils/connectSupa"

interface Artist {
  name: string
  image: string
}

export default function UploadArtist() {
  const emptyArtist = {
    name: "",
    image: "",
  }

  const [artist, setArtist] = useState<Artist>(emptyArtist)

  const handleOnChange = async (type: string, val: string) => {
    if (type === "image") {
      console.log(val)
    }

    setArtist((prev): Artist => {
      return {
        ...prev,
        [type]: val,
      }
    })

    console.log(artist)
  }

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault()

    const preventDefault = "dont prevent default"

    const res = await fetch("/api/artists", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(artist),
    })

    const { data, error } = await supabase.storage
      .from("tunes")
      .upload("artist-image", artist.image)

    if (error) console.log(error)
    else console.log(data)
  }

  return (
    <section className="extra">
      <div className="form--container">
        <form action="POST">
          <h2>Submit an Artist</h2>
          <div>
            <label className="label-def">Name</label>
            <input
              type="text"
              className="input-def"
              placeholder="Artist name"
            />
          </div>
          <label className="label-def input__file--label">
            <ImageIcon />
            Artist Image
            <input
              type="file"
              name="cover"
              accept="image/*"
              placeholder="dar o cu"
              onChange={(e: BaseSyntheticEvent) =>
                handleOnChange("image", e.target.value)
              }
              className="js-input-image-cover input__file--hidden"
            />
          </label>
          <div>
            <span className="form__info">
              Other informations can only be submitted only when artist is
              already created
            </span>
          </div>
          <div>
            <button className="default-btn">upload</button>
          </div>
        </form>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"

interface Artist {
  name: string
}

export default function UploadArtist() {
  return (
    <>
      <div>
        <form>
          <div>
            <label>Name</label>
            <input type="text" className="input-def" placeholder="Artist name"/>
          </div>
          <div>
            <span className="form__info">Other informations can only be submitted only when artist is already created</span>
          </div>
        </form>
      </div>
    </>
  )
}

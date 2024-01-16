"use client"

import { useState } from "react"

const SongForm = (props: {}) => {
  const [tune, setTune] = useState()
  return (
    <div className="tune-form">
      <div className="title"></div>
    </div>
  )
}

export default SongForm

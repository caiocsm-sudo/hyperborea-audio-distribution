"use client"

import "@/styles/auth-form.scss"
import Link from "next/link"
import { BaseSyntheticEvent, useState } from "react"

import { UserLogin } from "@/utils/authProtocols"

export default function SignIn() {
  const emptyUser: UserLogin = { email: "", password: "" }
  const [user, setUser] = useState<UserLogin>(emptyUser)

  const handleOnChange = (field: string, val: string) => {
    setUser((prev) => {
      return { ...prev, [field]: val }
    })

    console.log(user)
  }

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault()

    const res = await fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })

    console.log(res.status)

    console.log("user signed up");

    setUser(prev => emptyUser)
  }

  return (
    <form className="auth__form">
      <h2>Sign In</h2>
      <div>
        <label className="label-def">Email</label>
        <input
          type="text"
          className="input-def"
          placeholder="Type your email"
          onChange={(e: BaseSyntheticEvent) =>
            handleOnChange("email", e.target.value)
          }
        />
      </div>
      <div>
        <label className="label-def">Password</label>
        <input
          type="password"
          className="input-def"
          placeholder="Type your password"
          onChange={(e: BaseSyntheticEvent) =>
            handleOnChange("password", e.target.value)
          }
        />
      </div>
      <div>
        <button type="submit" className="default-btn" onClick={handleSubmit}>
          Sign In
        </button>
      </div>
      <div>
        <span className="form--no-account">
          Don't have an account? <Link href="/signup">Sign up</Link>
        </span>
      </div>
    </form>
  )
}

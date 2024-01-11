"use client"

import Toast from "@/components/Toast"
import "@/styles/auth-form.scss"
import Link from "next/link"
import { BaseSyntheticEvent, useContext, useState } from "react"
import { ToastContext, ToastContextProtocol } from "@/utils/controllers/ToastContext"

import { UserProtocol, emptyToast, emptyUser } from "@/utils/authProtocols"

export default function SignUp() {
  const [user, setUser] = useState<UserProtocol>(emptyUser)
  const [errorMessage, setErrorMessage] = useState<UserProtocol>(emptyUser)
  // const [toastOpts, setToastOpts] = useState<ToastOptProtocol>(emptyToast)
  const [toastOpts, setToastOpts] = useContext(ToastContext) as ToastContextProtocol

  const setErrorFn = (prev: UserProtocol, field: string, message: string) => {
    return { ...prev, [field]: message }
  }

  const handleInputValue = (field: string, val: string) => {
    setUser((prev) => {
      return { ...prev, [field]: val }
    })

    // FIXME: if it can pass to the last block, every error goes away
    if (field === "username" && val.length >= 20) {
      setErrorMessage((prev) => setErrorFn(prev, field, "The name is too long"))
    } else if (field === "email" && !val.includes("@")) {
      setErrorMessage((prev) => setErrorFn(prev, field, "Invalid email"))
    } else if (field === "password" && val.length < 6) {
      setErrorMessage((prev) =>
        setErrorFn(prev, field, "Password is not long enough")
      )
    } else {
      setErrorMessage(() => emptyUser)
    }
  }

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault()
    if (errorMessage.email || errorMessage.username) return

    const res = await fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })

    const serverResponse = await res.json()

    console.log(serverResponse);

    if (res.status === 200 || res.status === 500) {
      setToastOpts({
        visible: true,
        status: "Success",
        message: "User created successfully",
      })
    } else if (serverResponse.errorMessage.contains("Error")) {
      setToastOpts({
        visible: true,
        status: "Error",
        message: serverResponse.errorMessage,
      })
    }

    setUser((prev) => emptyUser)

    setTimeout(() => {
      setToastOpts(emptyToast)
    }, 3000)
  }

  return (
    <>
      <form className="auth__form">
        <h2>Create Account</h2>
        <div>
          <label className="label-def">Username</label>
          <input
            type="text"
            className="input-def"
            placeholder="Type your username"
            name="username"
            onChange={(e: BaseSyntheticEvent) =>
              handleInputValue("username", e.target.value)
            }
            value={user.username || ""}
            style={
              errorMessage.username.length > 0
                ? { border: "1px solid red" }
                : {}
            }
          />
          <span className="warn">{errorMessage?.username}</span>
        </div>
        <div>
          <label className="label-def">Email</label>
          <input
            type="text"
            className="input-def"
            name="email"
            placeholder="Type your email"
            onChange={(e: BaseSyntheticEvent) =>
              handleInputValue("email", e.target.value)
            }
            style={
              errorMessage.email.length > 0 ? { border: "1px solid red" } : {}
            }
            value={user.email || ""}
          />
          <span className="warn">{errorMessage?.email}</span>
        </div>
        <div>
          <label className="label-def">Password</label>
          <input
            type="password"
            className="input-def"
            name="password"
            placeholder="Type your password"
            onChange={(e: BaseSyntheticEvent) =>
              handleInputValue("password", e.target.value)
            }
            style={
              errorMessage.password.length > 0
                ? { border: "1px solid red" }
                : {}
            }
            value={user.password || ""}
          />
          <span className="warn">{errorMessage?.password}</span>
        </div>
        <div>
          <button className="default-btn" type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
        <div>
          <span className="form--no-account">
            Already have an account? <Link href="/signin">Sign in</Link>
          </span>
        </div>
      </form>
      <Toast />
    </>
  )
}

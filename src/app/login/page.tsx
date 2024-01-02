"use client"
import React, { ChangeEvent, useEffect } from "react"
import { useRouter } from "next/navigation"
import useLogin from "@/hooks/useLogin"

function Page() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const { mutate: onLogin } = useLogin({
    onSuccess(data) {
      console.log(data)
    },
  })

  const handleForm = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    onLogin({ email, password })
  }

  useEffect(() => {})
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Page

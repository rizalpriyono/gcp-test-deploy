"use client"

import { TypeAccount } from "@/constants/type"
import useCreateUser from "@/hooks/useCreateUser"
import { ChangeEvent, useState } from "react"

type TRegistrationFormProps = {
  type: TypeAccount
}

const RegistrationForm = ({ type }: TRegistrationFormProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { mutate } = useCreateUser({
    onSuccess(data) {
      console.log(data)
    },
    onError(err: any) {
      console.log("error:", err)
    },
  })

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    mutate({
      email,
      password,
      type,
    })
  }
  return (
    <div>
      <form className="flex flex-col gap-2 w-96" onSubmit={handleSubmit}>
        <input
          className="border"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
          type="email"
        />
        <input
          className="border"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="password"
          type="password"
        />

        <button className="bg-slate-300" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm

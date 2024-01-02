import { TypeAccount } from "@/constants/type"
import { auth } from "@/firebase/config"
import { database } from "@/firebase/config"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"

import { createMutation } from "react-query-kit"

type TInputVariable = {
  email: string
  password: string
  type: TypeAccount
}

const useCreateUser = createMutation({
  mutationFn: async ({ email, password, type }: TInputVariable) => {
    const result = await createUserWithEmailAndPassword(auth, email, password)

    const data = {
      name: result.user.displayName,
      email: email,
      type: type,
      role: [],
    }
    if (result) {
      await setDoc(doc(database, "users", result.user.uid), data)
    }

    return {
      ...data,
      uid: result.user.uid,
    }
  },
})

export default useCreateUser

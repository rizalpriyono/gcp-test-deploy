import { TypeAccount } from "@/constants/type"
import { auth } from "@/firebase/config"
import { database } from "@/firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"

import { createMutation } from "react-query-kit"

type TInputVariable = {
  email: string
  password: string
}

const useLogin = createMutation({
  mutationFn: async ({ email, password }: TInputVariable) => {
    const result = await signInWithEmailAndPassword(auth, email, password)

    const docRef = await getDoc(doc(database, "users", result.user.uid))
    const userData = docRef.data()

    console.log(userData)
    return result
  },
})

export default useLogin

import { TypeAccount } from "@/constants/type"
import RegistrationForm from "../components/RegistrationForm"

const Page = () => {
  return (
    <div>
      Register Cleaner
      <RegistrationForm type={TypeAccount.CLEANER} />
    </div>
  )
}

export default Page

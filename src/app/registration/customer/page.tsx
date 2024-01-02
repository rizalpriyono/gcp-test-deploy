import { TypeAccount } from "@/constants/type"
import RegistrationForm from "../components/RegistrationForm"

const Page = () => {
  return (
    <div>
      Register Customer
      <RegistrationForm type={TypeAccount.CUSTOMER} />
    </div>
  )
}

export default Page

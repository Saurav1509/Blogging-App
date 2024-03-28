import Button from "../components/Button";
import FieldHeader from "../components/FieldHeader";
import InputField from "../components/InputField";
import LoginHeader from "../components/LoginHeader";

export default function Signin() {
  return <div className="flex justify-center items-center h-screen">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className=" px-6 py-4 w-full text-center">
          <LoginHeader label={"Sign Up"} />
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-center pt-4">
          Enter your information to create a new account
        </div>
        <div className="py-2 px-2">

          <FieldHeader label={"Email ID"} />
        </div>
        <div className="py-2 px-2">
          <InputField label={"example@email.com"} />
        </div>
        <div className="py-2 px-2">
          <FieldHeader label={"Password"} />
        </div>
        <div className="py-2 px-2">
          <InputField label={"Password"} />
        </div>
        <div className="flex justify-center py-5">
          <Button label={"Sign Up"} />
        </div>
      </div>
    </div>
  </div>
}

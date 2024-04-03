import { signInData, signUpData } from "@saurav1509/medium-common";
import Button from "../components/Button";
import FieldHeader from "../components/FieldHeader";
import InputField from "../components/InputField";
import LoginHeader from "../components/LoginHeader";
import { useState } from "react";
import { Link } from "react-router-dom";


export const Auth = ({ type }: { type: "signup" | "signin" }) => {

  const [postInputs, setPostInputs] = useState<signInData>({
    name: "",
    username: "",
    password: ""
  })

  return (
    <div className="flex justify-center items-center h-screen rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className=" px-6 py-4 w-full text-center">
          <LoginHeader label={type === "signup" ? "Create an Account" : "Sign In to your Account"} />
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-center pt-4">
          {type === "signup" ? "Provide your information to register. Already have an account?" : "Enter your Credentials below to Login. Don't already have an account?"}
          <Link className="pl-2 underline" to={type === "signup" ? "/signin" : "/signup"}>{type === "signup" ? "Sign In" : "Sign Up"}</Link>
        </div>
        <div className="py-2 px-2">
          <FieldHeader label={"Email ID"} />
        </div>
        <div className="py-2 px-2">
          <InputField label={"example@email.com"} onChange={(e) => {
            setPostInputs({
              ...postInputs,
              name: e.target.value
            })
          }} />
        </div>
        <div className="py-2 px-2">
          <FieldHeader label={"Password"} />
        </div>
        <div className="py-2 px-2">
          <InputField label={"Password"} onChange={(e) => {
            setPostInputs({
              ...postInputs,
              name: e.target.value
            })
          }} type={"password"} />
        </div>
        <div className="flex justify-center py-5">
          <Button label={type === "signup" ? "Sign Up" : "Sign In"} />
        </div>
      </div>
    </div>
  )
}


import { Auth } from "../components/Auth";
import Quote from "../components/Quote";

export default function Signin() {
  return <div className="grid grid-cols-2">
    <div>
      <Auth type={"signup"} />
    </div>
    <div>
      <Quote />
    </div>
  </div>
}

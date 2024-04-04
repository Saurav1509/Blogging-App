import AvatarIcon from "./AvatarIcon"

export const Appbar = () => {
  return <div className="flex justify-between px-16 py-4 border-b">
    <div className="flex justify-center flex-col">
      Bungaku
    </div>

    <div>
      <AvatarIcon authorLetter="S" size="large" />
    </div>
  </div>
}

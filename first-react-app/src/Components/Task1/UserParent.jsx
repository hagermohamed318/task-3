import { useState } from "react"
import UserChild from "./UserChild"

function UserParent() {
  const [name, setName] = useState("Hagar")
  const [age, setAge] = useState(21)
  const [year, setYear] = useState("4th Year University")

  return (
    <div>
      <h2>Parent</h2>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input type="number" value={age} onChange={e => setAge(e.target.value)} />
      <input value={year} onChange={e => setYear(e.target.value)} />
      <UserChild name={name} age={age} year={year} />
    </div>
  )
}
export default UserParent
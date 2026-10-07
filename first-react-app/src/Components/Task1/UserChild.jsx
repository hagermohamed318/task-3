function UserChild({ name, age, year }) {
  return (
    <div style={{background: '#f1f2f6', padding: '15px', marginTop: '15px', borderRadius: '8px'}}>
      <h3>Child Component</h3>
      <p><b>Name:</b> {name}</p>
      <p><b>Age:</b> {age}</p>
      <p><b>University Year:</b> {year}</p>
    </div>
  )
}
export default UserChild
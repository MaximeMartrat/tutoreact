const title = 'Hello World'
const style = { color: 'red' }
const showTitle = false
const todos = [
  'Faire une formation',
  'Trouver du travail',
  'Payer son loyer'
]
import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 18
  })
  const [count, setCount] = useState(0)

  const incrementAge = () => {
    setPerson({ ...person, age: person.age + 1 })
  }

  const incrementCount = () => {
    setCount(count + 1)
  }

  return <>
    <p>Age de {person.firstName} : {person.age}</p>
    <p>Compteur : {count}</p>
    <button onClick={incrementAge}>Un an de +</button>
    <button onClick={incrementCount}>Incrémenter</button>
  </>
}

export default App

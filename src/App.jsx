const title = 'Hello World'
const style = { color: 'red' }
const showTitle = false
const todos = [
  'Faire une formation',
  'Trouver du travail',
  'Payer son loyer'
]
function App() {
  return <>
    <Title color='red' id='monid' className='maclass' data-demo='demo'>Mon composant</ Title>
    {showTitle ? <h1 id="title" className="title" style={style} > {title}</h1> : <p>test</p>}
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
  </>
}

function Title({ color, children, hidden, ...props }) {
  if (hidden) {
    return null
  }
  return <h1 style={{ color: color }} {...props}>{children}</h1>
}

export default App

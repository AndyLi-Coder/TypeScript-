

function useState<Type>(initialState: Type): [Type, (newState: Type) => void] {
  let state = initialState
  function setState(newState: Type) {
    state = newState
  }
  return [state, setState]
}


const [count, setCount] = useState(100)
const [message, setMessage] = useState('123')
setCount('123')
const [state, setState] = useState<any[]>([])

export { }
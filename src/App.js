import { Component } from "react"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users
    `)
      .then((promise) => promise.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users }
        })
      )
  }

  onSearchChange = (event) => {
    const searchFiled = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchFiled }
    })
  }

  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}
export default App

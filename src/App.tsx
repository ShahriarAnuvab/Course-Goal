import { useState } from "react"
import Goal from "./Components/Goals/Goal"
import Header from "./Components/Header/Header"
import AddGoal from "./Components/AddGoal/AddGoal"

type Goal = {
  title: string,
  description: string
  id: number,
}


function App() {
  const [goal, setGoal] = useState<Goal[]>([])

  const handleAddGoals = (goal : string, description: string) => {
    setGoal(prev => {
      const newGoal = {
        title: goal,
        description: description,
        id: Math.random()

      }
      return [...prev, newGoal]
    })
  }

  const handleDelete = (id: number) => {
    const filter = goal.filter(element => element.id !== id)
    setGoal(filter)
  }

  return (
    <div >
      <div>
        <Header />
      </div>
      <div>
        <AddGoal onAdd={handleAddGoals}></AddGoal>
      </div>

      <div>
        {goal.map((element, indx) => (
          <Goal key={indx} title={element.title} description={element.description} id={element.id} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default App

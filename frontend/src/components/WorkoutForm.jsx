import { useState } from "react";
// import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
    const url = 'http://localhost:4000';
    // const { dispatch } = useWorkoutsContext()

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const workout = {title, load, reps}

        const response = await fetch(url + '/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }else{
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('New workout added', json)
            // dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new workout</h3>

            <label className='form-label'>Excersize title:</label>
            <input type="text" className='form-control' onChange={(e)=> setTitle(e.target.value)} value={title}/>

            <label className='form-label'>Load (in kg):</label>
            <input type="number" className='form-control' onChange={(e)=> setLoad(e.target.value)} value={load}/>

            <label className='form-label'>Reps:</label>
            <input type="number" className='form-control' onChange={(e)=> setReps(e.target.value)} value={reps}/>       

            <div className="d-grid gap-2 mt-2">
                <button className="btn btn-secondary">Add workout</button>
            </div> 
            {error && <div className="border border-primary mt-2 p-2 rounded text-danger">{error}</div>}
        </form>    
    )
}

export default WorkoutForm
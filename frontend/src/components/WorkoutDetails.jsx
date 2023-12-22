// import { useWorkoutsContext } from '../hooks/useWorkoutsContext'



const WorkoutDetails = ({workout}) => {
    // const { dispatch } = useWorkoutsContext()
    const url = 'http://localhost:4000';

    const handleClick = async () => {
        const response = await fetch(url + '/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        // if (response.ok) {
        //     dispatch({type: 'DELETE_WORKOUT', payload: json})
        // }
    }

    return (
        <div className="workout-details">
            <span onClick={handleClick} className="btn btn-sm btn-danger py-0 float-end">Delete</span>
            <h4>{workout.title}</h4>
            <p>
                <strong>Load (kg):</strong> {workout.load}
            </p>
            <p>
                <strong>Reps:</strong> {workout.reps}
            </p>
            <p>{workout.createdAt}</p> 
        </div>
    )
}

export default WorkoutDetails
import { useEffect, useState } from "react";
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

// import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

export default function home() {
    const [workouts, setWorkouts] = useState(null);
    // const [workouts, dispatch] = useWorkoutsContext(null);
    const url = 'http://localhost:4000';

    useEffect(() => {   
        const fetchWorkouts = async () => {         
            const response = await fetch(url + '/api/workouts/')
            const json = await response.json()
            if(response.ok){
                setWorkouts(json)
                // dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        fetchWorkouts()
    }, [])
// }, [dispatch])

    return (
        <div className="home">
            <div className="workouts row m-0">
                <div className="col-8">
                    {workouts && workouts.map((workout) => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    ))}
                </div>
                <div className="col-4">
                    <WorkoutForm />
                </div>
            </div>
        </div>
    );
}

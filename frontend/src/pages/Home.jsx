import { useEffect, useState } from "react";
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

export default function home() {
    const url = 'http://localhost:4000';
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {   
        const fetchWorkouts = async () => {
            try{
                const response = await fetch(url + '/api/workouts/')
                const json = await response.json()
                if(response.ok){
                    setWorkouts(json)
                }
            }catch(error){
                console.log(error)
            }            
        }
        fetchWorkouts()
    }, [])

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

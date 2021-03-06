import React, {useState, useEffect} from 'react';
import {Container, Row, Col } from 'reactstrap';

const WorkoutIndex = (props) => {
    const [workouts, setWorkouts] = useState([]);
    const fetchWorkouts = () => {
        fetch('https://localhost:3000/log', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
            })
            .then((res) => res.json())
                .then((logData) => {
                    setWorkouts(logData)
        }) 
    };

    useEffect(() => {
    fetchWorkouts();
}, []);

    return (
        <Container>
            <Row>
                <Col md='3'>
                    {/* The create component will go here */}
                </Col>
                <Col md='9'>
                    <h2>Log a workout to see a table. This will be added to later pages.</h2>
                </Col>
            </Row>
        </Container>
    )
};

export default WorkoutIndex;
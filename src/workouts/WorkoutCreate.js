import React, {useState, useEffect} from 'react';
import { Button, Form, FormGroup, Label, Imput } from 'reactstrap';

const WorkoutCreate = (props) => {
    const [description, setDescription] = useState('');
    const [definition, setDefinition] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://localhost:3000/log/', {
        method: 'POST', 
        body: JSON.stringify({ log: { description: description, definition: definition, result: result} }),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${props.token}`
        })
    }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setDescription('');
            setDefinition('');
            setResult('');
            props.fetchWorkouts();  
        })
    };
    return (
        <>
            <h3>Log a Workout</h3>
            <Form>
                <FormGroup>
                    <Label htmlFor='description' />
                    <Input name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='definition' />
                    <Input type='select' name='definition' value={definition} onChange={(e) => setDefinition(e.target.value)} />
                        <option value='Time'>Time</option>
                        <option value='Weigtht'>Weigtht</option>
                        <option value='Distance'>Distance</option>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='result' />
                    <Input name='result' value={result} onChange={(e) => setResult(e.target.value)} />
                </FormGroup>
            </Form>
            </>
        );
    };

    export default WorkoutCreate;
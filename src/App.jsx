import { useEffect, useState } from 'react';
import './App.scss';
import Grid from './components/Grid';

const sampleGridData = [
    [
        { value: "red" },
        { value: "blue" },
        { value: "yellow" },
        { value: "green" },
    ],
    [
        { value: "red" },
        { value: "green" },
        { value: "blue" },
        { value: "yellow" },
    ],
    [
        { value: "blue" },
        { value: "red" },
        { value: "green" },
        { value: "yellow" },
    ]
]

const initEmptyRow = num => {
    let row = new Array(num);
    for (let i = 0; i < num; i++) {
        row[i] = { value: null };
    }
    return row;
}

function App() {
    const [level, setLevel] = useState(4);
    const [options, setOptions] = useState([
        { value: "red" },
        { value: "blue" },
        { value: "yellow" },
        { value: "green" },
    ])
    const [userInput, setUserInput] = useState([]);
    const [grid, setGrid] = useState(sampleGridData);

    useEffect(() => {
      setUserInput(initEmptyRow(level));
    }, [level])
    
    return (
        <main>
            <Grid
                grid={grid}
                userInput={userInput}
                options={options}
                setUserInput={setUserInput}
            />
        </main>
    );
}

export default App;

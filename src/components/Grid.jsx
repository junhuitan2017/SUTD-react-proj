import React from 'react';
import Ball from './Ball';

export default function Grid({ grid, userInput, options, setUserInput }) {
    const optionClick = (selected) => {
        let prevInput = [...userInput];
        for (let inp of prevInput) {
            if (!inp.value) {
                inp.value = selected;
                setUserInput(prevInput);
                return;
            }
        }
    };

    const inputClick = (idx) => {
        let prevInput = [...userInput];
        prevInput[idx].value = null;
        setUserInput(prevInput);
    }

    return (
        <section id='grid'>
            <div id='user-option'>
                {/* // * User options area */}
                {options.map((opt, idx) => <Ball key={`option-${idx}`} type={'option'} value={opt.value} onClick={() => optionClick(opt.value)} />)}
            </div>
            <table>
                <thead>
                    {/* // * User answer area */}
                    <tr>
                        {userInput.map((ans, idx) => <th key={`input-${idx}`}><Ball type='display' value={ans.value} onClick={() => inputClick(idx)} /></th>)}
                    </tr>
                </thead>
                <tbody>
                    {/* // * Answer history */}
                    {grid.map((row, idx) => (
                        <tr key={`row-${idx}`}>
                            {row.map((cell, idx) => <td key={`display-${idx}`}><Ball type='display' value={cell.value} /></td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

// 10 Little Monkey Challenge
// Are you ready?
// Create a button that when clicked you will subtract one monkey from the total. If it is zero you should display the following:
// There is no more monkeys jumping on the bed
// Otherwise you should display the following:
// 10 monkeys jumping on the bed one fell of and bumped his head. Momma called the doctor and the doctor said. No more monkeys jumping on the bed.
// Create a new component
// use useState
// Initialize your monkey count to 10

import React, {useState} from 'react';

const MonkeyChallenge = () => {
    const [ count, setCount ] - useState(10);

    const handleMonkeyClick = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <button onClick={handleMonkeyCount}>Rip Monkey</button>
                <p>{count}</p>
                <p>There is no more monkeys jumping on the bed</p>
            </div>
        </div>
        
    )

}

export default TenLittleMonkeys;
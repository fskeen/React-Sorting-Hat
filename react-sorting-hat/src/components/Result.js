import React from 'react';

const resultArray = [
    {
        id: "gryff",
        name: "Gryffindor",
    }, {
        id: "slyth",
        name: "Slytherin"
    }, {
        id: "huff",
        name: "Hufflepuff"
    }, {
        id: "raven",
        name: "Ravenclaw"
    }
]

function Result ({id}) {

    const house = resultArray.find(item => item.id === id)
    console.log(resultArray.find(item => item.id === id))

    return (
        <div>
            <h4>You belong in {house.name} house!</h4>
        </div>
    )
}

export default Result;
import React from 'react';

export default function Search() {

    handleInputChange = event => {
        let value = event.target.value;
    };



    return (
        <>
            <input placeholder="Search"></input>
        </>
    );
}
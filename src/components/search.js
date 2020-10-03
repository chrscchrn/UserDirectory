import React from 'react';

export default function Search(props) {

    return (
        <form>
            <form className="search">
                <input placeholder="Search" onChange={props.handleInputChange}></input>
            </form>
        </form>
    );
}

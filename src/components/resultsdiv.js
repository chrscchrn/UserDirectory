import React from "react";



export default function ResultsDiv(props) {


    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Cell</th>
                        <th scope="col">email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map((obj, index) => 
                        <tr>
                            <td><img src={obj.image}/></td>
                            <td>{obj.first + " " + obj.last}</td>
                            <td>{obj.phone}</td>
                            <td>{obj.email}</td>
                            <td>{obj.dob}</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </>
    );
}

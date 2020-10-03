import React from "react";

export default function ResultsDiv(props) {

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name<button onClick={props.handleSortButton}><i class="fa fa-fw fa-sort"></i></button></th>
                        <th scope="col">Cell</th>
                        <th scope="col">email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {(!props.handleInputChange) ? 
                        props.employees.map((obj, index) => 
                            <tr key={index}>
                                <td><img alt="employeeRightHere" src={obj.image}/></td>
                                <td>{obj.name}</td>
                                <td>{obj.phone}</td>
                                <td>{obj.email}</td>
                                <td>{obj.dob}</td>
                            </tr>
                        ) : 
                        props.employeeSearch.map((obj, index) => 
                            <tr key={index}>
                                <td><img alt="employeeRightHere" src={obj.image}/></td>
                                <td>{obj.name}</td>
                                <td>{obj.phone}</td>
                                <td>{obj.email}</td>
                                <td>{obj.dob}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

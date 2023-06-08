import React, {Fragment, useState} from 'react';
import './App.css';
import UserForm from "./components/Form/UserForm";
import {IUser} from "./types";
import Users from "./components/Users/Users";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    const addNewUser = (newUser: IUser) => {
        setUsers((prevState) => [...prevState, newUser]);
    };

    return (
        <Fragment>
            <div className="container">
                <div className="wrap">
                    <h1 className="text-center mb-5">Users</h1>
                    <div className="row">
                        <div className="col-5">
                            <UserForm onSubmit={addNewUser}/>
                        </div>
                        <div className="col-7">
                            <Users users={users}/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default App;

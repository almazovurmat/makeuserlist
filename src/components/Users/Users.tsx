import React from 'react';
import {IUser} from "../../types";
import UserItem from "./UserItem";

interface IProps {
    users: IUser[];
}
const Users: React.FC <IProps> = ({users}) => {
    return (
        <>
            <h4>List of users</h4>
            <div className="user">
                <div className="card mb-2">
                    <div className="row no-gutters">
                        <div className="col-sm-12">
                            <div className="card-body">
                                <h6 className="card-title">Name: Admin <span className="status available"></span></h6>
                                <p className="card-text small">Email: superadmin@mail.com</p>
                                <p className="card-text">Role: Admin</p>
                                <p className="card-text">Status: Active</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user">
                <div className="card mb-2">
                    <div className="row no-gutters">
                        <div className="col-sm-12">
                            <div className="card-body">
                                <h6 className="card-title">Name: User <span className="status unavailable"></span></h6>
                                <p className="card-text small">Email: blockeduser@mail.com</p>
                                <p className="card-text">Role: User</p>
                                <p className="card-text">Status: Inactive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                users.map((user: IUser) => {
                    return <UserItem key={user.id} item={user} />
                })
            }
        </>
    );
};

export default Users;
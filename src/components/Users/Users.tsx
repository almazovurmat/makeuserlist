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
            {
                users.map((user: IUser) => {
                    return <UserItem key={user.id} item={user} />
                })
            }
        </>
    );
};

export default Users;
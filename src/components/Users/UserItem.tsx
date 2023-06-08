import React from 'react';
import {IUser} from "../../types";

interface IProps {
    item: IUser
}

const UserItem: React.FC<IProps> = ({item}) => {
    const cssClassName = `status ${item.active ? 'available' : 'unavailable'}`;

    return (
        <div className="user">
            <div className="card mb-2">
                <div className="row no-gutters">
                    <div className="col-sm-12">
                        <div className="card-body">
                            <h6 className="card-title">Name: {item.name} <span className={cssClassName}></span></h6>
                            <p className="card-text small">Email: <a href={`mailto: ${item.email}`}>{item.email}</a></p>
                        <p className="card-text">Role: {item.role}</p>
                            <p className="card-text">Status: {item.active ? 'Active' : 'Inactive'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserItem;
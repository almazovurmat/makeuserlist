import React, {useState} from 'react';
import {nanoid} from "nanoid";
import {IUser, IUserMutation} from "../../types";

interface IProps {
    onSubmit: (newUser: IUser) => void;
}
const UserForm: React.FC<IProps> = ({onSubmit}) => {
    const initialUserState: IUserMutation = {
        name: '',
        email: '',
        active: false,
        role: '',
    };

    const [user, setUser] = useState<IUserMutation>({
        name: '',
        email: '',
        active: false,
        role: '',
    });

    const userChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name: key, type, checked } = event.target as HTMLInputElement;
        const value = type === 'checkbox' ? checked : event.target.value;

        setUser(prevState => (
            {...prevState, [key]: value}
        ));
    };


    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (user.name.trim() === '' || user.email.trim() === '' || user.role.trim() === '') {
            alert('Please fill in all the fields');
            return;
        }

        onSubmit({
            id: nanoid(),
            ...user
        });

        setUser(initialUserState);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <h4>New user</h4>
            <div className="form-group row mb-2">
                <label className="col-sm-1 col-form-label" htmlFor="name">Name</label>
                <div className="col-sm-11">
                    <input
                        className="form-control"
                        type="text" name="name" id="name"
                        value={user.name}
                        onChange={userChange}
                    />
                </div>
            </div>

            <div className="form-group mb-2 row">
                <label className="col-sm-1 col-form-label" htmlFor="email">Email</label>
                <div className="col-sm-11">
                    <input className="form-control"
                           type="email"
                           name="email"
                           id="email"
                           value={user.email}
                           onChange={userChange}
                    />
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-8">
                    <div className="form-group">
                        <label className="col-sm-1 col-form-label" htmlFor="role">Role</label>
                        <select className="form-control"
                                name="role"
                                id="role"
                                value={user.role}
                                onChange={userChange}
                        >
                            <option value="user">User</option>
                            <option value="editor">Editor</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </div>

                <div className="col-md-4 mt-5">
                    <div className="form-check">
                        <input className="form-check-input"
                               type="checkbox" name="active"
                               id="active"
                               checked={user.active}
                               onChange={userChange}
                        />
                        <label className="form-check-label" htmlFor="active">Active</label>
                    </div>
                </div>
            </div>

            <div className="form-row text-center">
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add new user</button>
                </div>
            </div>
        </form>
    );
};

export default UserForm;
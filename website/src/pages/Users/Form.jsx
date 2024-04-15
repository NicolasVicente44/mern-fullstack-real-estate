import React from "react";

const Form = ({ user, setUser, submitForm, submitLabel }) => {
    // Ensure user object has default properties to avoid inputs being uncontrolled initially
    const getUserProp = (prop) => user && user[prop] ? user[prop] : '';

    return (
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" onChange={(e) => setUser({ ...user, firstName: e.target.value })} value={ getUserProp('firstName') } />
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" onChange={(e) => setUser({ ...user, lastName: e.target.value })} value={ getUserProp('lastName') } />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={(e) => setUser({ ...user, email: e.target.value })} value={ getUserProp('email') } />
            </div>

            <div>
                <label htmlFor="nickname">Nickname</label>
                <input type="text" id="nickname" name="nickname" onChange={(e) => setUser({ ...user, nickname: e.target.value })} value={ getUserProp('nickname') } />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e) => setUser({ ...user, password: e.target.value })} value={ getUserProp('password') || '' } />
            </div>

            <div>
                <label htmlFor="avatar">Avatar</label>
                <input type="file" id="avatar" name="avatar" onChange={(e) => setUser({ ...user, avatar: e.target.files[0] })} />
            </div>

            <button type="submit">
                { submitLabel }
            </button>
        </form>
    );
};

export default Form;

import React, { useState, useEffect } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "Mario",
        email: "mario@web.com",
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value,
        });
    };

    useEffect(() => {
      console.log('Email changed')
    }, [email]);
    

    return (
        <>
            <h1>Simple Form</h1>
            <div className="row">
                <div className="col-md-3">
                    <input type="text"
                        className='form-control'
                        placeholder='Username'
                        name='username'
                        value={ username }
                        onChange={ onInputChange }
                    />

                    <input type="email"
                        className='form-control mt-2'
                        placeholder='Email'
                        name='email'
                        value={ email }
                        onChange={ onInputChange }
                    />

                </div>

                { (username === 'Mario') &&
                    <Message />
                }

            </div>

            <hr />
        </>
    )
}

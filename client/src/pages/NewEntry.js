import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_ENTRY } from "../utils/mutations";


const NewEntry = () => {
    const [formState, setFormState] = useState({
        title: '',
        description: '',
    });
    const [addEntry, { error, data }] = useMutation(ADD_ENTRY);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addEntry({
                variables: { ...formState },
            });
            // { window.location }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header p-2">New Diary Entry</h4>
                    <div className="card-body">
                        {data ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/mydiary"></Link>
                            </p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <p for="title-input">How are you feeling today?</p>
                                <input
                                    className="w-50 form-input"
                                    placeholder="How are you feeling?"
                                    name="title"
                                    type="title"
                                    id='title-input'
                                    value={formState.title}
                                    onChange={handleChange}
                                />
                                <br></br>
                                <br></br>
                                <p >Tell me more:</p>
                                <textarea
                                    className="w-50 form-input"
                                    placeholder="Is there anything you'd like to say about today?"
                                    name="description"
                                    type="description"
                                    id='descript-input'
                                    value={formState.description}
                                    onChange={handleChange}
                                />
                                <br></br>
                                <button
                                    className="btn btn-block btn-info"
                                    style={{ cursor: 'pointer' }}
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        )}
                        {error && (
                            <div className="my-3 p-3 bg-danger text-white">
                                {error.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NewEntry;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_SIBLING } from "../utils/mutations";


const NewSibling = () => {
    const [formState, setFormState] = useState({
        relation: '',
        details: '',
    });
    const [addSibling, { error, data }] = useMutation(ADD_SIBLING);

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
            const { data } = await addSibling({
                variables: { ...formState },
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header p-2">Sign Up</h4>
                    <div className="card-body">
                        {data ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/family">back to the homepage.</Link>
                            </p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <input
                                    className="form-input"
                                    placeholder="What is this person's name?"
                                    name="name"
                                    type="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                />
                                <br></br>
                                <input
                                    className="form-input"
                                    placeholder="Are they your brother, sister, sibling?"
                                    name="relation"
                                    type="relation"
                                    value={formState.relation}
                                    onChange={handleChange}
                                />
                                <br></br>

                                <input
                                    className="form-input"
                                    placeholder="Is there anything you'd like to say about them"
                                    name="details"
                                    type="details"
                                    value={formState.details}
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

export default NewSibling;

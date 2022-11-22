import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PARENT } from "../utils/mutations";


const NewParent = () => {
    const [formState, setFormState] = useState({
        relation: '',
        details: '',
    });
    const [addParent, { error, data }] = useMutation(ADD_PARENT);

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
            const { data } = await addParent({
                variables: { ...formState },
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="justify-center mb-4">
            <div className="d-flex justify-content-center">
                <div className="justify-content-center card">
                    <h4 className="card-header p-2">Add a Parent</h4>
                    <div className="card-body">
                        {data ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/singlefamily"></Link>
                            </p>
                        ) : (
                            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleFormSubmit}>
                                <p>What is this person's name?</p>
                                <input
                                    className="w-50 form-input"
                                    placeholder="What is this person's name?"
                                    name="relation"
                                    type="relation"
                                    value={formState.relation}
                                    onChange={handleChange}
                                />
                                <br></br>
                                <p>Is there anything else you'd like to say?</p>
                                <input
                                    className="w-50 form-input"
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
                                <div></div>
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

export default NewParent;

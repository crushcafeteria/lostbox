import React, { useState } from "react";
import Select from "react-select";
import settings, { API_URL } from "../settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useAddLostItemMutation } from "../redux/LostItemsAPI";

const ReportLostItem = () => {
    const [type, setType] = useState('I_FOUND');
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [category, setCategory] = useState();
    const [location, setLocation] = useState();
    const [description, setDescription] = useState();

    let navigate = useNavigate();
    const [addLostItem] = useAddLostItemMutation();

    // Submit form
    const submitForm = (event) => {

        addLostItem({
            type: type,
            name: name,
            email: email,
            category: category,
            location: location,
            description: description
        })

        navigate('/');

        event.preventDefault();
    }

    return (
        <React.Fragment>
            <h2>
                <Link to='/' className='float-end btn btn-warning'>
                    <FontAwesomeIcon icon='arrow-left' /> Go Back
                </Link>
                <FontAwesomeIcon icon='plus-circle' fixedWidth /> Report a lost item
            </h2>

            <form className='mt-5' onSubmit={submitForm}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <label className="form-label">Your Names</label>
                            <input className={fieldCss(name)} type='text' name='name'
                                placeholder="Enter your names" value={name}
                                required
                                onChange={event => (setName(event.target.value))} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input className={fieldCss(email)} type='email' name='email'
                                placeholder="Enter your email" value={email}
                                required
                                onChange={event => setEmail(event.target.value)} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <label className="form-label">Category</label>
                            <Select options={settings.categories}
                                isSearchable={true}
                                defaultValue={category}
                                onChange={value => setCategory(value.value)} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                            {/* <small className="float-end">
                                <a href="#!">Choose on map</a>
                            </small> */}
                            <label className="form-label">Location</label>
                            <input className={fieldCss(location)} type='text' name='location'
                                placeholder="Enter your email" value={location}
                                required
                                onChange={event => setLocation(event.target.value)} />
                        </div>
                    </div>
                </div>
                {/* <div className="mb-3">
                    <label className="form-label">Upload a picture</label>
                    <input className="form-control form-control-lg" type='file' multiple={true}></input>
                </div> */}
                <div className="mb-3">
                    <label className="form-label">Provide as many details of the item as possible</label>
                    <textarea className={fieldCss(description)}
                        name='description'
                        value={description} required
                        onChange={event => setDescription(event.target.value)} />
                </div>

                <button type='submit' className="btn btn-success btn-lg mt-5">
                    <FontAwesomeIcon icon='check-circle' fixedWidth /> File a report
                </button>
            </form>
        </React.Fragment>
    );
}

function fieldCss(value) {
    // console.log(value)
    let css = 'form-control ';
    if (value === '') {
        css += 'border-danger';
    }
    return css
}



export default ReportLostItem;
import React from 'react';
import {Link} from "react-router-dom";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LostItem = (props) => {
    const {id, category, created_at_formatted, name, description, location, created_at} = props.item;
    const textLength = 90;

    return (
        <div className="col-12 col-sm-6 col-lg-3">
            <div className="card mb-5">
                <LazyLoadImage
                    src={"https://api.lorem.space/image?w=300&h=180&id=" + id}
                    width={300} height={180}
                    className="card-img-top"/>
                <div className="card-body">
                    <div className="col-12 mb-3">
                        <span className="text-muted float-end mt-1" title={created_at}>{created_at_formatted} ago</span>
                        <span className="badge text-bg-secondary">{category}</span>
                    </div>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {description.substring(0, textLength)}
                        {description.length >= textLength ? '...' : null}
                    </p>
                    <div className='text-muted mb-3'>
                        <FontAwesomeIcon icon='map-marker' fixedWidth/> {location?.location}
                    </div>
                    <Link to={`/lost-item/${id}`} className="btn btn-outline-primary w-100">
                        <FontAwesomeIcon icon='info-circle' fixedWidth/> Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LostItem;

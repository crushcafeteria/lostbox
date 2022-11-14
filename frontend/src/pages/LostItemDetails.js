import { Link, useParams } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFindLostItemQuery } from "../redux/LostItemsAPI";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loading from "../components/Loading";

const LostItemDetails = () => {

    const { id } = useParams();
    const { data: item, isLoading, error } = useFindLostItemQuery(id);
    console.log(item, error);

    if (isLoading) {
        return <Loading />
    }

    if (!isLoading) {
        return (
            <React.Fragment>
                <div className="col-12">
                    <Link to="/" className="btn btn-outline-warning float-end">
                        <FontAwesomeIcon icon='arrow-left' fixedWidth /> Go Back
                    </Link>
                    <h2>
                        <FontAwesomeIcon icon='info-circle' fixedWidth /> Lost Item Details
                    </h2>

                    <div className="row mt-5">
                        <div className="col-12 col-lg-5">
                            <LazyLoadImage
                                src={"https://api.lorem.space/image?w=1000&h=800&id=" + id}
                                className="img-fluid rounded" />
                        </div>
                        <div className="col-12 col-lg-7">
                            <div class="list-group">
                                <div class="list-group-item list-group-item-action">
                                    <div className="badge bg-secondary float-end">
                                        {item.category}
                                    </div>
                                    <p class="text-muted mb-2">Contact Name</p>
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">{item.name}</h5>
                                    </div>
                                </div>
                                <div class="list-group-item list-group-item-action">
                                    <p class="text-muted mb-2">Contact Email</p>
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">{item.email}</h5>
                                    </div>
                                </div>
                                <div class="list-group-item list-group-item-action">
                                    <p class="text-muted mb-2">Location</p>
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">{item.location.location}</h5>
                                    </div>
                                </div>
                                <div class="list-group-item list-group-item-action">
                                    <p class="text-muted mb-2">Description</p>
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">{item.description}</h5>
                                    </div>
                                </div>
                                <div class="list-group-item list-group-item-action">
                                    <p class="text-muted mb-2">Date Reported</p>
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">{item.created_at}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default LostItemDetails;
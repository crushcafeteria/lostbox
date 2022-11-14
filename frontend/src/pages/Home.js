import LostItem from "../components/LostItem";
import { useGetLostItemsQuery } from '../redux/LostItemsAPI';
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = () => {

    const dispatch = useDispatch();

    // Fetch data from API
    const { data: items, error, isLoading } = useGetLostItemsQuery();

    if (isLoading) {
        return <Loading />
    }

    if (items?.data.length) {
        return (
            <React.Fragment>
                <h2>
                    <Link to='/report-lost' className='float-end btn btn-success'>
                        <FontAwesomeIcon icon='plus-circle' fixedWidth /> List a lost item
                    </Link>
                    <FontAwesomeIcon icon='list-ul' fixedWidth /> Lost Items
                </h2>
                <div className="row row-cols-4 mt-4">
                    {items?.data.map(item => <LostItem key={item.id?.toString()} item={item} />)}
                </div>
                {paginator(items)}
            </React.Fragment>
        )
    }

    if (!items?.data.length) {
        if (error) {
            return <Error error={error} />;
        } else {
            return (
                <h4 className='text-center text-warning'>
                    <FontAwesomeIcon icon='exclamation-circle' size='2x' fixedWidth />
                    <br />
                    <br />
                    There are no items to display
                </h4>
            );
        }

    }
}

function paginator(items) {
    console.log(items)
    if (items?.last_page > items?.current_page) {
        return (
            <nav className='mb-5'>
                <ul className="pagination pagination-lg justify-content-center">
                    <li className="page-item">
                        <a className="page-link">Prev</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Home;
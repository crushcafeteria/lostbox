import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Error = (props) => {

    const error = 'The nature of this error is not known';

    if (props?.error) {
        const error = props.error.error
    }

    return (
        <React.Fragment>
            <h4 className='text-center text-warning'>
                <FontAwesomeIcon icon='exclamation-circle' size='2x' fixedWidth />
                <br />
                <br />
                An error occured while fetching data
            </h4>
            <div className='text-center'>
                <pre>{error}</pre>
            </div>
        </React.Fragment>
    );
}

export default Error;
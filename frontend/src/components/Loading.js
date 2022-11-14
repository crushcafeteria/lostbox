import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
    return (
        <h4 className='col-12 text-center text-primary'>
            <FontAwesomeIcon icon='refresh' size='2x' className='fa-spin-pulse' fixedWidth />
            <br />
            <br />
            Loading...
        </h4>
    );
}

export default Loading;
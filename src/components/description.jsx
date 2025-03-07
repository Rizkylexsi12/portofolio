import PropTypes from "prop-types";

function Description({ content }) {
    return (
        <>
            <p className="mt-5 text-2xl">{content}</p>
        </>
    );
}

Description.propType = {
    content: PropTypes.string
}

export default Description;
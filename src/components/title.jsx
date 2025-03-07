import PropTypes from "prop-types";

function Title({ name }) {
    return (
        <h1 className="font-(family-name:--font-nunito-sans) font-bold text-8xl">{name}</h1>
    );
}

Title.propTypes = {
    name: PropTypes.string
}

export default Title;
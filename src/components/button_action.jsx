import PropTypes from "prop-types";

function ButtonAction({ label }) {
    return (
        <button className="border-2 px-[25px] py-[6px] font-bold text-3xl rounded-[10px]">{label}</button>
    );
}

ButtonAction.propTypes = {
    label: PropTypes.string
}

export default ButtonAction;
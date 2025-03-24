import PropTypes from "prop-types";

function ButtonAction({ label, decoration, to }) {

    return (
        <a href={to} target="_blank" className="border-2 px-[25px] py-[6px] font-bold text-2xl rounded-[10px] transition duration-300 ease-in-out hover:scale-110 flex items-center cursor-pointer">{label}
            {decoration && (
            <svg className="ml-2" width="20" height="21" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_209_40)">
                    <path d="M4.80538 7.58809L4.80538 6.0551C4.80538 5.406 5.33019 4.88119 5.97584 4.88465L19.3964 4.8812C20.0455 4.8812 20.5703 5.406 20.5668 6.05165L20.5668 19.4756C20.5668 20.1247 20.042 20.6495 19.3964 20.6461L17.8634 20.6461C17.2074 20.6461 16.6791 20.104 16.6929 19.448L16.8897 11.3239L6.96675 21.2469C6.50755 21.7061 5.76868 21.7061 5.30947 21.2469L4.20462 20.142C3.74541 19.6828 3.74541 18.9439 4.20462 18.4847L14.1276 8.56174L6.00346 8.75854C5.344 8.77581 4.80193 8.24755 4.80538 7.58809Z" fill="black"/>
                </g>
                <defs>
                    <clipPath id="clip0_209_40">
                    <rect width="25" height="25" fill="white" transform="translate(-0.00939941 0.459595)"/>
                    </clipPath>
                </defs>
            </svg>
            )}
        </a>
    );
}

ButtonAction.propTypes = {
    label: PropTypes.string,
    decoration: PropTypes.bool,
    to: PropTypes.string
}

export default ButtonAction;
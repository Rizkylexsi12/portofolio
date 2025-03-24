import PropTypes from "prop-types";

function Card({ 
        title, 
        subtitle, 
        image = "/dummy.jpg", 
        to 
    }) {
    return (
        <a href={to} className="rounded-lg px-[20px] py-[20px] w-[296px] border-2 border-gray-300 transition duration-300 ease-in-out hover:scale-110 cursor-pointer">
            <img src={image} className="w-[258px] h-[191px] rounded-lg"/>
            <h1 className="font-bold text-2xl my-3">{title}</h1>
            <hr/>
            <p className="my-5">{subtitle}</p>
        </a>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    to: PropTypes.string,
}

export default Card;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SubHeader({ title }) {
    return (
        <section className="mt-10 flex justify-center">
            <div>
                <div className="w-[600px]">
                    <div className="flex justify-center items-center relative">
                        <Link to={"/"} className="h-[25px]">
                            <FontAwesomeIcon icon={faChevronLeft} className="text-2xl absolute left-4"/> 
                        </Link>
                        <h3 className="text-2xl">{title}</h3> 
                    </div>
                </div>
            </div>
        </section>
    );
}

SubHeader.propTypes = {
    title: PropTypes.string
}

export default SubHeader;
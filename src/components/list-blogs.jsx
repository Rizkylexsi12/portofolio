import PropTypes from "prop-types";

function ListBlog({
    link,
    date,
    title,
    className
}) {
    return (
        <a href={link} className={`flex gap-6 text-base ${className}`} target="_blank">
            <div className="relative">
                <div className="w-[120px]">{date}</div>
            </div>
            <div className="max-w-[400px] truncate">{title}</div>
        </a>
    );
}

ListBlog.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    className: PropTypes.string
}

export default ListBlog;

import PropTypes from "prop-types";

function ListBlog(props) {
    return (
        <a href={props.link} className="flex gap-6 text-base" target="_blank">
            <div className="w-[100px]">{props.date}</div>
            <div className="w-[400px] truncate">{props.title}</div>
        </a>
    );
}

ListBlog.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string
}

export default ListBlog;

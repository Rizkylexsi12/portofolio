import ButtonAction from "../components/button_action";
import ListBlog from "../components/list-blogs";
import Title from "../components/title";

function Blogs() {
    return (
        <div className="mt-[250px] text-center">
            <Title name="Blogs"/>
            <ListBlog />
            <div className="mt-10">
                <h1 className="font-bold text-3xl">Connect</h1>
                <div className="flex gap-5 justify-center my-10">
                    <ButtonAction label="Email"/>
                    <ButtonAction label="Linkedin"/>
                    <ButtonAction label="Instagram"/>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
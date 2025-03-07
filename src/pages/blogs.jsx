import ButtonAction from "../components/button_action";
import ListBlog from "../components/list-blogs";
import Title from "../components/title";

function Blogs() {
    return (
        <div className="mt-[250px] text-center">
            <Title name="Blogs"/>
            <div className="mt-[100px] flex flex-col items-center">
                <ListBlog date="Apr 27, 2024" title="Automation testing mobile"/>
                <ListBlog date="Apr 27, 2024" title="Frontend with React Js"/>
                <ListBlog date="Apr 27, 2024" title="Frontend with React Js ajsgdajsgdakjsdgkjasgdkjasgsashjdgahjsgdjhas"/>
                <div className="my-8 text-[#797979] font-bold text-lg">
                    <h3>Stay tuned for more...</h3>
                </div>
            </div>
            <div className="my-10">
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
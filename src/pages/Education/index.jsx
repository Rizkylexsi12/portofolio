import SubHeader from "../../components/sub-header";
import ListBlog from "../../components/list-blogs";


function EducationPage() {
    return (
        <div className='font-(family-name:--font-nunito)'>
            <SubHeader title="Education" />
            <div className="flex justify-center mt-10">
                <div className="flex flex-col gap-2">
                    <ListBlog title="Banchelor of Computer Science @Budi Luhur University" date="2020 - 2024" />
                </div>
            </div>
        </div>
    );
}

export default EducationPage;
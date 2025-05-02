import ListBlog from "../../components/list-blogs";
import SubHeader from "../../components/sub-header";

function WorkPage() {
    return (
        <div className='font-(family-name:--font-nunito)'>
            <SubHeader title="Work" />
            <div className="flex justify-center mt-10">
                <div className="flex flex-col gap-2">
                    <ListBlog title="Andtechnology" date="2021 - 2022" />
                    <ListBlog title="PT. Infradigital Nusantara" date="2022 - 2023" />
                    <ListBlog title="PT. Inti Dunia Sukses" date="2023 - 2024" />
                    <ListBlog title="PT. Jejaring Tiga Artha" date="2024 - 2025" />
                    <ListBlog title="PT. Inovasi Anak Indonesia" date="2025 - Present" />
                </div>
            </div>
        </div>
    );
}

export default WorkPage;
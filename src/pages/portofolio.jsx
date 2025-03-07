import TabMenu from "../components/tab-menu";
import Title from "../components/title";
import Card from "../components/card";

function Portofolio() {
    return (
        <div className="mt-[250px]">
            <div className="text-center">
                <Title name="Portofolios" />
            </div>
            <TabMenu />
            <div className="flex justify-evenly">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Portofolio;
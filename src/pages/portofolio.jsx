import TabMenu from "../components/tab-menu";
import Title from "../components/title";
import Card from "../components/card";

function Portofolio() {
    return (
        <section id="portofolio" className="mt-[250px] scroll-mt-5">
            <div className="text-center">
                <Title name="Portofolios" />
            </div>
            <TabMenu />
            <div className="flex justify-evenly">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}

export default Portofolio;
import WelcomeText from "../../components/welcome-text";
import Quotes from "../../components/quotes";
import Title from "../../components/title";
import Description from "../../components/description";
import ButtonAction from "../../components/button_action";
import TabMenu from "../../components/tab-menu";
import Card from "../../components/card";
import ListBlog from "../../components/list-blogs";

function MainPage() {
    return (
        <div className='font-(family-name:--font-nunito)'>
            <div>
                <WelcomeText />
                <Quotes />
            </div>
            <section id="about-me" className="w-full mt-[250px] flex justify-between scroll-mt-[200px]">
                <div className="w-[636px] flex flex-col justify-between">
                    <Title name="About me."/>
                    <Description content="I am a Quality Assurance and Frontend Developer, passionate about my work and everything I do. I thrive on creating seamless user experiences and ensuring top-notch software quality." />
                    <div className="flex justify-evenly mb-[50px]">
                        <ButtonAction label="💼 Work" to="/work"/>
                        <ButtonAction label="🎓 Education" to="/education"/>
                    </div>
                </div>
                <div>
                    <img src="/foto.jpg" className="rounded-[50px] w-[415px] h-[544px]"/>
               </div>
            </section>
            <section id="portofolio" className="mt-[250px] scroll-mt-5">
                <div className="text-center">
                    <Title name="Portofolios" />
                </div>
                <TabMenu />
                <div className="flex justify-evenly">
                    <Card title="Automation" subtitle="Automation code for Saucedemo website" image="/github.png" to="https://github.com/Rizkylexsi12/saucedemo"/>
                    <Card title="Cypress Automation" subtitle="Automation code using Cypress" image="/github.png" to="https://github.com/Rizkylexsi12/automation"/>
                </div>
            </section>
            <div className="mt-[250px] text-center">
                <Title name="Blogs"/>
                <div className="mt-[100px] flex flex-col items-center gap-2">
                    <ListBlog date="Feb 16, 2024" title="Robot Framework: solusi yang “Powerful” dan “Flexible” untuk automation testing" link="https://medium.com/@rizkylexsi/robot-framework-solusi-yang-powerful-dan-flexible-untuk-automation-testing-877ace77762a"/>
                    <ListBlog date="Mar 25, 2025" title="Cypress Unleashed: The Ultimate Game-Changer in Web Testing!" link="https://medium.com/@rizkylexsi/cypress-unleashed-the-ultimate-game-changer-in-web-testing-42203a7bb0e1"/>
                    <div className="mt-1 text-[#797979]">
                        <h3 className="font-bold">Stay tuned for more...</h3>
                    </div>
                </div>
                <div className="my-25">
                    <h1 className="font-bold text-3xl">Connect</h1>
                    <div className="flex gap-5 justify-center mt-5 mb-10">
                        <ButtonAction label="Email" decoration={true} to="mailto:rizkylexsi@gmail.com?subject=Collaboration"/>
                        <ButtonAction label="LinkedIn" decoration={true} to="https://www.linkedin.com/in/rizky-febdriasyah-lexsi/"/>
                        <ButtonAction label="Instagram" decoration={true} to="https://www.instagram.com/rizkylexsi"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
import WelcomeText from "../../components/welcome-text";
import Quotes from "../../components/quotes";
import Title from "../../components/title";
import Description from "../../components/description";
import ButtonAction from "../../components/btn-action";
import ListBlog from "../../components/list-blogs";
import PortflioList from "../../components/molecules/portfolio-list";

function MainPage() {
    return (
        <div className='font-(family-name:--font-nunito)'>
            {/* Heroes Page */}
            <section>
                <WelcomeText />
                <Quotes />
            </section>

            {/* About Me Page */}
            <section id="about-me" className="w-full mt-[250px] flex justify-between scroll-mt-[200px]">
                <div className="w-[636px] flex flex-col justify-between">
                    <Title name="About me."/>
                    <Description content="I am a Quality Assurance and Frontend Developer, passionate about my work and everything I do. I thrive on creating seamless user experiences and ensuring top-notch software quality." />
                    <div className="flex justify-evenly mb-[50px]">
                        <ButtonAction 
                            label="💼 Work" 
                            to="/work" 
                            newtab={false}
                        />
                        <ButtonAction 
                            label="🎓 Education" 
                            to="/education" 
                            newtab={false}
                        />
                    </div>
                </div>
                <div>
                    <img src="/foto.jpg" className="rounded-[50px] w-[415px] h-[544px]"/>
               </div>
            </section>

            {/* Portofolios Page */}
            <section id="portfolio" className="mt-[250px] scroll-mt-5">
                <div className="text-center">
                    <Title name="Portfolios" />
                </div>
                <PortflioList />
            </section>

            {/* Blogs Page */}
            <section className="mt-[250px] text-center">
                <Title name="Blogs"/>
                <div className="mt-[100px] flex flex-col items-center gap-2">
                    <ListBlog 
                        date="Feb 16, 2024" 
                        title="Robot Framework: solusi yang “Powerful” dan “Flexible” untuk automation testing" 
                        link="https://medium.com/@rizkylexsi/robot-framework-solusi-yang-powerful-dan-flexible-untuk-automation-testing-877ace77762a"
                        className="hover:font-bold transition-all duration-300 ease-in-out"
                    />
                    <ListBlog 
                        date="Mar 25, 2025" 
                        title="Cypress Unleashed: The Ultimate Game-Changer in Web Testing!" 
                        link="https://medium.com/@rizkylexsi/cypress-unleashed-the-ultimate-game-changer-in-web-testing-42203a7bb0e1"
                        className="hover:font-bold transition-all duration-300 ease-in-out"
                    />
                    <div className="mt-1 text-[#797979]">
                        <h3 className="font-bold">Stay tuned for more...</h3>
                    </div>
                </div>
                <div className="my-25">
                    <h1 className="font-bold text-3xl">Connect</h1>
                    <div className="flex gap-5 justify-center mt-5 mb-10">
                        <ButtonAction label="Email" decoration={true} to="mailto:rizkylexsi@gmail.com?subject=Collaboration"/>
                        <ButtonAction label="LinkedIn" decoration={true} to="https://www.linkedin.com/in/rizky-febdriasyah-lexsi/"/>
                        <ButtonAction label="Instagram" decoration={true} to=""/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainPage;
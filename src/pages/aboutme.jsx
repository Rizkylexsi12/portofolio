import ButtonAction from "../components/button_action";
import Description from "../components/description";
import Title from "../components/title";

function AboutMe() {
    return (
        <section id="about-me" className="w-full mt-[250px] flex justify-between scroll-mt-[200px]">
            <div className="w-[636px] flex flex-col justify-between">
                <Title name="About me."/>
                <Description content="I am a Quality Assurance and Frontend Developer, passionate about my work and everything I do. I thrive on creating seamless user experiences and ensuring top-notch software quality." />
                <div className="flex justify-evenly mb-[50px]">
                    <ButtonAction label="💼 Work"/>
                    <ButtonAction label="🎓 Education"/>
                </div>
                
            </div>
            <div>
                <img src="/foto.jpg" className="rounded-[50px] w-[415px] h-[544px]"/>
            </div>
        </section>
    );
}

export default AboutMe;
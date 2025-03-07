import ButtonAction from "../components/button_action";
import Description from "../components/description";
import Title from "../components/title";

function AboutMe() {
    return (
        <div className="w-full mt-[250px] flex justify-between">
            <div className="w-[636px] flex flex-col justify-between">
                <Title name="About me."/>
                <Description content="/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.*/" />
                <div className="flex justify-evenly mb-[50px]">
                    <ButtonAction label="💼 Work"/>
                    <ButtonAction label="🎓 Education"/>
                </div>
                
            </div>
            <div>
                <img src="/foto.jpg" className="rounded-[50px] w-[415px] h-[544px]"/>
            </div>
        </div>
    );
}

export default AboutMe;
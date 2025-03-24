import Description from "./description";

function WelcomeText() {
    return (
        <div className="text-center w-1/2 mx-auto mt-[250px]">
            <h1 className="text-8xl font-(family-name:--font-nunito-sans) font-bold bg-gradient-to-r from-[#0033FF] to-[#15FF00] bg-clip-text text-transparent">Hello... </h1>
            <Description content="Welcome to my portfolio! Explore my work and experience in software development."/>
        </div>
    );
}

export default WelcomeText;
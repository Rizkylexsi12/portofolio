import Description from "./description";

function WelcomeText() {
    return (
        <div className="text-center w-1/2 mx-auto mt-[250px]">
            <h1 className="text-8xl font-(family-name:--font-nunito-sans) font-bold">Hello... 👋</h1>
            <Description content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem."/>
        </div>
    );
}

export default WelcomeText;
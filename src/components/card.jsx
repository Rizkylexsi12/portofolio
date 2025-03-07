function Card() {
    return (
        <div className="bg-[#D9D9D9] rounded-3xl px-[20px] py-[20px] w-[296px]">
            <img src="/dummy.jpg" className="w-[258px] h-[191px] rounded-2xl"/>
            <h1 className="font-bold text-2xl my-3">Judul</h1>
            <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien.</p>
        </div>
    );
}

export default Card;
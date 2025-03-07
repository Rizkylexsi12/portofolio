function ListBlog() {
    const data = [
        { judul: "Automation testing mobile", tgl: "Apr 27, 2024" },
        { judul: "Frontend with React Js", tgl: "Apr 27, 2024" }
    ];

    return (
        <div className="mt-[100px] flex flex-col items-center gap-4">
            {data.map((datas, index) => (
                <div key={index} className="flex gap-[50px]">
                    <span className="text-gray-500">{datas.tgl}</span>
                    <span className="font-bold">{datas.judul}</span>
                </div>
            ))}
        </div>
    );
}

export default ListBlog;

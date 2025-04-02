import { useState } from "react";
import Card from "../card";
import { Frontend, QA } from "../../data/data-portfolio";

function PortflioList() {
    const [activeTab, setActiveTab] = useState("Frontend")
    const filteredData = activeTab === "Frontend" ? Frontend : QA;

    return (
        <>
            <div className="mx-auto my-[100px] flex justify-center gap-10 text-2xl">
                <button
                    onClick={() => {
                        setActiveTab("Frontend")
                        console.log("frontend aktif")
                    }}
                    className={activeTab === "Frontend" ? "font-bold" : ""}
                >
                    Frontend
                </button>
                <h1>|</h1>
                <button
                    onClick={() => {
                        setActiveTab("QA")
                        console.log("QA Aktif")
                    }}
                    className={activeTab === "QA" ? "font-bold" : ""}
                >
                    QA Automation
                </button>
            </div>
            <div className="flex gap-5 text-wrap justify-center">
                {filteredData.map((user) => (
                    <Card 
                        key={user.title}
                        title={user.title}
                        subtitle={user.subtitle}
                        image={user.image}
                        to={user.to}
                    />
                ))}
            </div>
        </>
    );
}

export default PortflioList;
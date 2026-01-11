import React, { useState } from "react";
import "./FileExplorer.css";

let initialData = [
    {
        id: 0,
        label: "Padam Jan",
        type: "folder",
        children: [
            {
                id: 0,
                label: "Ramesh Jan",
                type: "folder",
                children: [
                    {
                        id: 0,
                        type: "file",
                        label: "Abhishek Jan",
                    },
                    {
                        id: 1,
                        type: "file",
                        label: "Anmol Jan",
                    },
                ],
            },
            {
                id: 1,
                type: "folder",
                label: "Surinder Jan",
                children: [
                    {
                        id: 0,
                        type: "file",
                        label: "Shivam Jan",
                    },
                ],
            },
        ],
    },
];

function Tree({ data, path = "" }) {

    const [explorer, setExplorer] = useState(data);

    const handleClick = (latestPath) => {
        return () => {
            // Set expanded logic for folder here

            const path = latestPath.split("").map(Number);

            console.log(path);
            let newExplorer = structuredClone(explorer);
            const lastElementsChildren = path.slice(0, -1).reduce((acc, curr) => {
                return acc[curr]?.children;
            }, newExplorer);

            console.log(lastElementsChildren);

            const lastIndex = path.at(-1);
            const deferChild = lastElementsChildren[lastIndex];

            // TODO: fix this logic
            deferChild.isExpanded = !deferChild.isExpanded;
            setExplorer(newExplorer);
        }
    }
    return (
        <div className="tree-explorer">
            {explorer.map((item, index) => {
                let svg = item.type === "folder" ? "📁" : "🗃️";
                
                let latestPath = path + index;
                return (
                    <>
                        <div className="file-item" onClick={handleClick(latestPath)}>
                            <span>{svg}</span>
                            {item.label}
                        </div>
                        {/*  && item?.isExpanded */}
                        {item.type === "folder" && item.children.length > 0 && (
                            <Tree data={item.children} path={latestPath} />
                        )}
                    </>
                );
            })}
        </div>
    );
}
function FileExplorer({ data = initialData }) {
    return (
        <div className="explorer-wrapper">
            <Tree data={data} />
        </div>
    );
}

export default FileExplorer;

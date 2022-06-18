import DropDownFilter from "components/market/DropDownFilter";
import React from "react";

export interface IFilterProps {
}

const filterBehaviors = [
    {label: "Ally Fighter (1362)", value: "1"},
    {label: "Animated Decoration (4278)", value: "2"},
    {label: "Asset Spawner (148)", value: "3"},
    {label: "Avatar (29268)", value: "4"},
    {label: "Basic Platform (744)", value: "5"},
    {label: "Bird (410)", value: "6"},
    {label: "Button (50)", value: "7"},
]

const Filter = () => 
    <div className="scroll-custom min-w-[240px] h-[calc(100vh-60px)] fixed top-[60px] left-[90px] bg-[#1d232a] overflow-auto">
        <div className="w-full h-full">
            <p className="px-5 py-3 text-2xl font-medium text-gray-500">SHOP</p>
            <div className="mt-3">
                <DropDownFilter label="behaviors" data={filterBehaviors}/>
            </div>
            <div className="mt-3">
                <DropDownFilter label="slots" data={filterBehaviors}/>
            </div>
            <div className="mt-3">
                <DropDownFilter label="catalyts" data={filterBehaviors}/>
            </div>
        </div>
    </div>;

export default React.memo(Filter);
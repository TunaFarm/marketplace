/* eslint-disable react/no-array-index-key */
import Card from "components/common/card/Card";
import Dropdown from "components/common/dropdown/Dropdown";
import { Card as ICard } from "models/Card";

export interface IShopProps {
    data: ICard[];
    title: String;
}

const dropdown = [
    {
        value: "name_asc",
        label: "Name (A-Z)"
    },
    {
        value: "name_desc",
        label: "Name (Z-A)"
    },
    {
        value: "date_asc",
        label: "Newest"
    },
    {
        value: "date_desc",
        label: "Oldest"
    }
]

const Shop = (props: IShopProps) => {
    const { data, title } = props;

    const handleChange = (value: any): void => {
        // eslint-disable-next-line no-console
        console.log("Select value: ", value);
    }
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-end">
                <Dropdown data={dropdown} label="Sort" onChange={handleChange}/>
            </div>
            <div className="pb-2 mb-6 border-b border-gray-600">
                <p className="text-xl font-medium text-gray-300">{title}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.map((item: ICard, index: number) =>
                    <div key={index} className="flex items-center justify-center">
                        <Card key={index} data={item} />
                    </div>)}
            </div>
            <div>
                <div className="flex flex-col items-center my-12 md:items-start">
                    <div className="flex text-gray-700">
                        <div className="flex items-center justify-center w-8 h-8 mr-1 rounded-full cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 feather feather-chevron-left">
                                <polyline points="15 18 9 12 15 6"/>
                            </svg>
                        </div>
                        <div className="flex h-8 text-sm rounded-full font-small">
                            <div className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex ">1</div>
                            <div className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex ">...</div>
                            <div className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex ">3</div>
                            <div className="items-center justify-center hidden w-8 leading-5 text-white transition duration-150 ease-in bg-gray-600 rounded-full cursor-pointer md:flex ">4</div>
                            <div className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex ">5</div>
                            <div className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex ">...</div>
                            <div className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex ">15</div>
                            <div className="flex items-center justify-center w-8 h-8 leading-5 text-white transition duration-150 ease-in bg-gray-600 rounded-full cursor-pointer md:hidden">4</div>
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 ml-1 rounded-full cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};


export default Shop;

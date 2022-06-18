/* eslint-disable react/no-array-index-key */
import Card from "components/common/card/Card";
import Dropdown from "components/common/dropdown/Dropdown";
import Pagination from "components/common/pagination/Pagination";
import { Card as ICard } from "models/Card";
import React from "react";

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

    const handleChange = React.useCallback((value: any): void => {
        // eslint-disable-next-line no-console
        console.log("Select value: ", value);
    }, [])

    const handleChangePage = React.useCallback((page: number): void => {
        // eslint-disable-next-line no-console
        console.log("Select page: ", page);
    }, [])
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-end">
                <Dropdown data={dropdown} label="Sort" onChange={handleChange} />
            </div>
            <div className="pb-2 mb-6 border-b border-gray-600">
                <p className="text-xl font-medium text-gray-300">{title}</p>
            </div>
            <div className="grid grid-cols-1 gap-2 lg:gap-3 xl:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.map((item: ICard, index: number) =>
                    <div key={index} className="flex items-center justify-center">
                        <Card key={index} data={item} />
                    </div>)
                }
            </div>
            <div>
                <Pagination data={{ page: 1, count: 122 }} onChange={handleChangePage} />
            </div>
        </div>);
};


export default React.memo(Shop);

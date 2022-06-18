/* eslint-disable react/no-array-index-key */
import Card from "components/common/card/Card";
import { Card as ICard } from "models/Card";

export interface IShopProps {
    data: ICard[];
    title: String;
}

const Shop = (props: IShopProps) => {
    const { data, title } = props;
    return (
    <div className="max-w-4xl mx-auto">
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
            Pagination
        </div>
    </div>);
};


export default Shop;

/* eslint-disable react/no-array-index-key */
import Card from "@/components/common/card/Card";
import { Card as ICard } from "@/models/Card";

export interface IShopProps {
    data: ICard[];
    title: String;
}

const Shop = (props: IShopProps) => {
    const { data, title } = props;
    return (
    <div className="max-w-4xl mx-auto">
        <div className="border-b border-gray-600 mb-6 pb-2">
            <p className="text-xl font-medium text-gray-300">{title}</p>
        </div>
        <div className="flex items-center flex-wrap gap-x-5 gap-y-6">
            {data.map((item: ICard, index: number) => <Card key={index} data={item} />)}
        </div>
    </div>);
};


export default Shop;

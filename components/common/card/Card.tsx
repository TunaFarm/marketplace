/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { Card as ICard } from "@/models/Card";

export interface ICardProps {
    data: ICard;
}

const Card = ({ data }: ICardProps) =>
    <div className="relative w-[206px] h-[285px] flex flex-col justify-between items-stretch rounded-md border-2 border-blue-600 p-1 hoverL hover:shadow-lg hover:shadow-gray-900 hover:drop-shadow-xl hover:border-blue-900 transition duration-150 ease-in">
        <a href="/abc" className="flex flex-col justify-between items-stretch">
            <div className="overflow-hidden flex-1 p-1">
                <div className="flex items-center justify-between flex-row">
                    <div className="w-6 h-6 bg-stone-400" style={{ WebkitMask: `url("https://www.sandbox.game/img/04_Content/asset-icon.svg") 0% 0% / cover` }}>&nbsp;</div>
                    <div className="w-7 h-7 rounded-full border border-blue-600 flex justify-center items-center">
                        <div className="bg-yellow-300 rounded-full w-2 h-2">
                            &nbsp;
                        </div>
                    </div>
                </div>
                <figure className="flex flex-1 justify-center items-center">
                    <img src={data.image} alt={data.name} className="w-[143px] h-[96px] object-contain brightness-150" />
                </figure>
            </div>
        </a>
        <div className="px-2 mb-2">
            <div className="flex items-center mb-1">
                <p className="text-lg leading-5 text-white text-left w-56 font-medium whitespace-nowrap overflow-hidden"
                    style={{ textOverflow: "ellipsis" }}>
                    {data.name}
                </p>
            </div>
            <div className="flex flex-col justify-between items-start">
                <div className="text-gray-500">
                    <span>989 / 1002</span>
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-2">
                    <div className="flex items-start space-x-2">
                        <div>
                            <img src="https://www.sandbox.game/img/17_Sand/sand-icon.svg" alt="icon" className="w-[22px] h-[22px]" />
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <div className="text-lg font-bold text-yellow-500" style={{ lineHeight: "22px" }}>
                                {data.price}
                            </div>
                            <div className="flex items-center justify-start space-x-2 text-gray-500 mt-1 font-medium text-md">
                                <p>{data.price - 3.25}</p>
                                <p>USD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-3 right-3 cursor-pointer flex flex-row items-center justify-center h-10 w-10 rounded-full bg-slate-600">
                <div className="w-7 h-7 bg-stone-400" style={{ WebkitMask: `url("https://www.sandbox.game/img/16_Presale/shopping-cart.svg") no-repeat center` }}>&nbsp;</div>
            </div>
        </div>
    </div>;

export default React.memo(Card);  

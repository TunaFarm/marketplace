/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { Card as ICard } from "models/Card";

export interface ICardProps {
    data: ICard;
}

const Card = ({ data }: ICardProps) =>
    <div className="relative w-[206px] h-[285px] flex flex-col justify-between items-stretch rounded-md border-2 border-blue-600 p-1 hover:shadow-xl hover:shadow-gray-900 hover:drop-shadow-xl hover:border-blue-900 transition duration-150 ease-in">
        <a href="/abc" className="flex flex-col items-stretch justify-between">
            <div className="flex-1 p-1 overflow-hidden">
                <div className="flex flex-row items-center justify-between">
                    <div className="w-6 h-6 bg-stone-400" style={{ WebkitMask: `url("https://www.sandbox.game/img/04_Content/asset-icon.svg") 0% 0% / cover` }}>&nbsp;</div>
                    <div className="flex items-center justify-center border border-blue-600 rounded-full w-7 h-7">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full">
                            &nbsp;
                        </div>
                    </div>
                </div>
                <figure className="flex items-center justify-center flex-1">
                    <img src={data.image} alt={data.name} className="w-[143px] h-[96px] object-contain brightness-150" />
                </figure>
            </div>
        </a>
        <div className="px-2 mb-2">
            <div className="flex items-center mb-1">
                <p className="w-56 overflow-hidden text-lg font-medium leading-5 text-left text-white whitespace-nowrap"
                    style={{ textOverflow: "ellipsis" }}>
                    {data.name}
                </p>
            </div>
            <div className="flex flex-col items-start justify-between">
                <div className="text-gray-500">
                    <span>989 / 1002</span>
                </div>
                <div className="flex flex-row items-center justify-between w-full mt-2">
                    <div className="flex items-start space-x-2">
                        <div>
                            <img src="https://www.sandbox.game/img/17_Sand/sand-icon.svg" alt="icon" className="w-[22px] h-[22px]" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                            <div className="text-lg font-bold text-yellow-500" style={{ lineHeight: "22px" }}>
                                {data.price}
                            </div>
                            <div className="flex items-center justify-start mt-1 space-x-2 font-medium text-gray-500 text-md">
                                <p>{data.price - 3.25}</p>
                                <p>USD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute flex flex-row items-center justify-center w-10 h-10 rounded-full cursor-pointer bottom-3 right-3 bg-slate-600">
                <div className="w-7 h-7 bg-stone-200" style={{ WebkitMask: `url("https://www.sandbox.game/img/16_Presale/shopping-cart.svg") no-repeat center` }}>&nbsp;</div>
            </div>
        </div>
    </div>;

export default React.memo(Card);  

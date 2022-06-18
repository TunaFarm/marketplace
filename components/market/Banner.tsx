import React from "react";

const Banner = () =>
    <div className="w-full h-[425px] flex justify-center items-center py-5 px-10"
        style={{
            backgroundImage: `url('https://api.sandbox.game/collections/2/banner')`,
            backgroundSize: 'cover',
        }}>
        <div className="flex flex-col justify-center items-start w-full lg:max-w-[1070px] text-white">
            {/* <div className="flex justify-start py-2">
                <a href="/home" className="flex items-center"><span className="font-bold mb-[2px] mr-1">&lt;</span> Back</a>
            </div> */}
            <div className="flex flex-col items-stretch w-full xl:w-[690px] bg-[rgba(20,24,29,.8)] rounded-lg overflow-hidden px-6 py-10 opacity-80">
                <p className="text-xl text-align-left font-medium">WELCOME TO Marketplace</p>
                <p className="text-2xl font-bold pt-1 pb-2">ATARI</p>
                <p className="text-xl font-bold text-blue-600 mb-2">NFT COLLECTIONS</p>
                <p className="font-medium">Atari — one of the world’s most iconic consumer brands and entertainment producers — has brought various world-known assets to life, by transforming them to NFTs in The Sandbox.</p>
            </div>
        </div>
    </div>;

export default React.memo(Banner);
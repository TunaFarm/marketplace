import Banner from "components/market/Banner";
import Shop from "components/market/Shop";
import {Card} from "models/Card";

const data: Card[] = [
    {
        id: "02809998-05cf-4807-a8ac-2f667c15091b",
        name: "Atari Yacht",
        price: 13.45,
        image: "https://api.sandbox.game/assets/public/95aa86ee-8e0f-47ec-bcdd-30851c73410b/preview",
    },
    {
        id: "02809998-05cf-4807-a8ac-2f667c15091b",
        name: "Plug monster",
        price: 20.98,
        image: "https://api.sandbox.game/assets/public/c4a8fef2-f724-4891-883c-2978a0f03576/preview",
    },
    {
        id: "02809998-05cf-4807-a8ac-2f667c15091b",
        name: "VR Master alpaca",
        price: 13.46,
        image: "https://api.sandbox.game/assets/public/c8bed268-a565-4a7b-bfea-8b835075cd2b/preview",
    },
    {
        id: "02809998-05cf-4807-a8ac-2f667c15091b",
        name: "Hummingbird Royal Knight",
        price: 20,
        image: "https://api.sandbox.game/assets/public/7ab98188-43da-4b4e-9a38-b80150ce9e98/preview",
    },
    {
        id: "02809998-05cf-4807-a8ac-2f667c15091b",
        name: "Atari Yacht",
        price: 13.45,
        image: "https://api.sandbox.game/assets/public/95aa86ee-8e0f-47ec-bcdd-30851c73410b/preview",
    },
    {
        id: "02809998-05cf-4807-a8ac-2f667c15091b",
        name: "Plug monster",
        price: 20.98,
        image: "https://api.sandbox.game/assets/public/c4a8fef2-f724-4891-883c-2978a0f03576/preview",
    },
    {
        id: "02809998-05cf-4807-a8ac-2f667c15091b",
        name: "VR Master alpaca",
        price: 13.46,
        image: "https://api.sandbox.game/assets/public/c8bed268-a565-4a7b-bfea-8b835075cd2b/preview",
    },
    {
        id: "02809998-05cf-4807-a8ac-2f667c15091b",
        name: "Hummingbird Royal Knight",
        price: 20,
        image: "https://api.sandbox.game/assets/public/7ab98188-43da-4b4e-9a38-b80150ce9e98/preview",
    },
    {
        id: "02809998-05cf-4807-a8ac-2f667c15091b",
        name: "Plug monster",
        price: 20.98,
        image: "https://api.sandbox.game/assets/public/c4a8fef2-f724-4891-883c-2978a0f03576/preview",
    },
    {
        id: "02809998-05cf-4807-a8ac-2f667c15091b",
        name: "VR Master alpaca",
        price: 13.46,
        image: "https://api.sandbox.game/assets/public/c8bed268-a565-4a7b-bfea-8b835075cd2b/preview",
    },
    {
        id: "02809998-05cf-4807-a8ac-2f667c15091b",
        name: "Hummingbird Royal Knight",
        price: 20,
        image: "https://api.sandbox.game/assets/public/7ab98188-43da-4b4e-9a38-b80150ce9e98/preview",
    }
]

const Market = () =>
    <div className="bg-[#1b2026] pb-20">
        <Banner />
        <div className="py-20 text-center text-gray-200">
            <h2 className="text-5xl font-bold mb-3">Welcome to the NFT Marketplace</h2>
            <p >Here you can search and buy create ASSETS with SAND to incorporate them into your LAND</p>
        </div>
        <div className="container mx-auto">
            <Shop data={data} title="NFTs For Sale" />
        </div>
    </div>;

export default Market;

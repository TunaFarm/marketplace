import React from 'react'
import { ClipboardCopyIcon, ClipboardIcon, TagIcon, UsersIcon } from "@heroicons/react/outline"
function CardInformation() {
    const item_properties = [
        {
            icon: ClipboardIcon,
            content: "5000 minted"
        },
        {
            icon: TagIcon,
            content: "4500 of 4500 for sale"
        },
        {
            icon: UsersIcon,
            content: "1 owner"
        }
    ];

    const about_properties = [
        {
            title: "TYPE",
            content: "Entity"
        },
        {
            title: "BIOMES",
            content: "NONE"
        },
        {
            title: "TAGS",
            content: ["City", "Machine", "Sci-Fi"]
        }
    ]

    const relate_data = [
        {
            title: "Water Block 1",
            rareless: "None",
            property1: undefined
        },
        {
            title: "Grass Plant 3",
            rareless: "None",
            property1: 1
        },
        {
            title: "Street Light",
            rareless: "None",
            property1: 1
        },
        {
            title: "No Gravity Car",
            rareless: "Epic",
            property1: 18
        },
        {
            title: "Planetarium Stage",
            rareless: "None",
            property1: 1
        },
        {
            title: "Flower Vase",
            rareless: "None",
            property1: 1
        }
    ]
    return (
        <div className='w-[681px] m-5'>
            <div className='flex flex-col justify-between h-36 p-2'>
                <h1 className='text-white text-2xl font-bold'>Atari Yacht</h1>
                <div className='flex items-center text-[#505861]'>
                    <p>Token ID: 1298_5716</p>
                    <ClipboardCopyIcon className='h-6 ml-2' />
                </div>
                <div className='flex justify-start mt-1 mb-1'>
                    {item_properties.map((item, index) => (
                        <div className='flex items-center mr-2' key={index}>
                            <item.icon className='text-[#03CD6E] h-8 mr-1' />
                            <p className='text-[#505861]'>{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1 className='text-white text-2xl font-bold px-2 py-3'>About</h1>
                <div className='flex border-transparent rounded-2xl px-10 py-7 bg-[#20252c]  '>
                    {about_properties.map((item, index) => (
                        <div key={index} className="mr-12">
                            <p className='text-[#505861] mb-2'>{item.title}</p>
                            <div className='flex'>
                                {Array.isArray(item.content) ? item.content.map((text, index) => (
                                    <p key={index} className="bg-[#2f3740] border-transparent rounded-2xl text-white px-4 py-1 mr-4">{text}</p>
                                )) : <p className='text-white'>{item.content}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1 className='text-white text-2xl font-bold px-2 py-3'>Attributes</h1>
                <div className='flex border-transparent rounded-2xl px-10 py-7 bg-[#20252c]'>
                    <div className='flex w-40  justify-start'>
                        <div className='m-2'>Icon</div>
                        <div className='ml-2'>
                            <p className='text-[#bdc0c2]'>Catalyst</p>
                            <p className='text-[#00adef]'>Common Type</p>
                        </div>
                    </div>
                    <div className='flex mx-10'>
                        <div className='mr-20'>
                            <p className='text-[#FFBF34]'>POWER</p>
                            <div className='flex items-center'>
                                <div>Icon</div>
                                <p className='mx-1 text-xl text-white' >7</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#00ADE3]'>SPEED</p>
                            <div className='flex items-center'>
                                <div>Icon</div>
                                <p className='mx-1 text-xl text-white' >7</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-4'>
                    <h1 className='text-white text-2xl font-bold px-2 py-3'>Description</h1>
                    <p className='text-[#bdc0c2] px-2'>Floating in the streets of Etheria, this cute vending robot sells drinks and snacks. There is something for everyone!</p>
                </div>
                <div className='flex items-center px-2 my-10'>
                    <p className='text-[#505861] text-xl font-bold'>Share in: </p>
                    <div className='w-10 h-10 ml-5' style={{ WebkitMask: `url("https://www.sandbox.game/img/07_Asset_Info/twitter-icon.svg") no-repeat center` }}></div>
                    <div className='w-10 h-10 ml-5' style={{ WebkitMask: `url("https://www.sandbox.game/img/07_Asset_Info/facebook-icon.svg") no-repeat center` }}></div>
                </div>
                <div>
                    <div className='flex border-transparent rounded-2xl px-10 py-7 bg-[#20252c]'>
                        <div className='mr-12'>
                            <div className='h-10 w-10'>Logo</div>
                            <div>
                                <p className='text-[#505861]'>CREATED BY</p>
                                <p className='text-[#00adef]'>Owner</p>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='flex justify-between h-10'>
                                <p className='text-[#505861]'>NTF FROM CREATOR</p>
                                <p className='text-[#00adef]'>See more {">"}</p>
                            </div>
                            <div className='w-full'>
                                <div className='grid grid-cols-2 gap-4  '>
                                    {relate_data.map((item, index) => (
                                        <div key={index} className="rounded-md border-2 border-blue-600">
                                            <div className='px-4 py-4 border-box'>
                                                <div>
                                                    <p className='text-white'> {item.title}</p>
                                                    <p className='text-[#bdc0c2] text-xs'> {item.rareless}</p>
                                                    <p className='text-slate-500'> {item.property1} &nbsp;</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-4'>
                    <h1 className='text-white text-2xl font-bold px-2 py-3'>Creating an Asset</h1>
                    <div className='text-[#bdc0c2] px-2'>
                        <p className='py-1 text-sm'>When a creator designs an asset, they have to distribute points amongst the chosen attributes.</p>
                        <p className='py-1 text-sm'>A creator can change the amount of attributes while creating an asset.</p>
                        <p className='py-1 text-sm'>When a Game Maker update is released, new mechanics can use existing attributes or new ones released with the update.</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='border-transparent rounded-2xl h-[250px] w-full p-6 bg-[#20252c]'>
                        <h1 className='text-[#FFBF34] text-2xl font-bold'>Player side</h1>
                        <div className='text-[#bdc0c2] px-2'>
                            <p className='py-1 text-sm'>Attributes give bonuses within a game</p>
                            <p className='py-1 text-sm'>Not having an attribute does not prevent from playing</p>
                            <p className='py-1 text-sm'>Games display used attributes in their description</p>
                        </div>
                    </div>
                    <div className='border-transparent rounded-2xl h-[250px] w-full p-6 bg-[#20252c]'>
                        <h1 className='text-[#00ADE3] text-2xl font-bold'>Creator side</h1>
                        <div className='text-[#bdc0c2] px-2'>
                            <p className='py-1 text-sm'>Game mechanics come with attribute presets</p>
                            <p className='py-1 text-sm'>Assets need the required attributes to be used with a game mechanism</p>
                            <p className='py-1 text-sm'>Creators can modify the attributes required by a game mechanic</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardInformation

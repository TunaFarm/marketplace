import React from 'react'
import Dropdown from 'components/common/dropdown/Dropdown'

function ImagePreview() {
    const dropdown = [
        {
            value: "3d_view",
            label: "3D view"
        },
        {
            value: "preview",
            label: "Preview"
        },
        {
            value: "idile_01",
            label: "Idle 01"
        },
        {
            value: "crawl_01",
            label: "Crawl 01"
        },
        {
            value: "open_doors_01",
            label: "Open door 01"
        },
        {
            value: "drive_fast_01",
            label: "Drive fast 01"
        }
    ]
    const handleChange = React.useCallback((value: any): void => {
        // eslint-disable-next-line no-console
        console.log("Select value: ", value);
    }, [])
    return (
        <div className='w-[400px] h-full  '>
            <div className=' fixed'>


                <p className='text-[#a0a4a7] '>
                    {"<"} Back
                </p>
                <div className='flex flex-col justify-between rounded-md border-2 border-blue-600 w-[400px] h-[500px] mt-4'>
                    <div className='pt-3 pl-3'>
                        <Dropdown data={dropdown} label="3D view" onChange={handleChange} />
                    </div>
                    <div className='flex items-center h-full'>
                        <img src="https://api.sandbox.game/assets/public/95aa86ee-8e0f-47ec-bcdd-30851c73410b/preview" alt="Name" className="object-contain  w-[400px] h-[300px]" />
                        {/* <Image src={"https://api.sandbox.game/assets/public/95aa86ee-8e0f-47ec-bcdd-30851c73410b/preview"} width={200} height={250} /> */}
                    </div>
                </div>
                <div className='h-[170px] pt-[5px] pb-[5px]'>
                    <div className='flex justify-between'>
                        <div className='text-[#d2d3d4]'>
                            CURRENT PRICE
                        </div>
                        <div>
                            <div className="flex flex-row items-center justify-between w-full mt-2">
                                <div className="flex items-start space-x-2">
                                    <div>
                                        <img src="https://www.sandbox.game/img/17_Sand/sand-icon.svg" alt="icon" className="w-[22px] h-[22px]" />
                                    </div>
                                    <div className="flex flex-col items-start justify-start">
                                        <div className="text-lg font-bold text-yellow-500" style={{ lineHeight: "22px" }}>
                                            100
                                        </div>
                                        <div className="flex items-center justify-start mt-1 space-x-2 font-medium text-gray-500 text-md">
                                            <p>200</p>
                                            <p>USD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <a href='#' className='text-[#00adef]'>@Owner</a>
                        <p className='text-white'>4/5</p>
                    </div>
                    <div>Button will be here</div>
                </div>
            </div>
        </div>
    )
}

export default ImagePreview

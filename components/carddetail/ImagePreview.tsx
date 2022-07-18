import React from "react";
import Dropdown from "components/common/dropdown/Dropdown";
import Image from "next/image";

const ImagePreview = ({ doPayment }: any) => {
  const dropdown = [
    {
      value: "3d_view",
      label: "3D view",
    },
    {
      value: "preview",
      label: "Preview",
    },
    {
      value: "idile_01",
      label: "Idle 01",
    },
    {
      value: "crawl_01",
      label: "Crawl 01",
    },
    {
      value: "open_doors_01",
      label: "Open door 01",
    },
    {
      value: "drive_fast_01",
      label: "Drive fast 01",
    },
  ];
  const handleChange = React.useCallback((value: any): void => {
    // eslint-disable-next-line no-console
    console.log("Select value: ", value);
  }, []);

  return (
    <div className="flex justify-center w-1/5 m-2.5">
      <div className="fixed w-fit">
        <p className="text-[#a0a4a7] ">{"<"} Back</p>
        <div className="flex-col justify-between rounded-md border-2 border-blue-600 h-[30rem] mt-4">
          <div className="p-3">
            <Dropdown data={dropdown} label="3D view" onChange={handleChange} />
          </div>
          <div className="flex items-center w-full h-96 relative">
            <Image
              src="https://placekitten.com/400/300"
              alt="Name"
              className="object-contain "
              layout="fill"
            />
            {/* <Image src={"https://api.sandbox.game/assets/public/95aa86ee-8e0f-47ec-bcdd-30851c73410b/preview"} width={200} height={250} /> */}
          </div>
        </div>
        <div className="h-[10rem] py-1.5">
          <div className="flex justify-between">
            <div className="text-[#d2d3d4]">CURRENT PRICE</div>
            <div>
              <div className="flex flex-row items-center justify-between w-full mt-2">
                <div className="flex items-start space-x-2">
                  <div className="">💲</div>
                  <div className="flex flex-col items-start justify-start">
                    <div
                      className="text-lg font-bold text-yellow-500"
                      style={{ lineHeight: "22px" }}
                    >
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
          <div className="flex justify-between my-3">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="text-[#00adef]">
              @Owner
            </a>
            <p className="text-white">4/5</p>
          </div>
          <div className="flex justify-between">
            <button
              className="border border-white bg-black rounded-3xl w-48 py-2.5 font-bold hover:bg-[#0055ff] hover:border-[#0055ff] hover:cursor-pointer"
              type="button"
            >
              <span className="text-white">Add To Cart</span>
            </button>
            <button
              className="border border-[#0084ff] bg-[#0084ff] rounded-3xl w-48 py-2.5 font-bold hover:cursor-pointer"
              type="button"
              onClick={doPayment}
            >
              <span className="text-white">Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;

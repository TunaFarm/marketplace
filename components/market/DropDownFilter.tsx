import React from "react";
import ItemCheckboxFIlter from "./ItemCheckboxFIlter";

interface IDropDownFilter {
    label: string;
    data: any[];
}

const DropDownFilter = ({ label, data }: IDropDownFilter) => {
    const [open, setOpen] = React.useState<boolean>(false);

    const openMenu = React.useCallback(() => {
        setOpen((isOpem: boolean) => !isOpem);
    }, [])

    const handleSelected =React.useCallback( (value: any) => {
        // eslint-disable-next-line no-console
        console.log(value);
    }, [])

    return (
        <div className="w-full">
            <button onClick={openMenu} type="button" className="inline-flex justify-between w-full px-4 py-4 text-sm font-medium text-gray-300 uppercase border-t-2 border-gray-600 focus:outline-none" id="menu-button">
                {label}
                {!open ?
                    <svg className="w-5 h-5 ml-2 -mr-1 duration-150 ease-linear" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg> :
                    <svg className="w-5 h-5 ml-2 -mr-1 duration-150 ease-linear" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    </svg>
                }
            </button>
            <div className={`${open ? "": "hidden"} flex flex-col w-full px-4`}>
                {data.map((item: any) =>
                    <div key={item.value} className="mb-3 max-w-[180px]">
                        <ItemCheckboxFIlter  label={item.label} value={item.value} onChange={handleSelected} />
                    </div>
                )}
            </div>
        </div>
    );
};


export default React.memo(DropDownFilter);
import  * as React from "react";
import useOutsideAlerter from '../../../hooks/useOutsideAlerter';

interface IPropsDropdown {
    data: any[];
    label: string;
    onChange: (value: any) => void;
}

const Dropdown = ({data, label, onChange} : IPropsDropdown) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [selected, setSelected] = React.useState<string>(label);
    const ref = React.useRef<any>(null);
    
    useOutsideAlerter(ref, () => {
        setOpen(false);
    })

    const openMenu = React.useCallback(() => {
        setOpen((isOpem: boolean) => !isOpem);
    }, [setOpen])

    const onClick = React.useCallback((value: any) => {
        onChange(value);
        setSelected(() => value.label);
        setOpen((isOpem: boolean) => !isOpem);
    }, [setSelected, setOpen, onChange])

    
    return (
        <div className="z-50" ref={ref}>
            <div className="relative inline-block text-left">
                <button onClick={openMenu} type="button" className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-300 rounded-md shadow-sm bg-slate-800 focus:outline-none min-w-[200px]" id="menu-button">
                    {selected}
                    <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className={`${open ? "" : "hidden"} absolute right-0 w-56 mt-2 origin-top-right bg-slate-800 rounded-md shadow-lg ring-opacity-5 focus:outline-none overflow-hidden`} role="menu">
                    <div role="none">
                        {data.map((item: any, index:Number) => <div key={item?.value} onClick={() => onClick(item)} aria-hidden="true" className="block px-4 py-2 text-sm text-gray-200 cursor-pointer hover:bg-blue-500" role="menuitem" id={`menu-item-${index}`}>{item?.label}</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default React.memo(Dropdown);
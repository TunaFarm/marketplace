import * as React from "react";
import useOutsideAlerter from '../../../hooks/useOutsideAlerter';

interface IPropsDropdown {
    data: any[];
    label: string;
    onChange: (value: any) => void;
}

const Dropdown = ({ data, label, onChange }: IPropsDropdown) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [selected, setSelected] = React.useState<string>(label);
    const ref = React.useRef<any>(null);

    useOutsideAlerter(ref, () => {
        setOpen(false);
    })

    const openMenu = React.useCallback(() => {
        setOpen((isOpem: boolean) => !isOpem);
    }, [])

    const onClick = React.useCallback((value: any) => {
        onChange(value);
        setSelected(() => value.label);
        setOpen((isOpem: boolean) => !isOpem);
    }, [onChange])


    return (
        <div className="z-10" ref={ref}>
            <div className="relative inline-block text-left">
                <button onClick={openMenu} type="button" className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-300 rounded-md shadow-sm bg-slate-800 focus:outline-none min-w-[200px]" id="menu-button">
                    {selected}
                    {!open ?
                        <svg className="w-5 h-5 ml-2 -mr-1 duration-150 ease-linear" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg> :
                        <svg className="w-5 h-5 ml-2 -mr-1 duration-150 ease-linear" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                    }
                </button>
                <div className={`${open ? "" : "hidden"} absolute right-0 w-full mt-1 origin-top-right bg-slate-800 rounded-md shadow-lg ring-opacity-5 focus:outline-none overflow-hidden`} role="menu">
                    <div role="none">
                        {data.map((item: any, index: Number) => <div key={item?.value} onClick={() => onClick(item)} aria-hidden="true" className="block px-4 py-2 text-sm text-gray-200 cursor-pointer hover:bg-blue-500" role="menuitem" id={`menu-item-${index}`}>{item?.label}</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default React.memo(Dropdown);
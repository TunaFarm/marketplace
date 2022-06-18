/* eslint-disable @next/next/no-img-element */
import React from "react";

interface IPropsItemCheckboxFIlter {
    label: string;
    value: any;
    onChange: (value: any) => void;
}

const ItemCheckboxFIlter = ({ label, value, onChange }: IPropsItemCheckboxFIlter) => {
    const [checked, setChecked] = React.useState(false);

    const onClick = React.useCallback(() => {
        setChecked((isChecked) => !isChecked);
        onChange(value);
    }, [onChange, value])

    return (
        <div className="flex items-center gap-3">
            <button onClick={onClick} type="button" className={`min-w-[19px] h-[19px] border-2 ${checked ? 'border-green-500 bg-green-500' : 'border-gray-600 hover:border-white'} rounded-md overflow-hidden inline-flex items-center`}>
                {checked && <img className="w-full h-auto max-w-full max-h-full" src="https://www.sandbox.game/img/00_General/checked.svg" alt="checkbox icon" />}
            </button>
            <p className="max-w-full text-gray-400 font-small text-md">
                {label}
            </p>
        </div>
    )
}

export default React.memo(ItemCheckboxFIlter);
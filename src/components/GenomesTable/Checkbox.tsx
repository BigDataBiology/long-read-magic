import React, { FC } from 'react';

export type CheckboxProps = {
    onChange: (a: boolean) => void
    checked: boolean
    label: string
}

export const Checkbox: FC<CheckboxProps> = ({onChange, checked, label}) => {

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    }

    return (
        <>
            <div className="flex cursor-pointer">
                <input type="checkbox" className="w-6 mr-2" id={label} checked={checked} onChange={onValueChange}/>
                <label className="text-center cursor-pointer" htmlFor={label}>{label}</label>
            </div>
        </>
    )
};

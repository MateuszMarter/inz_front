"use client"

type Props = {
    onChange?: (val: string) => void,
    value?: string
}
export default function EmailInput({value, onChange}: Props) {
    return (
        <fieldset className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-lg px-3 pb-2 pt-1 w-full bg-slate-900/80 focus-within:bg-slate-800/80">
            <legend className="px-2 text-sm text-gray-500">email</legend>
            <input
            type="email"
            placeholder="email"
            className="w-full outline-none text-base bg-transparent"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}/>
        </fieldset>
    );
}
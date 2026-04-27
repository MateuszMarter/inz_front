"use client"

export default function EmailInput() {
    return (
        <fieldset className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-lg px-3 pb-2 pt-1 w-72 bg-secondary">
            <legend className="px-2 text-sm text-gray-500">email</legend>
            <input
            type="email"
            placeholder="email"
            className="w-full outline-none text-base bg-transparent"/>
        </fieldset>
    );
}
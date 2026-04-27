"use client"

import {useState} from "react";

export default function PasswordInput() {
    const [show, setShow] = useState(false);

    return (
        <fieldset className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-lg px-3 pb-2 pt-1 w-72 bg-secondary">
            <legend className="px-2 text-sm text-gray-500">
                password
            </legend>

            <div className="relative flex items-center w-full">
                <input
                    type={show ? "text" : "password"}
                    placeholder="password"
                    className="w-full outline-none text-base bg-transparent"
                />

                <button
                type="button"
                onClick={() => {setShow(!show)}}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-textMuted hover:text-primary"
                >
                    {show ? "Hide" : "Show"}
                </button>
            </div>
        </fieldset>
    );
}

/*
<input
                className="w-full bg-transparent border-b border-background px-1 pr-12 text-textMain outline-none transition focus:border-foreground"
                type={show ? "text" : "password"}
                placeholder="Password"
            />

            <button
                type="button"
                onClick={() => {setShow(!show);}}
                className="absolute right-0 top-1/2 -translate-y-1/2 pt-3 text-sm text-textMuted hover:text-primary"
            >
                {show ? "Hide" : "Show"}
            </button>
*/
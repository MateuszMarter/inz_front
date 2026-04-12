import Image from "next/image";

export default function LoginPage () {
    return (
        <div className="relative flex flex-1 flex-col justify-center items-center ">
            <button className="absolute top-4 right-4 px-3 py-1 bg-black text-white rounded-lg dark:bg-white dark:text-black" >
                Toggle
            </button>
            <div className="flex flex-col w-full max-w-sm p-6 bg-white rounded-2xl shadow-md dark:bg-zinc-900">
                <label htmlFor="email">Email</label>
                <input type="email" className="dark:bg-zinc-800 rounded-md" />
            </div>
        </div>
    );
}
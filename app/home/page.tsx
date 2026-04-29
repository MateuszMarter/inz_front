"use client"

import {useRouter} from "next/navigation";

export default function Home () {

    const router = useRouter();

    const logout = () => {
        localStorage.clear();
        router.push("/login");
    }


    return(
        <main className={`flex items-center justify-center h-screen`}>
            <div>
                <button className={`bg-secondary rounded-lg w-full max-w-md py-1 px-2 border border-white-500`} onClick={logout}>
                    Logout
                </button>
            </div>
        </main>
    );
}
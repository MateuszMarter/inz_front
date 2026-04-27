import Image from "next/image";

export default function LoginPage () {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-4 space-y-4">
            <form className="flex flex-col items-left justify-center bg-secondary rounded-md shadow-md p-2">
                <label htmlFor="email" >Email</label>
                <input type="email" />
            </form>

            <form className="flex flex-col items-left justify-center bg-secondary rounded-md shadow-md p-2">
                <label htmlFor="password">Password</label>
                <input type="password"/>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 bg-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                    strokeWidth="2"
                >
                    <path
                        d="M17.94 17.94A10.94 10.94 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.956 10.956 0 012.293-3.95M9.88 9.88A3 3 0 0114.12 14.12M1 1l22 22"/>
                </svg>
            </form>
        </main>
    );
}
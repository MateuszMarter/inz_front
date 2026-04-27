import PasswordInput from "@/app/login/components/PasswordInput";
import EmailInput from "@/app/login/components/EmailInput";

export default function LoginPage () {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-min rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">

            </div>
            <form className="flex flex-col items-left justify-center bg-secondary rounded-lg shadow-md p-2 gap-4 w-full max-w-min">
                <EmailInput/>
                <PasswordInput/>
            </form>
        </main>
    );
}
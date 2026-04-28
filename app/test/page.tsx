export default function test() {
    //napis w ramce input
    return (
        <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
            <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold">Logowanie</h1>
                    <p className="mt-2 text-sm text-slate-400">
                        Witaj ponownie! Zaloguj się na swoje konto.
                    </p>
                </div>

                <form className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Wprowadź adres e-mail"
                            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-200 mb-2">
                            Hasło
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Wprowadź hasło"
                            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-slate-300">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-slate-700 bg-slate-950 accent-blue-600"
                            />
                            Zapamiętaj mnie
                        </label>

                        <a href="#" className="text-blue-400 hover:text-blue-300">
                            Nie pamiętasz hasła?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                    >
                        Zaloguj się
                    </button>
                </form>

                <div className="my-6 flex items-center gap-4">
                    <div className="h-px flex-1 bg-slate-800"/>
                    <span className="text-sm text-slate-500">lub</span>
                    <div className="h-px flex-1 bg-slate-800"/>
                </div>

                <button
                    className="w-full rounded-lg border border-slate-700 bg-transparent px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800">
                    Zaloguj się przez Google
                </button>

                <p className="mt-6 text-center text-sm text-slate-400">
                    Nie masz konta?{' '}
                    <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
                        Zarejestruj się
                    </a>
                </p>
            </div>
        </main>
    );
}
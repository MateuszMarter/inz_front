export default function test() {
    //napis w ramce input
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="p-10 bg-gray-100 min-h-screen flex items-start justify-center">
                <fieldset className="border-2 border-gray-500 rounded-lg px-3 pb-2 pt-1 w-64 bg-white">
                    <legend className="px-2 text-sm text-gray-500">
                        password
                    </legend>

                    <input
                        type="password"
                        placeholder="Wpisz hasło"
                        className="w-full outline-none text-base bg-transparent"
                    />
                </fieldset>
            </div>
        </div>
    );
}
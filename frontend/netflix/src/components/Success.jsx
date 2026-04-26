import Header from "./Header";
function Success() {
    return (<div className="min-h-screen bg-black 
    bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9d6d/netflix-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <Header />
        <div className="flex flex-col items-center justify-center text-white py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Login Successfully</h1>
            <div>
                <h4 className="text-2xl font-semibold mb-8 text-center">Choose the plan that's right for you</h4>
                <div className="flex justify-center gap-6 flex-wrap">
                    <div className="bg-gradient-to-b from-blue-800 to-blue-40
w-72 p-6 rounded-2xl shadow-2xl hover:scale-105 transition">
                        <h5 className="text-2xl font-bold mb-4">Mobile</h5>
                        <p className="mb-2">₹149 / month</p>
                        <p>Fair Quality</p>
                        <p>480p</p>
                        <p>Mobile, Tablet</p>
                        <button className="mt-5 bg-white text-black px-5 py-2 rounded-full font-bold">
                            Choose Plan
                        </button>
                    </div>

                    <div className="bg-gradient-to-b from-blue-800 to-blue-40
w-72 p-6 rounded-2xl shadow-2xl hover:scale-105 transition">
                        <h5 className="text-2xl font-bold mb-4">Basic</h5>
                        <p className="mb-2">₹199 / month</p>
                        <p>Good Quality</p>
                        <p>720p HD</p>
                        <p>TV, Computer, Mobile</p>
                        <button className="mt-5 bg-white text-black px-5 py-2 rounded-full font-bold">
                            Choose Plan
                        </button>
                    </div>

                    <div className="bg-gradient-to-b from-blue-800 to-blue-40
w-72 p-6 rounded-2xl shadow-2xl hover:scale-105 transition">
                        <h5 className="text-2xl font-bold mb-4">Standard</h5>
                        <p className="mb-2">₹499 / month</p>
                        <p>Great Quality</p>
                        <p>1080p Full HD</p>
                        <p>All Devices</p>
                        <button className="mt-5 bg-white text-black px-5 py-2 rounded-full font-bold">
                            Choose Plan
                        </button>
                    </div>

                    <div className="bg-gradient-to-b from-blue-800 to-blue-40
w-72 p-6 rounded-2xl shadow-2xl hover:scale-105 transition">
                        <h5 className="text-2xl font-bold mb-4">Premium</h5>
                        <p className="mb-2">₹649 / month</p>
                        <p>Best Quality</p>
                        <p>4K + HDR</p>
                        <p>All Devices</p>
                        <button className="mt-5 bg-white text-black px-5 py-2 rounded-full font-bold">
                            Choose Plan
                        </button>
                    </div>
                </div></div>
        </div>
    </div>)
}

export default Success;
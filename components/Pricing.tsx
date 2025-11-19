// Pricing Component
export default function Pricing() {
    return (
        <section id="pricing" className="w-full bg-blue-50 py-20 px-5">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10">
                <h1 className="text-center font-bold text-4xl text-indigo-700 mb-3">
                    Our Pricing
                </h1>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    Choose a plan that fits your business. All websites are fully responsive,
                    fast, SEO-friendly, and tailored to your needs.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {/* Basic Plan */}
                    <div className="border border-indigo-100 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-500">
                        <h2 className="text-2xl font-bold text-indigo-700">Starter</h2>
                        <p className="text-gray-600 mt-2">Perfect for small businesses</p>
                        <h3 className="text-4xl font-bold text-indigo-600 mt-5">₹4,999</h3>
                        <ul className="mt-5 space-y-2 text-gray-700 text-sm">
                            <li>✔ 3-Page Website</li>
                            <li>✔ Mobile Responsive</li>
                            <li>✔ Basic SEO Setup</li>
                            <li>✔ Basic Integrations</li>
                        </ul>
                        <button disabled className="mt-6 w-full bg-indigo-600 disabled:bg-indigo-400 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
                            Choose Plan
                        </button>
                    </div>


                    {/* Standard Plan */}
                    <div className="border-2 border-indigo-600 rounded-2xl p-8 shadow-xl bg-indigo-50 hover:shadow-2xl hover:-translate-y-2 transition duration-500">
                        <h2 className="text-2xl font-bold text-indigo-700">Professional</h2>
                        <p className="text-gray-600 mt-2">Great for growing businesses</p>
                        <h3 className="text-4xl font-bold text-indigo-600 mt-5">₹9,999</h3>
                        <ul className="mt-5 space-y-2 text-gray-700 text-sm">
                            <li>✔ 6-Page Website</li>
                            <li>✔ Advanced SEO</li>
                            <li>✔ Custom Design</li>
                            <li>✔ Contact Forms + Integrations</li>
                        </ul>
                        <button disabled className="mt-6 w-full bg-indigo-600 disabled:bg-indigo-400 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
                            Choose Plan
                        </button>
                    </div>


                    {/* Premium Plan */}
                    <div className="border border-indigo-100 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-500">
                        <h2 className="text-2xl font-bold text-indigo-700">Premium</h2>
                        <p className="text-gray-600 mt-2">For businesses that need everything</p>
                        <h3 className="text-4xl font-bold text-indigo-600 mt-5">₹14,999</h3>
                        <ul className="mt-5 space-y-2 text-gray-700 text-sm">
                            <li>✔ Unlimited Pages</li>
                            <li>✔ Premium UI/UX</li>
                            <li>✔ Full SEO Optimization</li>
                            <li>✔ 1-Year Free Maintenance</li>
                        </ul>
                        <button disabled className="mt-6 w-full disabled:bg-indigo-400 bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
                            Choose Plan
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
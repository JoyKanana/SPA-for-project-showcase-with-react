import { Link } from "react-router-dom";
import StatCard from "./Statcards";
import ProductCard from "./ProductCard";
function Dashboard() {
    return (
        <div className="space-y-6 text-black">

            <section className="rounded-lg bg-[#673F89] p-6 text-white hover:text-black">
                <div >
                    <h1 className="text-xl font-bold hover:text-black">WELCOME BACK RANE</h1>
                    <p className="text-sm text-purple-100 hover:text-black">rane@gmail.com</p>
                </div>
            </section>


            <section className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <StatCard title="Category" value="6" />
                <StatCard title="Low stock" value="12 products" />
                <StatCard title="Best seller" value="Wireless headphones" />
            </section>
            {/*separating the sales overview and  and product section into two columns*/}
            <div className=" grid  gap-5 lg:grid-cols">
                <section className="rounded-lg bg-white p-5 shadow-sm">
                    <h2>Sales overview</h2>
                    <section>
                        <StatCard title="Today's Sales" value="KES 9000" />
                        <StatCard title="Yesterday's Sales" value="KES 2000" />
                        <StatCard title="Month to date sales" value="KES 40,000" />
                        <StatCard title="Year to date sales" value="KES 500,000" />


                    </section>
                </section >
            </div>
            <div className=" grid  gap-5 lg:grid-cols-2">
                <section className="rounded-lg bg-white p-5 shadow-sm">
                    <h2>REcent orders</h2>
                    <ul className="divide-y ">

                        <li className="py-2 text-sm text-gray-700">#001 Wired headphones</li>
                        <li className="py-2 text-sm text-gray-700">#002 JBL speaker</li>
                        <li className="py-2 text-sm text-gray-700">#003 Harman Kardon speaker</li>
                    </ul>

                </section>
                <section className="rounded-lg bg-white p-5 shadow-sm">
                    <h2 className="mb-4 font-semibold text-gray-800">Quick actions</h2>
                    <div className="grid grid-cols-2 gap-3">
                        <Link
                            to="/products/add"
                            className="rounded-lg bg-purple-50 p-4 text-center text-sm font-medium text-[#673F89] transition hover:bg-purple-100"
                        >
                            Add product
                        </Link>
                        <Link
                            to="/products"
                            className="rounded-lg bg-purple-50 p-4 text-center text-sm font-medium text-[#673F89] transition hover:bg-purple-100"
                        >
                            View products
                        </Link>
                    </div>
                </section>

            </div>



        </div>
    );
}

export default Dashboard;
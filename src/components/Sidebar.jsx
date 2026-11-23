import { Link } from "react-router-dom";

function Sidebar() {
    return (

      
            <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-[#673F89] b">
                    <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-[#673F89]">

                    <ul class="space-y-2 font-medium">

                        <li>
                            <Link to="/dashboard" class="flex items-center px-2 py-1.5 text-purple-100 rounded-base 	 hover:text-black group">
                                <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" /></svg>
                                <span class="ms-3">SHOP ZONE</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard" class="flex items-center px-2 py-1.5 text-purple-100 rounded-lg 	hover:bg-white/10  hover:text-black group">
                                <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" /></svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                                
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" class="flex items-center px-2 py-1.5 text-purple-100 rounded-lg 	hover:bg-white/10 hover:text-black group">
                                <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" /></svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/products/add" class="flex items-center px-2 py-1.5 text-purple-100 rounded-lg 	hover:bg-white/10 hover:text-black group">
                                <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" /></svg> 
                                <span class="flex-1 ms-3 whitespace-nowrap">Add product</span>
                                
                            </Link>

                        </li>
                    </ul>
                     <ul className="mt-auto space-y-2 font-medium border-t border-white/20 pt-4">
                        <li>
                            <a href="#" class="flex items-center px-2 py-1.5 text-purple-100 rounded-lg 	hover:bg-white/10 hover:text-fg-brahover:text-black  group">
                                <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8" /></svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Settings</span>
                                </a>
                        </li>


                        <li>
                            <a href="#" class="flex items-center px-2 py-1.5 text-purple-100 rounded-lg 	hover:bg-white/10 hover:text-black group">
                                <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" /></svg>
                                <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            </aside>

    )
}
export default Sidebar
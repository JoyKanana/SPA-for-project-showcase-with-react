function  Navbar(){
    return(
        <form className="max-w-md mx-auto">   
    <label for="search " class="block mb-2.5 text-sm font-medium text-gray-800 sr-only ">Search for product</label>
    <div class="relative  ">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
           
        </div>
        <input type="search" id="search  " class="block w-full p-3 ps-9 bg-purple-50 boder border-purple-200 text-heading text-sm rounded-lg focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search for products  " required />
        <button type="button" class="absolute end-1.5 bottom-1.5 text-black-100  bg-[#673F89] hover:bg-black-700rounded-lg boder border-black-100 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">Search</button>
    </div>
</form>
    )
}
export default Navbar
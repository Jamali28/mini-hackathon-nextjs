
 export default function Footer(){
    return(
    
    <footer className="bg-gray-600 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-lg font-bold mb-4 md:mb-0">
            MJ Jamali
          </div>
          <div className="text-gray-300 mb-4 md:mb-0">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Contact</p>
          </div>
          <div className="text-gray-300">
            <p>Follow us on:</p>
            <p>Facebook | Twitter | Instagram | LinkedIn</p>
          </div>
    
        </div>
        <div className="py-10 text-gray-300 justify-center">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odio iure enim neque, reiciendis tempore! Lorem ipsum dolor
               sit amet consectetur adipisicing elit. Deleniti, officia voluptas! Reiciendis praesentium quia dicta itaque in magnam
                recusandae laborum.

            </p>
          </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>

      
    )
  }
  
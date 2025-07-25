import { Link } from "react-router-dom"

export default function Header(){
    return (
        <div className="w-full h-[80px] bg-gray-200 text-white p-4 fixed top-0 left-0 z-50 shadow-md">
             <div className="flex gap-6 justify-end mt-3 mr-4"> 
                <Link to="/" className="text-purple-500 text-lg font-semibold">
                    Home
                </Link>

                <Link to="/page2" className="text-purple-500 text-lg font-semibold">
                    Page 2
                </Link>

                 <Link to="/page3" className="text-purple-500 text-lg font-semibold">
                    Page 3
                </Link>
            </div>
        </div>
    )
}
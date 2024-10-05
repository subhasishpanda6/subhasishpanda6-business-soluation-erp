
import { Link } from "react-router-dom"


function PageNotFound() {
    return (
        <div
            className="w-full h-screen flex justify-center items-center"
        >

            <div className="flex flex-col font-bold items-center">
                <span className="">404 Page Not Found</span>
                <Link to="/">
                    <span className="inline-block mt-3 rounded-md bg-primary hover:bg-primary-200 px-3 py-2 text-sm font-medium text-white ease-in duration-200">Go to Home</span>
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound
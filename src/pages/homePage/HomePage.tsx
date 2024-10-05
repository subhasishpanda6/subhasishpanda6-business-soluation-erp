
import Heading from "./components/Heading";
import ProductCard from "./components/ProductCard";
import hospital from "../../assets/hospital.png";
import hotel from "../../assets/hotel.png";
import dairy from "../../assets/dairy.png";
import jewelery from "../../assets/jewelery.png";
import fashion from "../../assets/fashion.png";
import storage from "../../assets/cold-storage.png";

import Layout from "../../components/Layout";

const data = [
    {
        src : hospital,
        heading : "Medical ERP",
        text : "ERP Software For Pharmaceutical Dealers and Distributors (Wholesale and Retail Chemists) with Stock management, Expiry Calculation & much more."
    },
    {
        src : hotel,
        heading : "Hotel ERP",
        text : "Software for Hotels and Restaurants with K.O.T. Management, Table Booking, Room Rent Service, Billing, Stock Management, Production. Very Easy to operate."
    },
    {
        src : dairy,
        heading : "Hotel ERP",
        text : "Software for Hotels and Restaurants with K.O.T. Management, Table Booking, Room Rent Service, Billing, Stock Management, Production. Very Easy to operate."
    },
    {
        src : jewelery,
        heading : "Jewelery ERP",
        text : "E.R.P. Software For Rice Mills, Cotton Mill to fulfill requirements of Sheller Industries with Customer Bills, Rate / Weight Adjustment & much more."
    },
    {
        src : storage,
        heading : "cold storage",
        text : "E.R.P. Software For Rice Mills, Cotton Mill to fulfill requirements of Sheller Industries with Customer Bills, Rate / Weight Adjustment & much more."
    },
    {
        src : fashion,
        heading : "Retail ERP",
        text : "E.R.P. Software For Rice Mills, Cotton Mill to fulfill requirements of Sheller Industries with Customer Bills, Rate / Weight Adjustment & much more."
    },
]


function HomePage() {
    return (
        <main>
            <Layout>
            <div className="py-10">
                    <Heading as="h1">Our ERP Software</Heading>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        data.map(({src,heading,text}) =>(
                            <ProductCard 
                            src={src} 
                            alt="This is a school managemen"
                            url="/"
                            heading={heading}
                            text={text}
                            />
                        ))
                    }
                    

                    
                </div>
            </Layout>
        </main>
    )
}

export default HomePage
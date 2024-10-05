import Layout from "../../components/Layout"
import Heading from "../homePage/components/Heading"



function ContactUsPage() {
    return (
        <Layout>
            <div className="py-10">
                <Heading as="h1">Contact Us</Heading>
                <div className="container">
                    <p className="py-5 text-md font-medium">We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out using the information below.</p>

                    <div className="mt-5">
                        <p className="font-bold text-xl">Phone:</p>
                        <span>+1 (800) 123-4567</span>

                        <p className="font-bold text-xl mt-3">Email:</p>
                        <span><a href="mailto:info@dummycompany.com">info@dummycompany.com</a></span>

                        <p className="font-bold text-xl mt-3">Business Hours:</p>
                        <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                        <span>Saturday - Sunday: Closed</span>
                    </div>


                    <p className="font-bold text-xl text-center py-5">Get in Touch:</p>

                </div>
                </div>
        </Layout>
    )

}

export default ContactUsPage
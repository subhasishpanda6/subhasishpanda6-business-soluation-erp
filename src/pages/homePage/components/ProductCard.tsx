
import Card from './Card'
import CardImage from './CardImage'
import Heading from './Heading'
import { Link } from 'react-router-dom'
import Text from './Text'


type TPropsType = {
    src : string,
    url :string,
    alt : string,
    heading : string,
    text : string
}

function ProductCard({ src, url, alt, heading, text }: TPropsType) {
    return (
        <Card>
            <CardImage src={src} alt={alt} />
            <div className="my-5">
                <Heading as="h3">{heading}</Heading>
            </div>
            <div className="mb-10">
                <Text>{text}</Text>
            </div>
            <Link to={url} className="inline-block mt-3 rounded-md bg-primary hover:bg-primary-200 px-3 py-2 text-sm font-medium text-white ease-in duration-200">
                Download
            </Link>
        </Card>
    )
}

export default ProductCard
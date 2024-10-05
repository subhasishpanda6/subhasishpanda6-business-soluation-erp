
type TPropsType = {
    src : string,
    alt : string
}
function CardImage({src,alt}:TPropsType) {
    return (
        <div>
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                <img src={src} alt={alt} width="60px" height="60px" />
            </span>
        </div>
    )
}

export default CardImage;
import { Image } from "../types/index";
import { useRouter } from "next/router";

type LastTenDaysImagesProps = { images: Image[] };
const LastTenDaysImages = ({ images }: LastTenDaysImagesProps) => {
    const router = useRouter();
    return (
        <div className="flex flex-wrap justify-center items-center mt-10 gap-3">
            {images?.map((image: Image, index: Number) => (
                <div className="flex flex-col items-center justify-center"
                    key={`imageOfTheLastTen-Days-${image.title}`}
                    onClick={() => router.push(`/image/${image.date}`)}
                >
                    <h3>{image.title}</h3>
                    <img className='w-[600px] h-[600px]' src={image.url} alt={image.title} />
                </div>
            ))}
        </div>
    );
};

export default LastTenDaysImages;

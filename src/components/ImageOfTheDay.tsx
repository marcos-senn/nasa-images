import {Image} from "../types/index";
import { useRouter } from "next/router";

const ImageOfTheDay = ({url,title,date}:Image) => {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="">{title}</h2>
            <img src={url} alt={`ImageOfTheDay-${title}`} onClick={()=>router.push(`/image/${date}`)}/>
        </div>
    );
};

export default ImageOfTheDay;

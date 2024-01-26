import { useRouter } from "next/router";
import fetcher from "@/utils/fetcher";
import {Image} from "@/types/index"

type Props = {
    imageDetail:Image;
}
const imageDate = ({imageDetail}:Props) => {
    const router = useRouter();
    const {title,explanation,url} = imageDetail
    return <div className='flex flex-col justify-center items-center mt-3'>
        <h3 className="mb-2">{title}</h3>
        <img src={url} alt="" />
        <p className='mt-2 w-1/2 text-justify'>{explanation}</p>
    </div>;
};

export default imageDate;


export async function getServerSideProps(args:any){
    const {date} = args.params
    const imageDetail = await fetcher(`&date=${date}`)
    return {
        props:{imageDetail}
    }
}

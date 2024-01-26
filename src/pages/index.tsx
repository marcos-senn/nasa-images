import fetcher from "@/utils/fetcher";
import { Image } from "@/types/index";
import ImageOfTheDay from "@/components/ImageOfTheDay";
import LastTenDaysImages from "@/components/LastTenDaysImages";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type homeProps = {
  imageOfTheDay: Image;
  last10DaysImage: Image[];
};

export default function Home({ imageOfTheDay, last10DaysImage }: homeProps) {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <ImageOfTheDay {...imageOfTheDay}/>
            <LastTenDaysImages images={last10DaysImage} />
        </main>
    );
}

export async function getServerSideProps() {
  try {
      const starDate = "2024-01-16";
      const endDate = "2024-01-25";
      const imageOfTheDay = await fetcher();
      const last10DaysImage = await fetcher(
          `&start_date=${starDate}&end_date=${endDate}`
      );
      return {
          props: { imageOfTheDay, last10DaysImage },
      };
  } catch (error) {
      console.error(error);
  }
}
import Image from "next/image";
import { MontionDiv } from "./MotionDiv";

export interface Anime {
  mal_id: number;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  titles: { type: string; title: string }[];
  title: string;
  title_english: string | null;
  title_japanese: string;
  type: string;
  episodes: number;
  score: number;
  synopsis: string;
  genres: { name: string }[];
}

interface Props {
  anime: Anime;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimeCard({ anime, index }: Props) {
  return (
    <MontionDiv variants={variants} initial="hidden" animate="visible"
      transition={{
        delay: (index % 8) * 0.25,
        ease: "easeInOut",
        duration: 0.5
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full">
      <div className="relative w-full h-[37vh]">
        <Image src={anime.images.jpg.large_image_url} alt={anime.title} fill className="rounded-xl object-cover" />
      </div>

      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.title}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.type}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {anime.genres.map((genre, index) => (
            <span key={index} className="text-sm text-gray-300 bg-[#161921] px-2 py-1 rounded" >
              {genre.name}
            </span>
          ))}
        </div>

        {/* Episodes and Score */}
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image src="./episodes.svg" alt="episodes" width={20} height={20} className="object-contain" />
            <p className="text-base text-white font-bold">
              {anime.episodes || "N/A"}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image src="./star.svg" alt="star" width={18} height={18} className="object-contain" />
            <p className="text-base font-bold text-[#FFAD49]">
              {anime.score || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </MontionDiv>
  );
}

export default AnimeCard;

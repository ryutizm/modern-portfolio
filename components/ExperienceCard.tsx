import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="
      flex flex-col rounded-lg items-center space-y-7 
      flex-shrink-0 h-auto w-[325px] md:w-[600px] xl:w-[600px] 
      snap-center bg-[#322c2c] mt-10 py-5 px-10 hover:opacity-100 
      opacity-40 cursor-pointer transition-opacity 
      duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
        w-40 h-40 rounded-full xl:w-52 xl:h-52 
        object-cover object-center"
        src="/imgs/rakuten-panda-experience.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Tester for mobile App</h4>
        <p className="font-bold text-2xl mt-1">Rakuten mobile inc.</p>

        <p className="uppercase py-3 text-gray-300">
          2021/06/01 - 2022/09/30
        </p>

        <ul className="list-disc space-y-2 ml-4 text-sm ">
          <li>
            通話、メッセージ送信、ポイント関連、その他各種機能の機能テスト
          </li>
          <li>
            機能仕様書を元にテストケースの作成、小規模テストチームのマネジメント
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

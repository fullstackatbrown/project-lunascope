import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useEffect, useState } from "react";

type GridItem = {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
};

const Grid = () => {
  const [items, setItems] = useState<GridItem[]>([]);
  useEffect(() => {
    const fetchItems = async () => {
      const data = await gridItems();
      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {items.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
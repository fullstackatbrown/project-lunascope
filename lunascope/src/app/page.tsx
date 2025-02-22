import Image from "next/image";
import Intro from "../app/_components/intro"
export default function Home() {
    return (
      <div className="flex flex-col mx-32 my-10">
        <Intro />
      </div>
    );
}

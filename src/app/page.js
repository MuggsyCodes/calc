import Display from "@/components/Display";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <Display />
      </div>
    </div>
  );
}

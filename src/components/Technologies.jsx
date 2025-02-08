import { FaNodeJs, FaPython } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiHuggingface,
  SiJavascript,
  SiMongodb,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-5xl">Technologies</h1>
      <h2 className="mt-10 mb-5 text-center text-2xl">Machine Learning</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-6xl text-amber-300 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPytorch className="text-6xl text-red-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTensorflow className="text-6xl text-orange-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiScikitlearn className="text-6xl text-amber-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHuggingface className="text-6xl text-amber-200" />
        </div>
      </div>

      <h2 className="mt-10 mb-5 text-center text-2xl">Web Developing</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-6xl text-amber-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-6xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-6xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-6xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;

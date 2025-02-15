import { motion } from "framer-motion";
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

const iconVariantsDuration = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-5xl">Technologies</h1>
      <h2 className="mt-10 mb-5 text-center text-2xl">Machine Learning</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariantsDuration(2.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-6xl text-amber-300 " />
        </motion.div>
        <motion.div
          variants={iconVariantsDuration(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {" "}
          <SiPytorch className="text-6xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariantsDuration(6.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {" "}
          <SiTensorflow className="text-6xl text-orange-400" />
        </motion.div>
        <motion.div
          variants={iconVariantsDuration(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {" "}
          <SiScikitlearn className="text-6xl text-amber-400" />
        </motion.div>
        <motion.div
          variants={iconVariantsDuration(5.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {" "}
          <SiHuggingface className="text-6xl text-amber-200" />
        </motion.div>
      </div>

      <h2 className="mt-10 mb-5 text-center text-2xl">Web Developing</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariantsDuration(4.31)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-6xl text-amber-400" />
        </motion.div>
        <motion.div
          variants={iconVariantsDuration(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {" "}
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariantsDuration(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {" "}
          <FaNodeJs className="text-6xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariantsDuration(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {" "}
          <SiMongodb className="text-6xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariantsDuration(2.34)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {" "}
          <TbBrandNextjs className="text-6xl text-white" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;

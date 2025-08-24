import { motion } from "framer-motion"
import { FaNodeJs, FaPython } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import {
  SiHuggingface,
  SiJavascript,
  SiMongodb,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const iconVariantsDuration = (initial, duration) => ({
  initial: { y: initial },
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-5xl">Technologies</h1>
      <div>
        <h2 className="mt-10 mb-5 text-center text-2xl">Web Developing</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
            variants={iconVariantsDuration(5, 4.31)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiJavascript className="text-6xl text-amber-400" />
            </a>
          </motion.div>

          <motion.div
            variants={iconVariantsDuration(-9, 2.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiReactjsLine className="text-6xl text-cyan-400" />
            </a>
          </motion.div>

          <motion.div
            variants={iconVariantsDuration(6, 3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <a
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaNodeJs className="text-6xl text-green-400" />
            </a>
          </motion.div>

          <motion.div
            variants={iconVariantsDuration(-5, 5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiMongodb className="text-6xl text-green-400" />
            </a>
          </motion.div>

          <motion.div
            variants={iconVariantsDuration(0, 2.34)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandNextjs className="text-6xl text-white" />
            </a>
          </motion.div>
        </div>
      </div>

      <div>
        <h2 className="mt-10 mb-5 text-center text-2xl">Machine Learning</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
            variants={iconVariantsDuration(10, 2.0)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPython className="text-6xl text-amber-300" />
            </a>
          </motion.div>

          <motion.div
            variants={iconVariantsDuration(5, 3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <a
              href="https://pytorch.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiPytorch className="text-6xl text-red-500" />
            </a>
          </motion.div>

          <motion.div
            variants={iconVariantsDuration(-3, 6.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <a
              href="https://www.tensorflow.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTensorflow className="text-6xl text-orange-400" />
            </a>
          </motion.div>

          <motion.div
            variants={iconVariantsDuration(2, 4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <a
              href="https://scikit-learn.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiScikitlearn className="text-6xl text-amber-400" />
            </a>
          </motion.div>

          <motion.div
            variants={iconVariantsDuration(-4, 5.9)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <a
              href="https://huggingface.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiHuggingface className="text-6xl text-amber-200" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Technologies

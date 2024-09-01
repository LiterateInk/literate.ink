import { type Component } from "solid-js";
import { Motion } from "solid-motionone"

const duration = .4
const step = (i: number) => i * duration;

const FullScreenLoader: Component = () => {
  return (
    <Motion.div class="fixed z-50"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: duration * 2.25, delay: step(6) }}
    >
      <div class="bg-[#232323] w-screen h-screen flex flex-col items-center justify-center">
        <Motion.div
          class="flex flex-col items-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration, delay: step(4) }}
        >
          <Motion.div class="text-white flex gap-2 text-4xl"
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration, delay: step(2) }}
          >
            <Motion.p
              initial={{ opacity: 0, y: 40, x: 40 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration, delay: 0, x: { delay: step(1) } }}
            >
              Be
            </Motion.p>
            <Motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration, delay: step(1) }}
            >
              more
            </Motion.p>
          </Motion.div>
          <Motion.div class="text-white flex gap-2 text-4xl"
            initial={{ opacity: 0, y: 60, x: 46 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration, delay: step(2), x: { delay: step(3) } }}
          >
            <Motion.p
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration, delay: step(3) }}
            >
              accurate
            </Motion.p>
            <Motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration, delay: step(3) }}
            >
              using
            </Motion.p>
          </Motion.div>
        </Motion.div>

        <Motion.div
          class="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: "40vh" }}
          transition={{ duration, delay: step(4), y: { delay: step(6), duration: duration * 2 } }}
        >
          <Motion.p class="text-white text-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: [0, .2, 1], y: 0 }}
            transition={{ duration: duration *2, delay: step(4), opacity: { offset: [0, 0.25, 1]} }}
          >
            Literate
          </Motion.p>
        </Motion.div>
      </div>
      {/* <div class="bg-[#232323] w-screen h-[15vh] rounded-b-[100%]" /> */}
    </Motion.div>
  )
}

export default FullScreenLoader;

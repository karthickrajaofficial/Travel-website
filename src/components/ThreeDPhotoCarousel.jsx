// "use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query,
  {
    defaultValue = false,
    initializeWithValue = true,
  } = {}
) {
  const getMatches = (query) => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const categories = [
  {
    id: "adventure",
    title: "Adventure",
    image: "package/category/adventure.jpg",
    mainCategory: "adventure"
  },
  {
    id: "beach",
    title: "Beach & Island",
    image: "package/category/beach.jpg",
    mainCategory: "beach"
  },
  {
    id: "culture",
    title: "Culture",
    image: "package/category/cultural.jpg",
    mainCategory: "culture"
  },
  {
    id: "nature",
    title: "Nature",
    image: "package/category/desert.jpg",
    mainCategory: "nature"
  },
  {
    id: "river",
    title: "River Cruise",
    image: "package/category/adventure.jpg",
    mainCategory: "river"
  },
  {
    id: "hills",
    title: "Hill Stations",
    image: "package/category/beach.jpg",
    mainCategory: "hills"
  },
  {
    id: "city",
    title: "City Tours",
    image: "package/category/explorer.jpg",
    mainCategory: "city"
  },
  {
    id: "romantic",
    title: "Romantic",
    image: "package/category/cycle.jpg",
    mainCategory: "romantic"
  }
]

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(
  ({ handleClick, controls, isCarouselActive }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800
    const faceCount = categories.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    return (
      <div
        className="flex h-full items-center justify-center bg-mauve-dark-2"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {categories.map((category, i) => (
            <motion.div
              key={category.id}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-mauve-dark-2 p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(category)}
            >
              <motion.div className="relative w-full h-full">
                <motion.img
                  src={category.image}
                  alt={category.title}
                  layoutId={`img-${category.id}`}
                  className="pointer-events-none w-full h-full rounded-xl object-cover"
                  initial={{ filter: "blur(4px)" }}
                  layout="position"
                  animate={{ filter: "blur(0px)" }}
                  transition={transition}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {category.title}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

function ThreeDPhotoCarousel({ onCategorySelect }) {
  const [activeCategory, setActiveCategory] = useState(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()

  const handleClick = (category) => {
    setActiveCategory(category)
    setIsCarouselActive(false)
    controls.stop()
    if (onCategorySelect) {
      onCategorySelect(category)
    }
  }

  const handleClose = () => {
    setActiveCategory(null)
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeCategory.id}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 m-5 md:m-36 lg:mx-[19rem] rounded-3xl"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.div className="relative">
  <motion.img
    layoutId={`img-${activeCategory.id}`}
    src={activeCategory.image}
    alt={activeCategory.title}
    className="max-w-full max-h-full rounded-lg shadow-lg"
    initial={{ scale: 0.5 }}
    animate={{ scale: 1 }}
    transition={{
      delay: 0.5,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    }}
    style={{
      willChange: "transform",
    }}
  />
  <motion.div
    className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    whileHover={{ opacity: 0.7 }}
  >
    <span className="text-white text-2xl font-bold">
      {activeCategory.title}
    </span>
  </motion.div>
</motion.div>

          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative rounded-lg h-[200px] w-full overflow-hidden ">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel }

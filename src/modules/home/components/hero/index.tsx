"use client"
import { Carousel } from "@material-tailwind/react"

const Hero = () => {
  const images = [
    { path: "/carousal/image4.webp", alt: "Image 1" },
    { path: "/carousal/image5.webp", alt: "Image 2" },
    { path: "/carousal/image6.webp", alt: "Image 3" },
    { path: "/carousal/image7.webp", alt: "Image 4" },
    { path: "/carousal/image8.webp", alt: "Image 5" },
    { path: "/carousal/image9.webp", alt: "Image 6" },
    { path: "/carousal/image10.webp", alt: "Image 7" },
    { path: "/carousal/image11.webp", alt: "Image 8" },
  ]

  return (
    <div className="w-full relative">
      <Carousel className="h-[318px]" autoplay={true} autoplayDelay={3000}>
        <img
          src="/carousal/image3.jpg"
          alt="image 1"
          height={"130px"}
          className="h-full w-full object-cover"
        />
        <img
          src="/carousal/image2.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="/carousal/image3.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>

      <div className="mt-8 flex justify-center text-lg font-semibold">
        Top Brands
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-8 mt-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-[290px] h-[290px] overflow-hidden border rounded-lg"
            >
              <img
                src={image.path}
                alt={image.alt}
                className="transition-transform duration-500 ease-in-out transform hover:scale-110 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero

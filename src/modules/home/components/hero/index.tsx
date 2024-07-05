"use client"
import { Carousel } from "@material-tailwind/react"

const Hero = () => {
  const images = [
    { path: "/carousal/image4.jpg", alt: "Image 1" },
    { path: "/carousal/image5.jpg", alt: "Image 2" },
    { path: "/carousal/image6.webp", alt: "Image 3" },
    { path: "/carousal/image7.webp", alt: "Image 4" },
    { path: "/carousal/image8.webp", alt: "Image 5" },
    { path: "/carousal/image9.jpg", alt: "Image 6" },
    { path: "/carousal/image10.jpg", alt: "Image 7" },
    { path: "/carousal/image11.jpeg", alt: "Image 8" },
  ];

  return (
    <div className="w-full relative">
      <Carousel className="h-[85vh]"autoplay={true} autoplayDelay={3000} >
        <img
          src="/carousal/image1.webp"
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
      
      <div className="mt-8 flex justify-center text-lg font-semibold">Top Brands</div>
      
      <div className="grid grid-cols-4 gap-6 mt-4 p-7 justify-center">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative w-[300px] h-[350px] overflow-hidden border rounded-lg"
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
  )
}

export default Hero

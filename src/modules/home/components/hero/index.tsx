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
  const category = [
    { src: "/carousal/sunglass1.webp", alt: "image 1", title: "Sunglasses" },
    { src: "/carousal/sunglass2.webp", alt: "image 2", title: "Frames" },
    { src: "/carousal/sunglass3.webp", alt: "image 3", title: "Clip-On" },
    { src: "/carousal/sunglass4.webp", alt: "image 4", title: "Clear Lenses" },
    { src: "/carousal/sunglass5.webp", alt: "image 1", title: "Color lenses" },
    { src: "/carousal/sunglass6.webp", alt: "image 2", title: "solutions" },
    { src: "/carousal/sunglass7.webp", alt: "image 3", title: "kids wear" },
    { src: "/carousal/sunglass8.webp", alt: "image 4", title: "sales offers" }
  ];
  
  const image = [
    { path: "/carousal/image14.jpg", alt: "Image 1" },
    { path: "/carousal/image15.jpg", alt: "Image 2" },
    { path: "/carousal/image16.jpg", alt: "Image 3" },
    { path: "/carousal/image17.jpg", alt: "Image 4" },
  ]

  return (
    <div className="w-full relative mt-3">
      <Carousel className="h-[527px]" autoplay={true} autoplayDelay={3000}>
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
      <div className="mt-8 flex justify-center text-3xl font-semibold">
        Shop By Category
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8">
        {category.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-60 h-60 rounded-full overflow-hidden group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="mt-2">
              <span className="text-3xl uppercase">{image.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex  flex-col m-9 p-9">
        <img
          src="/carousal/image18.jpg"
          alt="image 3"
          className="h-full w-full object-cover transform transition-transform duration-300 hover:-translate-y-2"
        />
        <img
          src="/carousal/image19.jpg"
          alt="image 3"
          className="h-full w-full object-cover transform transition-transform duration-300 hover:-translate-y-2"
        />
      </div>

      <div className="mt-8 flex justify-center text-3xl font-semibold">
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
      <div className="mt-8 flex justify-center text-3xl font-semibold ">
        Featured Collection
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-8 mt-4">
          {image.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[390px] overflow-hidden border rounded-lg"
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

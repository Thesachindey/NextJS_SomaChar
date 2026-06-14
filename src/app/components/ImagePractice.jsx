import { Geist, Monoton, Roboto } from "next/font/google";
import Image from "next/image";


const geist = Monoton({
  weight: ['400'],
})

const ImagePractice = () => {
  return (
    <section className={`max-w-4xl mx-auto p-6 ${geist.className}`}>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative w-full h-[350px]">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="Developer working on laptop"
           className="object-cover rounded-lg shadow-lg"
           fill
          />

          {/* <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3" alt="Developer working on laptop" className="object-cover rounded-lg shadow-lg"  /> */}
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Learn Next.js Image Component
          </h2>

          <p className="text-gray-600 mb-4">
            The Next.js Image component automatically optimizes images for
            better performance. It supports lazy loading, responsive images,
            and modern image formats.
          </p>

          <p className="text-gray-600 mb-6">
            Practice different props like width, height, fill, sizes, quality,
            and priority to understand how image optimization works.
          </p>

          <button className="px-5 py-2 bg-black text-white rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImagePractice;
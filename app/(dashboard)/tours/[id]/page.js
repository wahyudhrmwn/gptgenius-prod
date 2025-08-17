import React from "react";
import { generateTourImage, getSingleTour } from "@/utils/action";
import { redirect } from "next/navigation";
import Link from "next/link";
import TourInfo from "@/components/TourInfo";
import Image from "next/image";

const SingleTourPage = async ({ params }) => {
  const tour = await getSingleTour(params.id);

  if (!tour) {
    redirect("/tours");
  }

  // Generate tour image with error handling
  let tourImage = null;
  try {
    tourImage = await generateTourImage({
      city: tour.city,
      country: tour.country,
    });
  } catch (error) {
    console.error("Error generating tour image:", error);
    // Continue without image if generation fails
  }

  return (
    <div>
      <Link href={"/tours"} className="btn btn-secondary mb-12">
        back to tours
      </Link>
      {tourImage ? (
        <div>
          <Image
            src={tourImage}
            width={300}
            height={300}
            className="rounded-xl shadow-xl mb-16 h-96 w-96 object-cover"
            alt={tour.title}
            priority
          />
        </div>
      ) : (
        <div className="rounded-xl shadow-xl mb-16 h-96 w-96 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Image not available</p>
        </div>
      )}
      <TourInfo tour={tour} />
    </div>
  );
};

export default SingleTourPage;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroTwo = ({ heading, message }) => {
  return (
    <>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 bg-sky-50 p-4 m-3 rounded-2xl">
        <div className="p-2 bg-white rounded-xl flex justify-center">
          <Link className=" hover:underline" href="#">
            <div className="text-center py-2">
              <h3 className="font-bold text-xl">Appliances </h3>{" "}
              <p> Delivered in 3-5 Days </p>
            </div>
            <Image
              src="/assets/23w04150-4-corners-appliances.webp"
              alt=""
              width={300}
              height={70}
            />
          </Link>
        </div>
        <div className="p-2 bg-white rounded-xl flex justify-center">
          <Link className=" hover:underline" href="#">
            <div className="text-center py-2">
              <h3 className="font-bold text-xl">Furniture </h3>{" "}
              <p> Delivered in 3-5 Days </p>
            </div>
            <Image
              src="/assets/23w04150-4-corners-furniture.webp"
              alt=""
              width={300}
              height={70}
            />
          </Link>
        </div>
        <div className="p-2 bg-white rounded-xl flex justify-center">
          <Link className=" hover:underline" href="#">
            <div className="text-center py-2">
              <h3 className="font-bold text-xl">Mattresses</h3>{" "}
            </div>
            <Image
              src="/assets/23w0582-homepage-image-creation-beds.webp"
              alt=""
              width={300}
              height={70}
            />
          </Link>
        </div>
        <div className="p-2 bg-white rounded-xl flex justify-center">
          <Link className=" hover:underline" href="#">
            <div className="text-center py-2">
              <h3 className="font-bold text-xl">Exercise</h3>
            </div>
            <Image
              src="/assets/23w0582-homepage-image-creation-exercise.webp"
              alt=""
              width={300}
              height={70}
            />
          </Link>
        </div>
      </div>

      <div className="w-full p-3">
        <Image
          src="/assets/download.webp"
          alt=""
          className="rounded-xl"
          width={2000}
          height={200}
        />
      </div>
    </>
  );
};

export default HeroTwo;

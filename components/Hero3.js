import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroThree = ({ heading, message }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 p-3 my-2">
        <div className="grid pr-4">
          <div className="p-2 bg-white rounded-xl flex justify-center">
            <Link className=" " href="#">
              <Image
                src="/assets/23w0649-half-hero-sidekick-lg-main.avif"
                alt=""
                width={1000}
                height={1000}
                className="rounded-xl"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 m-3 rounded-2xl">
          <div className="bg-white rounded-xl flex flex-col justify-center">
            <Link className=" " href="#">
              <Image
                src="/assets/23w0649-half-hero-sidekick-lg-qned.avif"
                alt=""
                width={300}
                height={70}
                className="rounded-xl"
              />
            </Link>
            <div className="text-center py-2">
              <h3 className="font-bold text-sm">
                LG 75&quot; Class - QNED85 Series - 4K UHD QNED MiniLED TV
              </h3>{" "}
              <p>$1,799.99 Delivered</p>
            </div>
          </div>
          <div className="bg-white rounded-xl flex justify-center">
            <Link className=" " href="#">
              <Image
                src="/assets/23w0649-half-hero-sidekick-lg-oled1.avif"
                alt=""
                width={300}
                height={70}
                className="rounded-xl"
              />
              <div className="text-center py-2">
                <h3 className="font-bold text-sm">
                  LG 77&quot; Class - OLED C2 Series - 4K UHD OLED TV
                </h3>{" "}
                <p> $2,699.99 Delivered </p>
              </div>
            </Link>
          </div>
          <div className="bg-white rounded-xl flex flex-row justify-center">
            <Link className=" " href="#">
              <Image
                src="/assets/23w0649-half-hero-sidekick-lg-oled2.avif"
                alt=""
                width={300}
                height={70}
                className="rounded-xl"
              />
              <div className="text-center py-2">
                <h3 className="font-bold text-sm">
                  LG 77&quot; Class - OLED C2 Series - 4K UHD OLED TV
                </h3>{" "}
                <p> $2,699.99 Delivered </p>
              </div>
            </Link>
          </div>
          <div className="bg-white rounded-xl flex justify-center">
            <Link className=" " href="#">
              <Image
                src="/assets/23w0649-half-hero-sidekick-lg-soundbar.avif"
                alt=""
                width={300}
                height={70}
                className="rounded-xl"
              />
              <div className="text-center py-2">
                <h3 className="font-bold text-sm">
                  {" "}
                  LG 75&quot; Class - QNED85 Series - 4K UHD QNED MiniLED TV
                </h3>
                <p> $2,699.99 Delivered </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="w-full p-3">
          <Image
            src="/assets/download (1).webp"
            alt=""
            className="rounded-xl"
            width={2000}
            height={200}
          />
        </div>

        <div className="w-full p-3">
          <Image
            src="/assets/download (2).webp"
            alt=""
            className="rounded-xl"
            width={2000}
            height={200}
          />
        </div>
      </div>
    </>
  );
};

export default HeroThree;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
        <div className="p-2">
          <Image
            src="/assets/imageService.webp"
            alt=""
            width={270}
            height={70}
          />
          <div className="text-center py-2">
            <Link className=" hover:underline" href="/products">
              Top Seller <p> $449.99 </p>
            </Link>
          </div>
        </div>
        <div className="p-2">
          <Image
            src="/assets/imageService (1).webp"
            alt=""
            width={270}
            height={70}
          />
          <div className="text-center py-2 ">
            <Link className=" hover:underline" href="/products">
              {" "}
              New Sony Game Day Savings{" "}
            </Link>
          </div>
        </div>
        <div className="p-2">
          <Image
            src="/assets/imageService (2).webp"
            alt=""
            width={270}
            height={70}
          />
          <div className="text-center py-2">
            <Link className=" hover:underline" href="/products">
              {" "}
              $70 - $120 OFF{" "}
            </Link>
          </div>
        </div>
        <div className="p-2">
          <Image
            src="/assets/imageService (3).webp"
            alt=""
            width={270}
            height={70}
          />

          <div className="text-center py-2">
            <Link href="/products"> $1,699.99 After $400 OFF </Link>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
        <div className="p-2">
          <Image
            src="/assets/imageService (5).webp"
            alt=""
            width={270}
            height={70}
          />
          <div className="text-center py-2">
            <Link className=" hover:underline" href="/products">
              Top Seller <p> $449.99 </p>
            </Link>
          </div>
        </div>
        <div className="p-2">
          <Image
            src="/assets/imageService (6).jpg"
            alt=""
            width={270}
            height={70}
          />
          <div className="text-center py-2 ">
            <Link className=" hover:underline" href="/products">
              {" "}
              New Sony Game Day Savings{" "}
            </Link>
          </div>
        </div>
        <div className="p-2">
          <Image
            src="/assets/imageService (7).webp"
            alt=""
            width={270}
            height={70}
          />
          <div className="text-center py-2">
            <Link className=" hover:underline" href="/products">
              $70 - $120 OFF
            </Link>
          </div>
        </div>
        <div className="p-2">
          <Image
            src="/assets/imageService (8).jpg"
            alt=""
            width={270}
            height={70}
          />
          <div className="text-center py-2">
            <Link href="/products"> $1,699.99 After $400 OFF </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

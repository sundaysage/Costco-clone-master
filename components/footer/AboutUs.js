import Link from "next/link";

const AboutUs = ({ desktop = true }) => {
  return (
    <>
      <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
        {desktop && (
          <>
            <li className="inline-block py-3 text-neutral-600 uppercase font-medium tracking-wide">
              About Us
            </li>
          </>
        )}
        <li>
          <Link
            href="#"
            className="inline-block   text-gray-500 hover:underline no-underline"
          >
            Charitable Contributions
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-block   text-gray-500 hover:underline no-underline"
          >
            Company Information
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-block   text-gray-500 hover:underline no-underline"
          >
            Sustainability Commitment
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-block   text-gray-500 hover:underline no-underline"
          >
            Investor Relations
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-block   text-gray-500 hover:underline no-underline"
          >
            Jobs
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-block   text-gray-500 hover:underline no-underline"
          >
            Kirkland Signature
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-block   text-gray-500 hover:underline no-underline"
          >
            Logo and Media Requests
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-block   text-gray-500 hover:underline no-underline"
          >
            Product Videos
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AboutUs;

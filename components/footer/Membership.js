import Link from "next/link";

const Membership = ({ desktop = true }) => {
  return (
    <>
      <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
        {desktop && (
          <>
            <li className="inline-block py-3 text-neutral-600 uppercase font-medium tracking-wide">
              Membership
            </li>
          </>
        )}
        <li>
          <Link
            href="#"
            className="inline-block   text-gray-500 hover:underline no-underline"
          >
            Join Now
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-block   text-gray-500 hover:underline no-underline"
          >
            Member Privileges
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-block   text-gray-500 hover:underline no-underline"
          >
            Executive Membership Terms
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-block   text-gray-500 hover:underline no-underline"
          >
            Sign In or Register
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-block   text-gray-500 hover:underline no-underline"
          >
            Credit Card{" "}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Membership;

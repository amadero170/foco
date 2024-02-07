import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex w-full bg-transparent absolute z-10 justify-between items-center py-4 px-4">
        <Link href="/">
          <h1 className="text-white"> FOCO </h1>
        </Link>

        <div className="flex gap-x-2 items-center">
          <Link href="/" className="text-white">
            HOME
          </Link>
          <Link href="/about" className="text-white">
            ABOUT
          </Link>
          <Link href="/#" className="text-white">
            SERVICES
          </Link>
          <Link href="/#" className="text-white">
            CONTACT
          </Link>
        </div>
      </nav>
    </>
  );
}

import Footer from "/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <img
            src="/assets/404.png"
            alt="Lost Page"
            className="mx-auto max-h-96 mb-8"
          />
          <h1 className="text-3xl font-semibold text-gray-800">
            Oh no... We lost this page
          </h1>
          <p className="text-gray-600 mt-2">
            We searched everywhere but couldn’t find what you’re looking for.{" "}
            <br />
            Let’s find a better place for you to go.
          </p>
          <Link href={"/"}>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4  py-2 mt-4 rounded-lg">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

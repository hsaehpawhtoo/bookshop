import Link from "next/link";
// import Popular from '@/app/components/popular';
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div>
        <p className="text-red-500 text-lg font-bold">Access Denied</p>
        <a className="text-sm font-bold" href="/auth/login">Login to access Library</a>
      </div>
    );
  }

  let data = await fetch('http://localhost:3000/book');
  let jsonData = await data.json();
  let results = jsonData.result;
  const userInfo = await session.user.user;
  console.log("data-" + JSON.stringify(results));
  console.log("session-" + JSON.stringify(session));
  console.log("session.user.name-" + session.user.user.name);

  // ... your page.js code

return (
  <>
    <h4 className="text-3xl mt-2 mx-4 font-bold text-gray-800">Welcome to Book Store, {userInfo.name}!</h4>

    <div className="grid grid-cols-6 bg-white text-gray-800 gap-0 my-12 mx-6">
      {/* Column headers */}
      <div className="font-semibold text-lg text-white bg-blue-500 p-2">Genre code</div>
      <div className="font-semibold text-lg text-white bg-blue-500 p-2">Genre</div>
      <div className="font-semibold text-lg text-white bg-blue-500 p-2">Description</div>
      <div className="font-semibold text-lg text-white bg-blue-500 p-2">Action</div>

      <div className="col-span-6">
        {results.map((item) => (
          <div className="grid grid-cols-6 gap-0 p-2" key={item._id}>
            {/* Book details */}
            <div className="text-sm text-gray-800 p-2">{item.genre_code}</div>
            <div className="text-sm text-gray-800 p-2">{item.genre}</div>
            <div className="text-sm text-gray-800 p-2">{item.description}</div>

            {/* Action buttons */}
            <div className="text-sm text-gray-800 p-2 flex gap-2">
              <Link href={`/book/${item.genre_code}`}>
                <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                  View Detail
                </button>
              </Link>
              <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="col-span-6 mt-12"> {/* Adjusted to span all columns */}
        <h2 className="text-2xl font-semibold mb-4 text-center">Popular Books</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Popular Book Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 w-80 mx-auto">
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-xl font-semibold mb-2 text-center text-blue-700">Romance</h3>
              <p className="text-base text-gray-700 leading-relaxed text-center mb-4">
                The love story between two main characters.
              </p>
              <Link href="/book/1"> {/* Replace 1 with actual genre_code */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                  View Detail
                </button>
              </Link>
            </div>
          </div>

          {/* Popular Book Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 w-80 mx-auto">
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-xl font-semibold mb-2 text-center text-blue-700">Thriller</h3>
              <p className="text-base text-gray-700 leading-relaxed text-center mb-4">
                A suspenseful story filled with twists and turns.
              </p>
              <Link href="/book/2"> {/* Replace 2 with actual genre_code */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                  View Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}
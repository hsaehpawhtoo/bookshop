import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-500 h-screen text-white">
      <div className="bg-blue-600 p-3">
        <h3>Welcome to HEPH Bookstore</h3>
      </div>
      <Link href='/book/'>
        <div className="bg-purple-600 text-white p-2 rounded-md mt-20 mx-20 hover:bg-purple-700 hover:text-white max-w-40 min-h-40 drop-shadow-md hover:drop-shadow-2xl text-center">
          <h3 className="font-bold mt-12">Open Book Shop</h3>
          <p className="text-xs text-yellow-100 mt-2">Unlock the treasure of knowledge, one book at a time.</p> 
        </div>
      </Link>
    </div>
  );
}
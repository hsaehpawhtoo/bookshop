import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Page({ params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    //if user is not logged in, show login message
    return (
      <div>
        <p className="text-red-400 text-lg font-bold">
        You need to log in to access the bookstore.
        </p>
        <a className="text-sm font-bold" href="/auth/login">
          Login to access the bookstore
        </a>
      </div>
    );
  }

  const slug = (await params).slug;
  const data = await fetch('http://localhost:3000/book/' + slug);
  const bookDetail = await data.json();
  const result = await bookDetail.result;


  return (
    <div>
      <h4 className="text-3xl mt-2 mx-4 font-bold">Detail Book</h4>
      <div className="grid grid-cols-2 bg-background text-txt gap-0 my-5 mx-5">
        <div className="font-semibold text-lg text-white bg-txt p-2">
          <h4>Genre Code</h4>
        </div>
        <div className="font-semibold text-lg text-white bg-txt p-2">
        {result.grnre_code}
        </div>

        <div className="text-sm text-txt p-2">
          Genre
        </div>
        <div className="text-sm text-txt p-2">
          {result.genre}
        </div>

        <div className="text-sm text-txt p-2">
         Description
        </div>
        <div className="text-sm text-txt p-2">
          {result.description} 
        </div>
      </div>
    </div>
  );
}
import React from "react";
import { Button } from "@material-tailwind/react";

function Pagination({
  nextPage,
  prevPage,
  newPageHandle,
}: {
  nextPage: any;
  prevPage: any;
  newPageHandle: any;
}) {
  return (
    <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-1 lg:py-4 mt-3 text-center">
      <div className="flex justify-center ">
        <div className="mx-2">
          <Button onClick={() => newPageHandle(prevPage)} disabled={!prevPage}>
            Prev
          </Button>
        </div>
        <div className="mx-2">
          <Button onClick={() => newPageHandle(nextPage)} disabled={!nextPage}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;

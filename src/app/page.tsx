import Link from "next/link";
import React from "react";

function Wellcome() {
  return (
    <div>
      Helloo Work =={" "}
      <Link prefetch={false} href={"/login"}>
        Login
      </Link>
    </div>
  );
}

export default Wellcome;

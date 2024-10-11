import Link from "next/link";
import React from "react";

function Wellcome() {
  return (
    <div>
      Helloo Work == <Link href={"/login"}>Login</Link>
    </div>
  );
}

export default Wellcome;

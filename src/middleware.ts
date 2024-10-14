import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define all the submodules (e.g., ship, om, yard, etc.)
const submodules = ["/ship", "/om", "/yard", "/anotherModule"]; // Thêm tất cả phân hệ bạn cần

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Lấy submodule hiện tại từ đường dẫn
  const currentSubmodule = submodules.find((submodule) =>
    pathname.startsWith(submodule)
  );

  // Lấy submodule được lưu trữ từ cookie (nếu có)
  const savedSubmodule = req.cookies.get("submodule")?.value;

  // Nếu người dùng truy cập vào một submodule đã biết
  if (currentSubmodule) {
    if (!savedSubmodule) {
      // Lưu submodule hiện tại vào cookie nếu chưa có cookie
      const res = NextResponse.next();
      res.cookies.set("submodule", currentSubmodule, { path: "/" });
      return res;
    } else if (savedSubmodule !== currentSubmodule) {
      // Nếu người dùng cố gắng truy cập phân hệ khác, chuyển hướng về phân hệ ban đầu
      return NextResponse.redirect(new URL("/403", req.url));
    }
  }

  // Nếu không thỏa mãn điều kiện, cho phép yêu cầu tiếp tục
  return NextResponse.next();
}

// Define the paths where the middleware will apply
export const config = {
  matcher: [
    "/ship/:path*",
    "/om/:path*",
    "/yard/:path*",
    "/anotherModule/:path*",
  ], // Áp dụng cho mọi phân hệ
};

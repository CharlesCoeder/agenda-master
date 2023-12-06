export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/ai_assistant",
    "/timeline",
    "/tasks",
    "/inbox",
    "/settings",
    "/profile",
  ],
};

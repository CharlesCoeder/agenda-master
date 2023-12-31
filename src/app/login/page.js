import LoginPage from "./loginPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-500">
      <LoginPage />
    </div>
  );
}

import { getSession } from "@/actions/auth";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import UserDashboard from "@/components/dashboard/UserDashboard";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      {session.role === "ADMIN" ? (
        <AdminDashboard />
      ) : (
        <UserDashboard />
      )}
    </>
  );
}

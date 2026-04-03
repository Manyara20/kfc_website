// src/app/dashboard/page.jsx
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth";

export const dynamic = 'force-dynamic';

export default async function DashboardHome() {
  const session = await getServerSession(authOptions);
  if (!session) return null;

  return (
    <div className="text-black">
      <h1 className="text-3xl font-bold">Welcome to the Admin Dashboard</h1>
      <p>Select an option from the sidebar to manage content.</p>
    </div>
  );
  
}
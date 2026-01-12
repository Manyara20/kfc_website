// src/app/dashboard/page.jsx
import { auth } from "../../auth";

export const dynamic = 'force-dynamic';// from src/app/dashboard/ → root: up 2 levels

export default async function DashboardHome() {
  const session = await auth();
  if (!session) return null;  // or redirect("/login") if you want

  return (
    <div className="text-black">
      <h1 className="text-3xl font-bold">Welcome to the Admin Dashboard</h1>
      <p>Select an option from the sidebar to manage content.</p>
    </div>
  );
  
}
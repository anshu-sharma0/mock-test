import { WorkspaceOverview } from "@/app/_components/sections/WorkspaceOverview";
import { adminNav } from "@/app/_lib/navigation";
import { adminMetrics } from "@/app/_lib/data";

export default function AdminOverviewPage() {
  return <WorkspaceOverview type="admin" nav={adminNav} active="/admin" metrics={adminMetrics} />;
}

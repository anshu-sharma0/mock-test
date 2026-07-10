import { WorkspaceOverview } from "@/app/_components/sections/WorkspaceOverview";
import { orgNav } from "@/app/_lib/navigation";
import { orgMetrics } from "@/app/_lib/data";

export default function OrgOverviewPage() {
  return <WorkspaceOverview type="org" nav={orgNav} active="/org" metrics={orgMetrics} />;
}

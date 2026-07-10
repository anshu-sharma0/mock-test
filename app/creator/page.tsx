import { WorkspaceOverview } from "@/app/_components/sections/WorkspaceOverview";
import { creatorNav } from "@/app/_lib/navigation";
import { creatorMetrics } from "@/app/_lib/data";

export default function CreatorOverviewPage() {
  return <WorkspaceOverview type="creator" nav={creatorNav} active="/creator" metrics={creatorMetrics} />;
}

import { WorkspaceSectionPage } from "@/app/_components/sections/WorkspaceSectionPage";

export default function OrgSectionPage({ params }: { params: { page: string } }) {
  return <WorkspaceSectionPage root="org" section={params.page} />;
}

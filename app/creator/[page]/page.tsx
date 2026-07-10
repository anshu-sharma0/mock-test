import { WorkspaceSectionPage } from "@/app/_components/sections/WorkspaceSectionPage";

export default function CreatorSectionPage({ params }: { params: { page: string } }) {
  return <WorkspaceSectionPage root="creator" section={params.page} />;
}

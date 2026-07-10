import { WorkspaceSectionPage } from "@/app/_components/sections/WorkspaceSectionPage";

export default function AdminSectionPage({ params }: { params: { page: string } }) {
  return <WorkspaceSectionPage root="admin" section={params.page} />;
}

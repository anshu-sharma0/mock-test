import { AppFrame } from "../layout/AppFrame";
import { GenericWorkspace } from "./GenericWorkspace";
import { creatorNav, orgNav, adminNav } from "../../_lib/navigation";

export function WorkspaceSectionPage({
  root,
  section,
}: {
  root: "creator" | "org" | "admin";
  section: string;
}) {
  const nav = root === "creator" ? creatorNav : root === "org" ? orgNav : adminNav;
  const active = `/${root}/${section}`;
  const item = nav.find((entry) => entry.href === active) ?? nav[0];
  const copy = {
    creator: "Creator workflows include test management, question bank, publishing, reviews, revenue, and payout operations.",
    org: "Institute workflows include users, roles, batches, assignments, live tests, reports, billing, integrations, and audit logs.",
    admin: "Platform workflows include support, moderation, payments, content governance, feature rollout, and operational health.",
  }[root];

  return (
    <AppFrame title={item.label} subtitle={`${root} workspace`} nav={nav} active={active}>
      <GenericWorkspace
        icon={item.icon}
        title={item.label}
        copy={copy}
        actions={[
          [root === "creator" ? "Create test" : root === "org" ? "Create assignment" : "Open queue", `/${root}`],
          ["View analytics", `/${root}/analytics`],
        ]}
      />
    </AppFrame>
  );
}

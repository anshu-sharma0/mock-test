import { AppFrame } from "../layout/AppFrame";
import { GenericWorkspace } from "./GenericWorkspace";
import { creatorNav, adminNav } from "../../_lib/navigation";

export function WorkspaceSectionPage({
  root,
  section,
}: {
  root: "creator" | "admin";
  section: string;
}) {
  const nav = root === "creator" ? creatorNav : adminNav;
  const active = `/${root}/${section}`;
  const item = nav.find((entry) => entry.href === active) ?? nav[0];
  const copy = {
    creator: "Creator workflows include test management, question bank, publishing, reviews, revenue, and payout operations.",
    admin: "Platform workflows include support, moderation, payments, content governance, feature rollout, and operational health.",
  }[root];

  return (
    <AppFrame title={item.label} subtitle={`${root} workspace`} nav={nav} active={active}>
      <GenericWorkspace
        icon={item.icon}
        title={item.label}
        copy={copy}
        actions={[
          [root === "creator" ? "Create test" : "Open queue", `/${root}`],
          ["View analytics", `/${root}/analytics`],
        ]}
      />
    </AppFrame>
  );
}

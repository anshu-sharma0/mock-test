import { RouteRenderer, staticRoutes } from "../_components/mocktestzone";

export function generateStaticParams() {
  return staticRoutes.map((route) => ({
    path: route.split("/"),
  }));
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ path: string[] }>;
}) {
  const { path } = await params;

  return <RouteRenderer segments={path} />;
}

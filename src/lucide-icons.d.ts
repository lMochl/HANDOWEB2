// Lucide's individual ESM modules share the public icon component type.
// Direct imports avoid traversing the full icon catalog during development.
declare module "lucide-react/dist/esm/icons/*.js" {
  import type { LucideIcon } from "lucide-react";
  const Icon: LucideIcon;
  export default Icon;
}

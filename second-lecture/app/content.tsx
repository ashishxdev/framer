import { cn } from "cn";
import { Card } from "./components/ui/card";
import { GeistSans } from "geist/font/sans";

export default function Content() {
  return (
    <div
      className={cn(
        GeistSans.className,
        "h-screen flex items-center justify-center bg-gray-50",
      )}
    >
      <Card />
    </div>
  );
}

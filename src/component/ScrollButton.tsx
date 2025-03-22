import { ChevronsDown } from "lucide-react";

export default function MoreButton() {
  return (
    <div className="flex flex-col items-center gap-1 text-gray-700/50 animate-bounce text-white font-quick">
      <span className="text-lg ">More About Me</span>
      <ChevronsDown size={24} />
    </div>
  );
}

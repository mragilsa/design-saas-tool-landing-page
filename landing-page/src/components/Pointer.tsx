import { twMerge } from "tailwind-merge";

export default function Pointer(props: {
  name: string;
  color?: "red" | "blue";
}) {
  const { name, color = "blue" } = props;

  return (
    <div className="relative flex items-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={twMerge(
          "text-white",
          color === "red" && "text-red-400",
          color === "blue" && "text-blue-400"
        )}
      >
        <path d="M3 2L20 12L13 13L12 20L3 2Z" />
      </svg>

      <div className={twMerge(
        "inline-flex rounded-full font-semibold text-sm px-2 py-0.5 bg-blue-500 text-white shadow-sm",
        "rounded-tl-none",
        color === "red" && "bg-red-500"
      )}>
        {name}
      </div>
    </div>
  );
}
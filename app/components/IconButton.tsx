import Link from "next/link";
import { IconType } from "react-icons";

export default function IconButton(
  props: {
    url: string;
    icon: IconType;
    className?: string;
    noTransition?: false;
    iconSize?: number | string;
  },
) {
  const transition = (props.noTransition)
    ? ""
    : "transition-opacity opacity-50 hover:opacity-100";

  const size = props.iconSize ?? 24;

  return (
    <Link
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className={props.className}
    >
      <props.icon
        size={size}
        className={transition}
      />
    </Link>
  );
}

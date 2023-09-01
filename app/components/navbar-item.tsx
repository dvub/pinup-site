import Link from "next/link";

export default function NavbarItem(props: {text: string, link: string}) {
    return (
        <li className="p-4 flex-initial hover:text-gray-300 duration-200 cursor-pointer active py-0">
        <Link href={props.link}>{props.text}</Link>
      </li>
    )
}
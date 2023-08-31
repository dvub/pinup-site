import Link from "next/link";

export default function NavbarItem(props: {text: string, link: string}) {
    return (
        <li className="p-4 flex-none hover:text-gray-300 duration-200 cursor-pointer active">
        <Link href={props.link}>{props.text}</Link>
      </li>
    )
}
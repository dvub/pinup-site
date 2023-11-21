import { Transition } from "@headlessui/react";

export default function SlideWrapper(props: {
  children: React.ReactNode;
  translate: String;
}) {
  return (
    <Transition.Child
      enter="transition ease duration-500 transform"
      enterFrom={`${props.translate}`}
      enterTo="translate-y-0"
      leave="transition ease duration-300 transform"
      leaveFrom="translate-y-0"
      leaveTo={`${props.translate}`}
    >
      {props.children}
    </Transition.Child>
  );
}

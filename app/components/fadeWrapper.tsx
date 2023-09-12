import { Transition } from "@headlessui/react";

export default function FadeWrapper(props: { children: React.ReactNode }) {
  return (
    <Transition.Child
      enter="transition ease duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease duration-300"
      leaveFrom="opacity-100 "
      leaveTo="opacity-0"
    >
      {props.children}
    </Transition.Child>
  );
}

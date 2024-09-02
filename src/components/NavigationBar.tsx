import { type Component } from "solid-js";
import LogoIcon from "~icons/literate/logo"

const NavigationBar: Component = () => {
  return (
    <nav class="flex p-4">
      <div class="flex justify-between items-center gap-2">
        <LogoIcon class="text-xl" />
        <p class="text-2xl font-700">
          LiterateInk
        </p>
      </div>
    </nav>
  )
};

export default NavigationBar;

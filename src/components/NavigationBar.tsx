import { type ParentComponent, type Component } from "solid-js";

import IcBaselineDiscord from '~icons/ic/baseline-discord'
import LogoIcon from "~icons/literate/logo"
import MdiGithub from '~icons/mdi/github'

const NavigationBar: Component = () => {
  const Link: ParentComponent<{ href: string }> = (props) => (
    <a class="hover:underline underline-offset-4 font-500" href={props.href} target={props.href.startsWith("#") ? void 0 : "_blank"}>
      {props.children}
    </a>
  )

  return (
    <header class="flex items-center justify-between p-4">
      <div class="flex justify-between items-center gap-2">
        <LogoIcon class="text-xl" />
        <p class="text-2xl font-700">
          LiterateInk
        </p>
      </div>

      <div class="flex items-center gap-8">
        <nav class="flex gap-4">
          <Link href="#works">
            Works
          </Link>
          <Link href="https://docs.literate.ink/">
            Documentation
          </Link>
          <Link href="#about">
            About
          </Link>
          <Link href="#contact">
            Contact
          </Link>
        </nav>

        <div class="flex gap-4">
          <Link href="https://literate.ink/discord">
            <IcBaselineDiscord />
          </Link>
          
          <Link href="https://literate.ink/github">
            <MdiGithub />
          </Link>
        </div>
      </div>

    </header>
  )
};

export default NavigationBar;

import {DiscordLogo} from "phosphor-react"

export function ButtonDiscord() {
  return (
    <a
      href=""
      className="p-4 text-sm bg-purple-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-purple-600 transition-colors"
    >
      <DiscordLogo size={24} />
      Comunidade do Discord
    </a>
  );
}

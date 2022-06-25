import {Lightning} from "phosphor-react"

export function ButtonChallenge() {
  return (
    <a
      href=""
      className="p-4 text-sm border border-green-300 text-green-300 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-300 hover:text-gray-900 transition-colors"
    >
      <Lightning size={24} />
      Acesse o desafio
    </a>
  );
}

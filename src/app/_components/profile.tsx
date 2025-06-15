import { PROFILE } from "@/lib/constants"
import { FaGithub, FaXTwitter, FaLinkedin, FaEthereum } from "react-icons/fa6"

type Props = {
  shortDescription?: string // Optional, used when concise is true. less than 20 Zenkaku chars recommended
  concise?: boolean // false by default
}

const Profile = ({ concise = false, shortDescription }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center justify-left w-full">
        <img
          className={`${concise ? "w-12 h-12" : "w-16 h-16"} rounded-full border mr-4 border-neutral-200 dark:border-neutral-700`}
          src={PROFILE.image}
          alt={PROFILE.name}
        />
        <div className="flex flex-col justify-center">
          <a href="/biography">
            <span className="text-lg font-semibold">{PROFILE.name}</span>
          </a>
          {concise && shortDescription && (
            <span className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">{shortDescription}</span>
          )}
        </div>
      </div>
      {!concise && (
        <>
          <div className="mt-4 w-full flex justify-left mb-4">
            <p style={{ whiteSpace: "pre-line" }} className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
              {PROFILE.description}
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default Profile

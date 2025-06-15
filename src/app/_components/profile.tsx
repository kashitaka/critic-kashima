import { PROFILE } from "@/lib/constants"

const Profile = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center justify-left w-full">
        <img
          className="w-16 h-16 rounded-full border mr-4 border-neutral-200 dark:border-neutral-700"
          src={PROFILE.image}
          alt={PROFILE.name}
        />
        <div className="flex flex-col justify-center">
          <a href="/biography">
            <span className="text-lg font-semibold">{PROFILE.name}</span>
          </a>
        </div>
      </div>
      <div className="mt-4 w-full flex justify-left mb-4">
        <p style={{ whiteSpace: "pre-line" }} className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
          {PROFILE.description}
        </p>
      </div>
    </div>
  )
}

export default Profile

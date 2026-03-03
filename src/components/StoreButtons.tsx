import { googlePlaystore, appleLogoWhite } from "@/assets";

interface StoreButtonsProps {
    variant?: "default" | "compact";
    className?: string;
}

export default function StoreButtons({
    variant = "default",
    className = "",
}: StoreButtonsProps) {
    const isCompact = variant === "compact";

    return (
        <div
            className={`flex flex-wrap gap-3 ${className}`}
        >
            {/* Google Play */}
            <a
                href={import.meta.env.VITE_DRIFTO_PLAYSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 rounded-lg bg-black text-white transition hover:bg-gray-800 ${isCompact ? "px-3 py-2" : "px-4 py-3 flex-1 min-w-[160px]"
                    }`}
            >
                <img
                    src={googlePlaystore}
                    className={isCompact ? "h-6 w-6" : "h-8 w-8"}
                    alt="Google Play"
                />
                <div className="flex flex-col leading-tight">
                    <span className="text-[10px] md:text-xs text-gray-300">
                        Get it on
                    </span>
                    <span
                        className={`font-semibold ${isCompact ? "text-sm" : "text-base md:text-lg"
                            }`}
                    >
                        Google Play
                    </span>
                </div>
            </a>

            {/* App Store */}
            <a
                href={import.meta.env.VITE_DRIFTO_APPSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 rounded-lg bg-black text-white transition hover:bg-gray-800 ${isCompact ? "px-3 py-2" : "px-4 py-3 flex-1 min-w-[160px]"
                    }`}
            >
                <img
                    src={appleLogoWhite}
                    className={isCompact ? "h-6 w-6" : "h-8 w-8"}
                    alt="App Store"
                />
                <div className="flex flex-col leading-tight">
                    <span className="text-[10px] md:text-xs text-gray-300">
                        Download on the
                    </span>
                    <span
                        className={`font-semibold ${isCompact ? "text-sm" : "text-base md:text-lg"
                            }`}
                    >
                        App Store
                    </span>
                </div>
            </a>
        </div>
    );
}

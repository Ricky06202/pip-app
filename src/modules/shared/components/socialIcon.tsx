import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  X,
  YouTube,
} from "@mui/icons-material";

export interface SocialLink {
  platform:
    | "email"
    | "github"
    | "facebook"
    | "instagram"
    | "twitter"
    | "linkedin"
    | "youtube";
  url: string;
}

interface SocialIconProps extends SocialLink {
  personName: string;
}

const renderSocialIcon = (platform: string) => {
  switch (platform) {
    case "email":
      return <Email className="w-5 h-5" />;
    case "github":
      return <GitHub className="w-5 h-5" />;
    case "facebook":
      return <Facebook className="w-5 h-5" />;
    case "instagram":
      return <Instagram className="w-5 h-5" />;
    case "twitter":
      return <X className="w-5 h-5" />;
    case "linkedin":
      return <LinkedIn className="w-5 h-5" />;
    case "youtube":
      return <YouTube className="w-5 h-5" />;
    default:
      return null;
  }
};

export const SocialIcon = ({ platform, url, personName }: SocialIconProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-primary transition-colors duration-200"
      aria-label={`${platform} de ${personName}`}
      title={platform === "email" ? url : platform}
    >
      {renderSocialIcon(platform)}
    </a>
  );
};

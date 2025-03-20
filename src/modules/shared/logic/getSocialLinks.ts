import { TeamMemberProps } from "@home/components/team";
import { SocialLink } from "@shared/components/socialIcon";

export const getSocialLinks = (member: TeamMemberProps) => {
  const socials: SocialLink[] = [];
  if (member.email) {
    socials.push({ platform: "email", url: `mailto:${member.email}` });
  }
  if (member.github) {
    socials.push({ platform: "github", url: member.github });
  }
  if (member.facebook) {
    socials.push({ platform: "facebook", url: member.facebook });
  }
  if (member.instagram) {
    socials.push({ platform: "instagram", url: member.instagram });
  }
  if (member.twitter) {
    socials.push({ platform: "twitter", url: member.twitter });
  }
  if (member.linkedin) {
    socials.push({ platform: "linkedin", url: member.linkedin });
  }
  if (member.youtube) {
    socials.push({ platform: "youtube", url: member.youtube });
  }
  return socials;
};

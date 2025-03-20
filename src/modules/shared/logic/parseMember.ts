import { TeamMemberProps } from "@home/components/team";
import { Person, Role } from "@shared/types/APIObjectsTypes";

export const parseMember = (person: Person): TeamMemberProps => ({
  id: person.id!,
  name: person.fullName,
  role: (person.role as Role).role,
  image: person.photo,
  email: person.email,
  github: person.github,
  facebook: person.facebook,
  instagram: person.instagram,
  twitter: person.twitter,
  linkedin: person.linkedin,
  youtube: person.youtube,
});

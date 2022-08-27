import { TeamMemberInterface } from 'src/app/shared/types/TeamMember';
import { teamMembers } from './data';

export const fetchTeamMembers = (): Promise<TeamMemberInterface[]> => {
  return new Promise((resolve, reject) => resolve(teamMembers));
};

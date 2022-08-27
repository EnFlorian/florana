import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { fetchTeamMembers } from 'src/app/mock-api/team/api';
import { TeamMemberInterface } from 'src/app/shared/types/TeamMember';

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.scss'],
})
export class TeamSectionComponent implements OnInit {
  teamMembers$: Observable<TeamMemberInterface[]> = from(fetchTeamMembers());

  constructor() {}

  ngOnInit(): void {}
}

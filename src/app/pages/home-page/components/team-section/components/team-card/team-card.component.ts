import { Component, Input } from '@angular/core';
import { TeamMemberInterface } from 'src/app/shared/types/TeamMember.interface';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
})
export class TeamCardComponent {
  @Input('member') memberProps: TeamMemberInterface;
}

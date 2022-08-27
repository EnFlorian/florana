import { Component, Input, OnInit } from '@angular/core';
import { TeamMemberInterface } from 'src/app/shared/types/TeamMember';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
})
export class TeamCardComponent implements OnInit {
  @Input('member') memberProps: TeamMemberInterface;

  constructor() {}

  ngOnInit(): void {}
}

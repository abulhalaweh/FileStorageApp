import { Component  } from '@angular/core';

import { ProfileService } from '../../services/profile.service';
import { MappingService } from '../../services/mapping.service';

@Component({
    selector: 'app-profile-cmp',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers: [ProfileService, MappingService]
})

export class ProfileComponent {
    public relatedUser: string;

    constructor(private profileSrc: ProfileService) {
        this.configUserOption();
    }

    private configUserOption(): void {
        const userRole = this.profileSrc.UserRole;
        this.relatedUser = userRole === 'patient' ? 'doctors' :  'patients';
    }
}

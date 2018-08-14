import { Component, ViewChild, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { SocialLogin } from '../socialLogin';
import { untilComponentDestroyed } from 'ng2-rx-componentdestroyed';

@Component({
    selector: 'app-confirmation-cmp',
    templateUrl: './confirmation.component.html',
    styleUrls: ['../account.css', './confirmation.component.css']
})

export class ConfirmationComponent implements AfterViewInit, OnDestroy {

    @Input() externalSignIn: SocialLogin;
    @ViewChild('confirmation') confirmModal: ElementRef<HTMLElement>;
    @ViewChild('closeBtn') closeBtn: ElementRef<HTMLElement>;

    ngAfterViewInit(): void {
        this.externalSignIn.callConfirmOption
        .pipe(untilComponentDestroyed(this))
            .subscribe(() => {
                this.confirmModal.nativeElement.click();
        });
    }

    ngOnDestroy(): void {
    }
}

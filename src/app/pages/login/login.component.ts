import { Component, inject } from '@angular/core';
import {MCAuthBasicComponent, MCAuthModel, MCAuthenticationService, MCAuthBasicConfig} from "@mckit/auth"
import {MCSubtitle, MCMenu} from "@mckit/core"
import {BasicLayout} from "@mckit/layout"
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  imports: [MCAuthBasicComponent],
  template: `<mc-auth-basic [config]="config" (submit)="login($event)" />`,
})
export class LoginComponent {
  config = Object.assign(new MCAuthBasicConfig(), {
    title:"Sign in",
    submitButton: "Sign in"
  })
  private readonly auth = inject((MCAuthenticationService))
  private readonly router = inject(Router)
  login(data: MCAuthModel) {
    this.auth.signIn(data).subscribe({
      next: () => this.router.navigateByUrl("/"),
      error: err => console.error
    })
  }
}

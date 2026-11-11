import { Component, inject } from '@angular/core';
import {MCAuthBasicComponent, MCAuthModel, MCAuthenticationService, MCAuthBasicConfig} from "@mckit/auth"
import {MCSubtitle, MCMenu} from "@mckit/core"
import {BasicLayout} from "@mckit/layout"
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  imports: [MCAuthBasicComponent],
  template: `<div class= "p-6 max-w-7xl mx-auto">
                <header class="mb-6">
                  <h1 class="text-2xl font-semibold text-indigo-900">Login</h1>
                </header>
              </div>`,
})
export class LoginComponent {}

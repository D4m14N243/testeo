import { Component, signal, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MCFooterService, MCSidebarService, MCTopbarService } from "@mckit/layout-core"
import { MCMenu, MCSubtitle } from "@mckit/core"
import { MCIconToggleSidebarButton } from "@mckit/layout"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('web');
  private readonly sidebar = inject(MCSidebarService)
  private readonly topbar = inject(MCTopbarService)
  private readonly footer = inject(MCFooterService)

  constructor() {
    this.sidebar.setComponents([
      new MCSubtitle("MENU"),
      new MCMenu([
        {label: "Products", link: "/products"},
        {label: "Login", link: "/login"}
      ])
    ])
    this.topbar.addComponentToLeft(new MCIconToggleSidebarButton())
  }
}

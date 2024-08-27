import { Routes } from "@angular/router";
import { ProfileComponent } from "./pages/profile/profile.component";
import { UserService } from "src/app/core/auth/services/user.service";
import { inject } from "@angular/core";
import SubscribeComponent from "../article/pages/subscribe/subscribe.component";
import SubscribeSuccessComponent from "../article/pages/subscribe/subscribe.success.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: ":username",
        component: ProfileComponent,
        children: [
          {
            path: "",
            loadComponent: () =>
              import("./components/profile-articles.component"),
          },
          {
            path: "favorites",
            loadComponent: () =>
              import("./components/profile-favorites.component"),
          },
        ],
      },
      {
        path: ":username/subscribe",
        component: SubscribeComponent,
        canActivate: [() => inject(UserService).isAuthenticated],
      },
      {
        path: ":username/subscribe/success",
        component: SubscribeSuccessComponent,
      },
    ],
  },
];

export default routes;

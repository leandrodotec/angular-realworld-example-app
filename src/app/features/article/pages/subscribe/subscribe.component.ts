import { NgForOf } from "@angular/common";
import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormGroup,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { combineLatest } from "rxjs";
import { Errors } from "../../../../core/models/errors.model";
import { UserService } from "../../../../core/auth/services/user.service";
import { ListErrorsComponent } from "../../../../shared/components/list-errors.component";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { SubscribeService } from "../../services/subscribe.service";

interface ArticleForm {
  email: FormControl<string>;
}

@Component({
  selector: "app-subscribe-page",
  templateUrl: "./subscribe.component.html",
  imports: [ListErrorsComponent, ReactiveFormsModule, NgForOf],
  standalone: true,
})
export default class SubscribeComponent implements OnInit {
  userEmail = "";
  writerUsername = "";

  subscribeForm: UntypedFormGroup = new FormGroup<ArticleForm>({
    email: new FormControl(this.userEmail, { nonNullable: true }),
  });

  errors: Errors | null = null;
  isSubmitting = false;
  destroyRef = inject(DestroyRef);

  constructor(
    private readonly subscriberService: SubscribeService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly userService: UserService,
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params["writerUsername"]) {
      combineLatest([this.userService.getCurrentUser()])
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(([userParam]) => {
          this.userEmail = userParam.user.email;
          this.writerUsername = this.route.snapshot.params["username"];
        });
    }
  }

  submitForm(): void {
    this.isSubmitting = true;
    // post the changes
    this.subscriberService
      .addEmail({
        writerUsername: this.writerUsername,
        subscriberEmail: this.userEmail,
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.router.navigate(["/subscribe/success"]),
        error: (err) => {
          this.errors = err;
          this.isSubmitting = false;
        },
      });
  }
}

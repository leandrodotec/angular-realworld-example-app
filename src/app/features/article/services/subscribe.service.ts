import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Subscription } from "../models/subscription.model";

@Injectable({ providedIn: "root" })
export class SubscribeService {
  constructor(private readonly http: HttpClient) {}

  getSubscribers(writerUsername: string): Observable<Subscription[]> {
    return this.http
      .get<Subscription[]>(`/subscribers/${writerUsername}`)
      .pipe(map((data) => data));
  }

  addEmail(input: Partial<Subscription>): Observable<Subscription> {
    return this.http
      .post<Subscription>("/subscribers/", input)
      .pipe(map((data) => data));
  }
}

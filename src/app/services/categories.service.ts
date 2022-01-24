import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService implements OnInit {
  constructor(private db: AngularFireDatabase) {}

  // get all users
  getCats() {
    return this.db.list('/categories').valueChanges();
  }

  ngOnInit() {}
}

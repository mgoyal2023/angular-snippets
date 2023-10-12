import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as UserActions from '../../store/actions/user.actions';
import { Router } from '@angular/router';
import { selectUsers } from '../../store/selectors/user.selector';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$!: Observable<any[]>;
  users: any[] = [];
  pageTitle = 'Users List';

  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(UserActions.getUsers());

    this.users$ = this.store.select(selectUsers);
    this.users$.subscribe((user: any) => {
      this.users = user
    })

  }

  deleteUser(id: string) {
    this.store.dispatch(UserActions.deleteUser({ id }));
  }

  back() {
    this.router.navigate(['/']);
  }

  editUser(id: string) {
    this.router.navigate([`form/${id}`]);
  }
}

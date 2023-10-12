import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as UserActions from '../../store/actions/user.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { selectUsers } from '../../store/selectors/user.selector';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  registerForm!: FormGroup;
  users$!: Observable<any[]>;
  filterData: any;
  id: any;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        gender: '',
        company: '',
        age: ''
      }
    );

    this.users$ = this.store.select(selectUsers);

    this.users$.subscribe((user: any) => {
      this.id = this.route.snapshot.paramMap.get('id');
      if (!this.id) return
      this.filterData = user.find((item: any) => item.id == this.id);
      this.registerForm.patchValue(this.filterData);
    })

    if (!this.filterData && this.id) this.store.dispatch(UserActions.getUsers());
  }

  save() {
    let payload = this.registerForm.value;
    let id = this.route.snapshot.paramMap.get('id');

    if (id) {
      let editData = { id: id, data: payload }
      this.store.dispatch(UserActions.editUser({ editData }));
    }
    else {
      this.store.dispatch(UserActions.addUser({ payload }));
    }
    this.router.navigate(['/users']);
  }

  testData() {
    this.registerForm.patchValue({
      age: "24",
      company: "Dits",
      gender: "male",
      username: "Gorv Choudhary"
    })
  }

  userList() {
    this.router.navigate(['/users'])
  }

  resetForm() {
    this.registerForm.reset();
  }
}

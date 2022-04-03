import { NgxsModule, Store } from '@ngxs/store';
import { async, TestBed } from '@angular/core/testing';
import {
  IPersonStateModel,
  UserState
} from './user.state';
import { SetUser } from './user.actions';

describe('[TEST]: User state', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([UserState])]
    })
      .compileComponents()
      .then();
    store = TestBed.get(Store);
  }));

  it('Should be state is PersonStateModel', () => {
    const person: IPersonStateModel = {
      deForm: {
        id: '',
        name: '',
        email: '',
        bio: '',
        img: ''
      }
    };
    store.dispatch(new SetUser(person));
    const actual = store.selectSnapshot(({ user }) => user);

    expect(actual).toEqual(person);
  });

  it('Should be state is filled PersonStateModel', () => {
    const person: IPersonStateModel = {
      deForm: {
        id: '12',
        name: 'Adam',
        email: 'agordon@google.com',
        bio: 'Main office',
        img: 'https://www.google.ca/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
      }
    };

    store.dispatch(new SetUser(person));
    const actual = store.selectSnapshot<IPersonStateModel>(({ user }) => user);

    expect(actual).toEqual(person);
  });
});

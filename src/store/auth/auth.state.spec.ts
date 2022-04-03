import { NgxsModule, Store } from '@ngxs/store';
import { async, TestBed } from '@angular/core/testing';
import { AuthenticationStateModel, AuthStateModule } from './auth.state';
import { SetAuthDataAction } from './auth.actions';

describe('[TEST]: AuthStore', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AuthStateModule])]
    })
      .compileComponents()
      .then();
    store = TestBed.get(Store);
  }));

  it('Should be correct dispatch and value is empty', () => {
    const Authentication: AuthenticationStateModel = {
      id: '',
      name: '',
      email: '',
      password: '',
      bio: '',
      success: false,
      loggedIn: false,
    };
    store.dispatch(new SetAuthDataAction(Authentication));
    const actual = store.selectSnapshot<AuthenticationStateModel>(AuthStateModule.getAuthData);
    expect(actual).toEqual(Authentication);
  });

  it('Should be correct dispatch and next value is correct completed', () => {
    const authentication: AuthenticationStateModel = {
      id: '12',
      name: 'Adam',
      password: 'Gordon',
      bio: 'Adam Gordon',
      email: 'agordon@google.com',
      success: true,
      loggedIn: true,
    };

    store.dispatch(new SetAuthDataAction(authentication));
    const actual = store.selectSnapshot<AuthenticationStateModel>(AuthStateModule.getAuthData);
    expect(actual).toEqual(authentication);
  });
});

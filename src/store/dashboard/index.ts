import { State } from '@ngxs/store';
import { DictionaryState } from './states/dictionary/dictionary.state';
import { UserState } from './states/user/user.state';
import {AuthStateModule} from '../auth/auth.state';

export const DashboardStates = [DictionaryState, UserState, AuthStateModule];

@State({
  name: 'dashboardStateModule',
  children: DashboardStates
})
export class DashboardStateModule {}

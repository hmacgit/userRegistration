import {
  IPersonDe,
  IPersonStateModel
} from './user.state';

export class UserMapping {

  static toDe(resp: IPersonDe): IPersonDe {
    return {
        name: resp.name,
        email: resp.email,
        bio: resp.bio,
        img: resp.img
    };
  }

}
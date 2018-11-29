import {Tenant} from './tenant';
import {User} from './user';

export class Device {
  deviceId: string;
  tenant: Tenant;
  user: User;
}

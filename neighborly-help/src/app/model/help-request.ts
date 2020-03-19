import { ActivityType } from './activity-type';
import { HelpRequestState } from './help-request-state';
import { Address } from './address';
import { Rate } from './rate';
import { Coords } from './coords';

export interface HelpRequest {
  id: string;
  creatorID: string;
  type: ActivityType;
  date: Date;
  state: HelpRequestState;
  details: string;
  creatorPhoneNumber: string;
  localization: Coords;
  epidemicDanger: boolean;
  address: Address;
  executorPhoneNumber?: string;
  executorID?: string;
  executionRate?: Rate;
}

import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Doctor,Patient} from './ehr';
// export namespace ehr.appointments{
   export class appointment extends Asset {
      id: string;
      time: Date;
      realTime: Date;
   }
   export class Resources {
      doctor: Doctor;
   }
   export class addAppointment extends Transaction {
      time: Date;
      realTime: Date;
      patient: Patient;
   }
// }

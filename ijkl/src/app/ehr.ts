import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace ehr{
   export class SampleParticipant extends Participant {
      participantId: string;
      firstName: string;
      lastName: string;
   }
   export class SampleAsset extends Asset {
      assetId: string;
      owner: SampleParticipant;
      value: string;
   }
   export class SampleTransaction extends Transaction {
      asset: SampleAsset;
      newValue: string;
   }
   export class SampleEvent extends Event {
      asset: SampleAsset;
      oldValue: string;
      newValue: string;
   }
   export class PatientInfo extends Asset {
      owner: Patient;
      id: string;
      gender: Gender;
      dayOfBirth: Date;
      phonenumber: number;
      nationality: Nationality;
      Diagnosis: string;
      medicationArray: string[];
      pastVisitsArray: string[];
   }
   export class Doctor extends Participant {
      id: string;
      title: string;
      firstname: string;
      lastname: string;
      department: string;
      salary: number;
   }
   export class Head extends Participant {
      id: string;
      title: string;
      firstname: string;
      lastname: string;
   }
   export class Patient extends Participant {
      id: string;
      title: string;
      firstname: string;
      lastname: string;
      lastvisit: Date;
      balanceDue: number;
   }
   export enum Gender {
      MALE,
      FEMALE,
      OTHER,
   }
   export enum Nationality {
      AMERICAN,
      BRITISH,
      INDIAN,
      PAKISTANI,
      CANADIAN,
      EMIRATI,
      OTHER,
   }
   export class Visits {
      visitDate: Date;
      procedure: string;
      doctor: string;
      medicinePrescribed: string[];
   }
   export class updateMedication extends Transaction {
      asset: PatientInfo;
      newmedication: string;
   }
   export class updatePastVisits extends Transaction {
      asset: PatientInfo;
      newvisit: string;
   }
   export class updateContact extends Transaction {
      asset: PatientInfo;
      newphonenumber: number;
   }
// }

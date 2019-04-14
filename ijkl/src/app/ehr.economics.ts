import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Patient} from './ehr';
// export namespace ehr.economics{
   export class Expenses {
      quantityofSupplies: number;
      staff: number;
      medications: number;
   }
   export class Bill extends Asset {
      billID: string;
      owner: Patient;
      moneyID: string;
      amount: number;
      paid: boolean;
   }
   export class HospitalSupplies extends Asset {
      supplyID: string;
      drugName: string;
      drugAmount: number;
   }
   export class HospitalMoneyPool extends Asset {
      moneyID: string;
      moneyPool: number;
   }
   export enum SupplyState {
      full,
      low,
      empty,
   }
   export class SendBill extends Transaction {
      bill: Bill;
   }
   export class PayBill extends Transaction {
      bill: Bill;
   }
// }

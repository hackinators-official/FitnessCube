/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { appointmentComponent } from './appointment/appointment.component';
import { BillComponent } from './Bill/Bill.component';
import { HospitalSuppliesComponent } from './HospitalSupplies/HospitalSupplies.component';
import { HospitalMoneyPoolComponent } from './HospitalMoneyPool/HospitalMoneyPool.component';
import { SampleAssetComponent } from './SampleAsset/SampleAsset.component';
import { PatientInfoComponent } from './PatientInfo/PatientInfo.component';

import { SampleParticipantComponent } from './SampleParticipant/SampleParticipant.component';
import { DoctorComponent } from './Doctor/Doctor.component';
import { HeadComponent } from './Head/Head.component';
import { PatientComponent } from './Patient/Patient.component';

import { addAppointmentComponent } from './addAppointment/addAppointment.component';
import { SendBillComponent } from './SendBill/SendBill.component';
import { PayBillComponent } from './PayBill/PayBill.component';
import { SampleTransactionComponent } from './SampleTransaction/SampleTransaction.component';
import { updateMedicationComponent } from './updateMedication/updateMedication.component';
import { updatePastVisitsComponent } from './updatePastVisits/updatePastVisits.component';
import { updateContactComponent } from './updateContact/updateContact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'appointment', component: appointmentComponent },
  { path: 'Bill', component: BillComponent },
  { path: 'HospitalSupplies', component: HospitalSuppliesComponent },
  { path: 'HospitalMoneyPool', component: HospitalMoneyPoolComponent },
  { path: 'SampleAsset', component: SampleAssetComponent },
  { path: 'PatientInfo', component: PatientInfoComponent },
  { path: 'SampleParticipant', component: SampleParticipantComponent },
  { path: 'Doctor', component: DoctorComponent },
  { path: 'Head', component: HeadComponent },
  { path: 'Patient', component: PatientComponent },
  { path: 'addAppointment', component: addAppointmentComponent },
  { path: 'SendBill', component: SendBillComponent },
  { path: 'PayBill', component: PayBillComponent },
  { path: 'SampleTransaction', component: SampleTransactionComponent },
  { path: 'updateMedication', component: updateMedicationComponent },
  { path: 'updatePastVisits', component: updatePastVisitsComponent },
  { path: 'updateContact', component: updateContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }

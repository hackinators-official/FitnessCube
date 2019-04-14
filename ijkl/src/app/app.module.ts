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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
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

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    appointmentComponent,
    BillComponent,
    HospitalSuppliesComponent,
    HospitalMoneyPoolComponent,
    SampleAssetComponent,
    PatientInfoComponent,
    SampleParticipantComponent,
    DoctorComponent,
    HeadComponent,
    PatientComponent,
    addAppointmentComponent,
    SendBillComponent,
    PayBillComponent,
    SampleTransactionComponent,
    updateMedicationComponent,
    updatePastVisitsComponent,
    updateContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

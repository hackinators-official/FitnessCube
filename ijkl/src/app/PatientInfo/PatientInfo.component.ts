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

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PatientInfoService } from './PatientInfo.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-patientinfo',
  templateUrl: './PatientInfo.component.html',
  styleUrls: ['./PatientInfo.component.css'],
  providers: [PatientInfoService]
})
export class PatientInfoComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  owner = new FormControl('', Validators.required);
  id = new FormControl('', Validators.required);
  gender = new FormControl('', Validators.required);
  dayOfBirth = new FormControl('', Validators.required);
  phonenumber = new FormControl('', Validators.required);
  nationality = new FormControl('', Validators.required);
  Diagnosis = new FormControl('', Validators.required);
  medicationArray = new FormControl('', Validators.required);
  pastVisitsArray = new FormControl('', Validators.required);

  constructor(public servicePatientInfo: PatientInfoService, fb: FormBuilder) {
    this.myForm = fb.group({
      owner: this.owner,
      id: this.id,
      gender: this.gender,
      dayOfBirth: this.dayOfBirth,
      phonenumber: this.phonenumber,
      nationality: this.nationality,
      Diagnosis: this.Diagnosis,
      medicationArray: this.medicationArray,
      pastVisitsArray: this.pastVisitsArray
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.servicePatientInfo.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'ehr.PatientInfo',
      'owner': this.owner.value,
      'id': this.id.value,
      'gender': this.gender.value,
      'dayOfBirth': this.dayOfBirth.value,
      'phonenumber': this.phonenumber.value,
      'nationality': this.nationality.value,
      'Diagnosis': this.Diagnosis.value,
      'medicationArray': this.medicationArray.value,
      'pastVisitsArray': this.pastVisitsArray.value
    };

    this.myForm.setValue({
      'owner': null,
      'id': null,
      'gender': null,
      'dayOfBirth': null,
      'phonenumber': null,
      'nationality': null,
      'Diagnosis': null,
      'medicationArray': null,
      'pastVisitsArray': null
    });

    return this.servicePatientInfo.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'owner': null,
        'id': null,
        'gender': null,
        'dayOfBirth': null,
        'phonenumber': null,
        'nationality': null,
        'Diagnosis': null,
        'medicationArray': null,
        'pastVisitsArray': null
      });
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
          this.errorMessage = error;
      }
    });
  }


  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'ehr.PatientInfo',
      'owner': this.owner.value,
      'gender': this.gender.value,
      'dayOfBirth': this.dayOfBirth.value,
      'phonenumber': this.phonenumber.value,
      'nationality': this.nationality.value,
      'Diagnosis': this.Diagnosis.value,
      'medicationArray': this.medicationArray.value,
      'pastVisitsArray': this.pastVisitsArray.value
    };

    return this.servicePatientInfo.updateAsset(form.get('id').value, this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }


  deleteAsset(): Promise<any> {

    return this.servicePatientInfo.deleteAsset(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.servicePatientInfo.getAsset(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'owner': null,
        'id': null,
        'gender': null,
        'dayOfBirth': null,
        'phonenumber': null,
        'nationality': null,
        'Diagnosis': null,
        'medicationArray': null,
        'pastVisitsArray': null
      };

      if (result.owner) {
        formObject.owner = result.owner;
      } else {
        formObject.owner = null;
      }

      if (result.id) {
        formObject.id = result.id;
      } else {
        formObject.id = null;
      }

      if (result.gender) {
        formObject.gender = result.gender;
      } else {
        formObject.gender = null;
      }

      if (result.dayOfBirth) {
        formObject.dayOfBirth = result.dayOfBirth;
      } else {
        formObject.dayOfBirth = null;
      }

      if (result.phonenumber) {
        formObject.phonenumber = result.phonenumber;
      } else {
        formObject.phonenumber = null;
      }

      if (result.nationality) {
        formObject.nationality = result.nationality;
      } else {
        formObject.nationality = null;
      }

      if (result.Diagnosis) {
        formObject.Diagnosis = result.Diagnosis;
      } else {
        formObject.Diagnosis = null;
      }

      if (result.medicationArray) {
        formObject.medicationArray = result.medicationArray;
      } else {
        formObject.medicationArray = null;
      }

      if (result.pastVisitsArray) {
        formObject.pastVisitsArray = result.pastVisitsArray;
      } else {
        formObject.pastVisitsArray = null;
      }

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  resetForm(): void {
    this.myForm.setValue({
      'owner': null,
      'id': null,
      'gender': null,
      'dayOfBirth': null,
      'phonenumber': null,
      'nationality': null,
      'Diagnosis': null,
      'medicationArray': null,
      'pastVisitsArray': null
      });
  }

}

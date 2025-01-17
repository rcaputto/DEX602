import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import FIELD_Course_Delivery__City from '@salesforce/schema/Course_Delivery__c.City__c';
import FIELD_Course_Delivery__Country from '@salesforce/schema/Course_Delivery__c.Country__c';
import Utils from 'c/utils';

const fields = [FIELD_Course_Delivery__City, FIELD_Course_Delivery__Country];


export default class DeliveryDetailMap extends LightningElement {
	@api recordId;
	name;
	mapMarkers = [];
	error;
	
	@wire(getRecord, { recordId: '$recordId', fields })
	wiredMap({ error, data }) {
		if (error) {
			this.error=error;
		} else if (data) {
			// Get Map data
			const City = Utils.getDisplayValue(data, FIELD_Course_Delivery__City);
			const Country = Utils.getDisplayValue(data, FIELD_Course_Delivery__Country);
			// Transform location data into map markers
			this.mapMarkers = [{
				location: { City, Country },
				description: `Coords: ${City}, ${Country}`
			}];
		}
	}
}
import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import SELECTED_STUDENT_CHANNEL from '@salesforce/messageChannel/SelectedStudentChannel__c';
import getStudents from '@salesforce/apex/StudentBrowser.getStudents';

export default class StudentBrowser extends LightningElement {
	selectedDeliveryId = '';
	selectedInstructorId = '';

	@wire(getStudents, { instructorId: '$selectedInstructorId', courseDeliveryId: '$selectedDeliveryId' })
	students;

	@wire(MessageContext) messageContext;

	handleStudentSelected(event){
		const studentId = event.detail.studentId;
		this.updateSelectedStudent(studentId);
		}

	updateSelectedStudent(studentId){
			publish(this.messageContext, SELECTED_STUDENT_CHANNEL, {
			studentId: studentId
			});
			}

	handleFilterChange(event){
		this.selectedDeliveryId = event.detail.deliveryId;
		this.selectedInstructorId = event.detail.instructorId;
	}

}
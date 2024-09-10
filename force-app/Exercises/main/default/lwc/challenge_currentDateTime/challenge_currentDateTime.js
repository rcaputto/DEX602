import { LightningElement } from 'lwc';

export default class Challenge_currentDateTime extends LightningElement {

    currentDate = new Date()

    handleCurrentDate(){
        this.currentDate = new Date();
    }

    connectedCallback(){
        setInterval(()=>{
            this.currentDate = new Date()
        }, 1000)
    }
}
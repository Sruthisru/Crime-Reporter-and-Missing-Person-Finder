import { Injectable } from '@angular/core'

interface complaint {
    subject:string,
    location: string,
    description: string
}


@Injectable()
export class ComplaintService {
        private  complaint: complaint
    
        constructor() {

        }
        setComplaint(complaint: complaint) {
            this.complaint = complaint 
        }
       // getComplaintUID() {
        //    return this.complaint.complaintuid
       // }
}
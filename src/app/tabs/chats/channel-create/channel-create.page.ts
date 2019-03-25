/*import { Component, OnInit } from '@angular/core';
ionic
@Component({
  selector: 'app-channel-create',
  templateUrl: './channel-create.page.html',
  styleUrls: ['./channel-create.page.scss'],
})
export class ChannelCreatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { UserService } from '../../../user.service';

@Component({
  selector: 'channel-create',
  templateUrl: './channel-create.page.html',
  styleUrls: ['./channel-create.page.scss'],
})
export class ChannelCreatePage implements OnInit {
  channelForm: FormGroup;

  contacts: any;

  constructor(private modalCtrl: ModalController, private userService: UserService) { }

  ngOnInit() {
    this.channelForm = new FormGroup({
      name: new FormControl('', Validators.required),
      purpose: new FormControl(''),
      members: new FormControl('', Validators.required)
    });

    this.contacts = this.userService.getUID();
  }

  close(param?) {
    this.modalCtrl.dismiss(param);
  }

  onSave() {
    if (this.channelForm.valid) {
      this.close(this.channelForm.getRawValue());
    }
  }

}


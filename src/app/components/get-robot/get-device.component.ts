import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../../services/device/device.service';
import {Device} from '../../models/device';

@Component({
  selector: 'app-get-device',
  templateUrl: './get-device.component.html',
  styleUrls: ['./get-device.component.scss']
})
export class GetDeviceComponent implements OnInit {
  device: Device;

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
  }

  getRobot() {
    this.deviceService.getFreeDevice().subscribe((device: Device) => {
      console.log(device);
      this.device = device;
    }, (err) => {
      console.log(err);
    });
  }
}

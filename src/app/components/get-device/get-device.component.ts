import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../../services/device/device.service';
import {Device} from '../../models/device';
import {Router} from '@angular/router';

@Component({
  selector: 'app-get-device',
  templateUrl: './get-device.component.html',
  styleUrls: ['./get-device.component.scss']
})
export class GetDeviceComponent implements OnInit {
  device: Device;
  isFreeDeviceAllocated = false;
  showSpinner = false;

  constructor(private router: Router, private deviceService: DeviceService) {
  }

  ngOnInit() {
  }

  getFreeDevice() {
    this.showSpinner = true;
    this.deviceService.getFreeDevice().subscribe((device: Device) => {
      console.log(device);
      this.isFreeDeviceAllocated = true;
      this.device = device;
      this.showSpinner = false;
    }, (err) => {
      this.showSpinner = false;
      console.log(err);
    });
  }

  findProduct() {
    this.router.navigateByUrl('/find-product');
  }

  releaseDevice() {
    this.showSpinner = true;
    this.deviceService.releaseDevice().subscribe(() => {
      this.isFreeDeviceAllocated = false;
      this.device = null;
      this.showSpinner = false;
    }, (err) => {
      this.showSpinner = false;
      console.log(err);
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.scss']
})
export class FindProductComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  gotoHome() {
    this.router.navigateByUrl('/app-home');
  }
}

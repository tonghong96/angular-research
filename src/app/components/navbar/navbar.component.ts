import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AppVersionComponent } from "../modals/app-version/app-version.component";
import { SharedService } from "../../services/shared.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: NgbModal, public shareService: SharedService, private router: Router) { }

  ngOnInit(): void {
  }

  clickedLogo(): void {
    this.modalService.open(AppVersionComponent, { centered: true, size: 'sm' });
  }

  clickedHelp(): void {
    this.shareService.helpInfo();
  }

  clickedReload(): void {
    this.shareService.syncData();
  }

  redirectChangePass(): void {
    this.router.navigate(['/change-password']);
  }

}

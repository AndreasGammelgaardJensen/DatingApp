import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';
import { take } from 'rxjs/operators';
import { MembersService } from 'src/app/_services/members.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})


export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm : NgForm;
  member : Member
  user : User;
  @HostListener('window:beforeunload',['$event']) unloadNotification($event: any) {
    if(this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(private accountService : AccountService, private memberService : MembersService, private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.loadMember();

  }

  updateMember() {
    this.memberService.updateMember(this.member).subscribe(()=>{
      this.toastr.success('Profile updated successfully');
      this.editForm.reset(this.member);

    });
    //this.loadMember();
  }


  loadMember() {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);

    this.memberService.getMember(this.user.username).subscribe(member => this.member = member);
  }

}

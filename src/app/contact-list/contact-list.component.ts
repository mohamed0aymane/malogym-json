import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Contact } from '../models/contact.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../services/api.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent implements OnInit{
  public dataSource!: MatTableDataSource<Contact>;
  public contact!: Contact[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  displayedColumns: string[]= [
    'id',
    'name',
    'email',
    'message',
    'action'
   ];

   constructor(private api:ApiService,
               private toast:NgToastService,
               private confirm: NgConfirmService){
  
   }
  ngOnInit(): void {
    this.getContact();
  }

  getContact(){
    this.api.getContactList()
    .subscribe(res=>{
      this.contact = res;
      this.dataSource = new MatTableDataSource(this.contact);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  applyFilter(event: Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter= filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  
  delete(id:number){
    this.confirm.showConfirm("Vous voulez vraimant supprimer le contact?",
    ()=>{
      this.api.deleteContact(id)
      .subscribe(res=>{
        this.toast.success({detail:"Success",summary:"Contact Supprime",duration:3000});
        this.getContact();
      })
    },
    ()=>{

    })
    this.api.deleteContact(id)
    .subscribe(res=>{

    })
  }
  
  

}

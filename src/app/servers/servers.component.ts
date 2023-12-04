import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  alowNewServer = false;
  serverCreationStatus = "no server was created";
  serverCreated = false;
  serverName = 'Test';

  constructor(  
  ){
    setTimeout(() => {
      this.alowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
    
  }

  onCreatedServer(){
    this.serverCreated = true;
    this.serverCreationStatus = "server created " + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName =(<HTMLInputElement>event.target).value;
  }

}

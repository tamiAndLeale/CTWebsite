import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { correntUserService } from 'src/app/correntUser.service';
import { filesService } from 'src/app/files.service';
import { OutputDocument } from 'src/app/models/outputDocument.model';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { fileUploadService } from 'src/app/file-upload.service';


@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {


  portfolioId!:number;
  folderId!:number;
  files!:OutputDocument[];
   // Variable to store shortLink from api response
   shortLink: string = "";
   loading: boolean = false; // Flag variable
    // file!: File; // Variable to store file
    file: any = null;
  constructor(private filesService:filesService , private correntUserService :correntUserService,private route:ActivatedRoute,private router:Router,private fileUploadService: fileUploadService) 
  {   
    this.route.params.subscribe((params:Params) => {
    this.portfolioId = params['portfolioId'];
    this.folderId = params['folderId'];
    });}

  ngOnInit(): void {
    this.filesService.GetOutputDocumentOfPortfolio( this.portfolioId ,   this.folderId).subscribe(data=>this.files=data)
    console.log(this.files);
  }
  columnsToDisplay: string[] = ['show', 'upload','date' ,'name'];
  dataSorce=this.files;
// On file Select
onChange(event:any) {
  this.file = event.target.files[0];
}

// OnClick of button Upload
onUpload() {
  this.loading = !this.loading;
  console.log(this.file);
  this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {

              // Short link via api response
              this.shortLink = event.link;

              this.loading = false; // Flag variable 
          }
      }
  );
}

}

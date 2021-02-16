import { Component, OnInit } from '@angular/core';
import{NotificationsService } from 'angular2-notifications';
import {User} from "../../models/users";
import {UserService} from "../../services/user.service";
import {global} from "../../services/global"
import { CookieService } from 'ngx-cookie-service';
declare var $:any;
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  providers:[UserService]
})
export class UpdateUserComponent implements OnInit {
  public paises:any[] = [];
  public paises_filter:any[] = []; 
  public user: User;
  public loadingUpdateUser;
  public messageUpdateUser;
  public statusUpdateUser;
  public loadingUpdateMt;
  public messageUpdateMt;
  public statusUpdateMt;
  public loadingUpdateData;
  public messageUpdateData;
  public statusUpdateData;
  public avatar;
  public url: string;
  constructor(
    private _serviceNotificacion: NotificationsService,
    private _userService: UserService,
    private cookieService: CookieService,
  ) {
    this.user = new User("","",null,"","","","","","","","","","");
    this.url = global.getImages
   }

  ngOnInit(): void {
    window.addEventListener("load", function(){
      var forms = document.getElementsByClassName("needs-validation");
      var validation = Array.prototype.filter.call(forms, function(form){
        form.addEventListener("submit", function(event){
          if(form.checkValidity()== false){
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
  
          event.preventDefault();
        },false)
      })
    }, false)   
    if(this.cookieService.check("token") && this.cookieService.check("connect.sid")){ 
      this._userService.getUser().subscribe(
        response => {
          this.user.name = response.user.name;
          this.user.lastName = response.user.lastName;
          this.user.phone = response.user.phone;
          this.user.country = response.user.country;
          this.user.clientId = response.user.clientId;
          this.user.email = response.user.email;
          this.user.avatar = response.user.avatar;
          
        },
        error=> {
        
        }
      )
      }
    this.paises.push({
      "pais" : "México",
      "imagen" : "../assets/images/paises/Mexico.svg.png" 
    },
    {
      "pais" : "Colombia",
      "imagen" : "../assets/images/paises/Colombia.svg.png" 
    },
    {
      "pais" : "España",
      "imagen" : "../assets/images/paises/Spain.svg.png" 
    },
    {
      "pais" : "Argentina",
      "imagen" : "../assets/images/paises/Argentina.svg.png" 
    },
    {
      "pais" : "Perú",
      "imagen" : "../assets/images/paises/Peru.svg.png" 
    },
    {
      "pais" : "Venezuela",
      "imagen" : "../assets/images/paises/Venezuela.svg.png" 
    },
    {
      "pais" : "Chile",
      "imagen" : "../assets/images/paises/Chile.svg.png" 
    },
    {
      "pais" : "Guatemala",
      "imagen" : "../assets/images/paises/Guatemala.svg.png" 
    }
    ,
    {
      "pais" : "Ecuador",
      "imagen" : "../assets/images/paises/Ecuador.svg.png" 
    }
    ,
    {
      "pais" : "Cuba",
      "imagen" : "../assets/images/paises/Cuba.svg.png" 
    }
    ,
    {
      "pais" : "Bolivia",
      "imagen" : "../assets/images/paises/Bolivia.svg.png" 
    },
    {
      "pais" : "República Dominicana",
      "imagen" : "../assets/images/paises/Dominican_Republic.svg.png" 
    },
    {
      "pais" : "Honduras",
      "imagen" : "../assets/images/paises/Honduras.svg.png" 
    },
    {
      "pais" : "El Salvador",
      "imagen" : "../assets/images/paises/Salvador.svg.png" 
    },
    {
      "pais" : "Paraguay",
      "imagen" : "../assets/images/paises/Paraguay.svg.png" 
    },
    {
      "pais" : "Nicaragua",
      "imagen" : "../assets/images/paises/Nicaragua.svg.png" 
    },
    {
      "pais" : "Costa Rica",
      "imagen" : "../assets/images/paises/Costa_Rica.svg.png" 
    },
    {
      "pais" : "Panamá",
      "imagen" : "../assets/images/paises/Panama.svg.png" 
    },
    {
      "pais" : "Puerto Rico",
      "imagen" : "../assets/images/paises/Puerto_Rico.svg.png" 
    },
    {
      "pais" : "Uruguay",
      "imagen" : "../assets/images/paises/Uruguay.svg.png" 
    },
    {
      "pais" : "Guinea Ecuatorial",
      "imagen" : "../assets/images/paises/Equatorial_Guinea.svg.png" 
    },
    {
      "pais" : "Belice",
      "imagen" : "../assets/images/paises/Belize.svg.png" 
    },
    {
      "pais" : "Sahara Occidental",
      "imagen" : "../assets/images/paises/Democratic_Republic.svg.png" 
    }
    )

    this.paises.forEach(element => {
      this.paises_filter.push(
        {
          "pais" : element.pais,
          "imagen" : element.imagen
        }
      ) 
    })  
  }
  onBlurPais(){
    
    $(document).on("click",function(e) {
      var container = $("#list_paises, #pais");
      if(container.hasClass("d-block")){
        if(!container.is(e.target) && container.has(e.target).length == 0 ){
          container.removeClass("d-block show");
        }
      }else{

      }
    })
  }
  onFocusPais(){
    $("#list_paises").addClass("d-block show");
    this.paises_filter = []; 
    this.paises.forEach(element => {
      
      var hallado = element.pais.match(this.user.country);
      if(hallado != null){
        this.paises_filter.push(
          {
            "pais" : element.pais,
            "imagen" : element.imagen
          }
        ) 
      }
    });
  }

  onChangePais(){
    $("#list_paises").addClass("d-block show");
    this.paises_filter = []; 
    this.paises.forEach(element => {
      
      var hallado = element.pais.match(this.user.country);
      if(hallado != null){
        this.paises_filter.push(
          {
            "pais" : element.pais,
            "imagen" : element.imagen
          }
        ) 
      }
    });
  }
  onClickPaisSpan(value){
    $("#list_paises").removeClass("d-block show");
    this.user.country = value;

  }
  notifacionSuccess(message){
   this._serviceNotificacion.success("Actualizar Datos" , message, {
     position : ["bottom", "right"],
     timeOut : 2000,
   });
  }
  notifacionError(message){
    this._serviceNotificacion.error("Fallo" , message, {
      position : ["bottom", "right"],
      timeOut : 2000,
    });
  }
  onSubmitPersonal(form){
    this.loadingUpdateUser = true;
    this._userService.updateUser(this.user).subscribe(
      response => {
        this.loadingUpdateUser = false;
        this.statusUpdateUser = true;
        this.messageUpdateUser = "Datos Actualizados";
        this.notifacionSuccess("Datos Actualizados");
      },
      error => {
        this.loadingUpdateUser = false;
        this.statusUpdateUser = false;
        this.messageUpdateUser = error.error.message;
        this.notifacionError(this.messageUpdateUser);
      }
    )
  }
  onSubmitMT(form){
    this.loadingUpdateMt = true;
    this._userService.updateMt(this.user).subscribe(
      response => {
        this.loadingUpdateMt = false;
        this.statusUpdateMt = true;
        this.messageUpdateMt = "Datos Actualizados";
        this.notifacionSuccess("Datos Actualizados");
        this.user.newPassMT5 = "";
        this.user.passMT5 = "";
      },
      error => {
        this.loadingUpdateMt = false
        this.statusUpdateMt = false;;
        this.messageUpdateMt = error.error.message;
        this.notifacionError(this.messageUpdateMt);
      }
    )
  }

  onSubmitConfig(form){
    this.loadingUpdateData = true;
    this._userService.updateUserData(this.user).subscribe(
      response => {
        this.loadingUpdateData = false;
        this.statusUpdateData = true;
        this.messageUpdateData = "Datos Actualizados";
        this.notifacionSuccess("Datos Actualizados");
        this.user.newPass = "";
        this.user.oldPass="";
      },
      error => {
        this.loadingUpdateData = false
        this.statusUpdateData = false;
        this.messageUpdateData = error.error.message;
        this.notifacionError(this.messageUpdateData);
      }
    )    
  }

  onFileChange(event, form){
    if(event.target.files && event.target.files.length > 0){
      this.user.avatar = event.target.files[0];
      if(this.user.avatar.type.includes("image")){
        this._userService.updateImagen($("#profile-image-form")[0]).subscribe(
          response =>{
            this.notifacionSuccess(response.message);
            this.user.avatar= response.img;
            
          },
          error => {
            this.notifacionError(error.error.message);
          }
        )
      }else{
        this.notifacionError("Tipo de archivo no permitido");
      }
    }
  }

  deleteImage(){
    this._userService.deleteImagen(this.user).subscribe(
      response => {
        this.user.avatar = "default.jpg"
        this.notifacionSuccess(response.message);
      },
      error => {
        this.notifacionError(error.error.message)
      }
    )
  }

}

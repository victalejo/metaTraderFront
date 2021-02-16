import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/users";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[UserService]
})
export class HomeComponent implements OnInit {
  public paises:any[] = [];
  public paises_filter:any[] = []; 
  public user: User;
  public userLogin: User;
  public loadingRegister;
  public loadingLogin;
  public mesageLogin= "";
  public active_input_pais = false;
  public statusRegister = true;
  public statusLogin = true;
  public mesageRegister = "";
  public signing = false;
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route:ActivatedRoute,
    private cookieService: CookieService 
	){

		this.user = new User("","",null,"","","","","","","default.jpg","","","");
    this.userLogin = new User("","",null,"","","","","","","","","","");
	}

  ngOnInit(): void {
    if(this.cookieService.check("token") && this.cookieService.check("connect.sid")){
      this.signing = true;
    }else{
      this.signing = false;
    }
    (function () {

      var nav = $('nav');
      var navHeight = nav.outerHeight();
      
      $('.navbar-toggler').on('click', function() {
        if( ! $('#mainNav').hasClass('navbar-reduce')) {
          $('#mainNav').addClass('navbar-reduce');
        }
      })
    
      // Preloader
      $(window).on('load', function () {
        if ($('#preloader').length) {
          $('#preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
          });
        }
      });
    
      // Back to top button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
        } else {
          $('.back-to-top').fadeOut('slow');
        }
      });
      $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
        return false;
      });
    
      /*--/ Star ScrollTop /--*/
      $('.scrolltop-mf').on("click", function () {
        $('html, body').animate({
          scrollTop: 0
        }, 1000);
      });
    
      /*--/ Star Counter /--*/
      $('.counter').counterUp({
        delay: 15,
        time: 2000
      });
    
      /*--/ Star Scrolling nav /--*/
      $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - navHeight + 5)
            });
            return false;
          }
        }
      });
    
      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll').on("click", function () {
        $('.navbar-collapse').collapse('hide');
      });
    
      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#mainNav',
        offset: navHeight
      });
      /*--/ End Scrolling nav /--*/
    
      /*--/ Navbar Menu Reduce /--*/
      $(window).trigger('scroll');
      $(window).on('scroll', function () {
        var pixels = 50; 
        var top = 1200;
        if ($(window).scrollTop() > pixels) {
          $('.navbar-expand-md').addClass('navbar-reduce');
          $('.navbar-expand-md').removeClass('navbar-trans');
        } else {
          $('.navbar-expand-md').addClass('navbar-trans');
          $('.navbar-expand-md').removeClass('navbar-reduce');
        }
        if ($(window).scrollTop() > top) {
          $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
        } else {
          $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
        }
      });
         
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
    })();
    
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
  onSubmitRegister(form){
    this.loadingRegister = true;
      this._userService.userRegister(this.user).subscribe(
        response => {
          this.loadingRegister = false;
          this.statusRegister = true;
          this.mesageRegister = "Usuario Registrado";
          this._userService.setToken(response.token);
          this._router.navigate(["dashboard"]);
          $("body").removeClass("modal-open");
          $(".modal-backdrop").removeClass("show")
          $(".modal-backdrop").remove();
          this.signing = true;
          
        },
        error => {
          this.loadingRegister = false;
          this.statusRegister = false;
          this.mesageRegister = error.error.message;
        }
      ); 
  }
  onSubmitLogin(form){
    this.loadingLogin = true;
      this._userService.loginUser(this.userLogin).subscribe(
        response => {
          this.loadingLogin = false;
          this.statusLogin = false;
          this._userService.setToken(response.token);
          this._router.navigate(["payments"]);
          $("body").removeClass("modal-open");
          $(".modal-backdrop").removeClass("show")
          $(".modal-backdrop").remove();
          this.signing = true;
        },
        error => {
          this.loadingLogin = false;
          this.statusLogin = false;
          this.mesageLogin = error.error.message;
        }
      ); 
  }
  onClickPaisSpan(value){
    $("#list_paises").removeClass("d-block show");
    this.user.country = value;

  }
}

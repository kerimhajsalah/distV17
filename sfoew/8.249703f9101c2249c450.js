(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Ns/k":function(c,t,e){"use strict";e.r(t),e.d(t,"HomeModule",(function(){return h}));var a=e("ofXK"),i=e("tyNb"),n=e("fXoL"),o=e("tk/3"),r=e("AytR");let s=(()=>{class c{constructor(c){this.http=c,this.URL=r.a.urlBackend,this.token=localStorage.getItem("token_Pro")}getVideo(){const c=localStorage.getItem("token_Pro"),t=(new o.d).set("authorization","Bearer "+c);return this.http.get(this.URL+"urlvideo",{headers:t})}}return c.\u0275fac=function(t){return new(t||c)(n.fc(o.b))},c.\u0275prov=n.Rb({token:c,factory:c.\u0275fac,providedIn:"root"}),c})();var b=e("wZkO"),l=e("sYmb");const d=function(c){return{active:c}};function p(c,t){if(1&c&&(n.bc(0,"div",25),n.Wb(1,"iframe",26),n.bc(2,"div",27),n.bc(3,"h5"),n.Oc(4),n.ac(),n.bc(5,"p"),n.Oc(6),n.ac(),n.ac(),n.bc(7,"button",28),n.Wb(8,"span",29),n.bc(9,"span",30),n.Oc(10,"Pr\xe9c\xe9dent"),n.ac(),n.ac(),n.bc(11,"button",31),n.Wb(12,"span",32),n.bc(13,"span",30),n.Oc(14,"Suivant"),n.ac(),n.ac(),n.ac()),2&c){const c=t.$implicit,e=t.index;n.tc("id",e),n.sc("ngClass",n.wc(4,d,0==e)),n.Jb(4),n.Pc(c.title),n.Jb(2),n.Pc(c.desc)}}function u(c,t){if(1&c&&(n.bc(0,"div",25),n.Wb(1,"iframe",33),n.bc(2,"div",27),n.bc(3,"h5"),n.Oc(4),n.ac(),n.bc(5,"p"),n.Oc(6),n.ac(),n.ac(),n.bc(7,"button",28),n.Wb(8,"span",29),n.bc(9,"span",30),n.Oc(10,"Previous"),n.ac(),n.ac(),n.bc(11,"button",31),n.Wb(12,"span",32),n.bc(13,"span",30),n.Oc(14,"Next"),n.ac(),n.ac(),n.ac()),2&c){const c=t.$implicit,e=t.index;n.tc("id",e),n.sc("ngClass",n.wc(4,d,0==e)),n.Jb(4),n.Pc(c.title),n.Jb(2),n.Pc(c.desc)}}const m=[{path:"",component:(()=>{class c{constructor(c){this.videoService=c}ngOnInit(){this.videoService.getVideo().subscribe(c=>{this.urlVideo=c,this.dataUrlD=this.urlVideo.dataUrlD,this.dataUrlP=this.urlVideo.dataUrlP})}}return c.\u0275fac=function(t){return new(t||c)(n.Vb(s))},c.\u0275cmp=n.Pb({type:c,selectors:[["app-home"]],decls:58,vars:17,consts:[["id","hero",1,"d-flex","align-items-center"],[1,"container"],["href","#about",1,"btn-get-started","scrollto"],["id","counts",1,"counts"],[1,"row"],[1,"itemss"],["dynamicHeight","","mat-align-tabs","center"],[3,"label"],[1,"example-small-box","mat-elevation-z4"],["id","carouselExampleCaptions","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-inner"],["class","carousel-item active",3,"id","ngClass",4,"ngFor","ngForOf"],["label","Patient"],["id","departments",1,"departments"],[1,"contact-info","d-flex","align-items-center"],[1,"section-title"],["href","#",1,"instagram"],[1,"bi","bi-envelope-fill"],[1,"bi","bi-phone-fill",2,"padding-left","12px"],[1,"bi","bi-pin-map-fill",2,"padding-left","12px"],[1,"bi","bi-facebook",2,"padding-left","12px"],[1,"bi","bi-instagram",2,"padding-left","12px"],[1,"bi","bi-linkedin",2,"padding-left","12px"],["src","../../../assets/img/qrcode.JPG"],["src","../../../assets/img/rgbd.JPG"],[1,"carousel-item","active",3,"id","ngClass"],["width","100%","height","500px","src","https://www.youtube.com/embed/k3p3BdoNvoY","frameborder","0","allowfullscreen",""],[1,"carousel-caption","d-none","d-md-block"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],["width","100%","height","500px","src","https://www.youtube.com/embed/lAIkv8Kd_dc","frameborder","0","allowfullscreen",""]],template:function(c,t){1&c&&(n.bc(0,"section",0),n.bc(1,"div",1),n.bc(2,"h1"),n.Oc(3),n.nc(4,"translate"),n.ac(),n.bc(5,"h2"),n.Oc(6),n.nc(7,"translate"),n.ac(),n.bc(8,"a",2),n.Oc(9),n.nc(10,"translate"),n.ac(),n.ac(),n.ac(),n.bc(11,"section",3),n.bc(12,"div",4),n.bc(13,"div",1),n.bc(14,"div",5),n.bc(15,"mat-tab-group",6),n.Oc(16,"7 "),n.bc(17,"mat-tab",7),n.nc(18,"translate"),n.bc(19,"div",8),n.bc(20,"div",1),n.bc(21,"div",4),n.bc(22,"div",9),n.bc(23,"div",10),n.Mc(24,p,15,6,"div",11),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.bc(25,"mat-tab",12),n.bc(26,"div",8),n.bc(27,"div",1),n.bc(28,"div",4),n.bc(29,"div",9),n.bc(30,"div",10),n.Mc(31,u,15,6,"div",11),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.bc(32,"section",13),n.bc(33,"div",1),n.Wb(34,"div",14),n.bc(35,"div",15),n.bc(36,"h2"),n.Oc(37),n.nc(38,"translate"),n.ac(),n.bc(39,"p"),n.bc(40,"a",16),n.Wb(41,"i",17),n.ac(),n.Oc(42," : contact@stimed.fr "),n.bc(43,"a",16),n.Wb(44,"i",18),n.ac(),n.Oc(45," : +33(0)380801954 "),n.bc(46,"a",16),n.Wb(47,"i",19),n.ac(),n.Oc(48," : 2, route d\xe9partementale 974, 21190 Meursault, France "),n.bc(49,"a",16),n.Wb(50,"i",20),n.ac(),n.bc(51,"a",16),n.Wb(52,"i",21),n.ac(),n.bc(53,"a",16),n.Wb(54,"i",22),n.ac(),n.Wb(55,"br"),n.Wb(56,"img",23),n.Wb(57,"img",24),n.ac(),n.ac(),n.ac(),n.ac()),2&c&&(n.Jb(3),n.Pc(n.oc(4,7,"HOMES.PHRASE")),n.Jb(3),n.Pc(n.oc(7,9,"P.PH1")),n.Jb(3),n.Pc(n.oc(10,11,"HOMES.INFO")),n.Jb(8),n.tc("label",n.oc(18,13,"PROFILE.PROF")),n.Jb(7),n.sc("ngForOf",t.dataUrlD),n.Jb(7),n.sc("ngForOf",t.dataUrlP),n.Jb(6),n.Pc(n.oc(38,15,"HOMES.CONT")))},directives:[b.b,b.a,a.l,a.k],pipes:[l.c],styles:[".example-large-box[_ngcontent-%COMP%], .example-small-box[_ngcontent-%COMP%], .example-small-box2[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:16px;border-radius:8px;justify-content:center!important;margin:16px 16px 16px 100px}.example-small-box[_ngcontent-%COMP%]{height:550px;width:900px}.departments[_ngcontent-%COMP%]{width:100%}.example-large-box[_ngcontent-%COMP%]{height:550px;width:900px}"]}),c})()}];let g=(()=>{class c{}return c.\u0275mod=n.Tb({type:c}),c.\u0275inj=n.Sb({factory:function(t){return new(t||c)},imports:[[i.h.forChild(m)],i.h]}),c})(),h=(()=>{class c{}return c.\u0275mod=n.Tb({type:c}),c.\u0275inj=n.Sb({factory:function(t){return new(t||c)},imports:[[a.c,g,b.c,l.b]]}),c})()}}]);
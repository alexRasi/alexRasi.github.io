(self.webpackChunksmart_recruiters_postings_list_app=self.webpackChunksmart_recruiters_postings_list_app||[]).push([[421],{6421:(t,i,o)=>{"use strict";o.r(i),o.d(i,{PostingDetailsPageModule:()=>u});var n=o(1116),e=o(8147),a=o(8619),s=o(8680),p=o(4818),r=o(2181);function c(t,i){if(1&t){const t=a.EpF();a.TgZ(0,"div",1),a.TgZ(1,"div",2,3),a.TgZ(3,"div",4),a.NdJ("click",function(){return a.CHM(t),a.oxw().navigateBack()}),a._uU(4," \u2039 Back to the list "),a.qZA(),a.TgZ(5,"div",5),a.TgZ(6,"div",6),a._uU(7),a.qZA(),a.TgZ(8,"div",7),a.TgZ(9,"div",8),a._uU(10),a.qZA(),a.TgZ(11,"div",9),a._uU(12),a.qZA(),a.qZA(),a.TgZ(13,"div",7),a.TgZ(14,"div",10),a.NdJ("click",function(){a.CHM(t);const i=a.oxw();return i.openNewTabToJobApplication(i.postingDetails.applyUrl)}),a._uU(15," Apply "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(16,"div",11),a.TgZ(17,"div",12),a.TgZ(18,"div",13),a._uU(19,"About the job"),a.qZA(),a._UZ(20,"div",14),a.qZA(),a.TgZ(21,"div",15),a.TgZ(22,"div",16),a._uU(23,"Seniority Level"),a.qZA(),a._uU(24),a.TgZ(25,"div",17),a._uU(26,"Industry"),a.qZA(),a._uU(27),a.TgZ(28,"div",18),a._uU(29,"Employment Type"),a.qZA(),a._uU(30),a.qZA(),a.qZA(),a.TgZ(31,"div",5),a.TgZ(32,"div",13),a._uU(33,"Qualifications"),a.qZA(),a._UZ(34,"div",19),a.qZA(),a.TgZ(35,"div",5),a.TgZ(36,"div",13),a._uU(37,"About the company"),a.qZA(),a._UZ(38,"div",20),a.qZA(),a.TgZ(39,"div",21),a.TgZ(40,"div",13),a._uU(41,"Additional Information"),a.qZA(),a._UZ(42,"div",22),a.qZA(),a.qZA(),a.TgZ(43,"div",23),a.NdJ("click",function(){return a.CHM(t),a.oxw().uiUtilitiesService.scrollOnTop()}),a._UZ(44,"i",24),a.qZA(),a.qZA()}if(2&t){const t=a.oxw();a.xp6(7),a.Oqu(t.postingDetails.name),a.xp6(3),a.AsE(" ",t.postingDetails.location.city,", ",t.postingDetails.location.country.toUpperCase()," "),a.xp6(2),a.hij(" ",t.uiUtilitiesService.calculateDaysAgo(t.postingDetails.releasedDate),""),a.xp6(8),a.Q6J("innerHtml",t.postingDetails.jobAd.sections.jobDescription.text,a.oJD),a.xp6(4),a.hij(" ",t.postingDetails.experienceLevel.label," "),a.xp6(3),a.hij(" ",t.postingDetails.industry.label," "),a.xp6(3),a.hij(" ",t.postingDetails.typeOfEmployment.label," "),a.xp6(4),a.Q6J("innerHtml",t.postingDetails.jobAd.sections.qualifications.text,a.oJD),a.xp6(4),a.Q6J("innerHtml",t.postingDetails.jobAd.sections.companyDescription.text,a.oJD),a.xp6(4),a.Q6J("innerHtml",t.postingDetails.jobAd.sections.additionalInformation.text,a.oJD)}}const l=[{path:"",component:(()=>{class t{constructor(t,i,o,n,e,a){this.location=t,this.postingDetailsFetchingService=i,this.activatedRoute=o,this.loadingSpinnerService=n,this.uiUtilitiesService=e,this.router=a}ngOnInit(){this.loadingSpinnerService.showSpinner(),this.uiUtilitiesService.scrollOnTop(),this.initializePostingIdFromParams(),this.postingDetailsFetchingService.fetchPostingDetails(this.postingId).subscribe(t=>{this.postingDetails=t,this.loadingSpinnerService.hideSpinner()},t=>{console.log(t),this.router.navigate(["/error-page"])})}initializePostingIdFromParams(){this.postingIdParam=this.activatedRoute.snapshot.paramMap.get("postingId"),this.postingId=null!==this.postingIdParam?this.postingIdParam:""}navigateBack(){this.location.back()}openNewTabToJobApplication(t){window.open(t,"_blank")}}return t.\u0275fac=function(i){return new(i||t)(a.Y36(n.Ye),a.Y36(s.x),a.Y36(e.gz),a.Y36(p.o),a.Y36(r.x),a.Y36(e.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-posting-details-page"]],decls:1,vars:1,consts:[["class","page",4,"ngIf"],[1,"page"],[1,"page-content"],["pageElementRef",""],["data-test","back",1,"card","cursor-pointer","return-back-button",3,"click"],[1,"card"],["data-test","posting-name",1,"posting-title"],[1,"d-flex"],["data-test","posting-location",1,"posting-location"],["data-test","posting-time",1,"posting-uploaded-time"],[1,"apply-button",3,"click"],[1,"card","d-flex"],[1,"job-description"],[1,"about-the-job-title"],["data-test","job-description",1,"job-description",3,"innerHtml"],[1,"job-additional-info"],["data-test","job-experience-level",1,"job-additional-info-title"],["data-test","job-industry",1,"job-additional-info-title"],["data-test","job-type-of-employment",1,"job-additional-info-title"],["data-test","job-qualifications",1,"job-qualifications",3,"innerHtml"],["data-test","about-the-company",3,"innerHtml"],[1,"card","mb-16px"],["data-test","additional-information",3,"innerHtml"],["data-test","scroll-to-top-button",1,"scroll-to-top-button",3,"click"],["aria-hidden","true",1,"fa","fa-arrow-up"]],template:function(t,i){1&t&&a.YNc(0,c,45,11,"div",0),2&t&&a.Q6J("ngIf",i.postingDetails)},directives:[n.O5],styles:[".card[_ngcontent-%COMP%]{border-radius:12px;background-color:#fff;margin-top:8px;padding:16px}.page-content[_ngcontent-%COMP%]{background-color:#f4f6f8}.posting-title[_ngcontent-%COMP%]{font-size:24px;color:rgba(0,0,0,.9);font-weight:700}.posting-location[_ngcontent-%COMP%]{margin-top:12px;font-size:14px;color:rgba(0,0,0,.9)}.posting-uploaded-time[_ngcontent-%COMP%]{margin:12px 0 0 12px;font-size:14px;color:rgba(0,0,0,.6)}.apply-button[_ngcontent-%COMP%]{font-size:16px;font-weight:700;padding:12px 16px;background-color:#057642;color:#fff;border-radius:24px;margin-top:12px;cursor:pointer}.about-the-job-title[_ngcontent-%COMP%]{font-size:20px;color:rgba(0,0,0,.9);font-weight:700}.job-description[_ngcontent-%COMP%]{width:70%}.job-additional-info[_ngcontent-%COMP%]{padding-left:16px;width:30%;font-size:14px;color:rgba(0,0,0,.9)}.job-additional-info-title[_ngcontent-%COMP%]{font-weight:700;margin-top:16px}.scroll-to-top-button[_ngcontent-%COMP%]{width:48px;height:48px;background-color:rgba(5,118,66,.6);border:none;outline:none;position:fixed;bottom:20px;right:30px;z-index:1;color:#fff;cursor:pointer;padding:4px;border-radius:48px;font-size:24px;font-weight:700;display:flex;align-items:center;justify-content:center}@media (min-width:0px) and (max-width:600px){.card[_ngcontent-%COMP%]{flex-direction:column}.job-description[_ngcontent-%COMP%]{width:100%}}"]}),t})()}];let d=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[e.Bz.forChild(l)],e.Bz]}),t})();var g=o(7647);let u=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.ez,g.a,d]]}),t})()}}]);
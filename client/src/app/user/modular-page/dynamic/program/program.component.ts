import { Http, Response } from '@angular/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicComponent } from '../dynamic.component';
import { ProgramType } from './program-type';
import { Jsonp } from '@angular/http';
import { Category } from './category';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: [ './program.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class ProgramComponent extends DynamicComponent implements OnInit {

  private type: ProgramType;
  private programName: String;
  private categories: Category[];

  constructor(private http: Http) {
    super();
    this.categories = [];
  }

  ngOnInit() {
    /* this.http.get('https://cors-anywhere.herokuapp.com/https://www.amilia.com/PublicApi/capn/fr/Programs/24657/Activities')
    .toPromise().then((value: Response) => {
      this.processJson(value);
    }).catch(reason => console.log(reason)); */
    const value = {
      'Items':[
        {
          'Id':1426941,
          "Name":"4h semaine ",
          "Description":"Cours d'initiation à la nage synchronisée. ",
          "ResponsibleName":"Élyse Arsenault ",
          "Prerequisite":"Junior 4 complété. ",
          "Note":"Les frais d'affiliation et des compétitions ne sont pas inclus dans le montant de l'inscription et seront chargés au courant de l'année. Il est donc important que vous restiez informés du solde de votre compte tout au long de la saison.\n\nLes frais d'inscription et d'affiliation doivent être acquittés en totalité avant le 1er novembre 2017\n\nJeudi : 17h30 à 19h30\nSamedi: 9h30 à 11h30\n\nLes modalités de remboursement  sont telles qu'indiquées selon la Loi sur la protection du consommateur. Tous les cours déjà suivis ne seront pas remboursés. De plus, une pénalité de 10% des cours restant sera retenue du montant, pour un maximum de 50$. Les frais de service ne sont jamais remboursés. ",
          "ExtraInformation":"","Url":"https://www.amilia.com/store/fr/capn/shop/activities/1426941","LegacyLocation":"Piscine Sophie-Barat","Price":335.0000,"Schedule":[{"StartTime":"09:30:00","EndTime":"11:30:00","StartDate":"2017-09-23T00:00:00","EndDate":null,"RecurenceEndDate":"2018-06-17T00:00:00","Occurences":null,"Staff":[],"Facilities":[],"ExceptOccurences":[],"Days":["Thursday","Saturday"],"DayMask":80}],"Age":{"Max":12,"Min":8,"Months":false},"TaxCredit":{"Artistic":null,"Physical":335.0000},"SpotsRemaining":9,"SpotsReserved":1,"ShortScheduleString":"Les jeudis, samedis de 09:30 à 11:30","HasSessionEnabled":true,"AgeSummary":"8-12","OrganizationId":311,"SubCategoryName":"Pré-novice (8 à 12 ans) ","SubCategoryId":1426940,"SubCategoryPosition":1,"Status":"Normal","CategoryName":"Nage Synchronisée","ProgramName":"CLUB COMPÉTITION 2017-2018"},{"Id":1426943,"Name":"6h semaine","Description":"Routine d'équipe U12\n","ResponsibleName":"Elyse Arsenault","Prerequisite":"Junior 5 complété.","Note":"Les frais d'affiliation et des compétitions ne sont pas inclus dans le montant de l'inscription et seront chargés au courant de l'année. Il est donc important que vous restiez informés du solde de votre compte tout au long de la saison.\n\nLes frais d'inscription et d'affiliation doivent être acquittés en totalité avant le 1er novembre 2017.\n\nHORAIRE DES ENTRAÎNEMENTS (Attention, les horaires d'entrainements peuvent être modifiés au courant de la saison) :\n\nMardi : 17h30 à 19h30\nJeudi: 17h30 à 19h30\nSamedi: 10h00 à 12h00\n\nLes modalités de remboursement  sont telles qu'indiquées selon la Loi sur la protection du consommateur. Tous les cours déjà suivis ne seront pas remboursés. De plus, une pénalité de 10% des cours restant sera retenue du montant, pour un maximum de 50$.Les frais de service ne sont jamais remboursés. ","ExtraInformation":"","Url":"https://www.amilia.com/store/fr/capn/shop/activities/1426943","LegacyLocation":"Piscine Sophie-Barat","Price":390.0000,"Schedule":[{"StartTime":"10:00:00","EndTime":"12:00:00","StartDate":"2017-09-23T00:00:00","EndDate":null,"RecurenceEndDate":"2018-06-17T00:00:00","Occurences":null,"Staff":[],"Facilities":[],"ExceptOccurences":[],"Days":["Tuesday","Thursday","Saturday"],"DayMask":84}],"Age":{"Max":19,"Min":5,"Months":false},"TaxCredit":{"Artistic":null,"Physical":390.0000},"SpotsRemaining":12,"SpotsReserved":8,"ShortScheduleString":"Les mardis, jeudis, samedis de 10:00 à 12:00","HasSessionEnabled":true,"AgeSummary":"5-19","OrganizationId":311,"SubCategoryName":"U12 (12 ans et -) ","SubCategoryId":1426942,"SubCategoryPosition":1,"Status":"Normal","CategoryName":"Nage Synchronisée","ProgramName":"CLUB COMPÉTITION 2017-2018"},{"Id":1426946,"Name":"8h semaine","Description":"Routine d'équipe développement","ResponsibleName":"Elyse Arsenault","Prerequisite":"Junior 5 complété.","Note":"Les frais d'affiliation et des compétitions ne sont pas inclus dans le montant de l'inscription et seront chargés au courant de l'année. Il est donc important que vous restiez informés du solde de votre compte tout au long de la saison.\n\nLes frais d'inscription et d'affiliation doivent être acquittés en totalité avant le 1er novembre 2017.\n\nHORAIRE DES ENTRAÎNEMENTS (Attention, les horaires d'entrainements peuvent être modifiés au courant de la saison) :\nMardi : 17h30 à 20h30\nVendredi : 17h30 à 19h30\nSamedi: 9h00 à 12h00\n\nLes modalités de remboursement  sont telles qu'indiquées selon la Loi sur la protection du consommateur. Tous les cours déjà suivis ne seront pas remboursés. De plus, une pénalité de 10% des cours restant sera retenue du montant, pour un maximum de 50$.Les frais de service ne sont jamais remboursés. ","ExtraInformation":"","Url":"https://www.amilia.com/store/fr/capn/shop/activities/1426946","LegacyLocation":"Piscine Sophie-Barat","Price":445.0000,"Schedule":[{"StartTime":"09:00:00","EndTime":"12:00:00","StartDate":"2017-09-23T00:00:00","EndDate":null,"RecurenceEndDate":"2018-06-17T00:00:00","Occurences":null,"Staff":[],"Facilities":[],"ExceptOccurences":[],"Days":["Tuesday","Friday","Saturday"],"DayMask":100}],"Age":{"Max":19,"Min":5,"Months":false},"TaxCredit":{"Artistic":null,"Physical":445.0000},"SpotsRemaining":23,"SpotsReserved":7,"ShortScheduleString":"Les mardis, vendredis, samedis de 09:00 à 12:00","HasSessionEnabled":true,"AgeSummary":"5-19","OrganizationId":311,"SubCategoryName":"Défi (13 à 19 ans)","SubCategoryId":1426945,"SubCategoryPosition":1,"Status":"Normal","CategoryName":"Nage Synchronisée","ProgramName":"CLUB COMPÉTITION 2017-2018"},{"Id":1426949,"Name":"12h semaine","Description":"Routine  d'équipe intermédiaire","ResponsibleName":"Elyse Arsenault","Prerequisite":"Junior 5 complété.","Note":"Les frais d'affiliation et des compétitions ne sont pas inclus dans le montant de l'inscription et seront chargés au courant de l'année. Il est donc important que vous restiez informés du solde de votre compte tout au long de la saison.\n\nLes frais d'inscription et d'affiliation doivent être acquittés en totalité avant le 1er novembre 2017.\n\nHORAIRE DES ENTRAÎNEMENTS (Attention, les horaires d'entrainements peuvent être modifiés au courant de la saison) :\nLundi : 17h30 à 20h00\nMardi: 17h30 à 20h30\nJeudi: 6h15 à 7h45\nVendredi : 17h30 à 19h30\nSamedi : 9h00 à 12h00 \n\nLes modalités de remboursement  sont telles qu'indiquées selon la Loi sur la protection du consommateur. Tous les cours déjà suivis ne seront pas remboursés. De plus, une pénalité de 10% des cours restant sera retenue du montant, pour un maximum de 50$.Les frais de service ne sont jamais remboursés. ","ExtraInformation":"","Url":"https://www.amilia.com/store/fr/capn/shop/activities/1426949","LegacyLocation":"Piscine Sophie-Barat","Price":535.0000,"Schedule":[{"StartTime":"09:00:00","EndTime":"12:00:00","StartDate":"2017-09-23T00:00:00","EndDate":null,"RecurenceEndDate":"2018-06-17T00:00:00","Occurences":null,"Staff":[],"Facilities":[],"ExceptOccurences":[],"Days":["Monday","Tuesday","Thursday","Friday","Saturday"],"DayMask":118}],"Age":{"Max":19,"Min":5,"Months":false},"TaxCredit":{"Artistic":null,"Physical":535.0000},"SpotsRemaining":25,"SpotsReserved":5,"ShortScheduleString":"Les lundis, mardis, jeudis, vendredis, samedis de 09:00 à 12:00","HasSessionEnabled":true,"AgeSummary":"5-19","OrganizationId":311,"SubCategoryName":"Intermédiaire (13 à 19 ans)","SubCategoryId":1426948,"SubCategoryPosition":1,"Status":"Normal","CategoryName":"Nage Synchronisée","ProgramName":"CLUB COMPÉTITION 2017-2018"},{"Id":1426955,"Name":"4h semaine","Description":null,"ResponsibleName":"Elyse Arsenault","Prerequisite":"10 ans et moins\r\nNager 25m en style libre\r\n\r\nParticipation aux compétitions obligatoire.","Note":"Les frais d'affiliation et des compétitions ne sont pas inclus dans le montant de l'inscription et seront chargés au courant de l'année. Il est donc important que vous restiez informés du solde de votre compte tout au long de la saison.\n\nLes frais d'inscription et d'affiliation doivent être acquittés en totalité avant le 1er novembre 2017.\n\nHORAIRE DES ENTRAÎNEMENTS (Attention, les horaires d'entrainements peuvent être modifiés au courant de la saison) :\nMercredi : 16h30 à 18h30\nSamedi : 8h30 à 10h30\n\nLes modalités de remboursement  sont telles qu'indiquées selon la Loi sur la protection du consommateur. Tous les cours déjà suivis ne seront pas remboursés. De plus, une pénalité de 10% des cours restant sera retenue du montant, pour un maximum de 50$.Les frais de service ne sont jamais remboursés. ","ExtraInformation":"","Url":"https://www.amilia.com/store/fr/capn/shop/activities/1426955","LegacyLocation":"Piscine Sophie-Barat","Price":335.0000,"Schedule":[{"StartTime":"08:30:00","EndTime":"10:30:00","StartDate":"2017-09-23T00:00:00","EndDate":null,"RecurenceEndDate":"2018-06-17T00:00:00","Occurences":null,"Staff":[],"Facilities":[],"ExceptOccurences":[],"Days":["Wednesday","Saturday"],"DayMask":72}],"Age":{"Max":10,"Min":5,"Months":false},"TaxCredit":{"Artistic":null,"Physical":335.0000},"SpotsRemaining":-1,"SpotsReserved":13,"ShortScheduleString":"Les mercredis, samedis de 08:30 à 10:30","HasSessionEnabled":true,"AgeSummary":"5-10","OrganizationId":311,"SubCategoryName":"Les recrues","SubCategoryId":1426954,"SubCategoryPosition":1,"Status":"Normal","CategoryName":"Natation","ProgramName":"CLUB COMPÉTITION 2017-2018"},
          {"Id":1426957,"Name":"6h semaine","Description":null,"ResponsibleName":"Elyse Arsenault","Prerequisite":"11 ans et moins\nNager 200m libre en moins de 5 minutes\nAvoir atteint les points techniques du groupe Recrues\n\n*Participation aux compétitions obligatoire*","Note":"Les frais d'affiliation et des compétitions ne sont pas inclus dans le montant de l'inscription et seront chargés au courant de l'année. Il est donc important que vous restiez informés du solde de votre compte tout au long de la saison.\n\nLes frais d'inscription et d'affiliation doivent être acquittés en totalité avant le 1er novembre 2017..\n\nHORAIRE DES ENTRAÎNEMENTS (Attention, les horaires d'entrainements peuvent être modifiés au courant de la saison) :\nMercredi : 16h30 à 18h30 \nJeudi: 17h00 à 19h00\nSamedi: 8h30 à 10h30\n\nLes modalités de remboursement  sont telles qu'indiquées selon la Loi sur la protection du consommateur. Tous les cours déjà suivis ne seront pas remboursés. De plus, une pénalité de 10% des cours restant sera retenue du montant, pour un maximum de 50$.Les frais de service ne sont jamais remboursés. ","ExtraInformation":"","Url":"https://www.amilia.com/store/fr/capn/shop/activities/1426957","LegacyLocation":"Piscine Sophie-Barat","Price":390.0000,"Schedule":[{"StartTime":"08:30:00","EndTime":"10:30:00","StartDate":"2017-09-23T00:00:00","EndDate":null,"RecurenceEndDate":"2018-06-17T00:00:00","Occurences":null,"Staff":[],"Facilities":[],"ExceptOccurences":[],"Days":["Wednesday","Thursday","Saturday"],"DayMask":88}],"Age":{"Max":19,"Min":5,"Months":false},"TaxCredit":{"Artistic":null,"Physical":390.0000},"SpotsRemaining":12,"SpotsReserved":8,"ShortScheduleString":"Les mercredis, jeudis, samedis de 08:30 à 10:30","HasSessionEnabled":true,"AgeSummary":"5-19","OrganizationId":311,"SubCategoryName":"Groupe Régional","SubCategoryId":1426956,"SubCategoryPosition":1,"Status":"Normal","CategoryName":"Natation","ProgramName":"CLUB COMPÉTITION 2017-2018"},{"Id":1426959,"Name":"8h semaine","Description":null,"ResponsibleName":"Elyse Arsenault","Prerequisite":"10 à 13 ans\r\nAvoir les standards provinciaux développement\r\nAvoir atteint les points techniques du groupe Régional\r\n\r\nParticipation aux compétitions obligatoire.","Note":"Les frais d'affiliation et des compétitions ne sont pas inclus dans le montant de l'inscription et seront chargés au courant de l'année. Il est donc important que vous restiez informés du solde de votre compte tout au long de la saison.\n\nLes frais d'inscription et d'affiliation doivent être acquittés en totalité avant le 1er novembre 2017.\n\nHORAIRE DES ENTRAÎNEMENTS (Attention, les horaires d'entrainements peuvent être modifiés au courant de la saison) :\nLundi : 16h30 à 18h30\nMardi : 16h30 à 18h30\nVendredi : 16h30 à 18h30\nSamedi 7h00 à 9h00\n\nLes modalités de remboursement  sont telles qu'indiquées selon la Loi sur la protection du consommateur. Tous les cours déjà suivis ne seront pas remboursés. De plus, une pénalité de 10% des cours restant sera retenue du montant, pour un maximum de 50$.Les frais de service ne sont jamais remboursés. ","ExtraInformation":"","Url":"https://www.amilia.com/store/fr/capn/shop/activities/1426959","LegacyLocation":"Piscine Sophie-Barat","Price":445.0000,"Schedule":[{"StartTime":"07:00:00","EndTime":"09:00:00","StartDate":"2017-09-23T00:00:00","EndDate":null,"RecurenceEndDate":"2018-06-17T00:00:00","Occurences":null,"Staff":[],"Facilities":[],"ExceptOccurences":[],"Days":["Monday","Tuesday","Friday","Saturday"],"DayMask":102}],"Age":{"Max":19,"Min":10,"Months":false},"TaxCredit":{"Artistic":null,"Physical":445.0000},"SpotsRemaining":5,"SpotsReserved":13,"ShortScheduleString":"Les lundis, mardis, vendredis, samedis de 07:00 à 09:00","HasSessionEnabled":true,"AgeSummary":"10-19","OrganizationId":311,"SubCategoryName":"A","SubCategoryId":1426958,"SubCategoryPosition":1,"Status":"Normal","CategoryName":"Natation","ProgramName":"CLUB COMPÉTITION 2017-2018"},{"Id":1426961,"Name":"12h semaine","Description":null,"ResponsibleName":"Elyse Arsenault","Prerequisite":"13 ans et plus\nAvoir atteint les standards AA au minimum\nAvoir atteint les points techniques du groupe A. \n\nParticipation aux compétitions obligatoire.","Note":"Les frais d'affiliation et des compétitions ne sont pas inclus dans le montant de l'inscription et seront chargés au courant de l'année. Il est donc important que vous restiez informés du solde de votre compte tout au long de la saison.\n\nLes frais d'inscription et d'affiliation doivent être acquittés en totalité avant le 1er novembre 2017. \n\nHORAIRE DES ENTRAÎNEMENTS (Attention, les horaires d'entrainements peuvent être modifiés au courant de la saison) :\n\nLundi : 16h 30 à 18h30\nMardi : 6h15 à 7h45\nMardi : 16h30 à 18h30\nJeudi : 16h30 à 18h30\nVendredi : 16h30 à 19h00\nSamedi : 7h00 à 9h00\n\nLes modalités de remboursement  sont telles qu'indiquées selon la Loi sur la protection du consommateur. Tous les cours déjà suivis ne seront pas remboursés. De plus, une pénalité de 10% des cours restant sera retenue du montant, pour un maximum de 50$.Les frais de service ne sont jamais remboursés. ","ExtraInformation":"","Url":"https://www.amilia.com/store/fr/capn/shop/activities/1426961","LegacyLocation":"Piscine Sophie-Barat","Price":535.0000,"Schedule":[{"StartTime":"07:00:00","EndTime":"09:00:00","StartDate":"2017-09-23T00:00:00","EndDate":null,"RecurenceEndDate":"2018-06-17T00:00:00","Occurences":null,"Staff":[],"Facilities":[],"ExceptOccurences":[],"Days":["Monday","Tuesday","Thursday","Friday","Saturday"],"DayMask":118}],"Age":{"Max":19,"Min":11,"Months":false},"TaxCredit":{"Artistic":null,"Physical":535.0000},"SpotsRemaining":7,"SpotsReserved":11,"ShortScheduleString":"Les lundis, mardis, jeudis, vendredis, samedis de 07:00 à 09:00","HasSessionEnabled":true,"AgeSummary":"11-19","OrganizationId":311,"SubCategoryName":"AA & AAA","SubCategoryId":1426960,"SubCategoryPosition":1,"Status":"Normal","CategoryName":"Natation","ProgramName":"CLUB COMPÉTITION 2017-2018"},
          {"Id":1426963,"Name":"7,5h semaine","Description":null,"ResponsibleName":"Elyse Arsenault","Prerequisite":"Être âgé de plus de 16 ans. \nÊtre capable de nager un minimum de 300 mètres sans arrêt. Connaître la base des 4 styles de nage. ","Note":"HORAIRE DES ENTRAÎNEMENTS :\n\nLundi: 20h30 à 22h00\nMardi: 6h15 à 7h45\nJeudi: 6h15 à 7h45\nJeudi: 20h30 à 22h00\nSamedi: 7h00 à 8h30\n\nToutes les demandes de remboursement doivent être reçues la journée AVANT le début des cours afin de recevoir un remboursement complet. Les frais de services ne sont JAMAIS remboursés.\n\nLes modalités de remboursement  sont telles qu'indiquées selon la Loi sur la protection du consommateur. Tous les cours déjà suivis ne seront pas remboursés. De plus, une pénalité de 10% des cours restant sera retenue du montant, pour un maximum de 50$.","ExtraInformation":"","Url":"https://www.amilia.com/store/fr/capn/shop/activities/1426963","LegacyLocation":"Piscine Sophie-Barat","Price":415.0000,"Schedule":[{"StartTime":"06:15:00","EndTime":"08:00:00","StartDate":"2017-09-30T00:00:00","EndDate":null,"RecurenceEndDate":"2018-06-17T00:00:00","Occurences":null,"Staff":[],"Facilities":[],"ExceptOccurences":[],"Days":["Monday","Tuesday","Thursday","Saturday"],"DayMask":86}],"Age":{"Max":99,"Min":16,"Months":false},"TaxCredit":null,"SpotsRemaining":6,"SpotsReserved":44,"ShortScheduleString":"Les lundis, mardis, jeudis, samedis de 06:15 à 08:00","HasSessionEnabled":true,"AgeSummary":"16-99","OrganizationId":311,"SubCategoryName":"Maîtres nageurs","SubCategoryId":1426962,"SubCategoryPosition":1,"Status":"Normal","CategoryName":"Natation","ProgramName":"CLUB COMPÉTITION 2017-2018"},{"Id":1426968,"Name":"6h semaine","Description":"Entraînements physiques en natation et entraînements des techniques de sauvetage. \n\ninscription comprend le chandail et le casque de bain à l'effigie du club.","ResponsibleName":"Elyse Arsenault","Prerequisite":"Junior 5 complété","Note":"Les frais d'affiliation et des compétitions ne sont pas inclus dans le montant de l'inscription et seront chargés au courant de l'année. Il est donc important que vous restiez informés du solde de votre compte tout au long de la saison.\n\nLes frais d'inscription et d'affiliation doivent être acquittés en totalité avant le 1er novembre 2017. \n\nHORAIRE DES ENTRAÎNEMENTS (Attention, les horaires d'entrainements peuvent être modifiés au courant de la saison) :\nMardi : 17h30 à 19h30\nVendredi : 17h30 à 19h30\nDimanche : 18h à 20h (entraînement technique)\n\nLes modalités de remboursement  sont telles qu'indiquées selon la Loi sur la protection du consommateur. Tous les cours déjà suivis ne seront pas remboursés. De plus, une pénalité de 10% des cours restant sera retenue du montant, pour un maximum de 50$.Les frais de service ne sont jamais remboursés. ","ExtraInformation":"","Url":"https://www.amilia.com/store/fr/capn/shop/activities/1426968","LegacyLocation":"Piscine Sophie-Barat","Price":390.0000,"Schedule":[{"StartTime":"18:00:00","EndTime":"20:00:00","StartDate":"2017-09-24T00:00:00","EndDate":null,"RecurenceEndDate":"2018-06-17T00:00:00","Occurences":null,"Staff":[],"Facilities":[],"ExceptOccurences":[],"Days":["Sunday","Tuesday","Friday"],"DayMask":37}],"Age":{"Max":99,"Min":6,"Months":false},"TaxCredit":{"Artistic":null,"Physical":390.0000},"SpotsRemaining":17,"SpotsReserved":3,"ShortScheduleString":"Les dimanches, mardis, vendredis de 18:00 à 20:00","HasSessionEnabled":true,"AgeSummary":"6-99","OrganizationId":311,"SubCategoryName":"Junior et senior","SubCategoryId":1426967,"SubCategoryPosition":2,"Status":"Normal","CategoryName":"Sauvetage","ProgramName":"CLUB COMPÉTITION 2017-2018"},{"Id":1470563,"Name":"Compétitions uniquement","Description":"Participation au compétition sous la bannière du CAPN et suivi par l'entraîneur lors des compétitions.\n\ninscription comprend le chandail et le casque de bain à l'effigie du club.","ResponsibleName":"Elyse Arsenault","Prerequisite":"Junior 5 complété","Note":"Les frais d'affiliation et des compétitions ne sont pas inclus dans le montant de l'inscription et seront chargés au courant de l'année. Il est donc important que vous restiez informés du solde de votre compte tout au long de la saison.\n\nLes frais d'inscription et d'affiliation doivent être acquittés en totalité avant le 1er novembre 2017. \n\nLes modalités de remboursement  sont telles qu'indiquées selon la Loi sur la protection du consommateur. Tous les cours déjà suivis ne seront pas remboursés. De plus, une pénalité de 10% des cours restant sera retenue du montant, pour un maximum de 50$.Les frais de service ne sont jamais remboursés. ","ExtraInformation":"","Url":"https://www.amilia.com/store/fr/capn/shop/activities/1470563","LegacyLocation":"Piscine Sophie-Barat","Price":120.0000,"Schedule":[{"StartTime":"18:00:00","EndTime":"20:00:00","StartDate":"2017-09-24T00:00:00","EndDate":null,"RecurenceEndDate":"2018-06-17T00:00:00","Occurences":null,"Staff":[],"Facilities":[],"ExceptOccurences":[],"Days":["Sunday"],"DayMask":1}],"Age":{"Max":99,"Min":6,"Months":false},"TaxCredit":{"Artistic":null,"Physical":120.0000},"SpotsRemaining":20,"SpotsReserved":0,"ShortScheduleString":"Les dimanches de 18:00 à 20:00","HasSessionEnabled":true,"AgeSummary":"6-99","OrganizationId":311,"SubCategoryName":"Junior et senior","SubCategoryId":1426967,"SubCategoryPosition":0,"Status":"Normal","CategoryName":"Sauvetage","ProgramName":"CLUB COMPÉTITION 2017-2018"},{"Id":1470564,"Name":"2h semaine","Description":"Entraînements physiques en natation et entraînements des techniques de sauvetage. \n\ninscription comprend le chandail et le casque de bain à l'effigie du club.","ResponsibleName":"Elyse Arsenault","Prerequisite":"Junior 5 complété","Note":"Les frais d'affiliation et des compétitions ne sont pas inclus dans le montant de l'inscription et seront chargés au courant de l'année. Il est donc important que vous restiez informés du solde de votre compte tout au long de la saison.\n\nLes frais d'inscription et d'affiliation doivent être acquittés en totalité avant le 1er novembre 2017. \n\nHORAIRE DES ENTRAÎNEMENTS (Attention, les horaires d'entrainements peuvent être modifiés au courant de la saison) :\nDimanche : 18h à 20h (entraînement technique)\n\nLes modalités de remboursement  sont telles qu'indiquées selon la Loi sur la protection du consommateur. Tous les cours déjà suivis ne seront pas remboursés. De plus, une pénalité de 10% des cours restant sera retenue du montant, pour un maximum de 50$.Les frais de service ne sont jamais remboursés. ","ExtraInformation":"","Url":"https://www.amilia.com/store/fr/capn/shop/activities/1470564","LegacyLocation":"Piscine Sophie-Barat","Price":240.0000,"Schedule":[{"StartTime":"18:00:00","EndTime":"20:00:00","StartDate":"2017-09-24T00:00:00","EndDate":null,"RecurenceEndDate":"2018-06-17T00:00:00","Occurences":null,"Staff":[],"Facilities":[],"ExceptOccurences":[],"Days":["Sunday"],"DayMask":1}],"Age":{"Max":99,"Min":6,"Months":false},"TaxCredit":{"Artistic":null,"Physical":240.0000},"SpotsRemaining":18,"SpotsReserved":2,"ShortScheduleString":"Les dimanches de 18:00 à 20:00","HasSessionEnabled":true,"AgeSummary":"6-99","OrganizationId":311,"SubCategoryName":"Junior et senior","SubCategoryId":1426967,"SubCategoryPosition":1,"Status":"Normal","CategoryName":"Sauvetage","ProgramName":"CLUB COMPÉTITION 2017-2018"}],"Page":{"NextId":null,"Next":null}}
        
    this.processJson(value);
  }

  private processJson(value: any) {
    this.programName = value.Items[0].ProgramName;
    value.Items.forEach(activity => {
      let targetCategory = this.getCategory(activity.CategoryName)[0];
      if (targetCategory === undefined) {
        targetCategory = new Category(activity.CategoryName);
        this.categories.push(targetCategory);
      }
      targetCategory.newItem(activity);
    });
  }

  private getCategory(name: String): Category[] {
    return this.categories.filter((category: Category) => {
      return category.name === name;
    });
  }

}

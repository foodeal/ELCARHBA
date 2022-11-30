export const apiUrl = 'https://13.39.51.237:443';

export enum ApiUrlsEnum {

  //User & Prestataire
  Authenticate = '/users/authenticate',
  Register = '/users/register',
  CheckToken = '/users/profile',
  GetUser = '', 
  GetAllUsers = '/users/',
  DeleteUser = '/users/',
  UpdateUser = '/users/',

  AuthenticatePrestataire = '/users/authenticate',
  RegisterPrestataire = '/users/register',
  CheckTokenPrestataire = '/users/profile',
  GetPrestataire = '', 
  GetAllPrestataire = '/users/',
  DeletePrestataire = '/users/',
  UpdatePrestataire = '/users/',

  //Offre & Offre Disponible
  AddOffer = '/offres/add',
  GetOffer = '/offres/', 
  GetAllOffers = '/offres/',
  DeleteOffer = '/offres/',
  UpdateOffer = '/offres/',

  AddOfferDispo = '/offres_dispo/add',
  GetOfferDispo = '/offres_dispo/', 
  GetAllOffersDispo = '/offres_dispo/',
  DeleteOfferDispo = '/offres_dispo/',
  UpdateOfferDispo = '/offres_dispo/',

  //Service
  AddService = '/services/add',
  GetService = '/services/', 
  GetAllServices = '/services/',
  DeleteService = '/services/',
  UpdateService = '/services/',

  //Produit
  AddProduit = '/produits/add',
  GetProduit = '/produits/', 
  GetAllProduits = '/produits/',
  DeleteProduit = '/produits/',
  UpdateProduit = '/produits/',
  
  //Expert
  AddExpert = '/experts/add',
  GetExpert = '/experts/', 
  GetAllExperts = '/experts/',
  DeleteExpert = '/experts/',
  UpdateExpert = '/experts/',  

  //Coupon & Coupon Historique
  AddCoupon = '/coupons/add', 
  GetCoupon = '/coupons/', 
  GetAllCoupons = '/coupons/',
  DeleteCoupon = '/coupons/',
  UpdateCoupon = '/coupons/',

  AddCouponHist = '/coupons_hist/add',
  GetCouponHist = 'coupons_hist/', 
  GetAllCouponsHist = '/coupons_hist/',
  DeleteCouponHist = '/coupons_hist/',
  UpdateCouponHist = '/coupons_hist/',

  //Garage
  AddGarage = '/garages/add',
  GetGarage = '/garages/', 
  GetAllGarages = '/garages/',
  DeleteGarage = '/garages/',
  UpdateGarage = '/garages/',
}

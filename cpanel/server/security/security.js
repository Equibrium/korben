/**
 * Company
 */
Korben.Collection.Company.permit(['update']).korben_ifSuperOrAdmin().apply();

/**
 * Setting
 */
Korben.Collection.Setting.permit(['update']).korben_ifSuperOrAdmin().apply();

/**
 * Branch
 */
Korben.Collection.Branch.permit(['insert']).korben_ifSuper().apply();
Korben.Collection.Branch.permit(['update']).korben_ifSuperOrAdmin().apply();
Korben.Collection.Branch.permit(['remove']).korben_ifSuper().apply();

/**
 * Exchange
 */
//Korben.Collection.Exchange.permit(['insert', 'update', 'remove']).korben_ifSuperOrAdmin().apply();
Korben.Collection.Exchange.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();

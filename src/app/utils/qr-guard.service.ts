/*
  Prevent Route on Refresh Guard Service

  CODE MODIFIED BY: 
    Gabriel Ponon
    Startec Innovations

  BASED ON CODE BY: Ben Nadel 

  Retrieved from: https://www.bennadel.com/blog/3368-prevent-routing-to-secondary-view-if-page-refresh-in-angular-5-0-0.htm
  Retrieved : December 14, 2020
*/

import { ActivatedRouteSnapshot } from "@angular/router";
import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";

@Injectable({
	providedIn: 'root'
  })
export class QrGuardService implements CanActivate {
	private router: Router;

	// FIXME : guard to prevent access /qr route by refresh and manual typing, prevents MIME type errors

	// I initialize the secondary-view route guard.
	constructor( router: Router ) {
		this.router = router;
	}
  
  // I determine if the requested route can be activated (ie, navigated to).
	public canActivate(
		activatedRouteSnapshot: ActivatedRouteSnapshot, 
		routerStateSnapshot: RouterStateSnapshot
		) : boolean {

		// We don't want to render this secondary view on page-refresh. As such, if this
		// is a page-refresh, we'll navigate to the same URL less the secondary outlet.
		if ( this.isPageRefresh() ) {

			console.warn( "qr code page not allowed on refresh..." );
			this.router.navigateByUrl( '' );
			return( false );
		}
		return( true );
  }
  
	// I determine if the current route-request is part of a page refresh.
	private isPageRefresh() : boolean {
		// If the router has yet to establish a single navigation, it means that this
		// navigation is the first attempt to reconcile the application state with the
		// URL state. Meaning, this is a page refresh.
		return( ! this.router.navigated );
	}

}
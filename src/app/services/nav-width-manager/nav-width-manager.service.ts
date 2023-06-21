import {Injectable} from '@angular/core';
import {LocalStorageManagerService} from "../local-storage-manager/local-storage-manager.service";
import {BehaviorSubject} from "rxjs";

const NAV_BREAKPOINT: number = 17.6; //rem
const NAV_MIN_WIDTH: number = 3.8; //rem

@Injectable({
    providedIn: 'root'
})

export class NavWidthManagerService {

    public static navWidthSubject: BehaviorSubject<number> = new BehaviorSubject<number>
    (NavWidthManagerService.getNavWidthFromLocalStorage());
    public static isNavExpandedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>
    (NavWidthManagerService.getIsNavExpandedFromLocalStorage());

    private static fontSize: number = parseFloat(getComputedStyle(document.documentElement).fontSize);

    private static convertRemToPx(rem: number) {
        return rem * this.fontSize;
    }

    private static getNavWidthFromLocalStorage(): number {
        return LocalStorageManagerService.
        getNumberFromLocalStorage('navWidth', NavWidthManagerService.convertRemToPx(NAV_BREAKPOINT));
    }
    private static getIsNavExpandedFromLocalStorage(): boolean {
        return LocalStorageManagerService.
        getBoolFromLocalStorage('isNavExpanded', true);
    }
    private static updateIsNavExpanded(isNavExpanded: boolean): void {
        this.isNavExpandedSubject.next(isNavExpanded);
        LocalStorageManagerService.setBoolToLocalStorage('isNavExpanded', isNavExpanded.toString());
    }

    public static getNavBreakpoint(): number {
        return NAV_BREAKPOINT;
    }
    public static getNavMinWidth(): number {
        return NAV_MIN_WIDTH;
    }

    public static collapseNav(): void {
        this.navWidthSubject.next(this.convertRemToPx(NAV_MIN_WIDTH));
        this.updateIsNavExpanded(false);
    }
    public static expandNavManually(): void {
        this.navWidthSubject.next(this.convertRemToPx(NAV_BREAKPOINT));
        this.updateIsNavExpanded(true);
    }
    public static expandNavButton(): void {
        this.navWidthSubject.next(this.getNavWidthFromLocalStorage());
        this.updateIsNavExpanded(true);
    }

    private static shouldNavBeCollapsed(newWidth: number): boolean {
        return newWidth < (this.convertRemToPx(NAV_BREAKPOINT) / 2) && this.getIsNavExpandedFromLocalStorage();
    }
    private static shouldNavBeExpanded(newWidth: number): boolean {
        return newWidth > (this.convertRemToPx(NAV_BREAKPOINT) / 2) && !this.getIsNavExpandedFromLocalStorage();
    }

    public static updateNavWidth(newWidth: number): void {
        if(this.shouldNavBeExpanded(newWidth)) {
            this.expandNavManually();
            return;
        }
        if(this.shouldNavBeCollapsed(newWidth)) {
            this.collapseNav();
            return;
        }

        this.navWidthSubject.next(newWidth);
        LocalStorageManagerService.setNumberToLocalStorage('navWidth', newWidth);
    }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectorService {
  private _isDesktop: boolean;
  private mediaChecker;
  constructor() { }

  ngOnInit(): void {
  }

  initDeviceDetector() {
    this._isDesktop = window.matchMedia('(min-width: 768px)').matches;

    window.addEventListener('resize', () => {
      const newValue = window.matchMedia('(min-width: 768px)').matches;
      if (newValue === this._isDesktop) return;
      this._isDesktop = newValue;
    })
  }

  get isDesktop() {
    return this._isDesktop;
  }

}

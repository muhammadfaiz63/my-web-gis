import 'leaflet';
import 'leaflet.locatecontrol';
import { GeoSearchControl } from 'leaflet-geosearch';

declare module 'leaflet' {
  namespace Control {
    function locate(options?: any): LocateControl;
  }

  interface LocateControl extends Control {
    start(): void;
    stop(): void;
    setView(): void;
  }

  class GeoSearchControl extends Control {
    constructor(options: any);
  }
}

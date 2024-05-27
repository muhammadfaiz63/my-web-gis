declare module 'leaflet.locatecontrol' {
    import L from 'leaflet';
  
    namespace LocateControl {
      interface LocateOptions {
        position?: string;
        drawCircle?: boolean;
        follow?: boolean;
        setView?: boolean;
        keepCurrentZoomLevel?: boolean;
        stopFollowingOnDrag?: boolean;
        remainActive?: boolean;
        markerClass?: L.Class;
        circleStyle?: L.PathOptions;
        markerStyle?: L.PathOptions;
        circlePadding?: number[];
        metric?: boolean;
        onLocationError?: (err: any, control: any) => any;
        onLocationOutsideMapBounds?: (control: any) => any;
        showPopup?: boolean;
        strings?: { [key: string]: string };
        locateOptions?: L.LocateOptions;
        clickBehavior?: any;
        cacheLocation?: boolean;
      }
    }
  
    class LocateControl extends L.Control {
      constructor(options?: LocateControl.LocateOptions);
    }
  
    export = LocateControl;
  }
  
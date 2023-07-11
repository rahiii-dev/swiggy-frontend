(self.webpackChunkswiggy = self.webpackChunkswiggy || []).push([
  [43],
  {
    4887: (ot, G, p) => {
      "use strict";
      p.d(G, { x: () => r });
      var d = p(8274),
        o = p(2152);
      class r {}
      (r.ɵfac = function (u) {
        return new (u || r)();
      }),
        (r.ɵcmp = d.Xpm({
          type: r,
          selectors: [["app-cuisine-loading"]],
          decls: 3,
          vars: 0,
          consts: [
            [1, "container"],
            [1, "menu"],
          ],
          template: function (u, f) {
            1 & u &&
              (d.TgZ(0, "div", 0)(1, "div", 1),
              d._UZ(2, "app-loading-spinner"),
              d.qZA()());
          },
          dependencies: [o.g],
          styles: [
            ".menu[_ngcontent-%COMP%]{width:min(100%,740px);margin-inline:auto;padding-inline:1.25rem;padding-top:2rem;padding-bottom:3.2rem;display:flex;justify-content:center;align-items:center}",
          ],
        }));
    },
    8479: (ot, G, p) => {
      "use strict";
      p.d(G, { u: () => O });
      var d = p(8274),
        o = p(8407),
        h = p(5066),
        u = p(5568),
        f = p(6895);
      function g(b, P) {
        if (1 & b) {
          const M = d.EpF();
          d.ynx(0),
            d.TgZ(1, "button", 25),
            d.NdJ("click", function () {
              d.CHM(M);
              const Z = d.oxw().$implicit,
                Y = d.oxw(2);
              return d.KtG(Y.submitSuggested(Z, Z.latitude, Z.longitude));
            }),
            d.TgZ(2, "span", 26),
            d._uU(3),
            d.qZA()(),
            d.BQk();
        }
        if (2 & b) {
          const M = d.oxw().$implicit;
          d.xp6(3), d.AsE("", M.placeLabel, ", ", M.state, "");
        }
      }
      function v(b, P) {
        if (
          (1 & b && (d.ynx(0), d.YNc(1, g, 4, 2, "ng-container", 24), d.BQk()),
          2 & b)
        ) {
          const M = P.$implicit;
          d.xp6(1), d.Q6J("ngIf", M.placeLabel);
        }
      }
      function w(b, P) {
        if (
          (1 & b &&
            (d.TgZ(0, "div", 22),
            d.YNc(1, v, 2, 1, "ng-container", 23),
            d.qZA()),
          2 & b)
        ) {
          const M = d.oxw();
          d.xp6(1), d.Q6J("ngForOf", M.placesArray);
        }
      }
      function S(b, P) {
        1 & b && (d.O4$(), d.TgZ(0, "svg", 27), d._UZ(1, "path", 28), d.qZA());
      }
      function xt(b, P) {
        1 & b && (d.O4$(), d.TgZ(0, "svg", 29), d._UZ(1, "path", 30), d.qZA());
      }
      class O {
        constructor(P, M) {
          (this.mapservice = P),
            (this.Radar$ = M),
            (this.lat = 22.323691),
            (this.lng = 77.985996),
            (this.zoom = 5),
            (this.UserLocation = new d.vpe()),
            (this.UserPlace = new d.vpe()),
            (this.GetMap = new d.vpe()),
            (this.placesArray = []),
            (this.satelite = !1),
            (this.fullscreen = !1),
            (this.slectedplace = "India");
        }
        initMap() {
          this.Map = o.map("map", {
            center: [this.lat, this.lng],
            zoom: this.zoom,
            zoomControl: !1,
          });
        }
        ngOnInit() {
          (this.latitude = this.lat),
            (this.longitude = this.lng),
            this.setPlaceInfo(this.lat, this.lng);
        }
        setPlaceInfo(P, M) {
          (this.latitude = P),
            (this.longitude = M),
            this.Radar$.ReverseLoc(P, M).subscribe({
              next: (q) => {
                this.slectedplace =
                  q.addresses[0].placeLabel && q.addresses[0].state
                    ? `${q.addresses[0].placeLabel}, ${q.addresses[0].state}`
                    : "";
              },
            });
        }
        ngAfterViewInit() {
          this.initMap(),
            this.GetMap.emit(this.Map),
            (this.Tiles = this.mapservice.setTilelayer(this.Map)),
            (this.Marker = this.mapservice.setMarker(this.Map, [
              this.latitude,
              this.longitude,
            ])),
            (this.CircMarker = this.mapservice.setCircleMarker(this.Map, [
              this.latitude,
              this.longitude,
            ])),
            this.CircMarker.setStyle({ opacity: 0, fillOpacity: 0 });
          const P = this.Map,
            M = this.Marker,
            q = this.CircMarker,
            Z = (Y, st) => {
              this.setPlaceInfo(Y, st);
            };
          this.Marker.on("dragend", function (Y) {
            const st = Y.target.getLatLng();
            P.panTo(st), q.setLatLng(st), Z(st.lat, st.lng);
          }),
            this.Map.on("click", function (Y) {
              P.panTo(Y.latlng),
                M.setLatLng(Y.latlng),
                q.setLatLng(Y.latlng),
                Z(Y.latlng.lat, Y.latlng.lng);
            });
        }
        detect() {
          this.mapservice.getLocation().subscribe({
            next: (P) => {
              this.Map.setZoom(15),
                this.Map.panTo(P),
                this.Marker.setLatLng(P),
                this.CircMarker.setLatLng(P),
                this.setPlaceInfo(P.lat, P.lng);
            },
            error: (P) => {
              alert(P);
            },
          });
        }
        changeTiles() {
          (this.satelite = !this.satelite),
            this.satelite
              ? (this.Tiles.setUrl(
                  "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                ),
                this.CircMarker.setStyle({
                  color: "#f4f4f4",
                  opacity: 1,
                  fillOpacity: 0.25,
                }))
              : (this.Tiles.setUrl(
                  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                ),
                this.CircMarker.setStyle({
                  color: "#fb7e18",
                  opacity: 0,
                  fillOpacity: 0,
                }));
        }
        suggestPlace(P) {
          (this.placesArray = []),
            this.Radar$.AutoComplete(P).subscribe({
              next: (M) => {
                this.placesArray = M.addresses;
              },
              error: (M) => (this.placesArray = []),
            });
        }
        toglleScreen() {
          (this.fullscreen = !this.fullscreen), this.Tiles.redraw();
        }
        submitSuggested(P, M, q) {
          const Z = this.mapservice.getLeafLatLong(M, q);
          this.Map.setZoom(17),
            this.Map.panTo(Z),
            this.Marker.setLatLng(Z),
            this.CircMarker.setLatLng(Z),
            (this.slectedplace = `${P.placeLabel}, ${P.state}`),
            (this.latitude = M),
            (this.longitude = q),
            (this.placesArray = []);
        }
        SubmitUserLocation() {
          let P = this.mapservice.getLeafLatLong(this.latitude, this.longitude);
          this.UserLocation.emit(P), this.UserPlace.emit(this.slectedplace);
        }
      }
      (O.ɵfac = function (P) {
        return new (P || O)(d.Y36(h.S), d.Y36(u.z));
      }),
        (O.ɵcmp = d.Xpm({
          type: O,
          selectors: [["app-loc-map"]],
          inputs: { lat: "lat", lng: "lng", zoom: "zoom" },
          outputs: {
            UserLocation: "UserLocation",
            UserPlace: "UserPlace",
            GetMap: "GetMap",
          },
          decls: 32,
          vars: 10,
          consts: [
            [1, "map-container"],
            [1, "map-frame"],
            ["id", "map"],
            [1, "satelite", "map-btn", 3, "click"],
            [1, "tooltip"],
            [
              "xmlns",
              "http://www.w3.org/2000/svg",
              "width",
              "16",
              "height",
              "16",
              "fill",
              "currentColor",
              "viewBox",
              "0 0 16 16",
              1,
              "bi",
              "bi-globe-asia-australia",
            ],
            [
              "d",
              "m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.476.476 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.602.602 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.453.453 0 0 0 .138-.326ZM5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.702.702 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52l.761.325Z",
            ],
            [
              "d",
              "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.882.882 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a6.998 6.998 0 0 1 3.425 7.692 1.015 1.015 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a.998.998 0 0 0 .283.126 7.001 7.001 0 0 1-9.49-3.409Z",
            ],
            [1, "detector", "map-btn", 3, "click"],
            [
              "xmlns",
              "http://www.w3.org/2000/svg",
              "width",
              "24",
              "height",
              "24",
              "fill",
              "currentColor",
              "viewBox",
              "0 0 16 16",
              1,
              "bi",
              "bi-geo",
            ],
            [
              "fill-rule",
              "evenodd",
              "d",
              "M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z",
            ],
            [1, "searchbox"],
            [
              "type",
              "text",
              "placeholder",
              "Enter your place here...",
              1,
              "serchplace",
              3,
              "keyup",
            ],
            ["place", ""],
            ["class", "places", 4, "ngIf"],
            [1, "fullscreen", "map-btn", 3, "click"],
            [
              "xmlns",
              "http://www.w3.org/2000/svg",
              "width",
              "16",
              "height",
              "16",
              "fill",
              "currentColor",
              "class",
              "bi bi-fullscreen",
              "viewBox",
              "0 0 16 16",
              4,
              "ngIf",
            ],
            [
              "xmlns",
              "http://www.w3.org/2000/svg",
              "width",
              "16",
              "height",
              "16",
              "fill",
              "currentColor",
              "class",
              "bi bi-fullscreen-exit",
              "viewBox",
              "0 0 16 16",
              4,
              "ngIf",
            ],
            [1, "marker-location"],
            [1, "location"],
            [1, "coordinates"],
            [1, "btn-accent", 3, "click"],
            [1, "places"],
            [4, "ngFor", "ngForOf"],
            [4, "ngIf"],
            [1, "btn", 3, "click"],
            [1, "place"],
            [
              "xmlns",
              "http://www.w3.org/2000/svg",
              "width",
              "16",
              "height",
              "16",
              "fill",
              "currentColor",
              "viewBox",
              "0 0 16 16",
              1,
              "bi",
              "bi-fullscreen",
            ],
            [
              "d",
              "M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z",
            ],
            [
              "xmlns",
              "http://www.w3.org/2000/svg",
              "width",
              "16",
              "height",
              "16",
              "fill",
              "currentColor",
              "viewBox",
              "0 0 16 16",
              1,
              "bi",
              "bi-fullscreen-exit",
            ],
            [
              "d",
              "M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z",
            ],
          ],
          template: function (P, M) {
            if (1 & P) {
              const q = d.EpF();
              d.TgZ(0, "div", 0)(1, "div", 1),
                d._UZ(2, "div", 2),
                d.TgZ(3, "button", 3),
                d.NdJ("click", function () {
                  return M.changeTiles();
                }),
                d.TgZ(4, "span", 4),
                d._uU(5, "satelite view"),
                d.qZA(),
                d.O4$(),
                d.TgZ(6, "svg", 5),
                d._UZ(7, "path", 6)(8, "path", 7),
                d.qZA()(),
                d.kcU(),
                d.TgZ(9, "button", 8),
                d.NdJ("click", function () {
                  return M.detect();
                }),
                d.TgZ(10, "span", 4),
                d._uU(11, "Detect"),
                d.qZA(),
                d.O4$(),
                d.TgZ(12, "svg", 9),
                d._UZ(13, "path", 10),
                d.qZA()(),
                d.kcU(),
                d.TgZ(14, "div", 11)(15, "input", 12, 13),
                d.NdJ("keyup", function () {
                  d.CHM(q);
                  const Y = d.MAs(16);
                  return d.KtG(M.suggestPlace(Y.value));
                }),
                d.qZA(),
                d.YNc(17, w, 2, 1, "div", 14),
                d.qZA(),
                d.TgZ(18, "button", 15),
                d.NdJ("click", function () {
                  return M.toglleScreen();
                }),
                d.YNc(19, S, 2, 0, "svg", 16),
                d.YNc(20, xt, 2, 0, "svg", 17),
                d.qZA(),
                d.TgZ(21, "div", 18)(22, "div", 19)(23, "div"),
                d._uU(24),
                d.qZA(),
                d.TgZ(25, "div", 20)(26, "span"),
                d._uU(27),
                d.qZA(),
                d.TgZ(28, "span"),
                d._uU(29),
                d.qZA()()(),
                d.TgZ(30, "button", 21),
                d.NdJ("click", function () {
                  return M.SubmitUserLocation();
                }),
                d._uU(31, "Submit"),
                d.qZA()()()();
            }
            2 & P &&
              (d.ekj("fullScreen", M.fullscreen),
              d.xp6(3),
              d.ekj("clicked", M.satelite),
              d.xp6(14),
              d.Q6J("ngIf", M.placesArray.length > 0),
              d.xp6(2),
              d.Q6J("ngIf", !M.fullscreen),
              d.xp6(1),
              d.Q6J("ngIf", M.fullscreen),
              d.xp6(4),
              d.Oqu(M.slectedplace),
              d.xp6(3),
              d.hij("lat: ", M.latitude, ""),
              d.xp6(2),
              d.hij("long: ", M.longitude, ""));
          },
          dependencies: [f.sg, f.O5],
          styles: [
            ".map-container[_ngcontent-%COMP%]{width:100%;height:400px;position:relative}.map-container.fullScreen[_ngcontent-%COMP%]{width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:2000}.map-frame[_ngcontent-%COMP%]{width:100%;box-shadow:0 0 15px #0000002d;height:100%}#map[_ngcontent-%COMP%]{width:100%;height:100%}.tooltip[_ngcontent-%COMP%]{display:none;position:absolute;top:50%;left:calc(100% + 3px);transform:translateY(-50%);background-color:var(--app-bg);color:#000;white-space:nowrap;box-shadow:0 0 12px #0003;border-radius:4px;font-size:14px;padding:5px}.map-container[_ngcontent-%COMP%]   .map-btn[_ngcontent-%COMP%]{border:none;outline:none;cursor:pointer;position:absolute;padding:10px;background:var(--app-bg);box-shadow:0 0 15px #0000001a;z-index:500}.map-container[_ngcontent-%COMP%]   .satelite[_ngcontent-%COMP%]{top:50px;left:1rem;border-radius:50%}.map-container[_ngcontent-%COMP%]   .satelite.clicked[_ngcontent-%COMP%]{color:#61c261}.map-container[_ngcontent-%COMP%]   .detector[_ngcontent-%COMP%]{bottom:1rem;left:1rem;color:var(--app-accent);transition:var(--trans-clr);border-radius:50%}.map-container[_ngcontent-%COMP%]   .fullscreen[_ngcontent-%COMP%]{bottom:1.2rem;right:1rem;border-radius:4px;padding:5px}.searchbox[_ngcontent-%COMP%]{width:min(90%,300px);position:absolute;top:1rem;right:1rem;z-index:550;overflow:hidden}.searchbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:none;border:none;box-shadow:0 0 12px #0000001a;border-radius:4px;width:100%;height:32px;padding-inline:10px}.places[_ngcontent-%COMP%]{width:100%;margin-top:10px}.places[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;width:100%;display:flex;align-items:center;background-color:var(--app-bg);color:#000;white-space:nowrap;padding:10px}.places[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid black}.marker-location[_ngcontent-%COMP%]{position:absolute;bottom:1rem;left:50%;display:flex;align-items:center;padding:5px 10px;gap:10px;font-size:14px;line-height:1.2;background-color:var(--app-bg);transform:translate(-50%);border-radius:4px;z-index:500}.location[_ngcontent-%COMP%]   .coordinates[_ngcontent-%COMP%]{font-size:10px}.location[_ngcontent-%COMP%]   .coordinates[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px}.marker-location[_ngcontent-%COMP%]   .btn-accent[_ngcontent-%COMP%]{cursor:pointer;padding:5px 8px;border-radius:4px;font-size:12px}@media (hover: hover){.map-container[_ngcontent-%COMP%]   .detector[_ngcontent-%COMP%]:hover{color:#000}.map-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]{display:block}}",
          ],
        }));
    },
    7086: (ot, G, p) => {
      "use strict";
      p.d(G, { v: () => r });
      var d = p(8274);
      class r {
        constructor() {
          (this.opened = !1), (this.closed = new d.vpe());
        }
        CloseModel() {
          (this.opened = !1), this.closed.emit(this.opened);
        }
      }
      (r.ɵfac = function (u) {
        return new (u || r)();
      }),
        (r.ɵcmp = d.Xpm({
          type: r,
          selectors: [["app-model"]],
          inputs: { opened: "opened" },
          outputs: { closed: "closed" },
          ngContentSelectors: ["*"],
          decls: 6,
          vars: 2,
          consts: [
            [1, "model-container"],
            [1, "model-content"],
            [1, "control"],
            [1, "btn", 3, "click"],
          ],
          template: function (u, f) {
            1 & u &&
              (d.F$t(),
              d.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3),
              d.NdJ("click", function () {
                return f.CloseModel();
              }),
              d._uU(4, "X"),
              d.qZA()(),
              d.Hsn(5),
              d.qZA()()),
              2 & u && d.ekj("hide", !f.opened);
          },
          styles: [
            ".model-container[_ngcontent-%COMP%]{background-color:#00000080;position:fixed;inset:0;display:flex;justify-content:center;align-items:center;z-index:1200}.model-container.hide[_ngcontent-%COMP%]{display:none}.model-content[_ngcontent-%COMP%]{max-width:500px;background-color:var(--app-bg);border-radius:4px;padding:14px;margin-inline:1.25rem;overflow:hidden}.model-content[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]{text-align:right;margin-bottom:10px}.control[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{cursor:pointer;background:transparent;font-size:1.25rem;padding:0 5px}",
          ],
        }));
    },
    3160: (ot, G, p) => {
      "use strict";
      p.d(G, { F: () => o });
      var d = p(8274);
      class o {}
      (o.ɵfac = function (h) {
        return new (h || o)();
      }),
        (o.ɵcmp = d.Xpm({
          type: o,
          selectors: [["app-rest-loading"]],
          decls: 2,
          vars: 0,
          consts: [
            [1, "rest-info"],
            [1, "container"],
          ],
          template: function (h, u) {
            1 & h && (d.TgZ(0, "div", 0), d._UZ(1, "div", 1), d.qZA());
          },
          styles: [
            ".rest-info[_ngcontent-%COMP%]{background-color:var(--secondary);color:var(--app-bg);height:229px}.rest-info[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:flex-start;gap:2.25rem;padding-block:2rem}@media screen and (max-width: 785px){.rest-info[_ngcontent-%COMP%]{background-color:#343434}}",
          ],
        }));
    },
    5066: (ot, G, p) => {
      "use strict";
      p.d(G, { S: () => S });
      var d = p(8407),
        u = (p(7690), p(5698)),
        f = p(262),
        g = p(4004),
        v = p(8274),
        w = p(8447);
      class S {
        constructor(O) {
          this.geolocation$ = O;
        }
        setTilelayer(O, b = "streets") {
          let P = "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}";
          "satelite" == b &&
            (P = "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}");
          const M = d.tileLayer(P, {
            maxZoom: 18,
            minZoom: 3,
            subdomains: ["mt0", "mt1", "mt2", "mt3"],
          });
          return M.addTo(O), M;
        }
        setMarker(O, b = [22.323691, 77.985996]) {
          const P = d.icon({
              className: "custom-marker",
              iconUrl: "assets/images/map-marker.png",
              iconSize: [30, 46],
              iconAnchor: [15, 46],
            }),
            M = d.marker(b, { draggable: !0, icon: P });
          return M.addTo(O), M;
        }
        setStoreMarker(O, b) {
          const P = d.icon({
              className: "custom-marker",
              iconUrl: "assets/images/store.png",
              iconSize: [30, 30],
            }),
            M = d.marker(b, { draggable: !0, icon: P });
          return (
            M.addTo(O),
            M.addEventListener("click", () => {
              O.setZoom(11), O.panTo(b);
            }),
            M
          );
        }
        setCircleMarker(O, b = [22.323691, 77.985996]) {
          const P = d.circleMarker(b, { color: "#fb7e18", radius: 50 });
          return P.addTo(O), P;
        }
        setPolygon(O, b) {
          d.polygon(b, { color: "#fb7e18" }).addTo(O);
        }
        setGeometryDat(O, b) {
          let P = d.geoJSON(b, {});
          P.setStyle({ color: "#fb7e18" }), P.addTo(O);
        }
        getLocation() {
          return this.geolocation$.pipe(
            (0, u.q)(1),
            (0, f.K)((O) => {
              throw O.message;
            }),
            (0, g.U)((O) => new d.LatLng(O.coords.latitude, O.coords.longitude))
          );
        }
        getLeafLatLong(O, b) {
          return new d.LatLng(O, b);
        }
      }
      (S.ɵfac = function (O) {
        return new (O || S)(v.LFG(w._1));
      }),
        (S.ɵprov = v.Yz7({ token: S, factory: S.ɵfac, providedIn: "root" }));
    },
    5568: (ot, G, p) => {
      "use strict";
      p.d(G, { z: () => h });
      var d = p(4004),
        o = p(8274),
        r = p(529);
      class h {
        constructor(f) {
          (this.http = f), (this.endpoint = "https://api.radar.io/v1");
        }
        ReverseLoc(f, g) {
          return this.http.get(
            `${this.endpoint}/geocode/reverse?coordinates=${f},${g}`
          );
        }
        AutoComplete(f) {
          return this.http.get(
            `${this.endpoint}/search/autocomplete?query=${f}&country=IN&limit=5`
          );
        }
        contextGefence(f, g) {
          return this.http.get(
            `${this.endpoint}/context?coordinates=${f},${g}`
          );
        }
        checkUserInRestZone(f, g) {
          return this.http
            .get(`${this.endpoint}/context?coordinates=${f},${g}`)
            .pipe(
              (0, d.U)(
                (v) =>
                  !(
                    !v.context.geofences[0] ||
                    "restaurant" != v.context.geofences[0]?.tag
                  ) && v.context.geofences[0].externalId
              )
            );
        }
      }
      (h.ɵfac = function (f) {
        return new (f || h)(o.LFG(r.eN));
      }),
        (h.ɵprov = o.Yz7({ token: h, factory: h.ɵfac, providedIn: "root" }));
    },
    7690: () => {
      var ot, G, o;
      (ot = window),
        (G = document),
        (L.drawVersion = "1.0.4"),
        (L.Draw = {}),
        (L.drawLocal = {
          draw: {
            toolbar: {
              actions: { title: "Cancel drawing", text: "Cancel" },
              finish: { title: "Finish drawing", text: "Finish" },
              undo: {
                title: "Delete last point drawn",
                text: "Delete last point",
              },
              buttons: {
                polyline: "Draw a polyline",
                polygon: "Draw a polygon",
                rectangle: "Draw a rectangle",
                circle: "Draw a circle",
                marker: "Draw a marker",
                circlemarker: "Draw a circlemarker",
              },
            },
            handlers: {
              circle: {
                tooltip: { start: "Click and drag to draw circle." },
                radius: "Radius",
              },
              circlemarker: {
                tooltip: { start: "Click map to place circle marker." },
              },
              marker: { tooltip: { start: "Click map to place marker." } },
              polygon: {
                tooltip: {
                  start: "Click to start drawing shape.",
                  cont: "Click to continue drawing shape.",
                  end: "Click first point to close this shape.",
                },
              },
              polyline: {
                error: "<strong>Error:</strong> shape edges cannot cross!",
                tooltip: {
                  start: "Click to start drawing line.",
                  cont: "Click to continue drawing line.",
                  end: "Click last point to finish line.",
                },
              },
              rectangle: {
                tooltip: { start: "Click and drag to draw rectangle." },
              },
              simpleshape: {
                tooltip: { end: "Release mouse to finish drawing." },
              },
            },
          },
          edit: {
            toolbar: {
              actions: {
                save: { title: "Save changes", text: "Save" },
                cancel: {
                  title: "Cancel editing, discards all changes",
                  text: "Cancel",
                },
                clearAll: { title: "Clear all layers", text: "Clear All" },
              },
              buttons: {
                edit: "Edit layers",
                editDisabled: "No layers to edit",
                remove: "Delete layers",
                removeDisabled: "No layers to delete",
              },
            },
            handlers: {
              edit: {
                tooltip: {
                  text: "Drag handles or markers to edit features.",
                  subtext: "Click cancel to undo changes.",
                },
              },
              remove: { tooltip: { text: "Click on a feature to remove." } },
            },
          },
        }),
        (L.Draw.Event = {}),
        (L.Draw.Event.CREATED = "draw:created"),
        (L.Draw.Event.EDITED = "draw:edited"),
        (L.Draw.Event.DELETED = "draw:deleted"),
        (L.Draw.Event.DRAWSTART = "draw:drawstart"),
        (L.Draw.Event.DRAWSTOP = "draw:drawstop"),
        (L.Draw.Event.DRAWVERTEX = "draw:drawvertex"),
        (L.Draw.Event.EDITSTART = "draw:editstart"),
        (L.Draw.Event.EDITMOVE = "draw:editmove"),
        (L.Draw.Event.EDITRESIZE = "draw:editresize"),
        (L.Draw.Event.EDITVERTEX = "draw:editvertex"),
        (L.Draw.Event.EDITSTOP = "draw:editstop"),
        (L.Draw.Event.DELETESTART = "draw:deletestart"),
        (L.Draw.Event.DELETESTOP = "draw:deletestop"),
        (L.Draw.Event.TOOLBAROPENED = "draw:toolbaropened"),
        (L.Draw.Event.TOOLBARCLOSED = "draw:toolbarclosed"),
        (L.Draw.Event.MARKERCONTEXT = "draw:markercontext"),
        (L.Draw = L.Draw || {}),
        (L.Draw.Feature = L.Handler.extend({
          initialize: function (o, r) {
            (this._map = o),
              (this._container = o._container),
              (this._overlayPane = o._panes.overlayPane),
              (this._popupPane = o._panes.popupPane),
              r &&
                r.shapeOptions &&
                (r.shapeOptions = L.Util.extend(
                  {},
                  this.options.shapeOptions,
                  r.shapeOptions
                )),
              L.setOptions(this, r);
            var h = L.version.split(".");
            1 === parseInt(h[0], 10) && parseInt(h[1], 10) >= 2
              ? L.Draw.Feature.include(L.Evented.prototype)
              : L.Draw.Feature.include(L.Mixin.Events);
          },
          enable: function () {
            this._enabled ||
              (L.Handler.prototype.enable.call(this),
              this.fire("enabled", { handler: this.type }),
              this._map.fire(L.Draw.Event.DRAWSTART, { layerType: this.type }));
          },
          disable: function () {
            this._enabled &&
              (L.Handler.prototype.disable.call(this),
              this._map.fire(L.Draw.Event.DRAWSTOP, { layerType: this.type }),
              this.fire("disabled", { handler: this.type }));
          },
          addHooks: function () {
            var o = this._map;
            o &&
              (L.DomUtil.disableTextSelection(),
              o.getContainer().focus(),
              (this._tooltip = new L.Draw.Tooltip(this._map)),
              L.DomEvent.on(
                this._container,
                "keyup",
                this._cancelDrawing,
                this
              ));
          },
          removeHooks: function () {
            this._map &&
              (L.DomUtil.enableTextSelection(),
              this._tooltip.dispose(),
              (this._tooltip = null),
              L.DomEvent.off(
                this._container,
                "keyup",
                this._cancelDrawing,
                this
              ));
          },
          setOptions: function (o) {
            L.setOptions(this, o);
          },
          _fireCreatedEvent: function (o) {
            this._map.fire(L.Draw.Event.CREATED, {
              layer: o,
              layerType: this.type,
            });
          },
          _cancelDrawing: function (o) {
            27 === o.keyCode &&
              (this._map.fire("draw:canceled", { layerType: this.type }),
              this.disable());
          },
        })),
        (L.Draw.Polyline = L.Draw.Feature.extend({
          statics: { TYPE: "polyline" },
          Poly: L.Polyline,
          options: {
            allowIntersection: !0,
            repeatMode: !1,
            drawError: { color: "#b00b00", timeout: 2500 },
            icon: new L.DivIcon({
              iconSize: new L.Point(8, 8),
              className: "leaflet-div-icon leaflet-editing-icon",
            }),
            touchIcon: new L.DivIcon({
              iconSize: new L.Point(20, 20),
              className:
                "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon",
            }),
            guidelineDistance: 20,
            maxGuideLineLength: 4e3,
            shapeOptions: {
              stroke: !0,
              color: "#3388ff",
              weight: 4,
              opacity: 0.5,
              fill: !1,
              clickable: !0,
            },
            metric: !0,
            feet: !0,
            nautic: !1,
            showLength: !0,
            zIndexOffset: 2e3,
            factor: 1,
            maxPoints: 0,
          },
          initialize: function (o, r) {
            L.Browser.touch && (this.options.icon = this.options.touchIcon),
              (this.options.drawError.message =
                L.drawLocal.draw.handlers.polyline.error),
              r &&
                r.drawError &&
                (r.drawError = L.Util.extend(
                  {},
                  this.options.drawError,
                  r.drawError
                )),
              (this.type = L.Draw.Polyline.TYPE),
              L.Draw.Feature.prototype.initialize.call(this, o, r);
          },
          addHooks: function () {
            L.Draw.Feature.prototype.addHooks.call(this),
              this._map &&
                ((this._markers = []),
                (this._markerGroup = new L.LayerGroup()),
                this._map.addLayer(this._markerGroup),
                (this._poly = new L.Polyline([], this.options.shapeOptions)),
                this._tooltip.updateContent(this._getTooltipText()),
                this._mouseMarker ||
                  (this._mouseMarker = L.marker(this._map.getCenter(), {
                    icon: L.divIcon({
                      className: "leaflet-mouse-marker",
                      iconAnchor: [20, 20],
                      iconSize: [40, 40],
                    }),
                    opacity: 0,
                    zIndexOffset: this.options.zIndexOffset,
                  })),
                this._mouseMarker
                  .on("mouseout", this._onMouseOut, this)
                  .on("mousemove", this._onMouseMove, this)
                  .on("mousedown", this._onMouseDown, this)
                  .on("mouseup", this._onMouseUp, this)
                  .addTo(this._map),
                this._map
                  .on("mouseup", this._onMouseUp, this)
                  .on("mousemove", this._onMouseMove, this)
                  .on("zoomlevelschange", this._onZoomEnd, this)
                  .on("touchstart", this._onTouch, this)
                  .on("zoomend", this._onZoomEnd, this));
          },
          removeHooks: function () {
            L.Draw.Feature.prototype.removeHooks.call(this),
              this._clearHideErrorTimeout(),
              this._cleanUpShape(),
              this._map.removeLayer(this._markerGroup),
              delete this._markerGroup,
              delete this._markers,
              this._map.removeLayer(this._poly),
              delete this._poly,
              this._mouseMarker
                .off("mousedown", this._onMouseDown, this)
                .off("mouseout", this._onMouseOut, this)
                .off("mouseup", this._onMouseUp, this)
                .off("mousemove", this._onMouseMove, this),
              this._map.removeLayer(this._mouseMarker),
              delete this._mouseMarker,
              this._clearGuides(),
              this._map
                .off("mouseup", this._onMouseUp, this)
                .off("mousemove", this._onMouseMove, this)
                .off("zoomlevelschange", this._onZoomEnd, this)
                .off("zoomend", this._onZoomEnd, this)
                .off("touchstart", this._onTouch, this)
                .off("click", this._onTouch, this);
          },
          deleteLastVertex: function () {
            if (!(this._markers.length <= 1)) {
              var o = this._markers.pop(),
                r = this._poly,
                h = r.getLatLngs(),
                u = h.splice(-1, 1)[0];
              this._poly.setLatLngs(h),
                this._markerGroup.removeLayer(o),
                r.getLatLngs().length < 2 && this._map.removeLayer(r),
                this._vertexChanged(u, !1);
            }
          },
          addVertex: function (o) {
            this._markers.length >= 2 &&
            !this.options.allowIntersection &&
            this._poly.newLatLngIntersects(o)
              ? this._showErrorTooltip()
              : (this._errorShown && this._hideErrorTooltip(),
                this._markers.push(this._createMarker(o)),
                this._poly.addLatLng(o),
                2 === this._poly.getLatLngs().length &&
                  this._map.addLayer(this._poly),
                this._vertexChanged(o, !0));
          },
          completeShape: function () {
            this._markers.length <= 1 ||
              !this._shapeIsValid() ||
              (this._fireCreatedEvent(),
              this.disable(),
              this.options.repeatMode && this.enable());
          },
          _finishShape: function () {
            var o = this._poly._defaultShape
                ? this._poly._defaultShape()
                : this._poly.getLatLngs(),
              r = this._poly.newLatLngIntersects(o[o.length - 1]);
            (!this.options.allowIntersection && r) || !this._shapeIsValid()
              ? this._showErrorTooltip()
              : (this._fireCreatedEvent(),
                this.disable(),
                this.options.repeatMode && this.enable());
          },
          _shapeIsValid: function () {
            return !0;
          },
          _onZoomEnd: function () {
            null !== this._markers && this._updateGuide();
          },
          _onMouseMove: function (o) {
            var r = this._map.mouseEventToLayerPoint(o.originalEvent),
              h = this._map.layerPointToLatLng(r);
            (this._currentLatLng = h),
              this._updateTooltip(h),
              this._updateGuide(r),
              this._mouseMarker.setLatLng(h),
              L.DomEvent.preventDefault(o.originalEvent);
          },
          _vertexChanged: function (o, r) {
            this._map.fire(L.Draw.Event.DRAWVERTEX, {
              layers: this._markerGroup,
            }),
              this._updateFinishHandler(),
              this._updateRunningMeasure(o, r),
              this._clearGuides(),
              this._updateTooltip();
          },
          _onMouseDown: function (o) {
            if (
              !this._clickHandled &&
              !this._touchHandled &&
              !this._disableMarkers
            ) {
              this._onMouseMove(o),
                (this._clickHandled = !0),
                this._disableNewMarkers();
              var r = o.originalEvent;
              this._startPoint.call(this, r.clientX, r.clientY);
            }
          },
          _startPoint: function (o, r) {
            this._mouseDownOrigin = L.point(o, r);
          },
          _onMouseUp: function (o) {
            var r = o.originalEvent;
            this._endPoint.call(this, r.clientX, r.clientY, o),
              (this._clickHandled = null);
          },
          _endPoint: function (o, r, h) {
            if (this._mouseDownOrigin) {
              var u = L.point(o, r).distanceTo(this._mouseDownOrigin),
                f = this._calculateFinishDistance(h.latlng);
              this.options.maxPoints > 1 &&
              this.options.maxPoints == this._markers.length + 1
                ? (this.addVertex(h.latlng), this._finishShape())
                : f < 10 && L.Browser.touch
                ? this._finishShape()
                : Math.abs(u) < 9 * (ot.devicePixelRatio || 1) &&
                  this.addVertex(h.latlng),
                this._enableNewMarkers();
            }
            this._mouseDownOrigin = null;
          },
          _onTouch: function (o) {
            var r,
              h,
              u = o.originalEvent;
            !u.touches ||
              !u.touches[0] ||
              this._clickHandled ||
              this._touchHandled ||
              this._disableMarkers ||
              ((r = u.touches[0].clientX),
              (h = u.touches[0].clientY),
              this._disableNewMarkers(),
              (this._touchHandled = !0),
              this._startPoint.call(this, r, h),
              this._endPoint.call(this, r, h, o),
              (this._touchHandled = null)),
              (this._clickHandled = null);
          },
          _onMouseOut: function () {
            this._tooltip && this._tooltip._onMouseOut.call(this._tooltip);
          },
          _calculateFinishDistance: function (o) {
            var r;
            if (this._markers.length > 0) {
              var h;
              if (this.type === L.Draw.Polyline.TYPE)
                h = this._markers[this._markers.length - 1];
              else {
                if (this.type !== L.Draw.Polygon.TYPE) return 1 / 0;
                h = this._markers[0];
              }
              var u = this._map.latLngToContainerPoint(h.getLatLng()),
                f = new L.Marker(o, {
                  icon: this.options.icon,
                  zIndexOffset: 2 * this.options.zIndexOffset,
                }),
                g = this._map.latLngToContainerPoint(f.getLatLng());
              r = u.distanceTo(g);
            } else r = 1 / 0;
            return r;
          },
          _updateFinishHandler: function () {
            var o = this._markers.length;
            o > 1 && this._markers[o - 1].on("click", this._finishShape, this),
              o > 2 &&
                this._markers[o - 2].off("click", this._finishShape, this);
          },
          _createMarker: function (o) {
            var r = new L.Marker(o, {
              icon: this.options.icon,
              zIndexOffset: 2 * this.options.zIndexOffset,
            });
            return this._markerGroup.addLayer(r), r;
          },
          _updateGuide: function (o) {
            var r = this._markers ? this._markers.length : 0;
            r > 0 &&
              ((o = o || this._map.latLngToLayerPoint(this._currentLatLng)),
              this._clearGuides(),
              this._drawGuide(
                this._map.latLngToLayerPoint(this._markers[r - 1].getLatLng()),
                o
              ));
          },
          _updateTooltip: function (o) {
            var r = this._getTooltipText();
            o && this._tooltip.updatePosition(o),
              this._errorShown || this._tooltip.updateContent(r);
          },
          _drawGuide: function (o, r) {
            var h,
              u,
              f,
              g = Math.floor(
                Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2))
              ),
              w = this.options.maxGuideLineLength,
              S = g > w ? g - w : this.options.guidelineDistance;
            for (
              this._guidesContainer ||
              (this._guidesContainer = L.DomUtil.create(
                "div",
                "leaflet-draw-guides",
                this._overlayPane
              ));
              S < g;
              S += this.options.guidelineDistance
            )
              (h = S / g),
                (u = {
                  x: Math.floor(o.x * (1 - h) + h * r.x),
                  y: Math.floor(o.y * (1 - h) + h * r.y),
                }),
                ((f = L.DomUtil.create(
                  "div",
                  "leaflet-draw-guide-dash",
                  this._guidesContainer
                )).style.backgroundColor = this._errorShown
                  ? this.options.drawError.color
                  : this.options.shapeOptions.color),
                L.DomUtil.setPosition(f, u);
          },
          _updateGuideColor: function (o) {
            if (this._guidesContainer)
              for (
                var r = 0, h = this._guidesContainer.childNodes.length;
                r < h;
                r++
              )
                this._guidesContainer.childNodes[r].style.backgroundColor = o;
          },
          _clearGuides: function () {
            if (this._guidesContainer)
              for (; this._guidesContainer.firstChild; )
                this._guidesContainer.removeChild(
                  this._guidesContainer.firstChild
                );
          },
          _getTooltipText: function () {
            var o, r;
            return (
              0 === this._markers.length
                ? (o = {
                    text: L.drawLocal.draw.handlers.polyline.tooltip.start,
                  })
                : ((r = this.options.showLength
                    ? this._getMeasurementString()
                    : ""),
                  (o =
                    1 === this._markers.length
                      ? {
                          text: L.drawLocal.draw.handlers.polyline.tooltip.cont,
                          subtext: r,
                        }
                      : {
                          text: L.drawLocal.draw.handlers.polyline.tooltip.end,
                          subtext: r,
                        })),
              o
            );
          },
          _updateRunningMeasure: function (o, r) {
            var h,
              u,
              f = this._markers.length;
            1 === this._markers.length
              ? (this._measurementRunningTotal = 0)
              : ((h = f - (r ? 2 : 1)),
                (u = L.GeometryUtil.isVersion07x()
                  ? o.distanceTo(this._markers[h].getLatLng()) *
                    (this.options.factor || 1)
                  : this._map.distance(o, this._markers[h].getLatLng()) *
                    (this.options.factor || 1)),
                (this._measurementRunningTotal += u * (r ? 1 : -1)));
          },
          _getMeasurementString: function () {
            var o,
              r = this._currentLatLng,
              h = this._markers[this._markers.length - 1].getLatLng();
            return (
              (o = L.GeometryUtil.isVersion07x()
                ? h && r && r.distanceTo
                  ? this._measurementRunningTotal +
                    r.distanceTo(h) * (this.options.factor || 1)
                  : this._measurementRunningTotal || 0
                : h && r
                ? this._measurementRunningTotal +
                  this._map.distance(r, h) * (this.options.factor || 1)
                : this._measurementRunningTotal || 0),
              L.GeometryUtil.readableDistance(
                o,
                this.options.metric,
                this.options.feet,
                this.options.nautic,
                this.options.precision
              )
            );
          },
          _showErrorTooltip: function () {
            (this._errorShown = !0),
              this._tooltip
                .showAsError()
                .updateContent({ text: this.options.drawError.message }),
              this._updateGuideColor(this.options.drawError.color),
              this._poly.setStyle({ color: this.options.drawError.color }),
              this._clearHideErrorTimeout(),
              (this._hideErrorTimeout = setTimeout(
                L.Util.bind(this._hideErrorTooltip, this),
                this.options.drawError.timeout
              ));
          },
          _hideErrorTooltip: function () {
            (this._errorShown = !1),
              this._clearHideErrorTimeout(),
              this._tooltip.removeError().updateContent(this._getTooltipText()),
              this._updateGuideColor(this.options.shapeOptions.color),
              this._poly.setStyle({ color: this.options.shapeOptions.color });
          },
          _clearHideErrorTimeout: function () {
            this._hideErrorTimeout &&
              (clearTimeout(this._hideErrorTimeout),
              (this._hideErrorTimeout = null));
          },
          _disableNewMarkers: function () {
            this._disableMarkers = !0;
          },
          _enableNewMarkers: function () {
            setTimeout(
              function () {
                this._disableMarkers = !1;
              }.bind(this),
              50
            );
          },
          _cleanUpShape: function () {
            this._markers.length > 1 &&
              this._markers[this._markers.length - 1].off(
                "click",
                this._finishShape,
                this
              );
          },
          _fireCreatedEvent: function () {
            var o = new this.Poly(
              this._poly.getLatLngs(),
              this.options.shapeOptions
            );
            L.Draw.Feature.prototype._fireCreatedEvent.call(this, o);
          },
        })),
        (L.Draw.Polygon = L.Draw.Polyline.extend({
          statics: { TYPE: "polygon" },
          Poly: L.Polygon,
          options: {
            showArea: !1,
            showLength: !1,
            shapeOptions: {
              stroke: !0,
              color: "#3388ff",
              weight: 4,
              opacity: 0.5,
              fill: !0,
              fillColor: null,
              fillOpacity: 0.2,
              clickable: !0,
            },
            metric: !0,
            feet: !0,
            nautic: !1,
            precision: {},
          },
          initialize: function (o, r) {
            L.Draw.Polyline.prototype.initialize.call(this, o, r),
              (this.type = L.Draw.Polygon.TYPE);
          },
          _updateFinishHandler: function () {
            var o = this._markers.length;
            1 === o && this._markers[0].on("click", this._finishShape, this),
              o > 2 &&
                (this._markers[o - 1].on("dblclick", this._finishShape, this),
                o > 3 &&
                  this._markers[o - 2].off(
                    "dblclick",
                    this._finishShape,
                    this
                  ));
          },
          _getTooltipText: function () {
            var o, r;
            return (
              0 === this._markers.length
                ? (o = L.drawLocal.draw.handlers.polygon.tooltip.start)
                : this._markers.length < 3
                ? ((o = L.drawLocal.draw.handlers.polygon.tooltip.cont),
                  (r = this._getMeasurementString()))
                : ((o = L.drawLocal.draw.handlers.polygon.tooltip.end),
                  (r = this._getMeasurementString())),
              { text: o, subtext: r }
            );
          },
          _getMeasurementString: function () {
            var o = this._area,
              r = "";
            return o || this.options.showLength
              ? (this.options.showLength &&
                  (r =
                    L.Draw.Polyline.prototype._getMeasurementString.call(this)),
                o &&
                  (r +=
                    "<br>" +
                    L.GeometryUtil.readableArea(
                      o,
                      this.options.metric,
                      this.options.precision
                    )),
                r)
              : null;
          },
          _shapeIsValid: function () {
            return this._markers.length >= 3;
          },
          _vertexChanged: function (o, r) {
            var h;
            !this.options.allowIntersection &&
              this.options.showArea &&
              ((h = this._poly.getLatLngs()),
              (this._area = L.GeometryUtil.geodesicArea(h))),
              L.Draw.Polyline.prototype._vertexChanged.call(this, o, r);
          },
          _cleanUpShape: function () {
            var o = this._markers.length;
            o > 0 &&
              (this._markers[0].off("click", this._finishShape, this),
              o > 2 &&
                this._markers[o - 1].off("dblclick", this._finishShape, this));
          },
        })),
        (L.SimpleShape = {}),
        (L.Draw.SimpleShape = L.Draw.Feature.extend({
          options: { repeatMode: !1 },
          initialize: function (o, r) {
            (this._endLabelText =
              L.drawLocal.draw.handlers.simpleshape.tooltip.end),
              L.Draw.Feature.prototype.initialize.call(this, o, r);
          },
          addHooks: function () {
            L.Draw.Feature.prototype.addHooks.call(this),
              this._map &&
                ((this._mapDraggable = this._map.dragging.enabled()),
                this._mapDraggable && this._map.dragging.disable(),
                (this._container.style.cursor = "crosshair"),
                this._tooltip.updateContent({ text: this._initialLabelText }),
                this._map
                  .on("mousedown", this._onMouseDown, this)
                  .on("mousemove", this._onMouseMove, this)
                  .on("touchstart", this._onMouseDown, this)
                  .on("touchmove", this._onMouseMove, this),
                G.addEventListener("touchstart", L.DomEvent.preventDefault, {
                  passive: !1,
                }));
          },
          removeHooks: function () {
            L.Draw.Feature.prototype.removeHooks.call(this),
              this._map &&
                (this._mapDraggable && this._map.dragging.enable(),
                (this._container.style.cursor = ""),
                this._map
                  .off("mousedown", this._onMouseDown, this)
                  .off("mousemove", this._onMouseMove, this)
                  .off("touchstart", this._onMouseDown, this)
                  .off("touchmove", this._onMouseMove, this),
                L.DomEvent.off(G, "mouseup", this._onMouseUp, this),
                L.DomEvent.off(G, "touchend", this._onMouseUp, this),
                G.removeEventListener("touchstart", L.DomEvent.preventDefault),
                this._shape &&
                  (this._map.removeLayer(this._shape), delete this._shape)),
              (this._isDrawing = !1);
          },
          _getTooltipText: function () {
            return { text: this._endLabelText };
          },
          _onMouseDown: function (o) {
            (this._isDrawing = !0),
              (this._startLatLng = o.latlng),
              L.DomEvent.on(G, "mouseup", this._onMouseUp, this)
                .on(G, "touchend", this._onMouseUp, this)
                .preventDefault(o.originalEvent);
          },
          _onMouseMove: function (o) {
            var r = o.latlng;
            this._tooltip.updatePosition(r),
              this._isDrawing &&
                (this._tooltip.updateContent(this._getTooltipText()),
                this._drawShape(r));
          },
          _onMouseUp: function () {
            this._shape && this._fireCreatedEvent(),
              this.disable(),
              this.options.repeatMode && this.enable();
          },
        })),
        (L.Draw.Rectangle = L.Draw.SimpleShape.extend({
          statics: { TYPE: "rectangle" },
          options: {
            shapeOptions: {
              stroke: !0,
              color: "#3388ff",
              weight: 4,
              opacity: 0.5,
              fill: !0,
              fillColor: null,
              fillOpacity: 0.2,
              clickable: !0,
            },
            showArea: !0,
            metric: !0,
          },
          initialize: function (o, r) {
            (this.type = L.Draw.Rectangle.TYPE),
              (this._initialLabelText =
                L.drawLocal.draw.handlers.rectangle.tooltip.start),
              L.Draw.SimpleShape.prototype.initialize.call(this, o, r);
          },
          disable: function () {
            this._enabled &&
              ((this._isCurrentlyTwoClickDrawing = !1),
              L.Draw.SimpleShape.prototype.disable.call(this));
          },
          _onMouseUp: function (o) {
            this._shape || this._isCurrentlyTwoClickDrawing
              ? (this._isCurrentlyTwoClickDrawing &&
                  !(function d(o, r) {
                    for (; (o = o.parentElement) && !o.classList.contains(r); );
                    return o;
                  })(o.target, "leaflet-pane")) ||
                L.Draw.SimpleShape.prototype._onMouseUp.call(this)
              : (this._isCurrentlyTwoClickDrawing = !0);
          },
          _drawShape: function (o) {
            this._shape
              ? this._shape.setBounds(new L.LatLngBounds(this._startLatLng, o))
              : ((this._shape = new L.Rectangle(
                  new L.LatLngBounds(this._startLatLng, o),
                  this.options.shapeOptions
                )),
                this._map.addLayer(this._shape));
          },
          _fireCreatedEvent: function () {
            var o = new L.Rectangle(
              this._shape.getBounds(),
              this.options.shapeOptions
            );
            L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, o);
          },
          _getTooltipText: function () {
            var o,
              r,
              h,
              u = L.Draw.SimpleShape.prototype._getTooltipText.call(this),
              g = this.options.showArea;
            return (
              this._shape &&
                ((o = this._shape._defaultShape
                  ? this._shape._defaultShape()
                  : this._shape.getLatLngs()),
                (r = L.GeometryUtil.geodesicArea(o)),
                (h = g
                  ? L.GeometryUtil.readableArea(r, this.options.metric)
                  : "")),
              { text: u.text, subtext: h }
            );
          },
        })),
        (L.Draw.Marker = L.Draw.Feature.extend({
          statics: { TYPE: "marker" },
          options: {
            icon: new L.Icon.Default(),
            repeatMode: !1,
            zIndexOffset: 2e3,
          },
          initialize: function (o, r) {
            (this.type = L.Draw.Marker.TYPE),
              (this._initialLabelText =
                L.drawLocal.draw.handlers.marker.tooltip.start),
              L.Draw.Feature.prototype.initialize.call(this, o, r);
          },
          addHooks: function () {
            L.Draw.Feature.prototype.addHooks.call(this),
              this._map &&
                (this._tooltip.updateContent({ text: this._initialLabelText }),
                this._mouseMarker ||
                  (this._mouseMarker = L.marker(this._map.getCenter(), {
                    icon: L.divIcon({
                      className: "leaflet-mouse-marker",
                      iconAnchor: [20, 20],
                      iconSize: [40, 40],
                    }),
                    opacity: 0,
                    zIndexOffset: this.options.zIndexOffset,
                  })),
                this._mouseMarker
                  .on("click", this._onClick, this)
                  .addTo(this._map),
                this._map.on("mousemove", this._onMouseMove, this),
                this._map.on("click", this._onTouch, this));
          },
          removeHooks: function () {
            L.Draw.Feature.prototype.removeHooks.call(this),
              this._map &&
                (this._map
                  .off("click", this._onClick, this)
                  .off("click", this._onTouch, this),
                this._marker &&
                  (this._marker.off("click", this._onClick, this),
                  this._map.removeLayer(this._marker),
                  delete this._marker),
                this._mouseMarker.off("click", this._onClick, this),
                this._map.removeLayer(this._mouseMarker),
                delete this._mouseMarker,
                this._map.off("mousemove", this._onMouseMove, this));
          },
          _onMouseMove: function (o) {
            var r = o.latlng;
            this._tooltip.updatePosition(r),
              this._mouseMarker.setLatLng(r),
              this._marker
                ? ((r = this._mouseMarker.getLatLng()),
                  this._marker.setLatLng(r))
                : ((this._marker = this._createMarker(r)),
                  this._marker.on("click", this._onClick, this),
                  this._map
                    .on("click", this._onClick, this)
                    .addLayer(this._marker));
          },
          _createMarker: function (o) {
            return new L.Marker(o, {
              icon: this.options.icon,
              zIndexOffset: this.options.zIndexOffset,
            });
          },
          _onClick: function () {
            this._fireCreatedEvent(),
              this.disable(),
              this.options.repeatMode && this.enable();
          },
          _onTouch: function (o) {
            this._onMouseMove(o), this._onClick();
          },
          _fireCreatedEvent: function () {
            var o = new L.Marker.Touch(this._marker.getLatLng(), {
              icon: this.options.icon,
            });
            L.Draw.Feature.prototype._fireCreatedEvent.call(this, o);
          },
        })),
        (L.Draw.CircleMarker = L.Draw.Marker.extend({
          statics: { TYPE: "circlemarker" },
          options: {
            stroke: !0,
            color: "#3388ff",
            weight: 4,
            opacity: 0.5,
            fill: !0,
            fillColor: null,
            fillOpacity: 0.2,
            clickable: !0,
            zIndexOffset: 2e3,
          },
          initialize: function (o, r) {
            (this.type = L.Draw.CircleMarker.TYPE),
              (this._initialLabelText =
                L.drawLocal.draw.handlers.circlemarker.tooltip.start),
              L.Draw.Feature.prototype.initialize.call(this, o, r);
          },
          _fireCreatedEvent: function () {
            var o = new L.CircleMarker(this._marker.getLatLng(), this.options);
            L.Draw.Feature.prototype._fireCreatedEvent.call(this, o);
          },
          _createMarker: function (o) {
            return new L.CircleMarker(o, this.options);
          },
        })),
        (L.Draw.Circle = L.Draw.SimpleShape.extend({
          statics: { TYPE: "circle" },
          options: {
            shapeOptions: {
              stroke: !0,
              color: "#3388ff",
              weight: 4,
              opacity: 0.5,
              fill: !0,
              fillColor: null,
              fillOpacity: 0.2,
              clickable: !0,
            },
            showRadius: !0,
            metric: !0,
            feet: !0,
            nautic: !1,
          },
          initialize: function (o, r) {
            (this.type = L.Draw.Circle.TYPE),
              (this._initialLabelText =
                L.drawLocal.draw.handlers.circle.tooltip.start),
              L.Draw.SimpleShape.prototype.initialize.call(this, o, r);
          },
          _drawShape: function (o) {
            if (L.GeometryUtil.isVersion07x())
              var r = this._startLatLng.distanceTo(o);
            else r = this._map.distance(this._startLatLng, o);
            this._shape
              ? this._shape.setRadius(r)
              : ((this._shape = new L.Circle(
                  this._startLatLng,
                  r,
                  this.options.shapeOptions
                )),
                this._map.addLayer(this._shape));
          },
          _fireCreatedEvent: function () {
            var o = new L.Circle(
              this._startLatLng,
              this._shape.getRadius(),
              this.options.shapeOptions
            );
            L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, o);
          },
          _onMouseMove: function (o) {
            var r,
              h = o.latlng,
              u = this.options.showRadius,
              f = this.options.metric;
            if ((this._tooltip.updatePosition(h), this._isDrawing)) {
              this._drawShape(h), (r = this._shape.getRadius().toFixed(1));
              var g = "";
              u &&
                (g =
                  L.drawLocal.draw.handlers.circle.radius +
                  ": " +
                  L.GeometryUtil.readableDistance(
                    r,
                    f,
                    this.options.feet,
                    this.options.nautic
                  )),
                this._tooltip.updateContent({
                  text: this._endLabelText,
                  subtext: g,
                });
            }
          },
        })),
        (L.Edit = L.Edit || {}),
        (L.Edit.Marker = L.Handler.extend({
          initialize: function (o, r) {
            (this._marker = o), L.setOptions(this, r);
          },
          addHooks: function () {
            var o = this._marker;
            o.dragging.enable(),
              o.on("dragend", this._onDragEnd, o),
              this._toggleMarkerHighlight();
          },
          removeHooks: function () {
            var o = this._marker;
            o.dragging.disable(),
              o.off("dragend", this._onDragEnd, o),
              this._toggleMarkerHighlight();
          },
          _onDragEnd: function (o) {
            var r = o.target;
            (r.edited = !0),
              this._map.fire(L.Draw.Event.EDITMOVE, { layer: r });
          },
          _toggleMarkerHighlight: function () {
            var o = this._marker._icon;
            o &&
              ((o.style.display = "none"),
              L.DomUtil.hasClass(o, "leaflet-edit-marker-selected")
                ? (L.DomUtil.removeClass(o, "leaflet-edit-marker-selected"),
                  this._offsetMarker(o, -4))
                : (L.DomUtil.addClass(o, "leaflet-edit-marker-selected"),
                  this._offsetMarker(o, 4)),
              (o.style.display = ""));
          },
          _offsetMarker: function (o, r) {
            var h = parseInt(o.style.marginTop, 10) - r,
              u = parseInt(o.style.marginLeft, 10) - r;
            (o.style.marginTop = h + "px"), (o.style.marginLeft = u + "px");
          },
        })),
        L.Marker.addInitHook(function () {
          L.Edit.Marker &&
            ((this.editing = new L.Edit.Marker(this)),
            this.options.editable && this.editing.enable());
        }),
        (L.Edit = L.Edit || {}),
        (L.Edit.Poly = L.Handler.extend({
          initialize: function (o) {
            (this.latlngs = [o._latlngs]),
              o._holes && (this.latlngs = this.latlngs.concat(o._holes)),
              (this._poly = o),
              this._poly.on("revert-edited", this._updateLatLngs, this);
          },
          _defaultShape: function () {
            return L.Polyline._flat
              ? L.Polyline._flat(this._poly._latlngs)
                ? this._poly._latlngs
                : this._poly._latlngs[0]
              : this._poly._latlngs;
          },
          _eachVertexHandler: function (o) {
            for (var r = 0; r < this._verticesHandlers.length; r++)
              o(this._verticesHandlers[r]);
          },
          addHooks: function () {
            this._initHandlers(),
              this._eachVertexHandler(function (o) {
                o.addHooks();
              });
          },
          removeHooks: function () {
            this._eachVertexHandler(function (o) {
              o.removeHooks();
            });
          },
          updateMarkers: function () {
            this._eachVertexHandler(function (o) {
              o.updateMarkers();
            });
          },
          _initHandlers: function () {
            this._verticesHandlers = [];
            for (var o = 0; o < this.latlngs.length; o++)
              this._verticesHandlers.push(
                new L.Edit.PolyVerticesEdit(
                  this._poly,
                  this.latlngs[o],
                  this._poly.options.poly
                )
              );
          },
          _updateLatLngs: function (o) {
            (this.latlngs = [o.layer._latlngs]),
              o.layer._holes &&
                (this.latlngs = this.latlngs.concat(o.layer._holes));
          },
        })),
        (L.Edit.PolyVerticesEdit = L.Handler.extend({
          options: {
            icon: new L.DivIcon({
              iconSize: new L.Point(8, 8),
              className: "leaflet-div-icon leaflet-editing-icon",
            }),
            touchIcon: new L.DivIcon({
              iconSize: new L.Point(20, 20),
              className:
                "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon",
            }),
            drawError: { color: "#b00b00", timeout: 1e3 },
          },
          initialize: function (o, r, h) {
            L.Browser.touch && (this.options.icon = this.options.touchIcon),
              (this._poly = o),
              h &&
                h.drawError &&
                (h.drawError = L.Util.extend(
                  {},
                  this.options.drawError,
                  h.drawError
                )),
              (this._latlngs = r),
              L.setOptions(this, h);
          },
          _defaultShape: function () {
            return L.Polyline._flat
              ? L.Polyline._flat(this._latlngs)
                ? this._latlngs
                : this._latlngs[0]
              : this._latlngs;
          },
          addHooks: function () {
            var o = this._poly,
              r = o._path;
            o instanceof L.Polygon ||
              ((o.options.fill = !1),
              o.options.editing && (o.options.editing.fill = !1)),
              r &&
                o.options.editing &&
                o.options.editing.className &&
                (o.options.original.className &&
                  o.options.original.className.split(" ").forEach(function (h) {
                    L.DomUtil.removeClass(r, h);
                  }),
                o.options.editing.className.split(" ").forEach(function (h) {
                  L.DomUtil.addClass(r, h);
                })),
              o.setStyle(o.options.editing),
              this._poly._map &&
                ((this._map = this._poly._map),
                this._markerGroup || this._initMarkers(),
                this._poly._map.addLayer(this._markerGroup));
          },
          removeHooks: function () {
            var o = this._poly,
              r = o._path;
            r &&
              o.options.editing &&
              o.options.editing.className &&
              (o.options.editing.className.split(" ").forEach(function (h) {
                L.DomUtil.removeClass(r, h);
              }),
              o.options.original.className &&
                o.options.original.className.split(" ").forEach(function (h) {
                  L.DomUtil.addClass(r, h);
                })),
              o.setStyle(o.options.original),
              o._map &&
                (o._map.removeLayer(this._markerGroup),
                delete this._markerGroup,
                delete this._markers);
          },
          updateMarkers: function () {
            this._markerGroup.clearLayers(), this._initMarkers();
          },
          _initMarkers: function () {
            this._markerGroup || (this._markerGroup = new L.LayerGroup()),
              (this._markers = []);
            var o,
              r,
              h,
              u,
              g,
              v,
              f = this._defaultShape();
            for (o = 0, h = f.length; o < h; o++)
              (u = this._createMarker(f[o], o)).on(
                "click",
                this._onMarkerClick,
                this
              ),
                u.on("contextmenu", this._onContextMenu, this),
                this._markers.push(u);
            for (o = 0, r = h - 1; o < h; r = o++)
              (0 !== o || (L.Polygon && this._poly instanceof L.Polygon)) &&
                (this._createMiddleMarker(
                  (g = this._markers[r]),
                  (v = this._markers[o])
                ),
                this._updatePrevNext(g, v));
          },
          _createMarker: function (o, r) {
            var h = new L.Marker.Touch(o, {
              draggable: !0,
              icon: this.options.icon,
            });
            return (
              (h._origLatLng = o),
              (h._index = r),
              h
                .on("dragstart", this._onMarkerDragStart, this)
                .on("drag", this._onMarkerDrag, this)
                .on("dragend", this._fireEdit, this)
                .on("touchmove", this._onTouchMove, this)
                .on("touchend", this._fireEdit, this)
                .on("MSPointerMove", this._onTouchMove, this)
                .on("MSPointerUp", this._fireEdit, this),
              this._markerGroup.addLayer(h),
              h
            );
          },
          _onMarkerDragStart: function () {
            this._poly.fire("editstart");
          },
          _spliceLatLngs: function () {
            var o = this._defaultShape(),
              r = [].splice.apply(o, arguments);
            return this._poly._convertLatLngs(o, !0), this._poly.redraw(), r;
          },
          _removeMarker: function (o) {
            var r = o._index;
            this._markerGroup.removeLayer(o),
              this._markers.splice(r, 1),
              this._spliceLatLngs(r, 1),
              this._updateIndexes(r, -1),
              o
                .off("dragstart", this._onMarkerDragStart, this)
                .off("drag", this._onMarkerDrag, this)
                .off("dragend", this._fireEdit, this)
                .off("touchmove", this._onMarkerDrag, this)
                .off("touchend", this._fireEdit, this)
                .off("click", this._onMarkerClick, this)
                .off("MSPointerMove", this._onTouchMove, this)
                .off("MSPointerUp", this._fireEdit, this);
          },
          _fireEdit: function () {
            (this._poly.edited = !0),
              this._poly.fire("edit"),
              this._poly._map.fire(L.Draw.Event.EDITVERTEX, {
                layers: this._markerGroup,
                poly: this._poly,
              });
          },
          _onMarkerDrag: function (o) {
            var r = o.target,
              h = this._poly,
              u = L.LatLngUtil.cloneLatLng(r._origLatLng);
            if ((L.extend(r._origLatLng, r._latlng), h.options.poly)) {
              var f = h._map._editTooltip;
              if (!h.options.poly.allowIntersection && h.intersects()) {
                L.extend(r._origLatLng, u), r.setLatLng(u);
                var g = h.options.color;
                h.setStyle({ color: this.options.drawError.color }),
                  f &&
                    f.updateContent({
                      text: L.drawLocal.draw.handlers.polyline.error,
                    }),
                  setTimeout(function () {
                    h.setStyle({ color: g }),
                      f &&
                        f.updateContent({
                          text: L.drawLocal.edit.handlers.edit.tooltip.text,
                          subtext:
                            L.drawLocal.edit.handlers.edit.tooltip.subtext,
                        });
                  }, 1e3);
              }
            }
            r._middleLeft &&
              r._middleLeft.setLatLng(this._getMiddleLatLng(r._prev, r)),
              r._middleRight &&
                r._middleRight.setLatLng(this._getMiddleLatLng(r, r._next)),
              (this._poly._bounds._southWest = L.latLng(1 / 0, 1 / 0)),
              (this._poly._bounds._northEast = L.latLng(-1 / 0, -1 / 0));
            var v = this._poly.getLatLngs();
            this._poly._convertLatLngs(v, !0),
              this._poly.redraw(),
              this._poly.fire("editdrag");
          },
          _onMarkerClick: function (o) {
            var r = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3,
              h = o.target;
            this._defaultShape().length < r ||
              (this._removeMarker(h),
              this._updatePrevNext(h._prev, h._next),
              h._middleLeft && this._markerGroup.removeLayer(h._middleLeft),
              h._middleRight && this._markerGroup.removeLayer(h._middleRight),
              h._prev && h._next
                ? this._createMiddleMarker(h._prev, h._next)
                : h._prev
                ? h._next || (h._prev._middleRight = null)
                : (h._next._middleLeft = null),
              this._fireEdit());
          },
          _onContextMenu: function (o) {
            this._poly._map.fire(L.Draw.Event.MARKERCONTEXT, {
              marker: o.target,
              layers: this._markerGroup,
              poly: this._poly,
            }),
              L;
          },
          _onTouchMove: function (o) {
            var r = this._map.mouseEventToLayerPoint(
                o.originalEvent.touches[0]
              ),
              h = this._map.layerPointToLatLng(r),
              u = o.target;
            L.extend(u._origLatLng, h),
              u._middleLeft &&
                u._middleLeft.setLatLng(this._getMiddleLatLng(u._prev, u)),
              u._middleRight &&
                u._middleRight.setLatLng(this._getMiddleLatLng(u, u._next)),
              this._poly.redraw(),
              this.updateMarkers();
          },
          _updateIndexes: function (o, r) {
            this._markerGroup.eachLayer(function (h) {
              h._index > o && (h._index += r);
            });
          },
          _createMiddleMarker: function (o, r) {
            var h,
              u,
              f,
              g = this._getMiddleLatLng(o, r),
              v = this._createMarker(g);
            v.setOpacity(0.6),
              (o._middleRight = r._middleLeft = v),
              (u = function () {
                v.off("touchmove", u, this);
                var w = r._index;
                (v._index = w),
                  v
                    .off("click", h, this)
                    .on("click", this._onMarkerClick, this),
                  (g.lat = v.getLatLng().lat),
                  (g.lng = v.getLatLng().lng),
                  this._spliceLatLngs(w, 0, g),
                  this._markers.splice(w, 0, v),
                  v.setOpacity(1),
                  this._updateIndexes(w, 1),
                  r._index++,
                  this._updatePrevNext(o, v),
                  this._updatePrevNext(v, r),
                  this._poly.fire("editstart");
              }),
              (f = function () {
                v.off("dragstart", u, this),
                  v.off("dragend", f, this),
                  v.off("touchmove", u, this),
                  this._createMiddleMarker(o, v),
                  this._createMiddleMarker(v, r);
              }),
              v
                .on(
                  "click",
                  (h = function () {
                    u.call(this), f.call(this), this._fireEdit();
                  }),
                  this
                )
                .on("dragstart", u, this)
                .on("dragend", f, this)
                .on("touchmove", u, this),
              this._markerGroup.addLayer(v);
          },
          _updatePrevNext: function (o, r) {
            o && (o._next = r), r && (r._prev = o);
          },
          _getMiddleLatLng: function (o, r) {
            var h = this._poly._map,
              u = h.project(o.getLatLng()),
              f = h.project(r.getLatLng());
            return h.unproject(u._add(f)._divideBy(2));
          },
        })),
        L.Polyline.addInitHook(function () {
          this.editing ||
            (L.Edit.Poly &&
              ((this.editing = new L.Edit.Poly(this)),
              this.options.editable && this.editing.enable()),
            this.on("add", function () {
              this.editing && this.editing.enabled() && this.editing.addHooks();
            }),
            this.on("remove", function () {
              this.editing &&
                this.editing.enabled() &&
                this.editing.removeHooks();
            }));
        }),
        (L.Edit = L.Edit || {}),
        (L.Edit.SimpleShape = L.Handler.extend({
          options: {
            moveIcon: new L.DivIcon({
              iconSize: new L.Point(8, 8),
              className:
                "leaflet-div-icon leaflet-editing-icon leaflet-edit-move",
            }),
            resizeIcon: new L.DivIcon({
              iconSize: new L.Point(8, 8),
              className:
                "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize",
            }),
            touchMoveIcon: new L.DivIcon({
              iconSize: new L.Point(20, 20),
              className:
                "leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon",
            }),
            touchResizeIcon: new L.DivIcon({
              iconSize: new L.Point(20, 20),
              className:
                "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon",
            }),
          },
          initialize: function (o, r) {
            L.Browser.touch &&
              ((this.options.moveIcon = this.options.touchMoveIcon),
              (this.options.resizeIcon = this.options.touchResizeIcon)),
              (this._shape = o),
              L.Util.setOptions(this, r);
          },
          addHooks: function () {
            var o = this._shape;
            this._shape._map &&
              ((this._map = this._shape._map),
              o.setStyle(o.options.editing),
              o._map &&
                ((this._map = o._map),
                this._markerGroup || this._initMarkers(),
                this._map.addLayer(this._markerGroup)));
          },
          removeHooks: function () {
            var o = this._shape;
            if ((o.setStyle(o.options.original), o._map)) {
              this._unbindMarker(this._moveMarker);
              for (var r = 0, h = this._resizeMarkers.length; r < h; r++)
                this._unbindMarker(this._resizeMarkers[r]);
              (this._resizeMarkers = null),
                this._map.removeLayer(this._markerGroup),
                delete this._markerGroup;
            }
            this._map = null;
          },
          updateMarkers: function () {
            this._markerGroup.clearLayers(), this._initMarkers();
          },
          _initMarkers: function () {
            this._markerGroup || (this._markerGroup = new L.LayerGroup()),
              this._createMoveMarker(),
              this._createResizeMarker();
          },
          _createMoveMarker: function () {},
          _createResizeMarker: function () {},
          _createMarker: function (o, r) {
            var h = new L.Marker.Touch(o, {
              draggable: !0,
              icon: r,
              zIndexOffset: 10,
            });
            return this._bindMarker(h), this._markerGroup.addLayer(h), h;
          },
          _bindMarker: function (o) {
            o.on("dragstart", this._onMarkerDragStart, this)
              .on("drag", this._onMarkerDrag, this)
              .on("dragend", this._onMarkerDragEnd, this)
              .on("touchstart", this._onTouchStart, this)
              .on("touchmove", this._onTouchMove, this)
              .on("MSPointerMove", this._onTouchMove, this)
              .on("touchend", this._onTouchEnd, this)
              .on("MSPointerUp", this._onTouchEnd, this);
          },
          _unbindMarker: function (o) {
            o.off("dragstart", this._onMarkerDragStart, this)
              .off("drag", this._onMarkerDrag, this)
              .off("dragend", this._onMarkerDragEnd, this)
              .off("touchstart", this._onTouchStart, this)
              .off("touchmove", this._onTouchMove, this)
              .off("MSPointerMove", this._onTouchMove, this)
              .off("touchend", this._onTouchEnd, this)
              .off("MSPointerUp", this._onTouchEnd, this);
          },
          _onMarkerDragStart: function (o) {
            o.target.setOpacity(0), this._shape.fire("editstart");
          },
          _fireEdit: function () {
            (this._shape.edited = !0), this._shape.fire("edit");
          },
          _onMarkerDrag: function (o) {
            var r = o.target,
              h = r.getLatLng();
            r === this._moveMarker ? this._move(h) : this._resize(h),
              this._shape.redraw(),
              this._shape.fire("editdrag");
          },
          _onMarkerDragEnd: function (o) {
            o.target.setOpacity(1), this._fireEdit();
          },
          _onTouchStart: function (o) {
            if (
              (L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, o),
              "function" == typeof this._getCorners)
            ) {
              var r = this._getCorners(),
                h = o.target,
                u = h._cornerIndex;
              h.setOpacity(0),
                (this._oppositeCorner = r[(u + 2) % 4]),
                this._toggleCornerMarkers(0, u);
            }
            this._shape.fire("editstart");
          },
          _onTouchMove: function (o) {
            var r = this._map.mouseEventToLayerPoint(
                o.originalEvent.touches[0]
              ),
              h = this._map.layerPointToLatLng(r);
            return (
              o.target === this._moveMarker ? this._move(h) : this._resize(h),
              this._shape.redraw(),
              !1
            );
          },
          _onTouchEnd: function (o) {
            o.target.setOpacity(1), this.updateMarkers(), this._fireEdit();
          },
          _move: function () {},
          _resize: function () {},
        })),
        (L.Edit = L.Edit || {}),
        (L.Edit.Rectangle = L.Edit.SimpleShape.extend({
          _createMoveMarker: function () {
            var r = this._shape.getBounds().getCenter();
            this._moveMarker = this._createMarker(r, this.options.moveIcon);
          },
          _createResizeMarker: function () {
            var o = this._getCorners();
            this._resizeMarkers = [];
            for (var r = 0, h = o.length; r < h; r++)
              this._resizeMarkers.push(
                this._createMarker(o[r], this.options.resizeIcon)
              ),
                (this._resizeMarkers[r]._cornerIndex = r);
          },
          _onMarkerDragStart: function (o) {
            L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, o);
            var r = this._getCorners(),
              u = o.target._cornerIndex;
            (this._oppositeCorner = r[(u + 2) % 4]),
              this._toggleCornerMarkers(0, u);
          },
          _onMarkerDragEnd: function (o) {
            var h,
              u = o.target;
            u === this._moveMarker &&
              ((h = this._shape.getBounds().getCenter()), u.setLatLng(h)),
              this._toggleCornerMarkers(1),
              this._repositionCornerMarkers(),
              L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, o);
          },
          _move: function (o) {
            for (
              var r,
                h = this._shape._defaultShape
                  ? this._shape._defaultShape()
                  : this._shape.getLatLngs(),
                f = this._shape.getBounds().getCenter(),
                g = [],
                v = 0,
                w = h.length;
              v < w;
              v++
            )
              g.push([
                o.lat + (r = [h[v].lat - f.lat, h[v].lng - f.lng])[0],
                o.lng + r[1],
              ]);
            this._shape.setLatLngs(g),
              this._repositionCornerMarkers(),
              this._map.fire(L.Draw.Event.EDITMOVE, { layer: this._shape });
          },
          _resize: function (o) {
            var r;
            this._shape.setBounds(L.latLngBounds(o, this._oppositeCorner)),
              (r = this._shape.getBounds()),
              this._moveMarker.setLatLng(r.getCenter()),
              this._map.fire(L.Draw.Event.EDITRESIZE, { layer: this._shape });
          },
          _getCorners: function () {
            var o = this._shape.getBounds();
            return [
              o.getNorthWest(),
              o.getNorthEast(),
              o.getSouthEast(),
              o.getSouthWest(),
            ];
          },
          _toggleCornerMarkers: function (o) {
            for (var r = 0, h = this._resizeMarkers.length; r < h; r++)
              this._resizeMarkers[r].setOpacity(o);
          },
          _repositionCornerMarkers: function () {
            for (
              var o = this._getCorners(), r = 0, h = this._resizeMarkers.length;
              r < h;
              r++
            )
              this._resizeMarkers[r].setLatLng(o[r]);
          },
        })),
        L.Rectangle.addInitHook(function () {
          L.Edit.Rectangle &&
            ((this.editing = new L.Edit.Rectangle(this)),
            this.options.editable && this.editing.enable());
        }),
        (L.Edit = L.Edit || {}),
        (L.Edit.CircleMarker = L.Edit.SimpleShape.extend({
          _createMoveMarker: function () {
            var o = this._shape.getLatLng();
            this._moveMarker = this._createMarker(o, this.options.moveIcon);
          },
          _createResizeMarker: function () {
            this._resizeMarkers = [];
          },
          _move: function (o) {
            if (this._resizeMarkers.length) {
              var r = this._getResizeMarkerPoint(o);
              this._resizeMarkers[0].setLatLng(r);
            }
            this._shape.setLatLng(o),
              this._map.fire(L.Draw.Event.EDITMOVE, { layer: this._shape });
          },
        })),
        L.CircleMarker.addInitHook(function () {
          L.Edit.CircleMarker &&
            ((this.editing = new L.Edit.CircleMarker(this)),
            this.options.editable && this.editing.enable()),
            this.on("add", function () {
              this.editing && this.editing.enabled() && this.editing.addHooks();
            }),
            this.on("remove", function () {
              this.editing &&
                this.editing.enabled() &&
                this.editing.removeHooks();
            });
        }),
        (L.Edit = L.Edit || {}),
        (L.Edit.Circle = L.Edit.CircleMarker.extend({
          _createResizeMarker: function () {
            var o = this._shape.getLatLng(),
              r = this._getResizeMarkerPoint(o);
            (this._resizeMarkers = []),
              this._resizeMarkers.push(
                this._createMarker(r, this.options.resizeIcon)
              );
          },
          _getResizeMarkerPoint: function (o) {
            var r = this._shape._radius * Math.cos(Math.PI / 4),
              h = this._map.project(o);
            return this._map.unproject([h.x + r, h.y - r]);
          },
          _resize: function (o) {
            var r = this._moveMarker.getLatLng();
            L.GeometryUtil.isVersion07x()
              ? (radius = r.distanceTo(o))
              : (radius = this._map.distance(r, o)),
              this._shape.setRadius(radius),
              this._map.editTooltip &&
                this._map._editTooltip.updateContent({
                  text:
                    L.drawLocal.edit.handlers.edit.tooltip.subtext +
                    "<br />" +
                    L.drawLocal.edit.handlers.edit.tooltip.text,
                  subtext:
                    L.drawLocal.draw.handlers.circle.radius +
                    ": " +
                    L.GeometryUtil.readableDistance(
                      radius,
                      !0,
                      this.options.feet,
                      this.options.nautic
                    ),
                }),
              this._shape.setRadius(radius),
              this._map.fire(L.Draw.Event.EDITRESIZE, { layer: this._shape });
          },
        })),
        L.Circle.addInitHook(function () {
          L.Edit.Circle &&
            ((this.editing = new L.Edit.Circle(this)),
            this.options.editable && this.editing.enable());
        }),
        L.Map.mergeOptions({ touchExtend: !0 }),
        (L.Map.TouchExtend = L.Handler.extend({
          initialize: function (o) {
            (this._map = o),
              (this._container = o._container),
              (this._pane = o._panes.overlayPane);
          },
          addHooks: function () {
            L.DomEvent.on(
              this._container,
              "touchstart",
              this._onTouchStart,
              this
            ),
              L.DomEvent.on(
                this._container,
                "touchend",
                this._onTouchEnd,
                this
              ),
              L.DomEvent.on(
                this._container,
                "touchmove",
                this._onTouchMove,
                this
              ),
              this._detectIE()
                ? (L.DomEvent.on(
                    this._container,
                    "MSPointerDown",
                    this._onTouchStart,
                    this
                  ),
                  L.DomEvent.on(
                    this._container,
                    "MSPointerUp",
                    this._onTouchEnd,
                    this
                  ),
                  L.DomEvent.on(
                    this._container,
                    "MSPointerMove",
                    this._onTouchMove,
                    this
                  ),
                  L.DomEvent.on(
                    this._container,
                    "MSPointerCancel",
                    this._onTouchCancel,
                    this
                  ))
                : (L.DomEvent.on(
                    this._container,
                    "touchcancel",
                    this._onTouchCancel,
                    this
                  ),
                  L.DomEvent.on(
                    this._container,
                    "touchleave",
                    this._onTouchLeave,
                    this
                  ));
          },
          removeHooks: function () {
            L.DomEvent.off(
              this._container,
              "touchstart",
              this._onTouchStart,
              this
            ),
              L.DomEvent.off(
                this._container,
                "touchend",
                this._onTouchEnd,
                this
              ),
              L.DomEvent.off(
                this._container,
                "touchmove",
                this._onTouchMove,
                this
              ),
              this._detectIE()
                ? (L.DomEvent.off(
                    this._container,
                    "MSPointerDown",
                    this._onTouchStart,
                    this
                  ),
                  L.DomEvent.off(
                    this._container,
                    "MSPointerUp",
                    this._onTouchEnd,
                    this
                  ),
                  L.DomEvent.off(
                    this._container,
                    "MSPointerMove",
                    this._onTouchMove,
                    this
                  ),
                  L.DomEvent.off(
                    this._container,
                    "MSPointerCancel",
                    this._onTouchCancel,
                    this
                  ))
                : (L.DomEvent.off(
                    this._container,
                    "touchcancel",
                    this._onTouchCancel,
                    this
                  ),
                  L.DomEvent.off(
                    this._container,
                    "touchleave",
                    this._onTouchLeave,
                    this
                  ));
          },
          _touchEvent: function (o, r) {
            var h = {};
            if (void 0 !== o.touches) {
              if (!o.touches.length) return;
              h = o.touches[0];
            } else if (
              "touch" !== o.pointerType ||
              ((h = o), !this._filterClick(o))
            )
              return;
            var u = this._map.mouseEventToContainerPoint(h),
              f = this._map.mouseEventToLayerPoint(h),
              g = this._map.layerPointToLatLng(f);
            this._map.fire(r, {
              latlng: g,
              layerPoint: f,
              containerPoint: u,
              pageX: h.pageX,
              pageY: h.pageY,
              originalEvent: o,
            });
          },
          _filterClick: function (o) {
            var r = o.timeStamp || o.originalEvent.timeStamp,
              h = L.DomEvent._lastClick && r - L.DomEvent._lastClick;
            return (h && h > 100 && h < 500) ||
              (o.target._simulatedClick && !o._simulated)
              ? (L.DomEvent.stop(o), !1)
              : ((L.DomEvent._lastClick = r), !0);
          },
          _onTouchStart: function (o) {
            this._map._loaded && this._touchEvent(o, "touchstart");
          },
          _onTouchEnd: function (o) {
            this._map._loaded && this._touchEvent(o, "touchend");
          },
          _onTouchCancel: function (o) {
            if (this._map._loaded) {
              var r = "touchcancel";
              this._detectIE() && (r = "pointercancel"), this._touchEvent(o, r);
            }
          },
          _onTouchLeave: function (o) {
            this._map._loaded && this._touchEvent(o, "touchleave");
          },
          _onTouchMove: function (o) {
            this._map._loaded && this._touchEvent(o, "touchmove");
          },
          _detectIE: function () {
            var o = ot.navigator.userAgent,
              r = o.indexOf("MSIE ");
            if (r > 0)
              return parseInt(o.substring(r + 5, o.indexOf(".", r)), 10);
            if (o.indexOf("Trident/") > 0) {
              var h = o.indexOf("rv:");
              return parseInt(o.substring(h + 3, o.indexOf(".", h)), 10);
            }
            var u = o.indexOf("Edge/");
            return u > 0 && parseInt(o.substring(u + 5, o.indexOf(".", u)), 10);
          },
        })),
        L.Map.addInitHook("addHandler", "touchExtend", L.Map.TouchExtend),
        (L.Marker.Touch = L.Marker.extend({
          _initInteraction: function () {
            return this.addInteractiveTarget
              ? L.Marker.prototype._initInteraction.apply(this)
              : this._initInteractionLegacy();
          },
          _initInteractionLegacy: function () {
            if (this.options.clickable) {
              var o = this._icon,
                r = [
                  "dblclick",
                  "mousedown",
                  "mouseover",
                  "mouseout",
                  "contextmenu",
                  "touchstart",
                  "touchend",
                  "touchmove",
                ];
              r.concat(
                this._detectIE
                  ? [
                      "MSPointerDown",
                      "MSPointerUp",
                      "MSPointerMove",
                      "MSPointerCancel",
                    ]
                  : ["touchcancel"]
              ),
                L.DomUtil.addClass(o, "leaflet-clickable"),
                L.DomEvent.on(o, "click", this._onMouseClick, this),
                L.DomEvent.on(o, "keypress", this._onKeyPress, this);
              for (var h = 0; h < r.length; h++)
                L.DomEvent.on(o, r[h], this._fireMouseEvent, this);
              L.Handler.MarkerDrag &&
                ((this.dragging = new L.Handler.MarkerDrag(this)),
                this.options.draggable && this.dragging.enable());
            }
          },
          _detectIE: function () {
            var o = ot.navigator.userAgent,
              r = o.indexOf("MSIE ");
            if (r > 0)
              return parseInt(o.substring(r + 5, o.indexOf(".", r)), 10);
            if (o.indexOf("Trident/") > 0) {
              var h = o.indexOf("rv:");
              return parseInt(o.substring(h + 3, o.indexOf(".", h)), 10);
            }
            var u = o.indexOf("Edge/");
            return u > 0 && parseInt(o.substring(u + 5, o.indexOf(".", u)), 10);
          },
        })),
        (L.LatLngUtil = {
          cloneLatLngs: function (o) {
            for (var r = [], h = 0, u = o.length; h < u; h++)
              Array.isArray(o[h])
                ? r.push(L.LatLngUtil.cloneLatLngs(o[h]))
                : r.push(this.cloneLatLng(o[h]));
            return r;
          },
          cloneLatLng: function (o) {
            return L.latLng(o.lat, o.lng);
          },
        }),
        (o = { km: 2, ha: 2, m: 0, mi: 2, ac: 2, yd: 0, ft: 0, nm: 2 }),
        (L.GeometryUtil = L.extend(L.GeometryUtil || {}, {
          geodesicArea: function (r) {
            var h,
              u,
              f = r.length,
              g = 0,
              v = Math.PI / 180;
            if (f > 2) {
              for (var w = 0; w < f; w++)
                g +=
                  ((u = r[(w + 1) % f]).lng - (h = r[w]).lng) *
                  v *
                  (2 + Math.sin(h.lat * v) + Math.sin(u.lat * v));
              g = (6378137 * g * 6378137) / 2;
            }
            return Math.abs(g);
          },
          formattedNumber: function (r, h) {
            var u = parseFloat(r).toFixed(h),
              f = L.drawLocal.format && L.drawLocal.format.numeric,
              g = f && f.delimiters,
              v = g && g.thousands,
              w = g && g.decimal;
            if (v || w) {
              var S = u.split(".");
              (u = v
                ? S[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + v)
                : S[0]),
                (w = w || "."),
                S.length > 1 && (u = u + w + S[1]);
            }
            return u;
          },
          readableArea: function (r, h, v) {
            var f, g;
            return (
              (v = L.Util.extend({}, o, v)),
              h
                ? ((g = ["ha", "m"]),
                  (type = typeof h),
                  "string" === type ? (g = [h]) : "boolean" !== type && (g = h),
                  (f =
                    r >= 1e6 && -1 !== g.indexOf("km")
                      ? L.GeometryUtil.formattedNumber(1e-6 * r, v.km) +
                        " km\xb2"
                      : r >= 1e4 && -1 !== g.indexOf("ha")
                      ? L.GeometryUtil.formattedNumber(1e-4 * r, v.ha) + " ha"
                      : L.GeometryUtil.formattedNumber(r, v.m) + " m\xb2"))
                : (f =
                    (r /= 0.836127) >= 3097600
                      ? L.GeometryUtil.formattedNumber(r / 3097600, v.mi) +
                        " mi\xb2"
                      : r >= 4840
                      ? L.GeometryUtil.formattedNumber(r / 4840, v.ac) +
                        " acres"
                      : L.GeometryUtil.formattedNumber(r, v.yd) + " yd\xb2"),
              f
            );
          },
          readableDistance: function (r, h, u, f, w) {
            var v;
            switch (
              ((w = L.Util.extend({}, o, w)),
              h
                ? "string" == typeof h
                  ? h
                  : "metric"
                : u
                ? "feet"
                : f
                ? "nauticalMile"
                : "yards")
            ) {
              case "metric":
                v =
                  r > 1e3
                    ? L.GeometryUtil.formattedNumber(r / 1e3, w.km) + " km"
                    : L.GeometryUtil.formattedNumber(r, w.m) + " m";
                break;
              case "feet":
                (r *= 3.28083),
                  (v = L.GeometryUtil.formattedNumber(r, w.ft) + " ft");
                break;
              case "nauticalMile":
                (r *= 0.53996),
                  (v = L.GeometryUtil.formattedNumber(r / 1e3, w.nm) + " nm");
                break;
              default:
                v =
                  (r *= 1.09361) > 1760
                    ? L.GeometryUtil.formattedNumber(r / 1760, w.mi) + " miles"
                    : L.GeometryUtil.formattedNumber(r, w.yd) + " yd";
            }
            return v;
          },
          isVersion07x: function () {
            var r = L.version.split(".");
            return 0 === parseInt(r[0], 10) && 7 === parseInt(r[1], 10);
          },
        })),
        L.Util.extend(L.LineUtil, {
          segmentsIntersect: function (o, r, h, u) {
            return (
              this._checkCounterclockwise(o, h, u) !==
                this._checkCounterclockwise(r, h, u) &&
              this._checkCounterclockwise(o, r, h) !==
                this._checkCounterclockwise(o, r, u)
            );
          },
          _checkCounterclockwise: function (o, r, h) {
            return (h.y - o.y) * (r.x - o.x) > (r.y - o.y) * (h.x - o.x);
          },
        }),
        L.Polyline.include({
          intersects: function () {
            var o,
              u = this._getProjectedPoints(),
              f = u ? u.length : 0;
            if (this._tooFewPointsForIntersection()) return !1;
            for (o = f - 1; o >= 3; o--)
              if (this._lineSegmentsIntersectsRange(u[o - 1], u[o], o - 2))
                return !0;
            return !1;
          },
          newLatLngIntersects: function (o, r) {
            return (
              !!this._map &&
              this.newPointIntersects(this._map.latLngToLayerPoint(o), r)
            );
          },
          newPointIntersects: function (o, r) {
            var h = this._getProjectedPoints(),
              u = h ? h.length : 0,
              f = h ? h[u - 1] : null,
              g = u - 2;
            return (
              !this._tooFewPointsForIntersection(1) &&
              this._lineSegmentsIntersectsRange(f, o, g, r ? 1 : 0)
            );
          },
          _tooFewPointsForIntersection: function (o) {
            var r = this._getProjectedPoints(),
              h = r ? r.length : 0;
            return !r || (h += o || 0) <= 3;
          },
          _lineSegmentsIntersectsRange: function (o, r, h, u) {
            var v = this._getProjectedPoints();
            u = u || 0;
            for (var w = h; w > u; w--)
              if (L.LineUtil.segmentsIntersect(o, r, v[w - 1], v[w])) return !0;
            return !1;
          },
          _getProjectedPoints: function () {
            if (!this._defaultShape) return this._originalPoints;
            for (var o = [], r = this._defaultShape(), h = 0; h < r.length; h++)
              o.push(this._map.latLngToLayerPoint(r[h]));
            return o;
          },
        }),
        L.Polygon.include({
          intersects: function () {
            var o,
              f = this._getProjectedPoints();
            return (
              !this._tooFewPointsForIntersection() &&
              (!!L.Polyline.prototype.intersects.call(this) ||
                this._lineSegmentsIntersectsRange(
                  f[(o = f.length) - 1],
                  f[0],
                  o - 2,
                  1
                ))
            );
          },
        }),
        (L.Control.Draw = L.Control.extend({
          options: { position: "topleft", draw: {}, edit: !1 },
          initialize: function (o) {
            if (L.version < "0.7")
              throw new Error(
                "Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/"
              );
            var r;
            L.Control.prototype.initialize.call(this, o),
              (this._toolbars = {}),
              L.DrawToolbar &&
                this.options.draw &&
                ((r = new L.DrawToolbar(this.options.draw)),
                (this._toolbars[L.DrawToolbar.TYPE] = r),
                this._toolbars[L.DrawToolbar.TYPE].on(
                  "enable",
                  this._toolbarEnabled,
                  this
                )),
              L.EditToolbar &&
                this.options.edit &&
                ((r = new L.EditToolbar(this.options.edit)),
                (this._toolbars[L.EditToolbar.TYPE] = r),
                this._toolbars[L.EditToolbar.TYPE].on(
                  "enable",
                  this._toolbarEnabled,
                  this
                )),
              (L.toolbar = this);
          },
          onAdd: function (o) {
            var r,
              h = L.DomUtil.create("div", "leaflet-draw"),
              u = !1;
            for (var f in this._toolbars)
              this._toolbars.hasOwnProperty(f) &&
                (r = this._toolbars[f].addToolbar(o)) &&
                (u ||
                  (L.DomUtil.hasClass(r, "leaflet-draw-toolbar-top") ||
                    L.DomUtil.addClass(
                      r.childNodes[0],
                      "leaflet-draw-toolbar-top"
                    ),
                  (u = !0)),
                h.appendChild(r));
            return h;
          },
          onRemove: function () {
            for (var o in this._toolbars)
              this._toolbars.hasOwnProperty(o) &&
                this._toolbars[o].removeToolbar();
          },
          setDrawingOptions: function (o) {
            for (var r in this._toolbars)
              this._toolbars[r] instanceof L.DrawToolbar &&
                this._toolbars[r].setOptions(o);
          },
          _toolbarEnabled: function (o) {
            var r = o.target;
            for (var h in this._toolbars)
              this._toolbars[h] !== r && this._toolbars[h].disable();
          },
        })),
        L.Map.mergeOptions({ drawControlTooltips: !0, drawControl: !1 }),
        L.Map.addInitHook(function () {
          this.options.drawControl &&
            ((this.drawControl = new L.Control.Draw()),
            this.addControl(this.drawControl));
        }),
        (L.Toolbar = L.Class.extend({
          initialize: function (o) {
            L.setOptions(this, o),
              (this._modes = {}),
              (this._actionButtons = []),
              (this._activeMode = null);
            var r = L.version.split(".");
            1 === parseInt(r[0], 10) && parseInt(r[1], 10) >= 2
              ? L.Toolbar.include(L.Evented.prototype)
              : L.Toolbar.include(L.Mixin.Events);
          },
          enabled: function () {
            return null !== this._activeMode;
          },
          disable: function () {
            this.enabled() && this._activeMode.handler.disable();
          },
          addToolbar: function (o) {
            var r,
              h = L.DomUtil.create("div", "leaflet-draw-section"),
              u = 0,
              f = this._toolbarClass || "",
              g = this.getModeHandlers(o);
            for (
              this._toolbarContainer = L.DomUtil.create(
                "div",
                "leaflet-draw-toolbar leaflet-bar"
              ),
                this._map = o,
                r = 0;
              r < g.length;
              r++
            )
              g[r].enabled &&
                this._initModeHandler(
                  g[r].handler,
                  this._toolbarContainer,
                  u++,
                  f,
                  g[r].title
                );
            if (u)
              return (
                (this._lastButtonIndex = --u),
                (this._actionsContainer = L.DomUtil.create(
                  "ul",
                  "leaflet-draw-actions"
                )),
                h.appendChild(this._toolbarContainer),
                h.appendChild(this._actionsContainer),
                h
              );
          },
          removeToolbar: function () {
            for (var o in this._modes)
              this._modes.hasOwnProperty(o) &&
                (this._disposeButton(
                  this._modes[o].button,
                  this._modes[o].handler.enable,
                  this._modes[o].handler
                ),
                this._modes[o].handler.disable(),
                this._modes[o].handler
                  .off("enabled", this._handlerActivated, this)
                  .off("disabled", this._handlerDeactivated, this));
            this._modes = {};
            for (var r = 0, h = this._actionButtons.length; r < h; r++)
              this._disposeButton(
                this._actionButtons[r].button,
                this._actionButtons[r].callback,
                this
              );
            (this._actionButtons = []), (this._actionsContainer = null);
          },
          _initModeHandler: function (o, r, h, u, f) {
            var g = o.type;
            (this._modes[g] = {}),
              (this._modes[g].handler = o),
              (this._modes[g].button = this._createButton({
                type: g,
                title: f,
                className: u + "-" + g,
                container: r,
                callback: this._modes[g].handler.enable,
                context: this._modes[g].handler,
              })),
              (this._modes[g].buttonIndex = h),
              this._modes[g].handler
                .on("enabled", this._handlerActivated, this)
                .on("disabled", this._handlerDeactivated, this);
          },
          _detectIOS: function () {
            return /iPad|iPhone|iPod/.test(navigator.userAgent) && !ot.MSStream;
          },
          _createButton: function (o) {
            var r = L.DomUtil.create("a", o.className || "", o.container),
              h = L.DomUtil.create("span", "sr-only", o.container);
            (r.href = "#"),
              r.appendChild(h),
              o.title && ((r.title = o.title), (h.innerHTML = o.title)),
              o.text && ((r.innerHTML = o.text), (h.innerHTML = o.text));
            var u = this._detectIOS() ? "touchstart" : "click";
            return (
              L.DomEvent.on(r, "click", L.DomEvent.stopPropagation)
                .on(r, "mousedown", L.DomEvent.stopPropagation)
                .on(r, "dblclick", L.DomEvent.stopPropagation)
                .on(r, "touchstart", L.DomEvent.stopPropagation)
                .on(r, "click", L.DomEvent.preventDefault)
                .on(r, u, o.callback, o.context),
              r
            );
          },
          _disposeButton: function (o, r) {
            var h = this._detectIOS() ? "touchstart" : "click";
            L.DomEvent.off(o, "click", L.DomEvent.stopPropagation)
              .off(o, "mousedown", L.DomEvent.stopPropagation)
              .off(o, "dblclick", L.DomEvent.stopPropagation)
              .off(o, "touchstart", L.DomEvent.stopPropagation)
              .off(o, "click", L.DomEvent.preventDefault)
              .off(o, h, r);
          },
          _handlerActivated: function (o) {
            this.disable(),
              (this._activeMode = this._modes[o.handler]),
              L.DomUtil.addClass(
                this._activeMode.button,
                "leaflet-draw-toolbar-button-enabled"
              ),
              this._showActionsToolbar(),
              this.fire("enable");
          },
          _handlerDeactivated: function () {
            this._hideActionsToolbar(),
              L.DomUtil.removeClass(
                this._activeMode.button,
                "leaflet-draw-toolbar-button-enabled"
              ),
              (this._activeMode = null),
              this.fire("disable");
          },
          _createActions: function (o) {
            var r,
              h,
              u,
              f,
              g = this._actionsContainer,
              v = this.getActions(o),
              w = v.length;
            for (h = 0, u = this._actionButtons.length; h < u; h++)
              this._disposeButton(
                this._actionButtons[h].button,
                this._actionButtons[h].callback
              );
            for (this._actionButtons = []; g.firstChild; )
              g.removeChild(g.firstChild);
            for (var S = 0; S < w; S++)
              ("enabled" in v[S] && !v[S].enabled) ||
                ((r = L.DomUtil.create("li", "", g)),
                (f = this._createButton({
                  title: v[S].title,
                  text: v[S].text,
                  container: r,
                  callback: v[S].callback,
                  context: v[S].context,
                })),
                this._actionButtons.push({
                  button: f,
                  callback: v[S].callback,
                }));
          },
          _showActionsToolbar: function () {
            var o = this._activeMode.buttonIndex,
              r = this._lastButtonIndex,
              h = this._activeMode.button.offsetTop - 1;
            this._createActions(this._activeMode.handler),
              (this._actionsContainer.style.top = h + "px"),
              0 === o &&
                (L.DomUtil.addClass(
                  this._toolbarContainer,
                  "leaflet-draw-toolbar-notop"
                ),
                L.DomUtil.addClass(
                  this._actionsContainer,
                  "leaflet-draw-actions-top"
                )),
              o === r &&
                (L.DomUtil.addClass(
                  this._toolbarContainer,
                  "leaflet-draw-toolbar-nobottom"
                ),
                L.DomUtil.addClass(
                  this._actionsContainer,
                  "leaflet-draw-actions-bottom"
                )),
              (this._actionsContainer.style.display = "block"),
              this._map.fire(L.Draw.Event.TOOLBAROPENED);
          },
          _hideActionsToolbar: function () {
            (this._actionsContainer.style.display = "none"),
              L.DomUtil.removeClass(
                this._toolbarContainer,
                "leaflet-draw-toolbar-notop"
              ),
              L.DomUtil.removeClass(
                this._toolbarContainer,
                "leaflet-draw-toolbar-nobottom"
              ),
              L.DomUtil.removeClass(
                this._actionsContainer,
                "leaflet-draw-actions-top"
              ),
              L.DomUtil.removeClass(
                this._actionsContainer,
                "leaflet-draw-actions-bottom"
              ),
              this._map.fire(L.Draw.Event.TOOLBARCLOSED);
          },
        })),
        (L.Draw = L.Draw || {}),
        (L.Draw.Tooltip = L.Class.extend({
          initialize: function (o) {
            (this._map = o),
              (this._popupPane = o._panes.popupPane),
              (this._visible = !1),
              (this._container = o.options.drawControlTooltips
                ? L.DomUtil.create(
                    "div",
                    "leaflet-draw-tooltip",
                    this._popupPane
                  )
                : null),
              (this._singleLineLabel = !1),
              this._map.on("mouseout", this._onMouseOut, this);
          },
          dispose: function () {
            this._map.off("mouseout", this._onMouseOut, this),
              this._container &&
                (this._popupPane.removeChild(this._container),
                (this._container = null));
          },
          updateContent: function (o) {
            return this._container
              ? ((o.subtext = o.subtext || ""),
                0 !== o.subtext.length || this._singleLineLabel
                  ? o.subtext.length > 0 &&
                    this._singleLineLabel &&
                    (L.DomUtil.removeClass(
                      this._container,
                      "leaflet-draw-tooltip-single"
                    ),
                    (this._singleLineLabel = !1))
                  : (L.DomUtil.addClass(
                      this._container,
                      "leaflet-draw-tooltip-single"
                    ),
                    (this._singleLineLabel = !0)),
                (this._container.innerHTML =
                  (o.subtext.length > 0
                    ? '<span class="leaflet-draw-tooltip-subtext">' +
                      o.subtext +
                      "</span><br />"
                    : "") +
                  "<span>" +
                  o.text +
                  "</span>"),
                o.text || o.subtext
                  ? ((this._visible = !0),
                    (this._container.style.visibility = "inherit"))
                  : ((this._visible = !1),
                    (this._container.style.visibility = "hidden")),
                this)
              : this;
          },
          updatePosition: function (o) {
            var r = this._map.latLngToLayerPoint(o),
              h = this._container;
            return (
              this._container &&
                (this._visible && (h.style.visibility = "inherit"),
                L.DomUtil.setPosition(h, r)),
              this
            );
          },
          showAsError: function () {
            return (
              this._container &&
                L.DomUtil.addClass(
                  this._container,
                  "leaflet-error-draw-tooltip"
                ),
              this
            );
          },
          removeError: function () {
            return (
              this._container &&
                L.DomUtil.removeClass(
                  this._container,
                  "leaflet-error-draw-tooltip"
                ),
              this
            );
          },
          _onMouseOut: function () {
            this._container && (this._container.style.visibility = "hidden");
          },
        })),
        (L.DrawToolbar = L.Toolbar.extend({
          statics: { TYPE: "draw" },
          options: {
            polyline: {},
            polygon: {},
            rectangle: {},
            circle: {},
            marker: {},
            circlemarker: {},
          },
          initialize: function (o) {
            for (var r in this.options)
              this.options.hasOwnProperty(r) &&
                o[r] &&
                (o[r] = L.extend({}, this.options[r], o[r]));
            (this._toolbarClass = "leaflet-draw-draw"),
              L.Toolbar.prototype.initialize.call(this, o);
          },
          getModeHandlers: function (o) {
            return [
              {
                enabled: this.options.polyline,
                handler: new L.Draw.Polyline(o, this.options.polyline),
                title: L.drawLocal.draw.toolbar.buttons.polyline,
              },
              {
                enabled: this.options.polygon,
                handler: new L.Draw.Polygon(o, this.options.polygon),
                title: L.drawLocal.draw.toolbar.buttons.polygon,
              },
              {
                enabled: this.options.rectangle,
                handler: new L.Draw.Rectangle(o, this.options.rectangle),
                title: L.drawLocal.draw.toolbar.buttons.rectangle,
              },
              {
                enabled: this.options.circle,
                handler: new L.Draw.Circle(o, this.options.circle),
                title: L.drawLocal.draw.toolbar.buttons.circle,
              },
              {
                enabled: this.options.marker,
                handler: new L.Draw.Marker(o, this.options.marker),
                title: L.drawLocal.draw.toolbar.buttons.marker,
              },
              {
                enabled: this.options.circlemarker,
                handler: new L.Draw.CircleMarker(o, this.options.circlemarker),
                title: L.drawLocal.draw.toolbar.buttons.circlemarker,
              },
            ];
          },
          getActions: function (o) {
            return [
              {
                enabled: o.completeShape,
                title: L.drawLocal.draw.toolbar.finish.title,
                text: L.drawLocal.draw.toolbar.finish.text,
                callback: o.completeShape,
                context: o,
              },
              {
                enabled: o.deleteLastVertex,
                title: L.drawLocal.draw.toolbar.undo.title,
                text: L.drawLocal.draw.toolbar.undo.text,
                callback: o.deleteLastVertex,
                context: o,
              },
              {
                title: L.drawLocal.draw.toolbar.actions.title,
                text: L.drawLocal.draw.toolbar.actions.text,
                callback: this.disable,
                context: this,
              },
            ];
          },
          setOptions: function (o) {
            for (var r in (L.setOptions(this, o), this._modes))
              this._modes.hasOwnProperty(r) &&
                o.hasOwnProperty(r) &&
                this._modes[r].handler.setOptions(o[r]);
          },
        })),
        (L.EditToolbar = L.Toolbar.extend({
          statics: { TYPE: "edit" },
          options: {
            edit: {
              selectedPathOptions: {
                dashArray: "10, 10",
                fill: !0,
                fillColor: "#fe57a1",
                fillOpacity: 0.1,
                maintainColor: !1,
              },
            },
            remove: {},
            poly: null,
            featureGroup: null,
          },
          initialize: function (o) {
            o.edit &&
              (void 0 === o.edit.selectedPathOptions &&
                (o.edit.selectedPathOptions =
                  this.options.edit.selectedPathOptions),
              (o.edit.selectedPathOptions = L.extend(
                {},
                this.options.edit.selectedPathOptions,
                o.edit.selectedPathOptions
              ))),
              o.remove &&
                (o.remove = L.extend({}, this.options.remove, o.remove)),
              o.poly && (o.poly = L.extend({}, this.options.poly, o.poly)),
              (this._toolbarClass = "leaflet-draw-edit"),
              L.Toolbar.prototype.initialize.call(this, o),
              (this._selectedFeatureCount = 0);
          },
          getModeHandlers: function (o) {
            var r = this.options.featureGroup;
            return [
              {
                enabled: this.options.edit,
                handler: new L.EditToolbar.Edit(o, {
                  featureGroup: r,
                  selectedPathOptions: this.options.edit.selectedPathOptions,
                  poly: this.options.poly,
                }),
                title: L.drawLocal.edit.toolbar.buttons.edit,
              },
              {
                enabled: this.options.remove,
                handler: new L.EditToolbar.Delete(o, { featureGroup: r }),
                title: L.drawLocal.edit.toolbar.buttons.remove,
              },
            ];
          },
          getActions: function (o) {
            var r = [
              {
                title: L.drawLocal.edit.toolbar.actions.save.title,
                text: L.drawLocal.edit.toolbar.actions.save.text,
                callback: this._save,
                context: this,
              },
              {
                title: L.drawLocal.edit.toolbar.actions.cancel.title,
                text: L.drawLocal.edit.toolbar.actions.cancel.text,
                callback: this.disable,
                context: this,
              },
            ];
            return (
              o.removeAllLayers &&
                r.push({
                  title: L.drawLocal.edit.toolbar.actions.clearAll.title,
                  text: L.drawLocal.edit.toolbar.actions.clearAll.text,
                  callback: this._clearAllLayers,
                  context: this,
                }),
              r
            );
          },
          addToolbar: function (o) {
            var r = L.Toolbar.prototype.addToolbar.call(this, o);
            return (
              this._checkDisabled(),
              this.options.featureGroup.on(
                "layeradd layerremove",
                this._checkDisabled,
                this
              ),
              r
            );
          },
          removeToolbar: function () {
            this.options.featureGroup.off(
              "layeradd layerremove",
              this._checkDisabled,
              this
            ),
              L.Toolbar.prototype.removeToolbar.call(this);
          },
          disable: function () {
            this.enabled() &&
              (this._activeMode.handler.revertLayers(),
              L.Toolbar.prototype.disable.call(this));
          },
          _save: function () {
            this._activeMode.handler.save(),
              this._activeMode && this._activeMode.handler.disable();
          },
          _clearAllLayers: function () {
            this._activeMode.handler.removeAllLayers(),
              this._activeMode && this._activeMode.handler.disable();
          },
          _checkDisabled: function () {
            var o,
              h = 0 !== this.options.featureGroup.getLayers().length;
            this.options.edit &&
              ((o = this._modes[L.EditToolbar.Edit.TYPE].button),
              h
                ? L.DomUtil.removeClass(o, "leaflet-disabled")
                : L.DomUtil.addClass(o, "leaflet-disabled"),
              o.setAttribute(
                "title",
                h
                  ? L.drawLocal.edit.toolbar.buttons.edit
                  : L.drawLocal.edit.toolbar.buttons.editDisabled
              )),
              this.options.remove &&
                ((o = this._modes[L.EditToolbar.Delete.TYPE].button),
                h
                  ? L.DomUtil.removeClass(o, "leaflet-disabled")
                  : L.DomUtil.addClass(o, "leaflet-disabled"),
                o.setAttribute(
                  "title",
                  h
                    ? L.drawLocal.edit.toolbar.buttons.remove
                    : L.drawLocal.edit.toolbar.buttons.removeDisabled
                ));
          },
        })),
        (L.EditToolbar.Edit = L.Handler.extend({
          statics: { TYPE: "edit" },
          initialize: function (o, r) {
            if (
              (L.Handler.prototype.initialize.call(this, o),
              L.setOptions(this, r),
              (this._featureGroup = r.featureGroup),
              !(this._featureGroup instanceof L.FeatureGroup))
            )
              throw new Error("options.featureGroup must be a L.FeatureGroup");
            (this._uneditedLayerProps = {}),
              (this.type = L.EditToolbar.Edit.TYPE);
            var h = L.version.split(".");
            1 === parseInt(h[0], 10) && parseInt(h[1], 10) >= 2
              ? L.EditToolbar.Edit.include(L.Evented.prototype)
              : L.EditToolbar.Edit.include(L.Mixin.Events);
          },
          enable: function () {
            !this._enabled &&
              this._hasAvailableLayers() &&
              (this.fire("enabled", { handler: this.type }),
              this._map.fire(L.Draw.Event.EDITSTART, { handler: this.type }),
              L.Handler.prototype.enable.call(this),
              this._featureGroup
                .on("layeradd", this._enableLayerEdit, this)
                .on("layerremove", this._disableLayerEdit, this));
          },
          disable: function () {
            this._enabled &&
              (this._featureGroup
                .off("layeradd", this._enableLayerEdit, this)
                .off("layerremove", this._disableLayerEdit, this),
              L.Handler.prototype.disable.call(this),
              this._map.fire(L.Draw.Event.EDITSTOP, { handler: this.type }),
              this.fire("disabled", { handler: this.type }));
          },
          addHooks: function () {
            var o = this._map;
            o &&
              (o.getContainer().focus(),
              this._featureGroup.eachLayer(this._enableLayerEdit, this),
              (this._tooltip = new L.Draw.Tooltip(this._map)),
              this._tooltip.updateContent({
                text: L.drawLocal.edit.handlers.edit.tooltip.text,
                subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext,
              }),
              (o._editTooltip = this._tooltip),
              this._updateTooltip(),
              this._map
                .on("mousemove", this._onMouseMove, this)
                .on("touchmove", this._onMouseMove, this)
                .on("MSPointerMove", this._onMouseMove, this)
                .on(L.Draw.Event.EDITVERTEX, this._updateTooltip, this));
          },
          removeHooks: function () {
            this._map &&
              (this._featureGroup.eachLayer(this._disableLayerEdit, this),
              (this._uneditedLayerProps = {}),
              this._tooltip.dispose(),
              (this._tooltip = null),
              this._map
                .off("mousemove", this._onMouseMove, this)
                .off("touchmove", this._onMouseMove, this)
                .off("MSPointerMove", this._onMouseMove, this)
                .off(L.Draw.Event.EDITVERTEX, this._updateTooltip, this));
          },
          revertLayers: function () {
            this._featureGroup.eachLayer(function (o) {
              this._revertLayer(o);
            }, this);
          },
          save: function () {
            var o = new L.LayerGroup();
            this._featureGroup.eachLayer(function (r) {
              r.edited && (o.addLayer(r), (r.edited = !1));
            }),
              this._map.fire(L.Draw.Event.EDITED, { layers: o });
          },
          _backupLayer: function (o) {
            var r = L.Util.stamp(o);
            this._uneditedLayerProps[r] ||
              (o instanceof L.Polyline ||
              o instanceof L.Polygon ||
              o instanceof L.Rectangle
                ? (this._uneditedLayerProps[r] = {
                    latlngs: L.LatLngUtil.cloneLatLngs(o.getLatLngs()),
                  })
                : o instanceof L.Circle
                ? (this._uneditedLayerProps[r] = {
                    latlng: L.LatLngUtil.cloneLatLng(o.getLatLng()),
                    radius: o.getRadius(),
                  })
                : (o instanceof L.Marker || o instanceof L.CircleMarker) &&
                  (this._uneditedLayerProps[r] = {
                    latlng: L.LatLngUtil.cloneLatLng(o.getLatLng()),
                  }));
          },
          _getTooltipText: function () {
            return {
              text: L.drawLocal.edit.handlers.edit.tooltip.text,
              subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext,
            };
          },
          _updateTooltip: function () {
            this._tooltip.updateContent(this._getTooltipText());
          },
          _revertLayer: function (o) {
            var r = L.Util.stamp(o);
            (o.edited = !1),
              this._uneditedLayerProps.hasOwnProperty(r) &&
                (o instanceof L.Polyline ||
                o instanceof L.Polygon ||
                o instanceof L.Rectangle
                  ? o.setLatLngs(this._uneditedLayerProps[r].latlngs)
                  : o instanceof L.Circle
                  ? (o.setLatLng(this._uneditedLayerProps[r].latlng),
                    o.setRadius(this._uneditedLayerProps[r].radius))
                  : (o instanceof L.Marker || o instanceof L.CircleMarker) &&
                    o.setLatLng(this._uneditedLayerProps[r].latlng),
                o.fire("revert-edited", { layer: o }));
          },
          _enableLayerEdit: function (o) {
            var r,
              h,
              u = o.layer || o.target || o;
            this._backupLayer(u),
              this.options.poly &&
                ((h = L.Util.extend({}, this.options.poly)),
                (u.options.poly = h)),
              this.options.selectedPathOptions &&
                ((r = L.Util.extend({}, this.options.selectedPathOptions))
                  .maintainColor &&
                  ((r.color = u.options.color),
                  (r.fillColor = u.options.fillColor)),
                (u.options.original = L.extend({}, u.options)),
                (u.options.editing = r)),
              u instanceof L.Marker
                ? (u.editing && u.editing.enable(),
                  u.dragging.enable(),
                  u
                    .on("dragend", this._onMarkerDragEnd)
                    .on("touchmove", this._onTouchMove, this)
                    .on("MSPointerMove", this._onTouchMove, this)
                    .on("touchend", this._onMarkerDragEnd, this)
                    .on("MSPointerUp", this._onMarkerDragEnd, this))
                : u.editing.enable();
          },
          _disableLayerEdit: function (o) {
            var r = o.layer || o.target || o;
            (r.edited = !1),
              r.editing && r.editing.disable(),
              delete r.options.editing,
              delete r.options.original,
              this._selectedPathOptions &&
                (r instanceof L.Marker
                  ? this._toggleMarkerHighlight(r)
                  : (r.setStyle(r.options.previousOptions),
                    delete r.options.previousOptions)),
              r instanceof L.Marker
                ? (r.dragging.disable(),
                  r
                    .off("dragend", this._onMarkerDragEnd, this)
                    .off("touchmove", this._onTouchMove, this)
                    .off("MSPointerMove", this._onTouchMove, this)
                    .off("touchend", this._onMarkerDragEnd, this)
                    .off("MSPointerUp", this._onMarkerDragEnd, this))
                : r.editing.disable();
          },
          _onMouseMove: function (o) {
            this._tooltip.updatePosition(o.latlng);
          },
          _onMarkerDragEnd: function (o) {
            var r = o.target;
            (r.edited = !0),
              this._map.fire(L.Draw.Event.EDITMOVE, { layer: r });
          },
          _onTouchMove: function (o) {
            var h = this._map.mouseEventToLayerPoint(
                o.originalEvent.changedTouches[0]
              ),
              u = this._map.layerPointToLatLng(h);
            o.target.setLatLng(u);
          },
          _hasAvailableLayers: function () {
            return 0 !== this._featureGroup.getLayers().length;
          },
        })),
        (L.EditToolbar.Delete = L.Handler.extend({
          statics: { TYPE: "remove" },
          initialize: function (o, r) {
            if (
              (L.Handler.prototype.initialize.call(this, o),
              L.Util.setOptions(this, r),
              (this._deletableLayers = this.options.featureGroup),
              !(this._deletableLayers instanceof L.FeatureGroup))
            )
              throw new Error("options.featureGroup must be a L.FeatureGroup");
            this.type = L.EditToolbar.Delete.TYPE;
            var h = L.version.split(".");
            1 === parseInt(h[0], 10) && parseInt(h[1], 10) >= 2
              ? L.EditToolbar.Delete.include(L.Evented.prototype)
              : L.EditToolbar.Delete.include(L.Mixin.Events);
          },
          enable: function () {
            !this._enabled &&
              this._hasAvailableLayers() &&
              (this.fire("enabled", { handler: this.type }),
              this._map.fire(L.Draw.Event.DELETESTART, { handler: this.type }),
              L.Handler.prototype.enable.call(this),
              this._deletableLayers
                .on("layeradd", this._enableLayerDelete, this)
                .on("layerremove", this._disableLayerDelete, this));
          },
          disable: function () {
            this._enabled &&
              (this._deletableLayers
                .off("layeradd", this._enableLayerDelete, this)
                .off("layerremove", this._disableLayerDelete, this),
              L.Handler.prototype.disable.call(this),
              this._map.fire(L.Draw.Event.DELETESTOP, { handler: this.type }),
              this.fire("disabled", { handler: this.type }));
          },
          addHooks: function () {
            var o = this._map;
            o &&
              (o.getContainer().focus(),
              this._deletableLayers.eachLayer(this._enableLayerDelete, this),
              (this._deletedLayers = new L.LayerGroup()),
              (this._tooltip = new L.Draw.Tooltip(this._map)),
              this._tooltip.updateContent({
                text: L.drawLocal.edit.handlers.remove.tooltip.text,
              }),
              this._map.on("mousemove", this._onMouseMove, this));
          },
          removeHooks: function () {
            this._map &&
              (this._deletableLayers.eachLayer(this._disableLayerDelete, this),
              (this._deletedLayers = null),
              this._tooltip.dispose(),
              (this._tooltip = null),
              this._map.off("mousemove", this._onMouseMove, this));
          },
          revertLayers: function () {
            this._deletedLayers.eachLayer(function (o) {
              this._deletableLayers.addLayer(o),
                o.fire("revert-deleted", { layer: o });
            }, this);
          },
          save: function () {
            this._map.fire(L.Draw.Event.DELETED, {
              layers: this._deletedLayers,
            });
          },
          removeAllLayers: function () {
            this._deletableLayers.eachLayer(function (o) {
              this._removeLayer({ layer: o });
            }, this),
              this.save();
          },
          _enableLayerDelete: function (o) {
            (o.layer || o.target || o).on("click", this._removeLayer, this);
          },
          _disableLayerDelete: function (o) {
            var r = o.layer || o.target || o;
            r.off("click", this._removeLayer, this),
              this._deletedLayers.removeLayer(r);
          },
          _removeLayer: function (o) {
            var r = o.layer || o.target || o;
            this._deletableLayers.removeLayer(r),
              this._deletedLayers.addLayer(r),
              r.fire("deleted");
          },
          _onMouseMove: function (o) {
            this._tooltip.updatePosition(o.latlng);
          },
          _hasAvailableLayers: function () {
            return 0 !== this._deletableLayers.getLayers().length;
          },
        }));
    },
    8407: function (ot, G) {
      !(function (p) {
        "use strict";
        function o(t) {
          var e, i, n, s;
          for (i = 1, n = arguments.length; i < n; i++)
            for (e in (s = arguments[i])) t[e] = s[e];
          return t;
        }
        var r =
          Object.create ||
          (function () {
            function t() {}
            return function (e) {
              return (t.prototype = e), new t();
            };
          })();
        function h(t, e) {
          var i = Array.prototype.slice;
          if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
          var n = i.call(arguments, 2);
          return function () {
            return t.apply(
              e,
              n.length ? n.concat(i.call(arguments)) : arguments
            );
          };
        }
        var u = 0;
        function f(t) {
          return "_leaflet_id" in t || (t._leaflet_id = ++u), t._leaflet_id;
        }
        function g(t, e, i) {
          var n, s, a, l;
          return (
            (l = function () {
              (n = !1), s && (a.apply(i, s), (s = !1));
            }),
            (a = function () {
              n
                ? (s = arguments)
                : (t.apply(i, arguments), setTimeout(l, e), (n = !0));
            }),
            a
          );
        }
        function v(t, e, i) {
          var n = e[1],
            s = e[0],
            a = n - s;
          return t === n && i ? t : ((((t - s) % a) + a) % a) + s;
        }
        function w() {
          return !1;
        }
        function S(t, e) {
          if (!1 === e) return t;
          var i = Math.pow(10, void 0 === e ? 6 : e);
          return Math.round(t * i) / i;
        }
        function xt(t) {
          return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
        }
        function O(t) {
          return xt(t).split(/\s+/);
        }
        function b(t, e) {
          for (var i in (Object.prototype.hasOwnProperty.call(t, "options") ||
            (t.options = t.options ? r(t.options) : {}),
          e))
            t.options[i] = e[i];
          return t.options;
        }
        function P(t, e, i) {
          var n = [];
          for (var s in t)
            n.push(
              encodeURIComponent(i ? s.toUpperCase() : s) +
                "=" +
                encodeURIComponent(t[s])
            );
          return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&");
        }
        var M = /\{ *([\w_ -]+) *\}/g;
        function q(t, e) {
          return t.replace(M, function (i, n) {
            var s = e[n];
            if (void 0 === s)
              throw new Error("No value provided for variable " + i);
            return "function" == typeof s && (s = s(e)), s;
          });
        }
        var Z =
          Array.isArray ||
          function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
          };
        function Y(t, e) {
          for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
          return -1;
        }
        var st = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        function ve(t) {
          return window["webkit" + t] || window["moz" + t] || window["ms" + t];
        }
        var ti = 0;
        function ei(t) {
          var e = +new Date(),
            i = Math.max(0, 16 - (e - ti));
          return (ti = e + i), window.setTimeout(t, i);
        }
        var Le =
            window.requestAnimationFrame || ve("RequestAnimationFrame") || ei,
          ii =
            window.cancelAnimationFrame ||
            ve("CancelAnimationFrame") ||
            ve("CancelRequestAnimationFrame") ||
            function (t) {
              window.clearTimeout(t);
            };
        function X(t, e, i) {
          if (!i || Le !== ei) return Le.call(window, h(t, e));
          t.call(e);
        }
        function tt(t) {
          t && ii.call(window, t);
        }
        var pn = {
          __proto__: null,
          extend: o,
          create: r,
          bind: h,
          get lastId() {
            return u;
          },
          stamp: f,
          throttle: g,
          wrapNum: v,
          falseFn: w,
          formatNum: S,
          trim: xt,
          splitWords: O,
          setOptions: b,
          getParamString: P,
          template: q,
          isArray: Z,
          indexOf: Y,
          emptyImageUrl: st,
          requestFn: Le,
          cancelFn: ii,
          requestAnimFrame: X,
          cancelAnimFrame: tt,
        };
        function dt() {}
        (dt.extend = function (t) {
          var e = function () {
              b(this),
                this.initialize && this.initialize.apply(this, arguments),
                this.callInitHooks();
            },
            i = (e.__super__ = this.prototype),
            n = r(i);
          for (var s in ((n.constructor = e), (e.prototype = n), this))
            Object.prototype.hasOwnProperty.call(this, s) &&
              "prototype" !== s &&
              "__super__" !== s &&
              (e[s] = this[s]);
          return (
            t.statics && o(e, t.statics),
            t.includes &&
              ((function mn(t) {
                if (!(typeof L > "u") && L && L.Mixin) {
                  t = Z(t) ? t : [t];
                  for (var e = 0; e < t.length; e++)
                    t[e] === L.Mixin.Events &&
                      console.warn(
                        "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
                        new Error().stack
                      );
                }
              })(t.includes),
              o.apply(null, [n].concat(t.includes))),
            o(n, t),
            delete n.statics,
            delete n.includes,
            n.options &&
              ((n.options = i.options ? r(i.options) : {}),
              o(n.options, t.options)),
            (n._initHooks = []),
            (n.callInitHooks = function () {
              if (!this._initHooksCalled) {
                i.callInitHooks && i.callInitHooks.call(this),
                  (this._initHooksCalled = !0);
                for (var a = 0, l = n._initHooks.length; a < l; a++)
                  n._initHooks[a].call(this);
              }
            }),
            e
          );
        }),
          (dt.include = function (t) {
            var e = this.prototype.options;
            return (
              o(this.prototype, t),
              t.options &&
                ((this.prototype.options = e), this.mergeOptions(t.options)),
              this
            );
          }),
          (dt.mergeOptions = function (t) {
            return o(this.prototype.options, t), this;
          }),
          (dt.addInitHook = function (t) {
            var e = Array.prototype.slice.call(arguments, 1),
              i =
                "function" == typeof t
                  ? t
                  : function () {
                      this[t].apply(this, e);
                    };
            return (
              (this.prototype._initHooks = this.prototype._initHooks || []),
              this.prototype._initHooks.push(i),
              this
            );
          });
        var Q = {
          on: function (t, e, i) {
            if ("object" == typeof t) for (var n in t) this._on(n, t[n], e);
            else
              for (var s = 0, a = (t = O(t)).length; s < a; s++)
                this._on(t[s], e, i);
            return this;
          },
          off: function (t, e, i) {
            if (arguments.length)
              if ("object" == typeof t) for (var n in t) this._off(n, t[n], e);
              else {
                t = O(t);
                for (
                  var s = 1 === arguments.length, a = 0, l = t.length;
                  a < l;
                  a++
                )
                  s ? this._off(t[a]) : this._off(t[a], e, i);
              }
            else delete this._events;
            return this;
          },
          _on: function (t, e, i, n) {
            if ("function" == typeof e) {
              if (!1 === this._listens(t, e, i)) {
                i === this && (i = void 0);
                var s = { fn: e, ctx: i };
                n && (s.once = !0),
                  (this._events = this._events || {}),
                  (this._events[t] = this._events[t] || []),
                  this._events[t].push(s);
              }
            } else console.warn("wrong listener type: " + typeof e);
          },
          _off: function (t, e, i) {
            var n, s, a;
            if (this._events && (n = this._events[t])) {
              if (1 === arguments.length) {
                if (this._firingCount)
                  for (s = 0, a = n.length; s < a; s++) n[s].fn = w;
                return void delete this._events[t];
              }
              if ("function" != typeof e)
                return void console.warn("wrong listener type: " + typeof e);
              var l = this._listens(t, e, i);
              !1 !== l &&
                (this._firingCount &&
                  ((n[l].fn = w), (this._events[t] = n = n.slice())),
                n.splice(l, 1));
            }
          },
          fire: function (t, e, i) {
            if (!this.listens(t, i)) return this;
            var n = o({}, e, {
              type: t,
              target: this,
              sourceTarget: (e && e.sourceTarget) || this,
            });
            if (this._events) {
              var s = this._events[t];
              if (s) {
                this._firingCount = this._firingCount + 1 || 1;
                for (var a = 0, l = s.length; a < l; a++) {
                  var c = s[a],
                    _ = c.fn;
                  c.once && this.off(t, _, c.ctx), _.call(c.ctx || this, n);
                }
                this._firingCount--;
              }
            }
            return i && this._propagateEvent(n), this;
          },
          listens: function (t, e, i, n) {
            "string" != typeof t &&
              console.warn('"string" type argument expected');
            var s = e;
            "function" != typeof e && ((n = !!e), (s = void 0), (i = void 0));
            var a = this._events && this._events[t];
            if (a && a.length && !1 !== this._listens(t, s, i)) return !0;
            if (n)
              for (var l in this._eventParents)
                if (this._eventParents[l].listens(t, e, i, n)) return !0;
            return !1;
          },
          _listens: function (t, e, i) {
            if (!this._events) return !1;
            var n = this._events[t] || [];
            if (!e) return !!n.length;
            i === this && (i = void 0);
            for (var s = 0, a = n.length; s < a; s++)
              if (n[s].fn === e && n[s].ctx === i) return s;
            return !1;
          },
          once: function (t, e, i) {
            if ("object" == typeof t) for (var n in t) this._on(n, t[n], e, !0);
            else
              for (var s = 0, a = (t = O(t)).length; s < a; s++)
                this._on(t[s], e, i, !0);
            return this;
          },
          addEventParent: function (t) {
            return (
              (this._eventParents = this._eventParents || {}),
              (this._eventParents[f(t)] = t),
              this
            );
          },
          removeEventParent: function (t) {
            return this._eventParents && delete this._eventParents[f(t)], this;
          },
          _propagateEvent: function (t) {
            for (var e in this._eventParents)
              this._eventParents[e].fire(
                t.type,
                o({ layer: t.target, propagatedFrom: t.target }, t),
                !0
              );
          },
        };
        (Q.addEventListener = Q.on),
          (Q.removeEventListener = Q.clearAllEventListeners = Q.off),
          (Q.addOneTimeEventListener = Q.once),
          (Q.fireEvent = Q.fire),
          (Q.hasEventListeners = Q.listens);
        var Bt = dt.extend(Q);
        function E(t, e, i) {
          (this.x = i ? Math.round(t) : t), (this.y = i ? Math.round(e) : e);
        }
        var ni =
          Math.trunc ||
          function (t) {
            return t > 0 ? Math.floor(t) : Math.ceil(t);
          };
        function k(t, e, i) {
          return t instanceof E
            ? t
            : Z(t)
            ? new E(t[0], t[1])
            : null == t
            ? t
            : "object" == typeof t && "x" in t && "y" in t
            ? new E(t.x, t.y)
            : new E(t, e, i);
        }
        function U(t, e) {
          if (t)
            for (var i = e ? [t, e] : t, n = 0, s = i.length; n < s; n++)
              this.extend(i[n]);
        }
        function $(t, e) {
          return !t || t instanceof U ? t : new U(t, e);
        }
        function J(t, e) {
          if (t)
            for (var i = e ? [t, e] : t, n = 0, s = i.length; n < s; n++)
              this.extend(i[n]);
        }
        function K(t, e) {
          return t instanceof J ? t : new J(t, e);
        }
        function B(t, e, i) {
          if (isNaN(t) || isNaN(e))
            throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
          (this.lat = +t), (this.lng = +e), void 0 !== i && (this.alt = +i);
        }
        function R(t, e, i) {
          return t instanceof B
            ? t
            : Z(t) && "object" != typeof t[0]
            ? 3 === t.length
              ? new B(t[0], t[1], t[2])
              : 2 === t.length
              ? new B(t[0], t[1])
              : null
            : null == t
            ? t
            : "object" == typeof t && "lat" in t
            ? new B(t.lat, "lng" in t ? t.lng : t.lon, t.alt)
            : void 0 === e
            ? null
            : new B(t, e, i);
        }
        (E.prototype = {
          clone: function () {
            return new E(this.x, this.y);
          },
          add: function (t) {
            return this.clone()._add(k(t));
          },
          _add: function (t) {
            return (this.x += t.x), (this.y += t.y), this;
          },
          subtract: function (t) {
            return this.clone()._subtract(k(t));
          },
          _subtract: function (t) {
            return (this.x -= t.x), (this.y -= t.y), this;
          },
          divideBy: function (t) {
            return this.clone()._divideBy(t);
          },
          _divideBy: function (t) {
            return (this.x /= t), (this.y /= t), this;
          },
          multiplyBy: function (t) {
            return this.clone()._multiplyBy(t);
          },
          _multiplyBy: function (t) {
            return (this.x *= t), (this.y *= t), this;
          },
          scaleBy: function (t) {
            return new E(this.x * t.x, this.y * t.y);
          },
          unscaleBy: function (t) {
            return new E(this.x / t.x, this.y / t.y);
          },
          round: function () {
            return this.clone()._round();
          },
          _round: function () {
            return (
              (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
            );
          },
          floor: function () {
            return this.clone()._floor();
          },
          _floor: function () {
            return (
              (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
            );
          },
          ceil: function () {
            return this.clone()._ceil();
          },
          _ceil: function () {
            return (
              (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this
            );
          },
          trunc: function () {
            return this.clone()._trunc();
          },
          _trunc: function () {
            return (this.x = ni(this.x)), (this.y = ni(this.y)), this;
          },
          distanceTo: function (t) {
            var e = (t = k(t)).x - this.x,
              i = t.y - this.y;
            return Math.sqrt(e * e + i * i);
          },
          equals: function (t) {
            return (t = k(t)).x === this.x && t.y === this.y;
          },
          contains: function (t) {
            return (
              (t = k(t)),
              Math.abs(t.x) <= Math.abs(this.x) &&
                Math.abs(t.y) <= Math.abs(this.y)
            );
          },
          toString: function () {
            return "Point(" + S(this.x) + ", " + S(this.y) + ")";
          },
        }),
          (U.prototype = {
            extend: function (t) {
              var e, i;
              if (!t) return this;
              if (t instanceof E || "number" == typeof t[0] || "x" in t)
                e = i = k(t);
              else if (((i = (t = $(t)).max), !(e = t.min) || !i)) return this;
              return (
                this.min || this.max
                  ? ((this.min.x = Math.min(e.x, this.min.x)),
                    (this.max.x = Math.max(i.x, this.max.x)),
                    (this.min.y = Math.min(e.y, this.min.y)),
                    (this.max.y = Math.max(i.y, this.max.y)))
                  : ((this.min = e.clone()), (this.max = i.clone())),
                this
              );
            },
            getCenter: function (t) {
              return k(
                (this.min.x + this.max.x) / 2,
                (this.min.y + this.max.y) / 2,
                t
              );
            },
            getBottomLeft: function () {
              return k(this.min.x, this.max.y);
            },
            getTopRight: function () {
              return k(this.max.x, this.min.y);
            },
            getTopLeft: function () {
              return this.min;
            },
            getBottomRight: function () {
              return this.max;
            },
            getSize: function () {
              return this.max.subtract(this.min);
            },
            contains: function (t) {
              var e, i;
              return (
                (t =
                  "number" == typeof t[0] || t instanceof E
                    ? k(t)
                    : $(t)) instanceof U
                  ? ((e = t.min), (i = t.max))
                  : (e = i = t),
                e.x >= this.min.x &&
                  i.x <= this.max.x &&
                  e.y >= this.min.y &&
                  i.y <= this.max.y
              );
            },
            intersects: function (t) {
              t = $(t);
              var e = this.min,
                i = this.max,
                n = t.min,
                s = t.max;
              return s.x >= e.x && n.x <= i.x && s.y >= e.y && n.y <= i.y;
            },
            overlaps: function (t) {
              t = $(t);
              var e = this.min,
                i = this.max,
                n = t.min,
                s = t.max;
              return s.x > e.x && n.x < i.x && s.y > e.y && n.y < i.y;
            },
            isValid: function () {
              return !(!this.min || !this.max);
            },
            pad: function (t) {
              var e = this.min,
                i = this.max,
                n = Math.abs(e.x - i.x) * t,
                s = Math.abs(e.y - i.y) * t;
              return $(k(e.x - n, e.y - s), k(i.x + n, i.y + s));
            },
            equals: function (t) {
              return (
                !!t &&
                ((t = $(t)),
                this.min.equals(t.getTopLeft()) &&
                  this.max.equals(t.getBottomRight()))
              );
            },
          }),
          (J.prototype = {
            extend: function (t) {
              var n,
                s,
                e = this._southWest,
                i = this._northEast;
              if (t instanceof B) (n = t), (s = t);
              else {
                if (!(t instanceof J))
                  return t ? this.extend(R(t) || K(t)) : this;
                if (((s = t._northEast), !(n = t._southWest) || !s))
                  return this;
              }
              return (
                e || i
                  ? ((e.lat = Math.min(n.lat, e.lat)),
                    (e.lng = Math.min(n.lng, e.lng)),
                    (i.lat = Math.max(s.lat, i.lat)),
                    (i.lng = Math.max(s.lng, i.lng)))
                  : ((this._southWest = new B(n.lat, n.lng)),
                    (this._northEast = new B(s.lat, s.lng))),
                this
              );
            },
            pad: function (t) {
              var e = this._southWest,
                i = this._northEast,
                n = Math.abs(e.lat - i.lat) * t,
                s = Math.abs(e.lng - i.lng) * t;
              return new J(
                new B(e.lat - n, e.lng - s),
                new B(i.lat + n, i.lng + s)
              );
            },
            getCenter: function () {
              return new B(
                (this._southWest.lat + this._northEast.lat) / 2,
                (this._southWest.lng + this._northEast.lng) / 2
              );
            },
            getSouthWest: function () {
              return this._southWest;
            },
            getNorthEast: function () {
              return this._northEast;
            },
            getNorthWest: function () {
              return new B(this.getNorth(), this.getWest());
            },
            getSouthEast: function () {
              return new B(this.getSouth(), this.getEast());
            },
            getWest: function () {
              return this._southWest.lng;
            },
            getSouth: function () {
              return this._southWest.lat;
            },
            getEast: function () {
              return this._northEast.lng;
            },
            getNorth: function () {
              return this._northEast.lat;
            },
            contains: function (t) {
              t =
                "number" == typeof t[0] || t instanceof B || "lat" in t
                  ? R(t)
                  : K(t);
              var n,
                s,
                e = this._southWest,
                i = this._northEast;
              return (
                t instanceof J
                  ? ((n = t.getSouthWest()), (s = t.getNorthEast()))
                  : (n = s = t),
                n.lat >= e.lat &&
                  s.lat <= i.lat &&
                  n.lng >= e.lng &&
                  s.lng <= i.lng
              );
            },
            intersects: function (t) {
              t = K(t);
              var e = this._southWest,
                i = this._northEast,
                n = t.getSouthWest(),
                s = t.getNorthEast();
              return (
                s.lat >= e.lat &&
                n.lat <= i.lat &&
                s.lng >= e.lng &&
                n.lng <= i.lng
              );
            },
            overlaps: function (t) {
              t = K(t);
              var e = this._southWest,
                i = this._northEast,
                n = t.getSouthWest(),
                s = t.getNorthEast();
              return (
                s.lat > e.lat && n.lat < i.lat && s.lng > e.lng && n.lng < i.lng
              );
            },
            toBBoxString: function () {
              return [
                this.getWest(),
                this.getSouth(),
                this.getEast(),
                this.getNorth(),
              ].join(",");
            },
            equals: function (t, e) {
              return (
                !!t &&
                ((t = K(t)),
                this._southWest.equals(t.getSouthWest(), e) &&
                  this._northEast.equals(t.getNorthEast(), e))
              );
            },
            isValid: function () {
              return !(!this._southWest || !this._northEast);
            },
          }),
          (B.prototype = {
            equals: function (t, e) {
              return (
                !!t &&
                ((t = R(t)),
                Math.max(
                  Math.abs(this.lat - t.lat),
                  Math.abs(this.lng - t.lng)
                ) <= (void 0 === e ? 1e-9 : e))
              );
            },
            toString: function (t) {
              return "LatLng(" + S(this.lat, t) + ", " + S(this.lng, t) + ")";
            },
            distanceTo: function (t) {
              return vt.distance(this, R(t));
            },
            wrap: function () {
              return vt.wrapLatLng(this);
            },
            toBounds: function (t) {
              var e = (180 * t) / 40075017,
                i = e / Math.cos((Math.PI / 180) * this.lat);
              return K(
                [this.lat - e, this.lng - i],
                [this.lat + e, this.lng + i]
              );
            },
            clone: function () {
              return new B(this.lat, this.lng, this.alt);
            },
          });
        var t,
          _t = {
            latLngToPoint: function (t, e) {
              var i = this.projection.project(t),
                n = this.scale(e);
              return this.transformation._transform(i, n);
            },
            pointToLatLng: function (t, e) {
              var i = this.scale(e),
                n = this.transformation.untransform(t, i);
              return this.projection.unproject(n);
            },
            project: function (t) {
              return this.projection.project(t);
            },
            unproject: function (t) {
              return this.projection.unproject(t);
            },
            scale: function (t) {
              return 256 * Math.pow(2, t);
            },
            zoom: function (t) {
              return Math.log(t / 256) / Math.LN2;
            },
            getProjectedBounds: function (t) {
              if (this.infinite) return null;
              var e = this.projection.bounds,
                i = this.scale(t);
              return new U(
                this.transformation.transform(e.min, i),
                this.transformation.transform(e.max, i)
              );
            },
            infinite: !1,
            wrapLatLng: function (t) {
              var e = this.wrapLng ? v(t.lng, this.wrapLng, !0) : t.lng;
              return new B(
                this.wrapLat ? v(t.lat, this.wrapLat, !0) : t.lat,
                e,
                t.alt
              );
            },
            wrapLatLngBounds: function (t) {
              var e = t.getCenter(),
                i = this.wrapLatLng(e),
                n = e.lat - i.lat,
                s = e.lng - i.lng;
              if (0 === n && 0 === s) return t;
              var a = t.getSouthWest(),
                l = t.getNorthEast();
              return new J(
                new B(a.lat - n, a.lng - s),
                new B(l.lat - n, l.lng - s)
              );
            },
          },
          vt = o({}, _t, {
            wrapLng: [-180, 180],
            R: 6371e3,
            distance: function (t, e) {
              var i = Math.PI / 180,
                n = t.lat * i,
                s = e.lat * i,
                a = Math.sin(((e.lat - t.lat) * i) / 2),
                l = Math.sin(((e.lng - t.lng) * i) / 2),
                c = a * a + Math.cos(n) * Math.cos(s) * l * l,
                _ = 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c));
              return this.R * _;
            },
          }),
          ye = {
            R: 6378137,
            MAX_LATITUDE: 85.0511287798,
            project: function (t) {
              var e = Math.PI / 180,
                i = this.MAX_LATITUDE,
                n = Math.max(Math.min(i, t.lat), -i),
                s = Math.sin(n * e);
              return new E(
                this.R * t.lng * e,
                (this.R * Math.log((1 + s) / (1 - s))) / 2
              );
            },
            unproject: function (t) {
              var e = 180 / Math.PI;
              return new B(
                (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
                (t.x * e) / this.R
              );
            },
            bounds: ((t = 6378137 * Math.PI), new U([-t, -t], [t, t])),
          };
        function we(t, e, i, n) {
          if (Z(t))
            return (
              (this._a = t[0]),
              (this._b = t[1]),
              (this._c = t[2]),
              void (this._d = t[3])
            );
          (this._a = t), (this._b = e), (this._c = i), (this._d = n);
        }
        function Rt(t, e, i, n) {
          return new we(t, e, i, n);
        }
        we.prototype = {
          transform: function (t, e) {
            return this._transform(t.clone(), e);
          },
          _transform: function (t, e) {
            return (
              (t.x = (e = e || 1) * (this._a * t.x + this._b)),
              (t.y = e * (this._c * t.y + this._d)),
              t
            );
          },
          untransform: function (t, e) {
            return new E(
              (t.x / (e = e || 1) - this._b) / this._a,
              (t.y / e - this._d) / this._c
            );
          },
        };
        var xe = o({}, vt, {
            code: "EPSG:3857",
            projection: ye,
            transformation: (function () {
              var t = 0.5 / (Math.PI * ye.R);
              return Rt(t, 0.5, -t, 0.5);
            })(),
          }),
          gn = o({}, xe, { code: "EPSG:900913" });
        function si(t) {
          return document.createElementNS("http://www.w3.org/2000/svg", t);
        }
        function ri(t, e) {
          var n,
            s,
            a,
            l,
            c,
            _,
            i = "";
          for (n = 0, a = t.length; n < a; n++) {
            for (s = 0, l = (c = t[n]).length; s < l; s++)
              i += (s ? "L" : "M") + (_ = c[s]).x + " " + _.y;
            i += e ? (x.svg ? "z" : "x") : "";
          }
          return i || "M0 0";
        }
        var be = document.documentElement.style,
          Jt = "ActiveXObject" in window,
          vn = Jt && !document.addEventListener,
          ai = "msLaunchUri" in navigator && !("documentMode" in document),
          Pe = ht("webkit"),
          hi = ht("android"),
          li = ht("android 2") || ht("android 3"),
          Ln = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
          yn = hi && ht("Google") && Ln < 537 && !("AudioNode" in window),
          Me = !!window.opera,
          ci = !ai && ht("chrome"),
          ui = ht("gecko") && !Pe && !Me && !Jt,
          wn = !ci && ht("safari"),
          di = ht("phantom"),
          _i = "OTransition" in be,
          xn = 0 === navigator.platform.indexOf("Win"),
          fi = Jt && "transition" in be,
          Te =
            "WebKitCSSMatrix" in window &&
            "m11" in new window.WebKitCSSMatrix() &&
            !li,
          pi = "MozPerspective" in be,
          bn = !window.L_DISABLE_3D && (fi || Te || pi) && !_i && !di,
          Nt = typeof orientation < "u" || ht("mobile"),
          Pn = Nt && Pe,
          Mn = Nt && Te,
          mi = !window.PointerEvent && window.MSPointerEvent,
          gi = !(!window.PointerEvent && !mi),
          vi = "ontouchstart" in window || !!window.TouchEvent,
          Tn = !window.L_NO_TOUCH && (vi || gi),
          kn = Nt && Me,
          En = Nt && ui,
          Cn =
            (window.devicePixelRatio ||
              window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
          Dn = (function () {
            var t = !1;
            try {
              var e = Object.defineProperty({}, "passive", {
                get: function () {
                  t = !0;
                },
              });
              window.addEventListener("testPassiveEventSupport", w, e),
                window.removeEventListener("testPassiveEventSupport", w, e);
            } catch {}
            return t;
          })(),
          Sn = !!document.createElement("canvas").getContext,
          ke = !(!document.createElementNS || !si("svg").createSVGRect),
          On =
            !!ke &&
            (function () {
              var t = document.createElement("div");
              return (
                (t.innerHTML = "<svg/>"),
                "http://www.w3.org/2000/svg" ===
                  (t.firstChild && t.firstChild.namespaceURI)
              );
            })(),
          zn =
            !ke &&
            (function () {
              try {
                var t = document.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var e = t.firstChild;
                return (
                  (e.style.behavior = "url(#default#VML)"),
                  e && "object" == typeof e.adj
                );
              } catch {
                return !1;
              }
            })();
        function ht(t) {
          return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
        }
        var x = {
            ie: Jt,
            ielt9: vn,
            edge: ai,
            webkit: Pe,
            android: hi,
            android23: li,
            androidStock: yn,
            opera: Me,
            chrome: ci,
            gecko: ui,
            safari: wn,
            phantom: di,
            opera12: _i,
            win: xn,
            ie3d: fi,
            webkit3d: Te,
            gecko3d: pi,
            any3d: bn,
            mobile: Nt,
            mobileWebkit: Pn,
            mobileWebkit3d: Mn,
            msPointer: mi,
            pointer: gi,
            touch: Tn,
            touchNative: vi,
            mobileOpera: kn,
            mobileGecko: En,
            retina: Cn,
            passiveEvents: Dn,
            canvas: Sn,
            svg: ke,
            vml: zn,
            inlineSvg: On,
            mac: 0 === navigator.platform.indexOf("Mac"),
            linux: 0 === navigator.platform.indexOf("Linux"),
          },
          Li = x.msPointer ? "MSPointerDown" : "pointerdown",
          yi = x.msPointer ? "MSPointerMove" : "pointermove",
          wi = x.msPointer ? "MSPointerUp" : "pointerup",
          xi = x.msPointer ? "MSPointerCancel" : "pointercancel",
          Ee = { touchstart: Li, touchmove: yi, touchend: wi, touchcancel: xi },
          bi = {
            touchstart: function Hn(t, e) {
              e.MSPOINTER_TYPE_TOUCH &&
                e.pointerType === e.MSPOINTER_TYPE_TOUCH &&
                j(e),
                Qt(t, e);
            },
            touchmove: Qt,
            touchend: Qt,
            touchcancel: Qt,
          },
          Ct = {},
          Pi = !1;
        function Zn(t, e, i) {
          return (
            "touchstart" === e &&
              (function Un() {
                Pi ||
                  (document.addEventListener(Li, Rn, !0),
                  document.addEventListener(yi, Nn, !0),
                  document.addEventListener(wi, Mi, !0),
                  document.addEventListener(xi, Mi, !0),
                  (Pi = !0));
              })(),
            bi[e]
              ? ((i = bi[e].bind(this, i)), t.addEventListener(Ee[e], i, !1), i)
              : (console.warn("wrong event specified:", e), w)
          );
        }
        function Rn(t) {
          Ct[t.pointerId] = t;
        }
        function Nn(t) {
          Ct[t.pointerId] && (Ct[t.pointerId] = t);
        }
        function Mi(t) {
          delete Ct[t.pointerId];
        }
        function Qt(t, e) {
          if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
            for (var i in ((e.touches = []), Ct)) e.touches.push(Ct[i]);
            (e.changedTouches = [e]), t(e);
          }
        }
        var Ft,
          Gt,
          Oe,
          ne,
          Ae,
          Ce = ie([
            "transform",
            "webkitTransform",
            "OTransform",
            "MozTransform",
            "msTransform",
          ]),
          Ut = ie([
            "webkitTransition",
            "transition",
            "OTransition",
            "MozTransition",
            "msTransition",
          ]),
          Ti =
            "webkitTransition" === Ut || "OTransition" === Ut
              ? Ut + "End"
              : "transitionend";
        function ki(t) {
          return "string" == typeof t ? document.getElementById(t) : t;
        }
        function Ht(t, e) {
          var i = t.style[e] || (t.currentStyle && t.currentStyle[e]);
          if ((!i || "auto" === i) && document.defaultView) {
            var n = document.defaultView.getComputedStyle(t, null);
            i = n ? n[e] : null;
          }
          return "auto" === i ? null : i;
        }
        function A(t, e, i) {
          var n = document.createElement(t);
          return (n.className = e || ""), i && i.appendChild(n), n;
        }
        function H(t) {
          var e = t.parentNode;
          e && e.removeChild(t);
        }
        function te(t) {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
        }
        function Dt(t) {
          var e = t.parentNode;
          e && e.lastChild !== t && e.appendChild(t);
        }
        function St(t) {
          var e = t.parentNode;
          e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
        }
        function De(t, e) {
          if (void 0 !== t.classList) return t.classList.contains(e);
          var i = ee(t);
          return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
        }
        function D(t, e) {
          if (void 0 !== t.classList)
            for (var i = O(e), n = 0, s = i.length; n < s; n++)
              t.classList.add(i[n]);
          else if (!De(t, e)) {
            var a = ee(t);
            Se(t, (a ? a + " " : "") + e);
          }
        }
        function F(t, e) {
          void 0 !== t.classList
            ? t.classList.remove(e)
            : Se(t, xt((" " + ee(t) + " ").replace(" " + e + " ", " ")));
        }
        function Se(t, e) {
          void 0 === t.className.baseVal
            ? (t.className = e)
            : (t.className.baseVal = e);
        }
        function ee(t) {
          return (
            t.correspondingElement && (t = t.correspondingElement),
            void 0 === t.className.baseVal ? t.className : t.className.baseVal
          );
        }
        function et(t, e) {
          "opacity" in t.style
            ? (t.style.opacity = e)
            : "filter" in t.style &&
              (function Yn(t, e) {
                var i = !1,
                  n = "DXImageTransform.Microsoft.Alpha";
                try {
                  i = t.filters.item(n);
                } catch {
                  if (1 === e) return;
                }
                (e = Math.round(100 * e)),
                  i
                    ? ((i.Enabled = 100 !== e), (i.Opacity = e))
                    : (t.style.filter +=
                        " progid:" + n + "(opacity=" + e + ")");
              })(t, e);
        }
        function ie(t) {
          for (var e = document.documentElement.style, i = 0; i < t.length; i++)
            if (t[i] in e) return t[i];
          return !1;
        }
        function bt(t, e, i) {
          var n = e || new E(0, 0);
          t.style[Ce] =
            (x.ie3d
              ? "translate(" + n.x + "px," + n.y + "px)"
              : "translate3d(" + n.x + "px," + n.y + "px,0)") +
            (i ? " scale(" + i + ")" : "");
        }
        function W(t, e) {
          (t._leaflet_pos = e),
            x.any3d
              ? bt(t, e)
              : ((t.style.left = e.x + "px"), (t.style.top = e.y + "px"));
        }
        function Pt(t) {
          return t._leaflet_pos || new E(0, 0);
        }
        if ("onselectstart" in document)
          (Ft = function () {
            C(window, "selectstart", j);
          }),
            (Gt = function () {
              N(window, "selectstart", j);
            });
        else {
          var Wt = ie([
            "userSelect",
            "WebkitUserSelect",
            "OUserSelect",
            "MozUserSelect",
            "msUserSelect",
          ]);
          (Ft = function () {
            if (Wt) {
              var t = document.documentElement.style;
              (Oe = t[Wt]), (t[Wt] = "none");
            }
          }),
            (Gt = function () {
              Wt && ((document.documentElement.style[Wt] = Oe), (Oe = void 0));
            });
        }
        function ze() {
          C(window, "dragstart", j);
        }
        function Ie() {
          N(window, "dragstart", j);
        }
        function Ze(t) {
          for (; -1 === t.tabIndex; ) t = t.parentNode;
          t.style &&
            (oe(),
            (ne = t),
            (Ae = t.style.outline),
            (t.style.outline = "none"),
            C(window, "keydown", oe));
        }
        function oe() {
          ne &&
            ((ne.style.outline = Ae),
            (ne = void 0),
            (Ae = void 0),
            N(window, "keydown", oe));
        }
        function Ei(t) {
          do {
            t = t.parentNode;
          } while (!((t.offsetWidth && t.offsetHeight) || t === document.body));
          return t;
        }
        function Be(t) {
          var e = t.getBoundingClientRect();
          return {
            x: e.width / t.offsetWidth || 1,
            y: e.height / t.offsetHeight || 1,
            boundingClientRect: e,
          };
        }
        var Kn = {
          __proto__: null,
          TRANSFORM: Ce,
          TRANSITION: Ut,
          TRANSITION_END: Ti,
          get: ki,
          getStyle: Ht,
          create: A,
          remove: H,
          empty: te,
          toFront: Dt,
          toBack: St,
          hasClass: De,
          addClass: D,
          removeClass: F,
          setClass: Se,
          getClass: ee,
          setOpacity: et,
          testProp: ie,
          setTransform: bt,
          setPosition: W,
          getPosition: Pt,
          get disableTextSelection() {
            return Ft;
          },
          get enableTextSelection() {
            return Gt;
          },
          disableImageDrag: ze,
          enableImageDrag: Ie,
          preventOutline: Ze,
          restoreOutline: oe,
          getSizedParentNode: Ei,
          getScale: Be,
        };
        function C(t, e, i, n) {
          if (e && "object" == typeof e) for (var s in e) Ne(t, s, e[s], i);
          else
            for (var a = 0, l = (e = O(e)).length; a < l; a++)
              Ne(t, e[a], i, n);
          return this;
        }
        var lt = "_leaflet_events";
        function N(t, e, i, n) {
          if (1 === arguments.length) Ci(t), delete t[lt];
          else if (e && "object" == typeof e)
            for (var s in e) Ue(t, s, e[s], i);
          else if (((e = O(e)), 2 === arguments.length))
            Ci(t, function (c) {
              return -1 !== Y(e, c);
            });
          else for (var a = 0, l = e.length; a < l; a++) Ue(t, e[a], i, n);
          return this;
        }
        function Ci(t, e) {
          for (var i in t[lt]) {
            var n = i.split(/\d/)[0];
            (!e || e(n)) && Ue(t, n, null, null, i);
          }
        }
        var Re = {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          wheel: !("onwheel" in window) && "mousewheel",
        };
        function Ne(t, e, i, n) {
          var s = e + f(i) + (n ? "_" + f(n) : "");
          if (t[lt] && t[lt][s]) return this;
          var a = function (c) {
              return i.call(n || t, c || window.event);
            },
            l = a;
          !x.touchNative && x.pointer && 0 === e.indexOf("touch")
            ? (a = Zn(t, e, a))
            : x.touch && "dblclick" === e
            ? (a = (function Wn(t, e) {
                t.addEventListener("dblclick", e);
                var n,
                  i = 0;
                function s(a) {
                  if (1 === a.detail) {
                    if (
                      "mouse" !== a.pointerType &&
                      (!a.sourceCapabilities ||
                        a.sourceCapabilities.firesTouchEvents)
                    ) {
                      var l = Di(a);
                      if (
                        !l.some(function (_) {
                          return (
                            _ instanceof HTMLLabelElement && _.attributes.for
                          );
                        }) ||
                        l.some(function (_) {
                          return (
                            _ instanceof HTMLInputElement ||
                            _ instanceof HTMLSelectElement
                          );
                        })
                      ) {
                        var c = Date.now();
                        c - i <= 200
                          ? 2 == ++n &&
                            e(
                              (function Fn(t) {
                                var i,
                                  n,
                                  e = {};
                                for (n in t)
                                  e[n] = (i = t[n]) && i.bind ? i.bind(t) : i;
                                return (
                                  (t = e),
                                  (e.type = "dblclick"),
                                  (e.detail = 2),
                                  (e.isTrusted = !1),
                                  (e._simulated = !0),
                                  e
                                );
                              })(a)
                            )
                          : (n = 1),
                          (i = c);
                      }
                    }
                  } else n = a.detail;
                }
                return (
                  t.addEventListener("click", s),
                  { dblclick: e, simDblclick: s }
                );
              })(t, a))
            : "addEventListener" in t
            ? "touchstart" === e ||
              "touchmove" === e ||
              "wheel" === e ||
              "mousewheel" === e
              ? t.addEventListener(
                  Re[e] || e,
                  a,
                  !!x.passiveEvents && { passive: !1 }
                )
              : "mouseenter" === e || "mouseleave" === e
              ? t.addEventListener(
                  Re[e],
                  (a = function (c) {
                    (c = c || window.event), Fe(t, c) && l(c);
                  }),
                  !1
                )
              : t.addEventListener(e, l, !1)
            : t.attachEvent("on" + e, a),
            (t[lt] = t[lt] || {}),
            (t[lt][s] = a);
        }
        function Ue(t, e, i, n, s) {
          s = s || e + f(i) + (n ? "_" + f(n) : "");
          var a = t[lt] && t[lt][s];
          if (!a) return this;
          !x.touchNative && x.pointer && 0 === e.indexOf("touch")
            ? (function Bn(t, e, i) {
                Ee[e]
                  ? t.removeEventListener(Ee[e], i, !1)
                  : console.warn("wrong event specified:", e);
              })(t, e, a)
            : x.touch && "dblclick" === e
            ? (function Vn(t, e) {
                t.removeEventListener("dblclick", e.dblclick),
                  t.removeEventListener("click", e.simDblclick);
              })(t, a)
            : "removeEventListener" in t
            ? t.removeEventListener(Re[e] || e, a, !1)
            : t.detachEvent("on" + e, a),
            (t[lt][s] = null);
        }
        function Mt(t) {
          return (
            t.stopPropagation
              ? t.stopPropagation()
              : t.originalEvent
              ? (t.originalEvent._stopped = !0)
              : (t.cancelBubble = !0),
            this
          );
        }
        function He(t) {
          return Ne(t, "wheel", Mt), this;
        }
        function Vt(t) {
          return (
            C(t, "mousedown touchstart dblclick contextmenu", Mt),
            (t._leaflet_disable_click = !0),
            this
          );
        }
        function j(t) {
          return (
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this
          );
        }
        function Tt(t) {
          return j(t), Mt(t), this;
        }
        function Di(t) {
          if (t.composedPath) return t.composedPath();
          for (var e = [], i = t.target; i; ) e.push(i), (i = i.parentNode);
          return e;
        }
        function Si(t, e) {
          if (!e) return new E(t.clientX, t.clientY);
          var i = Be(e),
            n = i.boundingClientRect;
          return new E(
            (t.clientX - n.left) / i.x - e.clientLeft,
            (t.clientY - n.top) / i.y - e.clientTop
          );
        }
        var jn =
          x.linux && x.chrome
            ? window.devicePixelRatio
            : x.mac
            ? 3 * window.devicePixelRatio
            : window.devicePixelRatio > 0
            ? 2 * window.devicePixelRatio
            : 1;
        function Oi(t) {
          return x.edge
            ? t.wheelDeltaY / 2
            : t.deltaY && 0 === t.deltaMode
            ? -t.deltaY / jn
            : t.deltaY && 1 === t.deltaMode
            ? 20 * -t.deltaY
            : t.deltaY && 2 === t.deltaMode
            ? 60 * -t.deltaY
            : t.deltaX || t.deltaZ
            ? 0
            : t.wheelDelta
            ? (t.wheelDeltaY || t.wheelDelta) / 2
            : t.detail && Math.abs(t.detail) < 32765
            ? 20 * -t.detail
            : t.detail
            ? (t.detail / -32765) * 60
            : 0;
        }
        function Fe(t, e) {
          var i = e.relatedTarget;
          if (!i) return !0;
          try {
            for (; i && i !== t; ) i = i.parentNode;
          } catch {
            return !1;
          }
          return i !== t;
        }
        var qn = {
            __proto__: null,
            on: C,
            off: N,
            stopPropagation: Mt,
            disableScrollPropagation: He,
            disableClickPropagation: Vt,
            preventDefault: j,
            stop: Tt,
            getPropagationPath: Di,
            getMousePosition: Si,
            getWheelDelta: Oi,
            isExternalTarget: Fe,
            addListener: C,
            removeListener: N,
          },
          zi = Bt.extend({
            run: function (t, e, i, n) {
              this.stop(),
                (this._el = t),
                (this._inProgress = !0),
                (this._duration = i || 0.25),
                (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
                (this._startPos = Pt(t)),
                (this._offset = e.subtract(this._startPos)),
                (this._startTime = +new Date()),
                this.fire("start"),
                this._animate();
            },
            stop: function () {
              this._inProgress && (this._step(!0), this._complete());
            },
            _animate: function () {
              (this._animId = X(this._animate, this)), this._step();
            },
            _step: function (t) {
              var e = +new Date() - this._startTime,
                i = 1e3 * this._duration;
              e < i
                ? this._runFrame(this._easeOut(e / i), t)
                : (this._runFrame(1), this._complete());
            },
            _runFrame: function (t, e) {
              var i = this._startPos.add(this._offset.multiplyBy(t));
              e && i._round(), W(this._el, i), this.fire("step");
            },
            _complete: function () {
              tt(this._animId), (this._inProgress = !1), this.fire("end");
            },
            _easeOut: function (t) {
              return 1 - Math.pow(1 - t, this._easeOutPower);
            },
          }),
          I = Bt.extend({
            options: {
              crs: xe,
              center: void 0,
              zoom: void 0,
              minZoom: void 0,
              maxZoom: void 0,
              layers: [],
              maxBounds: void 0,
              renderer: void 0,
              zoomAnimation: !0,
              zoomAnimationThreshold: 4,
              fadeAnimation: !0,
              markerZoomAnimation: !0,
              transform3DLimit: 8388608,
              zoomSnap: 1,
              zoomDelta: 1,
              trackResize: !0,
            },
            initialize: function (t, e) {
              (e = b(this, e)),
                (this._handlers = []),
                (this._layers = {}),
                (this._zoomBoundLayers = {}),
                (this._sizeChanged = !0),
                this._initContainer(t),
                this._initLayout(),
                (this._onResize = h(this._onResize, this)),
                this._initEvents(),
                e.maxBounds && this.setMaxBounds(e.maxBounds),
                void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
                e.center &&
                  void 0 !== e.zoom &&
                  this.setView(R(e.center), e.zoom, { reset: !0 }),
                this.callInitHooks(),
                (this._zoomAnimated =
                  Ut &&
                  x.any3d &&
                  !x.mobileOpera &&
                  this.options.zoomAnimation),
                this._zoomAnimated &&
                  (this._createAnimProxy(),
                  C(this._proxy, Ti, this._catchTransitionEnd, this)),
                this._addLayers(this.options.layers);
            },
            setView: function (t, e, i) {
              return (
                (e = void 0 === e ? this._zoom : this._limitZoom(e)),
                (t = this._limitCenter(R(t), e, this.options.maxBounds)),
                (i = i || {}),
                this._stop(),
                this._loaded &&
                !i.reset &&
                !0 !== i &&
                (void 0 !== i.animate &&
                  ((i.zoom = o({ animate: i.animate }, i.zoom)),
                  (i.pan = o(
                    { animate: i.animate, duration: i.duration },
                    i.pan
                  ))),
                this._zoom !== e
                  ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom)
                  : this._tryAnimatedPan(t, i.pan))
                  ? (clearTimeout(this._sizeTimer), this)
                  : (this._resetView(t, e, i.pan && i.pan.noMoveStart), this)
              );
            },
            setZoom: function (t, e) {
              return this._loaded
                ? this.setView(this.getCenter(), t, { zoom: e })
                : ((this._zoom = t), this);
            },
            zoomIn: function (t, e) {
              return this.setZoom(
                this._zoom + (t = t || (x.any3d ? this.options.zoomDelta : 1)),
                e
              );
            },
            zoomOut: function (t, e) {
              return this.setZoom(
                this._zoom - (t = t || (x.any3d ? this.options.zoomDelta : 1)),
                e
              );
            },
            setZoomAround: function (t, e, i) {
              var n = this.getZoomScale(e),
                s = this.getSize().divideBy(2),
                l = (t instanceof E ? t : this.latLngToContainerPoint(t))
                  .subtract(s)
                  .multiplyBy(1 - 1 / n),
                c = this.containerPointToLatLng(s.add(l));
              return this.setView(c, e, { zoom: i });
            },
            _getBoundsCenterZoom: function (t, e) {
              (e = e || {}), (t = t.getBounds ? t.getBounds() : K(t));
              var i = k(e.paddingTopLeft || e.padding || [0, 0]),
                n = k(e.paddingBottomRight || e.padding || [0, 0]),
                s = this.getBoundsZoom(t, !1, i.add(n));
              if (
                (s =
                  "number" == typeof e.maxZoom ? Math.min(e.maxZoom, s) : s) ===
                1 / 0
              )
                return { center: t.getCenter(), zoom: s };
              var a = n.subtract(i).divideBy(2),
                l = this.project(t.getSouthWest(), s),
                c = this.project(t.getNorthEast(), s);
              return {
                center: this.unproject(l.add(c).divideBy(2).add(a), s),
                zoom: s,
              };
            },
            fitBounds: function (t, e) {
              if (!(t = K(t)).isValid())
                throw new Error("Bounds are not valid.");
              var i = this._getBoundsCenterZoom(t, e);
              return this.setView(i.center, i.zoom, e);
            },
            fitWorld: function (t) {
              return this.fitBounds(
                [
                  [-90, -180],
                  [90, 180],
                ],
                t
              );
            },
            panTo: function (t, e) {
              return this.setView(t, this._zoom, { pan: e });
            },
            panBy: function (t, e) {
              if (((e = e || {}), !(t = k(t).round()).x && !t.y))
                return this.fire("moveend");
              if (!0 !== e.animate && !this.getSize().contains(t))
                return (
                  this._resetView(
                    this.unproject(this.project(this.getCenter()).add(t)),
                    this.getZoom()
                  ),
                  this
                );
              if (
                (this._panAnim ||
                  ((this._panAnim = new zi()),
                  this._panAnim.on(
                    {
                      step: this._onPanTransitionStep,
                      end: this._onPanTransitionEnd,
                    },
                    this
                  )),
                e.noMoveStart || this.fire("movestart"),
                !1 !== e.animate)
              ) {
                D(this._mapPane, "leaflet-pan-anim");
                var i = this._getMapPanePos().subtract(t).round();
                this._panAnim.run(
                  this._mapPane,
                  i,
                  e.duration || 0.25,
                  e.easeLinearity
                );
              } else this._rawPanBy(t), this.fire("move").fire("moveend");
              return this;
            },
            flyTo: function (t, e, i) {
              if (!1 === (i = i || {}).animate || !x.any3d)
                return this.setView(t, e, i);
              this._stop();
              var n = this.project(this.getCenter()),
                s = this.project(t),
                a = this.getSize(),
                l = this._zoom;
              (t = R(t)), (e = void 0 === e ? l : e);
              var c = Math.max(a.x, a.y),
                _ = c * this.getZoomScale(l, e),
                m = s.distanceTo(n) || 1,
                y = 1.42,
                T = y * y;
              function z(V) {
                var Qe =
                    (_ * _ - c * c + (V ? -1 : 1) * T * T * m * m) /
                    (2 * (V ? _ : c) * T * m),
                  fn = Math.sqrt(Qe * Qe + 1) - Qe;
                return fn < 1e-9 ? -18 : Math.log(fn);
              }
              function nt(V) {
                return (Math.exp(V) - Math.exp(-V)) / 2;
              }
              function Et(V) {
                return (Math.exp(V) + Math.exp(-V)) / 2;
              }
              var wt = z(0);
              function Io(V) {
                return (
                  (c *
                    (Et(wt) *
                      (function me(V) {
                        return nt(V) / Et(V);
                      })(wt + y * V) -
                      nt(wt))) /
                  T
                );
              }
              var Zo = Date.now(),
                dn = (z(1) - wt) / y,
                Bo = i.duration ? 1e3 * i.duration : 1e3 * dn * 0.8;
              return (
                this._moveStart(!0, i.noMoveStart),
                function _n() {
                  var V = (Date.now() - Zo) / Bo,
                    ge =
                      (function Ao(V) {
                        return 1 - Math.pow(1 - V, 1.5);
                      })(V) * dn;
                  V <= 1
                    ? ((this._flyToFrame = X(_n, this)),
                      this._move(
                        this.unproject(
                          n.add(s.subtract(n).multiplyBy(Io(ge) / m)),
                          l
                        ),
                        this.getScaleZoom(
                          c /
                            (function Je(V) {
                              return c * (Et(wt) / Et(wt + y * V));
                            })(ge),
                          l
                        ),
                        { flyTo: !0 }
                      ))
                    : this._move(t, e)._moveEnd(!0);
                }.call(this),
                this
              );
            },
            flyToBounds: function (t, e) {
              var i = this._getBoundsCenterZoom(t, e);
              return this.flyTo(i.center, i.zoom, e);
            },
            setMaxBounds: function (t) {
              return (
                (t = K(t)),
                this.listens("moveend", this._panInsideMaxBounds) &&
                  this.off("moveend", this._panInsideMaxBounds),
                t.isValid()
                  ? ((this.options.maxBounds = t),
                    this._loaded && this._panInsideMaxBounds(),
                    this.on("moveend", this._panInsideMaxBounds))
                  : ((this.options.maxBounds = null), this)
              );
            },
            setMinZoom: function (t) {
              var e = this.options.minZoom;
              return (
                (this.options.minZoom = t),
                this._loaded &&
                e !== t &&
                (this.fire("zoomlevelschange"),
                this.getZoom() < this.options.minZoom)
                  ? this.setZoom(t)
                  : this
              );
            },
            setMaxZoom: function (t) {
              var e = this.options.maxZoom;
              return (
                (this.options.maxZoom = t),
                this._loaded &&
                e !== t &&
                (this.fire("zoomlevelschange"),
                this.getZoom() > this.options.maxZoom)
                  ? this.setZoom(t)
                  : this
              );
            },
            panInsideBounds: function (t, e) {
              this._enforcingBounds = !0;
              var i = this.getCenter(),
                n = this._limitCenter(i, this._zoom, K(t));
              return (
                i.equals(n) || this.panTo(n, e),
                (this._enforcingBounds = !1),
                this
              );
            },
            panInside: function (t, e) {
              var i = k((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
                n = k(e.paddingBottomRight || e.padding || [0, 0]),
                s = this.project(this.getCenter()),
                a = this.project(t),
                l = this.getPixelBounds(),
                c = $([l.min.add(i), l.max.subtract(n)]),
                _ = c.getSize();
              if (!c.contains(a)) {
                this._enforcingBounds = !0;
                var m = a.subtract(c.getCenter()),
                  y = c.extend(a).getSize().subtract(_);
                (s.x += m.x < 0 ? -y.x : y.x),
                  (s.y += m.y < 0 ? -y.y : y.y),
                  this.panTo(this.unproject(s), e),
                  (this._enforcingBounds = !1);
              }
              return this;
            },
            invalidateSize: function (t) {
              if (!this._loaded) return this;
              t = o({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
              var e = this.getSize();
              (this._sizeChanged = !0), (this._lastCenter = null);
              var i = this.getSize(),
                n = e.divideBy(2).round(),
                s = i.divideBy(2).round(),
                a = n.subtract(s);
              return a.x || a.y
                ? (t.animate && t.pan
                    ? this.panBy(a)
                    : (t.pan && this._rawPanBy(a),
                      this.fire("move"),
                      t.debounceMoveend
                        ? (clearTimeout(this._sizeTimer),
                          (this._sizeTimer = setTimeout(
                            h(this.fire, this, "moveend"),
                            200
                          )))
                        : this.fire("moveend")),
                  this.fire("resize", { oldSize: e, newSize: i }))
                : this;
            },
            stop: function () {
              return (
                this.setZoom(this._limitZoom(this._zoom)),
                this.options.zoomSnap || this.fire("viewreset"),
                this._stop()
              );
            },
            locate: function (t) {
              if (
                ((t = this._locateOptions = o({ timeout: 1e4, watch: !1 }, t)),
                !("geolocation" in navigator))
              )
                return (
                  this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported.",
                  }),
                  this
                );
              var e = h(this._handleGeolocationResponse, this),
                i = h(this._handleGeolocationError, this);
              return (
                t.watch
                  ? (this._locationWatchId =
                      navigator.geolocation.watchPosition(e, i, t))
                  : navigator.geolocation.getCurrentPosition(e, i, t),
                this
              );
            },
            stopLocate: function () {
              return (
                navigator.geolocation &&
                  navigator.geolocation.clearWatch &&
                  navigator.geolocation.clearWatch(this._locationWatchId),
                this._locateOptions && (this._locateOptions.setView = !1),
                this
              );
            },
            _handleGeolocationError: function (t) {
              if (this._container._leaflet_id) {
                var e = t.code,
                  i =
                    t.message ||
                    (1 === e
                      ? "permission denied"
                      : 2 === e
                      ? "position unavailable"
                      : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(),
                  this.fire("locationerror", {
                    code: e,
                    message: "Geolocation error: " + i + ".",
                  });
              }
            },
            _handleGeolocationResponse: function (t) {
              if (this._container._leaflet_id) {
                var n = new B(t.coords.latitude, t.coords.longitude),
                  s = n.toBounds(2 * t.coords.accuracy),
                  a = this._locateOptions;
                if (a.setView) {
                  var l = this.getBoundsZoom(s);
                  this.setView(n, a.maxZoom ? Math.min(l, a.maxZoom) : l);
                }
                var c = { latlng: n, bounds: s, timestamp: t.timestamp };
                for (var _ in t.coords)
                  "number" == typeof t.coords[_] && (c[_] = t.coords[_]);
                this.fire("locationfound", c);
              }
            },
            addHandler: function (t, e) {
              if (!e) return this;
              var i = (this[t] = new e(this));
              return (
                this._handlers.push(i), this.options[t] && i.enable(), this
              );
            },
            remove: function () {
              if (
                (this._initEvents(!0),
                this.options.maxBounds &&
                  this.off("moveend", this._panInsideMaxBounds),
                this._containerId !== this._container._leaflet_id)
              )
                throw new Error(
                  "Map container is being reused by another instance"
                );
              try {
                delete this._container._leaflet_id, delete this._containerId;
              } catch {
                (this._container._leaflet_id = void 0),
                  (this._containerId = void 0);
              }
              var t;
              for (t in (void 0 !== this._locationWatchId && this.stopLocate(),
              this._stop(),
              H(this._mapPane),
              this._clearControlPos && this._clearControlPos(),
              this._resizeRequest &&
                (tt(this._resizeRequest), (this._resizeRequest = null)),
              this._clearHandlers(),
              this._loaded && this.fire("unload"),
              this._layers))
                this._layers[t].remove();
              for (t in this._panes) H(this._panes[t]);
              return (
                (this._layers = []),
                (this._panes = []),
                delete this._mapPane,
                delete this._renderer,
                this
              );
            },
            createPane: function (t, e) {
              var n = A(
                "div",
                "leaflet-pane" +
                  (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
                e || this._mapPane
              );
              return t && (this._panes[t] = n), n;
            },
            getCenter: function () {
              return (
                this._checkIfLoaded(),
                this._lastCenter && !this._moved()
                  ? this._lastCenter.clone()
                  : this.layerPointToLatLng(this._getCenterLayerPoint())
              );
            },
            getZoom: function () {
              return this._zoom;
            },
            getBounds: function () {
              var t = this.getPixelBounds();
              return new J(
                this.unproject(t.getBottomLeft()),
                this.unproject(t.getTopRight())
              );
            },
            getMinZoom: function () {
              return void 0 === this.options.minZoom
                ? this._layersMinZoom || 0
                : this.options.minZoom;
            },
            getMaxZoom: function () {
              return void 0 === this.options.maxZoom
                ? void 0 === this._layersMaxZoom
                  ? 1 / 0
                  : this._layersMaxZoom
                : this.options.maxZoom;
            },
            getBoundsZoom: function (t, e, i) {
              (t = K(t)), (i = k(i || [0, 0]));
              var n = this.getZoom() || 0,
                s = this.getMinZoom(),
                a = this.getMaxZoom(),
                l = t.getNorthWest(),
                c = t.getSouthEast(),
                _ = this.getSize().subtract(i),
                m = $(this.project(c, n), this.project(l, n)).getSize(),
                y = x.any3d ? this.options.zoomSnap : 1,
                T = _.x / m.x,
                z = _.y / m.y,
                nt = e ? Math.max(T, z) : Math.min(T, z);
              return (
                (n = this.getScaleZoom(nt, n)),
                y &&
                  ((n = Math.round(n / (y / 100)) * (y / 100)),
                  (n = e ? Math.ceil(n / y) * y : Math.floor(n / y) * y)),
                Math.max(s, Math.min(a, n))
              );
            },
            getSize: function () {
              return (
                (!this._size || this._sizeChanged) &&
                  ((this._size = new E(
                    this._container.clientWidth || 0,
                    this._container.clientHeight || 0
                  )),
                  (this._sizeChanged = !1)),
                this._size.clone()
              );
            },
            getPixelBounds: function (t, e) {
              var i = this._getTopLeftPoint(t, e);
              return new U(i, i.add(this.getSize()));
            },
            getPixelOrigin: function () {
              return this._checkIfLoaded(), this._pixelOrigin;
            },
            getPixelWorldBounds: function (t) {
              return this.options.crs.getProjectedBounds(
                void 0 === t ? this.getZoom() : t
              );
            },
            getPane: function (t) {
              return "string" == typeof t ? this._panes[t] : t;
            },
            getPanes: function () {
              return this._panes;
            },
            getContainer: function () {
              return this._container;
            },
            getZoomScale: function (t, e) {
              var i = this.options.crs;
              return (
                (e = void 0 === e ? this._zoom : e), i.scale(t) / i.scale(e)
              );
            },
            getScaleZoom: function (t, e) {
              var i = this.options.crs,
                n = i.zoom(t * i.scale((e = void 0 === e ? this._zoom : e)));
              return isNaN(n) ? 1 / 0 : n;
            },
            project: function (t, e) {
              return (
                (e = void 0 === e ? this._zoom : e),
                this.options.crs.latLngToPoint(R(t), e)
              );
            },
            unproject: function (t, e) {
              return (
                (e = void 0 === e ? this._zoom : e),
                this.options.crs.pointToLatLng(k(t), e)
              );
            },
            layerPointToLatLng: function (t) {
              var e = k(t).add(this.getPixelOrigin());
              return this.unproject(e);
            },
            latLngToLayerPoint: function (t) {
              return this.project(R(t))
                ._round()
                ._subtract(this.getPixelOrigin());
            },
            wrapLatLng: function (t) {
              return this.options.crs.wrapLatLng(R(t));
            },
            wrapLatLngBounds: function (t) {
              return this.options.crs.wrapLatLngBounds(K(t));
            },
            distance: function (t, e) {
              return this.options.crs.distance(R(t), R(e));
            },
            containerPointToLayerPoint: function (t) {
              return k(t).subtract(this._getMapPanePos());
            },
            layerPointToContainerPoint: function (t) {
              return k(t).add(this._getMapPanePos());
            },
            containerPointToLatLng: function (t) {
              var e = this.containerPointToLayerPoint(k(t));
              return this.layerPointToLatLng(e);
            },
            latLngToContainerPoint: function (t) {
              return this.layerPointToContainerPoint(
                this.latLngToLayerPoint(R(t))
              );
            },
            mouseEventToContainerPoint: function (t) {
              return Si(t, this._container);
            },
            mouseEventToLayerPoint: function (t) {
              return this.containerPointToLayerPoint(
                this.mouseEventToContainerPoint(t)
              );
            },
            mouseEventToLatLng: function (t) {
              return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
            },
            _initContainer: function (t) {
              var e = (this._container = ki(t));
              if (!e) throw new Error("Map container not found.");
              if (e._leaflet_id)
                throw new Error("Map container is already initialized.");
              C(e, "scroll", this._onScroll, this), (this._containerId = f(e));
            },
            _initLayout: function () {
              var t = this._container;
              (this._fadeAnimated = this.options.fadeAnimation && x.any3d),
                D(
                  t,
                  "leaflet-container" +
                    (x.touch ? " leaflet-touch" : "") +
                    (x.retina ? " leaflet-retina" : "") +
                    (x.ielt9 ? " leaflet-oldie" : "") +
                    (x.safari ? " leaflet-safari" : "") +
                    (this._fadeAnimated ? " leaflet-fade-anim" : "")
                );
              var e = Ht(t, "position");
              "absolute" !== e &&
                "relative" !== e &&
                "fixed" !== e &&
                "sticky" !== e &&
                (t.style.position = "relative"),
                this._initPanes(),
                this._initControlPos && this._initControlPos();
            },
            _initPanes: function () {
              var t = (this._panes = {});
              (this._paneRenderers = {}),
                (this._mapPane = this.createPane("mapPane", this._container)),
                W(this._mapPane, new E(0, 0)),
                this.createPane("tilePane"),
                this.createPane("overlayPane"),
                this.createPane("shadowPane"),
                this.createPane("markerPane"),
                this.createPane("tooltipPane"),
                this.createPane("popupPane"),
                this.options.markerZoomAnimation ||
                  (D(t.markerPane, "leaflet-zoom-hide"),
                  D(t.shadowPane, "leaflet-zoom-hide"));
            },
            _resetView: function (t, e, i) {
              W(this._mapPane, new E(0, 0));
              var n = !this._loaded;
              (this._loaded = !0),
                (e = this._limitZoom(e)),
                this.fire("viewprereset");
              var s = this._zoom !== e;
              this._moveStart(s, i)._move(t, e)._moveEnd(s),
                this.fire("viewreset"),
                n && this.fire("load");
            },
            _moveStart: function (t, e) {
              return (
                t && this.fire("zoomstart"), e || this.fire("movestart"), this
              );
            },
            _move: function (t, e, i, n) {
              void 0 === e && (e = this._zoom);
              var s = this._zoom !== e;
              return (
                (this._zoom = e),
                (this._lastCenter = t),
                (this._pixelOrigin = this._getNewPixelOrigin(t)),
                n
                  ? i && i.pinch && this.fire("zoom", i)
                  : ((s || (i && i.pinch)) && this.fire("zoom", i),
                    this.fire("move", i)),
                this
              );
            },
            _moveEnd: function (t) {
              return t && this.fire("zoomend"), this.fire("moveend");
            },
            _stop: function () {
              return (
                tt(this._flyToFrame),
                this._panAnim && this._panAnim.stop(),
                this
              );
            },
            _rawPanBy: function (t) {
              W(this._mapPane, this._getMapPanePos().subtract(t));
            },
            _getZoomSpan: function () {
              return this.getMaxZoom() - this.getMinZoom();
            },
            _panInsideMaxBounds: function () {
              this._enforcingBounds ||
                this.panInsideBounds(this.options.maxBounds);
            },
            _checkIfLoaded: function () {
              if (!this._loaded)
                throw new Error("Set map center and zoom first.");
            },
            _initEvents: function (t) {
              (this._targets = {}), (this._targets[f(this._container)] = this);
              var e = t ? N : C;
              e(
                this._container,
                "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
                this._handleDOMEvent,
                this
              ),
                this.options.trackResize &&
                  e(window, "resize", this._onResize, this),
                x.any3d &&
                  this.options.transform3DLimit &&
                  (t ? this.off : this.on).call(
                    this,
                    "moveend",
                    this._onMoveEnd
                  );
            },
            _onResize: function () {
              tt(this._resizeRequest),
                (this._resizeRequest = X(function () {
                  this.invalidateSize({ debounceMoveend: !0 });
                }, this));
            },
            _onScroll: function () {
              (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
            },
            _onMoveEnd: function () {
              var t = this._getMapPanePos();
              Math.max(Math.abs(t.x), Math.abs(t.y)) >=
                this.options.transform3DLimit &&
                this._resetView(this.getCenter(), this.getZoom());
            },
            _findEventTargets: function (t, e) {
              for (
                var n,
                  i = [],
                  s = "mouseout" === e || "mouseover" === e,
                  a = t.target || t.srcElement,
                  l = !1;
                a;

              ) {
                if (
                  (n = this._targets[f(a)]) &&
                  ("click" === e || "preclick" === e) &&
                  this._draggableMoved(n)
                ) {
                  l = !0;
                  break;
                }
                if (
                  (n &&
                    n.listens(e, !0) &&
                    ((s && !Fe(a, t)) || (i.push(n), s))) ||
                  a === this._container
                )
                  break;
                a = a.parentNode;
              }
              return (
                !i.length && !l && !s && this.listens(e, !0) && (i = [this]), i
              );
            },
            _isClickDisabled: function (t) {
              for (; t && t !== this._container; ) {
                if (t._leaflet_disable_click) return !0;
                t = t.parentNode;
              }
            },
            _handleDOMEvent: function (t) {
              var e = t.target || t.srcElement;
              if (
                !(
                  !this._loaded ||
                  e._leaflet_disable_events ||
                  ("click" === t.type && this._isClickDisabled(e))
                )
              ) {
                var i = t.type;
                "mousedown" === i && Ze(e), this._fireDOMEvent(t, i);
              }
            },
            _mouseEvents: [
              "click",
              "dblclick",
              "mouseover",
              "mouseout",
              "contextmenu",
            ],
            _fireDOMEvent: function (t, e, i) {
              if ("click" === t.type) {
                var n = o({}, t);
                (n.type = "preclick"), this._fireDOMEvent(n, n.type, i);
              }
              var s = this._findEventTargets(t, e);
              if (i) {
                for (var a = [], l = 0; l < i.length; l++)
                  i[l].listens(e, !0) && a.push(i[l]);
                s = a.concat(s);
              }
              if (s.length) {
                "contextmenu" === e && j(t);
                var c = s[0],
                  _ = { originalEvent: t };
                if (
                  "keypress" !== t.type &&
                  "keydown" !== t.type &&
                  "keyup" !== t.type
                ) {
                  var m = c.getLatLng && (!c._radius || c._radius <= 10);
                  (_.containerPoint = m
                    ? this.latLngToContainerPoint(c.getLatLng())
                    : this.mouseEventToContainerPoint(t)),
                    (_.layerPoint = this.containerPointToLayerPoint(
                      _.containerPoint
                    )),
                    (_.latlng = m
                      ? c.getLatLng()
                      : this.layerPointToLatLng(_.layerPoint));
                }
                for (l = 0; l < s.length; l++)
                  if (
                    (s[l].fire(e, _, !0),
                    _.originalEvent._stopped ||
                      (!1 === s[l].options.bubblingMouseEvents &&
                        -1 !== Y(this._mouseEvents, e)))
                  )
                    return;
              }
            },
            _draggableMoved: function (t) {
              return (
                ((t = t.dragging && t.dragging.enabled() ? t : this).dragging &&
                  t.dragging.moved()) ||
                (this.boxZoom && this.boxZoom.moved())
              );
            },
            _clearHandlers: function () {
              for (var t = 0, e = this._handlers.length; t < e; t++)
                this._handlers[t].disable();
            },
            whenReady: function (t, e) {
              return (
                this._loaded
                  ? t.call(e || this, { target: this })
                  : this.on("load", t, e),
                this
              );
            },
            _getMapPanePos: function () {
              return Pt(this._mapPane) || new E(0, 0);
            },
            _moved: function () {
              var t = this._getMapPanePos();
              return t && !t.equals([0, 0]);
            },
            _getTopLeftPoint: function (t, e) {
              return (
                t && void 0 !== e
                  ? this._getNewPixelOrigin(t, e)
                  : this.getPixelOrigin()
              ).subtract(this._getMapPanePos());
            },
            _getNewPixelOrigin: function (t, e) {
              var i = this.getSize()._divideBy(2);
              return this.project(t, e)
                ._subtract(i)
                ._add(this._getMapPanePos())
                ._round();
            },
            _latLngToNewLayerPoint: function (t, e, i) {
              var n = this._getNewPixelOrigin(i, e);
              return this.project(t, e)._subtract(n);
            },
            _latLngBoundsToNewLayerBounds: function (t, e, i) {
              var n = this._getNewPixelOrigin(i, e);
              return $([
                this.project(t.getSouthWest(), e)._subtract(n),
                this.project(t.getNorthWest(), e)._subtract(n),
                this.project(t.getSouthEast(), e)._subtract(n),
                this.project(t.getNorthEast(), e)._subtract(n),
              ]);
            },
            _getCenterLayerPoint: function () {
              return this.containerPointToLayerPoint(
                this.getSize()._divideBy(2)
              );
            },
            _getCenterOffset: function (t) {
              return this.latLngToLayerPoint(t).subtract(
                this._getCenterLayerPoint()
              );
            },
            _limitCenter: function (t, e, i) {
              if (!i) return t;
              var n = this.project(t, e),
                s = this.getSize().divideBy(2),
                a = new U(n.subtract(s), n.add(s)),
                l = this._getBoundsOffset(a, i, e);
              return Math.abs(l.x) <= 1 && Math.abs(l.y) <= 1
                ? t
                : this.unproject(n.add(l), e);
            },
            _limitOffset: function (t, e) {
              if (!e) return t;
              var i = this.getPixelBounds(),
                n = new U(i.min.add(t), i.max.add(t));
              return t.add(this._getBoundsOffset(n, e));
            },
            _getBoundsOffset: function (t, e, i) {
              var n = $(
                  this.project(e.getNorthEast(), i),
                  this.project(e.getSouthWest(), i)
                ),
                s = n.min.subtract(t.min),
                a = n.max.subtract(t.max);
              return new E(this._rebound(s.x, -a.x), this._rebound(s.y, -a.y));
            },
            _rebound: function (t, e) {
              return t + e > 0
                ? Math.round(t - e) / 2
                : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
            },
            _limitZoom: function (t) {
              var e = this.getMinZoom(),
                i = this.getMaxZoom(),
                n = x.any3d ? this.options.zoomSnap : 1;
              return (
                n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t))
              );
            },
            _onPanTransitionStep: function () {
              this.fire("move");
            },
            _onPanTransitionEnd: function () {
              F(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
            },
            _tryAnimatedPan: function (t, e) {
              var i = this._getCenterOffset(t)._trunc();
              return !(
                (!0 !== (e && e.animate) && !this.getSize().contains(i)) ||
                (this.panBy(i, e), 0)
              );
            },
            _createAnimProxy: function () {
              var t = (this._proxy = A(
                "div",
                "leaflet-proxy leaflet-zoom-animated"
              ));
              this._panes.mapPane.appendChild(t),
                this.on(
                  "zoomanim",
                  function (e) {
                    var i = Ce,
                      n = this._proxy.style[i];
                    bt(
                      this._proxy,
                      this.project(e.center, e.zoom),
                      this.getZoomScale(e.zoom, 1)
                    ),
                      n === this._proxy.style[i] &&
                        this._animatingZoom &&
                        this._onZoomTransitionEnd();
                  },
                  this
                ),
                this.on("load moveend", this._animMoveEnd, this),
                this._on("unload", this._destroyAnimProxy, this);
            },
            _destroyAnimProxy: function () {
              H(this._proxy),
                this.off("load moveend", this._animMoveEnd, this),
                delete this._proxy;
            },
            _animMoveEnd: function () {
              var t = this.getCenter(),
                e = this.getZoom();
              bt(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
            },
            _catchTransitionEnd: function (t) {
              this._animatingZoom &&
                t.propertyName.indexOf("transform") >= 0 &&
                this._onZoomTransitionEnd();
            },
            _nothingToAnimate: function () {
              return !this._container.getElementsByClassName(
                "leaflet-zoom-animated"
              ).length;
            },
            _tryAnimatedZoom: function (t, e, i) {
              if (this._animatingZoom) return !0;
              if (
                ((i = i || {}),
                !this._zoomAnimated ||
                  !1 === i.animate ||
                  this._nothingToAnimate() ||
                  Math.abs(e - this._zoom) >
                    this.options.zoomAnimationThreshold)
              )
                return !1;
              var n = this.getZoomScale(e),
                s = this._getCenterOffset(t)._divideBy(1 - 1 / n);
              return !(
                (!0 !== i.animate && !this.getSize().contains(s)) ||
                (X(function () {
                  this._moveStart(!0, !1)._animateZoom(t, e, !0);
                }, this),
                0)
              );
            },
            _animateZoom: function (t, e, i, n) {
              this._mapPane &&
                (i &&
                  ((this._animatingZoom = !0),
                  (this._animateToCenter = t),
                  (this._animateToZoom = e),
                  D(this._mapPane, "leaflet-zoom-anim")),
                this.fire("zoomanim", { center: t, zoom: e, noUpdate: n }),
                this._tempFireZoomEvent ||
                  (this._tempFireZoomEvent =
                    this._zoom !== this._animateToZoom),
                this._move(
                  this._animateToCenter,
                  this._animateToZoom,
                  void 0,
                  !0
                ),
                setTimeout(h(this._onZoomTransitionEnd, this), 250));
            },
            _onZoomTransitionEnd: function () {
              this._animatingZoom &&
                (this._mapPane && F(this._mapPane, "leaflet-zoom-anim"),
                (this._animatingZoom = !1),
                this._move(
                  this._animateToCenter,
                  this._animateToZoom,
                  void 0,
                  !0
                ),
                this._tempFireZoomEvent && this.fire("zoom"),
                delete this._tempFireZoomEvent,
                this.fire("move"),
                this._moveEnd(!0));
            },
          });
        var rt = dt.extend({
            options: { position: "topright" },
            initialize: function (t) {
              b(this, t);
            },
            getPosition: function () {
              return this.options.position;
            },
            setPosition: function (t) {
              var e = this._map;
              return (
                e && e.removeControl(this),
                (this.options.position = t),
                e && e.addControl(this),
                this
              );
            },
            getContainer: function () {
              return this._container;
            },
            addTo: function (t) {
              this.remove(), (this._map = t);
              var e = (this._container = this.onAdd(t)),
                i = this.getPosition(),
                n = t._controlCorners[i];
              return (
                D(e, "leaflet-control"),
                -1 !== i.indexOf("bottom")
                  ? n.insertBefore(e, n.firstChild)
                  : n.appendChild(e),
                this._map.on("unload", this.remove, this),
                this
              );
            },
            remove: function () {
              return this._map
                ? (H(this._container),
                  this.onRemove && this.onRemove(this._map),
                  this._map.off("unload", this.remove, this),
                  (this._map = null),
                  this)
                : this;
            },
            _refocusOnMap: function (t) {
              this._map &&
                t &&
                t.screenX > 0 &&
                t.screenY > 0 &&
                this._map.getContainer().focus();
            },
          }),
          Yt = function (t) {
            return new rt(t);
          };
        I.include({
          addControl: function (t) {
            return t.addTo(this), this;
          },
          removeControl: function (t) {
            return t.remove(), this;
          },
          _initControlPos: function () {
            var t = (this._controlCorners = {}),
              e = "leaflet-",
              i = (this._controlContainer = A(
                "div",
                e + "control-container",
                this._container
              ));
            function n(s, a) {
              t[s + a] = A("div", e + s + " " + e + a, i);
            }
            n("top", "left"),
              n("top", "right"),
              n("bottom", "left"),
              n("bottom", "right");
          },
          _clearControlPos: function () {
            for (var t in this._controlCorners) H(this._controlCorners[t]);
            H(this._controlContainer),
              delete this._controlCorners,
              delete this._controlContainer;
          },
        });
        var Ii = rt.extend({
            options: {
              collapsed: !0,
              position: "topright",
              autoZIndex: !0,
              hideSingleBase: !1,
              sortLayers: !1,
              sortFunction: function (t, e, i, n) {
                return i < n ? -1 : n < i ? 1 : 0;
              },
            },
            initialize: function (t, e, i) {
              for (var n in (b(this, i),
              (this._layerControlInputs = []),
              (this._layers = []),
              (this._lastZIndex = 0),
              (this._handlingClick = !1),
              t))
                this._addLayer(t[n], n);
              for (n in e) this._addLayer(e[n], n, !0);
            },
            onAdd: function (t) {
              this._initLayout(),
                this._update(),
                (this._map = t),
                t.on("zoomend", this._checkDisabledLayers, this);
              for (var e = 0; e < this._layers.length; e++)
                this._layers[e].layer.on(
                  "add remove",
                  this._onLayerChange,
                  this
                );
              return this._container;
            },
            addTo: function (t) {
              return (
                rt.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
              );
            },
            onRemove: function () {
              this._map.off("zoomend", this._checkDisabledLayers, this);
              for (var t = 0; t < this._layers.length; t++)
                this._layers[t].layer.off(
                  "add remove",
                  this._onLayerChange,
                  this
                );
            },
            addBaseLayer: function (t, e) {
              return this._addLayer(t, e), this._map ? this._update() : this;
            },
            addOverlay: function (t, e) {
              return (
                this._addLayer(t, e, !0), this._map ? this._update() : this
              );
            },
            removeLayer: function (t) {
              t.off("add remove", this._onLayerChange, this);
              var e = this._getLayer(f(t));
              return (
                e && this._layers.splice(this._layers.indexOf(e), 1),
                this._map ? this._update() : this
              );
            },
            expand: function () {
              D(this._container, "leaflet-control-layers-expanded"),
                (this._section.style.height = null);
              var t = this._map.getSize().y - (this._container.offsetTop + 50);
              return (
                t < this._section.clientHeight
                  ? (D(this._section, "leaflet-control-layers-scrollbar"),
                    (this._section.style.height = t + "px"))
                  : F(this._section, "leaflet-control-layers-scrollbar"),
                this._checkDisabledLayers(),
                this
              );
            },
            collapse: function () {
              return (
                F(this._container, "leaflet-control-layers-expanded"), this
              );
            },
            _initLayout: function () {
              var t = "leaflet-control-layers",
                e = (this._container = A("div", t)),
                i = this.options.collapsed;
              e.setAttribute("aria-haspopup", !0), Vt(e), He(e);
              var n = (this._section = A("section", t + "-list"));
              i &&
                (this._map.on("click", this.collapse, this),
                C(
                  e,
                  { mouseenter: this._expandSafely, mouseleave: this.collapse },
                  this
                ));
              var s = (this._layersLink = A("a", t + "-toggle", e));
              (s.href = "#"),
                (s.title = "Layers"),
                s.setAttribute("role", "button"),
                C(
                  s,
                  {
                    keydown: function (a) {
                      13 === a.keyCode && this._expandSafely();
                    },
                    click: function (a) {
                      j(a), this._expandSafely();
                    },
                  },
                  this
                ),
                i || this.expand(),
                (this._baseLayersList = A("div", t + "-base", n)),
                (this._separator = A("div", t + "-separator", n)),
                (this._overlaysList = A("div", t + "-overlays", n)),
                e.appendChild(n);
            },
            _getLayer: function (t) {
              for (var e = 0; e < this._layers.length; e++)
                if (this._layers[e] && f(this._layers[e].layer) === t)
                  return this._layers[e];
            },
            _addLayer: function (t, e, i) {
              this._map && t.on("add remove", this._onLayerChange, this),
                this._layers.push({ layer: t, name: e, overlay: i }),
                this.options.sortLayers &&
                  this._layers.sort(
                    h(function (n, s) {
                      return this.options.sortFunction(
                        n.layer,
                        s.layer,
                        n.name,
                        s.name
                      );
                    }, this)
                  ),
                this.options.autoZIndex &&
                  t.setZIndex &&
                  (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
                this._expandIfNotCollapsed();
            },
            _update: function () {
              if (!this._container) return this;
              te(this._baseLayersList),
                te(this._overlaysList),
                (this._layerControlInputs = []);
              var t,
                e,
                i,
                n,
                s = 0;
              for (i = 0; i < this._layers.length; i++)
                this._addItem((n = this._layers[i])),
                  (e = e || n.overlay),
                  (t = t || !n.overlay),
                  (s += n.overlay ? 0 : 1);
              return (
                this.options.hideSingleBase &&
                  (this._baseLayersList.style.display = (t = t && s > 1)
                    ? ""
                    : "none"),
                (this._separator.style.display = e && t ? "" : "none"),
                this
              );
            },
            _onLayerChange: function (t) {
              this._handlingClick || this._update();
              var e = this._getLayer(f(t.target)),
                i = e.overlay
                  ? "add" === t.type
                    ? "overlayadd"
                    : "overlayremove"
                  : "add" === t.type
                  ? "baselayerchange"
                  : null;
              i && this._map.fire(i, e);
            },
            _createRadioElement: function (t, e) {
              var i =
                  '<input type="radio" class="leaflet-control-layers-selector" name="' +
                  t +
                  '"' +
                  (e ? ' checked="checked"' : "") +
                  "/>",
                n = document.createElement("div");
              return (n.innerHTML = i), n.firstChild;
            },
            _addItem: function (t) {
              var n,
                e = document.createElement("label"),
                i = this._map.hasLayer(t.layer);
              t.overlay
                ? (((n = document.createElement("input")).type = "checkbox"),
                  (n.className = "leaflet-control-layers-selector"),
                  (n.defaultChecked = i))
                : (n = this._createRadioElement(
                    "leaflet-base-layers_" + f(this),
                    i
                  )),
                this._layerControlInputs.push(n),
                (n.layerId = f(t.layer)),
                C(n, "click", this._onInputClick, this);
              var s = document.createElement("span");
              s.innerHTML = " " + t.name;
              var a = document.createElement("span");
              return (
                e.appendChild(a),
                a.appendChild(n),
                a.appendChild(s),
                (t.overlay
                  ? this._overlaysList
                  : this._baseLayersList
                ).appendChild(e),
                this._checkDisabledLayers(),
                e
              );
            },
            _onInputClick: function () {
              var e,
                i,
                t = this._layerControlInputs,
                n = [],
                s = [];
              this._handlingClick = !0;
              for (var a = t.length - 1; a >= 0; a--)
                (i = this._getLayer((e = t[a]).layerId).layer),
                  e.checked ? n.push(i) : e.checked || s.push(i);
              for (a = 0; a < s.length; a++)
                this._map.hasLayer(s[a]) && this._map.removeLayer(s[a]);
              for (a = 0; a < n.length; a++)
                this._map.hasLayer(n[a]) || this._map.addLayer(n[a]);
              (this._handlingClick = !1), this._refocusOnMap();
            },
            _checkDisabledLayers: function () {
              for (
                var e,
                  i,
                  t = this._layerControlInputs,
                  n = this._map.getZoom(),
                  s = t.length - 1;
                s >= 0;
                s--
              )
                (i = this._getLayer((e = t[s]).layerId).layer),
                  (e.disabled =
                    (void 0 !== i.options.minZoom && n < i.options.minZoom) ||
                    (void 0 !== i.options.maxZoom && n > i.options.maxZoom));
            },
            _expandIfNotCollapsed: function () {
              return (
                this._map && !this.options.collapsed && this.expand(), this
              );
            },
            _expandSafely: function () {
              var t = this._section;
              C(t, "click", j),
                this.expand(),
                setTimeout(function () {
                  N(t, "click", j);
                });
            },
          }),
          Ge = rt.extend({
            options: {
              position: "topleft",
              zoomInText: '<span aria-hidden="true">+</span>',
              zoomInTitle: "Zoom in",
              zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
              zoomOutTitle: "Zoom out",
            },
            onAdd: function (t) {
              var e = "leaflet-control-zoom",
                i = A("div", e + " leaflet-bar"),
                n = this.options;
              return (
                (this._zoomInButton = this._createButton(
                  n.zoomInText,
                  n.zoomInTitle,
                  e + "-in",
                  i,
                  this._zoomIn
                )),
                (this._zoomOutButton = this._createButton(
                  n.zoomOutText,
                  n.zoomOutTitle,
                  e + "-out",
                  i,
                  this._zoomOut
                )),
                this._updateDisabled(),
                t.on("zoomend zoomlevelschange", this._updateDisabled, this),
                i
              );
            },
            onRemove: function (t) {
              t.off("zoomend zoomlevelschange", this._updateDisabled, this);
            },
            disable: function () {
              return (this._disabled = !0), this._updateDisabled(), this;
            },
            enable: function () {
              return (this._disabled = !1), this._updateDisabled(), this;
            },
            _zoomIn: function (t) {
              !this._disabled &&
                this._map._zoom < this._map.getMaxZoom() &&
                this._map.zoomIn(
                  this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)
                );
            },
            _zoomOut: function (t) {
              !this._disabled &&
                this._map._zoom > this._map.getMinZoom() &&
                this._map.zoomOut(
                  this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)
                );
            },
            _createButton: function (t, e, i, n, s) {
              var a = A("a", i, n);
              return (
                (a.innerHTML = t),
                (a.href = "#"),
                (a.title = e),
                a.setAttribute("role", "button"),
                a.setAttribute("aria-label", e),
                Vt(a),
                C(a, "click", Tt),
                C(a, "click", s, this),
                C(a, "click", this._refocusOnMap, this),
                a
              );
            },
            _updateDisabled: function () {
              var t = this._map,
                e = "leaflet-disabled";
              F(this._zoomInButton, e),
                F(this._zoomOutButton, e),
                this._zoomInButton.setAttribute("aria-disabled", "false"),
                this._zoomOutButton.setAttribute("aria-disabled", "false"),
                (this._disabled || t._zoom === t.getMinZoom()) &&
                  (D(this._zoomOutButton, e),
                  this._zoomOutButton.setAttribute("aria-disabled", "true")),
                (this._disabled || t._zoom === t.getMaxZoom()) &&
                  (D(this._zoomInButton, e),
                  this._zoomInButton.setAttribute("aria-disabled", "true"));
            },
          });
        I.mergeOptions({ zoomControl: !0 }),
          I.addInitHook(function () {
            this.options.zoomControl &&
              ((this.zoomControl = new Ge()),
              this.addControl(this.zoomControl));
          });
        var Ai = rt.extend({
            options: {
              position: "bottomleft",
              maxWidth: 100,
              metric: !0,
              imperial: !0,
            },
            onAdd: function (t) {
              var e = "leaflet-control-scale",
                i = A("div", e),
                n = this.options;
              return (
                this._addScales(n, e + "-line", i),
                t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
                t.whenReady(this._update, this),
                i
              );
            },
            onRemove: function (t) {
              t.off(
                this.options.updateWhenIdle ? "moveend" : "move",
                this._update,
                this
              );
            },
            _addScales: function (t, e, i) {
              t.metric && (this._mScale = A("div", e, i)),
                t.imperial && (this._iScale = A("div", e, i));
            },
            _update: function () {
              var t = this._map,
                e = t.getSize().y / 2,
                i = t.distance(
                  t.containerPointToLatLng([0, e]),
                  t.containerPointToLatLng([this.options.maxWidth, e])
                );
              this._updateScales(i);
            },
            _updateScales: function (t) {
              this.options.metric && t && this._updateMetric(t),
                this.options.imperial && t && this._updateImperial(t);
            },
            _updateMetric: function (t) {
              var e = this._getRoundNum(t);
              this._updateScale(
                this._mScale,
                e < 1e3 ? e + " m" : e / 1e3 + " km",
                e / t
              );
            },
            _updateImperial: function (t) {
              var i,
                n,
                s,
                e = 3.2808399 * t;
              e > 5280
                ? ((n = this._getRoundNum((i = e / 5280))),
                  this._updateScale(this._iScale, n + " mi", n / i))
                : ((s = this._getRoundNum(e)),
                  this._updateScale(this._iScale, s + " ft", s / e));
            },
            _updateScale: function (t, e, i) {
              (t.style.width = Math.round(this.options.maxWidth * i) + "px"),
                (t.innerHTML = e);
            },
            _getRoundNum: function (t) {
              var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                i = t / e;
              return (
                e * (i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1)
              );
            },
          }),
          We = rt.extend({
            options: {
              position: "bottomright",
              prefix:
                '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
                (x.inlineSvg
                  ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> '
                  : "") +
                "Leaflet</a>",
            },
            initialize: function (t) {
              b(this, t), (this._attributions = {});
            },
            onAdd: function (t) {
              for (var e in ((t.attributionControl = this),
              (this._container = A("div", "leaflet-control-attribution")),
              Vt(this._container),
              t._layers))
                t._layers[e].getAttribution &&
                  this.addAttribution(t._layers[e].getAttribution());
              return (
                this._update(),
                t.on("layeradd", this._addAttribution, this),
                this._container
              );
            },
            onRemove: function (t) {
              t.off("layeradd", this._addAttribution, this);
            },
            _addAttribution: function (t) {
              t.layer.getAttribution &&
                (this.addAttribution(t.layer.getAttribution()),
                t.layer.once(
                  "remove",
                  function () {
                    this.removeAttribution(t.layer.getAttribution());
                  },
                  this
                ));
            },
            setPrefix: function (t) {
              return (this.options.prefix = t), this._update(), this;
            },
            addAttribution: function (t) {
              return t
                ? (this._attributions[t] || (this._attributions[t] = 0),
                  this._attributions[t]++,
                  this._update(),
                  this)
                : this;
            },
            removeAttribution: function (t) {
              return t
                ? (this._attributions[t] &&
                    (this._attributions[t]--, this._update()),
                  this)
                : this;
            },
            _update: function () {
              if (this._map) {
                var t = [];
                for (var e in this._attributions)
                  this._attributions[e] && t.push(e);
                var i = [];
                this.options.prefix && i.push(this.options.prefix),
                  t.length && i.push(t.join(", ")),
                  (this._container.innerHTML = i.join(
                    ' <span aria-hidden="true">|</span> '
                  ));
              }
            },
          });
        I.mergeOptions({ attributionControl: !0 }),
          I.addInitHook(function () {
            this.options.attributionControl && new We().addTo(this);
          });
        (rt.Layers = Ii),
          (rt.Zoom = Ge),
          (rt.Scale = Ai),
          (rt.Attribution = We),
          (Yt.layers = function (t, e, i) {
            return new Ii(t, e, i);
          }),
          (Yt.zoom = function (t) {
            return new Ge(t);
          }),
          (Yt.scale = function (t) {
            return new Ai(t);
          }),
          (Yt.attribution = function (t) {
            return new We(t);
          });
        var ct = dt.extend({
          initialize: function (t) {
            this._map = t;
          },
          enable: function () {
            return (
              this._enabled || ((this._enabled = !0), this.addHooks()), this
            );
          },
          disable: function () {
            return this._enabled
              ? ((this._enabled = !1), this.removeHooks(), this)
              : this;
          },
          enabled: function () {
            return !!this._enabled;
          },
        });
        ct.addTo = function (t, e) {
          return t.addHandler(e, this), this;
        };
        var Ni,
          io = { Events: Q },
          Zi = x.touch ? "touchstart mousedown" : "mousedown",
          Lt = Bt.extend({
            options: { clickTolerance: 3 },
            initialize: function (t, e, i, n) {
              b(this, n),
                (this._element = t),
                (this._dragStartTarget = e || t),
                (this._preventOutline = i);
            },
            enable: function () {
              this._enabled ||
                (C(this._dragStartTarget, Zi, this._onDown, this),
                (this._enabled = !0));
            },
            disable: function () {
              this._enabled &&
                (Lt._dragging === this && this.finishDrag(!0),
                N(this._dragStartTarget, Zi, this._onDown, this),
                (this._enabled = !1),
                (this._moved = !1));
            },
            _onDown: function (t) {
              if (
                this._enabled &&
                ((this._moved = !1), !De(this._element, "leaflet-zoom-anim"))
              ) {
                if (t.touches && 1 !== t.touches.length)
                  return void (Lt._dragging === this && this.finishDrag());
                if (
                  !(
                    Lt._dragging ||
                    t.shiftKey ||
                    (1 !== t.which && 1 !== t.button && !t.touches) ||
                    ((Lt._dragging = this),
                    this._preventOutline && Ze(this._element),
                    ze(),
                    Ft(),
                    this._moving)
                  )
                ) {
                  this.fire("down");
                  var e = t.touches ? t.touches[0] : t,
                    i = Ei(this._element);
                  (this._startPoint = new E(e.clientX, e.clientY)),
                    (this._startPos = Pt(this._element)),
                    (this._parentScale = Be(i));
                  var n = "mousedown" === t.type;
                  C(
                    document,
                    n ? "mousemove" : "touchmove",
                    this._onMove,
                    this
                  ),
                    C(
                      document,
                      n ? "mouseup" : "touchend touchcancel",
                      this._onUp,
                      this
                    );
                }
              }
            },
            _onMove: function (t) {
              if (this._enabled) {
                if (t.touches && t.touches.length > 1)
                  return void (this._moved = !0);
                var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                  i = new E(e.clientX, e.clientY)._subtract(this._startPoint);
                (!i.x && !i.y) ||
                  Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance ||
                  ((i.x /= this._parentScale.x),
                  (i.y /= this._parentScale.y),
                  j(t),
                  this._moved ||
                    (this.fire("dragstart"),
                    (this._moved = !0),
                    D(document.body, "leaflet-dragging"),
                    (this._lastTarget = t.target || t.srcElement),
                    window.SVGElementInstance &&
                      this._lastTarget instanceof window.SVGElementInstance &&
                      (this._lastTarget =
                        this._lastTarget.correspondingUseElement),
                    D(this._lastTarget, "leaflet-drag-target")),
                  (this._newPos = this._startPos.add(i)),
                  (this._moving = !0),
                  (this._lastEvent = t),
                  this._updatePosition());
              }
            },
            _updatePosition: function () {
              var t = { originalEvent: this._lastEvent };
              this.fire("predrag", t),
                W(this._element, this._newPos),
                this.fire("drag", t);
            },
            _onUp: function () {
              this._enabled && this.finishDrag();
            },
            finishDrag: function (t) {
              F(document.body, "leaflet-dragging"),
                this._lastTarget &&
                  (F(this._lastTarget, "leaflet-drag-target"),
                  (this._lastTarget = null)),
                N(document, "mousemove touchmove", this._onMove, this),
                N(document, "mouseup touchend touchcancel", this._onUp, this),
                Ie(),
                Gt(),
                this._moved &&
                  this._moving &&
                  this.fire("dragend", {
                    noInertia: t,
                    distance: this._newPos.distanceTo(this._startPos),
                  }),
                (this._moving = !1),
                (Lt._dragging = !1);
            },
          });
        function Bi(t, e) {
          if (!e || !t.length) return t.slice();
          var i = e * e;
          return (function oo(t, e) {
            var i = t.length,
              s = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(
                i
              );
            (s[0] = s[i - 1] = 1), Ve(t, s, e, 0, i - 1);
            var a,
              l = [];
            for (a = 0; a < i; a++) s[a] && l.push(t[a]);
            return l;
          })(
            (t = (function so(t, e) {
              for (var i = [t[0]], n = 1, s = 0, a = t.length; n < a; n++)
                ro(t[n], t[s]) > e && (i.push(t[n]), (s = n));
              return s < a - 1 && i.push(t[a - 1]), i;
            })(t, i)),
            i
          );
        }
        function Ri(t, e, i) {
          return Math.sqrt(Kt(t, e, i, !0));
        }
        function Ve(t, e, i, n, s) {
          var l,
            c,
            _,
            a = 0;
          for (c = n + 1; c <= s - 1; c++)
            (_ = Kt(t[c], t[n], t[s], !0)) > a && ((l = c), (a = _));
          a > i && ((e[l] = 1), Ve(t, e, i, n, l), Ve(t, e, i, l, s));
        }
        function Ui(t, e, i, n, s) {
          var c,
            _,
            m,
            a = n ? Ni : kt(t, i),
            l = kt(e, i);
          for (Ni = l; ; ) {
            if (!(a | l)) return [t, e];
            if (a & l) return !1;
            (m = kt((_ = se(t, e, (c = a || l), i, s)), i)),
              c === a ? ((t = _), (a = m)) : ((e = _), (l = m));
          }
        }
        function se(t, e, i, n, s) {
          var m,
            y,
            a = e.x - t.x,
            l = e.y - t.y,
            c = n.min,
            _ = n.max;
          return (
            8 & i
              ? ((m = t.x + (a * (_.y - t.y)) / l), (y = _.y))
              : 4 & i
              ? ((m = t.x + (a * (c.y - t.y)) / l), (y = c.y))
              : 2 & i
              ? ((m = _.x), (y = t.y + (l * (_.x - t.x)) / a))
              : 1 & i && ((m = c.x), (y = t.y + (l * (c.x - t.x)) / a)),
            new E(m, y, s)
          );
        }
        function kt(t, e) {
          var i = 0;
          return (
            t.x < e.min.x ? (i |= 1) : t.x > e.max.x && (i |= 2),
            t.y < e.min.y ? (i |= 4) : t.y > e.max.y && (i |= 8),
            i
          );
        }
        function ro(t, e) {
          var i = e.x - t.x,
            n = e.y - t.y;
          return i * i + n * n;
        }
        function Kt(t, e, i, n) {
          var m,
            s = e.x,
            a = e.y,
            l = i.x - s,
            c = i.y - a,
            _ = l * l + c * c;
          return (
            _ > 0 &&
              ((m = ((t.x - s) * l + (t.y - a) * c) / _) > 1
                ? ((s = i.x), (a = i.y))
                : m > 0 && ((s += l * m), (a += c * m))),
            (l = t.x - s),
            (c = t.y - a),
            n ? l * l + c * c : new E(s, a)
          );
        }
        function it(t) {
          return (
            !Z(t[0]) || ("object" != typeof t[0][0] && typeof t[0][0] < "u")
          );
        }
        function Hi(t) {
          return (
            console.warn(
              "Deprecated use of _flat, please use L.LineUtil.isFlat instead."
            ),
            it(t)
          );
        }
        function Fi(t, e) {
          var i, n, s, a, l, c, _, m;
          if (!t || 0 === t.length) throw new Error("latlngs not passed");
          it(t) ||
            (console.warn(
              "latlngs are not flat! Only the first ring will be used"
            ),
            (t = t[0]));
          var y = [];
          for (var T in t) y.push(e.project(R(t[T])));
          var z = y.length;
          for (i = 0, n = 0; i < z - 1; i++) n += y[i].distanceTo(y[i + 1]) / 2;
          if (0 === n) m = y[0];
          else
            for (i = 0, a = 0; i < z - 1; i++)
              if ((a += s = (l = y[i]).distanceTo((c = y[i + 1]))) > n) {
                m = [
                  c.x - (_ = (a - n) / s) * (c.x - l.x),
                  c.y - _ * (c.y - l.y),
                ];
                break;
              }
          return e.unproject(k(m));
        }
        var ao = {
          __proto__: null,
          simplify: Bi,
          pointToSegmentDistance: Ri,
          closestPointOnSegment: function no(t, e, i) {
            return Kt(t, e, i);
          },
          clipSegment: Ui,
          _getEdgeIntersection: se,
          _getBitCode: kt,
          _sqClosestPointOnSegment: Kt,
          isFlat: it,
          _flat: Hi,
          polylineCenter: Fi,
        };
        function Gi(t, e, i) {
          var n,
            a,
            l,
            c,
            _,
            m,
            y,
            T,
            z,
            s = [1, 4, 2, 8];
          for (a = 0, y = t.length; a < y; a++) t[a]._code = kt(t[a], e);
          for (c = 0; c < 4; c++) {
            for (
              T = s[c], n = [], a = 0, l = (y = t.length) - 1;
              a < y;
              l = a++
            )
              (m = t[l]),
                (_ = t[a])._code & T
                  ? m._code & T ||
                    (((z = se(m, _, T, e, i))._code = kt(z, e)), n.push(z))
                  : (m._code & T &&
                      (((z = se(m, _, T, e, i))._code = kt(z, e)), n.push(z)),
                    n.push(_));
            t = n;
          }
          return t;
        }
        function Wi(t, e) {
          var i, n, s, a, l, c, _, m;
          if (!t || 0 === t.length) throw new Error("latlngs not passed");
          it(t) ||
            (console.warn(
              "latlngs are not flat! Only the first ring will be used"
            ),
            (t = t[0]));
          var T = [];
          for (var z in t) T.push(e.project(R(t[z])));
          var nt = T.length;
          for (c = _ = m = 0, i = 0, n = nt - 1; i < nt; n = i++)
            (_ += ((s = T[i]).x + (a = T[n]).x) * (l = s.y * a.x - a.y * s.x)),
              (m += (s.y + a.y) * l),
              (c += 3 * l);
          return e.unproject(k(0 === c ? T[0] : [_ / c, m / c]));
        }
        var ho = { __proto__: null, clipPolygon: Gi, polygonCenter: Wi },
          Ye = {
            project: function (t) {
              return new E(t.lng, t.lat);
            },
            unproject: function (t) {
              return new B(t.y, t.x);
            },
            bounds: new U([-180, -90], [180, 90]),
          },
          Ke = {
            R: 6378137,
            R_MINOR: 6356752.314245179,
            bounds: new U(
              [-20037508.34279, -15496570.73972],
              [20037508.34279, 18764656.23138]
            ),
            project: function (t) {
              var e = Math.PI / 180,
                i = this.R,
                n = t.lat * e,
                s = this.R_MINOR / i,
                a = Math.sqrt(1 - s * s),
                l = a * Math.sin(n),
                c =
                  Math.tan(Math.PI / 4 - n / 2) /
                  Math.pow((1 - l) / (1 + l), a / 2);
              return (
                (n = -i * Math.log(Math.max(c, 1e-10))), new E(t.lng * e * i, n)
              );
            },
            unproject: function (t) {
              for (
                var m,
                  e = 180 / Math.PI,
                  i = this.R,
                  n = this.R_MINOR / i,
                  s = Math.sqrt(1 - n * n),
                  a = Math.exp(-t.y / i),
                  l = Math.PI / 2 - 2 * Math.atan(a),
                  c = 0,
                  _ = 0.1;
                c < 15 && Math.abs(_) > 1e-7;
                c++
              )
                (m = s * Math.sin(l)),
                  (m = Math.pow((1 - m) / (1 + m), s / 2)),
                  (l += _ = Math.PI / 2 - 2 * Math.atan(a * m) - l);
              return new B(l * e, (t.x * e) / i);
            },
          },
          lo = {
            __proto__: null,
            LonLat: Ye,
            Mercator: Ke,
            SphericalMercator: ye,
          },
          co = o({}, vt, {
            code: "EPSG:3395",
            projection: Ke,
            transformation: (function () {
              var t = 0.5 / (Math.PI * Ke.R);
              return Rt(t, 0.5, -t, 0.5);
            })(),
          }),
          Vi = o({}, vt, {
            code: "EPSG:4326",
            projection: Ye,
            transformation: Rt(1 / 180, 1, -1 / 180, 0.5),
          }),
          uo = o({}, _t, {
            projection: Ye,
            transformation: Rt(1, 0, -1, 0),
            scale: function (t) {
              return Math.pow(2, t);
            },
            zoom: function (t) {
              return Math.log(t) / Math.LN2;
            },
            distance: function (t, e) {
              var i = e.lng - t.lng,
                n = e.lat - t.lat;
              return Math.sqrt(i * i + n * n);
            },
            infinite: !0,
          });
        (_t.Earth = vt),
          (_t.EPSG3395 = co),
          (_t.EPSG3857 = xe),
          (_t.EPSG900913 = gn),
          (_t.EPSG4326 = Vi),
          (_t.Simple = uo);
        var at = Bt.extend({
          options: {
            pane: "overlayPane",
            attribution: null,
            bubblingMouseEvents: !0,
          },
          addTo: function (t) {
            return t.addLayer(this), this;
          },
          remove: function () {
            return this.removeFrom(this._map || this._mapToAdd);
          },
          removeFrom: function (t) {
            return t && t.removeLayer(this), this;
          },
          getPane: function (t) {
            return this._map.getPane(
              t ? this.options[t] || t : this.options.pane
            );
          },
          addInteractiveTarget: function (t) {
            return (this._map._targets[f(t)] = this), this;
          },
          removeInteractiveTarget: function (t) {
            return delete this._map._targets[f(t)], this;
          },
          getAttribution: function () {
            return this.options.attribution;
          },
          _layerAdd: function (t) {
            var e = t.target;
            if (e.hasLayer(this)) {
              if (
                ((this._map = e),
                (this._zoomAnimated = e._zoomAnimated),
                this.getEvents)
              ) {
                var i = this.getEvents();
                e.on(i, this),
                  this.once(
                    "remove",
                    function () {
                      e.off(i, this);
                    },
                    this
                  );
              }
              this.onAdd(e),
                this.fire("add"),
                e.fire("layeradd", { layer: this });
            }
          },
        });
        I.include({
          addLayer: function (t) {
            if (!t._layerAdd)
              throw new Error("The provided object is not a Layer.");
            var e = f(t);
            return (
              this._layers[e] ||
                ((this._layers[e] = t),
                (t._mapToAdd = this),
                t.beforeAdd && t.beforeAdd(this),
                this.whenReady(t._layerAdd, t)),
              this
            );
          },
          removeLayer: function (t) {
            var e = f(t);
            return this._layers[e]
              ? (this._loaded && t.onRemove(this),
                delete this._layers[e],
                this._loaded &&
                  (this.fire("layerremove", { layer: t }), t.fire("remove")),
                (t._map = t._mapToAdd = null),
                this)
              : this;
          },
          hasLayer: function (t) {
            return f(t) in this._layers;
          },
          eachLayer: function (t, e) {
            for (var i in this._layers) t.call(e, this._layers[i]);
            return this;
          },
          _addLayers: function (t) {
            for (
              var e = 0, i = (t = t ? (Z(t) ? t : [t]) : []).length;
              e < i;
              e++
            )
              this.addLayer(t[e]);
          },
          _addZoomLimit: function (t) {
            (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) &&
              ((this._zoomBoundLayers[f(t)] = t), this._updateZoomLevels());
          },
          _removeZoomLimit: function (t) {
            var e = f(t);
            this._zoomBoundLayers[e] &&
              (delete this._zoomBoundLayers[e], this._updateZoomLevels());
          },
          _updateZoomLevels: function () {
            var t = 1 / 0,
              e = -1 / 0,
              i = this._getZoomSpan();
            for (var n in this._zoomBoundLayers) {
              var s = this._zoomBoundLayers[n].options;
              (t = void 0 === s.minZoom ? t : Math.min(t, s.minZoom)),
                (e = void 0 === s.maxZoom ? e : Math.max(e, s.maxZoom));
            }
            (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
              (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
              i !== this._getZoomSpan() && this.fire("zoomlevelschange"),
              void 0 === this.options.maxZoom &&
                this._layersMaxZoom &&
                this.getZoom() > this._layersMaxZoom &&
                this.setZoom(this._layersMaxZoom),
              void 0 === this.options.minZoom &&
                this._layersMinZoom &&
                this.getZoom() < this._layersMinZoom &&
                this.setZoom(this._layersMinZoom);
          },
        });
        var Ot = at.extend({
            initialize: function (t, e) {
              var i, n;
              if ((b(this, e), (this._layers = {}), t))
                for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
            },
            addLayer: function (t) {
              var e = this.getLayerId(t);
              return (
                (this._layers[e] = t), this._map && this._map.addLayer(t), this
              );
            },
            removeLayer: function (t) {
              var e = t in this._layers ? t : this.getLayerId(t);
              return (
                this._map &&
                  this._layers[e] &&
                  this._map.removeLayer(this._layers[e]),
                delete this._layers[e],
                this
              );
            },
            hasLayer: function (t) {
              return (
                ("number" == typeof t ? t : this.getLayerId(t)) in this._layers
              );
            },
            clearLayers: function () {
              return this.eachLayer(this.removeLayer, this);
            },
            invoke: function (t) {
              var i,
                n,
                e = Array.prototype.slice.call(arguments, 1);
              for (i in this._layers)
                (n = this._layers[i])[t] && n[t].apply(n, e);
              return this;
            },
            onAdd: function (t) {
              this.eachLayer(t.addLayer, t);
            },
            onRemove: function (t) {
              this.eachLayer(t.removeLayer, t);
            },
            eachLayer: function (t, e) {
              for (var i in this._layers) t.call(e, this._layers[i]);
              return this;
            },
            getLayer: function (t) {
              return this._layers[t];
            },
            getLayers: function () {
              var t = [];
              return this.eachLayer(t.push, t), t;
            },
            setZIndex: function (t) {
              return this.invoke("setZIndex", t);
            },
            getLayerId: function (t) {
              return f(t);
            },
          }),
          ft = Ot.extend({
            addLayer: function (t) {
              return this.hasLayer(t)
                ? this
                : (t.addEventParent(this),
                  Ot.prototype.addLayer.call(this, t),
                  this.fire("layeradd", { layer: t }));
            },
            removeLayer: function (t) {
              return this.hasLayer(t)
                ? (t in this._layers && (t = this._layers[t]),
                  t.removeEventParent(this),
                  Ot.prototype.removeLayer.call(this, t),
                  this.fire("layerremove", { layer: t }))
                : this;
            },
            setStyle: function (t) {
              return this.invoke("setStyle", t);
            },
            bringToFront: function () {
              return this.invoke("bringToFront");
            },
            bringToBack: function () {
              return this.invoke("bringToBack");
            },
            getBounds: function () {
              var t = new J();
              for (var e in this._layers) {
                var i = this._layers[e];
                t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
              }
              return t;
            },
          }),
          zt = dt.extend({
            options: {
              popupAnchor: [0, 0],
              tooltipAnchor: [0, 0],
              crossOrigin: !1,
            },
            initialize: function (t) {
              b(this, t);
            },
            createIcon: function (t) {
              return this._createIcon("icon", t);
            },
            createShadow: function (t) {
              return this._createIcon("shadow", t);
            },
            _createIcon: function (t, e) {
              var i = this._getIconUrl(t);
              if (!i) {
                if ("icon" === t)
                  throw new Error(
                    "iconUrl not set in Icon options (see the docs)."
                  );
                return null;
              }
              var n = this._createImg(i, e && "IMG" === e.tagName ? e : null);
              return (
                this._setIconStyles(n, t),
                (this.options.crossOrigin || "" === this.options.crossOrigin) &&
                  (n.crossOrigin =
                    !0 === this.options.crossOrigin
                      ? ""
                      : this.options.crossOrigin),
                n
              );
            },
            _setIconStyles: function (t, e) {
              var i = this.options,
                n = i[e + "Size"];
              "number" == typeof n && (n = [n, n]);
              var s = k(n),
                a = k(
                  ("shadow" === e && i.shadowAnchor) ||
                    i.iconAnchor ||
                    (s && s.divideBy(2, !0))
                );
              (t.className = "leaflet-marker-" + e + " " + (i.className || "")),
                a &&
                  ((t.style.marginLeft = -a.x + "px"),
                  (t.style.marginTop = -a.y + "px")),
                s &&
                  ((t.style.width = s.x + "px"), (t.style.height = s.y + "px"));
            },
            _createImg: function (t, e) {
              return ((e = e || document.createElement("img")).src = t), e;
            },
            _getIconUrl: function (t) {
              return (
                (x.retina && this.options[t + "RetinaUrl"]) ||
                this.options[t + "Url"]
              );
            },
          });
        var jt = zt.extend({
            options: {
              iconUrl: "marker-icon.png",
              iconRetinaUrl: "marker-icon-2x.png",
              shadowUrl: "marker-shadow.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              tooltipAnchor: [16, -28],
              shadowSize: [41, 41],
            },
            _getIconUrl: function (t) {
              return (
                "string" != typeof jt.imagePath &&
                  (jt.imagePath = this._detectIconPath()),
                (this.options.imagePath || jt.imagePath) +
                  zt.prototype._getIconUrl.call(this, t)
              );
            },
            _stripUrl: function (t) {
              var e = function (i, n, s) {
                var a = n.exec(i);
                return a && a[s];
              };
              return (
                (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) &&
                e(t, /^(.*)marker-icon\.png$/, 1)
              );
            },
            _detectIconPath: function () {
              var t = A("div", "leaflet-default-icon-path", document.body),
                e = Ht(t, "background-image") || Ht(t, "backgroundImage");
              if ((document.body.removeChild(t), (e = this._stripUrl(e))))
                return e;
              var i = document.querySelector('link[href$="leaflet.css"]');
              return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
            },
          }),
          Yi = ct.extend({
            initialize: function (t) {
              this._marker = t;
            },
            addHooks: function () {
              var t = this._marker._icon;
              this._draggable || (this._draggable = new Lt(t, t, !0)),
                this._draggable
                  .on(
                    {
                      dragstart: this._onDragStart,
                      predrag: this._onPreDrag,
                      drag: this._onDrag,
                      dragend: this._onDragEnd,
                    },
                    this
                  )
                  .enable(),
                D(t, "leaflet-marker-draggable");
            },
            removeHooks: function () {
              this._draggable
                .off(
                  {
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd,
                  },
                  this
                )
                .disable(),
                this._marker._icon &&
                  F(this._marker._icon, "leaflet-marker-draggable");
            },
            moved: function () {
              return this._draggable && this._draggable._moved;
            },
            _adjustPan: function (t) {
              var e = this._marker,
                i = e._map,
                n = this._marker.options.autoPanSpeed,
                s = this._marker.options.autoPanPadding,
                a = Pt(e._icon),
                l = i.getPixelBounds(),
                c = i.getPixelOrigin(),
                _ = $(
                  l.min._subtract(c).add(s),
                  l.max._subtract(c).subtract(s)
                );
              if (!_.contains(a)) {
                var m = k(
                  (Math.max(_.max.x, a.x) - _.max.x) / (l.max.x - _.max.x) -
                    (Math.min(_.min.x, a.x) - _.min.x) / (l.min.x - _.min.x),
                  (Math.max(_.max.y, a.y) - _.max.y) / (l.max.y - _.max.y) -
                    (Math.min(_.min.y, a.y) - _.min.y) / (l.min.y - _.min.y)
                ).multiplyBy(n);
                i.panBy(m, { animate: !1 }),
                  this._draggable._newPos._add(m),
                  this._draggable._startPos._add(m),
                  W(e._icon, this._draggable._newPos),
                  this._onDrag(t),
                  (this._panRequest = X(this._adjustPan.bind(this, t)));
              }
            },
            _onDragStart: function () {
              (this._oldLatLng = this._marker.getLatLng()),
                this._marker.closePopup && this._marker.closePopup(),
                this._marker.fire("movestart").fire("dragstart");
            },
            _onPreDrag: function (t) {
              this._marker.options.autoPan &&
                (tt(this._panRequest),
                (this._panRequest = X(this._adjustPan.bind(this, t))));
            },
            _onDrag: function (t) {
              var e = this._marker,
                i = e._shadow,
                n = Pt(e._icon),
                s = e._map.layerPointToLatLng(n);
              i && W(i, n),
                (e._latlng = s),
                (t.latlng = s),
                (t.oldLatLng = this._oldLatLng),
                e.fire("move", t).fire("drag", t);
            },
            _onDragEnd: function (t) {
              tt(this._panRequest),
                delete this._oldLatLng,
                this._marker.fire("moveend").fire("dragend", t);
            },
          }),
          re = at.extend({
            options: {
              icon: new jt(),
              interactive: !0,
              keyboard: !0,
              title: "",
              alt: "Marker",
              zIndexOffset: 0,
              opacity: 1,
              riseOnHover: !1,
              riseOffset: 250,
              pane: "markerPane",
              shadowPane: "shadowPane",
              bubblingMouseEvents: !1,
              autoPanOnFocus: !0,
              draggable: !1,
              autoPan: !1,
              autoPanPadding: [50, 50],
              autoPanSpeed: 10,
            },
            initialize: function (t, e) {
              b(this, e), (this._latlng = R(t));
            },
            onAdd: function (t) {
              (this._zoomAnimated =
                this._zoomAnimated && t.options.markerZoomAnimation),
                this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
                this._initIcon(),
                this.update();
            },
            onRemove: function (t) {
              this.dragging &&
                this.dragging.enabled() &&
                ((this.options.draggable = !0), this.dragging.removeHooks()),
                delete this.dragging,
                this._zoomAnimated &&
                  t.off("zoomanim", this._animateZoom, this),
                this._removeIcon(),
                this._removeShadow();
            },
            getEvents: function () {
              return { zoom: this.update, viewreset: this.update };
            },
            getLatLng: function () {
              return this._latlng;
            },
            setLatLng: function (t) {
              var e = this._latlng;
              return (
                (this._latlng = R(t)),
                this.update(),
                this.fire("move", { oldLatLng: e, latlng: this._latlng })
              );
            },
            setZIndexOffset: function (t) {
              return (this.options.zIndexOffset = t), this.update();
            },
            getIcon: function () {
              return this.options.icon;
            },
            setIcon: function (t) {
              return (
                (this.options.icon = t),
                this._map && (this._initIcon(), this.update()),
                this._popup && this.bindPopup(this._popup, this._popup.options),
                this
              );
            },
            getElement: function () {
              return this._icon;
            },
            update: function () {
              if (this._icon && this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(t);
              }
              return this;
            },
            _initIcon: function () {
              var t = this.options,
                e =
                  "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                i = t.icon.createIcon(this._icon),
                n = !1;
              i !== this._icon &&
                (this._icon && this._removeIcon(),
                (n = !0),
                t.title && (i.title = t.title),
                "IMG" === i.tagName && (i.alt = t.alt || "")),
                D(i, e),
                t.keyboard &&
                  ((i.tabIndex = "0"), i.setAttribute("role", "button")),
                (this._icon = i),
                t.riseOnHover &&
                  this.on({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex,
                  }),
                this.options.autoPanOnFocus &&
                  C(i, "focus", this._panOnFocus, this);
              var s = t.icon.createShadow(this._shadow),
                a = !1;
              s !== this._shadow && (this._removeShadow(), (a = !0)),
                s && (D(s, e), (s.alt = "")),
                (this._shadow = s),
                t.opacity < 1 && this._updateOpacity(),
                n && this.getPane().appendChild(this._icon),
                this._initInteraction(),
                s && a && this.getPane(t.shadowPane).appendChild(this._shadow);
            },
            _removeIcon: function () {
              this.options.riseOnHover &&
                this.off({
                  mouseover: this._bringToFront,
                  mouseout: this._resetZIndex,
                }),
                this.options.autoPanOnFocus &&
                  N(this._icon, "focus", this._panOnFocus, this),
                H(this._icon),
                this.removeInteractiveTarget(this._icon),
                (this._icon = null);
            },
            _removeShadow: function () {
              this._shadow && H(this._shadow), (this._shadow = null);
            },
            _setPos: function (t) {
              this._icon && W(this._icon, t),
                this._shadow && W(this._shadow, t),
                (this._zIndex = t.y + this.options.zIndexOffset),
                this._resetZIndex();
            },
            _updateZIndex: function (t) {
              this._icon && (this._icon.style.zIndex = this._zIndex + t);
            },
            _animateZoom: function (t) {
              var e = this._map
                ._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
                .round();
              this._setPos(e);
            },
            _initInteraction: function () {
              if (
                this.options.interactive &&
                (D(this._icon, "leaflet-interactive"),
                this.addInteractiveTarget(this._icon),
                Yi)
              ) {
                var t = this.options.draggable;
                this.dragging &&
                  ((t = this.dragging.enabled()), this.dragging.disable()),
                  (this.dragging = new Yi(this)),
                  t && this.dragging.enable();
              }
            },
            setOpacity: function (t) {
              return (
                (this.options.opacity = t),
                this._map && this._updateOpacity(),
                this
              );
            },
            _updateOpacity: function () {
              var t = this.options.opacity;
              this._icon && et(this._icon, t),
                this._shadow && et(this._shadow, t);
            },
            _bringToFront: function () {
              this._updateZIndex(this.options.riseOffset);
            },
            _resetZIndex: function () {
              this._updateZIndex(0);
            },
            _panOnFocus: function () {
              var t = this._map;
              if (t) {
                var e = this.options.icon.options,
                  i = e.iconSize ? k(e.iconSize) : k(0, 0),
                  n = e.iconAnchor ? k(e.iconAnchor) : k(0, 0);
                t.panInside(this._latlng, {
                  paddingTopLeft: n,
                  paddingBottomRight: i.subtract(n),
                });
              }
            },
            _getPopupAnchor: function () {
              return this.options.icon.options.popupAnchor;
            },
            _getTooltipAnchor: function () {
              return this.options.icon.options.tooltipAnchor;
            },
          });
        var yt = at.extend({
            options: {
              stroke: !0,
              color: "#3388ff",
              weight: 3,
              opacity: 1,
              lineCap: "round",
              lineJoin: "round",
              dashArray: null,
              dashOffset: null,
              fill: !1,
              fillColor: null,
              fillOpacity: 0.2,
              fillRule: "evenodd",
              interactive: !0,
              bubblingMouseEvents: !0,
            },
            beforeAdd: function (t) {
              this._renderer = t.getRenderer(this);
            },
            onAdd: function () {
              this._renderer._initPath(this),
                this._reset(),
                this._renderer._addPath(this);
            },
            onRemove: function () {
              this._renderer._removePath(this);
            },
            redraw: function () {
              return this._map && this._renderer._updatePath(this), this;
            },
            setStyle: function (t) {
              return (
                b(this, t),
                this._renderer &&
                  (this._renderer._updateStyle(this),
                  this.options.stroke &&
                    t &&
                    Object.prototype.hasOwnProperty.call(t, "weight") &&
                    this._updateBounds()),
                this
              );
            },
            bringToFront: function () {
              return this._renderer && this._renderer._bringToFront(this), this;
            },
            bringToBack: function () {
              return this._renderer && this._renderer._bringToBack(this), this;
            },
            getElement: function () {
              return this._path;
            },
            _reset: function () {
              this._project(), this._update();
            },
            _clickTolerance: function () {
              return (
                (this.options.stroke ? this.options.weight / 2 : 0) +
                (this._renderer.options.tolerance || 0)
              );
            },
          }),
          ae = yt.extend({
            options: { fill: !0, radius: 10 },
            initialize: function (t, e) {
              b(this, e),
                (this._latlng = R(t)),
                (this._radius = this.options.radius);
            },
            setLatLng: function (t) {
              var e = this._latlng;
              return (
                (this._latlng = R(t)),
                this.redraw(),
                this.fire("move", { oldLatLng: e, latlng: this._latlng })
              );
            },
            getLatLng: function () {
              return this._latlng;
            },
            setRadius: function (t) {
              return (this.options.radius = this._radius = t), this.redraw();
            },
            getRadius: function () {
              return this._radius;
            },
            setStyle: function (t) {
              var e = (t && t.radius) || this._radius;
              return (
                yt.prototype.setStyle.call(this, t), this.setRadius(e), this
              );
            },
            _project: function () {
              (this._point = this._map.latLngToLayerPoint(this._latlng)),
                this._updateBounds();
            },
            _updateBounds: function () {
              var t = this._radius,
                e = this._radiusY || t,
                i = this._clickTolerance(),
                n = [t + i, e + i];
              this._pxBounds = new U(
                this._point.subtract(n),
                this._point.add(n)
              );
            },
            _update: function () {
              this._map && this._updatePath();
            },
            _updatePath: function () {
              this._renderer._updateCircle(this);
            },
            _empty: function () {
              return (
                this._radius &&
                !this._renderer._bounds.intersects(this._pxBounds)
              );
            },
            _containsPoint: function (t) {
              return (
                t.distanceTo(this._point) <=
                this._radius + this._clickTolerance()
              );
            },
          });
        var je = ae.extend({
          initialize: function (t, e, i) {
            if (
              ("number" == typeof e && (e = o({}, i, { radius: e })),
              b(this, e),
              (this._latlng = R(t)),
              isNaN(this.options.radius))
            )
              throw new Error("Circle radius cannot be NaN");
            this._mRadius = this.options.radius;
          },
          setRadius: function (t) {
            return (this._mRadius = t), this.redraw();
          },
          getRadius: function () {
            return this._mRadius;
          },
          getBounds: function () {
            var t = [this._radius, this._radiusY || this._radius];
            return new J(
              this._map.layerPointToLatLng(this._point.subtract(t)),
              this._map.layerPointToLatLng(this._point.add(t))
            );
          },
          setStyle: yt.prototype.setStyle,
          _project: function () {
            var t = this._latlng.lng,
              e = this._latlng.lat,
              i = this._map,
              n = i.options.crs;
            if (n.distance === vt.distance) {
              var s = Math.PI / 180,
                a = this._mRadius / vt.R / s,
                l = i.project([e + a, t]),
                c = i.project([e - a, t]),
                _ = l.add(c).divideBy(2),
                m = i.unproject(_).lat,
                y =
                  Math.acos(
                    (Math.cos(a * s) - Math.sin(e * s) * Math.sin(m * s)) /
                      (Math.cos(e * s) * Math.cos(m * s))
                  ) / s;
              (isNaN(y) || 0 === y) && (y = a / Math.cos((Math.PI / 180) * e)),
                (this._point = _.subtract(i.getPixelOrigin())),
                (this._radius = isNaN(y) ? 0 : _.x - i.project([m, t - y]).x),
                (this._radiusY = _.y - l.y);
            } else {
              var T = n.unproject(
                n.project(this._latlng).subtract([this._mRadius, 0])
              );
              (this._point = i.latLngToLayerPoint(this._latlng)),
                (this._radius = this._point.x - i.latLngToLayerPoint(T).x);
            }
            this._updateBounds();
          },
        });
        var pt = yt.extend({
          options: { smoothFactor: 1, noClip: !1 },
          initialize: function (t, e) {
            b(this, e), this._setLatLngs(t);
          },
          getLatLngs: function () {
            return this._latlngs;
          },
          setLatLngs: function (t) {
            return this._setLatLngs(t), this.redraw();
          },
          isEmpty: function () {
            return !this._latlngs.length;
          },
          closestLayerPoint: function (t) {
            for (
              var s,
                a,
                e = 1 / 0,
                i = null,
                n = Kt,
                l = 0,
                c = this._parts.length;
              l < c;
              l++
            )
              for (var _ = this._parts[l], m = 1, y = _.length; m < y; m++) {
                var T = n(t, (s = _[m - 1]), (a = _[m]), !0);
                T < e && ((e = T), (i = n(t, s, a)));
              }
            return i && (i.distance = Math.sqrt(e)), i;
          },
          getCenter: function () {
            if (!this._map)
              throw new Error("Must add layer to map before using getCenter()");
            return Fi(this._defaultShape(), this._map.options.crs);
          },
          getBounds: function () {
            return this._bounds;
          },
          addLatLng: function (t, e) {
            return (
              (e = e || this._defaultShape()),
              (t = R(t)),
              e.push(t),
              this._bounds.extend(t),
              this.redraw()
            );
          },
          _setLatLngs: function (t) {
            (this._bounds = new J()), (this._latlngs = this._convertLatLngs(t));
          },
          _defaultShape: function () {
            return it(this._latlngs) ? this._latlngs : this._latlngs[0];
          },
          _convertLatLngs: function (t) {
            for (var e = [], i = it(t), n = 0, s = t.length; n < s; n++)
              i
                ? ((e[n] = R(t[n])), this._bounds.extend(e[n]))
                : (e[n] = this._convertLatLngs(t[n]));
            return e;
          },
          _project: function () {
            var t = new U();
            (this._rings = []),
              this._projectLatlngs(this._latlngs, this._rings, t),
              this._bounds.isValid() &&
                t.isValid() &&
                ((this._rawPxBounds = t), this._updateBounds());
          },
          _updateBounds: function () {
            var t = this._clickTolerance(),
              e = new E(t, t);
            this._rawPxBounds &&
              (this._pxBounds = new U([
                this._rawPxBounds.min.subtract(e),
                this._rawPxBounds.max.add(e),
              ]));
          },
          _projectLatlngs: function (t, e, i) {
            var a,
              l,
              s = t.length;
            if (t[0] instanceof B) {
              for (l = [], a = 0; a < s; a++)
                (l[a] = this._map.latLngToLayerPoint(t[a])), i.extend(l[a]);
              e.push(l);
            } else for (a = 0; a < s; a++) this._projectLatlngs(t[a], e, i);
          },
          _clipPoints: function () {
            var t = this._renderer._bounds;
            if (
              ((this._parts = []),
              this._pxBounds && this._pxBounds.intersects(t))
            ) {
              if (this.options.noClip) return void (this._parts = this._rings);
              var i,
                n,
                s,
                a,
                l,
                c,
                _,
                e = this._parts;
              for (i = 0, s = 0, a = this._rings.length; i < a; i++)
                for (n = 0, l = (_ = this._rings[i]).length; n < l - 1; n++)
                  (c = Ui(_[n], _[n + 1], t, n, !0)) &&
                    ((e[s] = e[s] || []),
                    e[s].push(c[0]),
                    (c[1] !== _[n + 1] || n === l - 2) &&
                      (e[s].push(c[1]), s++));
            }
          },
          _simplifyPoints: function () {
            for (
              var t = this._parts,
                e = this.options.smoothFactor,
                i = 0,
                n = t.length;
              i < n;
              i++
            )
              t[i] = Bi(t[i], e);
          },
          _update: function () {
            this._map &&
              (this._clipPoints(), this._simplifyPoints(), this._updatePath());
          },
          _updatePath: function () {
            this._renderer._updatePoly(this);
          },
          _containsPoint: function (t, e) {
            var i,
              n,
              s,
              a,
              l,
              c,
              _ = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
            for (i = 0, a = this._parts.length; i < a; i++)
              for (
                n = 0, s = (l = (c = this._parts[i]).length) - 1;
                n < l;
                s = n++
              )
                if ((e || 0 !== n) && Ri(t, c[s], c[n]) <= _) return !0;
            return !1;
          },
        });
        pt._flat = Hi;
        var It = pt.extend({
          options: { fill: !0 },
          isEmpty: function () {
            return !this._latlngs.length || !this._latlngs[0].length;
          },
          getCenter: function () {
            if (!this._map)
              throw new Error("Must add layer to map before using getCenter()");
            return Wi(this._defaultShape(), this._map.options.crs);
          },
          _convertLatLngs: function (t) {
            var e = pt.prototype._convertLatLngs.call(this, t),
              i = e.length;
            return (
              i >= 2 && e[0] instanceof B && e[0].equals(e[i - 1]) && e.pop(), e
            );
          },
          _setLatLngs: function (t) {
            pt.prototype._setLatLngs.call(this, t),
              it(this._latlngs) && (this._latlngs = [this._latlngs]);
          },
          _defaultShape: function () {
            return it(this._latlngs[0])
              ? this._latlngs[0]
              : this._latlngs[0][0];
          },
          _clipPoints: function () {
            var t = this._renderer._bounds,
              e = this.options.weight,
              i = new E(e, e);
            if (
              ((t = new U(t.min.subtract(i), t.max.add(i))),
              (this._parts = []),
              this._pxBounds && this._pxBounds.intersects(t))
            ) {
              if (this.options.noClip) return void (this._parts = this._rings);
              for (var a, n = 0, s = this._rings.length; n < s; n++)
                (a = Gi(this._rings[n], t, !0)).length && this._parts.push(a);
            }
          },
          _updatePath: function () {
            this._renderer._updatePoly(this, !0);
          },
          _containsPoint: function (t) {
            var i,
              n,
              s,
              a,
              l,
              c,
              _,
              m,
              e = !1;
            if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
            for (a = 0, _ = this._parts.length; a < _; a++)
              for (
                l = 0, c = (m = (i = this._parts[a]).length) - 1;
                l < m;
                c = l++
              )
                (n = i[l]).y > t.y != (s = i[c]).y > t.y &&
                  t.x < ((s.x - n.x) * (t.y - n.y)) / (s.y - n.y) + n.x &&
                  (e = !e);
            return e || pt.prototype._containsPoint.call(this, t, !0);
          },
        });
        var mt = ft.extend({
          initialize: function (t, e) {
            b(this, e), (this._layers = {}), t && this.addData(t);
          },
          addData: function (t) {
            var i,
              n,
              s,
              e = Z(t) ? t : t.features;
            if (e) {
              for (i = 0, n = e.length; i < n; i++)
                ((s = e[i]).geometries ||
                  s.geometry ||
                  s.features ||
                  s.coordinates) &&
                  this.addData(s);
              return this;
            }
            var a = this.options;
            if (a.filter && !a.filter(t)) return this;
            var l = he(t, a);
            return l
              ? ((l.feature = ue(t)),
                (l.defaultOptions = l.options),
                this.resetStyle(l),
                a.onEachFeature && a.onEachFeature(t, l),
                this.addLayer(l))
              : this;
          },
          resetStyle: function (t) {
            return void 0 === t
              ? this.eachLayer(this.resetStyle, this)
              : ((t.options = o({}, t.defaultOptions)),
                this._setLayerStyle(t, this.options.style),
                this);
          },
          setStyle: function (t) {
            return this.eachLayer(function (e) {
              this._setLayerStyle(e, t);
            }, this);
          },
          _setLayerStyle: function (t, e) {
            t.setStyle &&
              ("function" == typeof e && (e = e(t.feature)), t.setStyle(e));
          },
        });
        function he(t, e) {
          var c,
            _,
            m,
            y,
            i = "Feature" === t.type ? t.geometry : t,
            n = i ? i.coordinates : null,
            s = [],
            a = e && e.pointToLayer,
            l = (e && e.coordsToLatLng) || qe;
          if (!n && !i) return null;
          switch (i.type) {
            case "Point":
              return Ki(a, t, (c = l(n)), e);
            case "MultiPoint":
              for (m = 0, y = n.length; m < y; m++)
                (c = l(n[m])), s.push(Ki(a, t, c, e));
              return new ft(s);
            case "LineString":
            case "MultiLineString":
              return (
                (_ = le(n, "LineString" === i.type ? 0 : 1, l)), new pt(_, e)
              );
            case "Polygon":
            case "MultiPolygon":
              return (_ = le(n, "Polygon" === i.type ? 1 : 2, l)), new It(_, e);
            case "GeometryCollection":
              for (m = 0, y = i.geometries.length; m < y; m++) {
                var T = he(
                  {
                    geometry: i.geometries[m],
                    type: "Feature",
                    properties: t.properties,
                  },
                  e
                );
                T && s.push(T);
              }
              return new ft(s);
            case "FeatureCollection":
              for (m = 0, y = i.features.length; m < y; m++) {
                var z = he(i.features[m], e);
                z && s.push(z);
              }
              return new ft(s);
            default:
              throw new Error("Invalid GeoJSON object.");
          }
        }
        function Ki(t, e, i, n) {
          return t ? t(e, i) : new re(i, n && n.markersInheritOptions && n);
        }
        function qe(t) {
          return new B(t[1], t[0], t[2]);
        }
        function le(t, e, i) {
          for (var l, n = [], s = 0, a = t.length; s < a; s++)
            (l = e ? le(t[s], e - 1, i) : (i || qe)(t[s])), n.push(l);
          return n;
        }
        function Xe(t, e) {
          return void 0 !== (t = R(t)).alt
            ? [S(t.lng, e), S(t.lat, e), S(t.alt, e)]
            : [S(t.lng, e), S(t.lat, e)];
        }
        function ce(t, e, i, n) {
          for (var s = [], a = 0, l = t.length; a < l; a++)
            s.push(e ? ce(t[a], it(t[a]) ? 0 : e - 1, i, n) : Xe(t[a], n));
          return !e && i && s.push(s[0].slice()), s;
        }
        function At(t, e) {
          return t.feature ? o({}, t.feature, { geometry: e }) : ue(e);
        }
        function ue(t) {
          return "Feature" === t.type || "FeatureCollection" === t.type
            ? t
            : { type: "Feature", properties: {}, geometry: t };
        }
        var $e = {
          toGeoJSON: function (t) {
            return At(this, {
              type: "Point",
              coordinates: Xe(this.getLatLng(), t),
            });
          },
        };
        function ji(t, e) {
          return new mt(t, e);
        }
        re.include($e),
          je.include($e),
          ae.include($e),
          pt.include({
            toGeoJSON: function (t) {
              var e = !it(this._latlngs);
              return At(this, {
                type: (e ? "Multi" : "") + "LineString",
                coordinates: ce(this._latlngs, e ? 1 : 0, !1, t),
              });
            },
          }),
          It.include({
            toGeoJSON: function (t) {
              var e = !it(this._latlngs),
                i = e && !it(this._latlngs[0]),
                n = ce(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
              return (
                e || (n = [n]),
                At(this, {
                  type: (i ? "Multi" : "") + "Polygon",
                  coordinates: n,
                })
              );
            },
          }),
          Ot.include({
            toMultiPoint: function (t) {
              var e = [];
              return (
                this.eachLayer(function (i) {
                  e.push(i.toGeoJSON(t).geometry.coordinates);
                }),
                At(this, { type: "MultiPoint", coordinates: e })
              );
            },
            toGeoJSON: function (t) {
              var e =
                this.feature &&
                this.feature.geometry &&
                this.feature.geometry.type;
              if ("MultiPoint" === e) return this.toMultiPoint(t);
              var i = "GeometryCollection" === e,
                n = [];
              return (
                this.eachLayer(function (s) {
                  if (s.toGeoJSON) {
                    var a = s.toGeoJSON(t);
                    if (i) n.push(a.geometry);
                    else {
                      var l = ue(a);
                      "FeatureCollection" === l.type
                        ? n.push.apply(n, l.features)
                        : n.push(l);
                    }
                  }
                }),
                i
                  ? At(this, { geometries: n, type: "GeometryCollection" })
                  : { type: "FeatureCollection", features: n }
              );
            },
          });
        var wo = ji,
          de = at.extend({
            options: {
              opacity: 1,
              alt: "",
              interactive: !1,
              crossOrigin: !1,
              errorOverlayUrl: "",
              zIndex: 1,
              className: "",
            },
            initialize: function (t, e, i) {
              (this._url = t), (this._bounds = K(e)), b(this, i);
            },
            onAdd: function () {
              this._image ||
                (this._initImage(),
                this.options.opacity < 1 && this._updateOpacity()),
                this.options.interactive &&
                  (D(this._image, "leaflet-interactive"),
                  this.addInteractiveTarget(this._image)),
                this.getPane().appendChild(this._image),
                this._reset();
            },
            onRemove: function () {
              H(this._image),
                this.options.interactive &&
                  this.removeInteractiveTarget(this._image);
            },
            setOpacity: function (t) {
              return (
                (this.options.opacity = t),
                this._image && this._updateOpacity(),
                this
              );
            },
            setStyle: function (t) {
              return t.opacity && this.setOpacity(t.opacity), this;
            },
            bringToFront: function () {
              return this._map && Dt(this._image), this;
            },
            bringToBack: function () {
              return this._map && St(this._image), this;
            },
            setUrl: function (t) {
              return (
                (this._url = t), this._image && (this._image.src = t), this
              );
            },
            setBounds: function (t) {
              return (this._bounds = K(t)), this._map && this._reset(), this;
            },
            getEvents: function () {
              var t = { zoom: this._reset, viewreset: this._reset };
              return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
            },
            setZIndex: function (t) {
              return (this.options.zIndex = t), this._updateZIndex(), this;
            },
            getBounds: function () {
              return this._bounds;
            },
            getElement: function () {
              return this._image;
            },
            _initImage: function () {
              var t = "IMG" === this._url.tagName,
                e = (this._image = t ? this._url : A("img"));
              D(e, "leaflet-image-layer"),
                this._zoomAnimated && D(e, "leaflet-zoom-animated"),
                this.options.className && D(e, this.options.className),
                (e.onselectstart = w),
                (e.onmousemove = w),
                (e.onload = h(this.fire, this, "load")),
                (e.onerror = h(this._overlayOnError, this, "error")),
                (this.options.crossOrigin || "" === this.options.crossOrigin) &&
                  (e.crossOrigin =
                    !0 === this.options.crossOrigin
                      ? ""
                      : this.options.crossOrigin),
                this.options.zIndex && this._updateZIndex(),
                t
                  ? (this._url = e.src)
                  : ((e.src = this._url), (e.alt = this.options.alt));
            },
            _animateZoom: function (t) {
              var e = this._map.getZoomScale(t.zoom),
                i = this._map._latLngBoundsToNewLayerBounds(
                  this._bounds,
                  t.zoom,
                  t.center
                ).min;
              bt(this._image, i, e);
            },
            _reset: function () {
              var t = this._image,
                e = new U(
                  this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                  this._map.latLngToLayerPoint(this._bounds.getSouthEast())
                ),
                i = e.getSize();
              W(t, e.min),
                (t.style.width = i.x + "px"),
                (t.style.height = i.y + "px");
            },
            _updateOpacity: function () {
              et(this._image, this.options.opacity);
            },
            _updateZIndex: function () {
              this._image &&
                null != this.options.zIndex &&
                (this._image.style.zIndex = this.options.zIndex);
            },
            _overlayOnError: function () {
              this.fire("error");
              var t = this.options.errorOverlayUrl;
              t && this._url !== t && ((this._url = t), (this._image.src = t));
            },
            getCenter: function () {
              return this._bounds.getCenter();
            },
          }),
          qi = de.extend({
            options: {
              autoplay: !0,
              loop: !0,
              keepAspectRatio: !0,
              muted: !1,
              playsInline: !0,
            },
            _initImage: function () {
              var t = "VIDEO" === this._url.tagName,
                e = (this._image = t ? this._url : A("video"));
              if (
                (D(e, "leaflet-image-layer"),
                this._zoomAnimated && D(e, "leaflet-zoom-animated"),
                this.options.className && D(e, this.options.className),
                (e.onselectstart = w),
                (e.onmousemove = w),
                (e.onloadeddata = h(this.fire, this, "load")),
                t)
              ) {
                for (
                  var i = e.getElementsByTagName("source"), n = [], s = 0;
                  s < i.length;
                  s++
                )
                  n.push(i[s].src);
                this._url = i.length > 0 ? n : [e.src];
              } else {
                Z(this._url) || (this._url = [this._url]),
                  !this.options.keepAspectRatio &&
                    Object.prototype.hasOwnProperty.call(
                      e.style,
                      "objectFit"
                    ) &&
                    (e.style.objectFit = "fill"),
                  (e.autoplay = !!this.options.autoplay),
                  (e.loop = !!this.options.loop),
                  (e.muted = !!this.options.muted),
                  (e.playsInline = !!this.options.playsInline);
                for (var a = 0; a < this._url.length; a++) {
                  var l = A("source");
                  (l.src = this._url[a]), e.appendChild(l);
                }
              }
            },
          });
        var Xi = de.extend({
          _initImage: function () {
            var t = (this._image = this._url);
            D(t, "leaflet-image-layer"),
              this._zoomAnimated && D(t, "leaflet-zoom-animated"),
              this.options.className && D(t, this.options.className),
              (t.onselectstart = w),
              (t.onmousemove = w);
          },
        });
        var ut = at.extend({
          options: {
            interactive: !1,
            offset: [0, 0],
            className: "",
            pane: void 0,
            content: "",
          },
          initialize: function (t, e) {
            t && (t instanceof B || Z(t))
              ? ((this._latlng = R(t)), b(this, e))
              : (b(this, t), (this._source = e)),
              this.options.content && (this._content = this.options.content);
          },
          openOn: function (t) {
            return (
              (t = arguments.length ? t : this._source._map).hasLayer(this) ||
                t.addLayer(this),
              this
            );
          },
          close: function () {
            return this._map && this._map.removeLayer(this), this;
          },
          toggle: function (t) {
            return (
              this._map
                ? this.close()
                : (arguments.length ? (this._source = t) : (t = this._source),
                  this._prepareOpen(),
                  this.openOn(t._map)),
              this
            );
          },
          onAdd: function (t) {
            (this._zoomAnimated = t._zoomAnimated),
              this._container || this._initLayout(),
              t._fadeAnimated && et(this._container, 0),
              clearTimeout(this._removeTimeout),
              this.getPane().appendChild(this._container),
              this.update(),
              t._fadeAnimated && et(this._container, 1),
              this.bringToFront(),
              this.options.interactive &&
                (D(this._container, "leaflet-interactive"),
                this.addInteractiveTarget(this._container));
          },
          onRemove: function (t) {
            t._fadeAnimated
              ? (et(this._container, 0),
                (this._removeTimeout = setTimeout(
                  h(H, void 0, this._container),
                  200
                )))
              : H(this._container),
              this.options.interactive &&
                (F(this._container, "leaflet-interactive"),
                this.removeInteractiveTarget(this._container));
          },
          getLatLng: function () {
            return this._latlng;
          },
          setLatLng: function (t) {
            return (
              (this._latlng = R(t)),
              this._map && (this._updatePosition(), this._adjustPan()),
              this
            );
          },
          getContent: function () {
            return this._content;
          },
          setContent: function (t) {
            return (this._content = t), this.update(), this;
          },
          getElement: function () {
            return this._container;
          },
          update: function () {
            this._map &&
              ((this._container.style.visibility = "hidden"),
              this._updateContent(),
              this._updateLayout(),
              this._updatePosition(),
              (this._container.style.visibility = ""),
              this._adjustPan());
          },
          getEvents: function () {
            var t = {
              zoom: this._updatePosition,
              viewreset: this._updatePosition,
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
          },
          isOpen: function () {
            return !!this._map && this._map.hasLayer(this);
          },
          bringToFront: function () {
            return this._map && Dt(this._container), this;
          },
          bringToBack: function () {
            return this._map && St(this._container), this;
          },
          _prepareOpen: function (t) {
            var e = this._source;
            if (!e._map) return !1;
            if (e instanceof ft) {
              e = null;
              var i = this._source._layers;
              for (var n in i)
                if (i[n]._map) {
                  e = i[n];
                  break;
                }
              if (!e) return !1;
              this._source = e;
            }
            if (!t)
              if (e.getCenter) t = e.getCenter();
              else if (e.getLatLng) t = e.getLatLng();
              else {
                if (!e.getBounds)
                  throw new Error("Unable to get source layer LatLng.");
                t = e.getBounds().getCenter();
              }
            return this.setLatLng(t), this._map && this.update(), !0;
          },
          _updateContent: function () {
            if (this._content) {
              var t = this._contentNode,
                e =
                  "function" == typeof this._content
                    ? this._content(this._source || this)
                    : this._content;
              if ("string" == typeof e) t.innerHTML = e;
              else {
                for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
                t.appendChild(e);
              }
              this.fire("contentupdate");
            }
          },
          _updatePosition: function () {
            if (this._map) {
              var t = this._map.latLngToLayerPoint(this._latlng),
                e = k(this.options.offset),
                i = this._getAnchor();
              this._zoomAnimated
                ? W(this._container, t.add(i))
                : (e = e.add(t).add(i));
              var n = (this._containerBottom = -e.y),
                s = (this._containerLeft =
                  -Math.round(this._containerWidth / 2) + e.x);
              (this._container.style.bottom = n + "px"),
                (this._container.style.left = s + "px");
            }
          },
          _getAnchor: function () {
            return [0, 0];
          },
        });
        I.include({
          _initOverlay: function (t, e, i, n) {
            var s = e;
            return (
              s instanceof t || (s = new t(n).setContent(e)),
              i && s.setLatLng(i),
              s
            );
          },
        }),
          at.include({
            _initOverlay: function (t, e, i, n) {
              var s = i;
              return (
                s instanceof t
                  ? (b(s, n), (s._source = this))
                  : (s = e && !n ? e : new t(n, this)).setContent(i),
                s
              );
            },
          });
        var _e = ut.extend({
          options: {
            pane: "popupPane",
            offset: [0, 7],
            maxWidth: 300,
            minWidth: 50,
            maxHeight: null,
            autoPan: !0,
            autoPanPaddingTopLeft: null,
            autoPanPaddingBottomRight: null,
            autoPanPadding: [5, 5],
            keepInView: !1,
            closeButton: !0,
            autoClose: !0,
            closeOnEscapeKey: !0,
            className: "",
          },
          openOn: function (t) {
            return (
              !(t = arguments.length ? t : this._source._map).hasLayer(this) &&
                t._popup &&
                t._popup.options.autoClose &&
                t.removeLayer(t._popup),
              (t._popup = this),
              ut.prototype.openOn.call(this, t)
            );
          },
          onAdd: function (t) {
            ut.prototype.onAdd.call(this, t),
              t.fire("popupopen", { popup: this }),
              this._source &&
                (this._source.fire("popupopen", { popup: this }, !0),
                this._source instanceof yt || this._source.on("preclick", Mt));
          },
          onRemove: function (t) {
            ut.prototype.onRemove.call(this, t),
              t.fire("popupclose", { popup: this }),
              this._source &&
                (this._source.fire("popupclose", { popup: this }, !0),
                this._source instanceof yt || this._source.off("preclick", Mt));
          },
          getEvents: function () {
            var t = ut.prototype.getEvents.call(this);
            return (
              (void 0 !== this.options.closeOnClick
                ? this.options.closeOnClick
                : this._map.options.closePopupOnClick) &&
                (t.preclick = this.close),
              this.options.keepInView && (t.moveend = this._adjustPan),
              t
            );
          },
          _initLayout: function () {
            var t = "leaflet-popup",
              e = (this._container = A(
                "div",
                t +
                  " " +
                  (this.options.className || "") +
                  " leaflet-zoom-animated"
              )),
              i = (this._wrapper = A("div", t + "-content-wrapper", e));
            if (
              ((this._contentNode = A("div", t + "-content", i)),
              Vt(e),
              He(this._contentNode),
              C(e, "contextmenu", Mt),
              (this._tipContainer = A("div", t + "-tip-container", e)),
              (this._tip = A("div", t + "-tip", this._tipContainer)),
              this.options.closeButton)
            ) {
              var n = (this._closeButton = A("a", t + "-close-button", e));
              n.setAttribute("role", "button"),
                n.setAttribute("aria-label", "Close popup"),
                (n.href = "#close"),
                (n.innerHTML = '<span aria-hidden="true">&#215;</span>'),
                C(
                  n,
                  "click",
                  function (s) {
                    j(s), this.close();
                  },
                  this
                );
            }
          },
          _updateLayout: function () {
            var t = this._contentNode,
              e = t.style;
            (e.width = ""), (e.whiteSpace = "nowrap");
            var i = t.offsetWidth;
            (i = Math.min(i, this.options.maxWidth)),
              (i = Math.max(i, this.options.minWidth)),
              (e.width = i + 1 + "px"),
              (e.whiteSpace = ""),
              (e.height = "");
            var s = this.options.maxHeight,
              a = "leaflet-popup-scrolled";
            s && t.offsetHeight > s
              ? ((e.height = s + "px"), D(t, a))
              : F(t, a),
              (this._containerWidth = this._container.offsetWidth);
          },
          _animateZoom: function (t) {
            var e = this._map._latLngToNewLayerPoint(
                this._latlng,
                t.zoom,
                t.center
              ),
              i = this._getAnchor();
            W(this._container, e.add(i));
          },
          _adjustPan: function () {
            if (this.options.autoPan) {
              if (
                (this._map._panAnim && this._map._panAnim.stop(),
                this._autopanning)
              )
                return void (this._autopanning = !1);
              var t = this._map,
                e = parseInt(Ht(this._container, "marginBottom"), 10) || 0,
                i = this._container.offsetHeight + e,
                n = this._containerWidth,
                s = new E(this._containerLeft, -i - this._containerBottom);
              s._add(Pt(this._container));
              var a = t.layerPointToContainerPoint(s),
                l = k(this.options.autoPanPadding),
                c = k(this.options.autoPanPaddingTopLeft || l),
                _ = k(this.options.autoPanPaddingBottomRight || l),
                m = t.getSize(),
                y = 0,
                T = 0;
              a.x + n + _.x > m.x && (y = a.x + n - m.x + _.x),
                a.x - y - c.x < 0 && (y = a.x - c.x),
                a.y + i + _.y > m.y && (T = a.y + i - m.y + _.y),
                a.y - T - c.y < 0 && (T = a.y - c.y),
                (y || T) &&
                  (this.options.keepInView && (this._autopanning = !0),
                  t.fire("autopanstart").panBy([y, T]));
            }
          },
          _getAnchor: function () {
            return k(
              this._source && this._source._getPopupAnchor
                ? this._source._getPopupAnchor()
                : [0, 0]
            );
          },
        });
        I.mergeOptions({ closePopupOnClick: !0 }),
          I.include({
            openPopup: function (t, e, i) {
              return this._initOverlay(_e, t, e, i).openOn(this), this;
            },
            closePopup: function (t) {
              return (
                (t = arguments.length ? t : this._popup) && t.close(), this
              );
            },
          }),
          at.include({
            bindPopup: function (t, e) {
              return (
                (this._popup = this._initOverlay(_e, this._popup, t, e)),
                this._popupHandlersAdded ||
                  (this.on({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup,
                  }),
                  (this._popupHandlersAdded = !0)),
                this
              );
            },
            unbindPopup: function () {
              return (
                this._popup &&
                  (this.off({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup,
                  }),
                  (this._popupHandlersAdded = !1),
                  (this._popup = null)),
                this
              );
            },
            openPopup: function (t) {
              return (
                this._popup &&
                  (this instanceof ft || (this._popup._source = this),
                  this._popup._prepareOpen(t || this._latlng) &&
                    this._popup.openOn(this._map)),
                this
              );
            },
            closePopup: function () {
              return this._popup && this._popup.close(), this;
            },
            togglePopup: function () {
              return this._popup && this._popup.toggle(this), this;
            },
            isPopupOpen: function () {
              return !!this._popup && this._popup.isOpen();
            },
            setPopupContent: function (t) {
              return this._popup && this._popup.setContent(t), this;
            },
            getPopup: function () {
              return this._popup;
            },
            _openPopup: function (t) {
              if (this._popup && this._map) {
                Tt(t);
                var e = t.layer || t.target;
                if (this._popup._source === e && !(e instanceof yt))
                  return void (this._map.hasLayer(this._popup)
                    ? this.closePopup()
                    : this.openPopup(t.latlng));
                (this._popup._source = e), this.openPopup(t.latlng);
              }
            },
            _movePopup: function (t) {
              this._popup.setLatLng(t.latlng);
            },
            _onKeyPress: function (t) {
              13 === t.originalEvent.keyCode && this._openPopup(t);
            },
          });
        var fe = ut.extend({
          options: {
            pane: "tooltipPane",
            offset: [0, 0],
            direction: "auto",
            permanent: !1,
            sticky: !1,
            opacity: 0.9,
          },
          onAdd: function (t) {
            ut.prototype.onAdd.call(this, t),
              this.setOpacity(this.options.opacity),
              t.fire("tooltipopen", { tooltip: this }),
              this._source &&
                (this.addEventParent(this._source),
                this._source.fire("tooltipopen", { tooltip: this }, !0));
          },
          onRemove: function (t) {
            ut.prototype.onRemove.call(this, t),
              t.fire("tooltipclose", { tooltip: this }),
              this._source &&
                (this.removeEventParent(this._source),
                this._source.fire("tooltipclose", { tooltip: this }, !0));
          },
          getEvents: function () {
            var t = ut.prototype.getEvents.call(this);
            return this.options.permanent || (t.preclick = this.close), t;
          },
          _initLayout: function () {
            (this._contentNode = this._container =
              A(
                "div",
                "leaflet-tooltip " +
                  (this.options.className || "") +
                  " leaflet-zoom-" +
                  (this._zoomAnimated ? "animated" : "hide")
              )),
              this._container.setAttribute("role", "tooltip"),
              this._container.setAttribute("id", "leaflet-tooltip-" + f(this));
          },
          _updateLayout: function () {},
          _adjustPan: function () {},
          _setPosition: function (t) {
            var e,
              i,
              n = this._map,
              s = this._container,
              a = n.latLngToContainerPoint(n.getCenter()),
              l = n.layerPointToContainerPoint(t),
              c = this.options.direction,
              _ = s.offsetWidth,
              m = s.offsetHeight,
              y = k(this.options.offset),
              T = this._getAnchor();
            "top" === c
              ? ((e = _ / 2), (i = m))
              : "bottom" === c
              ? ((e = _ / 2), (i = 0))
              : "center" === c
              ? ((e = _ / 2), (i = m / 2))
              : "right" === c
              ? ((e = 0), (i = m / 2))
              : "left" === c
              ? ((e = _), (i = m / 2))
              : l.x < a.x
              ? ((c = "right"), (e = 0), (i = m / 2))
              : ((c = "left"), (e = _ + 2 * (y.x + T.x)), (i = m / 2)),
              (t = t.subtract(k(e, i, !0)).add(y).add(T)),
              F(s, "leaflet-tooltip-right"),
              F(s, "leaflet-tooltip-left"),
              F(s, "leaflet-tooltip-top"),
              F(s, "leaflet-tooltip-bottom"),
              D(s, "leaflet-tooltip-" + c),
              W(s, t);
          },
          _updatePosition: function () {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t);
          },
          setOpacity: function (t) {
            (this.options.opacity = t),
              this._container && et(this._container, t);
          },
          _animateZoom: function (t) {
            var e = this._map._latLngToNewLayerPoint(
              this._latlng,
              t.zoom,
              t.center
            );
            this._setPosition(e);
          },
          _getAnchor: function () {
            return k(
              this._source &&
                this._source._getTooltipAnchor &&
                !this.options.sticky
                ? this._source._getTooltipAnchor()
                : [0, 0]
            );
          },
        });
        I.include({
          openTooltip: function (t, e, i) {
            return this._initOverlay(fe, t, e, i).openOn(this), this;
          },
          closeTooltip: function (t) {
            return t.close(), this;
          },
        }),
          at.include({
            bindTooltip: function (t, e) {
              return (
                this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
                (this._tooltip = this._initOverlay(fe, this._tooltip, t, e)),
                this._initTooltipInteractions(),
                this._tooltip.options.permanent &&
                  this._map &&
                  this._map.hasLayer(this) &&
                  this.openTooltip(),
                this
              );
            },
            unbindTooltip: function () {
              return (
                this._tooltip &&
                  (this._initTooltipInteractions(!0),
                  this.closeTooltip(),
                  (this._tooltip = null)),
                this
              );
            },
            _initTooltipInteractions: function (t) {
              if (t || !this._tooltipHandlersAdded) {
                var e = t ? "off" : "on",
                  i = { remove: this.closeTooltip, move: this._moveTooltip };
                this._tooltip.options.permanent
                  ? (i.add = this._openTooltip)
                  : ((i.mouseover = this._openTooltip),
                    (i.mouseout = this.closeTooltip),
                    (i.click = this._openTooltip),
                    this._map
                      ? this._addFocusListeners()
                      : (i.add = this._addFocusListeners)),
                  this._tooltip.options.sticky &&
                    (i.mousemove = this._moveTooltip),
                  this[e](i),
                  (this._tooltipHandlersAdded = !t);
              }
            },
            openTooltip: function (t) {
              return (
                this._tooltip &&
                  (this instanceof ft || (this._tooltip._source = this),
                  this._tooltip._prepareOpen(t) &&
                    (this._tooltip.openOn(this._map),
                    this.getElement
                      ? this._setAriaDescribedByOnLayer(this)
                      : this.eachLayer &&
                        this.eachLayer(this._setAriaDescribedByOnLayer, this))),
                this
              );
            },
            closeTooltip: function () {
              if (this._tooltip) return this._tooltip.close();
            },
            toggleTooltip: function () {
              return this._tooltip && this._tooltip.toggle(this), this;
            },
            isTooltipOpen: function () {
              return this._tooltip.isOpen();
            },
            setTooltipContent: function (t) {
              return this._tooltip && this._tooltip.setContent(t), this;
            },
            getTooltip: function () {
              return this._tooltip;
            },
            _addFocusListeners: function () {
              this.getElement
                ? this._addFocusListenersOnLayer(this)
                : this.eachLayer &&
                  this.eachLayer(this._addFocusListenersOnLayer, this);
            },
            _addFocusListenersOnLayer: function (t) {
              var e = t.getElement();
              e &&
                (C(
                  e,
                  "focus",
                  function () {
                    (this._tooltip._source = t), this.openTooltip();
                  },
                  this
                ),
                C(e, "blur", this.closeTooltip, this));
            },
            _setAriaDescribedByOnLayer: function (t) {
              var e = t.getElement();
              e &&
                e.setAttribute("aria-describedby", this._tooltip._container.id);
            },
            _openTooltip: function (t) {
              !this._tooltip ||
                !this._map ||
                (this._map.dragging && this._map.dragging.moving()) ||
                ((this._tooltip._source = t.layer || t.target),
                this.openTooltip(
                  this._tooltip.options.sticky ? t.latlng : void 0
                ));
            },
            _moveTooltip: function (t) {
              var i,
                n,
                e = t.latlng;
              this._tooltip.options.sticky &&
                t.originalEvent &&
                ((i = this._map.mouseEventToContainerPoint(t.originalEvent)),
                (n = this._map.containerPointToLayerPoint(i)),
                (e = this._map.layerPointToLatLng(n))),
                this._tooltip.setLatLng(e);
            },
          });
        var $i = zt.extend({
          options: {
            iconSize: [12, 12],
            html: !1,
            bgPos: null,
            className: "leaflet-div-icon",
          },
          createIcon: function (t) {
            var e =
                t && "DIV" === t.tagName ? t : document.createElement("div"),
              i = this.options;
            if (
              (i.html instanceof Element
                ? (te(e), e.appendChild(i.html))
                : (e.innerHTML = !1 !== i.html ? i.html : ""),
              i.bgPos)
            ) {
              var n = k(i.bgPos);
              e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
            }
            return this._setIconStyles(e, "icon"), e;
          },
          createShadow: function () {
            return null;
          },
        });
        zt.Default = jt;
        var qt = at.extend({
          options: {
            tileSize: 256,
            opacity: 1,
            updateWhenIdle: x.mobile,
            updateWhenZooming: !0,
            updateInterval: 200,
            zIndex: 1,
            bounds: null,
            minZoom: 0,
            maxZoom: void 0,
            maxNativeZoom: void 0,
            minNativeZoom: void 0,
            noWrap: !1,
            pane: "tilePane",
            className: "",
            keepBuffer: 2,
          },
          initialize: function (t) {
            b(this, t);
          },
          onAdd: function () {
            this._initContainer(),
              (this._levels = {}),
              (this._tiles = {}),
              this._resetView();
          },
          beforeAdd: function (t) {
            t._addZoomLimit(this);
          },
          onRemove: function (t) {
            this._removeAllTiles(),
              H(this._container),
              t._removeZoomLimit(this),
              (this._container = null),
              (this._tileZoom = void 0);
          },
          bringToFront: function () {
            return (
              this._map && (Dt(this._container), this._setAutoZIndex(Math.max)),
              this
            );
          },
          bringToBack: function () {
            return (
              this._map && (St(this._container), this._setAutoZIndex(Math.min)),
              this
            );
          },
          getContainer: function () {
            return this._container;
          },
          setOpacity: function (t) {
            return (this.options.opacity = t), this._updateOpacity(), this;
          },
          setZIndex: function (t) {
            return (this.options.zIndex = t), this._updateZIndex(), this;
          },
          isLoading: function () {
            return this._loading;
          },
          redraw: function () {
            if (this._map) {
              this._removeAllTiles();
              var t = this._clampZoom(this._map.getZoom());
              t !== this._tileZoom &&
                ((this._tileZoom = t), this._updateLevels()),
                this._update();
            }
            return this;
          },
          getEvents: function () {
            var t = {
              viewprereset: this._invalidateAll,
              viewreset: this._resetView,
              zoom: this._resetView,
              moveend: this._onMoveEnd,
            };
            return (
              this.options.updateWhenIdle ||
                (this._onMove ||
                  (this._onMove = g(
                    this._onMoveEnd,
                    this.options.updateInterval,
                    this
                  )),
                (t.move = this._onMove)),
              this._zoomAnimated && (t.zoomanim = this._animateZoom),
              t
            );
          },
          createTile: function () {
            return document.createElement("div");
          },
          getTileSize: function () {
            var t = this.options.tileSize;
            return t instanceof E ? t : new E(t, t);
          },
          _updateZIndex: function () {
            this._container &&
              null != this.options.zIndex &&
              (this._container.style.zIndex = this.options.zIndex);
          },
          _setAutoZIndex: function (t) {
            for (
              var a,
                e = this.getPane().children,
                i = -t(-1 / 0, 1 / 0),
                n = 0,
                s = e.length;
              n < s;
              n++
            )
              (a = e[n].style.zIndex),
                e[n] !== this._container && a && (i = t(i, +a));
            isFinite(i) &&
              ((this.options.zIndex = i + t(-1, 1)), this._updateZIndex());
          },
          _updateOpacity: function () {
            if (this._map && !x.ielt9) {
              et(this._container, this.options.opacity);
              var t = +new Date(),
                e = !1,
                i = !1;
              for (var n in this._tiles) {
                var s = this._tiles[n];
                if (s.current && s.loaded) {
                  var a = Math.min(1, (t - s.loaded) / 200);
                  et(s.el, a),
                    a < 1
                      ? (e = !0)
                      : (s.active ? (i = !0) : this._onOpaqueTile(s),
                        (s.active = !0));
                }
              }
              i && !this._noPrune && this._pruneTiles(),
                e &&
                  (tt(this._fadeFrame),
                  (this._fadeFrame = X(this._updateOpacity, this)));
            }
          },
          _onOpaqueTile: w,
          _initContainer: function () {
            this._container ||
              ((this._container = A(
                "div",
                "leaflet-layer " + (this.options.className || "")
              )),
              this._updateZIndex(),
              this.options.opacity < 1 && this._updateOpacity(),
              this.getPane().appendChild(this._container));
          },
          _updateLevels: function () {
            var t = this._tileZoom,
              e = this.options.maxZoom;
            if (void 0 !== t) {
              for (var i in this._levels)
                (i = Number(i)),
                  this._levels[i].el.children.length || i === t
                    ? ((this._levels[i].el.style.zIndex = e - Math.abs(t - i)),
                      this._onUpdateLevel(i))
                    : (H(this._levels[i].el),
                      this._removeTilesAtZoom(i),
                      this._onRemoveLevel(i),
                      delete this._levels[i]);
              var n = this._levels[t],
                s = this._map;
              return (
                n ||
                  (((n = this._levels[t] = {}).el = A(
                    "div",
                    "leaflet-tile-container leaflet-zoom-animated",
                    this._container
                  )),
                  (n.el.style.zIndex = e),
                  (n.origin = s
                    .project(s.unproject(s.getPixelOrigin()), t)
                    .round()),
                  (n.zoom = t),
                  this._setZoomTransform(n, s.getCenter(), s.getZoom()),
                  this._onCreateLevel(n)),
                (this._level = n),
                n
              );
            }
          },
          _onUpdateLevel: w,
          _onRemoveLevel: w,
          _onCreateLevel: w,
          _pruneTiles: function () {
            if (this._map) {
              var t,
                e,
                i = this._map.getZoom();
              if (i > this.options.maxZoom || i < this.options.minZoom)
                return void this._removeAllTiles();
              for (t in this._tiles) (e = this._tiles[t]).retain = e.current;
              for (t in this._tiles)
                if ((e = this._tiles[t]).current && !e.active) {
                  var n = e.coords;
                  this._retainParent(n.x, n.y, n.z, n.z - 5) ||
                    this._retainChildren(n.x, n.y, n.z, n.z + 2);
                }
              for (t in this._tiles)
                this._tiles[t].retain || this._removeTile(t);
            }
          },
          _removeTilesAtZoom: function (t) {
            for (var e in this._tiles)
              this._tiles[e].coords.z === t && this._removeTile(e);
          },
          _removeAllTiles: function () {
            for (var t in this._tiles) this._removeTile(t);
          },
          _invalidateAll: function () {
            for (var t in this._levels)
              H(this._levels[t].el),
                this._onRemoveLevel(Number(t)),
                delete this._levels[t];
            this._removeAllTiles(), (this._tileZoom = void 0);
          },
          _retainParent: function (t, e, i, n) {
            var s = Math.floor(t / 2),
              a = Math.floor(e / 2),
              l = i - 1,
              c = new E(+s, +a);
            c.z = +l;
            var _ = this._tileCoordsToKey(c),
              m = this._tiles[_];
            return m && m.active
              ? ((m.retain = !0), !0)
              : (m && m.loaded && (m.retain = !0),
                l > n && this._retainParent(s, a, l, n));
          },
          _retainChildren: function (t, e, i, n) {
            for (var s = 2 * t; s < 2 * t + 2; s++)
              for (var a = 2 * e; a < 2 * e + 2; a++) {
                var l = new E(s, a);
                l.z = i + 1;
                var c = this._tileCoordsToKey(l),
                  _ = this._tiles[c];
                _ && _.active
                  ? (_.retain = !0)
                  : (_ && _.loaded && (_.retain = !0),
                    i + 1 < n && this._retainChildren(s, a, i + 1, n));
              }
          },
          _resetView: function (t) {
            var e = t && (t.pinch || t.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
          },
          _animateZoom: function (t) {
            this._setView(t.center, t.zoom, !0, t.noUpdate);
          },
          _clampZoom: function (t) {
            var e = this.options;
            return void 0 !== e.minNativeZoom && t < e.minNativeZoom
              ? e.minNativeZoom
              : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t
              ? e.maxNativeZoom
              : t;
          },
          _setView: function (t, e, i, n) {
            var s = Math.round(e);
            (s =
              (void 0 !== this.options.maxZoom && s > this.options.maxZoom) ||
              (void 0 !== this.options.minZoom && s < this.options.minZoom)
                ? void 0
                : this._clampZoom(s)),
              (!n ||
                (this.options.updateWhenZooming && s !== this._tileZoom)) &&
                ((this._tileZoom = s),
                this._abortLoading && this._abortLoading(),
                this._updateLevels(),
                this._resetGrid(),
                void 0 !== s && this._update(t),
                i || this._pruneTiles(),
                (this._noPrune = !!i)),
              this._setZoomTransforms(t, e);
          },
          _setZoomTransforms: function (t, e) {
            for (var i in this._levels)
              this._setZoomTransform(this._levels[i], t, e);
          },
          _setZoomTransform: function (t, e, i) {
            var n = this._map.getZoomScale(i, t.zoom),
              s = t.origin
                .multiplyBy(n)
                .subtract(this._map._getNewPixelOrigin(e, i))
                .round();
            x.any3d ? bt(t.el, s, n) : W(t.el, s);
          },
          _resetGrid: function () {
            var t = this._map,
              e = t.options.crs,
              i = (this._tileSize = this.getTileSize()),
              n = this._tileZoom,
              s = this._map.getPixelWorldBounds(this._tileZoom);
            s && (this._globalTileRange = this._pxBoundsToTileRange(s)),
              (this._wrapX = e.wrapLng &&
                !this.options.noWrap && [
                  Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
                  Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y),
                ]),
              (this._wrapY = e.wrapLat &&
                !this.options.noWrap && [
                  Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
                  Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y),
                ]);
          },
          _onMoveEnd: function () {
            !this._map || this._map._animatingZoom || this._update();
          },
          _getTiledPixelBounds: function (t) {
            var e = this._map,
              i = e._animatingZoom
                ? Math.max(e._animateToZoom, e.getZoom())
                : e.getZoom(),
              n = e.getZoomScale(i, this._tileZoom),
              s = e.project(t, this._tileZoom).floor(),
              a = e.getSize().divideBy(2 * n);
            return new U(s.subtract(a), s.add(a));
          },
          _update: function (t) {
            var e = this._map;
            if (e) {
              var i = this._clampZoom(e.getZoom());
              if (
                (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom)
              ) {
                var n = this._getTiledPixelBounds(t),
                  s = this._pxBoundsToTileRange(n),
                  a = s.getCenter(),
                  l = [],
                  c = this.options.keepBuffer,
                  _ = new U(
                    s.getBottomLeft().subtract([c, -c]),
                    s.getTopRight().add([c, -c])
                  );
                if (
                  !(
                    isFinite(s.min.x) &&
                    isFinite(s.min.y) &&
                    isFinite(s.max.x) &&
                    isFinite(s.max.y)
                  )
                )
                  throw new Error(
                    "Attempted to load an infinite number of tiles"
                  );
                for (var m in this._tiles) {
                  var y = this._tiles[m].coords;
                  (y.z !== this._tileZoom || !_.contains(new E(y.x, y.y))) &&
                    (this._tiles[m].current = !1);
                }
                if (Math.abs(i - this._tileZoom) > 1)
                  return void this._setView(t, i);
                for (var T = s.min.y; T <= s.max.y; T++)
                  for (var z = s.min.x; z <= s.max.x; z++) {
                    var nt = new E(z, T);
                    if (((nt.z = this._tileZoom), this._isValidTile(nt))) {
                      var Et = this._tiles[this._tileCoordsToKey(nt)];
                      Et ? (Et.current = !0) : l.push(nt);
                    }
                  }
                if (
                  (l.sort(function (wt, Je) {
                    return wt.distanceTo(a) - Je.distanceTo(a);
                  }),
                  0 !== l.length)
                ) {
                  this._loading || ((this._loading = !0), this.fire("loading"));
                  var me = document.createDocumentFragment();
                  for (z = 0; z < l.length; z++) this._addTile(l[z], me);
                  this._level.el.appendChild(me);
                }
              }
            }
          },
          _isValidTile: function (t) {
            var e = this._map.options.crs;
            if (!e.infinite) {
              var i = this._globalTileRange;
              if (
                (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x)) ||
                (!e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
              )
                return !1;
            }
            if (!this.options.bounds) return !0;
            var n = this._tileCoordsToBounds(t);
            return K(this.options.bounds).overlaps(n);
          },
          _keyToBounds: function (t) {
            return this._tileCoordsToBounds(this._keyToTileCoords(t));
          },
          _tileCoordsToNwSe: function (t) {
            var e = this._map,
              i = this.getTileSize(),
              n = t.scaleBy(i),
              s = n.add(i);
            return [e.unproject(n, t.z), e.unproject(s, t.z)];
          },
          _tileCoordsToBounds: function (t) {
            var e = this._tileCoordsToNwSe(t),
              i = new J(e[0], e[1]);
            return (
              this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i
            );
          },
          _tileCoordsToKey: function (t) {
            return t.x + ":" + t.y + ":" + t.z;
          },
          _keyToTileCoords: function (t) {
            var e = t.split(":"),
              i = new E(+e[0], +e[1]);
            return (i.z = +e[2]), i;
          },
          _removeTile: function (t) {
            var e = this._tiles[t];
            e &&
              (H(e.el),
              delete this._tiles[t],
              this.fire("tileunload", {
                tile: e.el,
                coords: this._keyToTileCoords(t),
              }));
          },
          _initTile: function (t) {
            D(t, "leaflet-tile");
            var e = this.getTileSize();
            (t.style.width = e.x + "px"),
              (t.style.height = e.y + "px"),
              (t.onselectstart = w),
              (t.onmousemove = w),
              x.ielt9 &&
                this.options.opacity < 1 &&
                et(t, this.options.opacity);
          },
          _addTile: function (t, e) {
            var i = this._getTilePos(t),
              n = this._tileCoordsToKey(t),
              s = this.createTile(
                this._wrapCoords(t),
                h(this._tileReady, this, t)
              );
            this._initTile(s),
              this.createTile.length < 2 &&
                X(h(this._tileReady, this, t, null, s)),
              W(s, i),
              (this._tiles[n] = { el: s, coords: t, current: !0 }),
              e.appendChild(s),
              this.fire("tileloadstart", { tile: s, coords: t });
          },
          _tileReady: function (t, e, i) {
            e && this.fire("tileerror", { error: e, tile: i, coords: t });
            var n = this._tileCoordsToKey(t);
            (i = this._tiles[n]) &&
              ((i.loaded = +new Date()),
              this._map._fadeAnimated
                ? (et(i.el, 0),
                  tt(this._fadeFrame),
                  (this._fadeFrame = X(this._updateOpacity, this)))
                : ((i.active = !0), this._pruneTiles()),
              e ||
                (D(i.el, "leaflet-tile-loaded"),
                this.fire("tileload", { tile: i.el, coords: t })),
              this._noTilesToLoad() &&
                ((this._loading = !1),
                this.fire("load"),
                x.ielt9 || !this._map._fadeAnimated
                  ? X(this._pruneTiles, this)
                  : setTimeout(h(this._pruneTiles, this), 250)));
          },
          _getTilePos: function (t) {
            return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
          },
          _wrapCoords: function (t) {
            var e = new E(
              this._wrapX ? v(t.x, this._wrapX) : t.x,
              this._wrapY ? v(t.y, this._wrapY) : t.y
            );
            return (e.z = t.z), e;
          },
          _pxBoundsToTileRange: function (t) {
            var e = this.getTileSize();
            return new U(
              t.min.unscaleBy(e).floor(),
              t.max.unscaleBy(e).ceil().subtract([1, 1])
            );
          },
          _noTilesToLoad: function () {
            for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
            return !0;
          },
        });
        var Zt = qt.extend({
          options: {
            minZoom: 0,
            maxZoom: 18,
            subdomains: "abc",
            errorTileUrl: "",
            zoomOffset: 0,
            tms: !1,
            zoomReverse: !1,
            detectRetina: !1,
            crossOrigin: !1,
            referrerPolicy: !1,
          },
          initialize: function (t, e) {
            (this._url = t),
              (e = b(this, e)).detectRetina && x.retina && e.maxZoom > 0
                ? ((e.tileSize = Math.floor(e.tileSize / 2)),
                  e.zoomReverse
                    ? (e.zoomOffset--,
                      (e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)))
                    : (e.zoomOffset++,
                      (e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1))),
                  (e.minZoom = Math.max(0, e.minZoom)))
                : e.zoomReverse
                ? (e.minZoom = Math.min(e.maxZoom, e.minZoom))
                : (e.maxZoom = Math.max(e.minZoom, e.maxZoom)),
              "string" == typeof e.subdomains &&
                (e.subdomains = e.subdomains.split("")),
              this.on("tileunload", this._onTileRemove);
          },
          setUrl: function (t, e) {
            return (
              this._url === t && void 0 === e && (e = !0),
              (this._url = t),
              e || this.redraw(),
              this
            );
          },
          createTile: function (t, e) {
            var i = document.createElement("img");
            return (
              C(i, "load", h(this._tileOnLoad, this, e, i)),
              C(i, "error", h(this._tileOnError, this, e, i)),
              (this.options.crossOrigin || "" === this.options.crossOrigin) &&
                (i.crossOrigin =
                  !0 === this.options.crossOrigin
                    ? ""
                    : this.options.crossOrigin),
              "string" == typeof this.options.referrerPolicy &&
                (i.referrerPolicy = this.options.referrerPolicy),
              (i.alt = ""),
              (i.src = this.getTileUrl(t)),
              i
            );
          },
          getTileUrl: function (t) {
            var e = {
              r: x.retina ? "@2x" : "",
              s: this._getSubdomain(t),
              x: t.x,
              y: t.y,
              z: this._getZoomForUrl(),
            };
            if (this._map && !this._map.options.crs.infinite) {
              var i = this._globalTileRange.max.y - t.y;
              this.options.tms && (e.y = i), (e["-y"] = i);
            }
            return q(this._url, o(e, this.options));
          },
          _tileOnLoad: function (t, e) {
            x.ielt9 ? setTimeout(h(t, this, null, e), 0) : t(null, e);
          },
          _tileOnError: function (t, e, i) {
            var n = this.options.errorTileUrl;
            n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
          },
          _onTileRemove: function (t) {
            t.tile.onload = null;
          },
          _getZoomForUrl: function () {
            var t = this._tileZoom;
            return (
              this.options.zoomReverse && (t = this.options.maxZoom - t),
              t + this.options.zoomOffset
            );
          },
          _getSubdomain: function (t) {
            var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[e];
          },
          _abortLoading: function () {
            var t, e;
            for (t in this._tiles)
              if (
                this._tiles[t].coords.z !== this._tileZoom &&
                (((e = this._tiles[t].el).onload = w),
                (e.onerror = w),
                !e.complete)
              ) {
                e.src = st;
                var i = this._tiles[t].coords;
                H(e),
                  delete this._tiles[t],
                  this.fire("tileabort", { tile: e, coords: i });
              }
          },
          _removeTile: function (t) {
            var e = this._tiles[t];
            if (e)
              return (
                e.el.setAttribute("src", st),
                qt.prototype._removeTile.call(this, t)
              );
          },
          _tileReady: function (t, e, i) {
            if (this._map && (!i || i.getAttribute("src") !== st))
              return qt.prototype._tileReady.call(this, t, e, i);
          },
        });
        function Ji(t, e) {
          return new Zt(t, e);
        }
        var Qi = Zt.extend({
          defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1,
            version: "1.1.1",
          },
          options: { crs: null, uppercase: !1 },
          initialize: function (t, e) {
            this._url = t;
            var i = o({}, this.defaultWmsParams);
            for (var n in e) n in this.options || (i[n] = e[n]);
            var s = (e = b(this, e)).detectRetina && x.retina ? 2 : 1,
              a = this.getTileSize();
            (i.width = a.x * s), (i.height = a.y * s), (this.wmsParams = i);
          },
          onAdd: function (t) {
            (this._crs = this.options.crs || t.options.crs),
              (this._wmsVersion = parseFloat(this.wmsParams.version)),
              (this.wmsParams[this._wmsVersion >= 1.3 ? "crs" : "srs"] =
                this._crs.code),
              Zt.prototype.onAdd.call(this, t);
          },
          getTileUrl: function (t) {
            var e = this._tileCoordsToNwSe(t),
              i = this._crs,
              n = $(i.project(e[0]), i.project(e[1])),
              s = n.min,
              a = n.max,
              l = (
                this._wmsVersion >= 1.3 && this._crs === Vi
                  ? [s.y, s.x, a.y, a.x]
                  : [s.x, s.y, a.x, a.y]
              ).join(","),
              c = Zt.prototype.getTileUrl.call(this, t);
            return (
              c +
              P(this.wmsParams, c, this.options.uppercase) +
              (this.options.uppercase ? "&BBOX=" : "&bbox=") +
              l
            );
          },
          setParams: function (t, e) {
            return o(this.wmsParams, t), e || this.redraw(), this;
          },
        });
        (Zt.WMS = Qi),
          (Ji.wms = function Co(t, e) {
            return new Qi(t, e);
          });
        var gt = at.extend({
            options: { padding: 0.1 },
            initialize: function (t) {
              b(this, t), f(this), (this._layers = this._layers || {});
            },
            onAdd: function () {
              this._container ||
                (this._initContainer(),
                this._zoomAnimated &&
                  D(this._container, "leaflet-zoom-animated")),
                this.getPane().appendChild(this._container),
                this._update(),
                this.on("update", this._updatePaths, this);
            },
            onRemove: function () {
              this.off("update", this._updatePaths, this),
                this._destroyContainer();
            },
            getEvents: function () {
              var t = {
                viewreset: this._reset,
                zoom: this._onZoom,
                moveend: this._update,
                zoomend: this._onZoomEnd,
              };
              return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
            },
            _onAnimZoom: function (t) {
              this._updateTransform(t.center, t.zoom);
            },
            _onZoom: function () {
              this._updateTransform(this._map.getCenter(), this._map.getZoom());
            },
            _updateTransform: function (t, e) {
              var i = this._map.getZoomScale(e, this._zoom),
                n = this._map.getSize().multiplyBy(0.5 + this.options.padding),
                s = this._map.project(this._center, e),
                a = n
                  .multiplyBy(-i)
                  .add(s)
                  .subtract(this._map._getNewPixelOrigin(t, e));
              x.any3d ? bt(this._container, a, i) : W(this._container, a);
            },
            _reset: function () {
              for (var t in (this._update(),
              this._updateTransform(this._center, this._zoom),
              this._layers))
                this._layers[t]._reset();
            },
            _onZoomEnd: function () {
              for (var t in this._layers) this._layers[t]._project();
            },
            _updatePaths: function () {
              for (var t in this._layers) this._layers[t]._update();
            },
            _update: function () {
              var t = this.options.padding,
                e = this._map.getSize(),
                i = this._map
                  .containerPointToLayerPoint(e.multiplyBy(-t))
                  .round();
              (this._bounds = new U(i, i.add(e.multiplyBy(1 + 2 * t)).round())),
                (this._center = this._map.getCenter()),
                (this._zoom = this._map.getZoom());
            },
          }),
          tn = gt.extend({
            options: { tolerance: 0 },
            getEvents: function () {
              var t = gt.prototype.getEvents.call(this);
              return (t.viewprereset = this._onViewPreReset), t;
            },
            _onViewPreReset: function () {
              this._postponeUpdatePaths = !0;
            },
            onAdd: function () {
              gt.prototype.onAdd.call(this), this._draw();
            },
            _initContainer: function () {
              var t = (this._container = document.createElement("canvas"));
              C(t, "mousemove", this._onMouseMove, this),
                C(
                  t,
                  "click dblclick mousedown mouseup contextmenu",
                  this._onClick,
                  this
                ),
                C(t, "mouseout", this._handleMouseOut, this),
                (t._leaflet_disable_events = !0),
                (this._ctx = t.getContext("2d"));
            },
            _destroyContainer: function () {
              tt(this._redrawRequest),
                delete this._ctx,
                H(this._container),
                N(this._container),
                delete this._container;
            },
            _updatePaths: function () {
              if (!this._postponeUpdatePaths) {
                for (var e in ((this._redrawBounds = null), this._layers))
                  this._layers[e]._update();
                this._redraw();
              }
            },
            _update: function () {
              if (!this._map._animatingZoom || !this._bounds) {
                gt.prototype._update.call(this);
                var t = this._bounds,
                  e = this._container,
                  i = t.getSize(),
                  n = x.retina ? 2 : 1;
                W(e, t.min),
                  (e.width = n * i.x),
                  (e.height = n * i.y),
                  (e.style.width = i.x + "px"),
                  (e.style.height = i.y + "px"),
                  x.retina && this._ctx.scale(2, 2),
                  this._ctx.translate(-t.min.x, -t.min.y),
                  this.fire("update");
              }
            },
            _reset: function () {
              gt.prototype._reset.call(this),
                this._postponeUpdatePaths &&
                  ((this._postponeUpdatePaths = !1), this._updatePaths());
            },
            _initPath: function (t) {
              this._updateDashArray(t), (this._layers[f(t)] = t);
              var e = (t._order = {
                layer: t,
                prev: this._drawLast,
                next: null,
              });
              this._drawLast && (this._drawLast.next = e),
                (this._drawLast = e),
                (this._drawFirst = this._drawFirst || this._drawLast);
            },
            _addPath: function (t) {
              this._requestRedraw(t);
            },
            _removePath: function (t) {
              var e = t._order,
                i = e.next,
                n = e.prev;
              i ? (i.prev = n) : (this._drawLast = n),
                n ? (n.next = i) : (this._drawFirst = i),
                delete t._order,
                delete this._layers[f(t)],
                this._requestRedraw(t);
            },
            _updatePath: function (t) {
              this._extendRedrawBounds(t),
                t._project(),
                t._update(),
                this._requestRedraw(t);
            },
            _updateStyle: function (t) {
              this._updateDashArray(t), this._requestRedraw(t);
            },
            _updateDashArray: function (t) {
              if ("string" == typeof t.options.dashArray) {
                var n,
                  s,
                  e = t.options.dashArray.split(/[, ]+/),
                  i = [];
                for (s = 0; s < e.length; s++) {
                  if (((n = Number(e[s])), isNaN(n))) return;
                  i.push(n);
                }
                t.options._dashArray = i;
              } else t.options._dashArray = t.options.dashArray;
            },
            _requestRedraw: function (t) {
              this._map &&
                (this._extendRedrawBounds(t),
                (this._redrawRequest =
                  this._redrawRequest || X(this._redraw, this)));
            },
            _extendRedrawBounds: function (t) {
              if (t._pxBounds) {
                var e = (t.options.weight || 0) + 1;
                (this._redrawBounds = this._redrawBounds || new U()),
                  this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
                  this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
              }
            },
            _redraw: function () {
              (this._redrawRequest = null),
                this._redrawBounds &&
                  (this._redrawBounds.min._floor(),
                  this._redrawBounds.max._ceil()),
                this._clear(),
                this._draw(),
                (this._redrawBounds = null);
            },
            _clear: function () {
              var t = this._redrawBounds;
              if (t) {
                var e = t.getSize();
                this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
              } else
                this._ctx.save(),
                  this._ctx.setTransform(1, 0, 0, 1, 0, 0),
                  this._ctx.clearRect(
                    0,
                    0,
                    this._container.width,
                    this._container.height
                  ),
                  this._ctx.restore();
            },
            _draw: function () {
              var t,
                e = this._redrawBounds;
              if ((this._ctx.save(), e)) {
                var i = e.getSize();
                this._ctx.beginPath(),
                  this._ctx.rect(e.min.x, e.min.y, i.x, i.y),
                  this._ctx.clip();
              }
              this._drawing = !0;
              for (var n = this._drawFirst; n; n = n.next)
                (t = n.layer),
                  (!e || (t._pxBounds && t._pxBounds.intersects(e))) &&
                    t._updatePath();
              (this._drawing = !1), this._ctx.restore();
            },
            _updatePoly: function (t, e) {
              if (this._drawing) {
                var i,
                  n,
                  s,
                  a,
                  l = t._parts,
                  c = l.length,
                  _ = this._ctx;
                if (c) {
                  for (_.beginPath(), i = 0; i < c; i++) {
                    for (n = 0, s = l[i].length; n < s; n++)
                      _[n ? "lineTo" : "moveTo"]((a = l[i][n]).x, a.y);
                    e && _.closePath();
                  }
                  this._fillStroke(_, t);
                }
              }
            },
            _updateCircle: function (t) {
              if (this._drawing && !t._empty()) {
                var e = t._point,
                  i = this._ctx,
                  n = Math.max(Math.round(t._radius), 1),
                  s = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                1 !== s && (i.save(), i.scale(1, s)),
                  i.beginPath(),
                  i.arc(e.x, e.y / s, n, 0, 2 * Math.PI, !1),
                  1 !== s && i.restore(),
                  this._fillStroke(i, t);
              }
            },
            _fillStroke: function (t, e) {
              var i = e.options;
              i.fill &&
                ((t.globalAlpha = i.fillOpacity),
                (t.fillStyle = i.fillColor || i.color),
                t.fill(i.fillRule || "evenodd")),
                i.stroke &&
                  0 !== i.weight &&
                  (t.setLineDash &&
                    t.setLineDash((e.options && e.options._dashArray) || []),
                  (t.globalAlpha = i.opacity),
                  (t.lineWidth = i.weight),
                  (t.strokeStyle = i.color),
                  (t.lineCap = i.lineCap),
                  (t.lineJoin = i.lineJoin),
                  t.stroke());
            },
            _onClick: function (t) {
              for (
                var i,
                  n,
                  e = this._map.mouseEventToLayerPoint(t),
                  s = this._drawFirst;
                s;
                s = s.next
              )
                (i = s.layer).options.interactive &&
                  i._containsPoint(e) &&
                  (("click" !== t.type && "preclick" !== t.type) ||
                    !this._map._draggableMoved(i)) &&
                  (n = i);
              this._fireEvent(!!n && [n], t);
            },
            _onMouseMove: function (t) {
              if (
                this._map &&
                !this._map.dragging.moving() &&
                !this._map._animatingZoom
              ) {
                var e = this._map.mouseEventToLayerPoint(t);
                this._handleMouseHover(t, e);
              }
            },
            _handleMouseOut: function (t) {
              var e = this._hoveredLayer;
              e &&
                (F(this._container, "leaflet-interactive"),
                this._fireEvent([e], t, "mouseout"),
                (this._hoveredLayer = null),
                (this._mouseHoverThrottled = !1));
            },
            _handleMouseHover: function (t, e) {
              if (!this._mouseHoverThrottled) {
                for (var i, n, s = this._drawFirst; s; s = s.next)
                  (i = s.layer).options.interactive &&
                    i._containsPoint(e) &&
                    (n = i);
                n !== this._hoveredLayer &&
                  (this._handleMouseOut(t),
                  n &&
                    (D(this._container, "leaflet-interactive"),
                    this._fireEvent([n], t, "mouseover"),
                    (this._hoveredLayer = n))),
                  this._fireEvent(
                    !!this._hoveredLayer && [this._hoveredLayer],
                    t
                  ),
                  (this._mouseHoverThrottled = !0),
                  setTimeout(
                    h(function () {
                      this._mouseHoverThrottled = !1;
                    }, this),
                    32
                  );
              }
            },
            _fireEvent: function (t, e, i) {
              this._map._fireDOMEvent(e, i || e.type, t);
            },
            _bringToFront: function (t) {
              var e = t._order;
              if (e) {
                var i = e.next,
                  n = e.prev;
                if (!i) return;
                (i.prev = n),
                  n ? (n.next = i) : i && (this._drawFirst = i),
                  (e.prev = this._drawLast),
                  (this._drawLast.next = e),
                  (e.next = null),
                  (this._drawLast = e),
                  this._requestRedraw(t);
              }
            },
            _bringToBack: function (t) {
              var e = t._order;
              if (e) {
                var i = e.next,
                  n = e.prev;
                if (!n) return;
                (n.next = i),
                  i ? (i.prev = n) : n && (this._drawLast = n),
                  (e.prev = null),
                  (e.next = this._drawFirst),
                  (this._drawFirst.prev = e),
                  (this._drawFirst = e),
                  this._requestRedraw(t);
              }
            },
          });
        function en(t) {
          return x.canvas ? new tn(t) : null;
        }
        var Xt = (function () {
            try {
              return (
                document.namespaces.add(
                  "lvml",
                  "urn:schemas-microsoft-com:vml"
                ),
                function (t) {
                  return document.createElement(
                    "<lvml:" + t + ' class="lvml">'
                  );
                }
              );
            } catch {}
            return function (t) {
              return document.createElement(
                "<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
              );
            };
          })(),
          Do = {
            _initContainer: function () {
              this._container = A("div", "leaflet-vml-container");
            },
            _update: function () {
              this._map._animatingZoom ||
                (gt.prototype._update.call(this), this.fire("update"));
            },
            _initPath: function (t) {
              var e = (t._container = Xt("shape"));
              D(e, "leaflet-vml-shape " + (this.options.className || "")),
                (e.coordsize = "1 1"),
                (t._path = Xt("path")),
                e.appendChild(t._path),
                this._updateStyle(t),
                (this._layers[f(t)] = t);
            },
            _addPath: function (t) {
              var e = t._container;
              this._container.appendChild(e),
                t.options.interactive && t.addInteractiveTarget(e);
            },
            _removePath: function (t) {
              var e = t._container;
              H(e), t.removeInteractiveTarget(e), delete this._layers[f(t)];
            },
            _updateStyle: function (t) {
              var e = t._stroke,
                i = t._fill,
                n = t.options,
                s = t._container;
              (s.stroked = !!n.stroke),
                (s.filled = !!n.fill),
                n.stroke
                  ? (e || (e = t._stroke = Xt("stroke")),
                    s.appendChild(e),
                    (e.weight = n.weight + "px"),
                    (e.color = n.color),
                    (e.opacity = n.opacity),
                    (e.dashStyle = n.dashArray
                      ? Z(n.dashArray)
                        ? n.dashArray.join(" ")
                        : n.dashArray.replace(/( *, *)/g, " ")
                      : ""),
                    (e.endcap = n.lineCap.replace("butt", "flat")),
                    (e.joinstyle = n.lineJoin))
                  : e && (s.removeChild(e), (t._stroke = null)),
                n.fill
                  ? (i || (i = t._fill = Xt("fill")),
                    s.appendChild(i),
                    (i.color = n.fillColor || n.color),
                    (i.opacity = n.fillOpacity))
                  : i && (s.removeChild(i), (t._fill = null));
            },
            _updateCircle: function (t) {
              var e = t._point.round(),
                i = Math.round(t._radius),
                n = Math.round(t._radiusY || i);
              this._setPath(
                t,
                t._empty()
                  ? "M0 0"
                  : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600"
              );
            },
            _setPath: function (t, e) {
              t._path.v = e;
            },
            _bringToFront: function (t) {
              Dt(t._container);
            },
            _bringToBack: function (t) {
              St(t._container);
            },
          },
          pe = x.vml ? Xt : si,
          $t = gt.extend({
            _initContainer: function () {
              (this._container = pe("svg")),
                this._container.setAttribute("pointer-events", "none"),
                (this._rootGroup = pe("g")),
                this._container.appendChild(this._rootGroup);
            },
            _destroyContainer: function () {
              H(this._container),
                N(this._container),
                delete this._container,
                delete this._rootGroup,
                delete this._svgSize;
            },
            _update: function () {
              if (!this._map._animatingZoom || !this._bounds) {
                gt.prototype._update.call(this);
                var t = this._bounds,
                  e = t.getSize(),
                  i = this._container;
                (!this._svgSize || !this._svgSize.equals(e)) &&
                  ((this._svgSize = e),
                  i.setAttribute("width", e.x),
                  i.setAttribute("height", e.y)),
                  W(i, t.min),
                  i.setAttribute(
                    "viewBox",
                    [t.min.x, t.min.y, e.x, e.y].join(" ")
                  ),
                  this.fire("update");
              }
            },
            _initPath: function (t) {
              var e = (t._path = pe("path"));
              t.options.className && D(e, t.options.className),
                t.options.interactive && D(e, "leaflet-interactive"),
                this._updateStyle(t),
                (this._layers[f(t)] = t);
            },
            _addPath: function (t) {
              this._rootGroup || this._initContainer(),
                this._rootGroup.appendChild(t._path),
                t.addInteractiveTarget(t._path);
            },
            _removePath: function (t) {
              H(t._path),
                t.removeInteractiveTarget(t._path),
                delete this._layers[f(t)];
            },
            _updatePath: function (t) {
              t._project(), t._update();
            },
            _updateStyle: function (t) {
              var e = t._path,
                i = t.options;
              e &&
                (i.stroke
                  ? (e.setAttribute("stroke", i.color),
                    e.setAttribute("stroke-opacity", i.opacity),
                    e.setAttribute("stroke-width", i.weight),
                    e.setAttribute("stroke-linecap", i.lineCap),
                    e.setAttribute("stroke-linejoin", i.lineJoin),
                    i.dashArray
                      ? e.setAttribute("stroke-dasharray", i.dashArray)
                      : e.removeAttribute("stroke-dasharray"),
                    i.dashOffset
                      ? e.setAttribute("stroke-dashoffset", i.dashOffset)
                      : e.removeAttribute("stroke-dashoffset"))
                  : e.setAttribute("stroke", "none"),
                i.fill
                  ? (e.setAttribute("fill", i.fillColor || i.color),
                    e.setAttribute("fill-opacity", i.fillOpacity),
                    e.setAttribute("fill-rule", i.fillRule || "evenodd"))
                  : e.setAttribute("fill", "none"));
            },
            _updatePoly: function (t, e) {
              this._setPath(t, ri(t._parts, e));
            },
            _updateCircle: function (t) {
              var e = t._point,
                i = Math.max(Math.round(t._radius), 1),
                s =
                  "a" +
                  i +
                  "," +
                  (Math.max(Math.round(t._radiusY), 1) || i) +
                  " 0 1,0 ",
                a = t._empty()
                  ? "M0 0"
                  : "M" +
                    (e.x - i) +
                    "," +
                    e.y +
                    s +
                    2 * i +
                    ",0 " +
                    s +
                    2 * -i +
                    ",0 ";
              this._setPath(t, a);
            },
            _setPath: function (t, e) {
              t._path.setAttribute("d", e);
            },
            _bringToFront: function (t) {
              Dt(t._path);
            },
            _bringToBack: function (t) {
              St(t._path);
            },
          });
        function nn(t) {
          return x.svg || x.vml ? new $t(t) : null;
        }
        x.vml && $t.include(Do),
          I.include({
            getRenderer: function (t) {
              var e =
                t.options.renderer ||
                this._getPaneRenderer(t.options.pane) ||
                this.options.renderer ||
                this._renderer;
              return (
                e || (e = this._renderer = this._createRenderer()),
                this.hasLayer(e) || this.addLayer(e),
                e
              );
            },
            _getPaneRenderer: function (t) {
              if ("overlayPane" === t || void 0 === t) return !1;
              var e = this._paneRenderers[t];
              return (
                void 0 === e &&
                  ((e = this._createRenderer({ pane: t })),
                  (this._paneRenderers[t] = e)),
                e
              );
            },
            _createRenderer: function (t) {
              return (this.options.preferCanvas && en(t)) || nn(t);
            },
          });
        var on = It.extend({
          initialize: function (t, e) {
            It.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
          },
          setBounds: function (t) {
            return this.setLatLngs(this._boundsToLatLngs(t));
          },
          _boundsToLatLngs: function (t) {
            return [
              (t = K(t)).getSouthWest(),
              t.getNorthWest(),
              t.getNorthEast(),
              t.getSouthEast(),
            ];
          },
        });
        ($t.create = pe),
          ($t.pointsToPath = ri),
          (mt.geometryToLayer = he),
          (mt.coordsToLatLng = qe),
          (mt.coordsToLatLngs = le),
          (mt.latLngToCoords = Xe),
          (mt.latLngsToCoords = ce),
          (mt.getFeature = At),
          (mt.asFeature = ue),
          I.mergeOptions({ boxZoom: !0 });
        var sn = ct.extend({
          initialize: function (t) {
            (this._map = t),
              (this._container = t._container),
              (this._pane = t._panes.overlayPane),
              (this._resetStateTimeout = 0),
              t.on("unload", this._destroy, this);
          },
          addHooks: function () {
            C(this._container, "mousedown", this._onMouseDown, this);
          },
          removeHooks: function () {
            N(this._container, "mousedown", this._onMouseDown, this);
          },
          moved: function () {
            return this._moved;
          },
          _destroy: function () {
            H(this._pane), delete this._pane;
          },
          _resetState: function () {
            (this._resetStateTimeout = 0), (this._moved = !1);
          },
          _clearDeferredResetState: function () {
            0 !== this._resetStateTimeout &&
              (clearTimeout(this._resetStateTimeout),
              (this._resetStateTimeout = 0));
          },
          _onMouseDown: function (t) {
            if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
            this._clearDeferredResetState(),
              this._resetState(),
              Ft(),
              ze(),
              (this._startPoint = this._map.mouseEventToContainerPoint(t)),
              C(
                document,
                {
                  contextmenu: Tt,
                  mousemove: this._onMouseMove,
                  mouseup: this._onMouseUp,
                  keydown: this._onKeyDown,
                },
                this
              );
          },
          _onMouseMove: function (t) {
            this._moved ||
              ((this._moved = !0),
              (this._box = A("div", "leaflet-zoom-box", this._container)),
              D(this._container, "leaflet-crosshair"),
              this._map.fire("boxzoomstart")),
              (this._point = this._map.mouseEventToContainerPoint(t));
            var e = new U(this._point, this._startPoint),
              i = e.getSize();
            W(this._box, e.min),
              (this._box.style.width = i.x + "px"),
              (this._box.style.height = i.y + "px");
          },
          _finish: function () {
            this._moved &&
              (H(this._box), F(this._container, "leaflet-crosshair")),
              Gt(),
              Ie(),
              N(
                document,
                {
                  contextmenu: Tt,
                  mousemove: this._onMouseMove,
                  mouseup: this._onMouseUp,
                  keydown: this._onKeyDown,
                },
                this
              );
          },
          _onMouseUp: function (t) {
            if (
              (1 === t.which || 1 === t.button) &&
              (this._finish(), this._moved)
            ) {
              this._clearDeferredResetState(),
                (this._resetStateTimeout = setTimeout(
                  h(this._resetState, this),
                  0
                ));
              var e = new J(
                this._map.containerPointToLatLng(this._startPoint),
                this._map.containerPointToLatLng(this._point)
              );
              this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
            }
          },
          _onKeyDown: function (t) {
            27 === t.keyCode &&
              (this._finish(),
              this._clearDeferredResetState(),
              this._resetState());
          },
        });
        I.addInitHook("addHandler", "boxZoom", sn),
          I.mergeOptions({ doubleClickZoom: !0 });
        var rn = ct.extend({
          addHooks: function () {
            this._map.on("dblclick", this._onDoubleClick, this);
          },
          removeHooks: function () {
            this._map.off("dblclick", this._onDoubleClick, this);
          },
          _onDoubleClick: function (t) {
            var e = this._map,
              i = e.getZoom(),
              n = e.options.zoomDelta,
              s = t.originalEvent.shiftKey ? i - n : i + n;
            "center" === e.options.doubleClickZoom
              ? e.setZoom(s)
              : e.setZoomAround(t.containerPoint, s);
          },
        });
        I.addInitHook("addHandler", "doubleClickZoom", rn),
          I.mergeOptions({
            dragging: !0,
            inertia: !0,
            inertiaDeceleration: 3400,
            inertiaMaxSpeed: 1 / 0,
            easeLinearity: 0.2,
            worldCopyJump: !1,
            maxBoundsViscosity: 0,
          });
        var an = ct.extend({
          addHooks: function () {
            if (!this._draggable) {
              var t = this._map;
              (this._draggable = new Lt(t._mapPane, t._container)),
                this._draggable.on(
                  {
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd,
                  },
                  this
                ),
                this._draggable.on("predrag", this._onPreDragLimit, this),
                t.options.worldCopyJump &&
                  (this._draggable.on("predrag", this._onPreDragWrap, this),
                  t.on("zoomend", this._onZoomEnd, this),
                  t.whenReady(this._onZoomEnd, this));
            }
            D(this._map._container, "leaflet-grab leaflet-touch-drag"),
              this._draggable.enable(),
              (this._positions = []),
              (this._times = []);
          },
          removeHooks: function () {
            F(this._map._container, "leaflet-grab"),
              F(this._map._container, "leaflet-touch-drag"),
              this._draggable.disable();
          },
          moved: function () {
            return this._draggable && this._draggable._moved;
          },
          moving: function () {
            return this._draggable && this._draggable._moving;
          },
          _onDragStart: function () {
            var t = this._map;
            if (
              (t._stop(),
              this._map.options.maxBounds &&
                this._map.options.maxBoundsViscosity)
            ) {
              var e = K(this._map.options.maxBounds);
              (this._offsetLimit = $(
                this._map
                  .latLngToContainerPoint(e.getNorthWest())
                  .multiplyBy(-1),
                this._map
                  .latLngToContainerPoint(e.getSouthEast())
                  .multiplyBy(-1)
                  .add(this._map.getSize())
              )),
                (this._viscosity = Math.min(
                  1,
                  Math.max(0, this._map.options.maxBoundsViscosity)
                ));
            } else this._offsetLimit = null;
            t.fire("movestart").fire("dragstart"),
              t.options.inertia && ((this._positions = []), (this._times = []));
          },
          _onDrag: function (t) {
            if (this._map.options.inertia) {
              var e = (this._lastTime = +new Date()),
                i = (this._lastPos =
                  this._draggable._absPos || this._draggable._newPos);
              this._positions.push(i),
                this._times.push(e),
                this._prunePositions(e);
            }
            this._map.fire("move", t).fire("drag", t);
          },
          _prunePositions: function (t) {
            for (; this._positions.length > 1 && t - this._times[0] > 50; )
              this._positions.shift(), this._times.shift();
          },
          _onZoomEnd: function () {
            var t = this._map.getSize().divideBy(2),
              e = this._map.latLngToLayerPoint([0, 0]);
            (this._initialWorldOffset = e.subtract(t).x),
              (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
          },
          _viscousLimit: function (t, e) {
            return t - (t - e) * this._viscosity;
          },
          _onPreDragLimit: function () {
            if (this._viscosity && this._offsetLimit) {
              var t = this._draggable._newPos.subtract(
                  this._draggable._startPos
                ),
                e = this._offsetLimit;
              t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
                t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
                t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
                t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
                (this._draggable._newPos = this._draggable._startPos.add(t));
            }
          },
          _onPreDragWrap: function () {
            var t = this._worldWidth,
              e = Math.round(t / 2),
              i = this._initialWorldOffset,
              n = this._draggable._newPos.x,
              s = ((n - e + i) % t) + e - i,
              a = ((n + e + i) % t) - e - i,
              l = Math.abs(s + i) < Math.abs(a + i) ? s : a;
            (this._draggable._absPos = this._draggable._newPos.clone()),
              (this._draggable._newPos.x = l);
          },
          _onDragEnd: function (t) {
            var e = this._map,
              i = e.options,
              n = !i.inertia || t.noInertia || this._times.length < 2;
            if ((e.fire("dragend", t), n)) e.fire("moveend");
            else {
              this._prunePositions(+new Date());
              var s = this._lastPos.subtract(this._positions[0]),
                l = i.easeLinearity,
                c = s.multiplyBy(l / ((this._lastTime - this._times[0]) / 1e3)),
                _ = c.distanceTo([0, 0]),
                m = Math.min(i.inertiaMaxSpeed, _),
                y = c.multiplyBy(m / _),
                T = m / (i.inertiaDeceleration * l),
                z = y.multiplyBy(-T / 2).round();
              z.x || z.y
                ? ((z = e._limitOffset(z, e.options.maxBounds)),
                  X(function () {
                    e.panBy(z, {
                      duration: T,
                      easeLinearity: l,
                      noMoveStart: !0,
                      animate: !0,
                    });
                  }))
                : e.fire("moveend");
            }
          },
        });
        I.addInitHook("addHandler", "dragging", an),
          I.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
        var hn = ct.extend({
          keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173],
          },
          initialize: function (t) {
            (this._map = t),
              this._setPanDelta(t.options.keyboardPanDelta),
              this._setZoomDelta(t.options.zoomDelta);
          },
          addHooks: function () {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"),
              C(
                t,
                {
                  focus: this._onFocus,
                  blur: this._onBlur,
                  mousedown: this._onMouseDown,
                },
                this
              ),
              this._map.on(
                { focus: this._addHooks, blur: this._removeHooks },
                this
              );
          },
          removeHooks: function () {
            this._removeHooks(),
              N(
                this._map._container,
                {
                  focus: this._onFocus,
                  blur: this._onBlur,
                  mousedown: this._onMouseDown,
                },
                this
              ),
              this._map.off(
                { focus: this._addHooks, blur: this._removeHooks },
                this
              );
          },
          _onMouseDown: function () {
            if (!this._focused) {
              var t = document.body,
                e = document.documentElement,
                i = t.scrollTop || e.scrollTop,
                n = t.scrollLeft || e.scrollLeft;
              this._map._container.focus(), window.scrollTo(n, i);
            }
          },
          _onFocus: function () {
            (this._focused = !0), this._map.fire("focus");
          },
          _onBlur: function () {
            (this._focused = !1), this._map.fire("blur");
          },
          _setPanDelta: function (t) {
            var n,
              s,
              e = (this._panKeys = {}),
              i = this.keyCodes;
            for (n = 0, s = i.left.length; n < s; n++)
              e[i.left[n]] = [-1 * t, 0];
            for (n = 0, s = i.right.length; n < s; n++) e[i.right[n]] = [t, 0];
            for (n = 0, s = i.down.length; n < s; n++) e[i.down[n]] = [0, t];
            for (n = 0, s = i.up.length; n < s; n++) e[i.up[n]] = [0, -1 * t];
          },
          _setZoomDelta: function (t) {
            var n,
              s,
              e = (this._zoomKeys = {}),
              i = this.keyCodes;
            for (n = 0, s = i.zoomIn.length; n < s; n++) e[i.zoomIn[n]] = t;
            for (n = 0, s = i.zoomOut.length; n < s; n++) e[i.zoomOut[n]] = -t;
          },
          _addHooks: function () {
            C(document, "keydown", this._onKeyDown, this);
          },
          _removeHooks: function () {
            N(document, "keydown", this._onKeyDown, this);
          },
          _onKeyDown: function (t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
              var n,
                e = t.keyCode,
                i = this._map;
              if (e in this._panKeys) {
                if (!i._panAnim || !i._panAnim._inProgress)
                  if (
                    ((n = this._panKeys[e]),
                    t.shiftKey && (n = k(n).multiplyBy(3)),
                    i.options.maxBounds &&
                      (n = i._limitOffset(k(n), i.options.maxBounds)),
                    i.options.worldCopyJump)
                  ) {
                    var s = i.wrapLatLng(
                      i.unproject(i.project(i.getCenter()).add(n))
                    );
                    i.panTo(s);
                  } else i.panBy(n);
              } else if (e in this._zoomKeys)
                i.setZoom(
                  i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]
                );
              else {
                if (27 !== e || !i._popup || !i._popup.options.closeOnEscapeKey)
                  return;
                i.closePopup();
              }
              Tt(t);
            }
          },
        });
        I.addInitHook("addHandler", "keyboard", hn),
          I.mergeOptions({
            scrollWheelZoom: !0,
            wheelDebounceTime: 40,
            wheelPxPerZoomLevel: 60,
          });
        var ln = ct.extend({
          addHooks: function () {
            C(this._map._container, "wheel", this._onWheelScroll, this),
              (this._delta = 0);
          },
          removeHooks: function () {
            N(this._map._container, "wheel", this._onWheelScroll, this);
          },
          _onWheelScroll: function (t) {
            var e = Oi(t),
              i = this._map.options.wheelDebounceTime;
            (this._delta += e),
              (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
              this._startTime || (this._startTime = +new Date());
            var n = Math.max(i - (+new Date() - this._startTime), 0);
            clearTimeout(this._timer),
              (this._timer = setTimeout(h(this._performZoom, this), n)),
              Tt(t);
          },
          _performZoom: function () {
            var t = this._map,
              e = t.getZoom(),
              i = this._map.options.zoomSnap || 0;
            t._stop();
            var s =
                (4 *
                  Math.log(
                    2 /
                      (1 +
                        Math.exp(
                          -Math.abs(
                            this._delta /
                              (4 * this._map.options.wheelPxPerZoomLevel)
                          )
                        ))
                  )) /
                Math.LN2,
              a = i ? Math.ceil(s / i) * i : s,
              l = t._limitZoom(e + (this._delta > 0 ? a : -a)) - e;
            (this._delta = 0),
              (this._startTime = null),
              l &&
                ("center" === t.options.scrollWheelZoom
                  ? t.setZoom(e + l)
                  : t.setZoomAround(this._lastMousePos, e + l));
          },
        });
        I.addInitHook("addHandler", "scrollWheelZoom", ln);
        I.mergeOptions({
          tapHold: x.touchNative && x.safari && x.mobile,
          tapTolerance: 15,
        });
        var cn = ct.extend({
          addHooks: function () {
            C(this._map._container, "touchstart", this._onDown, this);
          },
          removeHooks: function () {
            N(this._map._container, "touchstart", this._onDown, this);
          },
          _onDown: function (t) {
            if ((clearTimeout(this._holdTimeout), 1 === t.touches.length)) {
              var e = t.touches[0];
              (this._startPos = this._newPos = new E(e.clientX, e.clientY)),
                (this._holdTimeout = setTimeout(
                  h(function () {
                    this._cancel(),
                      this._isTapValid() &&
                        (C(document, "touchend", j),
                        C(
                          document,
                          "touchend touchcancel",
                          this._cancelClickPrevent
                        ),
                        this._simulateEvent("contextmenu", e));
                  }, this),
                  600
                )),
                C(
                  document,
                  "touchend touchcancel contextmenu",
                  this._cancel,
                  this
                ),
                C(document, "touchmove", this._onMove, this);
            }
          },
          _cancelClickPrevent: function t() {
            N(document, "touchend", j), N(document, "touchend touchcancel", t);
          },
          _cancel: function () {
            clearTimeout(this._holdTimeout),
              N(
                document,
                "touchend touchcancel contextmenu",
                this._cancel,
                this
              ),
              N(document, "touchmove", this._onMove, this);
          },
          _onMove: function (t) {
            var e = t.touches[0];
            this._newPos = new E(e.clientX, e.clientY);
          },
          _isTapValid: function () {
            return (
              this._newPos.distanceTo(this._startPos) <=
              this._map.options.tapTolerance
            );
          },
          _simulateEvent: function (t, e) {
            var i = new MouseEvent(t, {
              bubbles: !0,
              cancelable: !0,
              view: window,
              screenX: e.screenX,
              screenY: e.screenY,
              clientX: e.clientX,
              clientY: e.clientY,
            });
            (i._simulated = !0), e.target.dispatchEvent(i);
          },
        });
        I.addInitHook("addHandler", "tapHold", cn),
          I.mergeOptions({ touchZoom: x.touch, bounceAtZoomLimits: !0 });
        var un = ct.extend({
          addHooks: function () {
            D(this._map._container, "leaflet-touch-zoom"),
              C(this._map._container, "touchstart", this._onTouchStart, this);
          },
          removeHooks: function () {
            F(this._map._container, "leaflet-touch-zoom"),
              N(this._map._container, "touchstart", this._onTouchStart, this);
          },
          _onTouchStart: function (t) {
            var e = this._map;
            if (
              t.touches &&
              2 === t.touches.length &&
              !e._animatingZoom &&
              !this._zooming
            ) {
              var i = e.mouseEventToContainerPoint(t.touches[0]),
                n = e.mouseEventToContainerPoint(t.touches[1]);
              (this._centerPoint = e.getSize()._divideBy(2)),
                (this._startLatLng = e.containerPointToLatLng(
                  this._centerPoint
                )),
                "center" !== e.options.touchZoom &&
                  (this._pinchStartLatLng = e.containerPointToLatLng(
                    i.add(n)._divideBy(2)
                  )),
                (this._startDist = i.distanceTo(n)),
                (this._startZoom = e.getZoom()),
                (this._moved = !1),
                (this._zooming = !0),
                e._stop(),
                C(document, "touchmove", this._onTouchMove, this),
                C(document, "touchend touchcancel", this._onTouchEnd, this),
                j(t);
            }
          },
          _onTouchMove: function (t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
              var e = this._map,
                i = e.mouseEventToContainerPoint(t.touches[0]),
                n = e.mouseEventToContainerPoint(t.touches[1]),
                s = i.distanceTo(n) / this._startDist;
              if (
                ((this._zoom = e.getScaleZoom(s, this._startZoom)),
                !e.options.bounceAtZoomLimits &&
                  ((this._zoom < e.getMinZoom() && s < 1) ||
                    (this._zoom > e.getMaxZoom() && s > 1)) &&
                  (this._zoom = e._limitZoom(this._zoom)),
                "center" === e.options.touchZoom)
              ) {
                if (((this._center = this._startLatLng), 1 === s)) return;
              } else {
                var a = i._add(n)._divideBy(2)._subtract(this._centerPoint);
                if (1 === s && 0 === a.x && 0 === a.y) return;
                this._center = e.unproject(
                  e.project(this._pinchStartLatLng, this._zoom).subtract(a),
                  this._zoom
                );
              }
              this._moved || (e._moveStart(!0, !1), (this._moved = !0)),
                tt(this._animRequest);
              var l = h(
                e._move,
                e,
                this._center,
                this._zoom,
                { pinch: !0, round: !1 },
                void 0
              );
              (this._animRequest = X(l, this, !0)), j(t);
            }
          },
          _onTouchEnd: function () {
            this._moved && this._zooming
              ? ((this._zooming = !1),
                tt(this._animRequest),
                N(document, "touchmove", this._onTouchMove, this),
                N(document, "touchend touchcancel", this._onTouchEnd, this),
                this._map.options.zoomAnimation
                  ? this._map._animateZoom(
                      this._center,
                      this._map._limitZoom(this._zoom),
                      !0,
                      this._map.options.zoomSnap
                    )
                  : this._map._resetView(
                      this._center,
                      this._map._limitZoom(this._zoom)
                    ))
              : (this._zooming = !1);
          },
        });
        I.addInitHook("addHandler", "touchZoom", un),
          (I.BoxZoom = sn),
          (I.DoubleClickZoom = rn),
          (I.Drag = an),
          (I.Keyboard = hn),
          (I.ScrollWheelZoom = ln),
          (I.TapHold = cn),
          (I.TouchZoom = un),
          (p.Bounds = U),
          (p.Browser = x),
          (p.CRS = _t),
          (p.Canvas = tn),
          (p.Circle = je),
          (p.CircleMarker = ae),
          (p.Class = dt),
          (p.Control = rt),
          (p.DivIcon = $i),
          (p.DivOverlay = ut),
          (p.DomEvent = qn),
          (p.DomUtil = Kn),
          (p.Draggable = Lt),
          (p.Evented = Bt),
          (p.FeatureGroup = ft),
          (p.GeoJSON = mt),
          (p.GridLayer = qt),
          (p.Handler = ct),
          (p.Icon = zt),
          (p.ImageOverlay = de),
          (p.LatLng = B),
          (p.LatLngBounds = J),
          (p.Layer = at),
          (p.LayerGroup = Ot),
          (p.LineUtil = ao),
          (p.Map = I),
          (p.Marker = re),
          (p.Mixin = io),
          (p.Path = yt),
          (p.Point = E),
          (p.PolyUtil = ho),
          (p.Polygon = It),
          (p.Polyline = pt),
          (p.Popup = _e),
          (p.PosAnimation = zi),
          (p.Projection = lo),
          (p.Rectangle = on),
          (p.Renderer = gt),
          (p.SVG = $t),
          (p.SVGOverlay = Xi),
          (p.TileLayer = Zt),
          (p.Tooltip = fe),
          (p.Transformation = we),
          (p.Util = pn),
          (p.VideoOverlay = qi),
          (p.bind = h),
          (p.bounds = $),
          (p.canvas = en),
          (p.circle = function vo(t, e, i) {
            return new je(t, e, i);
          }),
          (p.circleMarker = function go(t, e) {
            return new ae(t, e);
          }),
          (p.control = Yt),
          (p.divIcon = function ko(t) {
            return new $i(t);
          }),
          (p.extend = o),
          (p.featureGroup = function (t, e) {
            return new ft(t, e);
          }),
          (p.geoJSON = ji),
          (p.geoJson = wo),
          (p.gridLayer = function Eo(t) {
            return new qt(t);
          }),
          (p.icon = function po(t) {
            return new zt(t);
          }),
          (p.imageOverlay = function (t, e, i) {
            return new de(t, e, i);
          }),
          (p.latLng = R),
          (p.latLngBounds = K),
          (p.layerGroup = function (t, e) {
            return new Ot(t, e);
          }),
          (p.map = function Xn(t, e) {
            return new I(t, e);
          }),
          (p.marker = function mo(t, e) {
            return new re(t, e);
          }),
          (p.point = k),
          (p.polygon = function yo(t, e) {
            return new It(t, e);
          }),
          (p.polyline = function Lo(t, e) {
            return new pt(t, e);
          }),
          (p.popup = function (t, e) {
            return new _e(t, e);
          }),
          (p.rectangle = function So(t, e) {
            return new on(t, e);
          }),
          (p.setOptions = b),
          (p.stamp = f),
          (p.svg = nn),
          (p.svgOverlay = function Po(t, e, i) {
            return new Xi(t, e, i);
          }),
          (p.tileLayer = Ji),
          (p.tooltip = function (t, e) {
            return new fe(t, e);
          }),
          (p.transformation = Rt),
          (p.version = "1.9.3"),
          (p.videoOverlay = function bo(t, e, i) {
            return new qi(t, e, i);
          });
        var zo = window.L;
        (p.noConflict = function () {
          return (window.L = zo), this;
        }),
          (window.L = p);
      })(G);
    },
  },
]);

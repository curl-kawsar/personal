(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/KRI":
    /*!*****************************************!*\
      !*** ./src/app/reader/reader.module.ts ***!
      \*****************************************/

    /*! exports provided: ReaderModule */

    /***/
    function KRI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReaderModule", function () {
        return ReaderModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _reader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reader.component */
      "HMgo");
      /* harmony import */


      var _background_background_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./background/background.component */
      "czT2");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "Luio");
      /* harmony import */


      var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./settings/settings.component */
      "5C6Q");
      /* harmony import */


      var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./navigation/navigation.component */
      "rhgw");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _toc_toc_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./toc/toc.component */
      "Hp81");

      var ReaderModule = function ReaderModule() {
        _classCallCheck(this, ReaderModule);
      };

      ReaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ReaderModule
      });
      ReaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ReaderModule_Factory(t) {
          return new (t || ReaderModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReaderModule, {
          declarations: [_reader_component__WEBPACK_IMPORTED_MODULE_3__["ReaderComponent"], _background_background_component__WEBPACK_IMPORTED_MODULE_4__["BackgroundComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ButtonsComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _toc_toc_component__WEBPACK_IMPORTED_MODULE_17__["TocComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReaderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_reader_component__WEBPACK_IMPORTED_MODULE_3__["ReaderComponent"], _background_background_component__WEBPACK_IMPORTED_MODULE_4__["BackgroundComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ButtonsComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _toc_toc_component__WEBPACK_IMPORTED_MODULE_17__["TocComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\User\Downloads\Compressed\example\immerse-main\immerse-main\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "5C6Q":
    /*!*******************************************************!*\
      !*** ./src/app/reader/settings/settings.component.ts ***!
      \*******************************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function C6Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/config/config.service */
      "Cxl7");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function SettingsComponent_button_9_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0,
          color: "red"
        };
      };

      function SettingsComponent_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var t_r4 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.controls.theme.setValue(t_r4.theme);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingsComponent_button_9_mat_icon_1_Template, 2, 0, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var t_r4 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, t_r4.theme));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", t_r4.theme === ctx_r0.controls.theme.value);
        }
      }

      var _c1 = function _c1() {
        return {
          "background-color": "#eeeeee33"
        };
      };

      var _c2 = function _c2(a0) {
        return {
          color: a0
        };
      };

      function SettingsComponent_button_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_button_14_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var mode_r8 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.controls.pageMode.setValue(mode_r8.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mode_r8 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](mode_r8.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, mode_r8.value === ctx_r1.controls.pageMode.value ? "red" : "#aaa"));
        }
      }

      function SettingsComponent_mat_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ff_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ff_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ff_r11, " ");
        }
      }

      function SettingsComponent_mat_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lh_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lh_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lh_r12, " ");
        }
      }

      ;

      var SettingsComponent = /*#__PURE__*/function () {
        function SettingsComponent(configService, fb, dialogRef, data) {
          var _this = this;

          _classCallCheck(this, SettingsComponent);

          this.configService = configService;
          this.fb = fb;
          this.dialogRef = dialogRef;
          this.data = data;
          this.themes = [{
            id: 1,
            theme: 'rgba(235,255,231,1)'
          }, {
            id: 2,
            theme: 'rgba(244,232,211,0.4)'
          }, {
            id: 3,
            theme: 'rgba(242,219,187,0.8)'
          }, {
            id: 4,
            theme: 'rgba(255,254,252,1)'
          }, {
            id: 5,
            theme: 'rgba(44,47,49,1)'
          }];
          this.pageModes = [{
            value: 'single',
            icon: 'icon-single-page'
          }, {
            value: 'double',
            icon: 'icon-two-page'
          }, {
            value: 'scroll',
            icon: 'icon-scroll1'
          }, {
            value: 'continuous',
            icon: 'icon-scroll'
          }];
          this.fontFamilies = ['Helvetica', 'Times New Roman', 'Microsoft YaHei', 'SimSun', 'SimHei', 'Arial'];
          this.lineHeights = ['1', '1.25', '1.5', '1.75', '2'];
          this.controls = {};
          this.settings = fb.group({
            theme: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.theme),
            pageMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.pageMode),
            pageScale: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.pageScale),
            fontFamily: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.fontFamily),
            fontSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.fontSize),
            lineHeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.lineHeight)
          });
          this.controls = this.settings.controls; // this.settings.valueChanges.subscribe((value) => {
          //   console.log('valueChanges ->', value);
          // });
          // this.theme.valueChanges.subscribe((value) => {
          //   console.log('theme valueChanges ->', value);
          // });

          Object.keys(this.controls).forEach(function (key) {
            _this.controls[key].valueChanges.subscribe(function (value) {
              console.log('value change', key, value);

              _this.configService.setItem("reader.".concat(key), value);
            });
          });
        }

        _createClass(SettingsComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }]);

        return SettingsComponent;
      }();

      SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
        return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SettingsComponent,
        selectors: [["app-reader-settings"]],
        decls: 34,
        vars: 9,
        consts: [[1, "reader-settings"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "settings-form", 3, "formGroup"], [1, "settings-form-field"], [1, "fat-ratio-group"], ["class", "fat-ratio", "mat-mini-fab", "", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["min", "50", "max", "150", "thumbLabel", "", "tickInterval", "10", 1, "settings-slider", 3, "formControl"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["min", "13", "max", "32", "thumbLabel", "", "tickInterval", "1", 1, "settings-slider", 3, "formControl"], ["mat-dialog-actions", ""], ["mat-mini-fab", "", 1, "fat-ratio", 3, "ngStyle", "click"], [4, "ngIf"], [3, "ngStyle"], [3, "value"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Read Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SettingsComponent_button_9_Template, 2, 4, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Page mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SettingsComponent_button_14_Template, 2, 7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Scaling Ratio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-slider", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Font");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SettingsComponent_mat_option_23_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Font Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-slider", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Row Height");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SettingsComponent_mat_option_32_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.settings);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.themes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageModes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.pageScale);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.fontFamily);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fontFamilies);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.fontSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.controls.lineHeight);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lineHeights);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
        styles: [".reader-settings[_ngcontent-%COMP%] {\n  width: 260px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.settings-form[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.settings-form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.settings-form-field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.settings-form-field[_ngcontent-%COMP%]   .fat-ratio-group[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\n.settings-form-field[_ngcontent-%COMP%]   .fat-ratio[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.settings-slider[_ngcontent-%COMP%] {\n  width: 196px;\n  padding: 8px 0;\n  margin-left: -8px;\n}\n\n.icon-single-page[_ngcontent-%COMP%], .icon-two-page[_ngcontent-%COMP%], .icon-scroll1[_ngcontent-%COMP%], .icon-scroll[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4b4b4b;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZGVyL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUUsWUFBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUZGOztBQUlFO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaURBQUE7QUFGSjs7QUFLRTtFQUNFLGFBQUE7QUFISjs7QUFLRTtFQUNFLGlCQUFBO0FBSEo7O0FBT0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7Ozs7RUFJRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSkYiLCJmaWxlIjoic3JjL2FwcC9yZWFkZXIvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVhZGVyLXNldHRpbmdzIHtcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAvLyB0b3A6IDEwcHg7XG4gIC8vIHJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMjYwcHg7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5zZXR0aW5ncy1mb3JtIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnNldHRpbmdzLWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIG1hdC1sYWJlbCB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjU0KTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgLmZhdC1yYXRpby1ncm91cCB7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuICAuZmF0LXJhdGlvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgfVxufVxuXG4uc2V0dGluZ3Mtc2xpZGVyIHtcbiAgd2lkdGg6IDE5NnB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG59XG5cbi5pY29uLXNpbmdsZS1wYWdlLFxuLmljb24tdHdvLXBhZ2UsXG4uaWNvbi1zY3JvbGwxLFxuLmljb24tc2Nyb2xsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmdiYSg3NSwgNzUsIDc1LCAxKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-reader-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "5Zo4":
    /*!************************************************************!*\
      !*** ./src/app/library/book-cards/book-cards.component.ts ***!
      \************************************************************/

    /*! exports provided: BookCardsComponent */

    /***/
    function Zo4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookCardsComponent", function () {
        return BookCardsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/message.service */
      "OdHV");
      /* harmony import */


      var _services_library_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/library.service */
      "Ut00");
      /* harmony import */


      var ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-file-drop */
      "ZRew");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function BookCardsComponent_ng_template_2_div_1_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r4.name);
        }
      }

      function BookCardsComponent_ng_template_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookCardsComponent_ng_template_2_div_1_Template_img_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var book_r4 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r7.openBook(book_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BookCardsComponent_ng_template_2_div_1_p_3_Template, 3, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var book_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", book_r4.cover !== "noCover" ? book_r4.cover : "assets/cover.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", book_r4.cover === "noCover");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r4.name);
        }
      }

      function BookCardsComponent_ng_template_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Release to Add books to Library");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function BookCardsComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BookCardsComponent_ng_template_2_div_1_Template, 7, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BookCardsComponent_ng_template_2_div_2_Template, 2, 0, "div", 5);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.books);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isFileOver);
        }
      }

      var BookCardsComponent = /*#__PURE__*/function () {
        function BookCardsComponent(router, msgService, libraryService) {
          _classCallCheck(this, BookCardsComponent);

          this.router = router;
          this.msgService = msgService;
          this.libraryService = libraryService;
          this.isFileOver = false;
        }

        _createClass(BookCardsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openBook",
          value: function openBook(book) {
            this.router.navigate(['/reader', book.key]);
          }
        }, {
          key: "droped",
          value: function droped(files) {
            var _this2 = this;

            console.log(files);
            this.isFileOver = false;
            this.msgService.startSpinner();
            var importedCount = 1;

            var _iterator = _createForOfIteratorHelper(files),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var droppedFile = _step.value;

                // Is it a file?
                if (droppedFile.fileEntry.isFile) {
                  var fileEntry = droppedFile.fileEntry;
                  fileEntry.file(function (file) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return this.libraryService.importBookFile(file);

                            case 2:
                              importedCount += 1;

                              if (importedCount >= files.length) {
                                this.msgService.stopSpinner();
                              }

                            case 4:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, this);
                    }));
                  });
                } else {// It was a directory (empty directories are added, otherwise only files)
                  // const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
                  // console.log(droppedFile.relativePath, fileEntry);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "fileOver",
          value: function fileOver(event) {
            console.log('over', event);
            this.isFileOver = true;
          }
        }, {
          key: "fileLeave",
          value: function fileLeave(event) {
            console.log('leave', event);
            this.isFileOver = false;
          }
        }]);

        return BookCardsComponent;
      }();

      BookCardsComponent.ɵfac = function BookCardsComponent_Factory(t) {
        return new (t || BookCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_library_service__WEBPACK_IMPORTED_MODULE_4__["LibraryService"]));
      };

      BookCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: BookCardsComponent,
        selectors: [["app-lib-book-cards"]],
        inputs: {
          books: "books"
        },
        decls: 3,
        vars: 0,
        consts: [[1, "book-cards"], ["dropZoneLabel", "Drop files here", "dropZoneClassName", "book-cords-drop-zone-class", "contentClassName", "book-cords-drop-zone-content-class", "accept", ".epub", 3, "onFileDrop", "onFileOver", "onFileLeave"], ["ngx-file-drop-content-tmp", ""], [1, "book-card-grid"], ["class", "book-card", 4, "ngFor", "ngForOf"], ["class", "drop-over-info", 4, "ngIf"], [1, "book-card"], [1, "book-card-cover"], ["alt", "", 1, "book-card-cover-img", 3, "src", "click"], ["class", "book-card-cover-title", 4, "ngIf"], [1, "book-card-title"], [1, "book-card-cover-title"], [1, "drop-over-info"]],
        template: function BookCardsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-file-drop", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onFileDrop", function BookCardsComponent_Template_ngx_file_drop_onFileDrop_1_listener($event) {
              return ctx.droped($event);
            })("onFileOver", function BookCardsComponent_Template_ngx_file_drop_onFileOver_1_listener($event) {
              return ctx.fileOver($event);
            })("onFileLeave", function BookCardsComponent_Template_ngx_file_drop_onFileLeave_1_listener($event) {
              return ctx.fileLeave($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BookCardsComponent_ng_template_2_Template, 3, 2, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__["NgxFileDropComponent"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__["NgxFileDropContentTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: [".book-cards[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 46px;\n  left: 180px;\n  width: calc(100% - 180px);\n  height: calc(100% - 46px);\n  display: flex;\n  font-family: system-ui;\n}\n\nngx-file-drop[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.book-card-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  width: 100%;\n  height: 100%;\n}\n\n.book-card[_ngcontent-%COMP%] {\n  width: 135px;\n  position: relative;\n}\n\n.book-card-cover[_ngcontent-%COMP%] {\n  width: 105px;\n  height: 137px;\n  background: white;\n  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.22);\n  opacity: 0.73;\n  margin: 15px 15px 5px 15px;\n  cursor: pointer;\n}\n\n.book-card-title[_ngcontent-%COMP%] {\n  height: 60px;\n  font-size: 15px;\n  color: #4b4b4b;\n  opacity: 1;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  white-space: normal;\n  position: relative;\n}\n\n.book-card-config[_ngcontent-%COMP%] {\n  width: 105px;\n  height: 35px;\n  background: rgba(0, 0, 0, 0.5);\n  position: relative;\n  bottom: 71px;\n  left: 15px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 15px;\n  opacity: 1;\n  cursor: pointer;\n  -webkit-animation: fade-in 0.1s ease-in 0s 1;\n          animation: fade-in 0.1s ease-in 0s 1;\n}\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n.book-more-action[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 23px;\n  right: 17px;\n  transform: rotate(90deg);\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n  text-shadow: 0px 0px 5px rgba(75, 75, 75, 0.6);\n}\n\n.book-love-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 45px;\n  right: 20px;\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n  z-index: 1;\n  text-shadow: 0px 0px 5px rgba(75, 75, 75, 0.6);\n}\n\n.book-loved-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  right: 19px;\n  font-size: 20px;\n  color: #f87356;\n  cursor: pointer;\n  z-index: 2;\n  text-shadow: 0px 0px 5px rgba(75, 75, 75, 0.6);\n}\n\n.book-card-cover-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(197deg, #2da2ff 0%, #69ebde 100%);\n  opacity: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.book-card-cover-title[_ngcontent-%COMP%] {\n  height: 30px;\n  font-size: 8px;\n  line-height: 15px;\n  color: #4b4b4b;\n  opacity: 1;\n  float: left;\n  font-size: 14px;\n  height: 15px;\n  line-height: 30px;\n  color: #666;\n  opacity: 1;\n  width: 150px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  position: absolute;\n  top: 115px;\n  left: 15px;\n  font-weight: bold;\n  width: 106px;\n  height: 38px;\n}\n\n.drop-over-info[_ngcontent-%COMP%] {\n  z-index: 999;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 1.2rem;\n  color: #fff;\n  background: #422d2d44;\n  box-shadow: 0 0 74px 15px #1d1a1abd;\n  padding: 8px 20px;\n  border-radius: 10px;\n  font-family: system-ui;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9ib29rLWNhcmRzL2Jvb2stY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFHQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBRUY7RUFBQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUVGO0FBQ0Y7O0FBVkE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQUVGO0VBQUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFFRjtBQUNGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsOENBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsOENBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkRBQUE7RUFLQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L2Jvb2stY2FyZHMvYm9vay1jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rLWNhcmRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2cHg7XG4gIGxlZnQ6IDE4MHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTgwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ2cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xufVxuXG5uZ3gtZmlsZS1kcm9wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJvb2stY2FyZC1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYm9vay1jYXJkIHtcbiAgd2lkdGg6IDEzNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm9vay1jYXJkLWNvdmVyIHtcbiAgd2lkdGg6IDEwNXB4O1xuICBoZWlnaHQ6IDEzN3B4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIG9wYWNpdHk6IDAuNzM7XG4gIG1hcmdpbjogMTVweCAxNXB4IDVweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm9vay1jYXJkLXRpdGxlIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDEpO1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAvLyB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJvb2stY2FyZC1jb25maWcge1xuICB3aWR0aDogMTA1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNzFweDtcbiAgbGVmdDogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbmltYXRpb246IGZhZGUtaW4gMC4xcyBlYXNlLWluIDBzIDE7XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG4uYm9vay1tb3JlLWFjdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyM3B4O1xuICByaWdodDogMTdweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSg3NSwgNzUsIDc1LCAwLjYpO1xufVxuLmJvb2stbG92ZS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQ1cHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSg3NSwgNzUsIDc1LCAwLjYpO1xufVxuLmJvb2stbG92ZWQtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0NHB4O1xuICByaWdodDogMTlweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2Y4NzM1NjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAyO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSg3NSwgNzUsIDc1LCAwLjYpO1xufVxuLmJvb2stY2FyZC1jb3Zlci1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTk3ZGVnLFxuICAgIHJnYmEoNDUsIDE2MiwgMjU1LCAxKSAwJSxcbiAgICByZ2JhKDEwNSwgMjM1LCAyMjIsIDEpIDEwMCVcbiAgKTtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYm9vay1jYXJkLWNvdmVyLXRpdGxlIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDEpO1xuICBvcGFjaXR5OiAxO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDE1cHg7XG5cbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjNjY2O1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTUwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTE1cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTA2cHg7XG4gIGhlaWdodDogMzhweDtcbn1cblxuLmRyb3Atb3Zlci1pbmZvIHtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM0MjJkMmQ0NDtcbiAgYm94LXNoYWRvdzogMCAwIDc0cHggMTVweCAjMWQxYTFhYmQ7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookCardsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-lib-book-cards',
            templateUrl: './book-cards.component.html',
            styleUrls: ['./book-cards.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
          }, {
            type: _services_library_service__WEBPACK_IMPORTED_MODULE_4__["LibraryService"]
          }];
        }, {
          books: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "80Xm":
    /*!******************************************************!*\
      !*** ./src/app/library/filters/filters.component.ts ***!
      \******************************************************/

    /*! exports provided: FiltersComponent */

    /***/
    function Xm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltersComponent", function () {
        return FiltersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var FiltersComponent = /*#__PURE__*/function () {
        function FiltersComponent() {
          _classCallCheck(this, FiltersComponent);
        }

        _createClass(FiltersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FiltersComponent;
      }();

      FiltersComponent.ɵfac = function FiltersComponent_Factory(t) {
        return new (t || FiltersComponent)();
      };

      FiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FiltersComponent,
        selectors: [["app-lib-filters"]],
        decls: 12,
        vars: 0,
        consts: [[1, "lib-filters"], [1, "lib-filters-group"], [1, "lib-filters-subtitle"], [1, "lib-filters-item", "active"], [1, "lib-filters-item"]],
        template: function FiltersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Library ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "local_library");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " All books ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Favorites ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
        styles: [".lib-filters[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 48px;\n  width: 180px;\n  height: calc(100% - 47px);\n  font-family: system-ui;\n}\n\n.lib-filters-group[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.lib-filters-group[_ngcontent-%COMP%]   .lib-filters-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #999;\n  margin: 10px;\n}\n\n.lib-filters-group[_ngcontent-%COMP%]   .lib-filters-item[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 8px 12px;\n  border-radius: 4px;\n}\n\n.lib-filters-group[_ngcontent-%COMP%]   .lib-filters-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  height: 1.1rem;\n}\n\n.lib-filters-group[_ngcontent-%COMP%]   .lib-filters-item.active[_ngcontent-%COMP%] {\n  background-color: #eeeeee66;\n}\n\n.lib-filters-group[_ngcontent-%COMP%]   .lib-filters-item[_ngcontent-%COMP%]:hover {\n  background-color: #eeeeeeaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBQU47O0FBR0k7RUFDRSwyQkFBQTtBQUROOztBQUlJO0VBQ0UsMkJBQUE7QUFGTiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpYi1maWx0ZXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDQ4cHg7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0N3B4KTtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbn1cblxuLmxpYi1maWx0ZXJzLWdyb3VwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICAubGliLWZpbHRlcnMtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC5saWItZmlsdGVycy1pdGVtIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgIG1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgaGVpZ2h0OiAxLjFyZW07XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTY2O1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZWFhO1xuICAgIH1cbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiltersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-lib-filters',
            templateUrl: './filters.component.html',
            styleUrls: ['./filters.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "A9dn":
    /*!********************************!*\
      !*** ./src/app/models/Book.ts ***!
      \********************************/

    /*! exports provided: Book */

    /***/
    function A9dn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Book", function () {
        return Book;
      });

      var Book = function Book(key, name, author, description, md5, cover) {
        _classCallCheck(this, Book);

        this.key = key; // 数据库的键

        this.name = name; // 书籍名

        this.author = author; // 作者

        this.description = description; // 书籍的描述

        this.md5 = md5; // epub的md5值，防止重复导入

        this.cover = cover;
      };
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Cxl7":
    /*!******************************************!*\
      !*** ./src/app/config/config.service.ts ***!
      \******************************************/

    /*! exports provided: ConfigService */

    /***/
    function Cxl7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
        return ConfigService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); // import * as localforage from 'localforage';


      var ConfigService = /*#__PURE__*/function () {
        function ConfigService() {
          _classCallCheck(this, ConfigService);

          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](['', null]);
        }

        _createClass(ConfigService, [{
          key: "save",
          value: function save() {}
        }, {
          key: "load",
          value: function load() {}
        }, {
          key: "setItem",
          value: function setItem(key, value) {
            localStorage.setItem(key, value);
            this.subject.next([key, value]);
          }
        }, {
          key: "getItem",
          value: function getItem(key) {
            return localStorage.getItem(key);
          }
        }, {
          key: "listen",
          value: function listen(key) {
            return this.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (item) {
              return item[0] === key;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) {
              return item[1];
            }));
          }
        }, {
          key: "getReadingSettings",
          value: function getReadingSettings() {
            return {
              theme: this.getItem('reader.theme'),
              pageMode: this.getItem('reader.pageMode'),
              pageScale: this.getItem('reader.pageScale'),
              fontFamily: this.getItem('reader.fontFamily'),
              fontSize: this.getItem('reader.fontSize'),
              lineHeight: this.getItem('reader.lineHeight')
            };
          }
        }]);

        return ConfigService;
      }();

      ConfigService.ɵfac = function ConfigService_Factory(t) {
        return new (t || ConfigService)();
      };

      ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ConfigService,
        factory: ConfigService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "DxHS":
    /*!****************************************************************!*\
      !*** ./src/app/library/import-books/import-books.component.ts ***!
      \****************************************************************/

    /*! exports provided: ImportBooksComponent */

    /***/
    function DxHS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImportBooksComponent", function () {
        return ImportBooksComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_library_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/library.service */
      "Ut00");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-file-drop */
      "ZRew");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");

      function ImportBooksComponent_ng_template_4_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Drag epub files here");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "or you can selec files...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Select files on your device ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ImportBooksComponent_ng_template_4_div_0_Template_input_change_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r5.importBookFromLocal($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ImportBooksComponent_ng_template_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Uplading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-progress-bar", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.uploadProgress);
        }
      }

      function ImportBooksComponent_ng_template_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ready ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ImportBooksComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ImportBooksComponent_ng_template_4_div_0_Template, 8, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ImportBooksComponent_ng_template_4_div_1_Template, 4, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ImportBooksComponent_ng_template_4_div_2_Template, 2, 0, "div", 8);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.status === "waiting");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.status === "uploading");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.status === "ready");
        }
      }

      var ImportBooksComponent = /*#__PURE__*/function () {
        function ImportBooksComponent(libraryService, dialogRef) {
          _classCallCheck(this, ImportBooksComponent);

          this.libraryService = libraryService;
          this.dialogRef = dialogRef;
          this.data = {};
          this.isFileOver = false;
          this.status = 'waiting';
          this.uploadProgress = 0;
        }

        _createClass(ImportBooksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "importBookFromLocal",
          value: function importBookFromLocal(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var file;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      file = event.target.files[0];
                      _context2.next = 3;
                      return this.libraryService.importBookFile(file);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "droped",
          value: function droped(files) {
            var _this3 = this;

            this.isFileOver = false;
            this.status = 'uploading';
            this.uploadProgress = 0;
            var importedCount = 1;
            var ratio = 1 / files.length;

            var _iterator2 = _createForOfIteratorHelper(files),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var droppedFile = _step2.value;

                // Is it a file?
                if (droppedFile.fileEntry.isFile) {
                  var fileEntry = droppedFile.fileEntry;
                  fileEntry.file(function (file) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                      var _this4 = this;

                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _context3.next = 2;
                              return this.libraryService.importBookFile(file, function (percent) {
                                _this4.uploadProgress = importedCount * ratio + percent / 100 * ratio;
                              });

                            case 2:
                              importedCount += 1;

                              if (importedCount >= files.length) {
                                this.status = 'ready';
                                this.close();
                              }

                            case 4:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3, this);
                    }));
                  });
                } else {// It was a directory (empty directories are added, otherwise only files)
                  // const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
                  // console.log(droppedFile.relativePath, fileEntry);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }, {
          key: "fileOver",
          value: function fileOver() {
            this.isFileOver = true;
          }
        }, {
          key: "fileLeave",
          value: function fileLeave() {
            this.isFileOver = false;
          }
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);

        return ImportBooksComponent;
      }();

      ImportBooksComponent.ɵfac = function ImportBooksComponent_Factory(t) {
        return new (t || ImportBooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_library_service__WEBPACK_IMPORTED_MODULE_2__["LibraryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]));
      };

      ImportBooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ImportBooksComponent,
        selectors: [["app-import-books"]],
        decls: 8,
        vars: 1,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 3, "ngClass"], ["dropZoneLabel", "Drop files here", "dropZoneClassName", "import-books-drop-zone-class", "contentClassName", "import-books-drop-zone-content-class", "accept", ".epub", 3, "onFileDrop", "onFileOver", "onFileLeave"], ["ngx-file-drop-content-tmp", ""], ["mat-dialog-actions", ""], ["mat-flat-button", "", "mat-dialog-close", ""], ["class", "hint-and-actions", 4, "ngIf"], ["class", "uploading", 4, "ngIf"], ["class", "ready", 4, "ngIf"], [1, "hint-and-actions"], ["mat-flat-button", "", "color", "accent"], ["type", "file", 1, "hidden-file-input", 3, "change"], [1, "uploading"], ["mode", "determinate", 3, "value"], [1, "ready"]],
        template: function ImportBooksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Files");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngx-file-drop", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onFileDrop", function ImportBooksComponent_Template_ngx_file_drop_onFileDrop_3_listener($event) {
              return ctx.droped($event);
            })("onFileOver", function ImportBooksComponent_Template_ngx_file_drop_onFileOver_3_listener() {
              return ctx.fileOver();
            })("onFileLeave", function ImportBooksComponent_Template_ngx_file_drop_onFileLeave_3_listener() {
              return ctx.fileLeave();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ImportBooksComponent_ng_template_4_Template, 3, 3, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isFileOver ? "file-over" : "");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__["NgxFileDropComponent"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__["NgxFileDropContentTemplateDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\ndiv[mat-dialog-content][_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.hidden-file-input[_ngcontent-%COMP%] {\n  background: transparent;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n}\n\n.hint-and-actions[_ngcontent-%COMP%], .uploading[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: auto;\n}\n\n.hint-and-actions[_ngcontent-%COMP%] {\n  color: #80808066;\n}\n\n.uploading[_ngcontent-%COMP%] {\n  width: calc(100% - 48px);\n}\n\n.uploading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: gray;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9pbXBvcnQtYm9va3MvaW1wb3J0LWJvb2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUFDSjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvaW1wb3J0LWJvb2tzL2ltcG9ydC1ib29rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5kaXZbbWF0LWRpYWxvZy1jb250ZW50XSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmhpZGRlbi1maWxlLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbn1cblxuLmhpbnQtYW5kLWFjdGlvbnMsIC51cGxvYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmhpbnQtYW5kLWFjdGlvbnMge1xuICBjb2xvcjogIzgwODA4MDY2O1xufVxuXG4udXBsb2FkaW5nIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpO1xuICBkaXYge1xuICAgIGNvbG9yOiBncmF5O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImportBooksComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-import-books',
            templateUrl: './import-books.component.html',
            styleUrls: ['./import-books.component.scss']
          }]
        }], function () {
          return [{
            type: _services_library_service__WEBPACK_IMPORTED_MODULE_2__["LibraryService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HMgo":
    /*!********************************************!*\
      !*** ./src/app/reader/reader.component.ts ***!
      \********************************************/

    /*! exports provided: ReaderComponent */

    /***/
    function HMgo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReaderComponent", function () {
        return ReaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_ReadingProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/ReadingProgress */
      "y1n2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../message.service */
      "OdHV");
      /* harmony import */


      var _reading_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reading-location.service */
      "MiC4");
      /* harmony import */


      var _reader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reader.service */
      "lHTR");
      /* harmony import */


      var _config_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../config/config.service */
      "Cxl7");
      /* harmony import */


      var _mouse_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./mouse.service */
      "q0wl");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _background_background_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./background/background.component */
      "czT2");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "Luio");

      var ReaderComponent = /*#__PURE__*/function () {
        function ReaderComponent(route, msgService, rlService, readerService, configService, mouseService) {
          _classCallCheck(this, ReaderComponent);

          this.route = route;
          this.msgService = msgService;
          this.rlService = rlService;
          this.readerService = readerService;
          this.configService = configService;
          this.mouseService = mouseService;
          this.subscribesForSettings = [];
          this.pageMode = 'continuous';
          this.readingProgress = new _models_ReadingProgress__WEBPACK_IMPORTED_MODULE_2__["ReadingProgress"]();
        }

        _createClass(ReaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var key, settings;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      key = this.route.snapshot.paramMap.get('key'); // this.msgService.startSpinner();

                      settings = this.getSettings();
                      _context4.t0 = this;
                      _context4.next = 5;
                      return this.readerService.openBook(key);

                    case 5:
                      _context4.t1 = _context4.sent;
                      _context4.t2 = this.buildRenderOptions(settings.pageMode);
                      _context4.t3 = settings;

                      _context4.t0.read.call(_context4.t0, _context4.t1, _context4.t2, _context4.t3);

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // 记得，watch settings 变化，避免 read 生成多个 [epub文档dom: 即 .epub-container].
            this.unwatchSettings();
          }
        }, {
          key: "buildRenderOptions",
          value: function buildRenderOptions(pageMode) {
            var options = {
              manager: pageMode === 'continuous' ? 'continuous' : 'default',
              flow: pageMode === 'scroll' ? 'scrolled-doc' : pageMode === 'continuous' ? 'scrolled' : 'auto',
              width: '100%',
              height: '100%',
              snap: true
            }; // console.log('pageMode', this.pageMode);
            // console.log('isSingleMode', this.isSingleMode);
            // console.log('options', options);

            return options;
          }
          /**
           * 监听阅读设置的变化，同步设置到阅读界面
           */

        }, {
          key: "watchSettings",
          value: function watchSettings() {
            var _this5 = this;

            // 去掉之前的监听，避免重复
            this.unwatchSettings();
            this.subscribesForSettings = [this.configService.listen('reader.theme').subscribe(function (theme) {
              _this5.readerService.setTheme(theme);
            }), this.configService.listen('reader.pageMode').subscribe(function (pageMode) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var _this6 = this;

                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if (!(this.pageMode === pageMode)) {
                          _context6.next = 2;
                          break;
                        }

                        return _context6.abrupt("return");

                      case 2:
                        this.pageMode = pageMode;
                        setTimeout(function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                              while (1) {
                                switch (_context5.prev = _context5.next) {
                                  case 0:
                                    // 书籍内容页面模式变更时，需要重新渲染内容，且使用 setTimeout, 将渲染人物排到"浏览器重排"之后
                                    // 书籍内容页面模式变化后，书籍内容页面尺寸发生变化，会引起浏览器重排和重绘
                                    this.read(this.readerService.currentEpub, this.buildRenderOptions(pageMode), this.getSettings());

                                  case 1:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5, this);
                          }));
                        }, 0);

                      case 4:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            }), this.configService.listen('reader.fontSize').subscribe(function (fontSize) {
              _this5.readerService.setFontSize(Number(fontSize));
            }), this.configService.listen('reader.fontFamily').subscribe(function (fontFamily) {
              _this5.readerService.setFontFamily(fontFamily);
            }), this.configService.listen('reader.lineHeight').subscribe(function (lineHeight) {
              _this5.readerService.setLineHeight(Number(lineHeight));
            })];
          }
        }, {
          key: "unwatchSettings",
          value: function unwatchSettings() {
            this.subscribesForSettings.forEach(function (subscription) {
              subscription.unsubscribe();
            });
          }
        }, {
          key: "getSettings",
          value: function getSettings() {
            var settings = this.configService.getReadingSettings();
            this.pageMode = settings.pageMode;
            return settings;
          }
        }, {
          key: "read",
          value: function read(epub, renderOptions, settings) {
            this.msgService.startSpinner();
            this.readingProgress.fetchLocations(epub);
            var pageArea = document.getElementById('page-area'); // 删除原来的渲染结果，避免渲染多个

            pageArea.innerHTML = '';
            epub.renderTo('page-area', renderOptions); // 监听 epub 事件

            this.watchEpub(epub, settings); // 注册鼠标事件

            this.mouseService.bind(epub, !(settings.pageMode === 'single' || settings.pageMode === 'double')); // 设置 阅读设置

            this.readerService.applySettings(epub, settings); // 根据记录的阅读位置显示

            epub.rendition.display(this.rlService.getCfi(this.readerService.currentBook.key) === null ? null : this.rlService.getCfi(this.readerService.currentBook.key).cfi);
          }
        }, {
          key: "watchEpub",
          value: function watchEpub(epub, settings) {
            var _this7 = this;

            // (window as any).rangy.init(); // 初始化
            epub.rendition.on('locationChanged', function () {
              _this7.readerService.touchCurrentChapter(epub); // this.props.handleReadingEpub(epub);
              // this.props.handleOpenMenu(false);


              var currentLocation = epub.rendition.currentLocation();
              var cfi = currentLocation.start.cfi; // this.props.handleShowBookmark(
              //   this.props.bookmarks &&
              //     this.props.bookmarks.filter(
              //       (item: BookmarkModel) => item.cfi === cfi
              //     )[0]
              //     ? true
              //     : false
              // );

              if (_this7.readingProgress.locations) {
                var percentage = _this7.readingProgress.locations.percentageFromCfi(cfi);

                _this7.rlService.recordCfi(_this7.readerService.currentBook.key, cfi, percentage);

                _this7.readingProgress.percentage = percentage;
              }
            });
            epub.rendition.on('rendered', function () {
              // this.setState({ loading: false });
              var iframe = document.getElementsByTagName('iframe')[0];

              if (!iframe) {
                return;
              }

              var doc = iframe.contentDocument;

              if (!doc) {
                return;
              } // 要在第一 read 只后再监听 settings, 避免两次“几乎同时” read,
              // 造成在 [epub 渲染 dom: 即 #page-area] 上生成两个 [epub文档dom: 即 .epub-container].


              _this7.watchSettings(); // ReaderConfig.addDefaultCss();


              _this7.msgService.stopSpinner();
            });
            epub.rendition.on('selected', function (cfiRange, contents) {
              var range = contents.range(cfiRange);
              var rect = range.getBoundingClientRect(); // this.setState({ cfiRange, contents, rect });
            });
          }
        }, {
          key: "isSingleMode",
          get: function get() {
            return this.pageMode !== 'double';
          }
        }]);

        return ReaderComponent;
      }();

      ReaderComponent.ɵfac = function ReaderComponent_Factory(t) {
        return new (t || ReaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_reading_location_service__WEBPACK_IMPORTED_MODULE_5__["ReadingLocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_reader_service__WEBPACK_IMPORTED_MODULE_6__["ReaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_config_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_mouse_service__WEBPACK_IMPORTED_MODULE_8__["MouseService"]));
      };

      ReaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ReaderComponent,
        selectors: [["app-reader"]],
        decls: 4,
        vars: 1,
        consts: [[1, "viewer"], ["id", "page-area", 1, "view-page-area", 3, "ngClass"]],
        template: function ReaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-reader-background");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-reader-buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.isSingleMode ? "single" : "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _background_background_component__WEBPACK_IMPORTED_MODULE_10__["BackgroundComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__["ButtonsComponent"]],
        styles: [".viewer[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.viewer[_ngcontent-%COMP%]   .view-page-area[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 30px;\n  right: 30px;\n  top: 30px;\n  bottom: 30px;\n  \n  z-index: 0;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n          user-select: text;\n}\n.viewer[_ngcontent-%COMP%]   .view-page-area.single[_ngcontent-%COMP%] {\n  left: calc(50vw - 270px);\n  right: calc(50vw - 270px);\n  top: 75px;\n  bottom: 75px;\n}\n.viewer[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.viewer[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZGVyL3JlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQTsrQkFBQTtFQUVBLFVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFDSjtBQUNJO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBQ047QUFHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUROIiwiZmlsZSI6InNyYy9hcHAvcmVhZGVyL3JlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICAudmlldy1wYWdlLWFyZWEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIHRvcDogMzBweDtcbiAgICBib3R0b206IDMwcHg7XG4gICAgLyogd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTsgKi9cbiAgICB6LWluZGV4OiAwO1xuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuXG4gICAgJi5zaW5nbGUge1xuICAgICAgbGVmdDogY2FsYyg1MHZ3IC0gMjcwcHgpO1xuICAgICAgcmlnaHQ6IGNhbGMoNTB2dyAtIDI3MHB4KTtcbiAgICAgIHRvcDogNzVweDtcbiAgICAgIGJvdHRvbTogNzVweDtcbiAgICB9XG4gIH1cblxuICAubmF2LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5uYXYtY29udGVudCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-reader',
            templateUrl: './reader.component.html',
            styleUrls: ['./reader.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
          }, {
            type: _reading_location_service__WEBPACK_IMPORTED_MODULE_5__["ReadingLocationService"]
          }, {
            type: _reader_service__WEBPACK_IMPORTED_MODULE_6__["ReaderService"]
          }, {
            type: _config_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]
          }, {
            type: _mouse_service__WEBPACK_IMPORTED_MODULE_8__["MouseService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Hp81":
    /*!*********************************************!*\
      !*** ./src/app/reader/toc/toc.component.ts ***!
      \*********************************************/

    /*! exports provided: TocComponent */

    /***/
    function Hp81(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TocComponent", function () {
        return TocComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _reader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../reader.service */
      "lHTR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function TocComponent_ng_template_0_li_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TocComponent_ng_template_0_li_1_span_1_Template_mat_icon_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.toggleSubtree(item_r6.href);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "navigate_next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TocComponent_ng_template_0_li_1_div_4_ng_template_1_Template(rf, ctx) {}

      var _c0 = function _c0(a0) {
        return {
          $implicit: a0
        };
      };

      function TocComponent_ng_template_0_li_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TocComponent_ng_template_0_li_1_div_4_ng_template_1_Template, 0, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r6.subitems));
        }
      }

      function TocComponent_ng_template_0_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TocComponent_ng_template_0_li_1_span_1_Template, 3, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TocComponent_ng_template_0_li_1_Template_a_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.jump($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TocComponent_ng_template_0_li_1_div_4_Template, 2, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.subitems.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r6.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.subitems.length > 0 && ctx_r5.openedMenus[item_r6.href]);
        }
      }

      function TocComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TocComponent_ng_template_0_li_1_Template, 5, 4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", list_r3);
        }
      }

      function TocComponent_ng_template_3_Template(rf, ctx) {}

      var TocComponent = /*#__PURE__*/function () {
        function TocComponent(readerService) {
          _classCallCheck(this, TocComponent);

          this.readerService = readerService;
          this.toc = null;
          this.openedMenus = {};
        }

        _createClass(TocComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.readerService.tocSubject.subscribe(function (toc) {
              _this8.toc = toc;
            });
          }
        }, {
          key: "jump",
          value: function jump(event) {
            event.preventDefault();
            var href = event.target.getAttribute('href');
            this.readerService.jump(href);
          }
        }, {
          key: "toggleSubtree",
          value: function toggleSubtree(href) {
            this.openedMenus[href] = !this.openedMenus[href];
          }
        }]);

        return TocComponent;
      }();

      TocComponent.ɵfac = function TocComponent_Factory(t) {
        return new (t || TocComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_reader_service__WEBPACK_IMPORTED_MODULE_1__["ReaderService"]));
      };

      TocComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TocComponent,
        selectors: [["app-reader-toc"]],
        decls: 4,
        vars: 4,
        consts: [["listTemplateRef", ""], [1, "book-content-container"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "book-content"], ["class", "book-content-list", 4, "ngFor", "ngForOf"], [1, "book-content-list"], ["class", "content-dropdown", 4, "ngIf"], [1, "book-content-name", 3, "href", "click"], [4, "ngIf"], [1, "content-dropdown"], [3, "click"]],
        template: function TocComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TocComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TocComponent_ng_template_3_Template, 0, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.toc));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        styles: ["ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  list-style: none;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.book-content-list[_ngcontent-%COMP%] {\n  float: left;\n  width: calc(100% - 20px);\n  margin-left: 18px;\n}\n\n.book-content-name[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 0px;\n  width: 94%;\n  font-size: 14px;\n  line-height: 18px;\n  color: #4b4b4b;\n  opacity: 1;\n  float: left;\n  transition: none;\n  border-bottom: 1px solid rgba(112, 112, 112, 0.1);\n}\n\n.book-subcontent-name[_ngcontent-%COMP%] {\n  display: block;\n  width: 220px;\n  float: left;\n  font-size: 13px;\n  line-height: 20px;\n  color: #4b4b4b;\n  opacity: 0.64;\n  border-bottom: 1px solid rgba(112, 112, 112, 0.1);\n  padding: 8px;\n}\n\n.book-subcontent-list[_ngcontent-%COMP%] {\n  margin-left: 18px;\n}\n\n.content-dropdown[_ngcontent-%COMP%] {\n  width: 0;\n  float: right;\n  margin-top: 8px;\n  position: relative;\n  right: 32px;\n  opacity: 0.3;\n  font-size: 14px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZGVyL3RvYy90b2MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO1VBQUEscUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvcmVhZGVyL3RvYy90b2MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYm9vay1jb250ZW50LWxpc3Qge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBtYXJnaW4tbGVmdDogMThweDtcbn1cbi5ib29rLWNvbnRlbnQtbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgd2lkdGg6IDk0JTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMSk7XG4gIG9wYWNpdHk6IDE7XG4gIGZsb2F0OiBsZWZ0O1xuICB0cmFuc2l0aW9uOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjEpO1xufVxuLmJvb2stc3ViY29udGVudC1uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcblxuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMSk7XG4gIG9wYWNpdHk6IDAuNjQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMSk7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5ib29rLXN1YmNvbnRlbnQtbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xufVxuLmNvbnRlbnQtZHJvcGRvd24ge1xuICB3aWR0aDogMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDMycHg7XG4gIG9wYWNpdHk6IDAuMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TocComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-reader-toc',
            templateUrl: './toc.component.html',
            styleUrls: ['./toc.component.scss']
          }]
        }], function () {
          return [{
            type: _reader_service__WEBPACK_IMPORTED_MODULE_1__["ReaderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Luio":
    /*!*****************************************************!*\
      !*** ./src/app/reader/buttons/buttons.component.ts ***!
      \*****************************************************/

    /*! exports provided: ButtonsComponent */

    /***/
    function Luio(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () {
        return ButtonsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! screenfull */
      "k7+O");
      /* harmony import */


      var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../navigation/navigation.component */
      "rhgw");
      /* harmony import */


      var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../settings/settings.component */
      "5C6Q");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/config/config.service */
      "Cxl7");
      /* harmony import */


      var _reader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../reader.service */
      "lHTR");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var ButtonsComponent = /*#__PURE__*/function () {
        function ButtonsComponent(router, dialog, configService, readerService) {
          var _this9 = this;

          _classCallCheck(this, ButtonsComponent);

          this.router = router;
          this.dialog = dialog;
          this.configService = configService;
          this.readerService = readerService;
          this.isFullscreen = false;
          screenfull__WEBPACK_IMPORTED_MODULE_2__["on"]('change', function (e) {
            _this9.isFullscreen = screenfull__WEBPACK_IMPORTED_MODULE_2__["isFullscreen"];
          });
        }

        _createClass(ButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openNavigation",
          value: function openNavigation() {
            this.dialog.open(_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], {
              autoFocus: false,
              position: {
                top: '40px',
                left: '20px'
              },
              panelClass: ['reading-navigation-dialog-panel'],
              backdropClass: 'reading-navigation-dialog-backdrop',
              width: '340px',
              height: 'calc(100vh - 60px)',
              data: {}
            });
          }
        }, {
          key: "openSettings",
          value: function openSettings() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.dialog.open(_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"], {
                        autoFocus: false,
                        position: {
                          top: '40px',
                          right: '20px'
                        },
                        panelClass: ['reading-settings-dialog-panel'],
                        backdropClass: 'reading-settings-dialog-backdrop',
                        width: '300px',
                        data: {
                          theme: this.configService.getItem('reader.theme'),
                          pageMode: this.configService.getItem('reader.pageMode'),
                          pageScale: this.configService.getItem('reader.pageScale'),
                          fontFamily: this.configService.getItem('reader.fontFamily'),
                          fontSize: this.configService.getItem('reader.fontSize'),
                          lineHeight: this.configService.getItem('reader.lineHeight')
                        }
                      });

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "goLibrary",
          value: function goLibrary() {
            this.router.navigate(['/']);
          }
        }, {
          key: "toggleFullscreen",
          value: function toggleFullscreen() {
            screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
          }
        }, {
          key: "previous",
          value: function previous() {
            this.readerService.prev(this.configService.getItem('reader.pageMode'));
          }
        }, {
          key: "next",
          value: function next() {
            this.readerService.next(this.configService.getItem('reader.pageMode'));
          }
        }]);

        return ButtonsComponent;
      }();

      ButtonsComponent.ɵfac = function ButtonsComponent_Factory(t) {
        return new (t || ButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_reader_service__WEBPACK_IMPORTED_MODULE_8__["ReaderService"]));
      };

      ButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ButtonsComponent,
        selectors: [["app-reader-buttons"]],
        decls: 25,
        vars: 1,
        consts: [[1, "reader-buttons"], [1, "buttons-top-left"], ["mat-icon-button", "", 3, "click"], [1, "buttons-top-right"], [1, "buttons-next-previous"], ["mat-fab", "", 1, "button-previous", 3, "click"], ["mat-fab", "", 1, "button-next", 3, "click"]],
        template: function ButtonsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonsComponent_Template_button_click_2_listener() {
              return ctx.goLibrary();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "local_library");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonsComponent_Template_button_click_5_listener() {
              return ctx.openNavigation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "toc");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonsComponent_Template_button_click_8_listener() {
              return ctx.openNavigation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "notes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonsComponent_Template_button_click_12_listener() {
              return ctx.toggleFullscreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonsComponent_Template_button_click_15_listener() {
              return ctx.openSettings();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonsComponent_Template_button_click_19_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "navigate_before");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonsComponent_Template_button_click_22_listener() {
              return ctx.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "navigate_next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isFullscreen ? "fullscreen_exit" : "fullscreen");
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]],
        styles: ["button[_ngcontent-%COMP%] {\n  color: #ddd3d333;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 12px 0 #ccc;\n}\n.buttons-top-left[_ngcontent-%COMP%], .buttons-top-right[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.buttons-top-left[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%], .buttons-top-right[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  color: #666;\n}\n.buttons-top-left[_ngcontent-%COMP%] {\n  top: 2px;\n  left: 2px;\n}\n.buttons-top-right[_ngcontent-%COMP%] {\n  top: 2px;\n  right: 2px;\n}\n.buttons-next-previous[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n.buttons-next-previous[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  pointer-events: initial;\n  background-color: #cccccc33;\n  color: #ddd;\n  box-shadow: none;\n}\n.buttons-next-previous[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.buttons-next-previous[_ngcontent-%COMP%]   .button-previous[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n}\n.buttons-next-previous[_ngcontent-%COMP%]   .button-next[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZGVyL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7QUFBRTtFQUVFLDJCQUFBO0FBQ0o7QUFHQTs7RUFFRSxrQkFBQTtBQUFGO0FBR0k7O0VBQ0UsV0FBQTtBQUFOO0FBS0E7RUFDRSxRQUFBO0VBQ0EsU0FBQTtBQUZGO0FBS0E7RUFDRSxRQUFBO0VBQ0EsVUFBQTtBQUZGO0FBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQUZGO0FBSUU7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRko7QUFJSTtFQUNFLDJIQUFBO0FBRk47QUFNRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUpKO0FBTUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL3JlYWRlci9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBjb2xvcjogI2RkZDNkMzMzO1xuICAmOmhvdmVyIHtcbiAgICAvLyBjb2xvcjogIzY2NjtcbiAgICBib3gtc2hhZG93OiAwIDAgMTJweCAwICNjY2M7XG4gIH1cbn1cblxuLmJ1dHRvbnMtdG9wLWxlZnQsXG4uYnV0dG9ucy10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICY6aG92ZXIge1xuICAgIC8vIGJveC1zaGFkb3c6IDAgMCAxMnB4IDAgI2NjYztcbiAgICBidXR0b24ge1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgfVxuICB9XG59XG5cbi5idXR0b25zLXRvcC1sZWZ0IHtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDJweDtcbn1cblxuLmJ1dHRvbnMtdG9wLXJpZ2h0IHtcbiAgdG9wOiAycHg7XG4gIHJpZ2h0OiAycHg7XG59XG5cbi5idXR0b25zLW5leHQtcHJldmlvdXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICBidXR0b24ge1xuICAgIHBvaW50ZXItZXZlbnRzOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2MzMztcbiAgICBjb2xvcjogI2RkZDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMilcbiAgICB9XG4gIH1cblxuICAuYnV0dG9uLXByZXZpb3VzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTBweDtcbiAgfVxuICAuYnV0dG9uLW5leHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ButtonsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-reader-buttons',
            templateUrl: './buttons.component.html',
            styleUrls: ['./buttons.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: src_app_config_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]
          }, {
            type: _reader_service__WEBPACK_IMPORTED_MODULE_8__["ReaderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MiC4":
    /*!****************************************************!*\
      !*** ./src/app/reader/reading-location.service.ts ***!
      \****************************************************/

    /*! exports provided: ReadingLocationService */

    /***/
    function MiC4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReadingLocationService", function () {
        return ReadingLocationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReadingLocationService = /*#__PURE__*/function () {
        function ReadingLocationService() {
          _classCallCheck(this, ReadingLocationService);
        }

        _createClass(ReadingLocationService, [{
          key: "recordCfi",
          value: function recordCfi(bookKey, cfi, percentage) {
            var json = localStorage.getItem('readingLocation');
            var obj = JSON.parse(json) || {};
            obj[bookKey] = {
              cfi: cfi,
              percentage: percentage
            };
            localStorage.setItem('readingLocation', JSON.stringify(obj));
          }
        }, {
          key: "getCfi",
          value: function getCfi(bookKey) {
            var json = localStorage.getItem('readingLocation');
            var obj = JSON.parse(json) || {};
            return obj[bookKey] || {};
          }
        }, {
          key: "clear",
          value: function clear(bookKey) {
            var json = localStorage.getItem('readingLocation');
            var obj = JSON.parse(json) || {};
            delete obj[bookKey];
            localStorage.setItem('readingLocation', JSON.stringify(obj));
          }
        }]);

        return ReadingLocationService;
      }();

      ReadingLocationService.ɵfac = function ReadingLocationService_Factory(t) {
        return new (t || ReadingLocationService)();
      };

      ReadingLocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ReadingLocationService,
        factory: ReadingLocationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReadingLocationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "NG6S":
    /*!**********************************************!*\
      !*** ./src/app/library/library.component.ts ***!
      \**********************************************/

    /*! exports provided: LibraryComponent */

    /***/
    function NG6S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LibraryComponent", function () {
        return LibraryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_library_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/library.service */
      "Ut00");
      /* harmony import */


      var _book_cards_book_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./book-cards/book-cards.component */
      "5Zo4");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "rLXC");
      /* harmony import */


      var _filters_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./filters/filters.component */
      "80Xm");

      var LibraryComponent = /*#__PURE__*/function () {
        function LibraryComponent(libraryService) {
          var _this10 = this;

          _classCallCheck(this, LibraryComponent);

          this.libraryService = libraryService;
          this.books = [];
          this.libraryService.booksSubject.subscribe(function (books) {
            _this10.books = books;
            console.log('books', books);
          });
        }

        _createClass(LibraryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LibraryComponent;
      }();

      LibraryComponent.ɵfac = function LibraryComponent_Factory(t) {
        return new (t || LibraryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_library_service__WEBPACK_IMPORTED_MODULE_1__["LibraryService"]));
      };

      LibraryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LibraryComponent,
        selectors: [["app-library"]],
        decls: 4,
        vars: 1,
        consts: [[1, "library"], [3, "books"]],
        template: function LibraryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-lib-book-cards", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-lib-buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-lib-filters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("books", ctx.books);
          }
        },
        directives: [_book_cards_book_cards_component__WEBPACK_IMPORTED_MODULE_2__["BookCardsComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"], _filters_filters_component__WEBPACK_IMPORTED_MODULE_4__["FiltersComponent"]],
        styles: [".library[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9saWJyYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvbGlicmFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saWJyYXJ5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibraryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-library',
            templateUrl: './library.component.html',
            styleUrls: ['./library.component.scss']
          }]
        }], function () {
          return [{
            type: _services_library_service__WEBPACK_IMPORTED_MODULE_1__["LibraryService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "OdHV":
    /*!************************************!*\
      !*** ./src/app/message.service.ts ***!
      \************************************/

    /*! exports provided: MessageService */

    /***/
    function OdHV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageService", function () {
        return MessageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var MessageService = /*#__PURE__*/function () {
        function MessageService(snackBar, ngZone) {
          _classCallCheck(this, MessageService);

          this.snackBar = snackBar;
          this.ngZone = ngZone;
          this.spinnerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        }

        _createClass(MessageService, [{
          key: "message",
          value: function message(msg) {
            var _this11 = this;

            console.log('MSG::', msg);
            this.ngZone.run(function () {
              _this11.snackBar.open(msg, '', {
                duration: 500,
                horizontalPosition: 'right',
                verticalPosition: 'bottom'
              });
            });
          }
        }, {
          key: "startSpinner",
          value: function startSpinner(msg) {
            console.log('START SPINNER::', msg);
            this.spinnerSubject.next(true);
          }
        }, {
          key: "stopSpinner",
          value: function stopSpinner() {
            var _this12 = this;

            console.log('STOP SPINNER::');
            this.ngZone.run(function () {
              _this12.spinnerSubject.next(false);
            });
          }
        }]);

        return MessageService;
      }();

      MessageService.ɵfac = function MessageService_Factory(t) {
        return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MessageService,
        factory: MessageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./message.service */
      "OdHV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function AppComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AppComponent = function AppComponent(msgService) {
        var _this13 = this;

        _classCallCheck(this, AppComponent);

        this.msgService = msgService;
        this.title = 'immerse';
        this.showSpinner = false;
        this.msgService.spinnerSubject.subscribe(function (show) {
          _this13.showSpinner = show;
        });
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 1,
        consts: [["class", "app-spinner", 4, "ngIf"], [1, "app-spinner"], ["strokeWidth", "2"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"]],
        styles: [".app-spinner[_ngcontent-%COMP%] {\n  z-index: 999;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fafafa99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSwyQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1zcGlubmVyIHtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTk5O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Ut00":
    /*!*****************************************************!*\
      !*** ./src/app/library/services/library.service.ts ***!
      \*****************************************************/

    /*! exports provided: LibraryService */

    /***/
    function Ut00(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LibraryService", function () {
        return LibraryService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var localforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! localforage */
      "oAJy");
      /* harmony import */


      var localforage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var spark_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! spark-md5 */
      "aaBP");
      /* harmony import */


      var spark_md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_models_Book__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/Book */
      "A9dn");
      /* harmony import */


      var src_app_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/message.service */
      "OdHV");

      var LibraryService = /*#__PURE__*/function () {
        function LibraryService(msgService) {
          _classCallCheck(this, LibraryService);

          this.msgService = msgService;
          this.ePub = window.ePub;
          this.booksIsLoaded = false;
          this.books = [];
          this.booksSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
          this.loadBooks();
        }

        _createClass(LibraryService, [{
          key: "addBook",
          value: function addBook(book) {
            this.books = (this.books || []).concat([book]);
            this.booksSubject.next(this.books);
            localforage__WEBPACK_IMPORTED_MODULE_2__["setItem"]('books', this.books);
          }
        }, {
          key: "getBooks",
          value: function getBooks() {
            return this.books;
          }
        }, {
          key: "getBook",
          value: function getBook(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var books;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (!this.booksIsLoaded) {
                        _context8.next = 4;
                        break;
                      }

                      return _context8.abrupt("return", this.books.find(function (book) {
                        return book.key === key;
                      }));

                    case 4:
                      _context8.next = 6;
                      return this.loadBooks();

                    case 6:
                      _context8.t0 = _context8.sent;

                      if (_context8.t0) {
                        _context8.next = 9;
                        break;
                      }

                      _context8.t0 = [];

                    case 9:
                      books = _context8.t0;
                      return _context8.abrupt("return", books.find(function (book) {
                        return book.key === key;
                      }));

                    case 11:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "bookExists",
          value: function bookExists(md5) {
            if (typeof md5 !== 'string') {
              md5 = md5.md5;
            }

            return this.books.some(function (book) {
              return book.md5 === md5;
            });
          }
        }, {
          key: "loadBooks",
          value: function loadBooks() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.msgService.startSpinner();
                      _context9.next = 3;
                      return localforage__WEBPACK_IMPORTED_MODULE_2__["getItem"]('books');

                    case 3:
                      _context9.t0 = _context9.sent;

                      if (_context9.t0) {
                        _context9.next = 6;
                        break;
                      }

                      _context9.t0 = [];

                    case 6:
                      this.books = _context9.t0;
                      this.booksSubject.next(this.books);
                      this.booksIsLoaded = true;
                      this.msgService.stopSpinner();
                      return _context9.abrupt("return", this.books);

                    case 11:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "importBookFile",
          value: function importBookFile(file) {
            var progressCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (p) {};
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.doIncrementalTest(file, progressCallback);

                    case 2:
                      return _context10.abrupt("return", _context10.sent);

                    case 3:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          } // 获取书籍md5

        }, {
          key: "doIncrementalTest",
          value: function doIncrementalTest(file, progressCallback) {
            var _this14 = this;

            return new Promise(function (resolve, reject) {
              // 这里假设直接将文件选择框的dom引用传入
              // 这里需要用到File的slice( )方法，以下是兼容写法
              var fileName = file.name.split('.');
              var extension = fileName[fileName.length - 1];

              if (extension === 'epub') {
                var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
                var chunkSize = 2097152; // 以每片2MB大小来逐次读取

                var chunks = Math.ceil(file.size / chunkSize);
                var currentChunk = 0;
                var spark = new spark_md5__WEBPACK_IMPORTED_MODULE_4__(); // 创建SparkMD5的实例

                var fileReader = new FileReader();

                fileReader.onload = function (e) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                    var md5;
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            if (e.target) {
                              _context11.next = 3;
                              break;
                            }

                            reject();
                            throw new Error();

                          case 3:
                            spark.appendBinary(e.target.result); // append array buffer

                            currentChunk += 1;

                            if (!(currentChunk < chunks)) {
                              _context11.next = 10;
                              break;
                            }

                            progressCallback(currentChunk / chunks);
                            loadNext();
                            _context11.next = 17;
                            break;

                          case 10:
                            md5 = spark.end(); // 完成计算，返回结果

                            progressCallback(100);
                            _context11.t0 = resolve;
                            _context11.next = 15;
                            return this.storeFileAndCreateBook(file, md5);

                          case 15:
                            _context11.t1 = _context11.sent;
                            (0, _context11.t0)(_context11.t1);

                          case 17:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11, this);
                  }));
                };

                var loadNext = function loadNext() {
                  var start = currentChunk * chunkSize;
                  var end = start + chunkSize >= file.size ? file.size : start + chunkSize;
                  fileReader.readAsBinaryString(blobSlice.call(file, start, end));
                };

                loadNext();
              } else {
                _this14.msgService.message('Import Failed: not epub file');

                reject();
              }
            });
          }
        }, {
          key: "storeFileAndCreateBook",
          value: function storeFileAndCreateBook(file, md5) {
            var _this15 = this;

            return new Promise(function (resolve, reject) {
              // md5 重复不导入
              if (_this15.bookExists(md5)) {
                _this15.msgService.message('Duplicate Book');

                return resolve([null, null]);
              } // 解析图书，获取图书数据


              var reader = new FileReader();
              reader.readAsArrayBuffer(file);

              reader.onload = function (e) {
                if (!e.target) {
                  _this15.msgService.message('Import Failed');

                  reject();
                  throw new Error();
                }

                var epub = _this15.ePub(e.target.result);

                epub.loaded.metadata.then(function (metadata) {
                  if (!e.target) {
                    _this15.msgService.message('Import Failed: no metadata');

                    reject();
                    throw new Error();
                  }

                  epub.coverUrl().then(function (url) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                      var _this16 = this;

                      var createBook, coverReader, blob;
                      return regeneratorRuntime.wrap(function _callee14$(_context14) {
                        while (1) {
                          switch (_context14.prev = _context14.next) {
                            case 0:
                              createBook = function createBook(cover) {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                                  var _ref, name, author, description, key, book;

                                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                                    while (1) {
                                      switch (_context12.prev = _context12.next) {
                                        case 0:
                                          _ref = [metadata.title, metadata.creator, metadata.description], name = _ref[0], author = _ref[1], description = _ref[2];
                                          key = new Date().getTime() + '';
                                          book = new src_app_models_Book__WEBPACK_IMPORTED_MODULE_5__["Book"](key, name, author, description, md5, cover); // await this.handleAddBook(book);

                                          this.addBook(book);
                                          localforage__WEBPACK_IMPORTED_MODULE_2__["setItem"](key, e.target.result);
                                          resolve([epub, book]);

                                        case 6:
                                        case "end":
                                          return _context12.stop();
                                      }
                                    }
                                  }, _callee12, this);
                                }));
                              };

                              if (!url) {
                                _context14.next = 11;
                                break;
                              }

                              coverReader = new FileReader();
                              _context14.next = 5;
                              return fetch(url).then(function (r) {
                                return r.blob();
                              });

                            case 5:
                              blob = _context14.sent;
                              coverReader.readAsDataURL(blob);
                              console.log(url, 'url');

                              coverReader.onloadend = function () {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                                    while (1) {
                                      switch (_context13.prev = _context13.next) {
                                        case 0:
                                          _context13.next = 2;
                                          return createBook(coverReader.result);

                                        case 2:
                                        case "end":
                                          return _context13.stop();
                                      }
                                    }
                                  }, _callee13);
                                }));
                              };

                              _context14.next = 13;
                              break;

                            case 11:
                              _context14.next = 13;
                              return createBook('noCover');

                            case 13:
                            case "end":
                              return _context14.stop();
                          }
                        }
                      }, _callee14);
                    }));
                  })["catch"](function (err) {
                    console.log(err, 'err');
                    reject();
                  });
                })["catch"](function () {
                  _this15.msgService.message('Import Failed'); // this.props.handleMessageBox(true);


                  reject();
                });
              };
            });
          }
        }]);

        return LibraryService;
      }();

      LibraryService.ɵfac = function LibraryService_Factory(t) {
        return new (t || LibraryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]));
      };

      LibraryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LibraryService,
        factory: LibraryService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LibraryService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: src_app_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _library_library_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./library/library.module */
      "wiMD");
      /* harmony import */


      var _reader_reader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./reader/reader.module */
      "/KRI");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"], _library_library_module__WEBPACK_IMPORTED_MODULE_7__["LibraryModule"], _reader_reader_module__WEBPACK_IMPORTED_MODULE_8__["ReaderModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"], _library_library_module__WEBPACK_IMPORTED_MODULE_7__["LibraryModule"], _reader_reader_module__WEBPACK_IMPORTED_MODULE_8__["ReaderModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"], _library_library_module__WEBPACK_IMPORTED_MODULE_7__["LibraryModule"], _reader_reader_module__WEBPACK_IMPORTED_MODULE_8__["ReaderModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "czT2":
    /*!***********************************************************!*\
      !*** ./src/app/reader/background/background.component.ts ***!
      \***********************************************************/

    /*! exports provided: BackgroundComponent */

    /***/
    function czT2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function () {
        return BackgroundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/config/config.service */
      "Cxl7");
      /* harmony import */


      var _reader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../reader.service */
      "lHTR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function BackgroundComponent_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.bookName);
        }
      }

      function BackgroundComponent_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u7B2C ", ctx_r1.rightPage, " \u9875");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var BackgroundComponent = /*#__PURE__*/function () {
        function BackgroundComponent(configService, readerService, changeDetectorRef) {
          _classCallCheck(this, BackgroundComponent);

          this.configService = configService;
          this.readerService = readerService;
          this.changeDetectorRef = changeDetectorRef;
          this.backgroundColor = '';
          this.bookName = '';
          this.chapter = '';
          this.leftPage = '';
          this.rightPage = '';
        }

        _createClass(BackgroundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.watchSettings();
            this.watchInfo();
            this.backgroundColor = this.configService.getItem('reader.theme');
            this.pageMode = this.configService.getItem('reader.pageMode');
          }
        }, {
          key: "watchSettings",
          value: function watchSettings() {
            var _this17 = this;

            this.configService.listen('reader.theme').subscribe(function (theme) {
              _this17.backgroundColor = theme;
            });
            this.configService.listen('reader.pageMode').subscribe(function (pageMode) {
              _this17.pageMode = pageMode;
            });
          }
        }, {
          key: "watchInfo",
          value: function watchInfo() {
            var _this18 = this;

            this.readerService.bookSubject.subscribe(function (book) {
              _this18.bookName = book.name;
            });
            this.readerService.chapterSubject.subscribe(function (chapter) {
              _this18.chapter = chapter; // see: https://zhuanlan.zhihu.com/p/100038957

              _this18.changeDetectorRef.detectChanges();
            });
            this.readerService.leftPageSubject.subscribe(function (leftPage) {
              _this18.leftPage = leftPage;
            });
            this.readerService.rightPageSubject.subscribe(function (rightPage) {
              _this18.rightPage = rightPage;
              document.documentElement.click();
            });
          }
        }, {
          key: "isSingleMode",
          get: function get() {
            return this.pageMode !== 'double';
          }
        }]);

        return BackgroundComponent;
      }();

      BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) {
        return new (t || BackgroundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_reader_service__WEBPACK_IMPORTED_MODULE_2__["ReaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      BackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BackgroundComponent,
        selectors: [["app-reader-background"]],
        decls: 8,
        vars: 9,
        consts: [[1, "reader-background", 3, "ngClass", "ngStyle"], [1, "progress-chapter-name", 3, "ngClass"], ["class", "progress-book-name", 4, "ngIf"], [1, "background-page-left"], ["class", "background-page-right", 4, "ngIf"], [1, "background-box1"], [1, "progress-book-name"], [1, "background-page-right"]],
        template: function BackgroundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BackgroundComponent_p_3_Template, 2, 1, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BackgroundComponent_p_6_Template, 2, 1, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isSingleMode ? "single" : "")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.backgroundColor));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.chapter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.chapter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSingleMode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u7B2C ", ctx.leftPage, " \u9875");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSingleMode);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: [".reader-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  box-sizing: border-box;\n  z-index: -10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.progress-chapter-name[_ngcontent-%COMP%], .progress-book-name[_ngcontent-%COMP%] {\n  width: 540px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  position: absolute;\n  top: 5px;\n  line-height: 30px;\n  color: #bfbfbf;\n  text-align: center;\n}\n\n.progress-chapter-name[_ngcontent-%COMP%] {\n  left: calc(25% - 270px);\n}\n\n.single[_ngcontent-%COMP%]   .progress-chapter-name[_ngcontent-%COMP%] {\n  left: calc(50% - 270px);\n}\n\n.progress-book-name[_ngcontent-%COMP%] {\n  right: calc(25% - 270px);\n}\n\n.background-page-left[_ngcontent-%COMP%], .background-page-right[_ngcontent-%COMP%] {\n  width: 540px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  position: absolute;\n  bottom: 10px;\n  line-height: 30px;\n  color: #bfbfbf;\n  text-align: center;\n  font-size: 14px;\n}\n\n.background-page-left[_ngcontent-%COMP%] {\n  left: calc(25% - 270px);\n}\n\n.single[_ngcontent-%COMP%]   .background-page-left[_ngcontent-%COMP%] {\n  left: calc(50% - 270px);\n}\n\n.background-page-right[_ngcontent-%COMP%] {\n  right: calc(25% - 270px);\n}\n\n.background-box1[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 5px;\n  right: 5px;\n  top: 5px;\n  bottom: 5px;\n  z-index: 0;\n}\n\n.single[_ngcontent-%COMP%]   .background-box1[_ngcontent-%COMP%] {\n  left: calc(50vw - 270px);\n  right: calc(50vw - 270px);\n  box-shadow: 0 0 5px rgba(191, 191, 191, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZGVyL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtBQUVGOztBQURFO0VBQ0UsdUJBQUE7QUFHSjs7QUFBQTtFQUNFLHdCQUFBO0FBR0Y7O0FBREE7O0VBRUUsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0UsdUJBQUE7QUFLRjs7QUFKRTtFQUNFLHVCQUFBO0FBTUo7O0FBSEE7RUFDRSx3QkFBQTtBQU1GOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQU1GOztBQUpFO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUVBLDRDQUFBO0FBS0oiLCJmaWxlIjoic3JjL2FwcC9yZWFkZXIvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlYWRlci1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgei1pbmRleDogLTEwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2dyZXNzLWNoYXB0ZXItbmFtZSxcbi5wcm9ncmVzcy1ib29rLW5hbWUge1xuICB3aWR0aDogNTQwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6IHJnYmEoMTkxLCAxOTEsIDE5MSwgMSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9ncmVzcy1jaGFwdGVyLW5hbWUge1xuICBsZWZ0OiBjYWxjKDI1JSAtIDI3MHB4KTtcbiAgLnNpbmdsZSAmIHtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDI3MHB4KTtcbiAgfVxufVxuLnByb2dyZXNzLWJvb2stbmFtZSB7XG4gIHJpZ2h0OiBjYWxjKDI1JSAtIDI3MHB4KTtcbn1cbi5iYWNrZ3JvdW5kLXBhZ2UtbGVmdCxcbi5iYWNrZ3JvdW5kLXBhZ2UtcmlnaHQge1xuICB3aWR0aDogNTQwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiByZ2JhKDE5MSwgMTkxLCAxOTEsIDEpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5iYWNrZ3JvdW5kLXBhZ2UtbGVmdCB7XG4gIGxlZnQ6IGNhbGMoMjUlIC0gMjcwcHgpO1xuICAuc2luZ2xlICYge1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjcwcHgpO1xuICB9XG59XG4uYmFja2dyb3VuZC1wYWdlLXJpZ2h0IHtcbiAgcmlnaHQ6IGNhbGMoMjUlIC0gMjcwcHgpO1xufVxuXG4uYmFja2dyb3VuZC1ib3gxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xuICBib3R0b206IDVweDtcbiAgei1pbmRleDogMDtcblxuICAuc2luZ2xlICYge1xuICAgIGxlZnQ6IGNhbGMoNTB2dyAtIDI3MHB4KTtcbiAgICByaWdodDogY2FsYyg1MHZ3IC0gMjcwcHgpO1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTkxLCAxOTEsIDE5MSwgMSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDE5MSwgMTkxLCAxOTEsIDAuNSk7XG4gIH1cbn1cbi8vIC5iYWNrZ3JvdW5kLWJveDIge1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGxlZnQ6IDdweDtcbi8vICAgcmlnaHQ6IDdweDtcbi8vICAgdG9wOiA1cHg7XG4vLyAgIGJvdHRvbTogNXB4O1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE5MSwgMTkxLCAxOTEsIDEpO1xuLy8gICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMTkxLCAxOTEsIDE5MSwgMSk7XG4vLyAgIHotaW5kZXg6IDE7XG4vLyB9XG4vLyAuYmFja2dyb3VuZC1ib3gzIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICBsZWZ0OiA5cHg7XG4vLyAgIHJpZ2h0OiA5cHg7XG4vLyAgIHRvcDogNXB4O1xuLy8gICBib3R0b206IDVweDtcbi8vICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTEsIDE5MSwgMTkxLCAxKTtcbi8vICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDE5MSwgMTkxLCAxOTEsIDEpO1xuLy8gICB6LWluZGV4OiAyO1xuLy8gICAvKiBkaXNwbGF5OiBmbGV4O1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjsgKi9cbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vIH1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-reader-background',
            templateUrl: './background.component.html',
            styleUrls: ['./background.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_config_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]
          }, {
            type: _reader_service__WEBPACK_IMPORTED_MODULE_2__["ReaderService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ixuE":
    /*!***************************************************!*\
      !*** ./src/app/library/library-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: LibraryRoutingModule */

    /***/
    function ixuE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LibraryRoutingModule", function () {
        return LibraryRoutingModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _library_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./library.component */
      "NG6S");

      var routes = [{
        path: '',
        component: _library_component__WEBPACK_IMPORTED_MODULE_3__["LibraryComponent"]
      }];

      var LibraryRoutingModule = function LibraryRoutingModule() {
        _classCallCheck(this, LibraryRoutingModule);
      };

      LibraryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: LibraryRoutingModule
      });
      LibraryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function LibraryRoutingModule_Factory(t) {
          return new (t || LibraryRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LibraryRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LibraryRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "lHTR":
    /*!******************************************!*\
      !*** ./src/app/reader/reader.service.ts ***!
      \******************************************/

    /*! exports provided: ReaderService */

    /***/
    function lHTR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReaderService", function () {
        return ReaderService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var localforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! localforage */
      "oAJy");
      /* harmony import */


      var localforage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _library_services_library_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../library/services/library.service */
      "Ut00");

      var ReaderService = /*#__PURE__*/function () {
        function ReaderService(libraryService) {
          var _this19 = this;

          _classCallCheck(this, ReaderService);

          this.libraryService = libraryService;
          this.ePub = window.ePub;
          this.bookSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.currentBook = null;
          this.currentEpub = null;
          this.tocSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
          this.flattenedToc = null;
          this.notes = [];
          this.bookmarks = [];
          this.chapterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
          this.leftPageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
          this.rightPageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
          this.bookSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinct"])()).subscribe(function (book) {
            _this19.currentBook = book;
          });
        }

        _createClass(ReaderService, [{
          key: "openBook",
          value: function openBook(file) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _yield$this$librarySe, _yield$this$librarySe2;

              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      if (!(typeof file === 'string')) {
                        _context15.next = 13;
                        break;
                      }

                      _context15.t0 = this;
                      _context15.next = 4;
                      return localforage__WEBPACK_IMPORTED_MODULE_2__["getItem"](file);

                    case 4:
                      _context15.t1 = _context15.sent;
                      this.currentEpub = _context15.t0.ePub.call(_context15.t0, _context15.t1);
                      _context15.t2 = this.bookSubject;
                      _context15.next = 9;
                      return this.libraryService.getBook(file);

                    case 9:
                      _context15.t3 = _context15.sent;

                      _context15.t2.next.call(_context15.t2, _context15.t3);

                      _context15.next = 20;
                      break;

                    case 13:
                      _context15.next = 15;
                      return this.libraryService.importBookFile(file);

                    case 15:
                      _yield$this$librarySe = _context15.sent;
                      _yield$this$librarySe2 = _slicedToArray(_yield$this$librarySe, 2);
                      this.currentEpub = _yield$this$librarySe2[0];
                      this.currentBook = _yield$this$librarySe2[1];
                      this.bookSubject.next(this.currentBook);

                    case 20:
                      this.fetchChapters(this.currentEpub);
                      return _context15.abrupt("return", this.currentEpub);

                    case 22:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
          /* rendition utils */

        }, {
          key: "jump",
          value: function jump(href) {
            this.currentEpub.rendition.display(href);
          }
        }, {
          key: "prev",
          value: function prev(pageMode) {
            if (pageMode === 'single' || pageMode === 'double') {
              this.currentEpub.rendition.prev();
            } else {
              this.nextChapter(-1);
            }
          }
        }, {
          key: "next",
          value: function next(pageMode) {
            if (pageMode === 'single' || pageMode === 'double') {
              this.currentEpub.rendition.next();
            } else {
              this.nextChapter();
            }
          }
        }, {
          key: "previousChapter",
          value: function previousChapter() {
            this.nextChapter(-1);
          }
        }, {
          key: "nextChapter",
          value: function nextChapter() {
            var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var currentLocation = this.currentEpub.rendition.currentLocation();

            if (!currentLocation.start) {
              return;
            }

            var chapterIndex = currentLocation.start.index;
            var section = this.currentEpub.section(chapterIndex + step);

            if (section && section.href) {
              this.currentEpub.rendition.display(section.href);
            }
          }
          /**
           * navigation informations
           * incluces: [chapters, bookmarks, notes]
           */

        }, {
          key: "fetchChapters",
          value: function fetchChapters(epub) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this20 = this;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      epub.loaded.navigation.then(function (chapters) {
                        // this.toc = chapters.toc;
                        _this20.tocSubject.next(chapters.toc);

                        _this20.flattenedToc = flatChapter(chapters.toc);
                      })["catch"](function () {
                        console.log('Error occurs');
                      });

                    case 1:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            }));
          }
        }, {
          key: "touchCurrentChapter",
          value: function touchCurrentChapter(epub) {
            var currentLocation = epub.rendition.currentLocation();

            if (!currentLocation.start) {
              return;
            }

            this.leftPageSubject.next(currentLocation.start.displayed.page);
            this.rightPageSubject.next(currentLocation.end.displayed.page);
            var chapterHref = currentLocation.start.href;
            var chapter = 'Unknown Chapter';
            var chapterSbj = this.flattenedToc.filter(function (item) {
              return item.href.split('#')[0] === chapterHref;
            })[0];

            if (chapterSbj) {
              chapter = chapterSbj.label.trim();
            }

            this.chapterSubject.next(chapter);
          } // settings
          // public setPageMode(mode: 'single' | 'double' | 'scroll' | 'continuous') {

        }, {
          key: "setPageMode",
          value: function setPageMode(mode) {// todo
            // const rendition = this.currentEpub.rendition;
            // rendition.viewManager = rendition.requireManager(
            //   mode === 'continuous' ? 'continuous' : 'default'
            // );
            // rendition.View = rendition.requireView(rendition.settings.view);
            // rendition.manager = new rendition.ViewManager({
            //   view: rendition.View,
            //   queue: rendition.q,
            //   request: rendition.book.load.bind(rendition.book),
            //   settings: rendition.settings
            // });
            // const flow = mode === 'scroll'
            //   ? 'scrolled-doc'
            //   : mode === 'continuous'
            //   ? 'scrolled'
            //   : 'auto';
            // // this.currentEpub.rendition.setManager(manager);
            // this.currentEpub.rendition.flow(flow);
          }
        }, {
          key: "setTheme",
          value: function setTheme(theme) {
            // todo: 使用 inherit 后，使一些元素(比如 a, 链接和目录项)失去了原本的颜色
            console.log('themes', this.currentEpub.rendition.themes);
            this.currentEpub.rendition.themes["default"]({
              'a, article, cite, code, div, li, p, pre, span, table': {
                color: "".concat(theme === 'rgba(44,47,49,1)' ? 'white' : 'inherit', " !important")
              }
            });
          }
        }, {
          key: "setFontSize",
          value: function setFontSize(size) {
            this.currentEpub.rendition.themes["default"]({
              'a, article, cite, code, div, li, p, pre, span, table': {
                'font-size': "".concat(size || 17, "px !important")
              }
            });
          }
        }, {
          key: "setFontFamily",
          value: function setFontFamily(fontFamily) {
            this.currentEpub.rendition.themes["default"]({
              'a, article, cite, code, div, li, p, pre, span, table': {
                'font-family': "".concat(fontFamily || 'Helvetica', " !important")
              }
            });
          }
        }, {
          key: "setLineHeight",
          value: function setLineHeight(lineHeight) {
            this.currentEpub.rendition.themes["default"]({
              'a, article, cite, code, div, li, p, pre, span, table': {
                'line-height': "".concat(lineHeight || '1.25', " !important")
              }
            });
          }
        }, {
          key: "setScale",
          value: function setScale(scale) {// todo
          }
        }, {
          key: "applySettings",
          value: function applySettings(epub, settings) {
            var isUseFont = false;
            epub.rendition.themes["default"]({
              'a, article, cite, code, div, li, p, pre, span, table': {
                'font-size': "".concat( // OtherUtil.getReaderConfig("isUseFont") === "yes"
                isUseFont ? '' : settings.fontSize || 17, "px !important"),
                'line-height': "".concat( // OtherUtil.getReaderConfig("isUseFont") === "yes"
                isUseFont ? '' : settings.lineHeight || '1.25', " !important"),
                'font-family': "".concat( // OtherUtil.getReaderConfig("isUseFont") === "yes"
                isUseFont ? '' : settings.fontFamily || 'Helvetica', " !important"),
                color: "".concat( // OtherUtil.getReaderConfig("theme") === "rgba(44,47,49,1)"
                settings.theme === 'rgba(44,47,49,1)' ? 'white' : '', " !important")
              }
            });
          }
        }]);

        return ReaderService;
      }();

      ReaderService.ɵfac = function ReaderService_Factory(t) {
        return new (t || ReaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_library_services_library_service__WEBPACK_IMPORTED_MODULE_5__["LibraryService"]));
      };

      ReaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ReaderService,
        factory: ReaderService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReaderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _library_services_library_service__WEBPACK_IMPORTED_MODULE_5__["LibraryService"]
          }];
        }, null);
      })();

      function flatChapter(chapters) {
        var newChapter = [];

        var _iterator3 = _createForOfIteratorHelper(chapters),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var chapter = _step3.value;

            if (chapter.subitems[0]) {
              newChapter.push(chapter);
              newChapter = newChapter.concat(flatChapter(chapter.subitems));
            } else {
              newChapter.push(chapter);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return newChapter;
      }
      /***/

    },

    /***/
    "q0wl":
    /*!*****************************************!*\
      !*** ./src/app/reader/mouse.service.ts ***!
      \*****************************************/

    /*! exports provided: MouseService */

    /***/
    function q0wl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MouseService", function () {
        return MouseService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _reader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reader.service */
      "lHTR");

      var MouseService = /*#__PURE__*/function () {
        function MouseService(readerService) {
          _classCallCheck(this, MouseService);

          this.readerService = readerService;
        }

        _createClass(MouseService, [{
          key: "bind",
          value: function bind(epub, isScrollMode) {
            var _this21 = this;

            var isFirefox = navigator.userAgent.indexOf('Firefox') !== -1;
            var lock = false; // 暂时锁住翻页快捷键，避免快速点击产生的Bug

            var arrowKeys = function arrowKeys(event) {
              // event.preventDefault();
              if (lock) {
                return;
              }

              if (event.keyCode === 37 || event.keyCode === 38 && !isScrollMode) {
                epub.rendition.prev();
                lock = true;
                setTimeout(function () {
                  lock = false;
                }, 100);
                return false;
              }

              if (event.keyCode === 39 || event.keyCode === 40 && !isScrollMode) {
                epub.rendition.next();
                lock = true;
                setTimeout(function () {
                  lock = false;
                }, 100);
                return false;
              }
            };

            var mouseFirefox = function mouseFirefox(event) {
              event.preventDefault();

              if (lock) {
                return;
              }

              if (event.detail < 0) {
                epub.rendition.prev();
                lock = true;
                setTimeout(function () {
                  lock = false;
                }, 100);
                return false;
              }

              if (event.detail > 0) {
                epub.rendition.next();
                lock = true;
                setTimeout(function () {
                  lock = false;
                }, 100);
                return false;
              }
            };

            var mouseChrome = function mouseChrome(event) {
              if (lock) {
                return;
              }

              if (event.wheelDelta > 0) {
                epub.rendition.prev();
                lock = true;
                setTimeout(function () {
                  lock = false;
                }, 100);
                return false;
              }

              if (event.wheelDelta < 0) {
                epub.rendition.next();
                lock = true;
                setTimeout(function () {
                  lock = false;
                }, 100);
                return false;
              }
            }; // const gesture = (event: any) => {
            //   if (lock) {
            //     return;
            //   }
            //   if (event.type === 'panleft' || event.type === 'panup') {
            //     epub.rendition.next();
            //     lock = true;
            //     setTimeout(() => {
            //       lock = false;
            //     }, 100);
            //     return false;
            //   }
            //   if (event.type === 'panright' || event.type === 'pandown') {
            //     epub.rendition.prev();
            //     lock = true;
            //     setTimeout(() => {
            //       lock = false;
            //     }, 100);
            //     return false;
            //   }
            // };


            var bindEvent = function bindEvent(doc) {
              window.addEventListener('keydown', arrowKeys);
              doc.addEventListener('keydown', arrowKeys); // 箭头按键翻页
              // 鼠标滚轮翻页

              if (!isScrollMode) {
                if (isFirefox) {
                  doc.addEventListener('DOMMouseScroll', mouseFirefox, false);
                } else {
                  doc.addEventListener('mousewheel', mouseChrome, false);
                }
              }

              _this21.unbindEvent = function () {
                window.removeEventListener('keydown', arrowKeys);
                doc.removeEventListener('keydown', arrowKeys); // 箭头按键翻页
                // 鼠标滚轮翻页

                if (isFirefox) {
                  doc.removeEventListener('DOMMouseScroll', mouseFirefox, false);
                } else {
                  doc.removeEventListener('mousewheel', mouseChrome, false);
                }
              };
            };

            epub.rendition.on('rendered', function () {
              var iframe = document.getElementsByTagName('iframe')[0];

              if (!iframe) {
                return;
              }

              var doc = iframe.contentDocument;

              if (!doc) {
                return;
              } // if (OtherUtil.getReaderConfig('isTouch') === 'yes') {
              //   const mc = new Hammer(doc);
              //   mc.on('panleft panright panup pandown', (event: any) => {
              //     gesture(event);
              //   });
              // }


              if (_this21.unbindEvent) {
                _this21.unbindEvent();
              }

              bindEvent(doc);
            });
          }
        }, {
          key: "unbind",
          value: function unbind() {
            if (this.unbindEvent) {
              this.unbindEvent();
            }
          }
        }]);

        return MouseService;
      }();

      MouseService.ɵfac = function MouseService_Factory(t) {
        return new (t || MouseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_reader_service__WEBPACK_IMPORTED_MODULE_1__["ReaderService"]));
      };

      MouseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MouseService,
        factory: MouseService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MouseService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _reader_service__WEBPACK_IMPORTED_MODULE_1__["ReaderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rLXC":
    /*!******************************************************!*\
      !*** ./src/app/library/buttons/buttons.component.ts ***!
      \******************************************************/

    /*! exports provided: ButtonsComponent */

    /***/
    function rLXC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () {
        return ButtonsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _import_books_import_books_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../import-books/import-books.component */
      "DxHS");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var ButtonsComponent = /*#__PURE__*/function () {
        function ButtonsComponent(dialog) {
          _classCallCheck(this, ButtonsComponent);

          this.dialog = dialog;
        }

        _createClass(ButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openImportDialog",
          value: function openImportDialog() {
            this.dialog.open(_import_books_import_books_component__WEBPACK_IMPORTED_MODULE_1__["ImportBooksComponent"], {
              hasBackdrop: false,
              autoFocus: false,
              width: 'calc(100vw - 460px)',
              height: 'calc(100vh - 200px)',
              maxWidth: '1000px',
              maxHeight: '600px'
            });
          }
        }]);

        return ButtonsComponent;
      }();

      ButtonsComponent.ɵfac = function ButtonsComponent_Factory(t) {
        return new (t || ButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
      };

      ButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonsComponent,
        selectors: [["app-lib-buttons"]],
        decls: 7,
        vars: 0,
        consts: [[1, "lib-buttons"], [1, "app-name"], [1, "buttons-right"], ["mat-icon-button", "", "color", "accent", 3, "click"]],
        template: function ButtonsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Immerse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonsComponent_Template_button_click_4_listener() {
              return ctx.openImportDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "note_add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
        styles: [".app-name[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 24px;\n  color: #ff4081;\n  margin: 10px;\n}\n\n.lib-buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 46px;\n  border-bottom: 1px solid #c0c0c044;\n}\n\n.buttons-left[_ngcontent-%COMP%], .buttons-right[_ngcontent-%COMP%] {\n  top: 2px;\n  position: absolute;\n}\n\n.buttons-left[_ngcontent-%COMP%] {\n  left: 2px;\n}\n\n.buttons-right[_ngcontent-%COMP%] {\n  right: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTs7RUFFRSxRQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjZmY0MDgxO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5saWItYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MwYzBjMDQ0O1xufVxuXG4uYnV0dG9ucy1sZWZ0LFxuLmJ1dHRvbnMtcmlnaHQge1xuICB0b3A6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYnV0dG9ucy1sZWZ0IHtcbiAgbGVmdDogMnB4O1xufVxuXG4uYnV0dG9ucy1yaWdodCB7XG4gIHJpZ2h0OiAycHg7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-lib-buttons',
            templateUrl: './buttons.component.html',
            styleUrls: ['./buttons.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rhgw":
    /*!***********************************************************!*\
      !*** ./src/app/reader/navigation/navigation.component.ts ***!
      \***********************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function rhgw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _reader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../reader.service */
      "lHTR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _toc_toc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../toc/toc.component */
      "Hp81");

      var _c0 = function _c0() {
        return {
          left: 40
        };
      };

      var _c1 = function _c1() {
        return {};
      };

      var _c2 = function _c2() {
        return {
          height: "20px",
          margin: "0px 25px 13px"
        };
      };

      function NavigationComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Search the book ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ul", 7);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.isSearch ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
        }
      }

      var _c3 = function _c3() {
        return {
          color: "rgba(112, 112, 112, 1)"
        };
      };

      var _c4 = function _c4() {
        return {
          color: "rgba(217, 217, 217, 1)"
        };
      };

      function NavigationComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_ng_template_2_Template_span_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.changeTab("contents");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Contents ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_ng_template_2_Template_span_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.changeTab("bookmarks");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Bookmark ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_ng_template_2_Template_span_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.changeTab("notes");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Notes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_ng_template_2_Template_span_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.changeTab("digest");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Digests ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-reader-toc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.bookName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Author: ", ctx_r2.author, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.currentTab === "contents" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.currentTab === "bookmarks" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.currentTab === "notes" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.currentTab === "digest" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4));
        }
      }

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent( // private configService: ConfigService,
        readerService) {
          _classCallCheck(this, NavigationComponent);

          this.readerService = readerService; // public backgroundColor = '';

          this.isSearch = false;
          this.currentTab = 'contents';
        }

        _createClass(NavigationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.backgroundColor = this.configService.getItem('reader.theme') as string;
            // this.configService.listen('reader.theme').subscribe((theme: string) => {
            //   this.backgroundColor = theme;
            // });
          }
        }, {
          key: "changeTab",
          value: function changeTab(tab) {}
        }, {
          key: "bookName",
          get: function get() {
            return this.readerService.currentBook ? this.readerService.currentBook.name : '';
          }
        }, {
          key: "author",
          get: function get() {
            return this.readerService.currentBook ? this.readerService.currentBook.author : '';
          }
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
        return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_reader_service__WEBPACK_IMPORTED_MODULE_1__["ReaderService"]));
      };

      NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationComponent,
        selectors: [["app-reader-navigation"]],
        decls: 4,
        vars: 2,
        consts: [[1, "reader-navigation"], [3, "ngIf", "ngIfElse"], ["nav", ""], [1, "icon-close", "nav-close-icon"], [1, "header-search-container", 3, "ngStyle"], [1, "navigation-search-title", 3, "ngStyle"], [1, "nav-search-list"], [1, "nav-search-page"], [1, "navigation-header"], [1, "book-title"], [1, "book-arthur"], [1, "reading-duration"], [1, "navigation-search-box"], [1, "navigation-navigation"], [1, "book-content-title", 3, "ngStyle", "click"], [1, "book-bookmark-title", 3, "ngStyle", "click"], [1, "navigation-body-parent"], [1, "navigation-body"]],
        template: function NavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationComponent_ng_template_1_Template, 6, 5, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationComponent_ng_template_2_Template, 19, 14, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearch)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _toc_toc_component__WEBPACK_IMPORTED_MODULE_3__["TocComponent"]],
        styles: ["[_nghost-%COMP%] {\n  width: 300px;\n  height: calc(100vh - 100px);\n}\n\n.reader-navigation[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translateY(-16px);\n  width: 340px;\n  height: calc(100vh - 76px);\n  background-color: white;\n}\n\n.navigation-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 339px;\n  height: 173px;\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.16);\n  opacity: 1;\n  z-index: 10;\n  \n}\n\n.navigation-header[_ngcontent-%COMP%]   .book-cover[_ngcontent-%COMP%] {\n  float: left;\n  width: 91px;\n  height: 118px;\n  background: rgba(0, 0, 0, 0);\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);\n  opacity: 0.8;\n  position: relative;\n  left: 12px;\n  top: 14px;\n}\n\n.navigation-header[_ngcontent-%COMP%]   .book-title[_ngcontent-%COMP%] {\n  height: 30px;\n  font-size: 15px;\n  line-height: 15px;\n  color: #4b4b4b;\n  opacity: 1;\n  width: 150px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  height: 30px;\n  position: absolute;\n  left: 30px;\n  top: 20px;\n  position: relative;\n}\n\n.navigation-header[_ngcontent-%COMP%]   .book-arthur[_ngcontent-%COMP%] {\n  height: 30px;\n  font-size: 15px;\n  line-height: 15px;\n  color: rgba(75, 75, 75, 0.65);\n  opacity: 1;\n  width: 150px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  height: 30px;\n  position: absolute;\n  left: 30px;\n  top: 10px;\n  position: relative;\n}\n\n.navigation-header[_ngcontent-%COMP%]   .reading-duration[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 120px;\n  top: 60px;\n  font-size: 14px;\n  line-height: 22px;\n  color: #4b4b4b;\n}\n\n.book-content-title[_ngcontent-%COMP%] {\n  line-height: 27px;\n  opacity: 1;\n  cursor: pointer;\n}\n\n.book-bookmark-title[_ngcontent-%COMP%] {\n  line-height: 27px;\n  opacity: 1;\n  cursor: pointer;\n}\n\n.navigation-body-parent[_ngcontent-%COMP%] {\n  top: 173px;\n  overflow: hidden;\n  width: 100%;\n  height: calc(100% - 173px);\n}\n\n.navigation-body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  box-sizing: content-box;\n  overflow-y: scroll;\n  z-index: 0;\n  overflow-x: hidden;\n}\n\n.navigation-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.navigation-panel-empty-bookmark[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 15px;\n  color: rgba(75, 75, 75, 0.8);\n  line-height: 60px;\n}\n\n.navigation-navigation[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.navigation-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 299px;\n  height: 100%;\n  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.38);\n  opacity: 1;\n  z-index: 10;\n  -webkit-animation: fade-left 0.2s ease-in-out 0s 1;\n          animation: fade-left 0.2s ease-in-out 0s 1;\n}\n\n.navigation-search-box[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 115px;\n  top: 90px;\n}\n\n.navigation-search-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: calc(100% - 44px);\n  height: 38px;\n  font-size: 16px;\n  color: #4b4b4b;\n  margin: 6px 22px;\n}\n\n.nav-close-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 20px;\n}\n\n.nav-search-list[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 110px;\n  right: 10px;\n  font-size: 15px;\n  height: calc(100vh - 150px);\n  overflow: scroll;\n}\n\n.nav-search-list-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(112, 112, 112, 0.1);\n  padding: 8px;\n  cursor: pointer;\n}\n\n.content-search-text[_ngcontent-%COMP%] {\n  color: red !important;\n  font-weight: bold !important;\n}\n\n.nav-search-page[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 40px;\n  bottom: 7px;\n  display: flex;\n  justify-content: space-around;\n  width: calc(100% - 80px);\n}\n\n.nav-search-page-item[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #4b4b4b;\n  border: 1px solid #4b4b4b;\n  cursor: pointer;\n}\n\n.active-page[_ngcontent-%COMP%] {\n  background-color: #4b4b4b;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZGVyL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQWFBOzs7O0tBQUE7QUFQRjs7QUFKRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQU1KOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFERjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtEQUFBO1VBQUEsMENBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFPRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFRRjs7QUFOQTtFQUNFLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFTRjs7QUFQQTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7QUFVRjs7QUFSQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtBQVdGOztBQVRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQVlGOztBQVZBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBYUYiLCJmaWxlIjoic3JjL2FwcC9yZWFkZXIvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcbn1cblxuLnJlYWRlci1uYXZpZ2F0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE2cHgpO1xuICB3aWR0aDogMzQwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDc2cHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdmlnYXRpb24taGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzM5cHg7XG4gIGhlaWdodDogMTczcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwO1xuXG4gIC5ib29rLWNvdmVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogOTFweDtcbiAgICBoZWlnaHQ6IDExOHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDEycHg7XG4gICAgdG9wOiAxNHB4O1xuICB9XG4gIC8qIC5ib29rLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9ICovXG4gIC5ib29rLXRpdGxlIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuYm9vay1hcnRodXIge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMC42NSk7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMzBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnJlYWRpbmctZHVyYXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMjBweDtcbiAgICB0b3A6IDYwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGNvbG9yOiByZ2JhKDc1LCA3NSwgNzUsIDEpO1xuICB9XG59XG5cbi5ib29rLWNvbnRlbnQtdGl0bGUge1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJvb2stYm9va21hcmstdGl0bGUge1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2aWdhdGlvbi1ib2R5LXBhcmVudCB7XG4gIHRvcDogMTczcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE3M3B4KTtcbn1cblxuLm5hdmlnYXRpb24tYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHotaW5kZXg6IDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5uYXZpZ2F0aW9uLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5uYXZpZ2F0aW9uLXBhbmVsLWVtcHR5LWJvb2ttYXJrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMC44KTtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG4ubmF2aWdhdGlvbi1uYXZpZ2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubmF2aWdhdGlvbi1wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDI5OXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDtcbiAgYW5pbWF0aW9uOiBmYWRlLWxlZnQgMC4ycyBlYXNlLWluLW91dCAwcyAxO1xufVxuLm5hdmlnYXRpb24tc2VhcmNoLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTE1cHg7XG4gIHRvcDogOTBweDtcbn1cbi5uYXZpZ2F0aW9uLXNlYXJjaC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDRweCk7XG4gIGhlaWdodDogMzhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogcmdiYSg3NSwgNzUsIDc1LCAxKTtcbiAgbWFyZ2luOiA2cHggMjJweDtcbn1cbi5uYXYtY2xvc2UtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm5hdi1zZWFyY2gtbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAxMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLm5hdi1zZWFyY2gtbGlzdC1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xKTtcbiAgcGFkZGluZzogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGVudC1zZWFyY2gtdGV4dCB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbn1cbi5uYXYtc2VhcmNoLXBhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQwcHg7XG4gIGJvdHRvbTogN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xufVxuLm5hdi1zZWFyY2gtcGFnZS1pdGVtIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzUsIDc1LCA3NSwgMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hY3RpdmUtcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDc1LCA3NSwgMSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-reader-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.scss']
          }]
        }], function () {
          return [{
            type: _reader_service__WEBPACK_IMPORTED_MODULE_1__["ReaderService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _library_library_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./library/library-routing.module */
      "ixuE");
      /* harmony import */


      var _reader_reader_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reader/reader-routing.module */
      "zJhI");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _library_library_routing_module__WEBPACK_IMPORTED_MODULE_2__["LibraryRoutingModule"], _reader_reader_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReaderRoutingModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _library_library_routing_module__WEBPACK_IMPORTED_MODULE_2__["LibraryRoutingModule"], _reader_reader_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReaderRoutingModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _library_library_routing_module__WEBPACK_IMPORTED_MODULE_2__["LibraryRoutingModule"], _reader_reader_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReaderRoutingModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wiMD":
    /*!*******************************************!*\
      !*** ./src/app/library/library.module.ts ***!
      \*******************************************/

    /*! exports provided: LibraryModule */

    /***/
    function wiMD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LibraryModule", function () {
        return LibraryModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _library_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./library.component */
      "NG6S");
      /* harmony import */


      var _book_cards_book_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./book-cards/book-cards.component */
      "5Zo4");
      /* harmony import */


      var _filters_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./filters/filters.component */
      "80Xm");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "rLXC");
      /* harmony import */


      var _import_books_import_books_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./import-books/import-books.component */
      "DxHS");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var ngx_file_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-file-drop */
      "ZRew");

      var LibraryModule = function LibraryModule() {
        _classCallCheck(this, LibraryModule);
      };

      LibraryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LibraryModule
      });
      LibraryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LibraryModule_Factory(t) {
          return new (t || LibraryModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_11__["NgxFileDropModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LibraryModule, {
          declarations: [_library_component__WEBPACK_IMPORTED_MODULE_2__["LibraryComponent"], _book_cards_book_cards_component__WEBPACK_IMPORTED_MODULE_3__["BookCardsComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ButtonsComponent"], _filters_filters_component__WEBPACK_IMPORTED_MODULE_4__["FiltersComponent"], _import_books_import_books_component__WEBPACK_IMPORTED_MODULE_6__["ImportBooksComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_11__["NgxFileDropModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibraryModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_library_component__WEBPACK_IMPORTED_MODULE_2__["LibraryComponent"], _book_cards_book_cards_component__WEBPACK_IMPORTED_MODULE_3__["BookCardsComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ButtonsComponent"], _filters_filters_component__WEBPACK_IMPORTED_MODULE_4__["FiltersComponent"], _import_books_import_books_component__WEBPACK_IMPORTED_MODULE_6__["ImportBooksComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_11__["NgxFileDropModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "y1n2":
    /*!*******************************************!*\
      !*** ./src/app/models/ReadingProgress.ts ***!
      \*******************************************/

    /*! exports provided: ReadingProgress */

    /***/
    function y1n2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReadingProgress", function () {
        return ReadingProgress;
      });

      var ReadingProgress = /*#__PURE__*/function () {
        function ReadingProgress() {
          var percentage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var locations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          _classCallCheck(this, ReadingProgress);

          this.percentage = percentage;
          this.locations = locations;
        }

        _createClass(ReadingProgress, [{
          key: "restorePercentage",
          value: function restorePercentage(rlService, book) {
            this.percentage = rlService.getCfi(book.key).percentage;
          }
        }, {
          key: "fetchLocations",
          value: function fetchLocations(epub) {
            var _this22 = this;

            epub.locations.generate().then(function () {
              _this22.locations = epub.locations;
            })["catch"](function () {
              console.log('Error occurs');
            });
          }
        }]);

        return ReadingProgress;
      }();
      /***/

    },

    /***/
    "zJhI":
    /*!*************************************************!*\
      !*** ./src/app/reader/reader-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: ReaderRoutingModule */

    /***/
    function zJhI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReaderRoutingModule", function () {
        return ReaderRoutingModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _reader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reader.component */
      "HMgo");

      var routes = [{
        path: 'reader/:key',
        component: _reader_component__WEBPACK_IMPORTED_MODULE_3__["ReaderComponent"]
      }];

      var ReaderRoutingModule = function ReaderRoutingModule() {
        _classCallCheck(this, ReaderRoutingModule);
      };

      ReaderRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ReaderRoutingModule
      });
      ReaderRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ReaderRoutingModule_Factory(t) {
          return new (t || ReaderRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReaderRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReaderRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
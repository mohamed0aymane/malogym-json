import {
  Component,
  Injectable,
  NgModule,
  Subject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-J7G7U2C4.js";

// node_modules/ng-confirm-box/fesm2022/ng-confirm-box.mjs
var _NgConfirmService = class _NgConfirmService {
  constructor() {
    this.displayModa$ = new Subject();
  }
  showConfirm(message, yes, no) {
    this.displayModa$.next({
      isVisible: true,
      messageText: message,
      yes: () => {
        yes();
        this.closeConfirm();
      },
      no: () => {
        no();
        this.closeConfirm();
      }
    });
  }
  closeConfirm() {
    this.displayModa$.next(false);
  }
};
_NgConfirmService.ɵfac = function NgConfirmService_Factory(t) {
  return new (t || _NgConfirmService)();
};
_NgConfirmService.ɵprov = ɵɵdefineInjectable({
  token: _NgConfirmService,
  factory: _NgConfirmService.ɵfac,
  providedIn: "root"
});
var NgConfirmService = _NgConfirmService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgConfirmService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var _NgConfirmComponent = class _NgConfirmComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.show = false;
  }
  ngOnInit() {
    this.modalService.displayModa$.subscribe((val) => {
      this.show = val.isVisible;
      this.message = val;
    });
  }
  close() {
    this.modalService.closeConfirm();
  }
};
_NgConfirmComponent.ɵfac = function NgConfirmComponent_Factory(t) {
  return new (t || _NgConfirmComponent)(ɵɵdirectiveInject(NgConfirmService));
};
_NgConfirmComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgConfirmComponent,
  selectors: [["ng-confirm"]],
  decls: 17,
  vars: 5,
  consts: [[1, "modal-overlay"], [1, "modal1"], [1, "close-modal", 3, "click"], ["viewBox", "0 0 20 20"], ["fill", "#000000", "d", "M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"], [1, "modal-content1"], [1, "dialog-content"], [1, "dialog-footer"], ["mat-raised-button", "", 1, "mx-1", "mat-button", 2, "background-color", "#5cb85c", "color", "#fff", 3, "click"], ["mat-raised-button", "", 1, "mx-1", "mat-button", 2, "background-color", "#d9534f", "color", "#fff", 3, "click"]],
  template: function NgConfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      ɵɵlistener("click", function NgConfirmComponent_Template_a_click_2_listener() {
        return ctx.close();
      });
      ɵɵnamespaceSVG();
      ɵɵelementStart(3, "svg", 3);
      ɵɵelement(4, "path", 4);
      ɵɵelementEnd()();
      ɵɵnamespaceHTML();
      ɵɵelement(5, "br");
      ɵɵelementStart(6, "div", 5)(7, "h1");
      ɵɵtext(8, "Confirm");
      ɵɵelementEnd();
      ɵɵelement(9, "hr");
      ɵɵelementStart(10, "div", 6);
      ɵɵtext(11);
      ɵɵelementEnd();
      ɵɵelementStart(12, "div", 7)(13, "button", 8);
      ɵɵlistener("click", function NgConfirmComponent_Template_button_click_13_listener() {
        return ctx.message.yes();
      });
      ɵɵtext(14, "Yes");
      ɵɵelementEnd();
      ɵɵelementStart(15, "button", 9);
      ɵɵlistener("click", function NgConfirmComponent_Template_button_click_15_listener() {
        return ctx.message.no();
      });
      ɵɵtext(16, "No");
      ɵɵelementEnd()()()()();
    }
    if (rf & 2) {
      ɵɵclassProp("active", ctx.show);
      ɵɵadvance();
      ɵɵclassProp("active", ctx.show);
      ɵɵadvance(10);
      ɵɵtextInterpolate1(" ", ctx.message == null ? null : ctx.message.messageText, " ");
    }
  },
  styles: [".dialog-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;position:fixed;bottom:20px;right:40px}.dialog-content[_ngcontent-%COMP%]{display:flex;justify-content:center;font-size:1.25rem;padding:15px}@media only screen and (min-width: 40em){.modal-overlay[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;background-color:#0009;opacity:0;visibility:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:opacity .6s cubic-bezier(.55,0,.1,1),visibility .6s cubic-bezier(.55,0,.1,1)}.modal-overlay.active[_ngcontent-%COMP%]{opacity:1;visibility:visible}}.modal1[_ngcontent-%COMP%]{position:relative;margin:0 auto;background-color:#fceaa4;width:350px;max-width:75rem;min-height:15rem;padding:1rem;border-radius:3px;opacity:0;overflow-y:auto;visibility:hidden;box-shadow:0 2px 10px #0000001a;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:scale(1.2);transition:all .6s cubic-bezier(.55,0,.1,1)}.modal1[_ngcontent-%COMP%]   .close-modal[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:5px;right:15px;opacity:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:opacity .6s cubic-bezier(.55,0,.1,1),transform .6s cubic-bezier(.55,0,.1,1);transition-delay:.3s}.modal1[_ngcontent-%COMP%]   .close-modal[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.75em;height:1.75em}.modal1[_ngcontent-%COMP%]   .modal-content1[_ngcontent-%COMP%]{opacity:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:opacity .6s cubic-bezier(.55,0,.1,1);transition-delay:.3s}.modal1.active[_ngcontent-%COMP%]{visibility:visible;opacity:1;transform:scale(1)}.modal1.active[_ngcontent-%COMP%]   .modal-content1[_ngcontent-%COMP%]{opacity:1}.modal1.active[_ngcontent-%COMP%]   .close-modal[_ngcontent-%COMP%]{transform:translateY(10px);opacity:1}@media only screen and (max-width: 39.9375em){h1[_ngcontent-%COMP%]{font-size:1.5rem}.modal[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;-webkit-overflow-scrolling:touch;border-radius:0;transform:scale(1.1);padding:0!important}.close-modal[_ngcontent-%COMP%]{right:20px!important}}.mat-button[_ngcontent-%COMP%]{padding:5px;border:none;width:60px;border-radius:3px}.mat-button[_ngcontent-%COMP%]:hover{box-shadow:0 12px 16px #0000003d,0 17px 50px #00000030}"]
});
var NgConfirmComponent = _NgConfirmComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgConfirmComponent, [{
    type: Component,
    args: [{
      selector: "ng-confirm",
      template: '<!-- modal -->\n<div class="modal-overlay" [class.active]="show">\n    <div class="modal1" [class.active]="show">\n\n        <a class="close-modal" (click)="close()">\n            <svg viewBox="0 0 20 20">\n      <path fill="#000000" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>\n    </svg>\n        </a><br>\n        <!-- close modal -->\n\n        <div class="modal-content1">\n            <h1>Confirm</h1>\n            <hr>\n            <div class="dialog-content">\n                {{message?.messageText}}\n            </div>\n            <div class="dialog-footer">\n                <button (click)="message.yes()" class="mx-1 mat-button" style="background-color: #5cb85c;color:#fff" mat-raised-button>Yes</button>\n                <button (click)="message.no()" class="mx-1 mat-button" style="background-color: #d9534f;color:#fff" mat-raised-button>No</button>\n            </div>\n        </div>\n        <!-- content -->\n\n    </div>\n    <!-- modal -->\n</div>',
      styles: [".dialog-footer{display:flex;justify-content:flex-end;position:fixed;bottom:20px;right:40px}.dialog-content{display:flex;justify-content:center;font-size:1.25rem;padding:15px}@media only screen and (min-width: 40em){.modal-overlay{display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;background-color:#0009;opacity:0;visibility:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:opacity .6s cubic-bezier(.55,0,.1,1),visibility .6s cubic-bezier(.55,0,.1,1)}.modal-overlay.active{opacity:1;visibility:visible}}.modal1{position:relative;margin:0 auto;background-color:#fceaa4;width:350px;max-width:75rem;min-height:15rem;padding:1rem;border-radius:3px;opacity:0;overflow-y:auto;visibility:hidden;box-shadow:0 2px 10px #0000001a;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:scale(1.2);transition:all .6s cubic-bezier(.55,0,.1,1)}.modal1 .close-modal{position:absolute;cursor:pointer;top:5px;right:15px;opacity:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:opacity .6s cubic-bezier(.55,0,.1,1),transform .6s cubic-bezier(.55,0,.1,1);transition-delay:.3s}.modal1 .close-modal svg{width:1.75em;height:1.75em}.modal1 .modal-content1{opacity:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:opacity .6s cubic-bezier(.55,0,.1,1);transition-delay:.3s}.modal1.active{visibility:visible;opacity:1;transform:scale(1)}.modal1.active .modal-content1{opacity:1}.modal1.active .close-modal{transform:translateY(10px);opacity:1}@media only screen and (max-width: 39.9375em){h1{font-size:1.5rem}.modal{position:fixed;top:0;left:0;width:100%;height:100%;-webkit-overflow-scrolling:touch;border-radius:0;transform:scale(1.1);padding:0!important}.close-modal{right:20px!important}}.mat-button{padding:5px;border:none;width:60px;border-radius:3px}.mat-button:hover{box-shadow:0 12px 16px #0000003d,0 17px 50px #00000030}\n"]
    }]
  }], function() {
    return [{
      type: NgConfirmService
    }];
  }, null);
})();
var _NgConfirmModule = class _NgConfirmModule {
};
_NgConfirmModule.ɵfac = function NgConfirmModule_Factory(t) {
  return new (t || _NgConfirmModule)();
};
_NgConfirmModule.ɵmod = ɵɵdefineNgModule({
  type: _NgConfirmModule,
  declarations: [NgConfirmComponent],
  exports: [NgConfirmComponent]
});
_NgConfirmModule.ɵinj = ɵɵdefineInjector({});
var NgConfirmModule = _NgConfirmModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgConfirmModule, [{
    type: NgModule,
    args: [{
      declarations: [NgConfirmComponent],
      imports: [],
      exports: [NgConfirmComponent]
    }]
  }], null, null);
})();
export {
  NgConfirmComponent,
  NgConfirmModule,
  NgConfirmService
};
//# sourceMappingURL=ng-confirm-box.js.map

webpackJsonp([0],{25:function(e,t,n){"use strict";n.d(t,"b",function(){return p}),n.d(t,"a",function(){return N});var a=n(0),i=(n.n(a),n(75)),r=(n.n(i),n(79)),l=(n.n(r),n(80)),s=(n.n(l),n(78)),c=(n.n(s),n(77)),u=(n.n(c),n(81)),d=(n.n(u),n(82)),m=(n.n(d),n(83)),o=(n.n(m),n(84)),b=(n.n(o),n(86)),f=(n.n(b),n(85)),v=(n.n(f),a.Observable.defer(function(){return a.Observable.ajax.getJSON("api/views")})),w=new i.Subject,p=function(e){return w.next(e)},E=w,g=function(e){return e.switchMap(function(e){return a.Observable.of(null).delay(3e3).mergeMap(function(){return a.Observable.ajax.getJSON("api/viewdata/"+e.id)}).repeat().merge(a.Observable.ajax.getJSON("api/viewdata/"+e.id))})}(E),N=function(e,t,n){return a.Observable.combineLatest(e.startWith(null),t.startWith(null),n.startWith(null),function(e,t,n){return{views:e,selectedView:t,selectedViewData:n}})}(v,E,g)},36:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(14),i=(n.n(a),n(25)),r=n(39),l=n(3),s=(n.n(l),n(41)),c=(n.n(s),n(49)),u=(n.n(c),function(e){return null===e.views?n.i(a.createElement)("div",null,n.i(a.createElement)("i",{className:"fa fa-spin fa-cog"})," Loading views"):null===e.selectedView?n.i(a.createElement)(d,{views:e.views}):null===e.selectedViewData?n.i(a.createElement)("div",null,n.i(a.createElement)("i",{className:"fa fa-spin fa-cog"})," Loading view data"):n.i(a.createElement)(o,{view:e.selectedView,data:e.selectedViewData})}),d=function(e){return n.i(a.createElement)("div",{id:"views"},e.views.map(function(e){return n.i(a.createElement)("a",{className:"btn btn-primary view",id:e.id,onClick:function(){return n.i(i.b)(e)}},e.name," ",n.i(a.createElement)("span",{className:"badge"},e.tiles.length," tiles"))}))},m=function(e){var t=e.currentTarget,n=t.parentNode;n.requestFullscreen&&n.requestFullscreen(),n.webkitRequestFullScreen&&n.webkitRequestFullScreen(),n.webkitRequestFullscreen&&n.webkitRequestFullscreen()},o=function(e){return n.i(a.createElement)("div",{id:e.view.id},n.i(a.createElement)("button",{role:"button",className:"btn btn-primary btn-xs",onClick:m},n.i(a.createElement)("i",{className:"fa fa-expand"})," Full screen"),n.i(a.createElement)("div",{id:"tiles"},n.i(a.createElement)("div",{className:"tiles-wrapper"},e.data.tiles.map(function(t){return n.i(a.createElement)(b,{view:e.view,data:t})}))))},b=function(e){var t=r.a[e.data.combinedBuildStatus].toLowerCase(),i="height-"+e.view.defaultNumberOfBranchesPerTile;return n.i(a.createElement)("div",{id:e.data.id,className:"tile "+t+" "+i+" col-xs-6 col-sm-4 col-md-3 col-lg-2"},n.i(a.createElement)("h4",{className:"tile-title"},e.data.label),n.i(a.createElement)("div",{className:"tile-builds"},e.data.builds.map(function(e){return n.i(a.createElement)(f,{build:e})})))},f=function(e){var t="finished"===e.build.state,i="running"===e.build.state,l=e.build.status===r.a.Success,s=e.build.isDefaultBranch,c=r.a[e.build.status].toLowerCase(),u=t?100:e.build.percentageComplete,d=l?"progress-bar-success":"progress-bar-danger",m=i?"progress-bar-striped active":"",o=e.build.branchName||e.build.number,b=s?n.i(a.createElement)("span",{className:"branch"},n.i(a.createElement)("i",{className:"fa fa-star"})," ",o):n.i(a.createElement)("span",{className:"branch"},o);return n.i(a.createElement)("div",{id:e.build.id,className:"tile-build "+c},n.i(a.createElement)("div",{className:"progress"},n.i(a.createElement)("div",{className:"progress-bar "+d+" "+m,style:{width:u+"%"}},b,t?n.i(a.createElement)(v,{build:e.build}):null,i?n.i(a.createElement)(w,{build:e.build}):null)))},v=function(e){var t=l(e.build.finishDate),i=c(t,{includeSeconds:!0,addSuffix:!0});return n.i(a.createElement)("span",{className:"execution-timestamp"},"Finished: "+i)},w=function(e){var t=s(l(e.build.startDate),e.build.estimatedTotalSeconds),i=c(t,{includeSeconds:!0,addSuffix:!0});return n.i(a.createElement)("span",{className:"remaining"},"Estimated finish: "+i)}},38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(37),i=n(14),r=(n.n(i),n(14)),l=(n.n(r),n(36)),s=n(25),c=document.getElementById("root");s.a.subscribe(function(e){return n.i(r.render)(n.i(i.createElement)(l.a,a.a({},e)),c)})},39:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a;!function(e){e[e.Unknown=0]="Unknown",e[e.Success=1]="Success",e[e.Failure=2]="Failure",e[e.Error=3]="Error"}(a||(a={}))}},[38]);
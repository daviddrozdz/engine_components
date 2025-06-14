import"./index-H1X3kY-x.js";import{C as m,W as p,S as u,a as b,G as h}from"./index-Dge8UBVh.js";import{S as w}from"./stats.min-GTpOrGrX.js";import{T as f,L as c,m as d}from"./index-ByMLC5eT.js";import{K as g,B as S,M as x,a as v,C as y,O as C}from"./index-Dv_9qWwv.js";import"./_commonjsHelpers-Cpj98o6Y.js";const l=document.getElementById("container"),o=new m,$=o.get(p),e=$.create();e.scene=new u(o);e.renderer=new g(o,l);e.camera=new b(o);e.scene.setup();o.init();e.camera.controls.setLookAt(5,5,5,0,0,0);l.appendChild(e.renderer.three2D.domElement);const E=o.get(h),L=E.create(e);L.config.color.setHex(14540253);const M=new S(3,3,3),O=new x({color:"#6528D7"}),n=new v(M,O);n.position.set(0,1.5,0);e.scene.three.add(n);e.meshes.add(n);e.scene.three.background=new y("white");const t=o.get(C);t.shadowExtraScaleFactor=15;t.shadowOffset=.1;const a="example";t.create([n],a,e);const s=new w;s.showPanel(2);document.body.append(s.dom);s.dom.style.left="0px";s.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>s.begin());e.renderer.onAfterUpdate.add(()=>s.end());f.init();const i=c.create(()=>d`
  <bim-panel active label="Shadow dropper Tutorial" class="options-menu">
    <bim-panel-section collapsed label="Controls">
          
        <bim-number-input 
          slider label="Extra scale factor" step="1" 
          value="${t.shadowExtraScaleFactor}" min="0" max="20"
          @change="${({target:r})=>{t.shadowExtraScaleFactor=r.value,t.deleteShadow(a),t.create([n],a,e)}}">
        </bim-number-input> 
                  
        <bim-number-input 
          slider label="Amount" step="1" 
          value="${t.amount}" min="0" max="20"
          @change="${({target:r})=>{t.amount=r.value,t.deleteShadow(a),t.create([n],a,e)}}">
        </bim-number-input>    
                       
        <bim-number-input 
          slider label="Shadow offset" step="0.01" 
          value="${t.shadowOffset}" min="0" max="3"
          @change="${({target:r})=>{t.shadowOffset=r.value,t.deleteShadow(a),t.create([n],a,e)}}">
        </bim-number-input> 

      </bim-panel-section>
    </bim-panel>
    `);document.body.append(i);const B=c.create(()=>d`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{i.classList.contains("options-menu-visible")?i.classList.remove("options-menu-visible"):i.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(B);

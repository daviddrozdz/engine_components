import"./index-H1X3kY-x.js";import{C as d,W as m,S as b,a as p,G as u}from"./index-Dge8UBVh.js";import{T as g,L as c,m as i}from"./index-ByMLC5eT.js";import{q as w,B as h,M as k,a as f,D as y}from"./index-Dv_9qWwv.js";import{S as D}from"./stats.min-GTpOrGrX.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r=document.getElementById("container"),n=new d,S=n.get(m),e=S.create();e.scene=new b(n);e.renderer=new w(n,r);e.camera=new p(n);n.init();e.camera.controls.setLookAt(5,5,5,0,0,0);e.scene.setup();const L=n.get(u);L.create(e);e.scene.three.background=null;const M=new h(3,3,3),v=new k({color:"#6528D7"}),l=new f(M,v);l.position.set(0,1.5,0);e.scene.three.add(l);e.meshes.add(l);const t=n.get(y);t.world=e;t.enabled=!0;r.ondblclick=()=>t.create();window.onkeydown=a=>{(a.code==="Delete"||a.code==="Backspace")&&t.deleteAll()};const o=new D;o.showPanel(2);document.body.append(o.dom);o.dom.style.left="0px";o.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>o.begin());e.renderer.onAfterUpdate.add(()=>o.end());g.init();const s=c.create(()=>i`
  <bim-panel active label="Angle Measurement Tutorial" class="options-menu">
      <bim-panel-section collapsed label="Controls">
          <bim-label>Create angle: Double click</bim-label>  
          <bim-label>Delete angle: Delete</bim-label>  
      </bim-panel-section>
      
      <bim-panel-section collapsed label="Others">
        <bim-checkbox checked label="angles enabled" 
          @change="${({target:a})=>{t.enabled=a.value}}">  
        </bim-checkbox>       
        
        <bim-button label="Delete all"
          @click="${()=>{t.deleteAll()}}">
        </bim-button>

      </bim-panel-section>
    </bim-panel>
    `);document.body.append(s);const x=c.create(()=>i`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{s.classList.contains("options-menu-visible")?s.classList.remove("options-menu-visible"):s.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(x);

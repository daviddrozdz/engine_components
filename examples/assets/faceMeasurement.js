import"./index-H1X3kY-x.js";import{S as m}from"./stats.min-GTpOrGrX.js";import{C as b,W as p,S as u,a as f,G as g,F as h}from"./index-Dge8UBVh.js";import{T as w,L as i,m as c}from"./index-ByMLC5eT.js";import{q as y,a as k,U as S}from"./index-Dv_9qWwv.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r=document.getElementById("container"),s=new b,L=s.get(p),e=L.create();e.scene=new u(s);e.renderer=new y(s,r);e.camera=new f(s);s.init();e.camera.controls.setLookAt(5,5,5,0,0,0);e.scene.setup();const v=s.get(g);v.create(e);e.scene.three.background=null;const A=new h(s),C=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),D=await C.arrayBuffer(),U=new Uint8Array(D),d=A.load(U);e.scene.three.add(d);for(const t of d.children)t instanceof k&&e.meshes.add(t);const n=s.get(S);n.world=e;n.enabled=!0;r.ondblclick=()=>n.create();let l;window.addEventListener("keydown",t=>{t.code==="KeyO"?n.delete():t.code==="KeyS"?(l=n.get(),n.deleteAll()):t.code==="KeyL"&&l&&n.set(l)});const o=new m;o.showPanel(2);document.body.append(o.dom);o.dom.style.left="0px";o.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>o.begin());e.renderer.onAfterUpdate.add(()=>o.end());w.init();const a=i.create(()=>c`
  <bim-panel active label="Face Measurement Tutorial" class="options-menu">
      <bim-panel-section collapsed label="Controls">
          <bim-label>Create dimension: Double click</bim-label>  
          <bim-label>Delete dimension: Press O</bim-label> 
          <bim-label>Delete all dimensions: Press S</bim-label> 
          <bim-label>Set/Show saved dimensions: Press L</bim-label> 
      </bim-panel-section>
      
      <bim-panel-section collapsed label="Others">
        <bim-checkbox checked label="Dimensions enabled" 
          @change="${({target:t})=>{n.enabled=t.value}}"> 
        </bim-checkbox> 
        
        <bim-button label="Delete all"
          @click="${()=>{n.deleteAll()}}">
        </bim-button>

      </bim-panel-section>
    </bim-panel>
    `);document.body.append(a);const x=i.create(()=>c`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{a.classList.contains("options-menu-visible")?a.classList.remove("options-menu-visible"):a.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(x);

import"./index-H1X3kY-x.js";import{S as r}from"./stats.min-GTpOrGrX.js";import{C as c,W as d,S as m,a as b,G as p,F as f}from"./index-Dge8UBVh.js";import{T as u,L as h,m as w}from"./index-ByMLC5eT.js";import{q as g,a as y,b as S}from"./index-Dv_9qWwv.js";import"./_commonjsHelpers-Cpj98o6Y.js";const l=document.getElementById("container"),a=new c,k=a.get(d),e=k.create();e.scene=new m(a);e.renderer=new g(a,l);e.camera=new b(a);a.init();e.camera.controls.setLookAt(5,5,5,0,0,0);e.scene.setup();const L=a.get(p);L.create(e);e.scene.three.background=null;const A=new f(a),C=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),D=await C.arrayBuffer(),x=new Uint8Array(D),i=A.load(x);e.scene.three.add(i);for(const t of i.children)t instanceof y&&e.meshes.add(t);const n=a.get(S);n.world=e;n.enabled=!0;l.ondblclick=()=>n.create();let o;window.addEventListener("keydown",t=>{t.code==="KeyO"?n.delete():t.code==="KeyS"?(o=n.get(),n.deleteAll()):t.code==="KeyL"&&o&&n.set(o)});const s=new r;s.showPanel(2);document.body.append(s.dom);s.dom.style.left="0px";s.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>s.begin());e.renderer.onAfterUpdate.add(()=>s.end());u.init();const B=h.create(()=>w`
  <bim-panel active label="Edge Measurement Tutorial" class="options-menu">
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
    `);document.body.append(B);

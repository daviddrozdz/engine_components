import"./index-H1X3kY-x.js";import{S as M}from"./stats.min-GTpOrGrX.js";import{T as y,L as d,m as b}from"./index-ByMLC5eT.js";import{C as f,W as k,S as x,a as v,G as S,R as C,e as P}from"./index-Dge8UBVh.js";import{q as L,B,M as I,a as m,d as $,S as D,e as c,f as p}from"./index-Dv_9qWwv.js";import"./_commonjsHelpers-Cpj98o6Y.js";const u=document.getElementById("container"),o=new f,z=o.get(k),e=z.create();e.scene=new x(o);e.renderer=new L(o,u);e.camera=new v(o);e.renderer.postproduction.enabled=!0;e.renderer.postproduction.customEffects.outlineEnabled=!0;o.init();e.camera.controls.setLookAt(12,6,8,0,0,-10);e.scene.setup();const E=o.get(S),h=E.create(e);h.config.color.setHex(6710886);e.renderer.postproduction.customEffects.excludedMeshes.push(h.three);e.scene.three.background=null;const g=new B(3,3,3),w=new I({color:"#6528D7"}),a=new m(g,w);a.position.set(-2,1.5,0);e.scene.three.add(a);e.meshes.add(a);const l=new m(g,w);l.position.set(2,1.5,0);e.scene.three.add(l);e.meshes.add(l);const G=o.get(C);G.get(e);const n=o.get(P);n.enabled=!0;const r=o.get($);n.Type=D;const R=new c({color:"lightblue",side:2}),T=new p({color:"blue"}),W=new c({color:"blue",opacity:.5,side:2,transparent:!0});r.styles.create("Red lines",new Set([a]),e,T,R,W);const A=new c({color:"salmon",side:2}),O=new p({color:"red"}),U=new c({color:"red",opacity:.5,side:2,transparent:!0});r.styles.create("Blue lines",new Set([l]),e,O,A,U);u.ondblclick=()=>{n.enabled&&n.create(e)};window.onkeydown=t=>{(t.code==="Delete"||t.code==="Backspace")&&n.enabled&&n.delete(e)};const s=new M;s.showPanel(2);document.body.append(s.dom);s.dom.style.left="0px";s.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>s.begin());e.renderer.onAfterUpdate.add(()=>s.end());y.init();const i=d.create(()=>b`
  <bim-panel active label="Edges Clipper Tutorial" class="options-menu">
      <bim-panel-section collapsed label="Controls">
      
        <bim-label>Double click: Create clipping plane</bim-label>
        <bim-label>Delete key: Delete clipping plane</bim-label>
       
        
      </bim-panel-section>
      <bim-panel-section collapsed label="Others">
          
        <bim-checkbox label="Clipper enabled" checked 
          @change="${({target:t})=>{n.enabled=t.value,r.visible=t.value}}">
        </bim-checkbox>
        
        <bim-checkbox label="Clipper visible" checked 
          @change="${({target:t})=>{n.visible=t.value}}">
        </bim-checkbox>   
      
        <bim-color-input 
          label="Planes Color" color="#202932" 
          @input="${({target:t})=>{n.material.color.set(t.color)}}">
        </bim-color-input>
        
        <bim-number-input 
          slider step="0.01" label="Planes opacity" value="0.2" min="0.1" max="1"
          @change="${({target:t})=>{n.material.opacity=t.value}}">
        </bim-number-input>
        
        <bim-number-input 
          slider step="0.1" label="Planes size" value="5" min="2" max="10"
          @change="${({target:t})=>{n.size=t.value}}">
        </bim-number-input>
        
        <bim-button 
          label="Delete all" 
          @click="${()=>{n.deleteAll()}}">  
        </bim-button>        
        
        <bim-button 
          label="Rotate cubes" 
          @click="${()=>{a.rotation.x=2*Math.PI*Math.random(),a.rotation.y=2*Math.PI*Math.random(),a.rotation.z=2*Math.PI*Math.random(),a.updateMatrixWorld(),l.rotation.x=2*Math.PI*Math.random(),l.rotation.y=2*Math.PI*Math.random(),l.rotation.z=2*Math.PI*Math.random(),l.updateMatrixWorld(),r.update(!0)}}">  
        </bim-button>
       
        
      </bim-panel-section>
    </bim-panel>
    `);document.body.append(i);const q=d.create(()=>b`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{i.classList.contains("options-menu-visible")?i.classList.remove("options-menu-visible"):i.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(q);

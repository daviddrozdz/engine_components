import{k as d}from"./index-H1X3kY-x.js";import{S as f}from"./stats.min-GTpOrGrX.js";import{T as b,L as i,m as c}from"./index-ByMLC5eT.js";import{C as u,W as g,S as w,d as h,a as y,G as S,F as L,j as k}from"./index-Dge8UBVh.js";import"./_commonjsHelpers-Cpj98o6Y.js";const x=document.getElementById("container"),t=new u,I=t.get(g),e=I.create();e.scene=new w(t);e.renderer=new h(t,x);e.camera=new y(t);t.init();e.camera.controls.setLookAt(12,6,8,0,0,-10);e.scene.setup();const U=t.get(S);U.create(e);e.scene.three.background=null;const v=new L(t),B=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),F=await B.arrayBuffer(),O=new Uint8Array(F),j=v.load(O);e.scene.three.add(j);const A=t.get(k),a=new d;a.SetWasmPath("https://unpkg.com/web-ifc@0.0.68/",!0);await a.Init();const C=await fetch("https://thatopen.github.io/engine_components/resources/small.ifc"),E=await C.arrayBuffer(),R=new Uint8Array(E),J=a.OpenModel(R),n=new f;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());b.init();const s=i.create(()=>c`
  <bim-panel active label="IFC-JSON Exporter Tutorial" class="options-menu">
   <bim-panel-section collapsed label="Controls">
      <bim-panel-section style="padding-top: 10px;">
        <bim-button 
          label="Export properties JSON" 
          @click="${async()=>{const l=await A.export(a,J),p=JSON.stringify(l),m=new File([new Blob([p])],"properties.json"),r=URL.createObjectURL(m),o=document.createElement("a");o.download="properties.json",o.href=r,o.click(),URL.revokeObjectURL(r),o.remove()}}">  
        </bim-button>  

      </bim-panel-section>
    </bim-panel>
    `);document.body.append(s);const D=i.create(()=>c`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{s.classList.contains("options-menu-visible")?s.classList.remove("options-menu-visible"):s.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(D);

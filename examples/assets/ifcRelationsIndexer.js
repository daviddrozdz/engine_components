import{o as L,a0 as l,H as D,a1 as P,n as w}from"./index-H1X3kY-x.js";import{S as x}from"./stats.min-GTpOrGrX.js";import{T as U,L as b,m as g}from"./index-ByMLC5eT.js";import{C,W as O,S as v,I as F,d as A,e as k,f as y,U as B}from"./index-Dr_f0nHW.js";import{G as M}from"./index-CSOVGuvt.js";import{S as N,a as j}from"./simple-renderer-DuiqEjD-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./three.module-Bf8H_4UF.js";const T=document.getElementById("container"),s=new C,W=s.get(O),a=W.create();a.scene=new N(s);a.renderer=new j(s,T);a.camera=new v(s);s.init();a.camera.controls.setLookAt(12,6,8,0,0,-10);a.scene.setup();const $=s.get(M);$.create(a);a.scene.three.background=null;const R=s.get(F);await R.setup();const H=await fetch("https://thatopen.github.io/engine_components/resources/small.ifc"),z=await H.arrayBuffer(),S=new Uint8Array(z),e=await R.load(S);a.scene.three.add(e);const t=s.get(A);await t.process(e);const u=t.getEntityRelations(e,6518,"IsDefinedBy");if(u)for(const n of u){const i=await e.getProperties(n);console.log(i),await k.getPsetProps(e,n,async r=>{const o=await e.getProperties(r);console.log(o)})}const G=(n,i)=>{const r=new File([n],i),o=document.createElement("a");o.href=URL.createObjectURL(r),o.download=r.name,o.click(),URL.revokeObjectURL(o.href)},J=t.serializeModelRelations(e);console.log(J);const V=t.serializeAllRelations();delete t.relationMaps[e.uuid];const Y=await fetch("https://thatopen.github.io/engine_components/resources/small-relations.json"),_=t.getRelationsMapFromJSON(await Y.text());t.setRelationMap(e,_);const p=t.getEntityRelations(e,6518,"ContainedInStructure");if(p&&p[0]){const n=await e.getProperties(p[0]);console.log(n)}const q=t.getEntitiesWithRelation(e,"ContainedInStructure",138);console.log(`IfcBuildingStorey 138 has the following IfcElement: ${[...q]}`);const X=t.getEntitiesWithRelation(e,"ContainsElements",186);console.log(`IfcElement 186 is located inside IfcBuildingStorey ${[...X][0]}`);const K=t.getEntitiesWithRelation(e,"IsDefinedBy",303);console.log(`${[...K]} are defined by IfcPropertySet 303`);const m=s.get(y),I=await m.getEntityRef(e,L),h=new l.IfcPropertySingleValue(new l.IfcIdentifier("Property Name"),null,new l.IfcLabel("Property Value"),null);await m.setData(e,h);const f=new l.IfcPropertySet(new l.IfcGloballyUniqueId(B.create()),I?I[0]:null,new l.IfcLabel("My New Pset!"),null,[new D(h.expressID)]);await m.setData(e,f);const E=await e.getAllPropertiesOfType(P),Q=Object.values(E).map(n=>n.expressID);t.addEntitiesRelation(e,f.expressID,{type:w,inv:"DefinesOcurrence"},...Q);for(const n in E)t.addEntitiesRelation(e,Number(n),{type:w,inv:"IsDefinedBy"},f.expressID);const c=new x;c.showPanel(2);document.body.append(c.dom);c.dom.style.left="0px";c.dom.style.zIndex="unset";a.renderer.onBeforeUpdate.add(()=>c.begin());a.renderer.onAfterUpdate.add(()=>c.end());U.init();const d=b.create(()=>g`
  <bim-panel active label="IFC Relations Indexer Tutorial" class="options-menu">
  <bim-panel-section collapsed label="Controls">
      <bim-panel-section style="padding-top: 10px;">
      
        <bim-button 
          label="Download relations" 
          @click="${async()=>{G(V,"relations-index-all.json")}}">  
        </bim-button>        

        <bim-button 
          label="Download Model" 
          @click="${async()=>{const n=s.get(y);try{const i=await n.saveToIfc(e,S),r=new File([i],"new.ifc"),o=document.createElement("a");o.href=URL.createObjectURL(r),o.download=r.name,o.click(),URL.revokeObjectURL(o.href)}catch(i){alert(i)}}}">  
        </bim-button>        

      </bim-panel-section>
    </bim-panel>
    `);document.body.append(d);const Z=b.create(()=>g`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{d.classList.contains("options-menu-visible")?d.classList.remove("options-menu-visible"):d.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(Z);

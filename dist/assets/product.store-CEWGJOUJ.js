var O=Object.defineProperty;var S=(t,e,i)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var n=(t,e,i)=>S(t,typeof e!="symbol"?e+"":e,i);import{b3 as p,b4 as F,r as m}from"./index-CGMdi5Jg.js";import{a as q}from"./helpers-CXetX1G_.js";function x(){function t(e){var i,a,u;if(e.editData&&e.newData)for(let s=0;s<e.objects.value.length;s++)e.editData.value.id==e.objects.value[s].id&&e.objects.value.splice(s,1,e.newData);else if(!e.editData&&e.newData&&Array.isArray(e.newData))for(let s=0;s<e.newData.length;s++)e.objects.value.unshift(e.newData[s]);else!e.editData&&e.newData&&!Array.isArray(e.newData)&&e.objects.value.unshift(e.newData);if(e.deleteId&&e.deleteId.value!=""&&!e.editData)for(let s=0;s<e.objects.value.length;s++)e.deleteId.value==e.objects.value[s].id&&e.objects.value.splice(s,1);if((i=e.deleteIds)!=null&&i.value&&((a=e.deleteIds)==null?void 0:a.value.length)>0)for(let s=0;s<((u=e.deleteIds)==null?void 0:u.value.length);s++){const o=e.objects.value.findIndex(b=>{if(e.deleteIds)return b.id==e.deleteIds.value[s]});o>-1&&e.objects.value.splice(o,1)}U(e.objects)}return{updateObjectsList:t}}function U(t){t.value.sort((e,i)=>e.name>i.name?1:i.name>e.name?-1:0)}const l=class l{constructor(e,i,a,u,s,o,b,r,c,A,g,D,j,v,k,w,I,T,$){n(this,"id");n(this,"barcode");n(this,"brand");n(this,"categories");n(this,"cost");n(this,"description");n(this,"images");n(this,"name");n(this,"publishedAt");n(this,"price");n(this,"quantity");n(this,"sku");n(this,"status");n(this,"stockTracked");n(this,"type");n(this,"businessId");n(this,"createdAt");n(this,"updatedAt");n(this,"deletedAt");this.id=e,this.barcode=i,this.brand=a,this.categories=u,this.cost=s,this.description=o,this.images=b,this.name=r,this.publishedAt=c,this.price=A,this.quantity=g,this.sku=D,this.status=j,this.stockTracked=v,this.type=k,this.businessId=w,this.createdAt=I,this.updatedAt=T,this.deletedAt=$}static fromObject(e){return new l(e.id,e.barcode,e.brand,e.categories,e.cost,e.description,e.images,e.name,e.publishedAt,e.price,e.quantity,e.sku,e.status,e.stockTracked,e.type,e.businessId,e.createdAt,e.updatedAt,e.deletedAt)}static initEmpty(){return new l("","","",[],0,"","","",null,0,0,"","",!0,"","","","","")}toFormData(){const e=new FormData;return e.append("id",this.id),e.append("barcode",this.barcode),e.append("brand",this.brand),e.append("categories",this.categories.toString()),e.append("cost",`${this.cost}`),e.append("description",this.description),e.append("images",this.images),e.append("name",this.name),e.append("publishedAt",this.publishedAt?this.publishedAt:""),e.append("price",`${this.price}`),e.append("quantity",`${this.quantity}`),e.append("sku",this.sku),e.append("status",this.status),e.append("stockTracked",this.stockTracked?"1":"0"),e.append("type",this.type),e.append("businessId",this.businessId),e.append("createdAt",this.createdAt),e.append("updatedAt",this.updatedAt),e.append("deletedAt",this.deletedAt),e}};n(l,"STATUSES",{IN_STOCK:"in stock",OUT_OF_STOCK:"out of stock"});let f=l;const h="api/v1/products",y=async function(e){e||(e={itemsPerPage:-1,sortBy:["products.name"]});const i=q(e);return p.get(`${h}${i}`)},L=async function(e){return p.get(`${h}/${e}`)},P=async function(t){return p.post(h,t.toFormData())},C=async function(t){return p.post(`${h}/${t.id}?_method=PUT`,t.toFormData())},E=async function(t){return p.delete(`${h}/${t}`)},K=async function(t){return p.post(`${h}/mass-delete`,{ids:t})},d={getAll:y,get:L,create:P,update:C,destroy:E,massDestroy:K},_=F("productStore",()=>{const{updateObjectsList:t}=x(),e=m([]);async function i(r){const c=await d.getAll(r);e.value=c.data.data}async function a(r){const c=await d.get(r);return f.fromObject(c.data.data)}async function u(r){const c=await d.create(r);return f.fromObject(c.data.data)}async function s(r){const c=await d.update(r);return f.fromObject(c.data.data)}async function o(r){(await d.destroy(r)).data.success&&t({deleteId:m(r),objects:e})}async function b(r){await d.massDestroy(r),t({deleteIds:m(r),objects:e})}return{objects:e,getAll:i,get:a,create:u,update:s,destroy:o,massDestroy:b}});export{f as P,_ as u};

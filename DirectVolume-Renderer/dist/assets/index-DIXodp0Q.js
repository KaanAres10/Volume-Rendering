(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oc="180",sr={ROTATE:0,DOLLY:1,PAN:2},nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hp=0,Zc=1,up=2,Xu=1,fp=2,Un=3,oi=0,Ie=1,On=2,ri=0,ar=1,Kc=2,Jc=3,Qc=4,dp=5,bi=100,pp=101,mp=102,gp=103,_p=104,vp=200,xp=201,bp=202,yp=203,Jo=204,Qo=205,Sp=206,Ep=207,Mp=208,wp=209,Ap=210,Tp=211,Cp=212,Rp=213,Pp=214,tl=0,el=1,nl=2,ur=3,il=4,rl=5,sl=6,al=7,$u=0,Lp=1,Dp=2,si=0,Ip=1,Np=2,Up=3,Fp=4,Op=5,kp=6,Bp=7,Yu=300,fr=301,dr=302,ol=303,ll=304,Da=306,cl=1e3,ke=1001,hl=1002,$e=1003,zp=1004,gs=1005,Ce=1006,Za=1007,Si=1008,en=1009,qu=1010,ju=1011,Yr=1012,lc=1013,Ti=1014,kn=1015,as=1016,cc=1017,hc=1018,qr=1020,Zu=35902,Ku=35899,Ju=1021,Qu=1022,We=1023,jr=1026,Zr=1027,uc=1028,fc=1029,tf=1030,dc=1031,pc=1033,ea=33776,na=33777,ia=33778,ra=33779,ul=35840,fl=35841,dl=35842,pl=35843,ml=36196,gl=37492,_l=37496,vl=37808,xl=37809,bl=37810,yl=37811,Sl=37812,El=37813,Ml=37814,wl=37815,Al=37816,Tl=37817,Cl=37818,Rl=37819,Pl=37820,Ll=37821,Dl=36492,Il=36494,Nl=36495,Ul=36283,Fl=36284,Ol=36285,kl=36286,Hp=3200,Vp=3201,Gp=0,Wp=1,ni="",Ze="srgb",pr="srgb-linear",fa="linear",re="srgb",Oi=7680,th=519,Xp=512,$p=513,Yp=514,ef=515,qp=516,jp=517,Zp=518,Kp=519,eh=35044,Bl="300 es",gn=2e3,da=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$r=Math.PI/180,zl=180/Math.PI;function os(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]).toLowerCase()}function Kt(n,t,e){return Math.max(t,Math.min(e,n))}function Jp(n,t){return(n%t+t)%t}function Ka(n,t,e){return(1-e)*n+e*t}function Ir(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Qp={DEG2RAD:$r};class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ci{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==p||h!==_){let m=1-o;const f=l*d+c*p+h*_+u*g,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const C=Math.sqrt(y),R=Math.atan2(C,f*v);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}const S=o*v;if(l=l*m+d*S,c=c*m+p*S,h=h*m+_*S,u=u*m+g*S,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+h*u+l*p-c*d,t[e+1]=l*_+h*d+c*u-o*p,t[e+2]=c*_+h*p+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,e=0,i=0){Q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),h=2*(o*e-s*r),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new Q,nh=new Ci;class $t{constructor(t,e,i,r,s,a,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],_=i[8],g=r[0],m=r[3],f=r[6],v=r[1],y=r[4],S=r[7],C=r[2],R=r[5],A=r[8];return s[0]=a*g+o*v+l*C,s[3]=a*m+o*y+l*R,s[6]=a*f+o*S+l*A,s[1]=c*g+h*v+u*C,s[4]=c*m+h*y+u*R,s[7]=c*f+h*S+u*A,s[2]=d*g+p*v+_*C,s[5]=d*m+p*y+_*R,s[8]=d*f+p*S+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,_=e*u+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(r*c-h*i)*g,t[2]=(o*i-r*a)*g,t[3]=d*g,t[4]=(h*e-r*l)*g,t[5]=(r*s-o*e)*g,t[6]=p*g,t[7]=(i*l-c*e)*g,t[8]=(a*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qa.makeScale(t,e)),this}rotate(t){return this.premultiply(Qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qa=new $t;function nf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tm(){const n=pa("canvas");return n.style.display="block",n}const ih={};function Kr(n){n in ih||(ih[n]=!0,console.warn(n))}function em(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const rh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nm(){const n={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===re&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(r.r=or(r.r),r.g=or(r.g),r.b=or(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ni?fa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[pr]:{primaries:t,whitePoint:i,transfer:fa,toXYZ:rh,fromXYZ:sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:i,transfer:re,toXYZ:rh,fromXYZ:sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),n}const te=nm();function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ki;class im{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ki===void 0&&(ki=pa("canvas")),ki.width=t.width,ki.height=t.height;const r=ki.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=ki}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hn(e[i]/255)*255):e[i]=Hn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rm=0;class mc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(to(r[a].image)):s.push(to(r[a]))}else s=to(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function to(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?im.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sm=0;const eo=new Q;class Ne extends Ii{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,i=ke,r=ke,s=Ce,a=Si,o=We,l=en,c=Ne.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=os(),this.name="",this.source=new mc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(eo).x}get height(){return this.source.getSize(eo).y}get depth(){return this.source.getSize(eo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cl:t.x=t.x-Math.floor(t.x);break;case ke:t.x=t.x<0?0:1;break;case hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cl:t.y=t.y-Math.floor(t.y);break;case ke:t.y=t.y<0?0:1;break;case hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Yu;Ne.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,r=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,S=(p+1)/2,C=(f+1)/2,R=(h+d)/4,A=(u+g)/4,N=(_+m)/4;return y>S&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=R/i,s=A/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=N/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=N/s),this.set(i,r,s,e),this}let v=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class am extends Ii{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new Ne(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ce,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new mc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends am{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class rf extends Ne{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sf extends Ne{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(s,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_s.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_s.copy(i.boundingBox)),_s.applyMatrix4(t.matrixWorld),this.union(_s)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Nr),vs.subVectors(this.max,Nr),Bi.subVectors(t.a,Nr),zi.subVectors(t.b,Nr),Hi.subVectors(t.c,Nr),jn.subVectors(zi,Bi),Zn.subVectors(Hi,zi),di.subVectors(Bi,Hi);let e=[0,-jn.z,jn.y,0,-Zn.z,Zn.y,0,-di.z,di.y,jn.z,0,-jn.x,Zn.z,0,-Zn.x,di.z,0,-di.x,-jn.y,jn.x,0,-Zn.y,Zn.x,0,-di.y,di.x,0];return!no(e,Bi,zi,Hi,vs)||(e=[1,0,0,0,1,0,0,0,1],!no(e,Bi,zi,Hi,vs))?!1:(xs.crossVectors(jn,Zn),e=[xs.x,xs.y,xs.z],no(e,Bi,zi,Hi,vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Cn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],rn=new Q,_s=new ls,Bi=new Q,zi=new Q,Hi=new Q,jn=new Q,Zn=new Q,di=new Q,Nr=new Q,vs=new Q,xs=new Q,pi=new Q;function no(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){pi.fromArray(n,s);const o=r.x*Math.abs(pi.x)+r.y*Math.abs(pi.y)+r.z*Math.abs(pi.z),l=t.dot(pi),c=e.dot(pi),h=i.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const om=new ls,Ur=new Q,io=new Q;class Ia{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):om.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);const e=Ur.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ur,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(io)),this.expandByPoint(Ur.copy(t.center).sub(io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Rn=new Q,ro=new Q,bs=new Q,Kn=new Q,so=new Q,ys=new Q,ao=new Q;class gc{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ro.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(ro);const s=t.distanceTo(e)*.5,a=-this.direction.dot(bs),o=Kn.dot(this.direction),l=-Kn.dot(bs),c=Kn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,_;if(h>0)if(u=a*l-o,d=a*o-l,_=s*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ro).addScaledVector(bs,d),p}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const i=Rn.dot(this.direction),r=Rn.dot(Rn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,i,r,s){so.subVectors(e,t),ys.subVectors(i,t),ao.crossVectors(so,ys);let a=this.direction.dot(ao),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,t);const l=o*this.direction.dot(ys.crossVectors(Kn,ys));if(l<0)return null;const c=o*this.direction.dot(so.cross(Kn));if(c<0||l+c>a)return null;const h=-o*Kn.dot(ao);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,i,r,s,a,o,l,c,h,u,d,p,_,g,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,h,u,d,p,_,g,m)}set(t,e,i,r,s,a,o,l,c,h,u,d,p,_,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Vi.setFromMatrixColumn(t,0).length(),s=1/Vi.setFromMatrixColumn(t,1).length(),a=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-p,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lm,t,cm)}lookAt(t,e,i){const r=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Jn.crossVectors(i,Ve),Jn.lengthSq()===0&&(Math.abs(i.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Jn.crossVectors(i,Ve)),Jn.normalize(),Ss.crossVectors(Ve,Jn),r[0]=Jn.x,r[4]=Ss.x,r[8]=Ve.x,r[1]=Jn.y,r[5]=Ss.y,r[9]=Ve.y,r[2]=Jn.z,r[6]=Ss.z,r[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],f=i[14],v=i[3],y=i[7],S=i[11],C=i[15],R=r[0],A=r[4],N=r[8],E=r[12],w=r[1],I=r[5],T=r[9],F=r[13],x=r[2],z=r[6],J=r[10],G=r[14],Y=r[3],$=r[7],lt=r[11],V=r[15];return s[0]=a*R+o*w+l*x+c*Y,s[4]=a*A+o*I+l*z+c*$,s[8]=a*N+o*T+l*J+c*lt,s[12]=a*E+o*F+l*G+c*V,s[1]=h*R+u*w+d*x+p*Y,s[5]=h*A+u*I+d*z+p*$,s[9]=h*N+u*T+d*J+p*lt,s[13]=h*E+u*F+d*G+p*V,s[2]=_*R+g*w+m*x+f*Y,s[6]=_*A+g*I+m*z+f*$,s[10]=_*N+g*T+m*J+f*lt,s[14]=_*E+g*F+m*G+f*V,s[3]=v*R+y*w+S*x+C*Y,s[7]=v*A+y*I+S*z+C*$,s[11]=v*N+y*T+S*J+C*lt,s[15]=v*E+y*F+S*G+C*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],_=t[3],g=t[7],m=t[11],f=t[15];return _*(+s*l*u-r*c*u-s*o*d+i*c*d+r*o*p-i*l*p)+g*(+e*l*p-e*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+m*(+e*c*u-e*o*p-s*a*u+i*a*p+s*o*h-i*c*h)+f*(-r*o*h-e*l*u+e*o*d+r*a*u-i*a*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],_=t[12],g=t[13],m=t[14],f=t[15],v=u*m*c-g*d*c+g*l*p-o*m*p-u*l*f+o*d*f,y=_*d*c-h*m*c-_*l*p+a*m*p+h*l*f-a*d*f,S=h*g*c-_*u*c+_*o*p-a*g*p-h*o*f+a*u*f,C=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,R=e*v+i*y+r*S+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=v*A,t[1]=(g*d*s-u*m*s-g*r*p+i*m*p+u*r*f-i*d*f)*A,t[2]=(o*m*s-g*l*s+g*r*c-i*m*c-o*r*f+i*l*f)*A,t[3]=(u*l*s-o*d*s-u*r*c+i*d*c+o*r*p-i*l*p)*A,t[4]=y*A,t[5]=(h*m*s-_*d*s+_*r*p-e*m*p-h*r*f+e*d*f)*A,t[6]=(_*l*s-a*m*s-_*r*c+e*m*c+a*r*f-e*l*f)*A,t[7]=(a*d*s-h*l*s+h*r*c-e*d*c-a*r*p+e*l*p)*A,t[8]=S*A,t[9]=(_*u*s-h*g*s-_*i*p+e*g*p+h*i*f-e*u*f)*A,t[10]=(a*g*s-_*o*s+_*i*c-e*g*c-a*i*f+e*o*f)*A,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*p-e*o*p)*A,t[12]=C*A,t[13]=(h*g*r-_*u*r+_*i*d-e*g*d-h*i*m+e*u*m)*A,t[14]=(_*o*r-a*g*r-_*i*l+e*g*l+a*i*m-e*o*m)*A,t[15]=(a*u*r-h*o*r+h*i*l-e*u*l-a*i*d+e*o*d)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,_=s*u,g=a*h,m=a*u,f=o*u,v=l*c,y=l*h,S=l*u,C=i.x,R=i.y,A=i.z;return r[0]=(1-(g+f))*C,r[1]=(p+S)*C,r[2]=(_-y)*C,r[3]=0,r[4]=(p-S)*R,r[5]=(1-(d+f))*R,r[6]=(m+v)*R,r[7]=0,r[8]=(_+y)*A,r[9]=(m-v)*A,r[10]=(1-(d+g))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Vi.set(r[0],r[1],r[2]).length();const a=Vi.set(r[4],r[5],r[6]).length(),o=Vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],sn.copy(this);const c=1/s,h=1/a,u=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=gn,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(i-r),d=(e+t)/(e-t),p=(i+r)/(i-r);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===gn)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===da)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=gn,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-r),d=-(e+t)/(e-t),p=-(i+r)/(i-r);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===gn)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===da)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Vi=new Q,sn=new _e,lm=new Q(0,0,0),cm=new Q(1,1,1),Jn=new Q,Ss=new Q,Ve=new Q,ah=new _e,oh=new Ci;class Wn{constructor(t=0,e=0,i=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ah,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oh.setFromEuler(this),this.setFromQuaternion(oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class af{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hm=0;const lh=new Q,Gi=new Ci,Pn=new _e,Es=new Q,Fr=new Q,um=new Q,fm=new Ci,ch=new Q(1,0,0),hh=new Q(0,1,0),uh=new Q(0,0,1),fh={type:"added"},dm={type:"removed"},Wi={type:"childadded",child:null},oo={type:"childremoved",child:null};class Be extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new Q,e=new Wn,i=new Ci,r=new Q(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _e},normalMatrix:{value:new $t}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new af,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(ch,t)}rotateY(t){return this.rotateOnAxis(hh,t)}rotateZ(t){return this.rotateOnAxis(uh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ch,t)}translateY(t){return this.translateOnAxis(hh,t)}translateZ(t){return this.translateOnAxis(uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Es.copy(t):Es.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Fr,Es,this.up):Pn.lookAt(Es,Fr,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Gi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fh),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dm),oo.child=t,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fh),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,um),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Be.DEFAULT_UP=new Q(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new Q,Ln=new Q,lo=new Q,Dn=new Q,Xi=new Q,$i=new Q,dh=new Q,co=new Q,ho=new Q,uo=new Q,fo=new de,po=new de,mo=new de;class Qe{constructor(t=new Q,e=new Q,i=new Q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),an.subVectors(t,e),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){an.subVectors(r,e),Ln.subVectors(i,e),lo.subVectors(t,e);const a=an.dot(an),o=an.dot(Ln),l=an.dot(lo),c=Ln.dot(Ln),h=Ln.dot(lo),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,_=(a*h-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,i),mo.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(fo,s.x),a.addScaledVector(po,s.y),a.addScaledVector(mo,s.z),a}static isFrontFacing(t,e,i,r){return an.subVectors(i,e),Ln.subVectors(t,e),an.cross(Ln).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),an.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Qe.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Xi.subVectors(r,i),$i.subVectors(s,i),co.subVectors(t,i);const l=Xi.dot(co),c=$i.dot(co);if(l<=0&&c<=0)return e.copy(i);ho.subVectors(t,r);const h=Xi.dot(ho),u=$i.dot(ho);if(h>=0&&u<=h)return e.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Xi,a);uo.subVectors(t,s);const p=Xi.dot(uo),_=$i.dot(uo);if(_>=0&&p<=_)return e.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector($i,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return dh.subVectors(s,r),o=(u-h)/(u-h+(p-_)),e.copy(r).addScaledVector(dh,o);const f=1/(m+g+d);return a=g*f,o=d*f,e.copy(i).addScaledVector(Xi,a).addScaledVector($i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function go(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}let ne=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=te.workingColorSpace){if(t=Jp(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=go(a,s,t+1/3),this.g=go(a,s,t),this.b=go(a,s,t-1/3)}return te.colorSpaceToWorking(this,r),this}setStyle(t,e=Ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const i=of[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return te.workingToColorSpace(Ae.copy(this),t),Math.round(Kt(Ae.r*255,0,255))*65536+Math.round(Kt(Ae.g*255,0,255))*256+Math.round(Kt(Ae.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ae.copy(this),e);const i=Ae.r,r=Ae.g,s=Ae.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Ze){te.workingToColorSpace(Ae.copy(this),t);const e=Ae.r,i=Ae.g,r=Ae.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Ms);const i=Ka(Qn.h,Ms.h,e),r=Ka(Qn.s,Ms.s,e),s=Ka(Qn.l,Ms.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ae=new ne;ne.NAMES=of;let pm=0;class cs extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=os(),this.name="",this.type="Material",this.blending=ar,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Qo,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jo&&(i.blendSrc=this.blendSrc),this.blendDst!==Qo&&(i.blendDst=this.blendDst),this.blendEquation!==bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==th&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class lf extends cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new Q,ws=new qt;let mm=0;class vn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=eh,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ws.fromBufferAttribute(this,e),ws.applyMatrix3(t),this.setXY(e,ws.x,ws.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ir(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),r=Fe(r,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eh&&(t.usage=this.usage),t}}class cf extends vn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class hf extends vn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class xn extends vn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let gm=0;const je=new _e,_o=new Be,Yi=new Q,Ge=new ls,Or=new ls,ye=new Q;class Yn extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nf(t)?hf:cf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $t().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,i){return je.makeTranslation(t,e,i),this.applyMatrix4(je),this}scale(t,e,i){return je.makeScale(t,e,i),this.applyMatrix4(je),this}lookAt(t){return _o.lookAt(t),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xn(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ge.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ia);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const i=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Ge.min,Or.min),Ge.expandByPoint(ye),ye.addVectors(Ge.max,Or.max),Ge.expandByPoint(ye)):(Ge.expandByPoint(Or.min),Ge.expandByPoint(Or.max))}Ge.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)ye.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ye));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ye.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(t,c),ye.add(Yi)),r=Math.max(r,i.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new Q,l[N]=new Q;const c=new Q,h=new Q,u=new Q,d=new qt,p=new qt,_=new qt,g=new Q,m=new Q;function f(N,E,w){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,w),d.fromBufferAttribute(s,N),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,w),h.sub(c),u.sub(c),p.sub(d),_.sub(d);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(I),o[N].add(g),o[E].add(g),o[w].add(g),l[N].add(m),l[E].add(m),l[w].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let N=0,E=v.length;N<E;++N){const w=v[N],I=w.start,T=w.count;for(let F=I,x=I+T;F<x;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new Q,S=new Q,C=new Q,R=new Q;function A(N){C.fromBufferAttribute(r,N),R.copy(C);const E=o[N];y.copy(E),y.sub(C.multiplyScalar(C.dot(E))).normalize(),S.crossVectors(R,E);const I=S.dot(l[N])<0?-1:1;a.setXYZW(N,y.x,y.y,y.z,I)}for(let N=0,E=v.length;N<E;++N){const w=v[N],I=w.start,T=w.count;for(let F=I,x=I+T;F<x;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new Q,s=new Q,a=new Q,o=new Q,l=new Q,c=new Q,h=new Q,u=new Q;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let f=0;f<h;f++)d[_++]=c[p++]}return new vn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Yn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new _e,mi=new gc,As=new Ia,mh=new Q,Ts=new Q,Cs=new Q,Rs=new Q,vo=new Q,Ps=new Q,gh=new Q,Ls=new Q;class _n extends Be{constructor(t=new Yn,e=new lf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(vo.fromBufferAttribute(u,t),a?Ps.addScaledVector(vo,h):Ps.addScaledVector(vo.sub(e),h))}e.add(Ps)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(s),mi.copy(t.ray).recast(t.near),!(As.containsPoint(mi.origin)===!1&&(mi.intersectSphere(As,mh)===null||mi.origin.distanceToSquared(mh)>(t.far-t.near)**2))&&(ph.copy(s).invert(),mi.copy(t.ray).applyMatrix4(ph),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=y;S<C;S+=3){const R=o.getX(S),A=o.getX(S+1),N=o.getX(S+2);r=Ds(this,f,t,i,c,h,u,R,A,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);r=Ds(this,a,t,i,c,h,u,v,y,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=y;S<C;S+=3){const R=S,A=S+1,N=S+2;r=Ds(this,f,t,i,c,h,u,R,A,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=m,y=m+1,S=m+2;r=Ds(this,a,t,i,c,h,u,v,y,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function _m(n,t,e,i,r,s,a,o){let l;if(t.side===Ie?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===oi,o),l===null)return null;Ls.copy(o),Ls.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ls);return c<e.near||c>e.far?null:{distance:c,point:Ls.clone(),object:n}}function Ds(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,Ts),n.getVertexPosition(l,Cs),n.getVertexPosition(c,Rs);const h=_m(n,t,e,i,Ts,Cs,Rs,gh);if(h){const u=new Q;Qe.getBarycoord(gh,Ts,Cs,Rs,u),r&&(h.uv=Qe.getInterpolatedAttribute(r,o,l,c,u,new qt)),s&&(h.uv1=Qe.getInterpolatedAttribute(s,o,l,c,u,new qt)),a&&(h.normal=Qe.getInterpolatedAttribute(a,o,l,c,u,new Q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new Q,materialIndex:0};Qe.getNormal(Ts,Cs,Rs,d.normal),h.face=d,h.barycoord=u}return h}class Mr extends Yn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(h,3)),this.setAttribute("uv",new xn(u,2));function _(g,m,f,v,y,S,C,R,A,N,E){const w=S/A,I=C/N,T=S/2,F=C/2,x=R/2,z=A+1,J=N+1;let G=0,Y=0;const $=new Q;for(let lt=0;lt<J;lt++){const V=lt*I-F;for(let W=0;W<z;W++){const yt=W*w-T;$[g]=yt*v,$[m]=V*y,$[f]=x,c.push($.x,$.y,$.z),$[g]=0,$[m]=0,$[f]=R>0?1:-1,h.push($.x,$.y,$.z),u.push(W/A),u.push(1-lt/N),G+=1}}for(let lt=0;lt<N;lt++)for(let V=0;V<A;V++){const W=d+V+z*lt,yt=d+V+z*(lt+1),gt=d+(V+1)+z*(lt+1),ut=d+(V+1)+z*lt;l.push(W,yt,ut),l.push(yt,gt,ut),Y+=6}o.addGroup(p,Y,E),p+=Y,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function De(n){const t={};for(let e=0;e<n.length;e++){const i=mr(n[e]);for(const r in i)t[r]=i[r]}return t}function vm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function uf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const xm={clone:mr,merge:De};var bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bm,this.fragmentShader=ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=vm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ff extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new Q,_h=new qt,vh=new qt;class Ke extends ff{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zl*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,_h,vh),e.subVectors(vh,_h)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($r*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qi=-90,ji=1;class Sm extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ke(qi,ji,t,e);r.layers=this.layers,this.add(r);const s=new Ke(qi,ji,t,e);s.layers=this.layers,this.add(s);const a=new Ke(qi,ji,t,e);a.layers=this.layers,this.add(a);const o=new Ke(qi,ji,t,e);o.layers=this.layers,this.add(o);const l=new Ke(qi,ji,t,e);l.layers=this.layers,this.add(l);const c=new Ke(qi,ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===da)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class df extends Ne{constructor(t=[],e=fr,i,r,s,a,o,l,c,h){super(t,e,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Em extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new df(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mr(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:ri});s.uniforms.tEquirect.value=e;const a=new _n(r,s),o=e.minFilter;return e.minFilter===Si&&(e.minFilter=Ce),new Sm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}class Is extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mm={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Is;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class wm extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class pf extends Ne{constructor(t=null,e=1,i=1,r,s,a,o,l,c=$e,h=$e,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bo=new Q,Am=new Q,Tm=new $t;class ei{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=bo.subVectors(i,e).cross(Am.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(bo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Tm.getNormalMatrix(t),r=this.coplanarPoint(bo).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Ia,Cm=new qt(.5,.5),Ns=new Q;class mf{constructor(t=new ei,e=new ei,i=new ei,r=new ei,s=new ei,a=new ei){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=gn,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],_=s[8],g=s[9],m=s[10],f=s[11],v=s[12],y=s[13],S=s[14],C=s[15];if(r[0].setComponents(c-a,p-h,f-_,C-v).normalize(),r[1].setComponents(c+a,p+h,f+_,C+v).normalize(),r[2].setComponents(c+o,p+u,f+g,C+y).normalize(),r[3].setComponents(c-o,p-u,f-g,C-y).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,p-d,f-m,C-S).normalize();else if(r[4].setComponents(c-l,p-d,f-m,C-S).normalize(),e===gn)r[5].setComponents(c+l,p+d,f+m,C+S).normalize();else if(e===da)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){gi.center.set(0,0,0);const e=Cm.distanceTo(t.center);return gi.radius=.7071067811865476+e,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ns.x=r.normal.x>0?t.max.x:t.min.x,Ns.y=r.normal.y>0?t.max.y:t.min.y,Ns.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gf extends cs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ma=new Q,ga=new Q,xh=new _e,kr=new gc,Us=new Ia,yo=new Q,bh=new Q;class Rm extends Be{constructor(t=new Yn,e=new gf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)ma.fromBufferAttribute(e,r-1),ga.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=ma.distanceTo(ga);t.setAttribute("lineDistance",new xn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere),Us.applyMatrix4(r),Us.radius+=s,t.ray.intersectsSphere(Us)===!1)return;xh.copy(r).invert(),kr.copy(t.ray).applyMatrix4(xh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=c){const f=h.getX(g),v=h.getX(g+1),y=Fs(this,t,kr,l,f,v,g);y&&e.push(y)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(p),f=Fs(this,t,kr,l,g,m,_-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=c){const f=Fs(this,t,kr,l,g,g+1,g);f&&e.push(f)}if(this.isLineLoop){const g=Fs(this,t,kr,l,_-1,p,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fs(n,t,e,i,r,s,a){const o=n.geometry.attributes.position;if(ma.fromBufferAttribute(o,r),ga.fromBufferAttribute(o,s),e.distanceSqToSegment(ma,ga,yo,bh)>i)return;yo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(yo);if(!(c<t.near||c>t.far))return{distance:c,point:bh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const yh=new Q,Sh=new Q;class Pm extends Rm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)yh.fromBufferAttribute(e,r),Sh.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+yh.distanceTo(Sh);t.setAttribute("lineDistance",new xn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _f extends Ne{constructor(t,e,i=Ti,r,s,a,o=$e,l=$e,c,h=jr,u=1){if(h!==jr&&h!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class vf extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}const Os=new Q,ks=new Q,So=new Q,Bs=new Qe;class Lm extends Yn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos($r*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:f}=Bs;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Bs.getNormal(So),u[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const y=(v+1)%3,S=u[v],C=u[y],R=Bs[h[v]],A=Bs[h[y]],N=`${S}_${C}`,E=`${C}_${S}`;E in d&&d[E]?(So.dot(d[E].normal)<=s&&(p.push(R.x,R.y,R.z),p.push(A.x,A.y,A.z)),d[E]=null):N in d||(d[N]={index0:c[v],index1:c[y],normal:So.clone()})}}for(const _ in d)if(d[_]){const{index0:g,index1:m}=d[_];Os.fromBufferAttribute(o,g),ks.fromBufferAttribute(o,m),p.push(Os.x,Os.y,Os.z),p.push(ks.x,ks.y,ks.z)}this.setAttribute("position",new xn(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Na extends Yn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=t/o,d=e/l,p=[],_=[],g=[],m=[];for(let f=0;f<h;f++){const v=f*d-a;for(let y=0;y<c;y++){const S=y*u-s;_.push(S,-v,0),g.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const y=v+c*f,S=v+c*(f+1),C=v+1+c*(f+1),R=v+1+c*f;p.push(y,S,R),p.push(S,C,R)}this.setIndex(p),this.setAttribute("position",new xn(_,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Na(t.width,t.height,t.widthSegments,t.heightSegments)}}class Dm extends Xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Im extends cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nm extends cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Um extends ff{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Fm extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Eh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Om extends Ii{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Mh(n,t,e,i){const r=km(i);switch(e){case Ju:return n*t;case uc:return n*t/r.components*r.byteLength;case fc:return n*t/r.components*r.byteLength;case tf:return n*t*2/r.components*r.byteLength;case dc:return n*t*2/r.components*r.byteLength;case Qu:return n*t*3/r.components*r.byteLength;case We:return n*t*4/r.components*r.byteLength;case pc:return n*t*4/r.components*r.byteLength;case ea:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ia:case ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:case pl:return Math.max(n,16)*Math.max(t,8)/4;case ul:case dl:return Math.max(n,8)*Math.max(t,8)/2;case ml:case gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case bl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case wl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Dl:case Il:case Nl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ul:case Fl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ol:case kl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function km(n){switch(n){case en:case qu:return{byteLength:1,components:1};case Yr:case ju:case as:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case Ti:case lc:case kn:return{byteLength:4,components:1};case Zu:case Ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xf(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Bm(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){const _=u[d],g=u[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){const g=u[p];n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$m=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,t0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,c0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,h0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,D0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ng=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ag=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ig=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ng=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$g=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,__=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:zm,alphahash_pars_fragment:Hm,alphamap_fragment:Vm,alphamap_pars_fragment:Gm,alphatest_fragment:Wm,alphatest_pars_fragment:Xm,aomap_fragment:$m,aomap_pars_fragment:Ym,batching_pars_vertex:qm,batching_vertex:jm,begin_vertex:Zm,beginnormal_vertex:Km,bsdfs:Jm,iridescence_fragment:Qm,bumpmap_pars_fragment:t0,clipping_planes_fragment:e0,clipping_planes_pars_fragment:n0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:r0,color_fragment:s0,color_pars_fragment:a0,color_pars_vertex:o0,color_vertex:l0,common:c0,cube_uv_reflection_fragment:h0,defaultnormal_vertex:u0,displacementmap_pars_vertex:f0,displacementmap_vertex:d0,emissivemap_fragment:p0,emissivemap_pars_fragment:m0,colorspace_fragment:g0,colorspace_pars_fragment:_0,envmap_fragment:v0,envmap_common_pars_fragment:x0,envmap_pars_fragment:b0,envmap_pars_vertex:y0,envmap_physical_pars_fragment:D0,envmap_vertex:S0,fog_vertex:E0,fog_pars_vertex:M0,fog_fragment:w0,fog_pars_fragment:A0,gradientmap_pars_fragment:T0,lightmap_pars_fragment:C0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:P0,lights_pars_begin:L0,lights_toon_fragment:I0,lights_toon_pars_fragment:N0,lights_phong_fragment:U0,lights_phong_pars_fragment:F0,lights_physical_fragment:O0,lights_physical_pars_fragment:k0,lights_fragment_begin:B0,lights_fragment_maps:z0,lights_fragment_end:H0,logdepthbuf_fragment:V0,logdepthbuf_pars_fragment:G0,logdepthbuf_pars_vertex:W0,logdepthbuf_vertex:X0,map_fragment:$0,map_pars_fragment:Y0,map_particle_fragment:q0,map_particle_pars_fragment:j0,metalnessmap_fragment:Z0,metalnessmap_pars_fragment:K0,morphinstance_vertex:J0,morphcolor_vertex:Q0,morphnormal_vertex:tg,morphtarget_pars_vertex:eg,morphtarget_vertex:ng,normal_fragment_begin:ig,normal_fragment_maps:rg,normal_pars_fragment:sg,normal_pars_vertex:ag,normal_vertex:og,normalmap_pars_fragment:lg,clearcoat_normal_fragment_begin:cg,clearcoat_normal_fragment_maps:hg,clearcoat_pars_fragment:ug,iridescence_pars_fragment:fg,opaque_fragment:dg,packing:pg,premultiplied_alpha_fragment:mg,project_vertex:gg,dithering_fragment:_g,dithering_pars_fragment:vg,roughnessmap_fragment:xg,roughnessmap_pars_fragment:bg,shadowmap_pars_fragment:yg,shadowmap_pars_vertex:Sg,shadowmap_vertex:Eg,shadowmask_pars_fragment:Mg,skinbase_vertex:wg,skinning_pars_vertex:Ag,skinning_vertex:Tg,skinnormal_vertex:Cg,specularmap_fragment:Rg,specularmap_pars_fragment:Pg,tonemapping_fragment:Lg,tonemapping_pars_fragment:Dg,transmission_fragment:Ig,transmission_pars_fragment:Ng,uv_pars_fragment:Ug,uv_pars_vertex:Fg,uv_vertex:Og,worldpos_vertex:kg,background_vert:Bg,background_frag:zg,backgroundCube_vert:Hg,backgroundCube_frag:Vg,cube_vert:Gg,cube_frag:Wg,depth_vert:Xg,depth_frag:$g,distanceRGBA_vert:Yg,distanceRGBA_frag:qg,equirect_vert:jg,equirect_frag:Zg,linedashed_vert:Kg,linedashed_frag:Jg,meshbasic_vert:Qg,meshbasic_frag:t_,meshlambert_vert:e_,meshlambert_frag:n_,meshmatcap_vert:i_,meshmatcap_frag:r_,meshnormal_vert:s_,meshnormal_frag:a_,meshphong_vert:o_,meshphong_frag:l_,meshphysical_vert:c_,meshphysical_frag:h_,meshtoon_vert:u_,meshtoon_frag:f_,points_vert:d_,points_frag:p_,shadow_vert:m_,shadow_frag:g_,sprite_vert:__,sprite_frag:v_},wt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},pn={basic:{uniforms:De([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:De([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:De([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:De([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:De([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:De([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:De([wt.points,wt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:De([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:De([wt.common,wt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:De([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:De([wt.sprite,wt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:De([wt.common,wt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:De([wt.lights,wt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};pn.physical={uniforms:De([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const zs={r:0,b:0,g:0},_i=new Wn,x_=new _e;function b_(n,t,e,i,r,s,a){const o=new ne(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function _(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function g(y){let S=!1;const C=_(y);C===null?f(o,l):C&&C.isColor&&(f(C,1),S=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,S){const C=_(S);C&&(C.isCubeTexture||C.mapping===Da)?(h===void 0&&(h=new _n(new Mr(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:mr(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),_i.copy(S.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(x_.makeRotationFromEuler(_i)),h.material.toneMapped=te.getTransfer(C.colorSpace)!==re,(u!==C||d!==C.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,p=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new _n(new Na(2,2),new Xn({name:"BackgroundMaterial",uniforms:mr(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=te.getTransfer(C.colorSpace)!==re,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,S){y.getRGB(zs,uf(n)),i.buffers.color.setClear(zs.r,zs.g,zs.b,S,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:g,addToRenderList:m,dispose:v}}function y_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(w,I,T,F,x){let z=!1;const J=u(F,T,I);s!==J&&(s=J,c(s.object)),z=p(w,F,T,x),z&&_(w,F,T,x),x!==null&&t.update(x,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,S(w,I,T,F),x!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(x).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function h(w){return n.deleteVertexArray(w)}function u(w,I,T){const F=T.wireframe===!0;let x=i[w.id];x===void 0&&(x={},i[w.id]=x);let z=x[I.id];z===void 0&&(z={},x[I.id]=z);let J=z[F];return J===void 0&&(J=d(l()),z[F]=J),J}function d(w){const I=[],T=[],F=[];for(let x=0;x<e;x++)I[x]=0,T[x]=0,F[x]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:T,attributeDivisors:F,object:w,attributes:{},index:null}}function p(w,I,T,F){const x=s.attributes,z=I.attributes;let J=0;const G=T.getAttributes();for(const Y in G)if(G[Y].location>=0){const lt=x[Y];let V=z[Y];if(V===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(V=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(V=w.instanceColor)),lt===void 0||lt.attribute!==V||V&&lt.data!==V.data)return!0;J++}return s.attributesNum!==J||s.index!==F}function _(w,I,T,F){const x={},z=I.attributes;let J=0;const G=T.getAttributes();for(const Y in G)if(G[Y].location>=0){let lt=z[Y];lt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(lt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(lt=w.instanceColor));const V={};V.attribute=lt,lt&&lt.data&&(V.data=lt.data),x[Y]=V,J++}s.attributes=x,s.attributesNum=J,s.index=F}function g(){const w=s.newAttributes;for(let I=0,T=w.length;I<T;I++)w[I]=0}function m(w){f(w,0)}function f(w,I){const T=s.newAttributes,F=s.enabledAttributes,x=s.attributeDivisors;T[w]=1,F[w]===0&&(n.enableVertexAttribArray(w),F[w]=1),x[w]!==I&&(n.vertexAttribDivisor(w,I),x[w]=I)}function v(){const w=s.newAttributes,I=s.enabledAttributes;for(let T=0,F=I.length;T<F;T++)I[T]!==w[T]&&(n.disableVertexAttribArray(T),I[T]=0)}function y(w,I,T,F,x,z,J){J===!0?n.vertexAttribIPointer(w,I,T,x,z):n.vertexAttribPointer(w,I,T,F,x,z)}function S(w,I,T,F){g();const x=F.attributes,z=T.getAttributes(),J=I.defaultAttributeValues;for(const G in z){const Y=z[G];if(Y.location>=0){let $=x[G];if($===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),$!==void 0){const lt=$.normalized,V=$.itemSize,W=t.get($);if(W===void 0)continue;const yt=W.buffer,gt=W.type,ut=W.bytesPerElement,st=gt===n.INT||gt===n.UNSIGNED_INT||$.gpuType===lc;if($.isInterleavedBufferAttribute){const ct=$.data,dt=ct.stride,St=$.offset;if(ct.isInstancedInterleavedBuffer){for(let At=0;At<Y.locationSize;At++)f(Y.location+At,ct.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let At=0;At<Y.locationSize;At++)m(Y.location+At);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let At=0;At<Y.locationSize;At++)y(Y.location+At,V/Y.locationSize,gt,lt,dt*ut,(St+V/Y.locationSize*At)*ut,st)}else{if($.isInstancedBufferAttribute){for(let ct=0;ct<Y.locationSize;ct++)f(Y.location+ct,$.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ct=0;ct<Y.locationSize;ct++)m(Y.location+ct);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let ct=0;ct<Y.locationSize;ct++)y(Y.location+ct,V/Y.locationSize,gt,lt,V*ut,V/Y.locationSize*ct*ut,st)}}else if(J!==void 0){const lt=J[G];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv(Y.location,lt);break;case 3:n.vertexAttrib3fv(Y.location,lt);break;case 4:n.vertexAttrib4fv(Y.location,lt);break;default:n.vertexAttrib1fv(Y.location,lt)}}}}v()}function C(){N();for(const w in i){const I=i[w];for(const T in I){const F=I[T];for(const x in F)h(F[x].object),delete F[x];delete I[T]}delete i[w]}}function R(w){if(i[w.id]===void 0)return;const I=i[w.id];for(const T in I){const F=I[T];for(const x in F)h(F[x].object),delete F[x];delete I[T]}delete i[w.id]}function A(w){for(const I in i){const T=i[I];if(T[w.id]===void 0)continue;const F=T[w.id];for(const x in F)h(F[x].object),delete F[x];delete T[w.id]}}function N(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function S_(n,t,e){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];e.update(p,i,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function E_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==We&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const N=A===as&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==en&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==kn&&!N)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:C,maxSamples:R}}function M_(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new ei,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||r;return r=d,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!r||_===null||_.length===0||s&&!m)s?h(null):c();else{const v=s?0:i,y=v*4;let S=f.clippingState||null;l.value=S,S=h(_,d,y,p);for(let C=0;C!==y;++C)S[C]=e[C];f.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,S=p;y!==g;++y,S+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function w_(n){let t=new WeakMap;function e(a,o){return o===ol?a.mapping=fr:o===ll&&(a.mapping=dr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ol||o===ll)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Em(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const ir=4,wh=[.125,.215,.35,.446,.526,.582],yi=20,Eo=new Um,Ah=new ne;let Mo=null,wo=0,Ao=0,To=!1;const xi=(1+Math.sqrt(5))/2,Zi=1/xi,Th=[new Q(-xi,Zi,0),new Q(xi,Zi,0),new Q(-Zi,0,xi),new Q(Zi,0,xi),new Q(0,xi,-Zi),new Q(0,xi,Zi),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],A_=new Q;class Ch{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=A_}=s;Mo=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mo,wo,Ao),this._renderer.xr.enabled=To,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fr||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mo=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:as,format:We,colorSpace:pr,depthBuffer:!1},r=Rh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T_(s)),this._blurMaterial=C_(s,t,e)}return r}_compileMaterial(t){const e=new _n(this._lodPlanes[0],t);this._renderer.compile(e,Eo)}_sceneToCubeUV(t,e,i,r,s){const l=new Ke(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Ah),u.toneMapping=si,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const g=new lf({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),m=new _n(new Mr,g);let f=!1;const v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,f=!0):(g.color.copy(Ah),f=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const C=this._cubeSize;Hs(r,S*C,y>2?C:0,C,C),u.setRenderTarget(r),f&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===fr||t.mapping===dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Eo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Th[(r-s-1)%Th.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _n(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*yi-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):yi;m>yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const f=[];let v=0;for(let A=0;A<yi;++A){const N=A/g,E=Math.exp(-N*N/2);f.push(E),A===0?v+=E:A<m&&(v+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const S=this._sizeLods[r],C=3*S*(r>y-ir?r-y+ir:0),R=4*(this._cubeSize-S);Hs(e,C,R,3*S,2*S),l.setRenderTarget(e),l.render(u,Eo)}}function T_(n){const t=[],e=[],i=[];let r=n;const s=n-ir+1+wh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-ir?l=wh[a-n+ir-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,f=1,v=new Float32Array(g*_*p),y=new Float32Array(m*_*p),S=new Float32Array(f*_*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,N=R>2?0:-1,E=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];v.set(E,g*_*R),y.set(d,m*_*R);const w=[R,R,R,R,R,R];S.set(w,f*_*R)}const C=new Yn;C.setAttribute("position",new vn(v,g)),C.setAttribute("uv",new vn(y,m)),C.setAttribute("faceIndex",new vn(S,f)),t.push(C),r>ir&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Rh(n,t,e){const i=new Ri(n,t,e);return i.texture.mapping=Da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function C_(n,t,e){const i=new Float32Array(yi),r=new Q(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ph(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Lh(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function _c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R_(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ol||l===ll,h=l===fr||l===dr;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ch(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new Ch(n)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function P_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Kr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function L_(n,t,e,i){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let y=0,S=v.length;y<S;y+=3){const C=v[y+0],R=v[y+1],A=v[y+2];d.push(C,R,R,A,A,C)}}else if(_!==void 0){const v=_.array;g=_.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const C=y+0,R=y+1,A=y+2;d.push(C,R,R,A,A,C)}}else return;const m=new(nf(d)?hf:cf)(d,1);m.version=g;const f=s.get(u);f&&t.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function D_(n,t,e){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*a),e.update(p,i,1)}function c(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,d*a,_),e.update(p,i,_))}function h(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];e.update(m,i,1)}function u(d,p,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,g,0,_);let f=0;for(let v=0;v<_;v++)f+=p[v]*g[v];e.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function I_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function N_(n,t,e){const i=new WeakMap,r=new de;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let S=o.attributes.position.count*y,C=1;S>t.maxTextureSize&&(C=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const R=new Float32Array(S*C*4*u),A=new rf(R,S,C,u);A.type=kn,A.needsUpdate=!0;const N=y*4;for(let w=0;w<u;w++){const I=m[w],T=f[w],F=v[w],x=S*C*4*w;for(let z=0;z<I.count;z++){const J=z*N;p===!0&&(r.fromBufferAttribute(I,z),R[x+J+0]=r.x,R[x+J+1]=r.y,R[x+J+2]=r.z,R[x+J+3]=0),_===!0&&(r.fromBufferAttribute(T,z),R[x+J+4]=r.x,R[x+J+5]=r.y,R[x+J+6]=r.z,R[x+J+7]=0),g===!0&&(r.fromBufferAttribute(F,z),R[x+J+8]=r.x,R[x+J+9]=r.y,R[x+J+10]=r.z,R[x+J+11]=F.itemSize===4?r.w:1)}}d={count:u,texture:A,size:new qt(S,C)},i.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function U_(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const bf=new Ne,Dh=new _f(1,1),yf=new rf,Sf=new sf,Ef=new df,Ih=[],Nh=[],Uh=new Float32Array(16),Fh=new Float32Array(9),Oh=new Float32Array(4);function wr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Ih[r];if(s===void 0&&(s=new Float32Array(r),Ih[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ua(n,t){let e=Nh[t];e===void 0&&(e=new Int32Array(t),Nh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function F_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function O_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2fv(this.addr,t),be(e,t)}}function k_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;n.uniform3fv(this.addr,t),be(e,t)}}function B_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4fv(this.addr,t),be(e,t)}}function z_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(xe(e,i))return;Oh.set(i),n.uniformMatrix2fv(this.addr,!1,Oh),be(e,i)}}function H_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(xe(e,i))return;Fh.set(i),n.uniformMatrix3fv(this.addr,!1,Fh),be(e,i)}}function V_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(xe(e,i))return;Uh.set(i),n.uniformMatrix4fv(this.addr,!1,Uh),be(e,i)}}function G_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function W_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2iv(this.addr,t),be(e,t)}}function X_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3iv(this.addr,t),be(e,t)}}function $_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4iv(this.addr,t),be(e,t)}}function Y_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2uiv(this.addr,t),be(e,t)}}function j_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3uiv(this.addr,t),be(e,t)}}function Z_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4uiv(this.addr,t),be(e,t)}}function K_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Dh.compareFunction=ef,s=Dh):s=bf,e.setTexture2D(t||s,r)}function J_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Sf,r)}function Q_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Ef,r)}function tv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||yf,r)}function ev(n){switch(n){case 5126:return F_;case 35664:return O_;case 35665:return k_;case 35666:return B_;case 35674:return z_;case 35675:return H_;case 35676:return V_;case 5124:case 35670:return G_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return $_;case 5125:return Y_;case 36294:return q_;case 36295:return j_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return tv}}function nv(n,t){n.uniform1fv(this.addr,t)}function iv(n,t){const e=wr(t,this.size,2);n.uniform2fv(this.addr,e)}function rv(n,t){const e=wr(t,this.size,3);n.uniform3fv(this.addr,e)}function sv(n,t){const e=wr(t,this.size,4);n.uniform4fv(this.addr,e)}function av(n,t){const e=wr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ov(n,t){const e=wr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function lv(n,t){const e=wr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function cv(n,t){n.uniform1iv(this.addr,t)}function hv(n,t){n.uniform2iv(this.addr,t)}function uv(n,t){n.uniform3iv(this.addr,t)}function fv(n,t){n.uniform4iv(this.addr,t)}function dv(n,t){n.uniform1uiv(this.addr,t)}function pv(n,t){n.uniform2uiv(this.addr,t)}function mv(n,t){n.uniform3uiv(this.addr,t)}function gv(n,t){n.uniform4uiv(this.addr,t)}function _v(n,t,e){const i=this.cache,r=t.length,s=Ua(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||bf,s[a])}function vv(n,t,e){const i=this.cache,r=t.length,s=Ua(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Sf,s[a])}function xv(n,t,e){const i=this.cache,r=t.length,s=Ua(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Ef,s[a])}function bv(n,t,e){const i=this.cache,r=t.length,s=Ua(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||yf,s[a])}function yv(n){switch(n){case 5126:return nv;case 35664:return iv;case 35665:return rv;case 35666:return sv;case 35674:return av;case 35675:return ov;case 35676:return lv;case 5124:case 35670:return cv;case 35667:case 35671:return hv;case 35668:case 35672:return uv;case 35669:case 35673:return fv;case 5125:return dv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return bv}}class Sv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ev(e.type)}}class Ev{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yv(e.type)}}class Mv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function kh(n,t){n.seq.push(t),n.map[t.id]=t}function wv(n,t,e){const i=n.name,r=i.length;for(Co.lastIndex=0;;){const s=Co.exec(i),a=Co.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){kh(e,c===void 0?new Sv(o,n,t):new Ev(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Mv(o),kh(e,u)),e=u}}}class sa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);wv(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Bh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Av=37297;let Tv=0;function Cv(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const zh=new $t;function Rv(n){te._getMatrix(zh,te.workingColorSpace,n);const t=`mat3( ${zh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case fa:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Hh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Cv(n.getShaderSource(t),o)}else return s}function Pv(n,t){const e=Rv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Lv(n,t){let e;switch(t){case Ip:e="Linear";break;case Np:e="Reinhard";break;case Up:e="Cineon";break;case Fp:e="ACESFilmic";break;case kp:e="AgX";break;case Bp:e="Neutral";break;case Op:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vs=new Q;function Dv(){te.getLuminanceCoefficients(Vs);const n=Vs.x.toFixed(4),t=Vs.y.toFixed(4),e=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function Nv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Uv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Hr(n){return n!==""}function Vh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(n){return n.replace(Fv,kv)}const Ov=new Map;function kv(n,t){let e=Yt[t];if(e===void 0){const i=Ov.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Hl(e)}const Bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(n){return n.replace(Bv,zv)}function zv(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===fp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function Vv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case dr:t="ENVMAP_TYPE_CUBE";break;case Da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case dr:t="ENVMAP_MODE_REFRACTION";break}return t}function Wv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $u:t="ENVMAP_BLENDING_MULTIPLY";break;case Lp:t="ENVMAP_BLENDING_MIX";break;case Dp:t="ENVMAP_BLENDING_ADD";break}return t}function Xv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function $v(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Hv(e),c=Vv(e),h=Gv(e),u=Wv(e),d=Xv(e),p=Iv(e),_=Nv(s),g=r.createProgram();let m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Hr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Hr).join(`
`),f.length>0&&(f+=`
`)):(m=[Xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),f=[Xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?Yt.tonemapping_pars_fragment:"",e.toneMapping!==si?Lv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Pv("linearToOutputTexel",e.outputColorSpace),Dv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),a=Hl(a),a=Vh(a,e),a=Gh(a,e),o=Hl(o),o=Vh(o,e),o=Gh(o,e),a=Wh(a),o=Wh(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=v+m+a,S=v+f+o,C=Bh(r,r.VERTEX_SHADER,y),R=Bh(r,r.FRAGMENT_SHADER,S);r.attachShader(g,C),r.attachShader(g,R),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(I){if(n.debug.checkShaderErrors){const T=r.getProgramInfoLog(g)||"",F=r.getShaderInfoLog(C)||"",x=r.getShaderInfoLog(R)||"",z=T.trim(),J=F.trim(),G=x.trim();let Y=!0,$=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,R);else{const lt=Hh(r,C,"vertex"),V=Hh(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+lt+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(J===""||G==="")&&($=!1);$&&(I.diagnostics={runnable:Y,programLog:z,vertexShader:{log:J,prefix:m},fragmentShader:{log:G,prefix:f}})}r.deleteShader(C),r.deleteShader(R),N=new sa(r,g),E=Uv(r,g)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(g,Av)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=R,this}let Yv=0;class qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new jv(t),e.set(t,i)),i}}class jv{constructor(t){this.id=Yv++,this.code=t,this.usedTimes=0}}function Zv(n,t,e,i,r,s,a){const o=new af,l=new qv,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,w,I,T,F){const x=T.fog,z=F.geometry,J=E.isMeshStandardMaterial?T.environment:null,G=(E.isMeshStandardMaterial?e:t).get(E.envMap||J),Y=G&&G.mapping===Da?G.image.height:null,$=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const lt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,V=lt!==void 0?lt.length:0;let W=0;z.morphAttributes.position!==void 0&&(W=1),z.morphAttributes.normal!==void 0&&(W=2),z.morphAttributes.color!==void 0&&(W=3);let yt,gt,ut,st;if($){const ee=pn[$];yt=ee.vertexShader,gt=ee.fragmentShader}else yt=E.vertexShader,gt=E.fragmentShader,l.update(E),ut=l.getVertexShaderID(E),st=l.getFragmentShaderID(E);const ct=n.getRenderTarget(),dt=n.state.buffers.depth.getReversed(),St=F.isInstancedMesh===!0,At=F.isBatchedMesh===!0,Ft=!!E.map,ae=!!E.matcap,B=!!G,b=!!E.aoMap,et=!!E.lightMap,X=!!E.bumpMap,D=!!E.normalMap,U=!!E.displacementMap,k=!!E.emissiveMap,nt=!!E.metalnessMap,ot=!!E.roughnessMap,q=E.anisotropy>0,P=E.clearcoat>0,M=E.dispersion>0,O=E.iridescence>0,Z=E.sheen>0,at=E.transmission>0,tt=q&&!!E.anisotropyMap,Ct=P&&!!E.clearcoatMap,xt=P&&!!E.clearcoatNormalMap,Rt=P&&!!E.clearcoatRoughnessMap,It=O&&!!E.iridescenceMap,ht=O&&!!E.iridescenceThicknessMap,Et=Z&&!!E.sheenColorMap,kt=Z&&!!E.sheenRoughnessMap,Lt=!!E.specularMap,Mt=!!E.specularColorMap,Vt=!!E.specularIntensityMap,H=at&&!!E.transmissionMap,_t=at&&!!E.thicknessMap,bt=!!E.gradientMap,Pt=!!E.alphaMap,pt=E.alphaTest>0,ft=!!E.alphaHash,Ut=!!E.extensions;let Gt=si;E.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Gt=n.toneMapping);const le={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:yt,fragmentShader:gt,defines:E.defines,customVertexShaderID:ut,customFragmentShaderID:st,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:At,batchingColor:At&&F._colorsTexture!==null,instancing:St,instancingColor:St&&F.instanceColor!==null,instancingMorph:St&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?n.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:pr,alphaToCoverage:!!E.alphaToCoverage,map:Ft,matcap:ae,envMap:B,envMapMode:B&&G.mapping,envMapCubeUVHeight:Y,aoMap:b,lightMap:et,bumpMap:X,normalMap:D,displacementMap:d&&U,emissiveMap:k,normalMapObjectSpace:D&&E.normalMapType===Wp,normalMapTangentSpace:D&&E.normalMapType===Gp,metalnessMap:nt,roughnessMap:ot,anisotropy:q,anisotropyMap:tt,clearcoat:P,clearcoatMap:Ct,clearcoatNormalMap:xt,clearcoatRoughnessMap:Rt,dispersion:M,iridescence:O,iridescenceMap:It,iridescenceThicknessMap:ht,sheen:Z,sheenColorMap:Et,sheenRoughnessMap:kt,specularMap:Lt,specularColorMap:Mt,specularIntensityMap:Vt,transmission:at,transmissionMap:H,thicknessMap:_t,gradientMap:bt,opaque:E.transparent===!1&&E.blending===ar&&E.alphaToCoverage===!1,alphaMap:Pt,alphaTest:pt,alphaHash:ft,combine:E.combine,mapUv:Ft&&g(E.map.channel),aoMapUv:b&&g(E.aoMap.channel),lightMapUv:et&&g(E.lightMap.channel),bumpMapUv:X&&g(E.bumpMap.channel),normalMapUv:D&&g(E.normalMap.channel),displacementMapUv:U&&g(E.displacementMap.channel),emissiveMapUv:k&&g(E.emissiveMap.channel),metalnessMapUv:nt&&g(E.metalnessMap.channel),roughnessMapUv:ot&&g(E.roughnessMap.channel),anisotropyMapUv:tt&&g(E.anisotropyMap.channel),clearcoatMapUv:Ct&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:xt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:kt&&g(E.sheenRoughnessMap.channel),specularMapUv:Lt&&g(E.specularMap.channel),specularColorMapUv:Mt&&g(E.specularColorMap.channel),specularIntensityMapUv:Vt&&g(E.specularIntensityMap.channel),transmissionMapUv:H&&g(E.transmissionMap.channel),thicknessMapUv:_t&&g(E.thicknessMap.channel),alphaMapUv:Pt&&g(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(D||q),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Ft||Pt),fog:!!x,useFog:E.fog===!0,fogExp2:!!x&&x.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:dt,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:W,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Ft&&E.map.isVideoTexture===!0&&te.getTransfer(E.map.colorSpace)===re,decodeVideoTextureEmissive:k&&E.emissiveMap.isVideoTexture===!0&&te.getTransfer(E.emissiveMap.colorSpace)===re,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===On,flipSided:E.side===Ie,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||At)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function f(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)w.push(I),w.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(v(w,E),y(w,E),w.push(n.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function v(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function y(E,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),w.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const w=_[E.type];let I;if(w){const T=pn[w];I=xm.clone(T.uniforms)}else I=E.uniforms;return I}function C(E,w){let I;for(let T=0,F=h.length;T<F;T++){const x=h[T];if(x.cacheKey===w){I=x,++I.usedTimes;break}}return I===void 0&&(I=new $v(n,w,E,s),h.push(I)),I}function R(E){if(--E.usedTimes===0){const w=h.indexOf(E);h[w]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:N}}function Kv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Jv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function $h(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Yh(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(u,d,p,_,g,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),t++,f}function o(u,d,p,_,g,m){const f=a(u,d,p,_,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):e.push(f)}function l(u,d,p,_,g,m){const f=a(u,d,p,_,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Jv),i.length>1&&i.sort(d||$h),r.length>1&&r.sort(d||$h)}function h(){for(let u=t,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Qv(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Yh,n.set(i,[a])):r>=s.length?(a=new Yh,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function tx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Q,color:new ne};break;case"SpotLight":e={position:new Q,direction:new Q,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[t.id]=e,e}}}function ex(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let nx=0;function ix(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function rx(n){const t=new tx,e=ex(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const r=new Q,s=new _e,a=new _e;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,v=0,y=0,S=0,C=0,R=0,A=0;c.sort(ix);for(let E=0,w=c.length;E<w;E++){const I=c[E],T=I.color,F=I.intensity,x=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=T.r*F,u+=T.g*F,d+=T.b*F;else if(I.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(I.sh.coefficients[J],F);A++}else if(I.isDirectionalLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,Y=e.get(I);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=I.shadow.matrix,v++}i.directional[p]=J,p++}else if(I.isSpotLight){const J=t.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(T).multiplyScalar(F),J.distance=x,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,i.spot[g]=J;const G=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,G.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[g]=G.matrix,I.castShadow){const Y=e.get(I);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,i.spotShadow[g]=Y,i.spotShadowMap[g]=z,S++}g++}else if(I.isRectAreaLight){const J=t.get(I);J.color.copy(T).multiplyScalar(F),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=J,m++}else if(I.isPointLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),J.distance=I.distance,J.decay=I.decay,I.castShadow){const G=I.shadow,Y=e.get(I);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,Y.shadowCameraNear=G.camera.near,Y.shadowCameraFar=G.camera.far,i.pointShadow[_]=Y,i.pointShadowMap[_]=z,i.pointShadowMatrix[_]=I.shadow.matrix,y++}i.point[_]=J,_++}else if(I.isHemisphereLight){const J=t.get(I);J.skyColor.copy(I.color).multiplyScalar(F),J.groundColor.copy(I.groundColor).multiplyScalar(F),i.hemi[f]=J,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==g||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==v||N.numPointShadows!==y||N.numSpotShadows!==S||N.numSpotMaps!==C||N.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,N.directionalLength=p,N.pointLength=_,N.spotLength=g,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=v,N.numPointShadows=y,N.numSpotShadows=S,N.numSpotMaps=C,N.numLightProbes=A,i.version=nx++)}function l(c,h){let u=0,d=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const y=c[f];if(y.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function qh(n){const t=new rx(n),e=[],i=[];function r(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function sx(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new qh(n),t.set(r,[o])):s>=a.length?(o=new qh(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lx(n,t,e){let i=new mf;const r=new qt,s=new qt,a=new de,o=new Im({depthPacking:Vp}),l=new Nm,c={},h=e.maxTextureSize,u={[oi]:Ie,[Ie]:oi,[On]:On},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:ax,fragmentShader:ox}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Yn;_.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new _n(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xu;let f=this.type;this.render=function(R,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),w=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),T=n.state;T.setBlending(ri),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const F=f!==Un&&this.type===Un,x=f===Un&&this.type!==Un;for(let z=0,J=R.length;z<J;z++){const G=R[z],Y=G.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const $=Y.getFrameExtents();if(r.multiply($),s.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,Y.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,Y.mapSize.y=s.y)),Y.map===null||F===!0||x===!0){const V=this.type!==Un?{minFilter:$e,magFilter:$e}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ri(r.x,r.y,V),Y.map.texture.name=G.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const lt=Y.getViewportCount();for(let V=0;V<lt;V++){const W=Y.getViewport(V);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),T.viewport(a),Y.updateMatrices(G,V),i=Y.getFrustum(),S(A,N,Y.camera,G,this.type)}Y.isPointLightShadow!==!0&&this.type===Un&&v(Y,N),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,w,I)};function v(R,A){const N=t.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ri(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,N,d,g,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,N,p,g,null)}function y(R,A,N,E){let w=null;const I=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)w=I;else if(w=N.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const T=w.uuid,F=A.uuid;let x=c[T];x===void 0&&(x={},c[T]=x);let z=x[F];z===void 0&&(z=w.clone(),x[F]=z,A.addEventListener("dispose",C)),w=z}if(w.visible=A.visible,w.wireframe=A.wireframe,E===Un?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const T=n.properties.get(w);T.light=N}return w}function S(R,A,N,E,w){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===Un)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const F=t.update(R),x=R.material;if(Array.isArray(x)){const z=F.groups;for(let J=0,G=z.length;J<G;J++){const Y=z[J],$=x[Y.materialIndex];if($&&$.visible){const lt=y(R,$,E,w);R.onBeforeShadow(n,R,A,N,F,lt,Y),n.renderBufferDirect(N,null,F,lt,R,Y),R.onAfterShadow(n,R,A,N,F,lt,Y)}}}else if(x.visible){const z=y(R,x,E,w);R.onBeforeShadow(n,R,A,N,F,z,null),n.renderBufferDirect(N,null,F,z,R,null),R.onAfterShadow(n,R,A,N,F,z,null)}}const T=R.children;for(let F=0,x=T.length;F<x;F++)S(T[F],A,N,E,w)}function C(R){R.target.removeEventListener("dispose",C);for(const N in c){const E=c[N],w=R.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const cx={[tl]:el,[nl]:sl,[il]:al,[ur]:rl,[el]:tl,[sl]:nl,[al]:il,[rl]:ur};function hx(n,t){function e(){let H=!1;const _t=new de;let bt=null;const Pt=new de(0,0,0,0);return{setMask:function(pt){bt!==pt&&!H&&(n.colorMask(pt,pt,pt,pt),bt=pt)},setLocked:function(pt){H=pt},setClear:function(pt,ft,Ut,Gt,le){le===!0&&(pt*=Gt,ft*=Gt,Ut*=Gt),_t.set(pt,ft,Ut,Gt),Pt.equals(_t)===!1&&(n.clearColor(pt,ft,Ut,Gt),Pt.copy(_t))},reset:function(){H=!1,bt=null,Pt.set(-1,0,0,0)}}}function i(){let H=!1,_t=!1,bt=null,Pt=null,pt=null;return{setReversed:function(ft){if(_t!==ft){const Ut=t.get("EXT_clip_control");ft?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),_t=ft;const Gt=pt;pt=null,this.setClear(Gt)}},getReversed:function(){return _t},setTest:function(ft){ft?ct(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(ft){bt!==ft&&!H&&(n.depthMask(ft),bt=ft)},setFunc:function(ft){if(_t&&(ft=cx[ft]),Pt!==ft){switch(ft){case tl:n.depthFunc(n.NEVER);break;case el:n.depthFunc(n.ALWAYS);break;case nl:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case il:n.depthFunc(n.EQUAL);break;case rl:n.depthFunc(n.GEQUAL);break;case sl:n.depthFunc(n.GREATER);break;case al:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pt=ft}},setLocked:function(ft){H=ft},setClear:function(ft){pt!==ft&&(_t&&(ft=1-ft),n.clearDepth(ft),pt=ft)},reset:function(){H=!1,bt=null,Pt=null,pt=null,_t=!1}}}function r(){let H=!1,_t=null,bt=null,Pt=null,pt=null,ft=null,Ut=null,Gt=null,le=null;return{setTest:function(ee){H||(ee?ct(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(ee){_t!==ee&&!H&&(n.stencilMask(ee),_t=ee)},setFunc:function(ee,Tn,dn){(bt!==ee||Pt!==Tn||pt!==dn)&&(n.stencilFunc(ee,Tn,dn),bt=ee,Pt=Tn,pt=dn)},setOp:function(ee,Tn,dn){(ft!==ee||Ut!==Tn||Gt!==dn)&&(n.stencilOp(ee,Tn,dn),ft=ee,Ut=Tn,Gt=dn)},setLocked:function(ee){H=ee},setClear:function(ee){le!==ee&&(n.clearStencil(ee),le=ee)},reset:function(){H=!1,_t=null,bt=null,Pt=null,pt=null,ft=null,Ut=null,Gt=null,le=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,v=null,y=null,S=null,C=null,R=null,A=new ne(0,0,0),N=0,E=!1,w=null,I=null,T=null,F=null,x=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,G=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=G>=1):Y.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=G>=2);let $=null,lt={};const V=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),yt=new de().fromArray(V),gt=new de().fromArray(W);function ut(H,_t,bt,Pt){const pt=new Uint8Array(4),ft=n.createTexture();n.bindTexture(H,ft),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<bt;Ut++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,Pt,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(_t+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return ft}const st={};st[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),st[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),st[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(n.DEPTH_TEST),a.setFunc(ur),X(!1),D(Zc),ct(n.CULL_FACE),b(ri);function ct(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function dt(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function St(H,_t){return u[H]!==_t?(n.bindFramebuffer(H,_t),u[H]=_t,H===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=_t),H===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function At(H,_t){let bt=p,Pt=!1;if(H){bt=d.get(_t),bt===void 0&&(bt=[],d.set(_t,bt));const pt=H.textures;if(bt.length!==pt.length||bt[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,Ut=pt.length;ft<Ut;ft++)bt[ft]=n.COLOR_ATTACHMENT0+ft;bt.length=pt.length,Pt=!0}}else bt[0]!==n.BACK&&(bt[0]=n.BACK,Pt=!0);Pt&&n.drawBuffers(bt)}function Ft(H){return _!==H?(n.useProgram(H),_=H,!0):!1}const ae={[bi]:n.FUNC_ADD,[pp]:n.FUNC_SUBTRACT,[mp]:n.FUNC_REVERSE_SUBTRACT};ae[gp]=n.MIN,ae[_p]=n.MAX;const B={[vp]:n.ZERO,[xp]:n.ONE,[bp]:n.SRC_COLOR,[Jo]:n.SRC_ALPHA,[Ap]:n.SRC_ALPHA_SATURATE,[Mp]:n.DST_COLOR,[Sp]:n.DST_ALPHA,[yp]:n.ONE_MINUS_SRC_COLOR,[Qo]:n.ONE_MINUS_SRC_ALPHA,[wp]:n.ONE_MINUS_DST_COLOR,[Ep]:n.ONE_MINUS_DST_ALPHA,[Tp]:n.CONSTANT_COLOR,[Cp]:n.ONE_MINUS_CONSTANT_COLOR,[Rp]:n.CONSTANT_ALPHA,[Pp]:n.ONE_MINUS_CONSTANT_ALPHA};function b(H,_t,bt,Pt,pt,ft,Ut,Gt,le,ee){if(H===ri){g===!0&&(dt(n.BLEND),g=!1);return}if(g===!1&&(ct(n.BLEND),g=!0),H!==dp){if(H!==m||ee!==E){if((f!==bi||S!==bi)&&(n.blendEquation(n.FUNC_ADD),f=bi,S=bi),ee)switch(H){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.ONE,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,y=null,C=null,R=null,A.set(0,0,0),N=0,m=H,E=ee}return}pt=pt||_t,ft=ft||bt,Ut=Ut||Pt,(_t!==f||pt!==S)&&(n.blendEquationSeparate(ae[_t],ae[pt]),f=_t,S=pt),(bt!==v||Pt!==y||ft!==C||Ut!==R)&&(n.blendFuncSeparate(B[bt],B[Pt],B[ft],B[Ut]),v=bt,y=Pt,C=ft,R=Ut),(Gt.equals(A)===!1||le!==N)&&(n.blendColor(Gt.r,Gt.g,Gt.b,le),A.copy(Gt),N=le),m=H,E=!1}function et(H,_t){H.side===On?dt(n.CULL_FACE):ct(n.CULL_FACE);let bt=H.side===Ie;_t&&(bt=!bt),X(bt),H.blending===ar&&H.transparent===!1?b(ri):b(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);const Pt=H.stencilWrite;o.setTest(Pt),Pt&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),k(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ct(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(H){w!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),w=H)}function D(H){H!==hp?(ct(n.CULL_FACE),H!==I&&(H===Zc?n.cullFace(n.BACK):H===up?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),I=H}function U(H){H!==T&&(J&&n.lineWidth(H),T=H)}function k(H,_t,bt){H?(ct(n.POLYGON_OFFSET_FILL),(F!==_t||x!==bt)&&(n.polygonOffset(_t,bt),F=_t,x=bt)):dt(n.POLYGON_OFFSET_FILL)}function nt(H){H?ct(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function ot(H){H===void 0&&(H=n.TEXTURE0+z-1),$!==H&&(n.activeTexture(H),$=H)}function q(H,_t,bt){bt===void 0&&($===null?bt=n.TEXTURE0+z-1:bt=$);let Pt=lt[bt];Pt===void 0&&(Pt={type:void 0,texture:void 0},lt[bt]=Pt),(Pt.type!==H||Pt.texture!==_t)&&($!==bt&&(n.activeTexture(bt),$=bt),n.bindTexture(H,_t||st[H]),Pt.type=H,Pt.texture=_t)}function P(){const H=lt[$];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Z(){try{n.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{n.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(){try{n.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ct(){try{n.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xt(){try{n.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Rt(){try{n.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function It(){try{n.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{n.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(H){yt.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),yt.copy(H))}function kt(H){gt.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),gt.copy(H))}function Lt(H,_t){let bt=c.get(_t);bt===void 0&&(bt=new WeakMap,c.set(_t,bt));let Pt=bt.get(H);Pt===void 0&&(Pt=n.getUniformBlockIndex(_t,H.name),bt.set(H,Pt))}function Mt(H,_t){const Pt=c.get(_t).get(H);l.get(_t)!==Pt&&(n.uniformBlockBinding(_t,Pt,H.__bindingPointIndex),l.set(_t,Pt))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,lt={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,v=null,y=null,S=null,C=null,R=null,A=new ne(0,0,0),N=0,E=!1,w=null,I=null,T=null,F=null,x=null,yt.set(0,0,n.canvas.width,n.canvas.height),gt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ct,disable:dt,bindFramebuffer:St,drawBuffers:At,useProgram:Ft,setBlending:b,setMaterial:et,setFlipSided:X,setCullFace:D,setLineWidth:U,setPolygonOffset:k,setScissorTest:nt,activeTexture:ot,bindTexture:q,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:O,texImage2D:It,texImage3D:ht,updateUBOMapping:Lt,uniformBlockBinding:Mt,texStorage2D:xt,texStorage3D:Rt,texSubImage2D:Z,texSubImage3D:at,compressedTexSubImage2D:tt,compressedTexSubImage3D:Ct,scissor:Et,viewport:kt,reset:Vt}}function ux(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return p?new OffscreenCanvas(P,M):pa("canvas")}function g(P,M,O){let Z=1;const at=q(P);if((at.width>O||at.height>O)&&(Z=O/Math.max(at.width,at.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const tt=Math.floor(Z*at.width),Ct=Math.floor(Z*at.height);u===void 0&&(u=_(tt,Ct));const xt=M?_(tt,Ct):u;return xt.width=tt,xt.height=Ct,xt.getContext("2d").drawImage(P,0,0,tt,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+tt+"x"+Ct+")."),xt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){n.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(P,M,O,Z,at=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let tt=M;if(M===n.RED&&(O===n.FLOAT&&(tt=n.R32F),O===n.HALF_FLOAT&&(tt=n.R16F),O===n.UNSIGNED_BYTE&&(tt=n.R8)),M===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(tt=n.R8UI),O===n.UNSIGNED_SHORT&&(tt=n.R16UI),O===n.UNSIGNED_INT&&(tt=n.R32UI),O===n.BYTE&&(tt=n.R8I),O===n.SHORT&&(tt=n.R16I),O===n.INT&&(tt=n.R32I)),M===n.RG&&(O===n.FLOAT&&(tt=n.RG32F),O===n.HALF_FLOAT&&(tt=n.RG16F),O===n.UNSIGNED_BYTE&&(tt=n.RG8)),M===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(tt=n.RG8UI),O===n.UNSIGNED_SHORT&&(tt=n.RG16UI),O===n.UNSIGNED_INT&&(tt=n.RG32UI),O===n.BYTE&&(tt=n.RG8I),O===n.SHORT&&(tt=n.RG16I),O===n.INT&&(tt=n.RG32I)),M===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),O===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),O===n.UNSIGNED_INT&&(tt=n.RGB32UI),O===n.BYTE&&(tt=n.RGB8I),O===n.SHORT&&(tt=n.RGB16I),O===n.INT&&(tt=n.RGB32I)),M===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),O===n.UNSIGNED_INT&&(tt=n.RGBA32UI),O===n.BYTE&&(tt=n.RGBA8I),O===n.SHORT&&(tt=n.RGBA16I),O===n.INT&&(tt=n.RGBA32I)),M===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(tt=n.R11F_G11F_B10F)),M===n.RGBA){const Ct=at?fa:te.getTransfer(Z);O===n.FLOAT&&(tt=n.RGBA32F),O===n.HALF_FLOAT&&(tt=n.RGBA16F),O===n.UNSIGNED_BYTE&&(tt=Ct===re?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function S(P,M){let O;return P?M===null||M===Ti||M===qr?O=n.DEPTH24_STENCIL8:M===kn?O=n.DEPTH32F_STENCIL8:M===Yr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ti||M===qr?O=n.DEPTH_COMPONENT24:M===kn?O=n.DEPTH_COMPONENT32F:M===Yr&&(O=n.DEPTH_COMPONENT16),O}function C(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==$e&&P.minFilter!==Ce?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function R(P){const M=P.target;M.removeEventListener("dispose",R),N(M),M.isVideoTexture&&h.delete(M)}function A(P){const M=P.target;M.removeEventListener("dispose",A),w(M)}function N(P){const M=i.get(P);if(M.__webglInit===void 0)return;const O=P.source,Z=d.get(O);if(Z){const at=Z[M.__cacheKey];at.usedTimes--,at.usedTimes===0&&E(P),Object.keys(Z).length===0&&d.delete(O)}i.remove(P)}function E(P){const M=i.get(P);n.deleteTexture(M.__webglTexture);const O=P.source,Z=d.get(O);delete Z[M.__cacheKey],a.memory.textures--}function w(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let at=0;at<M.__webglFramebuffer[Z].length;at++)n.deleteFramebuffer(M.__webglFramebuffer[Z][at]);else n.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[Z]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=P.textures;for(let Z=0,at=O.length;Z<at;Z++){const tt=i.get(O[Z]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),a.memory.textures--),i.remove(O[Z])}i.remove(P)}let I=0;function T(){I=0}function F(){const P=I;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),I+=1,P}function x(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function z(P,M){const O=i.get(P);if(P.isVideoTexture&&nt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&O.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(O,P,M);return}}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+M)}function J(P,M){const O=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){st(O,P,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+M)}function G(P,M){const O=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){st(O,P,M);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+M)}function Y(P,M){const O=i.get(P);if(P.version>0&&O.__version!==P.version){ct(O,P,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+M)}const $={[cl]:n.REPEAT,[ke]:n.CLAMP_TO_EDGE,[hl]:n.MIRRORED_REPEAT},lt={[$e]:n.NEAREST,[zp]:n.NEAREST_MIPMAP_NEAREST,[gs]:n.NEAREST_MIPMAP_LINEAR,[Ce]:n.LINEAR,[Za]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},V={[Xp]:n.NEVER,[Kp]:n.ALWAYS,[$p]:n.LESS,[ef]:n.LEQUAL,[Yp]:n.EQUAL,[Zp]:n.GEQUAL,[qp]:n.GREATER,[jp]:n.NOTEQUAL};function W(P,M){if(M.type===kn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ce||M.magFilter===Za||M.magFilter===gs||M.magFilter===Si||M.minFilter===Ce||M.minFilter===Za||M.minFilter===gs||M.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,$[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,$[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,$[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,lt[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,lt[M.minFilter]),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,V[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$e||M.minFilter!==gs&&M.minFilter!==Si||M.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function yt(P,M){let O=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",R));const Z=M.source;let at=d.get(Z);at===void 0&&(at={},d.set(Z,at));const tt=x(M);if(tt!==P.__cacheKey){at[tt]===void 0&&(at[tt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),at[tt].usedTimes++;const Ct=at[P.__cacheKey];Ct!==void 0&&(at[P.__cacheKey].usedTimes--,Ct.usedTimes===0&&E(M)),P.__cacheKey=tt,P.__webglTexture=at[tt].texture}return O}function gt(P,M,O){return Math.floor(Math.floor(P/O)/M)}function ut(P,M,O,Z){const tt=P.updateRanges;if(tt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,O,Z,M.data);else{tt.sort((ht,Et)=>ht.start-Et.start);let Ct=0;for(let ht=1;ht<tt.length;ht++){const Et=tt[Ct],kt=tt[ht],Lt=Et.start+Et.count,Mt=gt(kt.start,M.width,4),Vt=gt(Et.start,M.width,4);kt.start<=Lt+1&&Mt===Vt&&gt(kt.start+kt.count-1,M.width,4)===Mt?Et.count=Math.max(Et.count,kt.start+kt.count-Et.start):(++Ct,tt[Ct]=kt)}tt.length=Ct+1;const xt=n.getParameter(n.UNPACK_ROW_LENGTH),Rt=n.getParameter(n.UNPACK_SKIP_PIXELS),It=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let ht=0,Et=tt.length;ht<Et;ht++){const kt=tt[ht],Lt=Math.floor(kt.start/4),Mt=Math.ceil(kt.count/4),Vt=Lt%M.width,H=Math.floor(Lt/M.width),_t=Mt,bt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),e.texSubImage2D(n.TEXTURE_2D,0,Vt,H,_t,bt,O,Z,M.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,xt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Rt),n.pixelStorei(n.UNPACK_SKIP_ROWS,It)}}function st(P,M,O){let Z=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=n.TEXTURE_3D);const at=yt(P,M),tt=M.source;e.bindTexture(Z,P.__webglTexture,n.TEXTURE0+O);const Ct=i.get(tt);if(tt.version!==Ct.__version||at===!0){e.activeTexture(n.TEXTURE0+O);const xt=te.getPrimaries(te.workingColorSpace),Rt=M.colorSpace===ni?null:te.getPrimaries(M.colorSpace),It=M.colorSpace===ni||xt===Rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let ht=g(M.image,!1,r.maxTextureSize);ht=ot(M,ht);const Et=s.convert(M.format,M.colorSpace),kt=s.convert(M.type);let Lt=y(M.internalFormat,Et,kt,M.colorSpace,M.isVideoTexture);W(Z,M);let Mt;const Vt=M.mipmaps,H=M.isVideoTexture!==!0,_t=Ct.__version===void 0||at===!0,bt=tt.dataReady,Pt=C(M,ht);if(M.isDepthTexture)Lt=S(M.format===Zr,M.type),_t&&(H?e.texStorage2D(n.TEXTURE_2D,1,Lt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Et,kt,null));else if(M.isDataTexture)if(Vt.length>0){H&&_t&&e.texStorage2D(n.TEXTURE_2D,Pt,Lt,Vt[0].width,Vt[0].height);for(let pt=0,ft=Vt.length;pt<ft;pt++)Mt=Vt[pt],H?bt&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,Mt.width,Mt.height,Et,kt,Mt.data):e.texImage2D(n.TEXTURE_2D,pt,Lt,Mt.width,Mt.height,0,Et,kt,Mt.data);M.generateMipmaps=!1}else H?(_t&&e.texStorage2D(n.TEXTURE_2D,Pt,Lt,ht.width,ht.height),bt&&ut(M,ht,Et,kt)):e.texImage2D(n.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Et,kt,ht.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&_t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Lt,Vt[0].width,Vt[0].height,ht.depth);for(let pt=0,ft=Vt.length;pt<ft;pt++)if(Mt=Vt[pt],M.format!==We)if(Et!==null)if(H){if(bt)if(M.layerUpdates.size>0){const Ut=Mh(Mt.width,Mt.height,M.format,M.type);for(const Gt of M.layerUpdates){const le=Mt.data.subarray(Gt*Ut/Mt.data.BYTES_PER_ELEMENT,(Gt+1)*Ut/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,Gt,Mt.width,Mt.height,1,Et,le)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,Mt.width,Mt.height,ht.depth,Et,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pt,Lt,Mt.width,Mt.height,ht.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?bt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,Mt.width,Mt.height,ht.depth,Et,kt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,pt,Lt,Mt.width,Mt.height,ht.depth,0,Et,kt,Mt.data)}else{H&&_t&&e.texStorage2D(n.TEXTURE_2D,Pt,Lt,Vt[0].width,Vt[0].height);for(let pt=0,ft=Vt.length;pt<ft;pt++)Mt=Vt[pt],M.format!==We?Et!==null?H?bt&&e.compressedTexSubImage2D(n.TEXTURE_2D,pt,0,0,Mt.width,Mt.height,Et,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,pt,Lt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?bt&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,Mt.width,Mt.height,Et,kt,Mt.data):e.texImage2D(n.TEXTURE_2D,pt,Lt,Mt.width,Mt.height,0,Et,kt,Mt.data)}else if(M.isDataArrayTexture)if(H){if(_t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Lt,ht.width,ht.height,ht.depth),bt)if(M.layerUpdates.size>0){const pt=Mh(ht.width,ht.height,M.format,M.type);for(const ft of M.layerUpdates){const Ut=ht.data.subarray(ft*pt/ht.data.BYTES_PER_ELEMENT,(ft+1)*pt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ft,ht.width,ht.height,1,Et,kt,Ut)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Et,kt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,ht.width,ht.height,ht.depth,0,Et,kt,ht.data);else if(M.isData3DTexture)H?(_t&&e.texStorage3D(n.TEXTURE_3D,Pt,Lt,ht.width,ht.height,ht.depth),bt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Et,kt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,ht.width,ht.height,ht.depth,0,Et,kt,ht.data);else if(M.isFramebufferTexture){if(_t)if(H)e.texStorage2D(n.TEXTURE_2D,Pt,Lt,ht.width,ht.height);else{let pt=ht.width,ft=ht.height;for(let Ut=0;Ut<Pt;Ut++)e.texImage2D(n.TEXTURE_2D,Ut,Lt,pt,ft,0,Et,kt,null),pt>>=1,ft>>=1}}else if(Vt.length>0){if(H&&_t){const pt=q(Vt[0]);e.texStorage2D(n.TEXTURE_2D,Pt,Lt,pt.width,pt.height)}for(let pt=0,ft=Vt.length;pt<ft;pt++)Mt=Vt[pt],H?bt&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,Et,kt,Mt):e.texImage2D(n.TEXTURE_2D,pt,Lt,Et,kt,Mt);M.generateMipmaps=!1}else if(H){if(_t){const pt=q(ht);e.texStorage2D(n.TEXTURE_2D,Pt,Lt,pt.width,pt.height)}bt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,kt,ht)}else e.texImage2D(n.TEXTURE_2D,0,Lt,Et,kt,ht);m(M)&&f(Z),Ct.__version=tt.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ct(P,M,O){if(M.image.length!==6)return;const Z=yt(P,M),at=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+O);const tt=i.get(at);if(at.version!==tt.__version||Z===!0){e.activeTexture(n.TEXTURE0+O);const Ct=te.getPrimaries(te.workingColorSpace),xt=M.colorSpace===ni?null:te.getPrimaries(M.colorSpace),Rt=M.colorSpace===ni||Ct===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const It=M.isCompressedTexture||M.image[0].isCompressedTexture,ht=M.image[0]&&M.image[0].isDataTexture,Et=[];for(let ft=0;ft<6;ft++)!It&&!ht?Et[ft]=g(M.image[ft],!0,r.maxCubemapSize):Et[ft]=ht?M.image[ft].image:M.image[ft],Et[ft]=ot(M,Et[ft]);const kt=Et[0],Lt=s.convert(M.format,M.colorSpace),Mt=s.convert(M.type),Vt=y(M.internalFormat,Lt,Mt,M.colorSpace),H=M.isVideoTexture!==!0,_t=tt.__version===void 0||Z===!0,bt=at.dataReady;let Pt=C(M,kt);W(n.TEXTURE_CUBE_MAP,M);let pt;if(It){H&&_t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,Vt,kt.width,kt.height);for(let ft=0;ft<6;ft++){pt=Et[ft].mipmaps;for(let Ut=0;Ut<pt.length;Ut++){const Gt=pt[Ut];M.format!==We?Lt!==null?H?bt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut,0,0,Gt.width,Gt.height,Lt,Gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut,Vt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?bt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut,0,0,Gt.width,Gt.height,Lt,Mt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut,Vt,Gt.width,Gt.height,0,Lt,Mt,Gt.data)}}}else{if(pt=M.mipmaps,H&&_t){pt.length>0&&Pt++;const ft=q(Et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,Vt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(ht){H?bt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Et[ft].width,Et[ft].height,Lt,Mt,Et[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Vt,Et[ft].width,Et[ft].height,0,Lt,Mt,Et[ft].data);for(let Ut=0;Ut<pt.length;Ut++){const le=pt[Ut].image[ft].image;H?bt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut+1,0,0,le.width,le.height,Lt,Mt,le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut+1,Vt,le.width,le.height,0,Lt,Mt,le.data)}}else{H?bt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Lt,Mt,Et[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Vt,Lt,Mt,Et[ft]);for(let Ut=0;Ut<pt.length;Ut++){const Gt=pt[Ut];H?bt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut+1,0,0,Lt,Mt,Gt.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut+1,Vt,Lt,Mt,Gt.image[ft])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),tt.__version=at.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function dt(P,M,O,Z,at,tt){const Ct=s.convert(O.format,O.colorSpace),xt=s.convert(O.type),Rt=y(O.internalFormat,Ct,xt,O.colorSpace),It=i.get(M),ht=i.get(O);if(ht.__renderTarget=M,!It.__hasExternalTextures){const Et=Math.max(1,M.width>>tt),kt=Math.max(1,M.height>>tt);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,tt,Rt,Et,kt,M.depth,0,Ct,xt,null):e.texImage2D(at,tt,Rt,Et,kt,0,Ct,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),k(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,at,ht.__webglTexture,0,U(M)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,at,ht.__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(P,M,O){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer){const Z=M.depthTexture,at=Z&&Z.isDepthTexture?Z.type:null,tt=S(M.stencilBuffer,at),Ct=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=U(M);k(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,tt,M.width,M.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,tt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,tt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,P)}else{const Z=M.textures;for(let at=0;at<Z.length;at++){const tt=Z[at],Ct=s.convert(tt.format,tt.colorSpace),xt=s.convert(tt.type),Rt=y(tt.internalFormat,Ct,xt,tt.colorSpace),It=U(M);O&&k(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,It,Rt,M.width,M.height):k(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It,Rt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Rt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function At(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const at=Z.__webglTexture,tt=U(M);if(M.depthTexture.format===jr)k(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0);else if(M.depthTexture.format===Zr)k(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Ft(P){const M=i.get(P),O=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const at=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",at)};Z.addEventListener("dispose",at),M.__depthDisposeCallback=at}M.__boundDepthTexture=Z}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const Z=P.texture.mipmaps;Z&&Z.length>0?At(M.__webglFramebuffer[0],P):At(M.__webglFramebuffer,P)}else if(O){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=n.createRenderbuffer(),St(M.__webglDepthbuffer[Z],P,!1);else{const at=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,tt)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),St(M.__webglDepthbuffer,P,!1);else{const at=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,tt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(P,M,O){const Z=i.get(P);M!==void 0&&dt(Z.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ft(P)}function B(P){const M=P.texture,O=i.get(P),Z=i.get(M);P.addEventListener("dispose",A);const at=P.textures,tt=P.isWebGLCubeRenderTarget===!0,Ct=at.length>1;if(Ct||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=M.version,a.memory.textures++),tt){O.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[xt]=[];for(let Rt=0;Rt<M.mipmaps.length;Rt++)O.__webglFramebuffer[xt][Rt]=n.createFramebuffer()}else O.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let xt=0;xt<M.mipmaps.length;xt++)O.__webglFramebuffer[xt]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let xt=0,Rt=at.length;xt<Rt;xt++){const It=i.get(at[xt]);It.__webglTexture===void 0&&(It.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&k(P)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let xt=0;xt<at.length;xt++){const Rt=at[xt];O.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[xt]);const It=s.convert(Rt.format,Rt.colorSpace),ht=s.convert(Rt.type),Et=y(Rt.internalFormat,It,ht,Rt.colorSpace,P.isXRRenderTarget===!0),kt=U(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,kt,Et,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,O.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),St(O.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),W(n.TEXTURE_CUBE_MAP,M);for(let xt=0;xt<6;xt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Rt=0;Rt<M.mipmaps.length;Rt++)dt(O.__webglFramebuffer[xt][Rt],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt);else dt(O.__webglFramebuffer[xt],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(M)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let xt=0,Rt=at.length;xt<Rt;xt++){const It=at[xt],ht=i.get(It);let Et=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Et=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Et,ht.__webglTexture),W(Et,It),dt(O.__webglFramebuffer,P,It,n.COLOR_ATTACHMENT0+xt,Et,0),m(It)&&f(Et)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xt=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,Z.__webglTexture),W(xt,M),M.mipmaps&&M.mipmaps.length>0)for(let Rt=0;Rt<M.mipmaps.length;Rt++)dt(O.__webglFramebuffer[Rt],P,M,n.COLOR_ATTACHMENT0,xt,Rt);else dt(O.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,xt,0);m(M)&&f(xt),e.unbindTexture()}P.depthBuffer&&Ft(P)}function b(P){const M=P.textures;for(let O=0,Z=M.length;O<Z;O++){const at=M[O];if(m(at)){const tt=v(P),Ct=i.get(at).__webglTexture;e.bindTexture(tt,Ct),f(tt),e.unbindTexture()}}}const et=[],X=[];function D(P){if(P.samples>0){if(k(P)===!1){const M=P.textures,O=P.width,Z=P.height;let at=n.COLOR_BUFFER_BIT;const tt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(P),xt=M.length>1;if(xt)for(let It=0;It<M.length;It++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const Rt=P.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let It=0;It<M.length;It++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[It]);const ht=i.get(M[It]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ht,0)}n.blitFramebuffer(0,0,O,Z,0,0,O,Z,at,n.NEAREST),l===!0&&(et.length=0,X.length=0,et.push(n.COLOR_ATTACHMENT0+It),P.depthBuffer&&P.resolveDepthBuffer===!1&&(et.push(tt),X.push(tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,X)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let It=0;It<M.length;It++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[It]);const ht=i.get(M[It]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,ht,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function U(P){return Math.min(r.maxSamples,P.samples)}function k(P){const M=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function nt(P){const M=a.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function ot(P,M){const O=P.colorSpace,Z=P.format,at=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||O!==pr&&O!==ni&&(te.getTransfer(O)===re?(Z!==We||at!==en)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function q(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=T,this.setTexture2D=z,this.setTexture2DArray=J,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=ae,this.setupRenderTarget=B,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=k}function fx(n,t){function e(i,r=ni){let s;const a=te.getTransfer(r);if(i===en)return n.UNSIGNED_BYTE;if(i===cc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ku)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qu)return n.BYTE;if(i===ju)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===lc)return n.INT;if(i===Ti)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===as)return n.HALF_FLOAT;if(i===Ju)return n.ALPHA;if(i===Qu)return n.RGB;if(i===We)return n.RGBA;if(i===jr)return n.DEPTH_COMPONENT;if(i===Zr)return n.DEPTH_STENCIL;if(i===uc)return n.RED;if(i===fc)return n.RED_INTEGER;if(i===tf)return n.RG;if(i===dc)return n.RG_INTEGER;if(i===pc)return n.RGBA_INTEGER;if(i===ea||i===na||i===ia||i===ra)if(a===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ea)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ea)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ul||i===fl||i===dl||i===pl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ul)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ml||i===gl||i===_l)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ml||i===gl)return a===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_l)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vl||i===xl||i===bl||i===yl||i===Sl||i===El||i===Ml||i===wl||i===Al||i===Tl||i===Cl||i===Rl||i===Pl||i===Ll)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===El)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ml)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Al)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pl)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ll)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dl||i===Il||i===Nl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Dl)return a===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Il)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ul||i===Fl||i===Ol||i===kl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ul)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,px=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new vf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Xn({vertexShader:dx,fragmentShader:px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _n(new Na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gx extends Ii{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null;const g=typeof XRWebGLBinding<"u",m=new mx,f={},v=e.getContextAttributes();let y=null,S=null;const C=[],R=[],A=new qt;let N=null;const E=new Ke;E.viewport=new de;const w=new Ke;w.viewport=new de;const I=[E,w],T=new Fm;let F=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ct=C[st];return ct===void 0&&(ct=new xo,C[st]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(st){let ct=C[st];return ct===void 0&&(ct=new xo,C[st]=ct),ct.getGripSpace()},this.getHand=function(st){let ct=C[st];return ct===void 0&&(ct=new xo,C[st]=ct),ct.getHandSpace()};function z(st){const ct=R.indexOf(st.inputSource);if(ct===-1)return;const dt=C[ct];dt!==void 0&&(dt.update(st.inputSource,st.frame,c||a),dt.dispatchEvent({type:st.type,data:st.inputSource}))}function J(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",G);for(let st=0;st<C.length;st++){const ct=R[st];ct!==null&&(R[st]=null,C[st].disconnect(ct))}F=null,x=null,m.reset();for(const st in f)delete f[st];t.setRenderTarget(y),p=null,d=null,u=null,r=null,S=null,ut.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){s=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){o=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(st){if(r=st,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",J),r.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,St=null,At=null;v.depth&&(At=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=v.stencil?Zr:jr,St=v.stencil?qr:Ti);const Ft={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ft),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Ri(d.textureWidth,d.textureHeight,{format:We,type:en,depthTexture:new _f(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const dt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,dt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ri(p.framebufferWidth,p.framebufferHeight,{format:We,type:en,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ut.setContext(r),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(st){for(let ct=0;ct<st.removed.length;ct++){const dt=st.removed[ct],St=R.indexOf(dt);St>=0&&(R[St]=null,C[St].disconnect(dt))}for(let ct=0;ct<st.added.length;ct++){const dt=st.added[ct];let St=R.indexOf(dt);if(St===-1){for(let Ft=0;Ft<C.length;Ft++)if(Ft>=R.length){R.push(dt),St=Ft;break}else if(R[Ft]===null){R[Ft]=dt,St=Ft;break}if(St===-1)break}const At=C[St];At&&At.connect(dt)}}const Y=new Q,$=new Q;function lt(st,ct,dt){Y.setFromMatrixPosition(ct.matrixWorld),$.setFromMatrixPosition(dt.matrixWorld);const St=Y.distanceTo($),At=ct.projectionMatrix.elements,Ft=dt.projectionMatrix.elements,ae=At[14]/(At[10]-1),B=At[14]/(At[10]+1),b=(At[9]+1)/At[5],et=(At[9]-1)/At[5],X=(At[8]-1)/At[0],D=(Ft[8]+1)/Ft[0],U=ae*X,k=ae*D,nt=St/(-X+D),ot=nt*-X;if(ct.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(ot),st.translateZ(nt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),At[10]===-1)st.projectionMatrix.copy(ct.projectionMatrix),st.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const q=ae+nt,P=B+nt,M=U-ot,O=k+(St-ot),Z=b*B/P*q,at=et*B/P*q;st.projectionMatrix.makePerspective(M,O,Z,at,q,P),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function V(st,ct){ct===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ct.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(r===null)return;let ct=st.near,dt=st.far;m.texture!==null&&(m.depthNear>0&&(ct=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),T.near=w.near=E.near=ct,T.far=w.far=E.far=dt,(F!==T.near||x!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,x=T.far),T.layers.mask=st.layers.mask|6,E.layers.mask=T.layers.mask&3,w.layers.mask=T.layers.mask&5;const St=st.parent,At=T.cameras;V(T,St);for(let Ft=0;Ft<At.length;Ft++)V(At[Ft],St);At.length===2?lt(T,E,w):T.projectionMatrix.copy(E.projectionMatrix),W(st,T,St)};function W(st,ct,dt){dt===null?st.matrix.copy(ct.matrixWorld):(st.matrix.copy(dt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ct.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ct.projectionMatrix),st.projectionMatrixInverse.copy(ct.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=zl*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(st){l=st,d!==null&&(d.fixedFoveation=st),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=st)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(T)},this.getCameraTexture=function(st){return f[st]};let yt=null;function gt(st,ct){if(h=ct.getViewerPose(c||a),_=ct,h!==null){const dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let St=!1;dt.length!==T.cameras.length&&(T.cameras.length=0,St=!0);for(let B=0;B<dt.length;B++){const b=dt[B];let et=null;if(p!==null)et=p.getViewport(b);else{const D=u.getViewSubImage(d,b);et=D.viewport,B===0&&(t.setRenderTargetTextures(S,D.colorTexture,D.depthStencilTexture),t.setRenderTarget(S))}let X=I[B];X===void 0&&(X=new Ke,X.layers.enable(B),X.viewport=new de,I[B]=X),X.matrix.fromArray(b.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(b.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(et.x,et.y,et.width,et.height),B===0&&(T.matrix.copy(X.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),St===!0&&T.cameras.push(X)}const At=r.enabledFeatures;if(At&&At.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){u=i.getBinding();const B=u.getDepthInformation(dt[0]);B&&B.isValid&&B.texture&&m.init(B,r.renderState)}if(At&&At.includes("camera-access")&&g){t.state.unbindTexture(),u=i.getBinding();for(let B=0;B<dt.length;B++){const b=dt[B].camera;if(b){let et=f[b];et||(et=new vf,f[b]=et);const X=u.getCameraImage(b);et.sourceTexture=X}}}}for(let dt=0;dt<C.length;dt++){const St=R[dt],At=C[dt];St!==null&&At!==void 0&&At.update(St,ct,c||a)}yt&&yt(st,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),_=null}const ut=new xf;ut.setAnimationLoop(gt),this.setAnimationLoop=function(st){yt=st},this.dispose=function(){}}}const vi=new Wn,_x=new _e;function vx(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,uf(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,y,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ie&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ie&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f),y=v.envMap,S=v.envMapRotation;y&&(m.envMap.value=y,vi.copy(S),vi.x*=-1,vi.y*=-1,vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(_x.makeRotationFromEuler(vi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ie&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xx(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const S=y.program;i.uniformBlockBinding(v,S)}function c(v,y){let S=r[v.id];S===void 0&&(_(v),S=h(v),r[v.id]=S,v.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(v,C);const R=t.render.frame;s[v.id]!==R&&(d(v),s[v.id]=R)}function h(v){const y=u();v.__bindingPointIndex=y;const S=n.createBuffer(),C=v.__size,R=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=r[v.id],S=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,A=S.length;R<A;R++){const N=Array.isArray(S[R])?S[R]:[S[R]];for(let E=0,w=N.length;E<w;E++){const I=N[E];if(p(I,R,E,C)===!0){const T=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let x=0;for(let z=0;z<F.length;z++){const J=F[z],G=g(J);typeof J=="number"||typeof J=="boolean"?(I.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,T+x,I.__data)):J.isMatrix3?(I.__data[0]=J.elements[0],I.__data[1]=J.elements[1],I.__data[2]=J.elements[2],I.__data[3]=0,I.__data[4]=J.elements[3],I.__data[5]=J.elements[4],I.__data[6]=J.elements[5],I.__data[7]=0,I.__data[8]=J.elements[6],I.__data[9]=J.elements[7],I.__data[10]=J.elements[8],I.__data[11]=0):(J.toArray(I.__data,x),x+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,T,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,y,S,C){const R=v.value,A=y+"_"+S;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const N=C[A];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return C[A]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function _(v){const y=v.uniforms;let S=0;const C=16;for(let A=0,N=y.length;A<N;A++){const E=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,I=E.length;w<I;w++){const T=E[w],F=Array.isArray(T.value)?T.value:[T.value];for(let x=0,z=F.length;x<z;x++){const J=F[x],G=g(J),Y=S%C,$=Y%G.boundary,lt=Y+$;S+=$,lt!==0&&C-lt<G.storage&&(S+=C-lt),T.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=S,S+=G.storage}}}const R=S%C;return R>0&&(S+=C-R),v.__size=S,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class bx{constructor(t={}){const{canvas:e=tm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let C=!1;this._outputColorSpace=Ze;let R=0,A=0,N=null,E=-1,w=null;const I=new de,T=new de;let F=null;const x=new ne(0);let z=0,J=e.width,G=e.height,Y=1,$=null,lt=null;const V=new de(0,0,J,G),W=new de(0,0,J,G);let yt=!1;const gt=new mf;let ut=!1,st=!1;const ct=new _e,dt=new Q,St=new de,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function ae(){return N===null?Y:1}let B=i;function b(L,j){return e.getContext(L,j)}try{const L={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oc}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),B===null){const j="webgl2";if(B=b(j,L),B===null)throw b(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let et,X,D,U,k,nt,ot,q,P,M,O,Z,at,tt,Ct,xt,Rt,It,ht,Et,kt,Lt,Mt,Vt;function H(){et=new P_(B),et.init(),Lt=new fx(B,et),X=new E_(B,et,t,Lt),D=new hx(B,et),X.reversedDepthBuffer&&d&&D.buffers.depth.setReversed(!0),U=new I_(B),k=new Kv,nt=new ux(B,et,D,k,X,Lt,U),ot=new w_(S),q=new R_(S),P=new Bm(B),Mt=new y_(B,P),M=new L_(B,P,U,Mt),O=new U_(B,M,P,U),ht=new N_(B,X,nt),xt=new M_(k),Z=new Zv(S,ot,q,et,X,Mt,xt),at=new vx(S,k),tt=new Qv,Ct=new sx(et),It=new b_(S,ot,q,D,O,p,l),Rt=new lx(S,O,X),Vt=new xx(B,U,X,D),Et=new S_(B,et,U),kt=new D_(B,et,U),U.programs=Z.programs,S.capabilities=X,S.extensions=et,S.properties=k,S.renderLists=tt,S.shadowMap=Rt,S.state=D,S.info=U}H();const _t=new gx(S,B);this.xr=_t,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const L=et.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=et.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(L){L!==void 0&&(Y=L,this.setSize(J,G,!1))},this.getSize=function(L){return L.set(J,G)},this.setSize=function(L,j,it=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=L,G=j,e.width=Math.floor(L*Y),e.height=Math.floor(j*Y),it===!0&&(e.style.width=L+"px",e.style.height=j+"px"),this.setViewport(0,0,L,j)},this.getDrawingBufferSize=function(L){return L.set(J*Y,G*Y).floor()},this.setDrawingBufferSize=function(L,j,it){J=L,G=j,Y=it,e.width=Math.floor(L*it),e.height=Math.floor(j*it),this.setViewport(0,0,L,j)},this.getCurrentViewport=function(L){return L.copy(I)},this.getViewport=function(L){return L.copy(V)},this.setViewport=function(L,j,it,rt){L.isVector4?V.set(L.x,L.y,L.z,L.w):V.set(L,j,it,rt),D.viewport(I.copy(V).multiplyScalar(Y).round())},this.getScissor=function(L){return L.copy(W)},this.setScissor=function(L,j,it,rt){L.isVector4?W.set(L.x,L.y,L.z,L.w):W.set(L,j,it,rt),D.scissor(T.copy(W).multiplyScalar(Y).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(L){D.setScissorTest(yt=L)},this.setOpaqueSort=function(L){$=L},this.setTransparentSort=function(L){lt=L},this.getClearColor=function(L){return L.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(L=!0,j=!0,it=!0){let rt=0;if(L){let K=!1;if(N!==null){const vt=N.texture.format;K=vt===pc||vt===dc||vt===fc}if(K){const vt=N.texture.type,Tt=vt===en||vt===Ti||vt===Yr||vt===qr||vt===cc||vt===hc,Nt=It.getClearColor(),Dt=It.getClearAlpha(),zt=Nt.r,Ht=Nt.g,Ot=Nt.b;Tt?(_[0]=zt,_[1]=Ht,_[2]=Ot,_[3]=Dt,B.clearBufferuiv(B.COLOR,0,_)):(g[0]=zt,g[1]=Ht,g[2]=Ot,g[3]=Dt,B.clearBufferiv(B.COLOR,0,g))}else rt|=B.COLOR_BUFFER_BIT}j&&(rt|=B.DEPTH_BUFFER_BIT),it&&(rt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),It.dispose(),tt.dispose(),Ct.dispose(),k.dispose(),ot.dispose(),q.dispose(),O.dispose(),Mt.dispose(),Vt.dispose(),Z.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",dn),_t.removeEventListener("sessionend",Wc),ui.stop()};function bt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const L=U.autoReset,j=Rt.enabled,it=Rt.autoUpdate,rt=Rt.needsUpdate,K=Rt.type;H(),U.autoReset=L,Rt.enabled=j,Rt.autoUpdate=it,Rt.needsUpdate=rt,Rt.type=K}function pt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ft(L){const j=L.target;j.removeEventListener("dispose",ft),Ut(j)}function Ut(L){Gt(L),k.remove(L)}function Gt(L){const j=k.get(L).programs;j!==void 0&&(j.forEach(function(it){Z.releaseProgram(it)}),L.isShaderMaterial&&Z.releaseShaderCache(L))}this.renderBufferDirect=function(L,j,it,rt,K,vt){j===null&&(j=At);const Tt=K.isMesh&&K.matrixWorld.determinant()<0,Nt=rp(L,j,it,rt,K);D.setMaterial(rt,Tt);let Dt=it.index,zt=1;if(rt.wireframe===!0){if(Dt=M.getWireframeAttribute(it),Dt===void 0)return;zt=2}const Ht=it.drawRange,Ot=it.attributes.position;let Jt=Ht.start*zt,ie=(Ht.start+Ht.count)*zt;vt!==null&&(Jt=Math.max(Jt,vt.start*zt),ie=Math.min(ie,(vt.start+vt.count)*zt)),Dt!==null?(Jt=Math.max(Jt,0),ie=Math.min(ie,Dt.count)):Ot!=null&&(Jt=Math.max(Jt,0),ie=Math.min(ie,Ot.count));const fe=ie-Jt;if(fe<0||fe===1/0)return;Mt.setup(K,rt,Nt,it,Dt);let ce,oe=Et;if(Dt!==null&&(ce=P.get(Dt),oe=kt,oe.setIndex(ce)),K.isMesh)rt.wireframe===!0?(D.setLineWidth(rt.wireframeLinewidth*ae()),oe.setMode(B.LINES)):oe.setMode(B.TRIANGLES);else if(K.isLine){let Bt=rt.linewidth;Bt===void 0&&(Bt=1),D.setLineWidth(Bt*ae()),K.isLineSegments?oe.setMode(B.LINES):K.isLineLoop?oe.setMode(B.LINE_LOOP):oe.setMode(B.LINE_STRIP)}else K.isPoints?oe.setMode(B.POINTS):K.isSprite&&oe.setMode(B.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))oe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Bt=K._multiDrawStarts,he=K._multiDrawCounts,Qt=K._multiDrawCount,ze=Dt?P.get(Dt).bytesPerElement:1,Fi=k.get(rt).currentProgram.getUniforms();for(let He=0;He<Qt;He++)Fi.setValue(B,"_gl_DrawID",He),oe.render(Bt[He]/ze,he[He])}else if(K.isInstancedMesh)oe.renderInstances(Jt,fe,K.count);else if(it.isInstancedBufferGeometry){const Bt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,he=Math.min(it.instanceCount,Bt);oe.renderInstances(Jt,fe,he)}else oe.render(Jt,fe)};function le(L,j,it){L.transparent===!0&&L.side===On&&L.forceSinglePass===!1?(L.side=Ie,L.needsUpdate=!0,ms(L,j,it),L.side=oi,L.needsUpdate=!0,ms(L,j,it),L.side=On):ms(L,j,it)}this.compile=function(L,j,it=null){it===null&&(it=L),f=Ct.get(it),f.init(j),y.push(f),it.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(f.pushLight(K),K.castShadow&&f.pushShadow(K))}),L!==it&&L.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(f.pushLight(K),K.castShadow&&f.pushShadow(K))}),f.setupLights();const rt=new Set;return L.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const vt=K.material;if(vt)if(Array.isArray(vt))for(let Tt=0;Tt<vt.length;Tt++){const Nt=vt[Tt];le(Nt,it,K),rt.add(Nt)}else le(vt,it,K),rt.add(vt)}),f=y.pop(),rt},this.compileAsync=function(L,j,it=null){const rt=this.compile(L,j,it);return new Promise(K=>{function vt(){if(rt.forEach(function(Tt){k.get(Tt).currentProgram.isReady()&&rt.delete(Tt)}),rt.size===0){K(L);return}setTimeout(vt,10)}et.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let ee=null;function Tn(L){ee&&ee(L)}function dn(){ui.stop()}function Wc(){ui.start()}const ui=new xf;ui.setAnimationLoop(Tn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(L){ee=L,_t.setAnimationLoop(L),L===null?ui.stop():ui.start()},_t.addEventListener("sessionstart",dn),_t.addEventListener("sessionend",Wc),this.render=function(L,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(j),j=_t.getCamera()),L.isScene===!0&&L.onBeforeRender(S,L,j,N),f=Ct.get(L,y.length),f.init(j),y.push(f),ct.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),gt.setFromProjectionMatrix(ct,gn,j.reversedDepth),st=this.localClippingEnabled,ut=xt.init(this.clippingPlanes,st),m=tt.get(L,v.length),m.init(),v.push(m),_t.enabled===!0&&_t.isPresenting===!0){const vt=S.xr.getDepthSensingMesh();vt!==null&&qa(vt,j,-1/0,S.sortObjects)}qa(L,j,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort($,lt),Ft=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,Ft&&It.addToRenderList(m,L),this.info.render.frame++,ut===!0&&xt.beginShadows();const it=f.state.shadowsArray;Rt.render(it,L,j),ut===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=m.opaque,K=m.transmissive;if(f.setupLights(),j.isArrayCamera){const vt=j.cameras;if(K.length>0)for(let Tt=0,Nt=vt.length;Tt<Nt;Tt++){const Dt=vt[Tt];$c(rt,K,L,Dt)}Ft&&It.render(L);for(let Tt=0,Nt=vt.length;Tt<Nt;Tt++){const Dt=vt[Tt];Xc(m,L,Dt,Dt.viewport)}}else K.length>0&&$c(rt,K,L,j),Ft&&It.render(L),Xc(m,L,j);N!==null&&A===0&&(nt.updateMultisampleRenderTarget(N),nt.updateRenderTargetMipmap(N)),L.isScene===!0&&L.onAfterRender(S,L,j),Mt.resetDefaultState(),E=-1,w=null,y.pop(),y.length>0?(f=y[y.length-1],ut===!0&&xt.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function qa(L,j,it,rt){if(L.visible===!1)return;if(L.layers.test(j.layers)){if(L.isGroup)it=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(j);else if(L.isLight)f.pushLight(L),L.castShadow&&f.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||gt.intersectsSprite(L)){rt&&St.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ct);const Tt=O.update(L),Nt=L.material;Nt.visible&&m.push(L,Tt,Nt,it,St.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||gt.intersectsObject(L))){const Tt=O.update(L),Nt=L.material;if(rt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),St.copy(L.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),St.copy(Tt.boundingSphere.center)),St.applyMatrix4(L.matrixWorld).applyMatrix4(ct)),Array.isArray(Nt)){const Dt=Tt.groups;for(let zt=0,Ht=Dt.length;zt<Ht;zt++){const Ot=Dt[zt],Jt=Nt[Ot.materialIndex];Jt&&Jt.visible&&m.push(L,Tt,Jt,it,St.z,Ot)}}else Nt.visible&&m.push(L,Tt,Nt,it,St.z,null)}}const vt=L.children;for(let Tt=0,Nt=vt.length;Tt<Nt;Tt++)qa(vt[Tt],j,it,rt)}function Xc(L,j,it,rt){const K=L.opaque,vt=L.transmissive,Tt=L.transparent;f.setupLightsView(it),ut===!0&&xt.setGlobalState(S.clippingPlanes,it),rt&&D.viewport(I.copy(rt)),K.length>0&&ps(K,j,it),vt.length>0&&ps(vt,j,it),Tt.length>0&&ps(Tt,j,it),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function $c(L,j,it,rt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[rt.id]===void 0&&(f.state.transmissionRenderTarget[rt.id]=new Ri(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?as:en,minFilter:Si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const vt=f.state.transmissionRenderTarget[rt.id],Tt=rt.viewport||I;vt.setSize(Tt.z*S.transmissionResolutionScale,Tt.w*S.transmissionResolutionScale);const Nt=S.getRenderTarget(),Dt=S.getActiveCubeFace(),zt=S.getActiveMipmapLevel();S.setRenderTarget(vt),S.getClearColor(x),z=S.getClearAlpha(),z<1&&S.setClearColor(16777215,.5),S.clear(),Ft&&It.render(it);const Ht=S.toneMapping;S.toneMapping=si;const Ot=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),f.setupLightsView(rt),ut===!0&&xt.setGlobalState(S.clippingPlanes,rt),ps(L,it,rt),nt.updateMultisampleRenderTarget(vt),nt.updateRenderTargetMipmap(vt),et.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let ie=0,fe=j.length;ie<fe;ie++){const ce=j[ie],oe=ce.object,Bt=ce.geometry,he=ce.material,Qt=ce.group;if(he.side===On&&oe.layers.test(rt.layers)){const ze=he.side;he.side=Ie,he.needsUpdate=!0,Yc(oe,it,rt,Bt,he,Qt),he.side=ze,he.needsUpdate=!0,Jt=!0}}Jt===!0&&(nt.updateMultisampleRenderTarget(vt),nt.updateRenderTargetMipmap(vt))}S.setRenderTarget(Nt,Dt,zt),S.setClearColor(x,z),Ot!==void 0&&(rt.viewport=Ot),S.toneMapping=Ht}function ps(L,j,it){const rt=j.isScene===!0?j.overrideMaterial:null;for(let K=0,vt=L.length;K<vt;K++){const Tt=L[K],Nt=Tt.object,Dt=Tt.geometry,zt=Tt.group;let Ht=Tt.material;Ht.allowOverride===!0&&rt!==null&&(Ht=rt),Nt.layers.test(it.layers)&&Yc(Nt,j,it,Dt,Ht,zt)}}function Yc(L,j,it,rt,K,vt){L.onBeforeRender(S,j,it,rt,K,vt),L.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),K.onBeforeRender(S,j,it,rt,L,vt),K.transparent===!0&&K.side===On&&K.forceSinglePass===!1?(K.side=Ie,K.needsUpdate=!0,S.renderBufferDirect(it,j,rt,K,L,vt),K.side=oi,K.needsUpdate=!0,S.renderBufferDirect(it,j,rt,K,L,vt),K.side=On):S.renderBufferDirect(it,j,rt,K,L,vt),L.onAfterRender(S,j,it,rt,K,vt)}function ms(L,j,it){j.isScene!==!0&&(j=At);const rt=k.get(L),K=f.state.lights,vt=f.state.shadowsArray,Tt=K.state.version,Nt=Z.getParameters(L,K.state,vt,j,it),Dt=Z.getProgramCacheKey(Nt);let zt=rt.programs;rt.environment=L.isMeshStandardMaterial?j.environment:null,rt.fog=j.fog,rt.envMap=(L.isMeshStandardMaterial?q:ot).get(L.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&L.envMap===null?j.environmentRotation:L.envMapRotation,zt===void 0&&(L.addEventListener("dispose",ft),zt=new Map,rt.programs=zt);let Ht=zt.get(Dt);if(Ht!==void 0){if(rt.currentProgram===Ht&&rt.lightsStateVersion===Tt)return jc(L,Nt),Ht}else Nt.uniforms=Z.getUniforms(L),L.onBeforeCompile(Nt,S),Ht=Z.acquireProgram(Nt,Dt),zt.set(Dt,Ht),rt.uniforms=Nt.uniforms;const Ot=rt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ot.clippingPlanes=xt.uniform),jc(L,Nt),rt.needsLights=ap(L),rt.lightsStateVersion=Tt,rt.needsLights&&(Ot.ambientLightColor.value=K.state.ambient,Ot.lightProbe.value=K.state.probe,Ot.directionalLights.value=K.state.directional,Ot.directionalLightShadows.value=K.state.directionalShadow,Ot.spotLights.value=K.state.spot,Ot.spotLightShadows.value=K.state.spotShadow,Ot.rectAreaLights.value=K.state.rectArea,Ot.ltc_1.value=K.state.rectAreaLTC1,Ot.ltc_2.value=K.state.rectAreaLTC2,Ot.pointLights.value=K.state.point,Ot.pointLightShadows.value=K.state.pointShadow,Ot.hemisphereLights.value=K.state.hemi,Ot.directionalShadowMap.value=K.state.directionalShadowMap,Ot.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ot.spotShadowMap.value=K.state.spotShadowMap,Ot.spotLightMatrix.value=K.state.spotLightMatrix,Ot.spotLightMap.value=K.state.spotLightMap,Ot.pointShadowMap.value=K.state.pointShadowMap,Ot.pointShadowMatrix.value=K.state.pointShadowMatrix),rt.currentProgram=Ht,rt.uniformsList=null,Ht}function qc(L){if(L.uniformsList===null){const j=L.currentProgram.getUniforms();L.uniformsList=sa.seqWithValue(j.seq,L.uniforms)}return L.uniformsList}function jc(L,j){const it=k.get(L);it.outputColorSpace=j.outputColorSpace,it.batching=j.batching,it.batchingColor=j.batchingColor,it.instancing=j.instancing,it.instancingColor=j.instancingColor,it.instancingMorph=j.instancingMorph,it.skinning=j.skinning,it.morphTargets=j.morphTargets,it.morphNormals=j.morphNormals,it.morphColors=j.morphColors,it.morphTargetsCount=j.morphTargetsCount,it.numClippingPlanes=j.numClippingPlanes,it.numIntersection=j.numClipIntersection,it.vertexAlphas=j.vertexAlphas,it.vertexTangents=j.vertexTangents,it.toneMapping=j.toneMapping}function rp(L,j,it,rt,K){j.isScene!==!0&&(j=At),nt.resetTextureUnits();const vt=j.fog,Tt=rt.isMeshStandardMaterial?j.environment:null,Nt=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:pr,Dt=(rt.isMeshStandardMaterial?q:ot).get(rt.envMap||Tt),zt=rt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Ht=!!it.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Ot=!!it.morphAttributes.position,Jt=!!it.morphAttributes.normal,ie=!!it.morphAttributes.color;let fe=si;rt.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(fe=S.toneMapping);const ce=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,oe=ce!==void 0?ce.length:0,Bt=k.get(rt),he=f.state.lights;if(ut===!0&&(st===!0||L!==w)){const Pe=L===w&&rt.id===E;xt.setState(rt,L,Pe)}let Qt=!1;rt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==he.state.version||Bt.outputColorSpace!==Nt||K.isBatchedMesh&&Bt.batching===!1||!K.isBatchedMesh&&Bt.batching===!0||K.isBatchedMesh&&Bt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Bt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Bt.instancing===!1||!K.isInstancedMesh&&Bt.instancing===!0||K.isSkinnedMesh&&Bt.skinning===!1||!K.isSkinnedMesh&&Bt.skinning===!0||K.isInstancedMesh&&Bt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Bt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Bt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Bt.instancingMorph===!1&&K.morphTexture!==null||Bt.envMap!==Dt||rt.fog===!0&&Bt.fog!==vt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==xt.numPlanes||Bt.numIntersection!==xt.numIntersection)||Bt.vertexAlphas!==zt||Bt.vertexTangents!==Ht||Bt.morphTargets!==Ot||Bt.morphNormals!==Jt||Bt.morphColors!==ie||Bt.toneMapping!==fe||Bt.morphTargetsCount!==oe)&&(Qt=!0):(Qt=!0,Bt.__version=rt.version);let ze=Bt.currentProgram;Qt===!0&&(ze=ms(rt,j,K));let Fi=!1,He=!1,Dr=!1;const ue=ze.getUniforms(),Ye=Bt.uniforms;if(D.useProgram(ze.program)&&(Fi=!0,He=!0,Dr=!0),rt.id!==E&&(E=rt.id,He=!0),Fi||w!==L){D.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),ue.setValue(B,"projectionMatrix",L.projectionMatrix),ue.setValue(B,"viewMatrix",L.matrixWorldInverse);const Ue=ue.map.cameraPosition;Ue!==void 0&&Ue.setValue(B,dt.setFromMatrixPosition(L.matrixWorld)),X.logarithmicDepthBuffer&&ue.setValue(B,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&ue.setValue(B,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,He=!0,Dr=!0)}if(K.isSkinnedMesh){ue.setOptional(B,K,"bindMatrix"),ue.setOptional(B,K,"bindMatrixInverse");const Pe=K.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),ue.setValue(B,"boneTexture",Pe.boneTexture,nt))}K.isBatchedMesh&&(ue.setOptional(B,K,"batchingTexture"),ue.setValue(B,"batchingTexture",K._matricesTexture,nt),ue.setOptional(B,K,"batchingIdTexture"),ue.setValue(B,"batchingIdTexture",K._indirectTexture,nt),ue.setOptional(B,K,"batchingColorTexture"),K._colorsTexture!==null&&ue.setValue(B,"batchingColorTexture",K._colorsTexture,nt));const qe=it.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&ht.update(K,it,ze),(He||Bt.receiveShadow!==K.receiveShadow)&&(Bt.receiveShadow=K.receiveShadow,ue.setValue(B,"receiveShadow",K.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Ye.envMap.value=Dt,Ye.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&j.environment!==null&&(Ye.envMapIntensity.value=j.environmentIntensity),He&&(ue.setValue(B,"toneMappingExposure",S.toneMappingExposure),Bt.needsLights&&sp(Ye,Dr),vt&&rt.fog===!0&&at.refreshFogUniforms(Ye,vt),at.refreshMaterialUniforms(Ye,rt,Y,G,f.state.transmissionRenderTarget[L.id]),sa.upload(B,qc(Bt),Ye,nt)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(sa.upload(B,qc(Bt),Ye,nt),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&ue.setValue(B,"center",K.center),ue.setValue(B,"modelViewMatrix",K.modelViewMatrix),ue.setValue(B,"normalMatrix",K.normalMatrix),ue.setValue(B,"modelMatrix",K.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Pe=rt.uniformsGroups;for(let Ue=0,ja=Pe.length;Ue<ja;Ue++){const fi=Pe[Ue];Vt.update(fi,ze),Vt.bind(fi,ze)}}return ze}function sp(L,j){L.ambientLightColor.needsUpdate=j,L.lightProbe.needsUpdate=j,L.directionalLights.needsUpdate=j,L.directionalLightShadows.needsUpdate=j,L.pointLights.needsUpdate=j,L.pointLightShadows.needsUpdate=j,L.spotLights.needsUpdate=j,L.spotLightShadows.needsUpdate=j,L.rectAreaLights.needsUpdate=j,L.hemisphereLights.needsUpdate=j}function ap(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(L,j,it){const rt=k.get(L);rt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),k.get(L.texture).__webglTexture=j,k.get(L.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:it,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,j){const it=k.get(L);it.__webglFramebuffer=j,it.__useDefaultFramebuffer=j===void 0};const op=B.createFramebuffer();this.setRenderTarget=function(L,j=0,it=0){N=L,R=j,A=it;let rt=!0,K=null,vt=!1,Tt=!1;if(L){const Dt=k.get(L);if(Dt.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(B.FRAMEBUFFER,null),rt=!1;else if(Dt.__webglFramebuffer===void 0)nt.setupRenderTarget(L);else if(Dt.__hasExternalTextures)nt.rebindTextures(L,k.get(L.texture).__webglTexture,k.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Ot=L.depthTexture;if(Dt.__boundDepthTexture!==Ot){if(Ot!==null&&k.has(Ot)&&(L.width!==Ot.image.width||L.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(L)}}const zt=L.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Tt=!0);const Ht=k.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ht[j])?K=Ht[j][it]:K=Ht[j],vt=!0):L.samples>0&&nt.useMultisampledRTT(L)===!1?K=k.get(L).__webglMultisampledFramebuffer:Array.isArray(Ht)?K=Ht[it]:K=Ht,I.copy(L.viewport),T.copy(L.scissor),F=L.scissorTest}else I.copy(V).multiplyScalar(Y).floor(),T.copy(W).multiplyScalar(Y).floor(),F=yt;if(it!==0&&(K=op),D.bindFramebuffer(B.FRAMEBUFFER,K)&&rt&&D.drawBuffers(L,K),D.viewport(I),D.scissor(T),D.setScissorTest(F),vt){const Dt=k.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,Dt.__webglTexture,it)}else if(Tt){const Dt=j;for(let zt=0;zt<L.textures.length;zt++){const Ht=k.get(L.textures[zt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+zt,Ht.__webglTexture,it,Dt)}}else if(L!==null&&it!==0){const Dt=k.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Dt.__webglTexture,it)}E=-1},this.readRenderTargetPixels=function(L,j,it,rt,K,vt,Tt,Nt=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=k.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Tt!==void 0&&(Dt=Dt[Tt]),Dt){D.bindFramebuffer(B.FRAMEBUFFER,Dt);try{const zt=L.textures[Nt],Ht=zt.format,Ot=zt.type;if(!X.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!X.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=L.width-rt&&it>=0&&it<=L.height-K&&(L.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt),B.readPixels(j,it,rt,K,Lt.convert(Ht),Lt.convert(Ot),vt))}finally{const zt=N!==null?k.get(N).__webglFramebuffer:null;D.bindFramebuffer(B.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(L,j,it,rt,K,vt,Tt,Nt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=k.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Tt!==void 0&&(Dt=Dt[Tt]),Dt)if(j>=0&&j<=L.width-rt&&it>=0&&it<=L.height-K){D.bindFramebuffer(B.FRAMEBUFFER,Dt);const zt=L.textures[Nt],Ht=zt.format,Ot=zt.type;if(!X.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!X.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Jt),B.bufferData(B.PIXEL_PACK_BUFFER,vt.byteLength,B.STREAM_READ),L.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt),B.readPixels(j,it,rt,K,Lt.convert(Ht),Lt.convert(Ot),0);const ie=N!==null?k.get(N).__webglFramebuffer:null;D.bindFramebuffer(B.FRAMEBUFFER,ie);const fe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await em(B,fe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Jt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,vt),B.deleteBuffer(Jt),B.deleteSync(fe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,j=null,it=0){const rt=Math.pow(2,-it),K=Math.floor(L.image.width*rt),vt=Math.floor(L.image.height*rt),Tt=j!==null?j.x:0,Nt=j!==null?j.y:0;nt.setTexture2D(L,0),B.copyTexSubImage2D(B.TEXTURE_2D,it,0,0,Tt,Nt,K,vt),D.unbindTexture()};const lp=B.createFramebuffer(),cp=B.createFramebuffer();this.copyTextureToTexture=function(L,j,it=null,rt=null,K=0,vt=null){vt===null&&(K!==0?(Kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=K,K=0):vt=0);let Tt,Nt,Dt,zt,Ht,Ot,Jt,ie,fe;const ce=L.isCompressedTexture?L.mipmaps[vt]:L.image;if(it!==null)Tt=it.max.x-it.min.x,Nt=it.max.y-it.min.y,Dt=it.isBox3?it.max.z-it.min.z:1,zt=it.min.x,Ht=it.min.y,Ot=it.isBox3?it.min.z:0;else{const qe=Math.pow(2,-K);Tt=Math.floor(ce.width*qe),Nt=Math.floor(ce.height*qe),L.isDataArrayTexture?Dt=ce.depth:L.isData3DTexture?Dt=Math.floor(ce.depth*qe):Dt=1,zt=0,Ht=0,Ot=0}rt!==null?(Jt=rt.x,ie=rt.y,fe=rt.z):(Jt=0,ie=0,fe=0);const oe=Lt.convert(j.format),Bt=Lt.convert(j.type);let he;j.isData3DTexture?(nt.setTexture3D(j,0),he=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(nt.setTexture2DArray(j,0),he=B.TEXTURE_2D_ARRAY):(nt.setTexture2D(j,0),he=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const Qt=B.getParameter(B.UNPACK_ROW_LENGTH),ze=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Fi=B.getParameter(B.UNPACK_SKIP_PIXELS),He=B.getParameter(B.UNPACK_SKIP_ROWS),Dr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ce.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ce.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,zt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ht),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ot);const ue=L.isDataArrayTexture||L.isData3DTexture,Ye=j.isDataArrayTexture||j.isData3DTexture;if(L.isDepthTexture){const qe=k.get(L),Pe=k.get(j),Ue=k.get(qe.__renderTarget),ja=k.get(Pe.__renderTarget);D.bindFramebuffer(B.READ_FRAMEBUFFER,Ue.__webglFramebuffer),D.bindFramebuffer(B.DRAW_FRAMEBUFFER,ja.__webglFramebuffer);for(let fi=0;fi<Dt;fi++)ue&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,k.get(L).__webglTexture,K,Ot+fi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,k.get(j).__webglTexture,vt,fe+fi)),B.blitFramebuffer(zt,Ht,Tt,Nt,Jt,ie,Tt,Nt,B.DEPTH_BUFFER_BIT,B.NEAREST);D.bindFramebuffer(B.READ_FRAMEBUFFER,null),D.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(K!==0||L.isRenderTargetTexture||k.has(L)){const qe=k.get(L),Pe=k.get(j);D.bindFramebuffer(B.READ_FRAMEBUFFER,lp),D.bindFramebuffer(B.DRAW_FRAMEBUFFER,cp);for(let Ue=0;Ue<Dt;Ue++)ue?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,qe.__webglTexture,K,Ot+Ue):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,qe.__webglTexture,K),Ye?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.__webglTexture,vt,fe+Ue):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pe.__webglTexture,vt),K!==0?B.blitFramebuffer(zt,Ht,Tt,Nt,Jt,ie,Tt,Nt,B.COLOR_BUFFER_BIT,B.NEAREST):Ye?B.copyTexSubImage3D(he,vt,Jt,ie,fe+Ue,zt,Ht,Tt,Nt):B.copyTexSubImage2D(he,vt,Jt,ie,zt,Ht,Tt,Nt);D.bindFramebuffer(B.READ_FRAMEBUFFER,null),D.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ye?L.isDataTexture||L.isData3DTexture?B.texSubImage3D(he,vt,Jt,ie,fe,Tt,Nt,Dt,oe,Bt,ce.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(he,vt,Jt,ie,fe,Tt,Nt,Dt,oe,ce.data):B.texSubImage3D(he,vt,Jt,ie,fe,Tt,Nt,Dt,oe,Bt,ce):L.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,vt,Jt,ie,Tt,Nt,oe,Bt,ce.data):L.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,vt,Jt,ie,ce.width,ce.height,oe,ce.data):B.texSubImage2D(B.TEXTURE_2D,vt,Jt,ie,Tt,Nt,oe,Bt,ce);B.pixelStorei(B.UNPACK_ROW_LENGTH,Qt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ze),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Fi),B.pixelStorei(B.UNPACK_SKIP_ROWS,He),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Dr),vt===0&&j.generateMipmaps&&B.generateMipmap(he),D.unbindTexture()},this.initRenderTarget=function(L){k.get(L).__webglFramebuffer===void 0&&nt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?nt.setTextureCube(L,0):L.isData3DTexture?nt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?nt.setTexture2DArray(L,0):nt.setTexture2D(L,0),D.unbindTexture()},this.resetState=function(){R=0,A=0,N=null,D.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const jh={type:"change"},vc={type:"start"},Mf={type:"end"},Gs=new gc,Zh=new ei,yx=Math.cos(70*Qp.DEG2RAD),ve=new Q,Oe=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ro=1e-6;class Sx extends Om{constructor(t,e=null){super(t,e),this.state=se.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:sr.ROTATE,MIDDLE:sr.DOLLY,RIGHT:sr.PAN},this.touches={ONE:nr.ROTATE,TWO:nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new Ci,this._lastTargetPosition=new Q,this._quat=new Ci().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Eh,this._sphericalDelta=new Eh,this._scale=1,this._panOffset=new Q,this._rotateStart=new qt,this._rotateEnd=new qt,this._rotateDelta=new qt,this._panStart=new qt,this._panEnd=new qt,this._panDelta=new qt,this._dollyStart=new qt,this._dollyEnd=new qt,this._dollyDelta=new qt,this._dollyDirection=new Q,this._mouse=new qt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Mx.bind(this),this._onPointerDown=Ex.bind(this),this._onPointerUp=wx.bind(this),this._onContextMenu=Dx.bind(this),this._onMouseWheel=Cx.bind(this),this._onKeyDown=Rx.bind(this),this._onTouchStart=Px.bind(this),this._onTouchMove=Lx.bind(this),this._onMouseDown=Ax.bind(this),this._onMouseMove=Tx.bind(this),this._interceptControlDown=Ix.bind(this),this._interceptControlUp=Nx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jh),this.update(),this.state=se.NONE}update(t=null){const e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Oe:i>Math.PI&&(i-=Oe),r<-Math.PI?r+=Oe:r>Math.PI&&(r-=Oe),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ve.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new Q(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new Q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Gs.origin.copy(this.object.position),Gs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gs.direction))<yx?this.object.lookAt(this.target):(Zh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gs.intersectPlane(Zh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ro||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ro||this._lastTargetPosition.distanceToSquared(this.target)>Ro?(this.dispatchEvent(jh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Oe/60*this.autoRotateSpeed*t:Oe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ve.copy(r).sub(this.target);let s=ve.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new qt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ex(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Mx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function wx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mf),this.state=se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ax(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case sr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=se.DOLLY;break;case sr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=se.ROTATE}break;case sr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(vc)}function Tx(n){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Cx(n){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(n.preventDefault(),this.dispatchEvent(vc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Mf))}function Rx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Px(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=se.TOUCH_ROTATE;break;case nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=se.TOUCH_DOLLY_PAN;break;case nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(vc)}function Lx(n){switch(this._trackPointer(n),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=se.NONE}}function Dx(n){this.enabled!==!1&&n.preventDefault()}function Ix(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Nx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ux=`in vec3 position;\r
\r
uniform mat4 modelMatrix;\r
uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform vec3 cameraPosition;\r
\r
out vec3 vOrigin; // ray origin\r
out vec3 vDirection; // ray direction\r
\r
void main() {\r
    vOrigin = vec3(inverse(modelMatrix) * vec4(cameraPosition, 1.0)).xyz;\r
    vDirection = position - vOrigin;\r
\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}\r
`,Fx=`precision highp sampler3D;\r
precision highp float;\r
\r
uniform sampler3D dataTexture;\r
uniform sampler2D colorTexture;\r
uniform float samplingRate;\r
uniform float threshold;\r
uniform float alphaScale;\r
uniform bool invertColor;\r
uniform int composition;\r
\r
in vec3 vOrigin;\r
in vec3 vDirection;\r
\r
out vec4 frag_color;\r
\r
float sampleData(vec3 coord) {\r
    return texture(dataTexture, coord).x;\r
}\r
\r
vec4 sampleColor(float value) {\r
    float x = invertColor ? 1.0 - value : value;\r
    return texture(colorTexture, vec2(x, 0.5));\r
}\r
\r
vec2 intersectAABB(vec3 rayOrigin, vec3 rayDir, vec3 boxMin, vec3 boxMax) {\r
    vec3 tMin = (boxMin - rayOrigin) / rayDir;\r
    vec3 tMax = (boxMax - rayOrigin) / rayDir;\r
    vec3 t1 = min(tMin, tMax);\r
    vec3 t2 = max(tMin, tMax);\r
    float tNear = max(max(t1.x, t1.y), t1.z);\r
    float tFar = min(min(t2.x, t2.y), t2.z);\r
\r
    return vec2(tNear, tFar);\r
}\r
\r
vec4 MIP(vec4 color, vec3 entryPoint, vec3 rayDir, float samples, float tStart, float tEnd, float tIncr) {\r
    float density = 0.0;\r
    for (float i = 0.0; i < samples; i += 1.0) {\r
        float t = tStart + tIncr * i;\r
        vec3 p = entryPoint + rayDir * t;\r
\r
        float value = sampleData(p);\r
\r
        if (value > density) {\r
            density = value;\r
        }\r
\r
        if (density >= 1.0 || t > tEnd) {\r
            break;\r
        }\r
    }\r
\r
    color.rgb = sampleColor(density).rgb;\r
\r
    color.a = alphaScale * (invertColor ? 1.0 - density: density);\r
\r
    return color;\r
}\r
\r
vec4 IsoSurface(vec4 color, vec3 entryPoint, vec3 rayDir, float samples, float tStart, float tEnd, float tIncr) {\r
    for (float i = 0.0; i < samples; i += 1.0) {\r
        float t = tStart + tIncr * i;\r
        vec3 p = entryPoint + rayDir * t;\r
\r
        float value = sampleData(p);\r
\r
        if (value >= threshold || t > tEnd) {\r
            color.rgb = sampleColor(value).rgb;\r
            color.a = alphaScale;\r
            break;\r
        }\r
    }\r
\r
    return color;\r
}\r
\r
vec4 EmissonAbsorption(vec4 color, vec3 entryPoint, vec3 rayDir, float samples, float tStart, float tEnd, float tIncr) {\r
    for (float i = 0.0; i < samples; i += 1.0) {\r
        float t = tStart + tIncr * i;\r
        vec3 p = entryPoint + rayDir * t;\r
\r
        float value = sampleData(p);\r
        vec4 valueColor = sampleColor(value);\r
\r
        // Front to Back Alpha Blending\r
        valueColor.a *= value * alphaScale;\r
        color.rgb += (1.0 - color.a) * valueColor.a * valueColor.rgb;\r
        color.a += (1.0 - color.a) * valueColor.a;\r
\r
        // Early Exit\r
        if (color.a >= 0.97 || t > tEnd) {\r
            break;\r
        }\r
    }\r
    return color;\r
}\r
\r
vec4 Average(vec4 color, vec3 entryPoint, vec3 rayDir, float samples, float tStart, float tEnd, float tIncr) {\r
    float sum = 0.0;\r
    float count = 0.0;\r
\r
    for (float i = 0.0; i < samples; i += 1.0) {\r
        float t = tStart + tIncr * i;\r
        if (t > tEnd) {\r
            break;\r
        }\r
        vec3 p = entryPoint + rayDir * t;\r
\r
        float value = sampleData(p);\r
\r
        sum += value;\r
        count++;\r
\r
    }\r
    float mean = (count > 0.0) ? (sum / count) : 0.0;\r
    vec3 rgb = sampleColor(mean).rgb;\r
    return vec4(rgb, alphaScale);\r
}\r
\r
\r
void main() {\r
    vec3 rayDir = normalize(vDirection);\r
    vec3 aabbmin = vec3(-0.5);\r
    vec3 aabbmax = vec3(0.5);\r
    vec2 intersection = intersectAABB(vOrigin, rayDir, aabbmin, aabbmax);\r
\r
    vec4 color = vec4(0.0);\r
\r
    if (intersection.x <= intersection.y) {\r
        intersection.x = max(intersection.x, 0.0);\r
\r
        vec3 entryPoint = vOrigin + rayDir * intersection.x;\r
        vec3 exitPoint = vOrigin + rayDir * intersection.y;\r
\r
        vec3 dimensions = vec3(textureSize(dataTexture, 0));\r
        vec3 entryToExit = exitPoint - entryPoint;\r
        float samples = ceil(samplingRate * length(entryToExit * (dimensions - vec3(1.0))));\r
        float tEnd = length(entryToExit);\r
        float tIncr = tEnd / samples;\r
        float tStart = 0.5 * tIncr;\r
\r
        vec3 texEntry = (entryPoint - aabbmin) / (aabbmax - aabbmin);\r
\r
        if (composition == 0)\r
        {\r
            color = MIP(color, texEntry, rayDir, samples, tStart, tEnd, tIncr);\r
        } else if (composition == 1){\r
            color = IsoSurface(color, texEntry, rayDir, samples, tStart, tEnd, tIncr);\r
        } else if (composition == 2) {\r
            color = EmissonAbsorption(color, texEntry, rayDir, samples, tStart, tEnd, tIncr);\r
        } else if (composition == 3) {\r
            color = Average(color, texEntry, rayDir, samples, tStart, tEnd, tIncr);\r
        }\r
    }\r
    frag_color = color;\r
}\r
`;var Ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Xs(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Po={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Kh;function Ox(){return Kh||(Kh=1,(function(n,t){(function(e){n.exports=e()})(function(){return(function e(i,r,s){function a(c,h){if(!r[c]){if(!i[c]){var u=typeof Xs=="function"&&Xs;if(!h&&u)return u(c,!0);if(o)return o(c,!0);var d=new Error("Cannot find module '"+c+"'");throw d.code="MODULE_NOT_FOUND",d}var p=r[c]={exports:{}};i[c][0].call(p.exports,function(_){var g=i[c][1][_];return a(g||_)},p,p.exports,e,i,r,s)}return r[c].exports}for(var o=typeof Xs=="function"&&Xs,l=0;l<s.length;l++)a(s[l]);return a})({1:[function(e,i,r){var s=e("./utils"),a=e("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,h,u,d,p,_,g,m=[],f=0,v=l.length,y=v,S=s.getTypeOf(l)!=="string";f<l.length;)y=v-f,u=S?(c=l[f++],h=f<v?l[f++]:0,f<v?l[f++]:0):(c=l.charCodeAt(f++),h=f<v?l.charCodeAt(f++):0,f<v?l.charCodeAt(f++):0),d=c>>2,p=(3&c)<<4|h>>4,_=1<y?(15&h)<<2|u>>6:64,g=2<y?63&u:64,m.push(o.charAt(d)+o.charAt(p)+o.charAt(_)+o.charAt(g));return m.join("")},r.decode=function(l){var c,h,u,d,p,_,g=0,m=0,f="data:";if(l.substr(0,f.length)===f)throw new Error("Invalid base64 input, it looks like a data url.");var v,y=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&y--,l.charAt(l.length-2)===o.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(v=a.uint8array?new Uint8Array(0|y):new Array(0|y);g<l.length;)c=o.indexOf(l.charAt(g++))<<2|(d=o.indexOf(l.charAt(g++)))>>4,h=(15&d)<<4|(p=o.indexOf(l.charAt(g++)))>>2,u=(3&p)<<6|(_=o.indexOf(l.charAt(g++))),v[m++]=c,p!==64&&(v[m++]=h),_!==64&&(v[m++]=u);return v}},{"./support":30,"./utils":32}],2:[function(e,i,r){var s=e("./external"),a=e("./stream/DataWorker"),o=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(h,u,d,p,_){this.compressedSize=h,this.uncompressedSize=u,this.crc32=d,this.compression=p,this.compressedContent=_}c.prototype={getContentWorker:function(){var h=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),u=this;return h.on("end",function(){if(this.streamInfo.data_length!==u.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),h},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(h,u,d){return h.pipe(new o).pipe(new l("uncompressedSize")).pipe(u.compressWorker(d)).pipe(new l("compressedSize")).withStreamInfo("compression",u)},i.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,i,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,i,r){var s=e("./utils"),a=(function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var h=0;h<8;h++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l})();i.exports=function(o,l){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?(function(c,h,u,d){var p=a,_=d+u;c^=-1;for(var g=d;g<_;g++)c=c>>>8^p[255&(c^h[g])];return-1^c})(0|l,o,o.length,0):(function(c,h,u,d){var p=a,_=d+u;c^=-1;for(var g=d;g<_;g++)c=c>>>8^p[255&(c^h.charCodeAt(g))];return-1^c})(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(e,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,i,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),i.exports={Promise:s}},{lie:37}],7:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=e("pako"),o=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function h(u,d){l.call(this,"FlateWorker/"+u),this._pako=null,this._pakoAction=u,this._pakoOptions=d,this.meta={}}r.magic="\b\0",o.inherits(h,l),h.prototype.processChunk=function(u){this.meta=u.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,u.data),!1)},h.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var u=this;this._pako.onData=function(d){u.push({data:d,meta:u.meta})}},r.compressWorker=function(u){return new h("Deflate",u)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,i,r){function s(p,_){var g,m="";for(g=0;g<_;g++)m+=String.fromCharCode(255&p),p>>>=8;return m}function a(p,_,g,m,f,v){var y,S,C=p.file,R=p.compression,A=v!==c.utf8encode,N=o.transformTo("string",v(C.name)),E=o.transformTo("string",c.utf8encode(C.name)),w=C.comment,I=o.transformTo("string",v(w)),T=o.transformTo("string",c.utf8encode(w)),F=E.length!==C.name.length,x=T.length!==w.length,z="",J="",G="",Y=C.dir,$=C.date,lt={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(lt.crc32=p.crc32,lt.compressedSize=p.compressedSize,lt.uncompressedSize=p.uncompressedSize);var V=0;_&&(V|=8),A||!F&&!x||(V|=2048);var W=0,yt=0;Y&&(W|=16),f==="UNIX"?(yt=798,W|=(function(ut,st){var ct=ut;return ut||(ct=st?16893:33204),(65535&ct)<<16})(C.unixPermissions,Y)):(yt=20,W|=(function(ut){return 63&(ut||0)})(C.dosPermissions)),y=$.getUTCHours(),y<<=6,y|=$.getUTCMinutes(),y<<=5,y|=$.getUTCSeconds()/2,S=$.getUTCFullYear()-1980,S<<=4,S|=$.getUTCMonth()+1,S<<=5,S|=$.getUTCDate(),F&&(J=s(1,1)+s(h(N),4)+E,z+="up"+s(J.length,2)+J),x&&(G=s(1,1)+s(h(I),4)+T,z+="uc"+s(G.length,2)+G);var gt="";return gt+=`
\0`,gt+=s(V,2),gt+=R.magic,gt+=s(y,2),gt+=s(S,2),gt+=s(lt.crc32,4),gt+=s(lt.compressedSize,4),gt+=s(lt.uncompressedSize,4),gt+=s(N.length,2),gt+=s(z.length,2),{fileRecord:u.LOCAL_FILE_HEADER+gt+N+z,dirRecord:u.CENTRAL_FILE_HEADER+s(yt,2)+gt+s(I.length,2)+"\0\0\0\0"+s(W,4)+s(m,4)+N+z+I}}var o=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),h=e("../crc32"),u=e("../signature");function d(p,_,g,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(d,l),d.prototype.push=function(p){var _=p.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,l.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-m-1))/g:100}}))},d.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var _=this.streamFiles&&!p.file.dir;if(_){var g=a(p,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(p){this.accumulate=!1;var _=this.streamFiles&&!p.file.dir,g=a(p,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:(function(m){return u.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)})(p),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var p=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-p,m=(function(f,v,y,S,C){var R=o.transformTo("string",C(S));return u.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(f,2)+s(f,2)+s(v,4)+s(y,4)+s(R.length,2)+R})(this.dirRecords.length,g,p,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(p){this._sources.push(p);var _=this;return p.on("data",function(g){_.processChunk(g)}),p.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),p.on("error",function(g){_.error(g)}),this},d.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},d.prototype.error=function(p){var _=this._sources;if(!l.prototype.error.call(this,p))return!1;for(var g=0;g<_.length;g++)try{_[g].error(p)}catch{}return!0},d.prototype.lock=function(){l.prototype.lock.call(this);for(var p=this._sources,_=0;_<p.length;_++)p[_].lock()},i.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,i,r){var s=e("../compressions"),a=e("./ZipFileWorker");r.generateWorker=function(o,l,c){var h=new a(l.streamFiles,c,l.platform,l.encodeFileName),u=0;try{o.forEach(function(d,p){u++;var _=(function(v,y){var S=v||y,C=s[S];if(!C)throw new Error(S+" is not a valid compression method !");return C})(p.options.compression,l.compression),g=p.options.compressionOptions||l.compressionOptions||{},m=p.dir,f=p.date;p._compressWorker(_,g).withStreamInfo("file",{name:d,dir:m,date:f,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(h)}),h.entriesCount=u}catch(d){h.error(d)}return h}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,i,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=e("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,i,r){var s=e("./utils"),a=e("./external"),o=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),h=e("./nodejsUtils");function u(d){return new a.Promise(function(p,_){var g=d.decompressed.getContentWorker().pipe(new c);g.on("error",function(m){_(m)}).on("end",function(){g.streamInfo.crc32!==d.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}i.exports=function(d,p){var _=this;return p=s.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),h.isNode&&h.isStream(d)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",d,!0,p.optimizedBinaryString,p.base64).then(function(g){var m=new l(p);return m.load(g),m}).then(function(g){var m=[a.Promise.resolve(g)],f=g.files;if(p.checkCRC32)for(var v=0;v<f.length;v++)m.push(u(f[v]));return a.Promise.all(m)}).then(function(g){for(var m=g.shift(),f=m.files,v=0;v<f.length;v++){var y=f[v],S=y.fileNameStr,C=s.resolve(y.fileNameStr);_.file(C,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:p.createFolders}),y.dir||(_.file(C).unsafeOriginalName=S)}return m.zipComment.length&&(_.comment=m.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,i,r){var s=e("../utils"),a=e("../stream/GenericWorker");function o(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(o,a),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(h){c.push({data:h,meta:{percent:0}})}).on("error",function(h){c.isPaused?this.generatedError=h:c.error(h)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,i,r){var s=e("readable-stream").Readable;function a(o,l,c){s.call(this,l),this._helper=o;var h=this;o.on("data",function(u,d){h.push(u)||h._helper.pause(),c&&c(d)}).on("error",function(u){h.emit("error",u)}).on("end",function(){h.push(null)})}e("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},i.exports=a},{"../utils":32,"readable-stream":16}],14:[function(e,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,i,r){function s(C,R,A){var N,E=o.getTypeOf(R),w=o.extend(A||{},h);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(C=f(C)),w.createFolders&&(N=m(C))&&v.call(this,N,!0);var I=E==="string"&&w.binary===!1&&w.base64===!1;A&&A.binary!==void 0||(w.binary=!I),(R instanceof u&&R.uncompressedSize===0||w.dir||!R||R.length===0)&&(w.base64=!1,w.binary=!0,R="",w.compression="STORE",E="string");var T=null;T=R instanceof u||R instanceof l?R:_.isNode&&_.isStream(R)?new g(C,R):o.prepareContent(C,R,w.binary,w.optimizedBinaryString,w.base64);var F=new d(C,T,w);this.files[C]=F}var a=e("./utf8"),o=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),h=e("./defaults"),u=e("./compressedObject"),d=e("./zipObject"),p=e("./generate"),_=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),m=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var R=C.lastIndexOf("/");return 0<R?C.substring(0,R):""},f=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},v=function(C,R){return R=R!==void 0?R:h.createFolders,C=f(C),this.files[C]||s.call(this,C,null,{dir:!0,createFolders:R}),this.files[C]};function y(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var R,A,N;for(R in this.files)N=this.files[R],(A=R.slice(this.root.length,R.length))&&R.slice(0,this.root.length)===this.root&&C(A,N)},filter:function(C){var R=[];return this.forEach(function(A,N){C(A,N)&&R.push(N)}),R},file:function(C,R,A){if(arguments.length!==1)return C=this.root+C,s.call(this,C,R,A),this;if(y(C)){var N=C;return this.filter(function(w,I){return!I.dir&&N.test(w)})}var E=this.files[this.root+C];return E&&!E.dir?E:null},folder:function(C){if(!C)return this;if(y(C))return this.filter(function(E,w){return w.dir&&C.test(E)});var R=this.root+C,A=v.call(this,R),N=this.clone();return N.root=A.name,N},remove:function(C){C=this.root+C;var R=this.files[C];if(R||(C.slice(-1)!=="/"&&(C+="/"),R=this.files[C]),R&&!R.dir)delete this.files[C];else for(var A=this.filter(function(E,w){return w.name.slice(0,C.length)===C}),N=0;N<A.length;N++)delete this.files[A[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var R,A={};try{if((A=o.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=A.type.toLowerCase(),A.compression=A.compression.toUpperCase(),A.type==="binarystring"&&(A.type="string"),!A.type)throw new Error("No output type specified.");o.checkSupport(A.type),A.platform!=="darwin"&&A.platform!=="freebsd"&&A.platform!=="linux"&&A.platform!=="sunos"||(A.platform="UNIX"),A.platform==="win32"&&(A.platform="DOS");var N=A.comment||this.comment||"";R=p.generateWorker(this,A,N)}catch(E){(R=new l("error")).error(E)}return new c(R,A.type||"string",A.mimeType)},generateAsync:function(C,R){return this.generateInternalStream(C).accumulate(R)},generateNodeStream:function(C,R){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(R)}};i.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,i,r){i.exports=e("stream")},{stream:void 0}],17:[function(e,i,r){var s=e("./DataReader");function a(o){s.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),h=o.charCodeAt(2),u=o.charCodeAt(3),d=this.length-4;0<=d;--d)if(this.data[d]===l&&this.data[d+1]===c&&this.data[d+2]===h&&this.data[d+3]===u)return d-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),h=o.charCodeAt(2),u=o.charCodeAt(3),d=this.readData(4);return l===d[0]&&c===d[1]&&h===d[2]&&u===d[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./DataReader":18}],18:[function(e,i,r){var s=e("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},i.exports=a},{"../utils":32}],19:[function(e,i,r){var s=e("./Uint8ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,i,r){var s=e("./DataReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./DataReader":18}],21:[function(e,i,r){var s=e("./ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(e,i,r){var s=e("../utils"),a=e("../support"),o=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),h=e("./Uint8ArrayReader");i.exports=function(u){var d=s.getTypeOf(u);return s.checkSupport(d),d!=="string"||a.uint8array?d==="nodebuffer"?new c(u):a.uint8array?new h(s.transformTo("uint8array",u)):new o(s.transformTo("array",u)):new l(u)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,i,r){var s=e("./GenericWorker"),a=e("../utils");function o(l){s.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(o,s),o.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},i.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(e,i,r){var s=e("./GenericWorker"),a=e("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(o,s),o.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,i,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(o,a),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},i.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(e,i,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(h){c.dataIsReady=!0,c.data=h,c.max=h&&h.length||0,c.type=s.getTypeOf(h),c.isPaused||c._tickAndRepeat()},function(h){c.error(h)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(e,i,r){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(l){o.processChunk(l)}),a.on("end",function(){o.end()}),a.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},i.exports=s},{}],29:[function(e,i,r){var s=e("../utils"),a=e("./ConvertWorker"),o=e("./GenericWorker"),l=e("../base64"),c=e("../support"),h=e("../external"),u=null;if(c.nodestream)try{u=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function d(_,g){return new h.Promise(function(m,f){var v=[],y=_._internalType,S=_._outputType,C=_._mimeType;_.on("data",function(R,A){v.push(R),g&&g(A)}).on("error",function(R){v=[],f(R)}).on("end",function(){try{var R=(function(A,N,E){switch(A){case"blob":return s.newBlob(s.transformTo("arraybuffer",N),E);case"base64":return l.encode(N);default:return s.transformTo(A,N)}})(S,(function(A,N){var E,w=0,I=null,T=0;for(E=0;E<N.length;E++)T+=N[E].length;switch(A){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(I=new Uint8Array(T),E=0;E<N.length;E++)I.set(N[E],w),w+=N[E].length;return I;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+A+"'")}})(y,v),C);m(R)}catch(A){f(A)}v=[]}).resume()})}function p(_,g,m){var f=g;switch(g){case"blob":case"arraybuffer":f="uint8array";break;case"base64":f="string"}try{this._internalType=f,this._outputType=g,this._mimeType=m,s.checkSupport(f),this._worker=_.pipe(new a(f)),_.lock()}catch(v){this._worker=new o("error"),this._worker.error(v)}}p.prototype={accumulate:function(_){return d(this,_)},on:function(_,g){var m=this;return _==="data"?this._worker.on(_,function(f){g.call(m,f.data,f.meta)}):this._worker.on(_,function(){s.delay(g,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new u(this,{objectMode:this._outputType!=="nodebuffer"},_)}},i.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),r.blob=a.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,i,r){for(var s=e("./utils"),a=e("./support"),o=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),h=0;h<256;h++)c[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;c[254]=c[254]=1;function u(){l.call(this,"utf-8 decode"),this.leftOver=null}function d(){l.call(this,"utf-8 encode")}r.utf8encode=function(p){return a.nodebuffer?o.newBufferFrom(p,"utf-8"):(function(_){var g,m,f,v,y,S=_.length,C=0;for(v=0;v<S;v++)(64512&(m=_.charCodeAt(v)))==55296&&v+1<S&&(64512&(f=_.charCodeAt(v+1)))==56320&&(m=65536+(m-55296<<10)+(f-56320),v++),C+=m<128?1:m<2048?2:m<65536?3:4;for(g=a.uint8array?new Uint8Array(C):new Array(C),v=y=0;y<C;v++)(64512&(m=_.charCodeAt(v)))==55296&&v+1<S&&(64512&(f=_.charCodeAt(v+1)))==56320&&(m=65536+(m-55296<<10)+(f-56320),v++),m<128?g[y++]=m:(m<2048?g[y++]=192|m>>>6:(m<65536?g[y++]=224|m>>>12:(g[y++]=240|m>>>18,g[y++]=128|m>>>12&63),g[y++]=128|m>>>6&63),g[y++]=128|63&m);return g})(p)},r.utf8decode=function(p){return a.nodebuffer?s.transformTo("nodebuffer",p).toString("utf-8"):(function(_){var g,m,f,v,y=_.length,S=new Array(2*y);for(g=m=0;g<y;)if((f=_[g++])<128)S[m++]=f;else if(4<(v=c[f]))S[m++]=65533,g+=v-1;else{for(f&=v===2?31:v===3?15:7;1<v&&g<y;)f=f<<6|63&_[g++],v--;1<v?S[m++]=65533:f<65536?S[m++]=f:(f-=65536,S[m++]=55296|f>>10&1023,S[m++]=56320|1023&f)}return S.length!==m&&(S.subarray?S=S.subarray(0,m):S.length=m),s.applyFromCharCode(S)})(p=s.transformTo(a.uint8array?"uint8array":"array",p))},s.inherits(u,l),u.prototype.processChunk=function(p){var _=s.transformTo(a.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var m=(function(v,y){var S;for((y=y||v.length)>v.length&&(y=v.length),S=y-1;0<=S&&(192&v[S])==128;)S--;return S<0||S===0?y:S+c[v[S]]>y?S:y})(_),f=_;m!==_.length&&(a.uint8array?(f=_.subarray(0,m),this.leftOver=_.subarray(m,_.length)):(f=_.slice(0,m),this.leftOver=_.slice(m,_.length))),this.push({data:r.utf8decode(f),meta:p.meta})},u.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=u,s.inherits(d,l),d.prototype.processChunk=function(p){this.push({data:r.utf8encode(p.data),meta:p.meta})},r.Utf8EncodeWorker=d},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,i,r){var s=e("./support"),a=e("./base64"),o=e("./nodejsUtils"),l=e("./external");function c(g){return g}function h(g,m){for(var f=0;f<g.length;++f)m[f]=255&g.charCodeAt(f);return m}e("setimmediate"),r.newBlob=function(g,m){r.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var f=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return f.append(g),f.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var u={stringifyByChunk:function(g,m,f){var v=[],y=0,S=g.length;if(S<=f)return String.fromCharCode.apply(null,g);for(;y<S;)m==="array"||m==="nodebuffer"?v.push(String.fromCharCode.apply(null,g.slice(y,Math.min(y+f,S)))):v.push(String.fromCharCode.apply(null,g.subarray(y,Math.min(y+f,S)))),y+=f;return v.join("")},stringifyByChar:function(g){for(var m="",f=0;f<g.length;f++)m+=String.fromCharCode(g[f]);return m},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function d(g){var m=65536,f=r.getTypeOf(g),v=!0;if(f==="uint8array"?v=u.applyCanBeUsed.uint8array:f==="nodebuffer"&&(v=u.applyCanBeUsed.nodebuffer),v)for(;1<m;)try{return u.stringifyByChunk(g,f,m)}catch{m=Math.floor(m/2)}return u.stringifyByChar(g)}function p(g,m){for(var f=0;f<g.length;f++)m[f]=g[f];return m}r.applyFromCharCode=d;var _={};_.string={string:c,array:function(g){return h(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return h(g,new Uint8Array(g.length))},nodebuffer:function(g){return h(g,o.allocBuffer(g.length))}},_.array={string:d,array:c,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(g)}},_.arraybuffer={string:function(g){return d(new Uint8Array(g))},array:function(g){return p(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:c,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:d,array:function(g){return p(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:c,nodebuffer:function(g){return o.newBufferFrom(g)}},_.nodebuffer={string:d,array:function(g){return p(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return p(g,new Uint8Array(g.length))},nodebuffer:c},r.transformTo=function(g,m){if(m=m||"",!g)return m;r.checkSupport(g);var f=r.getTypeOf(m);return _[f][g](m)},r.resolve=function(g){for(var m=g.split("/"),f=[],v=0;v<m.length;v++){var y=m[v];y==="."||y===""&&v!==0&&v!==m.length-1||(y===".."?f.pop():f.push(y))}return f.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var m,f,v="";for(f=0;f<(g||"").length;f++)v+="\\x"+((m=g.charCodeAt(f))<16?"0":"")+m.toString(16).toUpperCase();return v},r.delay=function(g,m,f){setImmediate(function(){g.apply(f||null,m||[])})},r.inherits=function(g,m){function f(){}f.prototype=m.prototype,g.prototype=new f},r.extend=function(){var g,m,f={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&f[m]===void 0&&(f[m]=arguments[g][m]);return f},r.prepareContent=function(g,m,f,v,y){return l.Promise.resolve(m).then(function(S){return s.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new l.Promise(function(C,R){var A=new FileReader;A.onload=function(N){C(N.target.result)},A.onerror=function(N){R(N.target.error)},A.readAsArrayBuffer(S)}):S}).then(function(S){var C=r.getTypeOf(S);return C?(C==="arraybuffer"?S=r.transformTo("uint8array",S):C==="string"&&(y?S=a.decode(S):f&&v!==!0&&(S=(function(R){return h(R,s.uint8array?new Uint8Array(R.length):new Array(R.length))})(S))),S):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,i,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./signature"),l=e("./zipEntry"),c=e("./support");function h(u){this.files=[],this.loadOptions=u}h.prototype={checkSignature:function(u){if(!this.reader.readAndCheckSignature(u)){this.reader.index-=4;var d=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(d)+", expected "+a.pretty(u)+")")}},isSignature:function(u,d){var p=this.reader.index;this.reader.setIndex(u);var _=this.reader.readString(4)===d;return this.reader.setIndex(p),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var u=this.reader.readData(this.zipCommentLength),d=c.uint8array?"uint8array":"array",p=a.transformTo(d,u);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var u,d,p,_=this.zip64EndOfCentralSize-44;0<_;)u=this.reader.readInt(2),d=this.reader.readInt(4),p=this.reader.readData(d),this.zip64ExtensibleData[u]={id:u,length:d,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var u,d;for(u=0;u<this.files.length;u++)d=this.files[u],this.reader.setIndex(d.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),d.readLocalPart(this.reader),d.handleUTF8(),d.processAttributes()},readCentralDir:function(){var u;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(u=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(u);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var u=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(u<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(u);var d=u;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(u=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(u),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var _=d-p;if(0<_)this.isSignature(d,o.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(u){this.reader=s(u)},load:function(u){this.prepareReader(u),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,i,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),h=e("./compressions"),u=e("./support");function d(p,_){this.options=p,this.loadOptions=_}d.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var _,g;if(p.skip(22),this.fileNameLength=p.readInt(2),g=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=(function(m){for(var f in h)if(Object.prototype.hasOwnProperty.call(h,f)&&h[f].magic===m)return h[f];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,_,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var _=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(_),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var _,g,m,f=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<f;)_=p.readInt(2),g=p.readInt(2),m=p.readData(g),this.extraFields[_]={id:_,length:g,value:m};p.setIndex(f)},handleUTF8:function(){var p=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=a.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var f=a.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(f)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var _=s(p.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:c.utf8decode(_.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var _=s(p.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:c.utf8decode(_.readData(p.length-5))}return null}},i.exports=d},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,i,r){function s(_,g,m){this.name=_,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var a=e("./stream/StreamHelper"),o=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),h=e("./stream/GenericWorker");s.prototype={internalStream:function(_){var g=null,m="string";try{if(!_)throw new Error("No output type specified.");var f=(m=_.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var v=!this._dataBinary;v&&!f&&(g=g.pipe(new l.Utf8EncodeWorker)),!v&&f&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(y){(g=new h("error")).error(y)}return new a(g,m,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof c&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(m,_,g)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof h?this._data:new o(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],d=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<u.length;p++)s.prototype[u[p]]=d;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,i,r){(function(s){var a,o,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,h=new l(_),u=s.document.createTextNode("");h.observe(u,{characterData:!0}),a=function(){u.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var d=new s.MessageChannel;d.port1.onmessage=_,a=function(){d.port2.postMessage(0)}}var p=[];function _(){var g,m;o=!0;for(var f=p.length;f;){for(m=p,p=[],g=-1;++g<f;)m[g]();f=p.length}o=!1}i.exports=function(g){p.push(g)!==1||o||a()}}).call(this,typeof Ws<"u"?Ws:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,i,r){var s=e("immediate");function a(){}var o={},l=["REJECTED"],c=["FULFILLED"],h=["PENDING"];function u(f){if(typeof f!="function")throw new TypeError("resolver must be a function");this.state=h,this.queue=[],this.outcome=void 0,f!==a&&g(this,f)}function d(f,v,y){this.promise=f,typeof v=="function"&&(this.onFulfilled=v,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function p(f,v,y){s(function(){var S;try{S=v(y)}catch(C){return o.reject(f,C)}S===f?o.reject(f,new TypeError("Cannot resolve promise with itself")):o.resolve(f,S)})}function _(f){var v=f&&f.then;if(f&&(typeof f=="object"||typeof f=="function")&&typeof v=="function")return function(){v.apply(f,arguments)}}function g(f,v){var y=!1;function S(A){y||(y=!0,o.reject(f,A))}function C(A){y||(y=!0,o.resolve(f,A))}var R=m(function(){v(C,S)});R.status==="error"&&S(R.value)}function m(f,v){var y={};try{y.value=f(v),y.status="success"}catch(S){y.status="error",y.value=S}return y}(i.exports=u).prototype.finally=function(f){if(typeof f!="function")return this;var v=this.constructor;return this.then(function(y){return v.resolve(f()).then(function(){return y})},function(y){return v.resolve(f()).then(function(){throw y})})},u.prototype.catch=function(f){return this.then(null,f)},u.prototype.then=function(f,v){if(typeof f!="function"&&this.state===c||typeof v!="function"&&this.state===l)return this;var y=new this.constructor(a);return this.state!==h?p(y,this.state===c?f:v,this.outcome):this.queue.push(new d(y,f,v)),y},d.prototype.callFulfilled=function(f){o.resolve(this.promise,f)},d.prototype.otherCallFulfilled=function(f){p(this.promise,this.onFulfilled,f)},d.prototype.callRejected=function(f){o.reject(this.promise,f)},d.prototype.otherCallRejected=function(f){p(this.promise,this.onRejected,f)},o.resolve=function(f,v){var y=m(_,v);if(y.status==="error")return o.reject(f,y.value);var S=y.value;if(S)g(f,S);else{f.state=c,f.outcome=v;for(var C=-1,R=f.queue.length;++C<R;)f.queue[C].callFulfilled(v)}return f},o.reject=function(f,v){f.state=l,f.outcome=v;for(var y=-1,S=f.queue.length;++y<S;)f.queue[y].callRejected(v);return f},u.resolve=function(f){return f instanceof this?f:o.resolve(new this(a),f)},u.reject=function(f){var v=new this(a);return o.reject(v,f)},u.all=function(f){var v=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=f.length,S=!1;if(!y)return this.resolve([]);for(var C=new Array(y),R=0,A=-1,N=new this(a);++A<y;)E(f[A],A);return N;function E(w,I){v.resolve(w).then(function(T){C[I]=T,++R!==y||S||(S=!0,o.resolve(N,C))},function(T){S||(S=!0,o.reject(N,T))})}},u.race=function(f){var v=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=f.length,S=!1;if(!y)return this.resolve([]);for(var C=-1,R=new this(a);++C<y;)A=f[C],v.resolve(A).then(function(N){S||(S=!0,o.resolve(R,N))},function(N){S||(S=!0,o.reject(R,N))});var A;return R}},{immediate:36}],38:[function(e,i,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,i,r){var s=e("./zlib/deflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),h=Object.prototype.toString,u=0,d=-1,p=0,_=8;function g(f){if(!(this instanceof g))return new g(f);this.options=a.assign({level:d,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},f||{});var v=this.options;v.raw&&0<v.windowBits?v.windowBits=-v.windowBits:v.gzip&&0<v.windowBits&&v.windowBits<16&&(v.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var y=s.deflateInit2(this.strm,v.level,v.method,v.windowBits,v.memLevel,v.strategy);if(y!==u)throw new Error(l[y]);if(v.header&&s.deflateSetHeader(this.strm,v.header),v.dictionary){var S;if(S=typeof v.dictionary=="string"?o.string2buf(v.dictionary):h.call(v.dictionary)==="[object ArrayBuffer]"?new Uint8Array(v.dictionary):v.dictionary,(y=s.deflateSetDictionary(this.strm,S))!==u)throw new Error(l[y]);this._dict_set=!0}}function m(f,v){var y=new g(v);if(y.push(f,!0),y.err)throw y.msg||l[y.err];return y.result}g.prototype.push=function(f,v){var y,S,C=this.strm,R=this.options.chunkSize;if(this.ended)return!1;S=v===~~v?v:v===!0?4:0,typeof f=="string"?C.input=o.string2buf(f):h.call(f)==="[object ArrayBuffer]"?C.input=new Uint8Array(f):C.input=f,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new a.Buf8(R),C.next_out=0,C.avail_out=R),(y=s.deflate(C,S))!==1&&y!==u)return this.onEnd(y),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(C.output,C.next_out))):this.onData(a.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&y!==1);return S===4?(y=s.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===u):S!==2||(this.onEnd(u),!(C.avail_out=0))},g.prototype.onData=function(f){this.chunks.push(f)},g.prototype.onEnd=function(f){f===u&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},r.Deflate=g,r.deflate=m,r.deflateRaw=function(f,v){return(v=v||{}).raw=!0,m(f,v)},r.gzip=function(f,v){return(v=v||{}).gzip=!0,m(f,v)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,i,r){var s=e("./zlib/inflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),h=e("./zlib/zstream"),u=e("./zlib/gzheader"),d=Object.prototype.toString;function p(g){if(!(this instanceof p))return new p(g);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&(15&m.windowBits)==0&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var f=s.inflateInit2(this.strm,m.windowBits);if(f!==l.Z_OK)throw new Error(c[f]);this.header=new u,s.inflateGetHeader(this.strm,this.header)}function _(g,m){var f=new p(m);if(f.push(g,!0),f.err)throw f.msg||c[f.err];return f.result}p.prototype.push=function(g,m){var f,v,y,S,C,R,A=this.strm,N=this.options.chunkSize,E=this.options.dictionary,w=!1;if(this.ended)return!1;v=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?A.input=o.binstring2buf(g):d.call(g)==="[object ArrayBuffer]"?A.input=new Uint8Array(g):A.input=g,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new a.Buf8(N),A.next_out=0,A.avail_out=N),(f=s.inflate(A,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&E&&(R=typeof E=="string"?o.string2buf(E):d.call(E)==="[object ArrayBuffer]"?new Uint8Array(E):E,f=s.inflateSetDictionary(this.strm,R)),f===l.Z_BUF_ERROR&&w===!0&&(f=l.Z_OK,w=!1),f!==l.Z_STREAM_END&&f!==l.Z_OK)return this.onEnd(f),!(this.ended=!0);A.next_out&&(A.avail_out!==0&&f!==l.Z_STREAM_END&&(A.avail_in!==0||v!==l.Z_FINISH&&v!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=o.utf8border(A.output,A.next_out),S=A.next_out-y,C=o.buf2string(A.output,y),A.next_out=S,A.avail_out=N-S,S&&a.arraySet(A.output,A.output,y,S,0),this.onData(C)):this.onData(a.shrinkBuf(A.output,A.next_out)))),A.avail_in===0&&A.avail_out===0&&(w=!0)}while((0<A.avail_in||A.avail_out===0)&&f!==l.Z_STREAM_END);return f===l.Z_STREAM_END&&(v=l.Z_FINISH),v===l.Z_FINISH?(f=s.inflateEnd(this.strm),this.onEnd(f),this.ended=!0,f===l.Z_OK):v!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(A.avail_out=0))},p.prototype.onData=function(g){this.chunks.push(g)},p.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=p,r.inflate=_,r.inflateRaw=function(g,m){return(m=m||{}).raw=!0,_(g,m)},r.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var h=c.shift();if(h){if(typeof h!="object")throw new TypeError(h+"must be non-object");for(var u in h)h.hasOwnProperty(u)&&(l[u]=h[u])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,h,u,d){if(c.subarray&&l.subarray)l.set(c.subarray(h,h+u),d);else for(var p=0;p<u;p++)l[d+p]=c[h+p]},flattenChunks:function(l){var c,h,u,d,p,_;for(c=u=0,h=l.length;c<h;c++)u+=l[c].length;for(_=new Uint8Array(u),c=d=0,h=l.length;c<h;c++)p=l[c],_.set(p,d),d+=p.length;return _}},o={arraySet:function(l,c,h,u,d){for(var p=0;p<u;p++)l[d+p]=c[h+p]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(s)},{}],42:[function(e,i,r){var s=e("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function h(u,d){if(d<65537&&(u.subarray&&o||!u.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(u,d));for(var p="",_=0;_<d;_++)p+=String.fromCharCode(u[_]);return p}l[254]=l[254]=1,r.string2buf=function(u){var d,p,_,g,m,f=u.length,v=0;for(g=0;g<f;g++)(64512&(p=u.charCodeAt(g)))==55296&&g+1<f&&(64512&(_=u.charCodeAt(g+1)))==56320&&(p=65536+(p-55296<<10)+(_-56320),g++),v+=p<128?1:p<2048?2:p<65536?3:4;for(d=new s.Buf8(v),g=m=0;m<v;g++)(64512&(p=u.charCodeAt(g)))==55296&&g+1<f&&(64512&(_=u.charCodeAt(g+1)))==56320&&(p=65536+(p-55296<<10)+(_-56320),g++),p<128?d[m++]=p:(p<2048?d[m++]=192|p>>>6:(p<65536?d[m++]=224|p>>>12:(d[m++]=240|p>>>18,d[m++]=128|p>>>12&63),d[m++]=128|p>>>6&63),d[m++]=128|63&p);return d},r.buf2binstring=function(u){return h(u,u.length)},r.binstring2buf=function(u){for(var d=new s.Buf8(u.length),p=0,_=d.length;p<_;p++)d[p]=u.charCodeAt(p);return d},r.buf2string=function(u,d){var p,_,g,m,f=d||u.length,v=new Array(2*f);for(p=_=0;p<f;)if((g=u[p++])<128)v[_++]=g;else if(4<(m=l[g]))v[_++]=65533,p+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&p<f;)g=g<<6|63&u[p++],m--;1<m?v[_++]=65533:g<65536?v[_++]=g:(g-=65536,v[_++]=55296|g>>10&1023,v[_++]=56320|1023&g)}return h(v,_)},r.utf8border=function(u,d){var p;for((d=d||u.length)>u.length&&(d=u.length),p=d-1;0<=p&&(192&u[p])==128;)p--;return p<0||p===0?d:p+l[u[p]]>d?p:d}},{"./common":41}],43:[function(e,i,r){i.exports=function(s,a,o,l){for(var c=65535&s|0,h=s>>>16&65535|0,u=0;o!==0;){for(o-=u=2e3<o?2e3:o;h=h+(c=c+a[l++]|0)|0,--u;);c%=65521,h%=65521}return c|h<<16|0}},{}],44:[function(e,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,i,r){var s=(function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o})();i.exports=function(a,o,l,c){var h=s,u=c+l;a^=-1;for(var d=c;d<u;d++)a=a>>>8^h[255&(a^o[d])];return-1^a}},{}],46:[function(e,i,r){var s,a=e("../utils/common"),o=e("./trees"),l=e("./adler32"),c=e("./crc32"),h=e("./messages"),u=0,d=4,p=0,_=-2,g=-1,m=4,f=2,v=8,y=9,S=286,C=30,R=19,A=2*S+1,N=15,E=3,w=258,I=w+E+1,T=42,F=113,x=1,z=2,J=3,G=4;function Y(b,et){return b.msg=h[et],et}function $(b){return(b<<1)-(4<b?9:0)}function lt(b){for(var et=b.length;0<=--et;)b[et]=0}function V(b){var et=b.state,X=et.pending;X>b.avail_out&&(X=b.avail_out),X!==0&&(a.arraySet(b.output,et.pending_buf,et.pending_out,X,b.next_out),b.next_out+=X,et.pending_out+=X,b.total_out+=X,b.avail_out-=X,et.pending-=X,et.pending===0&&(et.pending_out=0))}function W(b,et){o._tr_flush_block(b,0<=b.block_start?b.block_start:-1,b.strstart-b.block_start,et),b.block_start=b.strstart,V(b.strm)}function yt(b,et){b.pending_buf[b.pending++]=et}function gt(b,et){b.pending_buf[b.pending++]=et>>>8&255,b.pending_buf[b.pending++]=255&et}function ut(b,et){var X,D,U=b.max_chain_length,k=b.strstart,nt=b.prev_length,ot=b.nice_match,q=b.strstart>b.w_size-I?b.strstart-(b.w_size-I):0,P=b.window,M=b.w_mask,O=b.prev,Z=b.strstart+w,at=P[k+nt-1],tt=P[k+nt];b.prev_length>=b.good_match&&(U>>=2),ot>b.lookahead&&(ot=b.lookahead);do if(P[(X=et)+nt]===tt&&P[X+nt-1]===at&&P[X]===P[k]&&P[++X]===P[k+1]){k+=2,X++;do;while(P[++k]===P[++X]&&P[++k]===P[++X]&&P[++k]===P[++X]&&P[++k]===P[++X]&&P[++k]===P[++X]&&P[++k]===P[++X]&&P[++k]===P[++X]&&P[++k]===P[++X]&&k<Z);if(D=w-(Z-k),k=Z-w,nt<D){if(b.match_start=et,ot<=(nt=D))break;at=P[k+nt-1],tt=P[k+nt]}}while((et=O[et&M])>q&&--U!=0);return nt<=b.lookahead?nt:b.lookahead}function st(b){var et,X,D,U,k,nt,ot,q,P,M,O=b.w_size;do{if(U=b.window_size-b.lookahead-b.strstart,b.strstart>=O+(O-I)){for(a.arraySet(b.window,b.window,O,O,0),b.match_start-=O,b.strstart-=O,b.block_start-=O,et=X=b.hash_size;D=b.head[--et],b.head[et]=O<=D?D-O:0,--X;);for(et=X=O;D=b.prev[--et],b.prev[et]=O<=D?D-O:0,--X;);U+=O}if(b.strm.avail_in===0)break;if(nt=b.strm,ot=b.window,q=b.strstart+b.lookahead,P=U,M=void 0,M=nt.avail_in,P<M&&(M=P),X=M===0?0:(nt.avail_in-=M,a.arraySet(ot,nt.input,nt.next_in,M,q),nt.state.wrap===1?nt.adler=l(nt.adler,ot,M,q):nt.state.wrap===2&&(nt.adler=c(nt.adler,ot,M,q)),nt.next_in+=M,nt.total_in+=M,M),b.lookahead+=X,b.lookahead+b.insert>=E)for(k=b.strstart-b.insert,b.ins_h=b.window[k],b.ins_h=(b.ins_h<<b.hash_shift^b.window[k+1])&b.hash_mask;b.insert&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[k+E-1])&b.hash_mask,b.prev[k&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=k,k++,b.insert--,!(b.lookahead+b.insert<E)););}while(b.lookahead<I&&b.strm.avail_in!==0)}function ct(b,et){for(var X,D;;){if(b.lookahead<I){if(st(b),b.lookahead<I&&et===u)return x;if(b.lookahead===0)break}if(X=0,b.lookahead>=E&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+E-1])&b.hash_mask,X=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),X!==0&&b.strstart-X<=b.w_size-I&&(b.match_length=ut(b,X)),b.match_length>=E)if(D=o._tr_tally(b,b.strstart-b.match_start,b.match_length-E),b.lookahead-=b.match_length,b.match_length<=b.max_lazy_match&&b.lookahead>=E){for(b.match_length--;b.strstart++,b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+E-1])&b.hash_mask,X=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart,--b.match_length!=0;);b.strstart++}else b.strstart+=b.match_length,b.match_length=0,b.ins_h=b.window[b.strstart],b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+1])&b.hash_mask;else D=o._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++;if(D&&(W(b,!1),b.strm.avail_out===0))return x}return b.insert=b.strstart<E-1?b.strstart:E-1,et===d?(W(b,!0),b.strm.avail_out===0?J:G):b.last_lit&&(W(b,!1),b.strm.avail_out===0)?x:z}function dt(b,et){for(var X,D,U;;){if(b.lookahead<I){if(st(b),b.lookahead<I&&et===u)return x;if(b.lookahead===0)break}if(X=0,b.lookahead>=E&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+E-1])&b.hash_mask,X=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),b.prev_length=b.match_length,b.prev_match=b.match_start,b.match_length=E-1,X!==0&&b.prev_length<b.max_lazy_match&&b.strstart-X<=b.w_size-I&&(b.match_length=ut(b,X),b.match_length<=5&&(b.strategy===1||b.match_length===E&&4096<b.strstart-b.match_start)&&(b.match_length=E-1)),b.prev_length>=E&&b.match_length<=b.prev_length){for(U=b.strstart+b.lookahead-E,D=o._tr_tally(b,b.strstart-1-b.prev_match,b.prev_length-E),b.lookahead-=b.prev_length-1,b.prev_length-=2;++b.strstart<=U&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+E-1])&b.hash_mask,X=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),--b.prev_length!=0;);if(b.match_available=0,b.match_length=E-1,b.strstart++,D&&(W(b,!1),b.strm.avail_out===0))return x}else if(b.match_available){if((D=o._tr_tally(b,0,b.window[b.strstart-1]))&&W(b,!1),b.strstart++,b.lookahead--,b.strm.avail_out===0)return x}else b.match_available=1,b.strstart++,b.lookahead--}return b.match_available&&(D=o._tr_tally(b,0,b.window[b.strstart-1]),b.match_available=0),b.insert=b.strstart<E-1?b.strstart:E-1,et===d?(W(b,!0),b.strm.avail_out===0?J:G):b.last_lit&&(W(b,!1),b.strm.avail_out===0)?x:z}function St(b,et,X,D,U){this.good_length=b,this.max_lazy=et,this.nice_length=X,this.max_chain=D,this.func=U}function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*A),this.dyn_dtree=new a.Buf16(2*(2*C+1)),this.bl_tree=new a.Buf16(2*(2*R+1)),lt(this.dyn_ltree),lt(this.dyn_dtree),lt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(N+1),this.heap=new a.Buf16(2*S+1),lt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*S+1),lt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ft(b){var et;return b&&b.state?(b.total_in=b.total_out=0,b.data_type=f,(et=b.state).pending=0,et.pending_out=0,et.wrap<0&&(et.wrap=-et.wrap),et.status=et.wrap?T:F,b.adler=et.wrap===2?0:1,et.last_flush=u,o._tr_init(et),p):Y(b,_)}function ae(b){var et=Ft(b);return et===p&&(function(X){X.window_size=2*X.w_size,lt(X.head),X.max_lazy_match=s[X.level].max_lazy,X.good_match=s[X.level].good_length,X.nice_match=s[X.level].nice_length,X.max_chain_length=s[X.level].max_chain,X.strstart=0,X.block_start=0,X.lookahead=0,X.insert=0,X.match_length=X.prev_length=E-1,X.match_available=0,X.ins_h=0})(b.state),et}function B(b,et,X,D,U,k){if(!b)return _;var nt=1;if(et===g&&(et=6),D<0?(nt=0,D=-D):15<D&&(nt=2,D-=16),U<1||y<U||X!==v||D<8||15<D||et<0||9<et||k<0||m<k)return Y(b,_);D===8&&(D=9);var ot=new At;return(b.state=ot).strm=b,ot.wrap=nt,ot.gzhead=null,ot.w_bits=D,ot.w_size=1<<ot.w_bits,ot.w_mask=ot.w_size-1,ot.hash_bits=U+7,ot.hash_size=1<<ot.hash_bits,ot.hash_mask=ot.hash_size-1,ot.hash_shift=~~((ot.hash_bits+E-1)/E),ot.window=new a.Buf8(2*ot.w_size),ot.head=new a.Buf16(ot.hash_size),ot.prev=new a.Buf16(ot.w_size),ot.lit_bufsize=1<<U+6,ot.pending_buf_size=4*ot.lit_bufsize,ot.pending_buf=new a.Buf8(ot.pending_buf_size),ot.d_buf=1*ot.lit_bufsize,ot.l_buf=3*ot.lit_bufsize,ot.level=et,ot.strategy=k,ot.method=X,ae(b)}s=[new St(0,0,0,0,function(b,et){var X=65535;for(X>b.pending_buf_size-5&&(X=b.pending_buf_size-5);;){if(b.lookahead<=1){if(st(b),b.lookahead===0&&et===u)return x;if(b.lookahead===0)break}b.strstart+=b.lookahead,b.lookahead=0;var D=b.block_start+X;if((b.strstart===0||b.strstart>=D)&&(b.lookahead=b.strstart-D,b.strstart=D,W(b,!1),b.strm.avail_out===0)||b.strstart-b.block_start>=b.w_size-I&&(W(b,!1),b.strm.avail_out===0))return x}return b.insert=0,et===d?(W(b,!0),b.strm.avail_out===0?J:G):(b.strstart>b.block_start&&(W(b,!1),b.strm.avail_out),x)}),new St(4,4,8,4,ct),new St(4,5,16,8,ct),new St(4,6,32,32,ct),new St(4,4,16,16,dt),new St(8,16,32,32,dt),new St(8,16,128,128,dt),new St(8,32,128,256,dt),new St(32,128,258,1024,dt),new St(32,258,258,4096,dt)],r.deflateInit=function(b,et){return B(b,et,v,15,8,0)},r.deflateInit2=B,r.deflateReset=ae,r.deflateResetKeep=Ft,r.deflateSetHeader=function(b,et){return b&&b.state?b.state.wrap!==2?_:(b.state.gzhead=et,p):_},r.deflate=function(b,et){var X,D,U,k;if(!b||!b.state||5<et||et<0)return b?Y(b,_):_;if(D=b.state,!b.output||!b.input&&b.avail_in!==0||D.status===666&&et!==d)return Y(b,b.avail_out===0?-5:_);if(D.strm=b,X=D.last_flush,D.last_flush=et,D.status===T)if(D.wrap===2)b.adler=0,yt(D,31),yt(D,139),yt(D,8),D.gzhead?(yt(D,(D.gzhead.text?1:0)+(D.gzhead.hcrc?2:0)+(D.gzhead.extra?4:0)+(D.gzhead.name?8:0)+(D.gzhead.comment?16:0)),yt(D,255&D.gzhead.time),yt(D,D.gzhead.time>>8&255),yt(D,D.gzhead.time>>16&255),yt(D,D.gzhead.time>>24&255),yt(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),yt(D,255&D.gzhead.os),D.gzhead.extra&&D.gzhead.extra.length&&(yt(D,255&D.gzhead.extra.length),yt(D,D.gzhead.extra.length>>8&255)),D.gzhead.hcrc&&(b.adler=c(b.adler,D.pending_buf,D.pending,0)),D.gzindex=0,D.status=69):(yt(D,0),yt(D,0),yt(D,0),yt(D,0),yt(D,0),yt(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),yt(D,3),D.status=F);else{var nt=v+(D.w_bits-8<<4)<<8;nt|=(2<=D.strategy||D.level<2?0:D.level<6?1:D.level===6?2:3)<<6,D.strstart!==0&&(nt|=32),nt+=31-nt%31,D.status=F,gt(D,nt),D.strstart!==0&&(gt(D,b.adler>>>16),gt(D,65535&b.adler)),b.adler=1}if(D.status===69)if(D.gzhead.extra){for(U=D.pending;D.gzindex<(65535&D.gzhead.extra.length)&&(D.pending!==D.pending_buf_size||(D.gzhead.hcrc&&D.pending>U&&(b.adler=c(b.adler,D.pending_buf,D.pending-U,U)),V(b),U=D.pending,D.pending!==D.pending_buf_size));)yt(D,255&D.gzhead.extra[D.gzindex]),D.gzindex++;D.gzhead.hcrc&&D.pending>U&&(b.adler=c(b.adler,D.pending_buf,D.pending-U,U)),D.gzindex===D.gzhead.extra.length&&(D.gzindex=0,D.status=73)}else D.status=73;if(D.status===73)if(D.gzhead.name){U=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>U&&(b.adler=c(b.adler,D.pending_buf,D.pending-U,U)),V(b),U=D.pending,D.pending===D.pending_buf_size)){k=1;break}k=D.gzindex<D.gzhead.name.length?255&D.gzhead.name.charCodeAt(D.gzindex++):0,yt(D,k)}while(k!==0);D.gzhead.hcrc&&D.pending>U&&(b.adler=c(b.adler,D.pending_buf,D.pending-U,U)),k===0&&(D.gzindex=0,D.status=91)}else D.status=91;if(D.status===91)if(D.gzhead.comment){U=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>U&&(b.adler=c(b.adler,D.pending_buf,D.pending-U,U)),V(b),U=D.pending,D.pending===D.pending_buf_size)){k=1;break}k=D.gzindex<D.gzhead.comment.length?255&D.gzhead.comment.charCodeAt(D.gzindex++):0,yt(D,k)}while(k!==0);D.gzhead.hcrc&&D.pending>U&&(b.adler=c(b.adler,D.pending_buf,D.pending-U,U)),k===0&&(D.status=103)}else D.status=103;if(D.status===103&&(D.gzhead.hcrc?(D.pending+2>D.pending_buf_size&&V(b),D.pending+2<=D.pending_buf_size&&(yt(D,255&b.adler),yt(D,b.adler>>8&255),b.adler=0,D.status=F)):D.status=F),D.pending!==0){if(V(b),b.avail_out===0)return D.last_flush=-1,p}else if(b.avail_in===0&&$(et)<=$(X)&&et!==d)return Y(b,-5);if(D.status===666&&b.avail_in!==0)return Y(b,-5);if(b.avail_in!==0||D.lookahead!==0||et!==u&&D.status!==666){var ot=D.strategy===2?(function(q,P){for(var M;;){if(q.lookahead===0&&(st(q),q.lookahead===0)){if(P===u)return x;break}if(q.match_length=0,M=o._tr_tally(q,0,q.window[q.strstart]),q.lookahead--,q.strstart++,M&&(W(q,!1),q.strm.avail_out===0))return x}return q.insert=0,P===d?(W(q,!0),q.strm.avail_out===0?J:G):q.last_lit&&(W(q,!1),q.strm.avail_out===0)?x:z})(D,et):D.strategy===3?(function(q,P){for(var M,O,Z,at,tt=q.window;;){if(q.lookahead<=w){if(st(q),q.lookahead<=w&&P===u)return x;if(q.lookahead===0)break}if(q.match_length=0,q.lookahead>=E&&0<q.strstart&&(O=tt[Z=q.strstart-1])===tt[++Z]&&O===tt[++Z]&&O===tt[++Z]){at=q.strstart+w;do;while(O===tt[++Z]&&O===tt[++Z]&&O===tt[++Z]&&O===tt[++Z]&&O===tt[++Z]&&O===tt[++Z]&&O===tt[++Z]&&O===tt[++Z]&&Z<at);q.match_length=w-(at-Z),q.match_length>q.lookahead&&(q.match_length=q.lookahead)}if(q.match_length>=E?(M=o._tr_tally(q,1,q.match_length-E),q.lookahead-=q.match_length,q.strstart+=q.match_length,q.match_length=0):(M=o._tr_tally(q,0,q.window[q.strstart]),q.lookahead--,q.strstart++),M&&(W(q,!1),q.strm.avail_out===0))return x}return q.insert=0,P===d?(W(q,!0),q.strm.avail_out===0?J:G):q.last_lit&&(W(q,!1),q.strm.avail_out===0)?x:z})(D,et):s[D.level].func(D,et);if(ot!==J&&ot!==G||(D.status=666),ot===x||ot===J)return b.avail_out===0&&(D.last_flush=-1),p;if(ot===z&&(et===1?o._tr_align(D):et!==5&&(o._tr_stored_block(D,0,0,!1),et===3&&(lt(D.head),D.lookahead===0&&(D.strstart=0,D.block_start=0,D.insert=0))),V(b),b.avail_out===0))return D.last_flush=-1,p}return et!==d?p:D.wrap<=0?1:(D.wrap===2?(yt(D,255&b.adler),yt(D,b.adler>>8&255),yt(D,b.adler>>16&255),yt(D,b.adler>>24&255),yt(D,255&b.total_in),yt(D,b.total_in>>8&255),yt(D,b.total_in>>16&255),yt(D,b.total_in>>24&255)):(gt(D,b.adler>>>16),gt(D,65535&b.adler)),V(b),0<D.wrap&&(D.wrap=-D.wrap),D.pending!==0?p:1)},r.deflateEnd=function(b){var et;return b&&b.state?(et=b.state.status)!==T&&et!==69&&et!==73&&et!==91&&et!==103&&et!==F&&et!==666?Y(b,_):(b.state=null,et===F?Y(b,-3):p):_},r.deflateSetDictionary=function(b,et){var X,D,U,k,nt,ot,q,P,M=et.length;if(!b||!b.state||(k=(X=b.state).wrap)===2||k===1&&X.status!==T||X.lookahead)return _;for(k===1&&(b.adler=l(b.adler,et,M,0)),X.wrap=0,M>=X.w_size&&(k===0&&(lt(X.head),X.strstart=0,X.block_start=0,X.insert=0),P=new a.Buf8(X.w_size),a.arraySet(P,et,M-X.w_size,X.w_size,0),et=P,M=X.w_size),nt=b.avail_in,ot=b.next_in,q=b.input,b.avail_in=M,b.next_in=0,b.input=et,st(X);X.lookahead>=E;){for(D=X.strstart,U=X.lookahead-(E-1);X.ins_h=(X.ins_h<<X.hash_shift^X.window[D+E-1])&X.hash_mask,X.prev[D&X.w_mask]=X.head[X.ins_h],X.head[X.ins_h]=D,D++,--U;);X.strstart=D,X.lookahead=E-1,st(X)}return X.strstart+=X.lookahead,X.block_start=X.strstart,X.insert=X.lookahead,X.lookahead=0,X.match_length=X.prev_length=E-1,X.match_available=0,b.next_in=ot,b.input=q,b.avail_in=nt,X.wrap=k,p},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,i,r){i.exports=function(s,a){var o,l,c,h,u,d,p,_,g,m,f,v,y,S,C,R,A,N,E,w,I,T,F,x,z;o=s.state,l=s.next_in,x=s.input,c=l+(s.avail_in-5),h=s.next_out,z=s.output,u=h-(a-s.avail_out),d=h+(s.avail_out-257),p=o.dmax,_=o.wsize,g=o.whave,m=o.wnext,f=o.window,v=o.hold,y=o.bits,S=o.lencode,C=o.distcode,R=(1<<o.lenbits)-1,A=(1<<o.distbits)-1;t:do{y<15&&(v+=x[l++]<<y,y+=8,v+=x[l++]<<y,y+=8),N=S[v&R];e:for(;;){if(v>>>=E=N>>>24,y-=E,(E=N>>>16&255)===0)z[h++]=65535&N;else{if(!(16&E)){if((64&E)==0){N=S[(65535&N)+(v&(1<<E)-1)];continue e}if(32&E){o.mode=12;break t}s.msg="invalid literal/length code",o.mode=30;break t}w=65535&N,(E&=15)&&(y<E&&(v+=x[l++]<<y,y+=8),w+=v&(1<<E)-1,v>>>=E,y-=E),y<15&&(v+=x[l++]<<y,y+=8,v+=x[l++]<<y,y+=8),N=C[v&A];n:for(;;){if(v>>>=E=N>>>24,y-=E,!(16&(E=N>>>16&255))){if((64&E)==0){N=C[(65535&N)+(v&(1<<E)-1)];continue n}s.msg="invalid distance code",o.mode=30;break t}if(I=65535&N,y<(E&=15)&&(v+=x[l++]<<y,(y+=8)<E&&(v+=x[l++]<<y,y+=8)),p<(I+=v&(1<<E)-1)){s.msg="invalid distance too far back",o.mode=30;break t}if(v>>>=E,y-=E,(E=h-u)<I){if(g<(E=I-E)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break t}if(F=f,(T=0)===m){if(T+=_-E,E<w){for(w-=E;z[h++]=f[T++],--E;);T=h-I,F=z}}else if(m<E){if(T+=_+m-E,(E-=m)<w){for(w-=E;z[h++]=f[T++],--E;);if(T=0,m<w){for(w-=E=m;z[h++]=f[T++],--E;);T=h-I,F=z}}}else if(T+=m-E,E<w){for(w-=E;z[h++]=f[T++],--E;);T=h-I,F=z}for(;2<w;)z[h++]=F[T++],z[h++]=F[T++],z[h++]=F[T++],w-=3;w&&(z[h++]=F[T++],1<w&&(z[h++]=F[T++]))}else{for(T=h-I;z[h++]=z[T++],z[h++]=z[T++],z[h++]=z[T++],2<(w-=3););w&&(z[h++]=z[T++],1<w&&(z[h++]=z[T++]))}break}}break}}while(l<c&&h<d);l-=w=y>>3,v&=(1<<(y-=w<<3))-1,s.next_in=l,s.next_out=h,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=h<d?d-h+257:257-(h-d),o.hold=v,o.bits=y}},{}],49:[function(e,i,r){var s=e("../utils/common"),a=e("./adler32"),o=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),h=1,u=2,d=0,p=-2,_=1,g=852,m=592;function f(T){return(T>>>24&255)+(T>>>8&65280)+((65280&T)<<8)+((255&T)<<24)}function v(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(T){var F;return T&&T.state?(F=T.state,T.total_in=T.total_out=F.total=0,T.msg="",F.wrap&&(T.adler=1&F.wrap),F.mode=_,F.last=0,F.havedict=0,F.dmax=32768,F.head=null,F.hold=0,F.bits=0,F.lencode=F.lendyn=new s.Buf32(g),F.distcode=F.distdyn=new s.Buf32(m),F.sane=1,F.back=-1,d):p}function S(T){var F;return T&&T.state?((F=T.state).wsize=0,F.whave=0,F.wnext=0,y(T)):p}function C(T,F){var x,z;return T&&T.state?(z=T.state,F<0?(x=0,F=-F):(x=1+(F>>4),F<48&&(F&=15)),F&&(F<8||15<F)?p:(z.window!==null&&z.wbits!==F&&(z.window=null),z.wrap=x,z.wbits=F,S(T))):p}function R(T,F){var x,z;return T?(z=new v,(T.state=z).window=null,(x=C(T,F))!==d&&(T.state=null),x):p}var A,N,E=!0;function w(T){if(E){var F;for(A=new s.Buf32(512),N=new s.Buf32(32),F=0;F<144;)T.lens[F++]=8;for(;F<256;)T.lens[F++]=9;for(;F<280;)T.lens[F++]=7;for(;F<288;)T.lens[F++]=8;for(c(h,T.lens,0,288,A,0,T.work,{bits:9}),F=0;F<32;)T.lens[F++]=5;c(u,T.lens,0,32,N,0,T.work,{bits:5}),E=!1}T.lencode=A,T.lenbits=9,T.distcode=N,T.distbits=5}function I(T,F,x,z){var J,G=T.state;return G.window===null&&(G.wsize=1<<G.wbits,G.wnext=0,G.whave=0,G.window=new s.Buf8(G.wsize)),z>=G.wsize?(s.arraySet(G.window,F,x-G.wsize,G.wsize,0),G.wnext=0,G.whave=G.wsize):(z<(J=G.wsize-G.wnext)&&(J=z),s.arraySet(G.window,F,x-z,J,G.wnext),(z-=J)?(s.arraySet(G.window,F,x-z,z,0),G.wnext=z,G.whave=G.wsize):(G.wnext+=J,G.wnext===G.wsize&&(G.wnext=0),G.whave<G.wsize&&(G.whave+=J))),0}r.inflateReset=S,r.inflateReset2=C,r.inflateResetKeep=y,r.inflateInit=function(T){return R(T,15)},r.inflateInit2=R,r.inflate=function(T,F){var x,z,J,G,Y,$,lt,V,W,yt,gt,ut,st,ct,dt,St,At,Ft,ae,B,b,et,X,D,U=0,k=new s.Buf8(4),nt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!T||!T.state||!T.output||!T.input&&T.avail_in!==0)return p;(x=T.state).mode===12&&(x.mode=13),Y=T.next_out,J=T.output,lt=T.avail_out,G=T.next_in,z=T.input,$=T.avail_in,V=x.hold,W=x.bits,yt=$,gt=lt,et=d;t:for(;;)switch(x.mode){case _:if(x.wrap===0){x.mode=13;break}for(;W<16;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}if(2&x.wrap&&V===35615){k[x.check=0]=255&V,k[1]=V>>>8&255,x.check=o(x.check,k,2,0),W=V=0,x.mode=2;break}if(x.flags=0,x.head&&(x.head.done=!1),!(1&x.wrap)||(((255&V)<<8)+(V>>8))%31){T.msg="incorrect header check",x.mode=30;break}if((15&V)!=8){T.msg="unknown compression method",x.mode=30;break}if(W-=4,b=8+(15&(V>>>=4)),x.wbits===0)x.wbits=b;else if(b>x.wbits){T.msg="invalid window size",x.mode=30;break}x.dmax=1<<b,T.adler=x.check=1,x.mode=512&V?10:12,W=V=0;break;case 2:for(;W<16;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}if(x.flags=V,(255&x.flags)!=8){T.msg="unknown compression method",x.mode=30;break}if(57344&x.flags){T.msg="unknown header flags set",x.mode=30;break}x.head&&(x.head.text=V>>8&1),512&x.flags&&(k[0]=255&V,k[1]=V>>>8&255,x.check=o(x.check,k,2,0)),W=V=0,x.mode=3;case 3:for(;W<32;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}x.head&&(x.head.time=V),512&x.flags&&(k[0]=255&V,k[1]=V>>>8&255,k[2]=V>>>16&255,k[3]=V>>>24&255,x.check=o(x.check,k,4,0)),W=V=0,x.mode=4;case 4:for(;W<16;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}x.head&&(x.head.xflags=255&V,x.head.os=V>>8),512&x.flags&&(k[0]=255&V,k[1]=V>>>8&255,x.check=o(x.check,k,2,0)),W=V=0,x.mode=5;case 5:if(1024&x.flags){for(;W<16;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}x.length=V,x.head&&(x.head.extra_len=V),512&x.flags&&(k[0]=255&V,k[1]=V>>>8&255,x.check=o(x.check,k,2,0)),W=V=0}else x.head&&(x.head.extra=null);x.mode=6;case 6:if(1024&x.flags&&($<(ut=x.length)&&(ut=$),ut&&(x.head&&(b=x.head.extra_len-x.length,x.head.extra||(x.head.extra=new Array(x.head.extra_len)),s.arraySet(x.head.extra,z,G,ut,b)),512&x.flags&&(x.check=o(x.check,z,ut,G)),$-=ut,G+=ut,x.length-=ut),x.length))break t;x.length=0,x.mode=7;case 7:if(2048&x.flags){if($===0)break t;for(ut=0;b=z[G+ut++],x.head&&b&&x.length<65536&&(x.head.name+=String.fromCharCode(b)),b&&ut<$;);if(512&x.flags&&(x.check=o(x.check,z,ut,G)),$-=ut,G+=ut,b)break t}else x.head&&(x.head.name=null);x.length=0,x.mode=8;case 8:if(4096&x.flags){if($===0)break t;for(ut=0;b=z[G+ut++],x.head&&b&&x.length<65536&&(x.head.comment+=String.fromCharCode(b)),b&&ut<$;);if(512&x.flags&&(x.check=o(x.check,z,ut,G)),$-=ut,G+=ut,b)break t}else x.head&&(x.head.comment=null);x.mode=9;case 9:if(512&x.flags){for(;W<16;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}if(V!==(65535&x.check)){T.msg="header crc mismatch",x.mode=30;break}W=V=0}x.head&&(x.head.hcrc=x.flags>>9&1,x.head.done=!0),T.adler=x.check=0,x.mode=12;break;case 10:for(;W<32;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}T.adler=x.check=f(V),W=V=0,x.mode=11;case 11:if(x.havedict===0)return T.next_out=Y,T.avail_out=lt,T.next_in=G,T.avail_in=$,x.hold=V,x.bits=W,2;T.adler=x.check=1,x.mode=12;case 12:if(F===5||F===6)break t;case 13:if(x.last){V>>>=7&W,W-=7&W,x.mode=27;break}for(;W<3;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}switch(x.last=1&V,W-=1,3&(V>>>=1)){case 0:x.mode=14;break;case 1:if(w(x),x.mode=20,F!==6)break;V>>>=2,W-=2;break t;case 2:x.mode=17;break;case 3:T.msg="invalid block type",x.mode=30}V>>>=2,W-=2;break;case 14:for(V>>>=7&W,W-=7&W;W<32;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}if((65535&V)!=(V>>>16^65535)){T.msg="invalid stored block lengths",x.mode=30;break}if(x.length=65535&V,W=V=0,x.mode=15,F===6)break t;case 15:x.mode=16;case 16:if(ut=x.length){if($<ut&&(ut=$),lt<ut&&(ut=lt),ut===0)break t;s.arraySet(J,z,G,ut,Y),$-=ut,G+=ut,lt-=ut,Y+=ut,x.length-=ut;break}x.mode=12;break;case 17:for(;W<14;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}if(x.nlen=257+(31&V),V>>>=5,W-=5,x.ndist=1+(31&V),V>>>=5,W-=5,x.ncode=4+(15&V),V>>>=4,W-=4,286<x.nlen||30<x.ndist){T.msg="too many length or distance symbols",x.mode=30;break}x.have=0,x.mode=18;case 18:for(;x.have<x.ncode;){for(;W<3;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}x.lens[nt[x.have++]]=7&V,V>>>=3,W-=3}for(;x.have<19;)x.lens[nt[x.have++]]=0;if(x.lencode=x.lendyn,x.lenbits=7,X={bits:x.lenbits},et=c(0,x.lens,0,19,x.lencode,0,x.work,X),x.lenbits=X.bits,et){T.msg="invalid code lengths set",x.mode=30;break}x.have=0,x.mode=19;case 19:for(;x.have<x.nlen+x.ndist;){for(;St=(U=x.lencode[V&(1<<x.lenbits)-1])>>>16&255,At=65535&U,!((dt=U>>>24)<=W);){if($===0)break t;$--,V+=z[G++]<<W,W+=8}if(At<16)V>>>=dt,W-=dt,x.lens[x.have++]=At;else{if(At===16){for(D=dt+2;W<D;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}if(V>>>=dt,W-=dt,x.have===0){T.msg="invalid bit length repeat",x.mode=30;break}b=x.lens[x.have-1],ut=3+(3&V),V>>>=2,W-=2}else if(At===17){for(D=dt+3;W<D;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}W-=dt,b=0,ut=3+(7&(V>>>=dt)),V>>>=3,W-=3}else{for(D=dt+7;W<D;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}W-=dt,b=0,ut=11+(127&(V>>>=dt)),V>>>=7,W-=7}if(x.have+ut>x.nlen+x.ndist){T.msg="invalid bit length repeat",x.mode=30;break}for(;ut--;)x.lens[x.have++]=b}}if(x.mode===30)break;if(x.lens[256]===0){T.msg="invalid code -- missing end-of-block",x.mode=30;break}if(x.lenbits=9,X={bits:x.lenbits},et=c(h,x.lens,0,x.nlen,x.lencode,0,x.work,X),x.lenbits=X.bits,et){T.msg="invalid literal/lengths set",x.mode=30;break}if(x.distbits=6,x.distcode=x.distdyn,X={bits:x.distbits},et=c(u,x.lens,x.nlen,x.ndist,x.distcode,0,x.work,X),x.distbits=X.bits,et){T.msg="invalid distances set",x.mode=30;break}if(x.mode=20,F===6)break t;case 20:x.mode=21;case 21:if(6<=$&&258<=lt){T.next_out=Y,T.avail_out=lt,T.next_in=G,T.avail_in=$,x.hold=V,x.bits=W,l(T,gt),Y=T.next_out,J=T.output,lt=T.avail_out,G=T.next_in,z=T.input,$=T.avail_in,V=x.hold,W=x.bits,x.mode===12&&(x.back=-1);break}for(x.back=0;St=(U=x.lencode[V&(1<<x.lenbits)-1])>>>16&255,At=65535&U,!((dt=U>>>24)<=W);){if($===0)break t;$--,V+=z[G++]<<W,W+=8}if(St&&(240&St)==0){for(Ft=dt,ae=St,B=At;St=(U=x.lencode[B+((V&(1<<Ft+ae)-1)>>Ft)])>>>16&255,At=65535&U,!(Ft+(dt=U>>>24)<=W);){if($===0)break t;$--,V+=z[G++]<<W,W+=8}V>>>=Ft,W-=Ft,x.back+=Ft}if(V>>>=dt,W-=dt,x.back+=dt,x.length=At,St===0){x.mode=26;break}if(32&St){x.back=-1,x.mode=12;break}if(64&St){T.msg="invalid literal/length code",x.mode=30;break}x.extra=15&St,x.mode=22;case 22:if(x.extra){for(D=x.extra;W<D;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}x.length+=V&(1<<x.extra)-1,V>>>=x.extra,W-=x.extra,x.back+=x.extra}x.was=x.length,x.mode=23;case 23:for(;St=(U=x.distcode[V&(1<<x.distbits)-1])>>>16&255,At=65535&U,!((dt=U>>>24)<=W);){if($===0)break t;$--,V+=z[G++]<<W,W+=8}if((240&St)==0){for(Ft=dt,ae=St,B=At;St=(U=x.distcode[B+((V&(1<<Ft+ae)-1)>>Ft)])>>>16&255,At=65535&U,!(Ft+(dt=U>>>24)<=W);){if($===0)break t;$--,V+=z[G++]<<W,W+=8}V>>>=Ft,W-=Ft,x.back+=Ft}if(V>>>=dt,W-=dt,x.back+=dt,64&St){T.msg="invalid distance code",x.mode=30;break}x.offset=At,x.extra=15&St,x.mode=24;case 24:if(x.extra){for(D=x.extra;W<D;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}x.offset+=V&(1<<x.extra)-1,V>>>=x.extra,W-=x.extra,x.back+=x.extra}if(x.offset>x.dmax){T.msg="invalid distance too far back",x.mode=30;break}x.mode=25;case 25:if(lt===0)break t;if(ut=gt-lt,x.offset>ut){if((ut=x.offset-ut)>x.whave&&x.sane){T.msg="invalid distance too far back",x.mode=30;break}st=ut>x.wnext?(ut-=x.wnext,x.wsize-ut):x.wnext-ut,ut>x.length&&(ut=x.length),ct=x.window}else ct=J,st=Y-x.offset,ut=x.length;for(lt<ut&&(ut=lt),lt-=ut,x.length-=ut;J[Y++]=ct[st++],--ut;);x.length===0&&(x.mode=21);break;case 26:if(lt===0)break t;J[Y++]=x.length,lt--,x.mode=21;break;case 27:if(x.wrap){for(;W<32;){if($===0)break t;$--,V|=z[G++]<<W,W+=8}if(gt-=lt,T.total_out+=gt,x.total+=gt,gt&&(T.adler=x.check=x.flags?o(x.check,J,gt,Y-gt):a(x.check,J,gt,Y-gt)),gt=lt,(x.flags?V:f(V))!==x.check){T.msg="incorrect data check",x.mode=30;break}W=V=0}x.mode=28;case 28:if(x.wrap&&x.flags){for(;W<32;){if($===0)break t;$--,V+=z[G++]<<W,W+=8}if(V!==(4294967295&x.total)){T.msg="incorrect length check",x.mode=30;break}W=V=0}x.mode=29;case 29:et=1;break t;case 30:et=-3;break t;case 31:return-4;case 32:default:return p}return T.next_out=Y,T.avail_out=lt,T.next_in=G,T.avail_in=$,x.hold=V,x.bits=W,(x.wsize||gt!==T.avail_out&&x.mode<30&&(x.mode<27||F!==4))&&I(T,T.output,T.next_out,gt-T.avail_out)?(x.mode=31,-4):(yt-=T.avail_in,gt-=T.avail_out,T.total_in+=yt,T.total_out+=gt,x.total+=gt,x.wrap&&gt&&(T.adler=x.check=x.flags?o(x.check,J,gt,T.next_out-gt):a(x.check,J,gt,T.next_out-gt)),T.data_type=x.bits+(x.last?64:0)+(x.mode===12?128:0)+(x.mode===20||x.mode===15?256:0),(yt==0&&gt===0||F===4)&&et===d&&(et=-5),et)},r.inflateEnd=function(T){if(!T||!T.state)return p;var F=T.state;return F.window&&(F.window=null),T.state=null,d},r.inflateGetHeader=function(T,F){var x;return T&&T.state?(2&(x=T.state).wrap)==0?p:((x.head=F).done=!1,d):p},r.inflateSetDictionary=function(T,F){var x,z=F.length;return T&&T.state?(x=T.state).wrap!==0&&x.mode!==11?p:x.mode===11&&a(1,F,z,0)!==x.check?-3:I(T,F,z,z)?(x.mode=31,-4):(x.havedict=1,d):p},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,i,r){var s=e("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(h,u,d,p,_,g,m,f){var v,y,S,C,R,A,N,E,w,I=f.bits,T=0,F=0,x=0,z=0,J=0,G=0,Y=0,$=0,lt=0,V=0,W=null,yt=0,gt=new s.Buf16(16),ut=new s.Buf16(16),st=null,ct=0;for(T=0;T<=15;T++)gt[T]=0;for(F=0;F<p;F++)gt[u[d+F]]++;for(J=I,z=15;1<=z&&gt[z]===0;z--);if(z<J&&(J=z),z===0)return _[g++]=20971520,_[g++]=20971520,f.bits=1,0;for(x=1;x<z&&gt[x]===0;x++);for(J<x&&(J=x),T=$=1;T<=15;T++)if($<<=1,($-=gt[T])<0)return-1;if(0<$&&(h===0||z!==1))return-1;for(ut[1]=0,T=1;T<15;T++)ut[T+1]=ut[T]+gt[T];for(F=0;F<p;F++)u[d+F]!==0&&(m[ut[u[d+F]]++]=F);if(A=h===0?(W=st=m,19):h===1?(W=a,yt-=257,st=o,ct-=257,256):(W=l,st=c,-1),T=x,R=g,Y=F=V=0,S=-1,C=(lt=1<<(G=J))-1,h===1&&852<lt||h===2&&592<lt)return 1;for(;;){for(N=T-Y,w=m[F]<A?(E=0,m[F]):m[F]>A?(E=st[ct+m[F]],W[yt+m[F]]):(E=96,0),v=1<<T-Y,x=y=1<<G;_[R+(V>>Y)+(y-=v)]=N<<24|E<<16|w|0,y!==0;);for(v=1<<T-1;V&v;)v>>=1;if(v!==0?(V&=v-1,V+=v):V=0,F++,--gt[T]==0){if(T===z)break;T=u[d+m[F]]}if(J<T&&(V&C)!==S){for(Y===0&&(Y=J),R+=x,$=1<<(G=T-Y);G+Y<z&&!(($-=gt[G+Y])<=0);)G++,$<<=1;if(lt+=1<<G,h===1&&852<lt||h===2&&592<lt)return 1;_[S=V&C]=J<<24|G<<16|R-g|0}}return V!==0&&(_[R+V]=T-Y<<24|64<<16|0),f.bits=J,0}},{"../utils/common":41}],51:[function(e,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,i,r){var s=e("../utils/common"),a=0,o=1;function l(U){for(var k=U.length;0<=--k;)U[k]=0}var c=0,h=29,u=256,d=u+1+h,p=30,_=19,g=2*d+1,m=15,f=16,v=7,y=256,S=16,C=17,R=18,A=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],E=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],I=new Array(2*(d+2));l(I);var T=new Array(2*p);l(T);var F=new Array(512);l(F);var x=new Array(256);l(x);var z=new Array(h);l(z);var J,G,Y,$=new Array(p);function lt(U,k,nt,ot,q){this.static_tree=U,this.extra_bits=k,this.extra_base=nt,this.elems=ot,this.max_length=q,this.has_stree=U&&U.length}function V(U,k){this.dyn_tree=U,this.max_code=0,this.stat_desc=k}function W(U){return U<256?F[U]:F[256+(U>>>7)]}function yt(U,k){U.pending_buf[U.pending++]=255&k,U.pending_buf[U.pending++]=k>>>8&255}function gt(U,k,nt){U.bi_valid>f-nt?(U.bi_buf|=k<<U.bi_valid&65535,yt(U,U.bi_buf),U.bi_buf=k>>f-U.bi_valid,U.bi_valid+=nt-f):(U.bi_buf|=k<<U.bi_valid&65535,U.bi_valid+=nt)}function ut(U,k,nt){gt(U,nt[2*k],nt[2*k+1])}function st(U,k){for(var nt=0;nt|=1&U,U>>>=1,nt<<=1,0<--k;);return nt>>>1}function ct(U,k,nt){var ot,q,P=new Array(m+1),M=0;for(ot=1;ot<=m;ot++)P[ot]=M=M+nt[ot-1]<<1;for(q=0;q<=k;q++){var O=U[2*q+1];O!==0&&(U[2*q]=st(P[O]++,O))}}function dt(U){var k;for(k=0;k<d;k++)U.dyn_ltree[2*k]=0;for(k=0;k<p;k++)U.dyn_dtree[2*k]=0;for(k=0;k<_;k++)U.bl_tree[2*k]=0;U.dyn_ltree[2*y]=1,U.opt_len=U.static_len=0,U.last_lit=U.matches=0}function St(U){8<U.bi_valid?yt(U,U.bi_buf):0<U.bi_valid&&(U.pending_buf[U.pending++]=U.bi_buf),U.bi_buf=0,U.bi_valid=0}function At(U,k,nt,ot){var q=2*k,P=2*nt;return U[q]<U[P]||U[q]===U[P]&&ot[k]<=ot[nt]}function Ft(U,k,nt){for(var ot=U.heap[nt],q=nt<<1;q<=U.heap_len&&(q<U.heap_len&&At(k,U.heap[q+1],U.heap[q],U.depth)&&q++,!At(k,ot,U.heap[q],U.depth));)U.heap[nt]=U.heap[q],nt=q,q<<=1;U.heap[nt]=ot}function ae(U,k,nt){var ot,q,P,M,O=0;if(U.last_lit!==0)for(;ot=U.pending_buf[U.d_buf+2*O]<<8|U.pending_buf[U.d_buf+2*O+1],q=U.pending_buf[U.l_buf+O],O++,ot===0?ut(U,q,k):(ut(U,(P=x[q])+u+1,k),(M=A[P])!==0&&gt(U,q-=z[P],M),ut(U,P=W(--ot),nt),(M=N[P])!==0&&gt(U,ot-=$[P],M)),O<U.last_lit;);ut(U,y,k)}function B(U,k){var nt,ot,q,P=k.dyn_tree,M=k.stat_desc.static_tree,O=k.stat_desc.has_stree,Z=k.stat_desc.elems,at=-1;for(U.heap_len=0,U.heap_max=g,nt=0;nt<Z;nt++)P[2*nt]!==0?(U.heap[++U.heap_len]=at=nt,U.depth[nt]=0):P[2*nt+1]=0;for(;U.heap_len<2;)P[2*(q=U.heap[++U.heap_len]=at<2?++at:0)]=1,U.depth[q]=0,U.opt_len--,O&&(U.static_len-=M[2*q+1]);for(k.max_code=at,nt=U.heap_len>>1;1<=nt;nt--)Ft(U,P,nt);for(q=Z;nt=U.heap[1],U.heap[1]=U.heap[U.heap_len--],Ft(U,P,1),ot=U.heap[1],U.heap[--U.heap_max]=nt,U.heap[--U.heap_max]=ot,P[2*q]=P[2*nt]+P[2*ot],U.depth[q]=(U.depth[nt]>=U.depth[ot]?U.depth[nt]:U.depth[ot])+1,P[2*nt+1]=P[2*ot+1]=q,U.heap[1]=q++,Ft(U,P,1),2<=U.heap_len;);U.heap[--U.heap_max]=U.heap[1],(function(tt,Ct){var xt,Rt,It,ht,Et,kt,Lt=Ct.dyn_tree,Mt=Ct.max_code,Vt=Ct.stat_desc.static_tree,H=Ct.stat_desc.has_stree,_t=Ct.stat_desc.extra_bits,bt=Ct.stat_desc.extra_base,Pt=Ct.stat_desc.max_length,pt=0;for(ht=0;ht<=m;ht++)tt.bl_count[ht]=0;for(Lt[2*tt.heap[tt.heap_max]+1]=0,xt=tt.heap_max+1;xt<g;xt++)Pt<(ht=Lt[2*Lt[2*(Rt=tt.heap[xt])+1]+1]+1)&&(ht=Pt,pt++),Lt[2*Rt+1]=ht,Mt<Rt||(tt.bl_count[ht]++,Et=0,bt<=Rt&&(Et=_t[Rt-bt]),kt=Lt[2*Rt],tt.opt_len+=kt*(ht+Et),H&&(tt.static_len+=kt*(Vt[2*Rt+1]+Et)));if(pt!==0){do{for(ht=Pt-1;tt.bl_count[ht]===0;)ht--;tt.bl_count[ht]--,tt.bl_count[ht+1]+=2,tt.bl_count[Pt]--,pt-=2}while(0<pt);for(ht=Pt;ht!==0;ht--)for(Rt=tt.bl_count[ht];Rt!==0;)Mt<(It=tt.heap[--xt])||(Lt[2*It+1]!==ht&&(tt.opt_len+=(ht-Lt[2*It+1])*Lt[2*It],Lt[2*It+1]=ht),Rt--)}})(U,k),ct(P,at,U.bl_count)}function b(U,k,nt){var ot,q,P=-1,M=k[1],O=0,Z=7,at=4;for(M===0&&(Z=138,at=3),k[2*(nt+1)+1]=65535,ot=0;ot<=nt;ot++)q=M,M=k[2*(ot+1)+1],++O<Z&&q===M||(O<at?U.bl_tree[2*q]+=O:q!==0?(q!==P&&U.bl_tree[2*q]++,U.bl_tree[2*S]++):O<=10?U.bl_tree[2*C]++:U.bl_tree[2*R]++,P=q,at=(O=0)===M?(Z=138,3):q===M?(Z=6,3):(Z=7,4))}function et(U,k,nt){var ot,q,P=-1,M=k[1],O=0,Z=7,at=4;for(M===0&&(Z=138,at=3),ot=0;ot<=nt;ot++)if(q=M,M=k[2*(ot+1)+1],!(++O<Z&&q===M)){if(O<at)for(;ut(U,q,U.bl_tree),--O!=0;);else q!==0?(q!==P&&(ut(U,q,U.bl_tree),O--),ut(U,S,U.bl_tree),gt(U,O-3,2)):O<=10?(ut(U,C,U.bl_tree),gt(U,O-3,3)):(ut(U,R,U.bl_tree),gt(U,O-11,7));P=q,at=(O=0)===M?(Z=138,3):q===M?(Z=6,3):(Z=7,4)}}l($);var X=!1;function D(U,k,nt,ot){gt(U,(c<<1)+(ot?1:0),3),(function(q,P,M,O){St(q),yt(q,M),yt(q,~M),s.arraySet(q.pending_buf,q.window,P,M,q.pending),q.pending+=M})(U,k,nt)}r._tr_init=function(U){X||((function(){var k,nt,ot,q,P,M=new Array(m+1);for(q=ot=0;q<h-1;q++)for(z[q]=ot,k=0;k<1<<A[q];k++)x[ot++]=q;for(x[ot-1]=q,q=P=0;q<16;q++)for($[q]=P,k=0;k<1<<N[q];k++)F[P++]=q;for(P>>=7;q<p;q++)for($[q]=P<<7,k=0;k<1<<N[q]-7;k++)F[256+P++]=q;for(nt=0;nt<=m;nt++)M[nt]=0;for(k=0;k<=143;)I[2*k+1]=8,k++,M[8]++;for(;k<=255;)I[2*k+1]=9,k++,M[9]++;for(;k<=279;)I[2*k+1]=7,k++,M[7]++;for(;k<=287;)I[2*k+1]=8,k++,M[8]++;for(ct(I,d+1,M),k=0;k<p;k++)T[2*k+1]=5,T[2*k]=st(k,5);J=new lt(I,A,u+1,d,m),G=new lt(T,N,0,p,m),Y=new lt(new Array(0),E,0,_,v)})(),X=!0),U.l_desc=new V(U.dyn_ltree,J),U.d_desc=new V(U.dyn_dtree,G),U.bl_desc=new V(U.bl_tree,Y),U.bi_buf=0,U.bi_valid=0,dt(U)},r._tr_stored_block=D,r._tr_flush_block=function(U,k,nt,ot){var q,P,M=0;0<U.level?(U.strm.data_type===2&&(U.strm.data_type=(function(O){var Z,at=4093624447;for(Z=0;Z<=31;Z++,at>>>=1)if(1&at&&O.dyn_ltree[2*Z]!==0)return a;if(O.dyn_ltree[18]!==0||O.dyn_ltree[20]!==0||O.dyn_ltree[26]!==0)return o;for(Z=32;Z<u;Z++)if(O.dyn_ltree[2*Z]!==0)return o;return a})(U)),B(U,U.l_desc),B(U,U.d_desc),M=(function(O){var Z;for(b(O,O.dyn_ltree,O.l_desc.max_code),b(O,O.dyn_dtree,O.d_desc.max_code),B(O,O.bl_desc),Z=_-1;3<=Z&&O.bl_tree[2*w[Z]+1]===0;Z--);return O.opt_len+=3*(Z+1)+5+5+4,Z})(U),q=U.opt_len+3+7>>>3,(P=U.static_len+3+7>>>3)<=q&&(q=P)):q=P=nt+5,nt+4<=q&&k!==-1?D(U,k,nt,ot):U.strategy===4||P===q?(gt(U,2+(ot?1:0),3),ae(U,I,T)):(gt(U,4+(ot?1:0),3),(function(O,Z,at,tt){var Ct;for(gt(O,Z-257,5),gt(O,at-1,5),gt(O,tt-4,4),Ct=0;Ct<tt;Ct++)gt(O,O.bl_tree[2*w[Ct]+1],3);et(O,O.dyn_ltree,Z-1),et(O,O.dyn_dtree,at-1)})(U,U.l_desc.max_code+1,U.d_desc.max_code+1,M+1),ae(U,U.dyn_ltree,U.dyn_dtree)),dt(U),ot&&St(U)},r._tr_tally=function(U,k,nt){return U.pending_buf[U.d_buf+2*U.last_lit]=k>>>8&255,U.pending_buf[U.d_buf+2*U.last_lit+1]=255&k,U.pending_buf[U.l_buf+U.last_lit]=255&nt,U.last_lit++,k===0?U.dyn_ltree[2*nt]++:(U.matches++,k--,U.dyn_ltree[2*(x[nt]+u+1)]++,U.dyn_dtree[2*W(k)]++),U.last_lit===U.lit_bufsize-1},r._tr_align=function(U){gt(U,2,3),ut(U,y,I),(function(k){k.bi_valid===16?(yt(k,k.bi_buf),k.bi_buf=0,k.bi_valid=0):8<=k.bi_valid&&(k.pending_buf[k.pending++]=255&k.bi_buf,k.bi_buf>>=8,k.bi_valid-=8)})(U)}},{"../utils/common":41}],53:[function(e,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,i,r){(function(s){(function(a,o){if(!a.setImmediate){var l,c,h,u,d=1,p={},_=!1,g=a.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(a);m=m&&m.setTimeout?m:a,l={}.toString.call(a.process)==="[object process]"?function(S){process.nextTick(function(){v(S)})}:(function(){if(a.postMessage&&!a.importScripts){var S=!0,C=a.onmessage;return a.onmessage=function(){S=!1},a.postMessage("","*"),a.onmessage=C,S}})()?(u="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",y,!1):a.attachEvent("onmessage",y),function(S){a.postMessage(u+S,"*")}):a.MessageChannel?((h=new MessageChannel).port1.onmessage=function(S){v(S.data)},function(S){h.port2.postMessage(S)}):g&&"onreadystatechange"in g.createElement("script")?(c=g.documentElement,function(S){var C=g.createElement("script");C.onreadystatechange=function(){v(S),C.onreadystatechange=null,c.removeChild(C),C=null},c.appendChild(C)}):function(S){setTimeout(v,0,S)},m.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var C=new Array(arguments.length-1),R=0;R<C.length;R++)C[R]=arguments[R+1];var A={callback:S,args:C};return p[d]=A,l(d),d++},m.clearImmediate=f}function f(S){delete p[S]}function v(S){if(_)setTimeout(v,0,S);else{var C=p[S];if(C){_=!0;try{(function(R){var A=R.callback,N=R.args;switch(N.length){case 0:A();break;case 1:A(N[0]);break;case 2:A(N[0],N[1]);break;case 3:A(N[0],N[1],N[2]);break;default:A.apply(o,N)}})(C)}finally{f(S),_=!1}}}}function y(S){S.source===a&&typeof S.data=="string"&&S.data.indexOf(u)===0&&v(+S.data.slice(u.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Ws<"u"?Ws:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Po)),Po.exports}var kx=Ox();const Bx=wf(kx),{min:zx,max:Hx}=Math,Mi=(n,t=0,e=1)=>zx(Hx(t,n),e),xc=n=>{n._clipped=!1,n._unclipped=n.slice(0);for(let t=0;t<=3;t++)t<3?((n[t]<0||n[t]>255)&&(n._clipped=!0),n[t]=Mi(n[t],0,255)):t===3&&(n[t]=Mi(n[t],0,1));return n},Af={};for(let n of["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"])Af[`[object ${n}]`]=n.toLowerCase();function jt(n){return Af[Object.prototype.toString.call(n)]||"object"}const Xt=(n,t=null)=>n.length>=3?Array.prototype.slice.call(n):jt(n[0])=="object"&&t?t.split("").filter(e=>n[0][e]!==void 0).map(e=>n[0][e]):n[0].slice(0),Ar=n=>{if(n.length<2)return null;const t=n.length-1;return jt(n[t])=="string"?n[t].toLowerCase():null},{PI:Fa,min:Tf,max:Cf}=Math,tn=n=>Math.round(n*100)/100,Vl=n=>Math.round(n*100)/100,Fn=Fa*2,Lo=Fa/3,Vx=Fa/180,Gx=180/Fa;function Rf(n){return[...n.slice(0,3).reverse(),...n.slice(3)]}const Wt={format:{},autodetect:[]};let mt=class{constructor(...t){const e=this;if(jt(t[0])==="object"&&t[0].constructor&&t[0].constructor===this.constructor)return t[0];let i=Ar(t),r=!1;if(!i){r=!0,Wt.sorted||(Wt.autodetect=Wt.autodetect.sort((s,a)=>a.p-s.p),Wt.sorted=!0);for(let s of Wt.autodetect)if(i=s.test(...t),i)break}if(Wt.format[i]){const s=Wt.format[i].apply(null,r?t:t.slice(0,-1));e._rgb=xc(s)}else throw new Error("unknown format: "+t);e._rgb.length===3&&e._rgb.push(1)}toString(){return jt(this.hex)=="function"?this.hex():`[${this._rgb.join(",")}]`}};const Wx="3.1.2",Zt=(...n)=>new mt(...n);Zt.version=Wx;const gr={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Xx=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,$x=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Pf=n=>{if(n.match(Xx)){(n.length===4||n.length===7)&&(n=n.substr(1)),n.length===3&&(n=n.split(""),n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);const t=parseInt(n,16),e=t>>16,i=t>>8&255,r=t&255;return[e,i,r,1]}if(n.match($x)){(n.length===5||n.length===9)&&(n=n.substr(1)),n.length===4&&(n=n.split(""),n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]);const t=parseInt(n,16),e=t>>24&255,i=t>>16&255,r=t>>8&255,s=Math.round((t&255)/255*100)/100;return[e,i,r,s]}throw new Error(`unknown hex color: ${n}`)},{round:$s}=Math,Lf=(...n)=>{let[t,e,i,r]=Xt(n,"rgba"),s=Ar(n)||"auto";r===void 0&&(r=1),s==="auto"&&(s=r<1?"rgba":"rgb"),t=$s(t),e=$s(e),i=$s(i);let o="000000"+(t<<16|e<<8|i).toString(16);o=o.substr(o.length-6);let l="0"+$s(r*255).toString(16);switch(l=l.substr(l.length-2),s.toLowerCase()){case"rgba":return`#${o}${l}`;case"argb":return`#${l}${o}`;default:return`#${o}`}};mt.prototype.name=function(){const n=Lf(this._rgb,"rgb");for(let t of Object.keys(gr))if(gr[t]===n)return t.toLowerCase();return n};Wt.format.named=n=>{if(n=n.toLowerCase(),gr[n])return Pf(gr[n]);throw new Error("unknown color name: "+n)};Wt.autodetect.push({p:5,test:(n,...t)=>{if(!t.length&&jt(n)==="string"&&gr[n.toLowerCase()])return"named"}});mt.prototype.alpha=function(n,t=!1){return n!==void 0&&jt(n)==="number"?t?(this._rgb[3]=n,this):new mt([this._rgb[0],this._rgb[1],this._rgb[2],n],"rgb"):this._rgb[3]};mt.prototype.clipped=function(){return this._rgb._clipped||!1};const bn={Kn:18,labWhitePoint:"d65",Xn:.95047,Yn:1,Zn:1.08883,kE:216/24389,kKE:8,kK:24389/27,RefWhiteRGB:{X:.95047,Y:1,Z:1.08883},MtxRGB2XYZ:{m00:.4124564390896922,m01:.21267285140562253,m02:.0193338955823293,m10:.357576077643909,m11:.715152155287818,m12:.11919202588130297,m20:.18043748326639894,m21:.07217499330655958,m22:.9503040785363679},MtxXYZ2RGB:{m00:3.2404541621141045,m01:-.9692660305051868,m02:.055643430959114726,m10:-1.5371385127977166,m11:1.8760108454466942,m12:-.2040259135167538,m20:-.498531409556016,m21:.041556017530349834,m22:1.0572251882231791},As:.9414285350000001,Bs:1.040417467,Cs:1.089532651,MtxAdaptMa:{m00:.8951,m01:-.7502,m02:.0389,m10:.2664,m11:1.7135,m12:-.0685,m20:-.1614,m21:.0367,m22:1.0296},MtxAdaptMaI:{m00:.9869929054667123,m01:.43230526972339456,m02:-.008528664575177328,m10:-.14705425642099013,m11:.5183602715367776,m12:.04004282165408487,m20:.15996265166373125,m21:.0492912282128556,m22:.9684866957875502}},Yx=new Map([["a",[1.0985,.35585]],["b",[1.0985,.35585]],["c",[.98074,1.18232]],["d50",[.96422,.82521]],["d55",[.95682,.92149]],["d65",[.95047,1.08883]],["e",[1,1,1]],["f2",[.99186,.67393]],["f7",[.95041,1.08747]],["f11",[1.00962,.6435]],["icc",[.96422,.82521]]]);function Bn(n){const t=Yx.get(String(n).toLowerCase());if(!t)throw new Error("unknown Lab illuminant "+n);bn.labWhitePoint=n,bn.Xn=t[0],bn.Zn=t[1]}function Jr(){return bn.labWhitePoint}const bc=(...n)=>{n=Xt(n,"lab");const[t,e,i]=n,[r,s,a]=qx(t,e,i),[o,l,c]=Df(r,s,a);return[o,l,c,n.length>3?n[3]:1]},qx=(n,t,e)=>{const{kE:i,kK:r,kKE:s,Xn:a,Yn:o,Zn:l}=bn,c=(n+16)/116,h=.002*t+c,u=c-.005*e,d=h*h*h,p=u*u*u,_=d>i?d:(116*h-16)/r,g=n>s?Math.pow((n+16)/116,3):n/r,m=p>i?p:(116*u-16)/r,f=_*a,v=g*o,y=m*l;return[f,v,y]},Do=n=>{const t=Math.sign(n);return n=Math.abs(n),(n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055)*t},Df=(n,t,e)=>{const{MtxAdaptMa:i,MtxAdaptMaI:r,MtxXYZ2RGB:s,RefWhiteRGB:a,Xn:o,Yn:l,Zn:c}=bn,h=o*i.m00+l*i.m10+c*i.m20,u=o*i.m01+l*i.m11+c*i.m21,d=o*i.m02+l*i.m12+c*i.m22,p=a.X*i.m00+a.Y*i.m10+a.Z*i.m20,_=a.X*i.m01+a.Y*i.m11+a.Z*i.m21,g=a.X*i.m02+a.Y*i.m12+a.Z*i.m22,m=(n*i.m00+t*i.m10+e*i.m20)*(p/h),f=(n*i.m01+t*i.m11+e*i.m21)*(_/u),v=(n*i.m02+t*i.m12+e*i.m22)*(g/d),y=m*r.m00+f*r.m10+v*r.m20,S=m*r.m01+f*r.m11+v*r.m21,C=m*r.m02+f*r.m12+v*r.m22,R=Do(y*s.m00+S*s.m10+C*s.m20),A=Do(y*s.m01+S*s.m11+C*s.m21),N=Do(y*s.m02+S*s.m12+C*s.m22);return[R*255,A*255,N*255]},yc=(...n)=>{const[t,e,i,...r]=Xt(n,"rgb"),[s,a,o]=If(t,e,i),[l,c,h]=jx(s,a,o);return[l,c,h,...r.length>0&&r[0]<1?[r[0]]:[]]};function jx(n,t,e){const{Xn:i,Yn:r,Zn:s,kE:a,kK:o}=bn,l=n/i,c=t/r,h=e/s,u=l>a?Math.pow(l,1/3):(o*l+16)/116,d=c>a?Math.pow(c,1/3):(o*c+16)/116,p=h>a?Math.pow(h,1/3):(o*h+16)/116;return[116*d-16,500*(u-d),200*(d-p)]}function Io(n){const t=Math.sign(n);return n=Math.abs(n),(n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4))*t}const If=(n,t,e)=>{n=Io(n/255),t=Io(t/255),e=Io(e/255);const{MtxRGB2XYZ:i,MtxAdaptMa:r,MtxAdaptMaI:s,Xn:a,Yn:o,Zn:l,As:c,Bs:h,Cs:u}=bn;let d=n*i.m00+t*i.m10+e*i.m20,p=n*i.m01+t*i.m11+e*i.m21,_=n*i.m02+t*i.m12+e*i.m22;const g=a*r.m00+o*r.m10+l*r.m20,m=a*r.m01+o*r.m11+l*r.m21,f=a*r.m02+o*r.m12+l*r.m22;let v=d*r.m00+p*r.m10+_*r.m20,y=d*r.m01+p*r.m11+_*r.m21,S=d*r.m02+p*r.m12+_*r.m22;return v*=g/c,y*=m/h,S*=f/u,d=v*s.m00+y*s.m10+S*s.m20,p=v*s.m01+y*s.m11+S*s.m21,_=v*s.m02+y*s.m12+S*s.m22,[d,p,_]};mt.prototype.lab=function(){return yc(this._rgb)};const Zx=(...n)=>new mt(...n,"lab");Object.assign(Zt,{lab:Zx,getLabWhitePoint:Jr,setLabWhitePoint:Bn});Wt.format.lab=bc;Wt.autodetect.push({p:2,test:(...n)=>{if(n=Xt(n,"lab"),jt(n)==="array"&&n.length===3)return"lab"}});mt.prototype.darken=function(n=1){const t=this,e=t.lab();return e[0]-=bn.Kn*n,new mt(e,"lab").alpha(t.alpha(),!0)};mt.prototype.brighten=function(n=1){return this.darken(-n)};mt.prototype.darker=mt.prototype.darken;mt.prototype.brighter=mt.prototype.brighten;mt.prototype.get=function(n){const[t,e]=n.split("."),i=this[t]();if(e){const r=t.indexOf(e)-(t.substr(0,2)==="ok"?2:0);if(r>-1)return i[r];throw new Error(`unknown channel ${e} in mode ${t}`)}else return i};const{pow:Kx}=Math,Jx=1e-7,Qx=20;mt.prototype.luminance=function(n,t="rgb"){if(n!==void 0&&jt(n)==="number"){if(n===0)return new mt([0,0,0,this._rgb[3]],"rgb");if(n===1)return new mt([255,255,255,this._rgb[3]],"rgb");let e=this.luminance(),i=Qx;const r=(a,o)=>{const l=a.interpolate(o,.5,t),c=l.luminance();return Math.abs(n-c)<Jx||!i--?l:c>n?r(a,l):r(l,o)},s=(e>n?r(new mt([0,0,0]),this):r(this,new mt([255,255,255]))).rgb();return new mt([...s,this._rgb[3]])}return tb(...this._rgb.slice(0,3))};const tb=(n,t,e)=>(n=No(n),t=No(t),e=No(e),.2126*n+.7152*t+.0722*e),No=n=>(n/=255,n<=.03928?n/12.92:Kx((n+.055)/1.055,2.4)),Re={},_r=(n,t,e=.5,...i)=>{let r=i[0]||"lrgb";if(!Re[r]&&!i.length&&(r=Object.keys(Re)[0]),!Re[r])throw new Error(`interpolation mode ${r} is not defined`);return jt(n)!=="object"&&(n=new mt(n)),jt(t)!=="object"&&(t=new mt(t)),Re[r](n,t,e).alpha(n.alpha()+e*(t.alpha()-n.alpha()))};mt.prototype.mix=mt.prototype.interpolate=function(n,t=.5,...e){return _r(this,n,t,...e)};mt.prototype.premultiply=function(n=!1){const t=this._rgb,e=t[3];return n?(this._rgb=[t[0]*e,t[1]*e,t[2]*e,e],this):new mt([t[0]*e,t[1]*e,t[2]*e,e],"rgb")};const{sin:eb,cos:nb}=Math,Nf=(...n)=>{let[t,e,i]=Xt(n,"lch");return isNaN(i)&&(i=0),i=i*Vx,[t,nb(i)*e,eb(i)*e]},Sc=(...n)=>{n=Xt(n,"lch");const[t,e,i]=n,[r,s,a]=Nf(t,e,i),[o,l,c]=bc(r,s,a);return[o,l,c,n.length>3?n[3]:1]},ib=(...n)=>{const t=Rf(Xt(n,"hcl"));return Sc(...t)},{sqrt:rb,atan2:sb,round:ab}=Math,Uf=(...n)=>{const[t,e,i]=Xt(n,"lab"),r=rb(e*e+i*i);let s=(sb(i,e)*Gx+360)%360;return ab(r*1e4)===0&&(s=Number.NaN),[t,r,s]},Ec=(...n)=>{const[t,e,i,...r]=Xt(n,"rgb"),[s,a,o]=yc(t,e,i),[l,c,h]=Uf(s,a,o);return[l,c,h,...r.length>0&&r[0]<1?[r[0]]:[]]};mt.prototype.lch=function(){return Ec(this._rgb)};mt.prototype.hcl=function(){return Rf(Ec(this._rgb))};const ob=(...n)=>new mt(...n,"lch"),lb=(...n)=>new mt(...n,"hcl");Object.assign(Zt,{lch:ob,hcl:lb});Wt.format.lch=Sc;Wt.format.hcl=ib;["lch","hcl"].forEach(n=>Wt.autodetect.push({p:2,test:(...t)=>{if(t=Xt(t,n),jt(t)==="array"&&t.length===3)return n}}));mt.prototype.saturate=function(n=1){const t=this,e=t.lch();return e[1]+=bn.Kn*n,e[1]<0&&(e[1]=0),new mt(e,"lch").alpha(t.alpha(),!0)};mt.prototype.desaturate=function(n=1){return this.saturate(-n)};mt.prototype.set=function(n,t,e=!1){const[i,r]=n.split("."),s=this[i]();if(r){const a=i.indexOf(r)-(i.substr(0,2)==="ok"?2:0);if(a>-1){if(jt(t)=="string")switch(t.charAt(0)){case"+":s[a]+=+t;break;case"-":s[a]+=+t;break;case"*":s[a]*=+t.substr(1);break;case"/":s[a]/=+t.substr(1);break;default:s[a]=+t}else if(jt(t)==="number")s[a]=t;else throw new Error("unsupported value for Color.set");const o=new mt(s,i);return e?(this._rgb=o._rgb,this):o}throw new Error(`unknown channel ${r} in mode ${i}`)}else return s};mt.prototype.tint=function(n=.5,...t){return _r(this,"white",n,...t)};mt.prototype.shade=function(n=.5,...t){return _r(this,"black",n,...t)};const cb=(n,t,e)=>{const i=n._rgb,r=t._rgb;return new mt(i[0]+e*(r[0]-i[0]),i[1]+e*(r[1]-i[1]),i[2]+e*(r[2]-i[2]),"rgb")};Re.rgb=cb;const{sqrt:Uo,pow:Ki}=Math,hb=(n,t,e)=>{const[i,r,s]=n._rgb,[a,o,l]=t._rgb;return new mt(Uo(Ki(i,2)*(1-e)+Ki(a,2)*e),Uo(Ki(r,2)*(1-e)+Ki(o,2)*e),Uo(Ki(s,2)*(1-e)+Ki(l,2)*e),"rgb")};Re.lrgb=hb;const ub=(n,t,e)=>{const i=n.lab(),r=t.lab();return new mt(i[0]+e*(r[0]-i[0]),i[1]+e*(r[1]-i[1]),i[2]+e*(r[2]-i[2]),"lab")};Re.lab=ub;const Tr=(n,t,e,i)=>{let r,s;i==="hsl"?(r=n.hsl(),s=t.hsl()):i==="hsv"?(r=n.hsv(),s=t.hsv()):i==="hcg"?(r=n.hcg(),s=t.hcg()):i==="hsi"?(r=n.hsi(),s=t.hsi()):i==="lch"||i==="hcl"?(i="hcl",r=n.hcl(),s=t.hcl()):i==="oklch"&&(r=n.oklch().reverse(),s=t.oklch().reverse());let a,o,l,c,h,u;(i.substr(0,1)==="h"||i==="oklch")&&([a,l,h]=r,[o,c,u]=s);let d,p,_,g;return!isNaN(a)&&!isNaN(o)?(o>a&&o-a>180?g=o-(a+360):o<a&&a-o>180?g=o+360-a:g=o-a,p=a+e*g):isNaN(a)?isNaN(o)?p=Number.NaN:(p=o,(h==1||h==0)&&i!="hsv"&&(d=c)):(p=a,(u==1||u==0)&&i!="hsv"&&(d=l)),d===void 0&&(d=l+e*(c-l)),_=h+e*(u-h),i==="oklch"?new mt([_,d,p],i):new mt([p,d,_],i)},Ff=(n,t,e)=>Tr(n,t,e,"lch");Re.lch=Ff;Re.hcl=Ff;const fb=n=>{if(jt(n)=="number"&&n>=0&&n<=16777215){const t=n>>16,e=n>>8&255,i=n&255;return[t,e,i,1]}throw new Error("unknown num color: "+n)},db=(...n)=>{const[t,e,i]=Xt(n,"rgb");return(t<<16)+(e<<8)+i};mt.prototype.num=function(){return db(this._rgb)};const pb=(...n)=>new mt(...n,"num");Object.assign(Zt,{num:pb});Wt.format.num=fb;Wt.autodetect.push({p:5,test:(...n)=>{if(n.length===1&&jt(n[0])==="number"&&n[0]>=0&&n[0]<=16777215)return"num"}});const mb=(n,t,e)=>{const i=n.num(),r=t.num();return new mt(i+e*(r-i),"num")};Re.num=mb;const{floor:gb}=Math,_b=(...n)=>{n=Xt(n,"hcg");let[t,e,i]=n,r,s,a;i=i*255;const o=e*255;if(e===0)r=s=a=i;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;const l=gb(t),c=t-l,h=i*(1-e),u=h+o*(1-c),d=h+o*c,p=h+o;switch(l){case 0:[r,s,a]=[p,d,h];break;case 1:[r,s,a]=[u,p,h];break;case 2:[r,s,a]=[h,p,d];break;case 3:[r,s,a]=[h,u,p];break;case 4:[r,s,a]=[d,h,p];break;case 5:[r,s,a]=[p,h,u];break}}return[r,s,a,n.length>3?n[3]:1]},vb=(...n)=>{const[t,e,i]=Xt(n,"rgb"),r=Tf(t,e,i),s=Cf(t,e,i),a=s-r,o=a*100/255,l=r/(255-a)*100;let c;return a===0?c=Number.NaN:(t===s&&(c=(e-i)/a),e===s&&(c=2+(i-t)/a),i===s&&(c=4+(t-e)/a),c*=60,c<0&&(c+=360)),[c,o,l]};mt.prototype.hcg=function(){return vb(this._rgb)};const xb=(...n)=>new mt(...n,"hcg");Zt.hcg=xb;Wt.format.hcg=_b;Wt.autodetect.push({p:1,test:(...n)=>{if(n=Xt(n,"hcg"),jt(n)==="array"&&n.length===3)return"hcg"}});const bb=(n,t,e)=>Tr(n,t,e,"hcg");Re.hcg=bb;const{cos:Ji}=Math,yb=(...n)=>{n=Xt(n,"hsi");let[t,e,i]=n,r,s,a;return isNaN(t)&&(t=0),isNaN(e)&&(e=0),t>360&&(t-=360),t<0&&(t+=360),t/=360,t<1/3?(a=(1-e)/3,r=(1+e*Ji(Fn*t)/Ji(Lo-Fn*t))/3,s=1-(a+r)):t<2/3?(t-=1/3,r=(1-e)/3,s=(1+e*Ji(Fn*t)/Ji(Lo-Fn*t))/3,a=1-(r+s)):(t-=2/3,s=(1-e)/3,a=(1+e*Ji(Fn*t)/Ji(Lo-Fn*t))/3,r=1-(s+a)),r=Mi(i*r*3),s=Mi(i*s*3),a=Mi(i*a*3),[r*255,s*255,a*255,n.length>3?n[3]:1]},{min:Sb,sqrt:Eb,acos:Mb}=Math,wb=(...n)=>{let[t,e,i]=Xt(n,"rgb");t/=255,e/=255,i/=255;let r;const s=Sb(t,e,i),a=(t+e+i)/3,o=a>0?1-s/a:0;return o===0?r=NaN:(r=(t-e+(t-i))/2,r/=Eb((t-e)*(t-e)+(t-i)*(e-i)),r=Mb(r),i>e&&(r=Fn-r),r/=Fn),[r*360,o,a]};mt.prototype.hsi=function(){return wb(this._rgb)};const Ab=(...n)=>new mt(...n,"hsi");Zt.hsi=Ab;Wt.format.hsi=yb;Wt.autodetect.push({p:2,test:(...n)=>{if(n=Xt(n,"hsi"),jt(n)==="array"&&n.length===3)return"hsi"}});const Tb=(n,t,e)=>Tr(n,t,e,"hsi");Re.hsi=Tb;const Gl=(...n)=>{n=Xt(n,"hsl");const[t,e,i]=n;let r,s,a;if(e===0)r=s=a=i*255;else{const o=[0,0,0],l=[0,0,0],c=i<.5?i*(1+e):i+e-i*e,h=2*i-c,u=t/360;o[0]=u+1/3,o[1]=u,o[2]=u-1/3;for(let d=0;d<3;d++)o[d]<0&&(o[d]+=1),o[d]>1&&(o[d]-=1),6*o[d]<1?l[d]=h+(c-h)*6*o[d]:2*o[d]<1?l[d]=c:3*o[d]<2?l[d]=h+(c-h)*(2/3-o[d])*6:l[d]=h;[r,s,a]=[l[0]*255,l[1]*255,l[2]*255]}return n.length>3?[r,s,a,n[3]]:[r,s,a,1]},Of=(...n)=>{n=Xt(n,"rgba");let[t,e,i]=n;t/=255,e/=255,i/=255;const r=Tf(t,e,i),s=Cf(t,e,i),a=(s+r)/2;let o,l;return s===r?(o=0,l=Number.NaN):o=a<.5?(s-r)/(s+r):(s-r)/(2-s-r),t==s?l=(e-i)/(s-r):e==s?l=2+(i-t)/(s-r):i==s&&(l=4+(t-e)/(s-r)),l*=60,l<0&&(l+=360),n.length>3&&n[3]!==void 0?[l,o,a,n[3]]:[l,o,a]};mt.prototype.hsl=function(){return Of(this._rgb)};const Cb=(...n)=>new mt(...n,"hsl");Zt.hsl=Cb;Wt.format.hsl=Gl;Wt.autodetect.push({p:2,test:(...n)=>{if(n=Xt(n,"hsl"),jt(n)==="array"&&n.length===3)return"hsl"}});const Rb=(n,t,e)=>Tr(n,t,e,"hsl");Re.hsl=Rb;const{floor:Pb}=Math,Lb=(...n)=>{n=Xt(n,"hsv");let[t,e,i]=n,r,s,a;if(i*=255,e===0)r=s=a=i;else{t===360&&(t=0),t>360&&(t-=360),t<0&&(t+=360),t/=60;const o=Pb(t),l=t-o,c=i*(1-e),h=i*(1-e*l),u=i*(1-e*(1-l));switch(o){case 0:[r,s,a]=[i,u,c];break;case 1:[r,s,a]=[h,i,c];break;case 2:[r,s,a]=[c,i,u];break;case 3:[r,s,a]=[c,h,i];break;case 4:[r,s,a]=[u,c,i];break;case 5:[r,s,a]=[i,c,h];break}}return[r,s,a,n.length>3?n[3]:1]},{min:Db,max:Ib}=Math,Nb=(...n)=>{n=Xt(n,"rgb");let[t,e,i]=n;const r=Db(t,e,i),s=Ib(t,e,i),a=s-r;let o,l,c;return c=s/255,s===0?(o=Number.NaN,l=0):(l=a/s,t===s&&(o=(e-i)/a),e===s&&(o=2+(i-t)/a),i===s&&(o=4+(t-e)/a),o*=60,o<0&&(o+=360)),[o,l,c]};mt.prototype.hsv=function(){return Nb(this._rgb)};const Ub=(...n)=>new mt(...n,"hsv");Zt.hsv=Ub;Wt.format.hsv=Lb;Wt.autodetect.push({p:2,test:(...n)=>{if(n=Xt(n,"hsv"),jt(n)==="array"&&n.length===3)return"hsv"}});const Fb=(n,t,e)=>Tr(n,t,e,"hsv");Re.hsv=Fb;function _a(n,t){let e=n.length;Array.isArray(n[0])||(n=[n]),Array.isArray(t[0])||(t=t.map(a=>[a]));let i=t[0].length,r=t[0].map((a,o)=>t.map(l=>l[o])),s=n.map(a=>r.map(o=>Array.isArray(a)?a.reduce((l,c,h)=>l+c*(o[h]||0),0):o.reduce((l,c)=>l+c*a,0)));return e===1&&(s=s[0]),i===1?s.map(a=>a[0]):s}const Mc=(...n)=>{n=Xt(n,"lab");const[t,e,i,...r]=n,[s,a,o]=Ob([t,e,i]),[l,c,h]=Df(s,a,o);return[l,c,h,...r.length>0&&r[0]<1?[r[0]]:[]]};function Ob(n){var t=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],e=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],i=_a(e,n);return _a(t,i.map(r=>r**3))}const wc=(...n)=>{const[t,e,i,...r]=Xt(n,"rgb"),s=If(t,e,i);return[...kb(s),...r.length>0&&r[0]<1?[r[0]]:[]]};function kb(n){const t=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],e=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],i=_a(t,n);return _a(e,i.map(r=>Math.cbrt(r)))}mt.prototype.oklab=function(){return wc(this._rgb)};const Bb=(...n)=>new mt(...n,"oklab");Object.assign(Zt,{oklab:Bb});Wt.format.oklab=Mc;Wt.autodetect.push({p:2,test:(...n)=>{if(n=Xt(n,"oklab"),jt(n)==="array"&&n.length===3)return"oklab"}});const zb=(n,t,e)=>{const i=n.oklab(),r=t.oklab();return new mt(i[0]+e*(r[0]-i[0]),i[1]+e*(r[1]-i[1]),i[2]+e*(r[2]-i[2]),"oklab")};Re.oklab=zb;const Hb=(n,t,e)=>Tr(n,t,e,"oklch");Re.oklch=Hb;const{pow:Fo,sqrt:Oo,PI:ko,cos:Jh,sin:Qh,atan2:Vb}=Math,Gb=(n,t="lrgb",e=null)=>{const i=n.length;e||(e=Array.from(new Array(i)).map(()=>1));const r=i/e.reduce(function(u,d){return u+d});if(e.forEach((u,d)=>{e[d]*=r}),n=n.map(u=>new mt(u)),t==="lrgb")return Wb(n,e);const s=n.shift(),a=s.get(t),o=[];let l=0,c=0;for(let u=0;u<a.length;u++)if(a[u]=(a[u]||0)*e[0],o.push(isNaN(a[u])?0:e[0]),t.charAt(u)==="h"&&!isNaN(a[u])){const d=a[u]/180*ko;l+=Jh(d)*e[0],c+=Qh(d)*e[0]}let h=s.alpha()*e[0];n.forEach((u,d)=>{const p=u.get(t);h+=u.alpha()*e[d+1];for(let _=0;_<a.length;_++)if(!isNaN(p[_]))if(o[_]+=e[d+1],t.charAt(_)==="h"){const g=p[_]/180*ko;l+=Jh(g)*e[d+1],c+=Qh(g)*e[d+1]}else a[_]+=p[_]*e[d+1]});for(let u=0;u<a.length;u++)if(t.charAt(u)==="h"){let d=Vb(c/o[u],l/o[u])/ko*180;for(;d<0;)d+=360;for(;d>=360;)d-=360;a[u]=d}else a[u]=a[u]/o[u];return h/=i,new mt(a,t).alpha(h>.99999?1:h,!0)},Wb=(n,t)=>{const e=n.length,i=[0,0,0,0];for(let r=0;r<n.length;r++){const s=n[r],a=t[r]/e,o=s._rgb;i[0]+=Fo(o[0],2)*a,i[1]+=Fo(o[1],2)*a,i[2]+=Fo(o[2],2)*a,i[3]+=o[3]*a}return i[0]=Oo(i[0]),i[1]=Oo(i[1]),i[2]=Oo(i[2]),i[3]>.9999999&&(i[3]=1),new mt(xc(i))},{pow:Xb}=Math;function va(n){let t="rgb",e=Zt("#ccc"),i=0,r=[0,1],s=[],a=[0,0],o=!1,l=[],c=!1,h=0,u=1,d=!1,p={},_=!0,g=1;const m=function(A){if(A=A||["#fff","#000"],A&&jt(A)==="string"&&Zt.brewer&&Zt.brewer[A.toLowerCase()]&&(A=Zt.brewer[A.toLowerCase()]),jt(A)==="array"){A.length===1&&(A=[A[0],A[0]]),A=A.slice(0);for(let N=0;N<A.length;N++)A[N]=Zt(A[N]);s.length=0;for(let N=0;N<A.length;N++)s.push(N/(A.length-1))}return C(),l=A},f=function(A){if(o!=null){const N=o.length-1;let E=0;for(;E<N&&A>=o[E];)E++;return E-1}return 0};let v=A=>A,y=A=>A;const S=function(A,N){let E,w;if(N==null&&(N=!1),isNaN(A)||A===null)return e;N?w=A:o&&o.length>2?w=f(A)/(o.length-2):u!==h?w=(A-h)/(u-h):w=1,w=y(w),N||(w=v(w)),g!==1&&(w=Xb(w,g)),w=a[0]+w*(1-a[0]-a[1]),w=Mi(w,0,1);const I=Math.floor(w*1e4);if(_&&p[I])E=p[I];else{if(jt(l)==="array")for(let T=0;T<s.length;T++){const F=s[T];if(w<=F){E=l[T];break}if(w>=F&&T===s.length-1){E=l[T];break}if(w>F&&w<s[T+1]){w=(w-F)/(s[T+1]-F),E=Zt.interpolate(l[T],l[T+1],w,t);break}}else jt(l)==="function"&&(E=l(w));_&&(p[I]=E)}return E};var C=()=>p={};m(n);const R=function(A){const N=Zt(S(A));return c&&N[c]?N[c]():N};return R.classes=function(A){if(A!=null){if(jt(A)==="array")o=A,r=[A[0],A[A.length-1]];else{const N=Zt.analyze(r);A===0?o=[N.min,N.max]:o=Zt.limits(N,"e",A)}return R}return o},R.domain=function(A){if(!arguments.length)return r;h=A[0],u=A[A.length-1],s=[];const N=l.length;if(A.length===N&&h!==u)for(let E of Array.from(A))s.push((E-h)/(u-h));else{for(let E=0;E<N;E++)s.push(E/(N-1));if(A.length>2){const E=A.map((I,T)=>T/(A.length-1)),w=A.map(I=>(I-h)/(u-h));w.every((I,T)=>E[T]===I)||(y=I=>{if(I<=0||I>=1)return I;let T=0;for(;I>=w[T+1];)T++;const F=(I-w[T])/(w[T+1]-w[T]);return E[T]+F*(E[T+1]-E[T])})}}return r=[h,u],R},R.mode=function(A){return arguments.length?(t=A,C(),R):t},R.range=function(A,N){return m(A),R},R.out=function(A){return c=A,R},R.spread=function(A){return arguments.length?(i=A,R):i},R.correctLightness=function(A){return A==null&&(A=!0),d=A,C(),d?v=function(N){const E=S(0,!0).lab()[0],w=S(1,!0).lab()[0],I=E>w;let T=S(N,!0).lab()[0];const F=E+(w-E)*N;let x=T-F,z=0,J=1,G=20;for(;Math.abs(x)>.01&&G-- >0;)(function(){return I&&(x*=-1),x<0?(z=N,N+=(J-N)*.5):(J=N,N+=(z-N)*.5),T=S(N,!0).lab()[0],x=T-F})();return N}:v=N=>N,R},R.padding=function(A){return A!=null?(jt(A)==="number"&&(A=[A,A]),a=A,R):a},R.colors=function(A,N){arguments.length<2&&(N="hex");let E=[];if(arguments.length===0)E=l.slice(0);else if(A===1)E=[R(.5)];else if(A>1){const w=r[0],I=r[1]-w;E=$b(0,A).map(T=>R(w+T/(A-1)*I))}else{n=[];let w=[];if(o&&o.length>2)for(let I=1,T=o.length,F=1<=T;F?I<T:I>T;F?I++:I--)w.push((o[I-1]+o[I])*.5);else w=r;E=w.map(I=>R(I))}return Zt[N]&&(E=E.map(w=>w[N]())),E},R.cache=function(A){return A!=null?(_=A,R):_},R.gamma=function(A){return A!=null?(g=A,R):g},R.nodata=function(A){return A!=null?(e=Zt(A),R):e},R}function $b(n,t,e){let i=[],r=n<t,s=t;for(let a=n;r?a<s:a>s;r?a++:a--)i.push(a);return i}const Yb=function(n){let t=[1,1];for(let e=1;e<n;e++){let i=[1];for(let r=1;r<=t.length;r++)i[r]=(t[r]||0)+t[r-1];t=i}return t},qb=function(n){let t,e,i,r;if(n=n.map(s=>new mt(s)),n.length===2)[e,i]=n.map(s=>s.lab()),t=function(s){const a=[0,1,2].map(o=>e[o]+s*(i[o]-e[o]));return new mt(a,"lab")};else if(n.length===3)[e,i,r]=n.map(s=>s.lab()),t=function(s){const a=[0,1,2].map(o=>(1-s)*(1-s)*e[o]+2*(1-s)*s*i[o]+s*s*r[o]);return new mt(a,"lab")};else if(n.length===4){let s;[e,i,r,s]=n.map(a=>a.lab()),t=function(a){const o=[0,1,2].map(l=>(1-a)*(1-a)*(1-a)*e[l]+3*(1-a)*(1-a)*a*i[l]+3*(1-a)*a*a*r[l]+a*a*a*s[l]);return new mt(o,"lab")}}else if(n.length>=5){let s,a,o;s=n.map(l=>l.lab()),o=n.length-1,a=Yb(o),t=function(l){const c=1-l,h=[0,1,2].map(u=>s.reduce((d,p,_)=>d+a[_]*c**(o-_)*l**_*p[u],0));return new mt(h,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return t},jb=n=>{const t=qb(n);return t.scale=()=>va(t),t},{round:kf}=Math;mt.prototype.rgb=function(n=!0){return n===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(kf)};mt.prototype.rgba=function(n=!0){return this._rgb.slice(0,4).map((t,e)=>e<3?n===!1?t:kf(t):t)};const Zb=(...n)=>new mt(...n,"rgb");Object.assign(Zt,{rgb:Zb});Wt.format.rgb=(...n)=>{const t=Xt(n,"rgba");return t[3]===void 0&&(t[3]=1),t};Wt.autodetect.push({p:3,test:(...n)=>{if(n=Xt(n,"rgba"),jt(n)==="array"&&(n.length===3||n.length===4&&jt(n[3])=="number"&&n[3]>=0&&n[3]<=1))return"rgb"}});const hn=(n,t,e)=>{if(!hn[e])throw new Error("unknown blend mode "+e);return hn[e](n,t)},li=n=>(t,e)=>{const i=Zt(e).rgb(),r=Zt(t).rgb();return Zt.rgb(n(i,r))},ci=n=>(t,e)=>{const i=[];return i[0]=n(t[0],e[0]),i[1]=n(t[1],e[1]),i[2]=n(t[2],e[2]),i},Kb=n=>n,Jb=(n,t)=>n*t/255,Qb=(n,t)=>n>t?t:n,ty=(n,t)=>n>t?n:t,ey=(n,t)=>255*(1-(1-n/255)*(1-t/255)),ny=(n,t)=>t<128?2*n*t/255:255*(1-2*(1-n/255)*(1-t/255)),iy=(n,t)=>255*(1-(1-t/255)/(n/255)),ry=(n,t)=>n===255?255:(n=255*(t/255)/(1-n/255),n>255?255:n);hn.normal=li(ci(Kb));hn.multiply=li(ci(Jb));hn.screen=li(ci(ey));hn.overlay=li(ci(ny));hn.darken=li(ci(Qb));hn.lighten=li(ci(ty));hn.dodge=li(ci(ry));hn.burn=li(ci(iy));const{pow:sy,sin:ay,cos:oy}=Math;function ly(n=300,t=-1.5,e=1,i=1,r=[0,1]){let s=0,a;jt(r)==="array"?a=r[1]-r[0]:(a=0,r=[r,r]);const o=function(l){const c=Fn*((n+120)/360+t*l),h=sy(r[0]+a*l,i),d=(s!==0?e[0]+l*s:e)*h*(1-h)/2,p=oy(c),_=ay(c),g=h+d*(-.14861*p+1.78277*_),m=h+d*(-.29227*p-.90649*_),f=h+d*(1.97294*p);return Zt(xc([g*255,m*255,f*255,1]))};return o.start=function(l){return l==null?n:(n=l,o)},o.rotations=function(l){return l==null?t:(t=l,o)},o.gamma=function(l){return l==null?i:(i=l,o)},o.hue=function(l){return l==null?e:(e=l,jt(e)==="array"?(s=e[1]-e[0],s===0&&(e=e[1])):s=0,o)},o.lightness=function(l){return l==null?r:(jt(l)==="array"?(r=l,a=l[1]-l[0]):(r=[l,l],a=0),o)},o.scale=()=>Zt.scale(o),o.hue(e),o}const cy="0123456789abcdef",{floor:hy,random:uy}=Math,fy=()=>{let n="#";for(let t=0;t<6;t++)n+=cy.charAt(hy(uy()*16));return new mt(n,"hex")},{log:tu,pow:dy,floor:py,abs:my}=Math;function Bf(n,t=null){const e={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return jt(n)==="object"&&(n=Object.values(n)),n.forEach(i=>{t&&jt(i)==="object"&&(i=i[t]),i!=null&&!isNaN(i)&&(e.values.push(i),e.sum+=i,i<e.min&&(e.min=i),i>e.max&&(e.max=i),e.count+=1)}),e.domain=[e.min,e.max],e.limits=(i,r)=>zf(e,i,r),e}function zf(n,t="equal",e=7){jt(n)=="array"&&(n=Bf(n));const{min:i,max:r}=n,s=n.values.sort((o,l)=>o-l);if(e===1)return[i,r];const a=[];if(t.substr(0,1)==="c"&&(a.push(i),a.push(r)),t.substr(0,1)==="e"){a.push(i);for(let o=1;o<e;o++)a.push(i+o/e*(r-i));a.push(r)}else if(t.substr(0,1)==="l"){if(i<=0)throw new Error("Logarithmic scales are only possible for values > 0");const o=Math.LOG10E*tu(i),l=Math.LOG10E*tu(r);a.push(i);for(let c=1;c<e;c++)a.push(dy(10,o+c/e*(l-o)));a.push(r)}else if(t.substr(0,1)==="q"){a.push(i);for(let o=1;o<e;o++){const l=(s.length-1)*o/e,c=py(l);if(c===l)a.push(s[c]);else{const h=l-c;a.push(s[c]*(1-h)+s[c+1]*h)}}a.push(r)}else if(t.substr(0,1)==="k"){let o;const l=s.length,c=new Array(l),h=new Array(e);let u=!0,d=0,p=null;p=[],p.push(i);for(let m=1;m<e;m++)p.push(i+m/e*(r-i));for(p.push(r);u;){for(let f=0;f<e;f++)h[f]=0;for(let f=0;f<l;f++){const v=s[f];let y=Number.MAX_VALUE,S;for(let C=0;C<e;C++){const R=my(p[C]-v);R<y&&(y=R,S=C),h[S]++,c[f]=S}}const m=new Array(e);for(let f=0;f<e;f++)m[f]=null;for(let f=0;f<l;f++)o=c[f],m[o]===null?m[o]=s[f]:m[o]+=s[f];for(let f=0;f<e;f++)m[f]*=1/h[f];u=!1;for(let f=0;f<e;f++)if(m[f]!==p[f]){u=!0;break}p=m,d++,d>200&&(u=!1)}const _={};for(let m=0;m<e;m++)_[m]=[];for(let m=0;m<l;m++)o=c[m],_[o].push(s[m]);let g=[];for(let m=0;m<e;m++)g.push(_[m][0]),g.push(_[m][_[m].length-1]);g=g.sort((m,f)=>m-f),a.push(g[0]);for(let m=1;m<g.length;m+=2){const f=g[m];!isNaN(f)&&a.indexOf(f)===-1&&a.push(f)}}return a}const gy=(n,t)=>{n=new mt(n),t=new mt(t);const e=n.luminance(),i=t.luminance();return e>i?(e+.05)/(i+.05):(i+.05)/(e+.05)};/**
 * @license
 *
 * The APCA contrast prediction algorithm is based of the formulas published
 * in the APCA-1.0.98G specification by Myndex. The specification is available at:
 * https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAw3_0.1.17_APCA0.0.98G.svg
 *
 * Note that the APCA implementation is still beta, so please update to
 * future versions of chroma.js when they become available.
 *
 * You can read more about the APCA Readability Criterion at
 * https://readtech.org/ARC/
 */const eu=.027,_y=5e-4,vy=.1,nu=1.14,Ys=.022,iu=1.414,xy=(n,t)=>{n=new mt(n),t=new mt(t),n.alpha()<1&&(n=_r(t,n,n.alpha(),"rgb"));const e=ru(...n.rgb()),i=ru(...t.rgb()),r=e>=Ys?e:e+Math.pow(Ys-e,iu),s=i>=Ys?i:i+Math.pow(Ys-i,iu),a=Math.pow(s,.56)-Math.pow(r,.57),o=Math.pow(s,.65)-Math.pow(r,.62),l=Math.abs(s-r)<_y?0:r<s?a*nu:o*nu;return(Math.abs(l)<vy?0:l>0?l-eu:l+eu)*100};function ru(n,t,e){return .2126729*Math.pow(n/255,2.4)+.7151522*Math.pow(t/255,2.4)+.072175*Math.pow(e/255,2.4)}const{sqrt:In,pow:me,min:by,max:yy,atan2:su,abs:au,cos:qs,sin:ou,exp:Sy,PI:lu}=Math;function Ey(n,t,e=1,i=1,r=1){var s=function(yt){return 360*yt/(2*lu)},a=function(yt){return 2*lu*yt/360};n=new mt(n),t=new mt(t);const[o,l,c]=Array.from(n.lab()),[h,u,d]=Array.from(t.lab()),p=(o+h)/2,_=In(me(l,2)+me(c,2)),g=In(me(u,2)+me(d,2)),m=(_+g)/2,f=.5*(1-In(me(m,7)/(me(m,7)+me(25,7)))),v=l*(1+f),y=u*(1+f),S=In(me(v,2)+me(c,2)),C=In(me(y,2)+me(d,2)),R=(S+C)/2,A=s(su(c,v)),N=s(su(d,y)),E=A>=0?A:A+360,w=N>=0?N:N+360,I=au(E-w)>180?(E+w+360)/2:(E+w)/2,T=1-.17*qs(a(I-30))+.24*qs(a(2*I))+.32*qs(a(3*I+6))-.2*qs(a(4*I-63));let F=w-E;F=au(F)<=180?F:w<=E?F+360:F-360,F=2*In(S*C)*ou(a(F)/2);const x=h-o,z=C-S,J=1+.015*me(p-50,2)/In(20+me(p-50,2)),G=1+.045*R,Y=1+.015*R*T,$=30*Sy(-me((I-275)/25,2)),V=-(2*In(me(R,7)/(me(R,7)+me(25,7))))*ou(2*a($)),W=In(me(x/(e*J),2)+me(z/(i*G),2)+me(F/(r*Y),2)+V*(z/(i*G))*(F/(r*Y)));return yy(0,by(100,W))}function My(n,t,e="lab"){n=new mt(n),t=new mt(t);const i=n.get(e),r=t.get(e);let s=0;for(let a in i){const o=(i[a]||0)-(r[a]||0);s+=o*o}return Math.sqrt(s)}const wy=(...n)=>{try{return new mt(...n),!0}catch{return!1}},Ay={cool(){return va([Zt.hsl(180,1,.9),Zt.hsl(250,.7,.4)])},hot(){return va(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Wl={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},Hf=Object.keys(Wl),cu=new Map(Hf.map(n=>[n.toLowerCase(),n])),Ty=typeof Proxy=="function"?new Proxy(Wl,{get(n,t){const e=t.toLowerCase();if(cu.has(e))return n[cu.get(e)]},getOwnPropertyNames(){return Object.getOwnPropertyNames(Hf)}}):Wl,Cy=(...n)=>{n=Xt(n,"cmyk");const[t,e,i,r]=n,s=n.length>4?n[4]:1;return r===1?[0,0,0,s]:[t>=1?0:255*(1-t)*(1-r),e>=1?0:255*(1-e)*(1-r),i>=1?0:255*(1-i)*(1-r),s]},{max:hu}=Math,Ry=(...n)=>{let[t,e,i]=Xt(n,"rgb");t=t/255,e=e/255,i=i/255;const r=1-hu(t,hu(e,i)),s=r<1?1/(1-r):0,a=(1-t-r)*s,o=(1-e-r)*s,l=(1-i-r)*s;return[a,o,l,r]};mt.prototype.cmyk=function(){return Ry(this._rgb)};const Py=(...n)=>new mt(...n,"cmyk");Object.assign(Zt,{cmyk:Py});Wt.format.cmyk=Cy;Wt.autodetect.push({p:2,test:(...n)=>{if(n=Xt(n,"cmyk"),jt(n)==="array"&&n.length===4)return"cmyk"}});const Ly=(...n)=>{const t=Xt(n,"hsla");let e=Ar(n)||"lsa";return t[0]=tn(t[0]||0)+"deg",t[1]=tn(t[1]*100)+"%",t[2]=tn(t[2]*100)+"%",e==="hsla"||t.length>3&&t[3]<1?(t[3]="/ "+(t.length>3?t[3]:1),e="hsla"):t.length=3,`${e.substr(0,3)}(${t.join(" ")})`},Dy=(...n)=>{const t=Xt(n,"lab");let e=Ar(n)||"lab";return t[0]=tn(t[0])+"%",t[1]=tn(t[1]),t[2]=tn(t[2]),e==="laba"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lab(${t.join(" ")})`},Iy=(...n)=>{const t=Xt(n,"lch");let e=Ar(n)||"lab";return t[0]=tn(t[0])+"%",t[1]=tn(t[1]),t[2]=isNaN(t[2])?"none":tn(t[2])+"deg",e==="lcha"||t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`lch(${t.join(" ")})`},Ny=(...n)=>{const t=Xt(n,"lab");return t[0]=tn(t[0]*100)+"%",t[1]=Vl(t[1]),t[2]=Vl(t[2]),t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklab(${t.join(" ")})`},Vf=(...n)=>{const[t,e,i,...r]=Xt(n,"rgb"),[s,a,o]=wc(t,e,i),[l,c,h]=Uf(s,a,o);return[l,c,h,...r.length>0&&r[0]<1?[r[0]]:[]]},Uy=(...n)=>{const t=Xt(n,"lch");return t[0]=tn(t[0]*100)+"%",t[1]=Vl(t[1]),t[2]=isNaN(t[2])?"none":tn(t[2])+"deg",t.length>3&&t[3]<1?t[3]="/ "+(t.length>3?t[3]:1):t.length=3,`oklch(${t.join(" ")})`},{round:Bo}=Math,Fy=(...n)=>{const t=Xt(n,"rgba");let e=Ar(n)||"rgb";if(e.substr(0,3)==="hsl")return Ly(Of(t),e);if(e.substr(0,3)==="lab"){const i=Jr();Bn("d50");const r=Dy(yc(t),e);return Bn(i),r}if(e.substr(0,3)==="lch"){const i=Jr();Bn("d50");const r=Iy(Ec(t),e);return Bn(i),r}return e.substr(0,5)==="oklab"?Ny(wc(t)):e.substr(0,5)==="oklch"?Uy(Vf(t)):(t[0]=Bo(t[0]),t[1]=Bo(t[1]),t[2]=Bo(t[2]),(e==="rgba"||t.length>3&&t[3]<1)&&(t[3]="/ "+(t.length>3?t[3]:1),e="rgba"),`${e.substr(0,3)}(${t.slice(0,e==="rgb"?3:4).join(" ")})`)},Gf=(...n)=>{n=Xt(n,"lch");const[t,e,i,...r]=n,[s,a,o]=Nf(t,e,i),[l,c,h]=Mc(s,a,o);return[l,c,h,...r.length>0&&r[0]<1?[r[0]]:[]]},Vn=/((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source,cn=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source,xa=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source,nn=/\s*/.source,Cr=/\s+/.source,Ac=/\s*,\s*/.source,Oa=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source,Rr=/\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source,Wf=new RegExp("^rgba?\\("+nn+[Vn,Vn,Vn].join(Cr)+Rr+"\\)$"),Xf=new RegExp("^rgb\\("+nn+[Vn,Vn,Vn].join(Ac)+nn+"\\)$"),$f=new RegExp("^rgba\\("+nn+[Vn,Vn,Vn,cn].join(Ac)+nn+"\\)$"),Yf=new RegExp("^hsla?\\("+nn+[Oa,xa,xa].join(Cr)+Rr+"\\)$"),qf=new RegExp("^hsl?\\("+nn+[Oa,xa,xa].join(Ac)+nn+"\\)$"),jf=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,Zf=new RegExp("^lab\\("+nn+[cn,cn,cn].join(Cr)+Rr+"\\)$"),Kf=new RegExp("^lch\\("+nn+[cn,cn,Oa].join(Cr)+Rr+"\\)$"),Jf=new RegExp("^oklab\\("+nn+[cn,cn,cn].join(Cr)+Rr+"\\)$"),Qf=new RegExp("^oklch\\("+nn+[cn,cn,Oa].join(Cr)+Rr+"\\)$"),{round:td}=Math,Qi=n=>n.map((t,e)=>e<=2?Mi(td(t),0,255):t),ge=(n,t=0,e=100,i=!1)=>(typeof n=="string"&&n.endsWith("%")&&(n=parseFloat(n.substring(0,n.length-1))/100,i?n=t+(n+1)*.5*(e-t):n=t+n*(e-t)),+n),Le=(n,t)=>n==="none"?t:n,Tc=n=>{if(n=n.toLowerCase().trim(),n==="transparent")return[0,0,0,0];let t;if(Wt.format.named)try{return Wt.format.named(n)}catch{}if((t=n.match(Wf))||(t=n.match(Xf))){let e=t.slice(1,4);for(let r=0;r<3;r++)e[r]=+ge(Le(e[r],0),0,255);e=Qi(e);const i=t[4]!==void 0?+ge(t[4],0,1):1;return e[3]=i,e}if(t=n.match($f)){const e=t.slice(1,5);for(let i=0;i<4;i++)e[i]=+ge(e[i],0,255);return e}if((t=n.match(Yf))||(t=n.match(qf))){const e=t.slice(1,4);e[0]=+Le(e[0].replace("deg",""),0),e[1]=+ge(Le(e[1],0),0,100)*.01,e[2]=+ge(Le(e[2],0),0,100)*.01;const i=Qi(Gl(e)),r=t[4]!==void 0?+ge(t[4],0,1):1;return i[3]=r,i}if(t=n.match(jf)){const e=t.slice(1,4);e[1]*=.01,e[2]*=.01;const i=Gl(e);for(let r=0;r<3;r++)i[r]=td(i[r]);return i[3]=+t[4],i}if(t=n.match(Zf)){const e=t.slice(1,4);e[0]=ge(Le(e[0],0),0,100),e[1]=ge(Le(e[1],0),-125,125,!0),e[2]=ge(Le(e[2],0),-125,125,!0);const i=Jr();Bn("d50");const r=Qi(bc(e));Bn(i);const s=t[4]!==void 0?+ge(t[4],0,1):1;return r[3]=s,r}if(t=n.match(Kf)){const e=t.slice(1,4);e[0]=ge(e[0],0,100),e[1]=ge(Le(e[1],0),0,150,!1),e[2]=+Le(e[2].replace("deg",""),0);const i=Jr();Bn("d50");const r=Qi(Sc(e));Bn(i);const s=t[4]!==void 0?+ge(t[4],0,1):1;return r[3]=s,r}if(t=n.match(Jf)){const e=t.slice(1,4);e[0]=ge(Le(e[0],0),0,1),e[1]=ge(Le(e[1],0),-.4,.4,!0),e[2]=ge(Le(e[2],0),-.4,.4,!0);const i=Qi(Mc(e)),r=t[4]!==void 0?+ge(t[4],0,1):1;return i[3]=r,i}if(t=n.match(Qf)){const e=t.slice(1,4);e[0]=ge(Le(e[0],0),0,1),e[1]=ge(Le(e[1],0),0,.4,!1),e[2]=+Le(e[2].replace("deg",""),0);const i=Qi(Gf(e)),r=t[4]!==void 0?+ge(t[4],0,1):1;return i[3]=r,i}};Tc.test=n=>Wf.test(n)||Yf.test(n)||Zf.test(n)||Kf.test(n)||Jf.test(n)||Qf.test(n)||Xf.test(n)||$f.test(n)||qf.test(n)||jf.test(n)||n==="transparent";mt.prototype.css=function(n){return Fy(this._rgb,n)};const Oy=(...n)=>new mt(...n,"css");Zt.css=Oy;Wt.format.css=Tc;Wt.autodetect.push({p:5,test:(n,...t)=>{if(!t.length&&jt(n)==="string"&&Tc.test(n))return"css"}});Wt.format.gl=(...n)=>{const t=Xt(n,"rgba");return t[0]*=255,t[1]*=255,t[2]*=255,t};const ky=(...n)=>new mt(...n,"gl");Zt.gl=ky;mt.prototype.gl=function(){const n=this._rgb;return[n[0]/255,n[1]/255,n[2]/255,n[3]]};mt.prototype.hex=function(n){return Lf(this._rgb,n)};const By=(...n)=>new mt(...n,"hex");Zt.hex=By;Wt.format.hex=Pf;Wt.autodetect.push({p:4,test:(n,...t)=>{if(!t.length&&jt(n)==="string"&&[3,4,5,6,7,8,9].indexOf(n.length)>=0)return"hex"}});const{log:js}=Math,ed=n=>{const t=n/100;let e,i,r;return t<66?(e=255,i=t<6?0:-155.25485562709179-.44596950469579133*(i=t-2)+104.49216199393888*js(i),r=t<20?0:-254.76935184120902+.8274096064007395*(r=t-10)+115.67994401066147*js(r)):(e=351.97690566805693+.114206453784165*(e=t-55)-40.25366309332127*js(e),i=325.4494125711974+.07943456536662342*(i=t-50)-28.0852963507957*js(i),r=255),[e,i,r,1]},{round:zy}=Math,Hy=(...n)=>{const t=Xt(n,"rgb"),e=t[0],i=t[2];let r=1e3,s=4e4;const a=.4;let o;for(;s-r>a;){o=(s+r)*.5;const l=ed(o);l[2]/l[0]>=i/e?s=o:r=o}return zy(o)};mt.prototype.temp=mt.prototype.kelvin=mt.prototype.temperature=function(){return Hy(this._rgb)};const zo=(...n)=>new mt(...n,"temp");Object.assign(Zt,{temp:zo,kelvin:zo,temperature:zo});Wt.format.temp=Wt.format.kelvin=Wt.format.temperature=ed;mt.prototype.oklch=function(){return Vf(this._rgb)};const Vy=(...n)=>new mt(...n,"oklch");Object.assign(Zt,{oklch:Vy});Wt.format.oklch=Gf;Wt.autodetect.push({p:2,test:(...n)=>{if(n=Xt(n,"oklch"),jt(n)==="array"&&n.length===3)return"oklch"}});Object.assign(Zt,{analyze:Bf,average:Gb,bezier:jb,blend:hn,brewer:Ty,Color:mt,colors:gr,contrast:gy,contrastAPCA:xy,cubehelix:ly,deltaE:Ey,distance:My,input:Wt,interpolate:_r,limits:zf,mix:_r,random:fy,scale:va,scales:Ay,valid:wy});/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class yn{constructor(t,e,i,r,s="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),yn.nextNameID=yn.nextNameID||0,this.$name.id=`lil-gui-name-${++yn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Gy extends yn{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Xl(n){let t,e;return(t=n.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Wy={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Xl,toHexString:Xl},Qr={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},Xy={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,t,e=1){const i=Qr.fromHexString(n);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([n,t,e],i=1){i=255/i;const r=n*i<<16^t*i<<8^e*i<<0;return Qr.toHexString(r)}},$y={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,t,e=1){const i=Qr.fromHexString(n);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:n,g:t,b:e},i=1){i=255/i;const r=n*i<<16^t*i<<8^e*i<<0;return Qr.toHexString(r)}},Yy=[Wy,Qr,Xy,$y];function qy(n){return Yy.find(t=>t.match(n))}class jy extends yn{constructor(t,e,i,r){super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=qy(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Xl(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ho extends yn{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Zy extends yn{constructor(t,e,i,r,s,a){super(t,e,i,"number"),this._initInput(),this.min(r),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},i=v=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+v),this.$input.value=this.getValue())},r=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),i(this._step*this._normalizeMouseWheel(v)))};let a=!1,o,l,c,h,u;const d=5,p=v=>{o=v.clientX,l=c=v.clientY,a=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",g)},_=v=>{if(a){const y=v.clientX-o,S=v.clientY-l;Math.abs(S)>d?(v.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&g()}if(!a){const y=v.clientY-c;u-=y*this._step*this._arrowKeyMultiplier(v),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=v.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(f,v,y,S,C)=>(f-v)/(y-v)*(C-S)+S,e=f=>{const v=this.$slider.getBoundingClientRect();let y=t(f,v.left,v.right,this._min,this._max);this._snapClampSetValue(y)},i=f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=f=>{e(f.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let a=!1,o,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),a=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,l=f.touches[0].clientY,a=!0):c(f),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=f=>{if(a){const v=f.touches[0].clientX-o,y=f.touches[0].clientY-l;Math.abs(v)>Math.abs(y)?c(f):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else f.preventDefault(),e(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),_=400;let g;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const y=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,_)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Ky extends yn{constructor(t,e,i,r){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Jy extends yn{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Qy=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function t1(n){const t=document.createElement("style");t.innerHTML=n;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let uu=!1;class Cc{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:r,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!uu&&o&&(t1(Qy),uu=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=a}add(t,e,i,r,s){if(Object(i)===i)return new Ky(this,t,e,i);const a=t[e];switch(typeof a){case"number":return new Zy(this,t,e,i,r,s);case"boolean":return new Gy(this,t,e);case"string":return new Jy(this,t,e);case"function":return new Ho(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,i=1){return new jy(this,t,e,i)}addFolder(t){const e=new Cc({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof Ho||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Ho)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function aa(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function e1(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function nd(n){let t,e,i;n.length!==2?(t=aa,e=(o,l)=>aa(n(o),l),i=(o,l)=>n(o)-l):(t=n===aa||n===e1?n:n1,e=n,i=n);function r(o,l,c=0,h=o.length){if(c<h){if(t(l,l)!==0)return h;do{const u=c+h>>>1;e(o[u],l)<0?c=u+1:h=u}while(c<h)}return c}function s(o,l,c=0,h=o.length){if(c<h){if(t(l,l)!==0)return h;do{const u=c+h>>>1;e(o[u],l)<=0?c=u+1:h=u}while(c<h)}return c}function a(o,l,c=0,h=o.length){const u=r(o,l,c,h-1);return u>c&&i(o[u-1],l)>-i(o[u],l)?u-1:u}return{left:r,center:a,right:s}}function n1(){return 0}function i1(n){return n===null?NaN:+n}const r1=nd(aa),s1=r1.right;nd(i1).center;const a1=Math.sqrt(50),o1=Math.sqrt(10),l1=Math.sqrt(2);function ba(n,t,e){const i=(t-n)/Math.max(0,e),r=Math.floor(Math.log10(i)),s=i/Math.pow(10,r),a=s>=a1?10:s>=o1?5:s>=l1?2:1;let o,l,c;return r<0?(c=Math.pow(10,-r)/a,o=Math.round(n*c),l=Math.round(t*c),o/c<n&&++o,l/c>t&&--l,c=-c):(c=Math.pow(10,r)*a,o=Math.round(n/c),l=Math.round(t/c),o*c<n&&++o,l*c>t&&--l),l<o&&.5<=e&&e<2?ba(n,t,e*2):[o,l,c]}function c1(n,t,e){if(t=+t,n=+n,e=+e,!(e>0))return[];if(n===t)return[n];const i=t<n,[r,s,a]=i?ba(t,n,e):ba(n,t,e);if(!(s>=r))return[];const o=s-r+1,l=new Array(o);if(i)if(a<0)for(let c=0;c<o;++c)l[c]=(s-c)/-a;else for(let c=0;c<o;++c)l[c]=(s-c)*a;else if(a<0)for(let c=0;c<o;++c)l[c]=(r+c)/-a;else for(let c=0;c<o;++c)l[c]=(r+c)*a;return l}function $l(n,t,e){return t=+t,n=+n,e=+e,ba(n,t,e)[2]}function h1(n,t,e){t=+t,n=+n,e=+e;const i=t<n,r=i?$l(t,n,e):$l(n,t,e);return(i?-1:1)*(r<0?1/-r:r)}var u1={value:()=>{}};function id(){for(var n=0,t=arguments.length,e={},i;n<t;++n){if(!(i=arguments[n]+"")||i in e||/[\s.]/.test(i))throw new Error("illegal type: "+i);e[i]=[]}return new oa(e)}function oa(n){this._=n}function f1(n,t){return n.trim().split(/^|\s+/).map(function(e){var i="",r=e.indexOf(".");if(r>=0&&(i=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:i}})}oa.prototype=id.prototype={constructor:oa,on:function(n,t){var e=this._,i=f1(n+"",e),r,s=-1,a=i.length;if(arguments.length<2){for(;++s<a;)if((r=(n=i[s]).type)&&(r=d1(e[r],n.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(r=(n=i[s]).type)e[r]=fu(e[r],n.name,t);else if(t==null)for(r in e)e[r]=fu(e[r],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new oa(n)},call:function(n,t){if((r=arguments.length-2)>0)for(var e=new Array(r),i=0,r,s;i<r;++i)e[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(t,e)}};function d1(n,t){for(var e=0,i=n.length,r;e<i;++e)if((r=n[e]).name===t)return r.value}function fu(n,t,e){for(var i=0,r=n.length;i<r;++i)if(n[i].name===t){n[i]=u1,n=n.slice(0,i).concat(n.slice(i+1));break}return e!=null&&n.push({name:t,value:e}),n}var Yl="http://www.w3.org/1999/xhtml";const du={svg:"http://www.w3.org/2000/svg",xhtml:Yl,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ka(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),du.hasOwnProperty(t)?{space:du[t],local:n}:n}function p1(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===Yl&&t.documentElement.namespaceURI===Yl?t.createElement(n):t.createElementNS(e,n)}}function m1(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function rd(n){var t=ka(n);return(t.local?m1:p1)(t)}function g1(){}function Rc(n){return n==null?g1:function(){return this.querySelector(n)}}function _1(n){typeof n!="function"&&(n=Rc(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=i[r]=new Array(a),l,c,h=0;h<a;++h)(l=s[h])&&(c=n.call(l,l.__data__,h,s))&&("__data__"in l&&(c.__data__=l.__data__),o[h]=c);return new un(i,this._parents)}function v1(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function x1(){return[]}function sd(n){return n==null?x1:function(){return this.querySelectorAll(n)}}function b1(n){return function(){return v1(n.apply(this,arguments))}}function y1(n){typeof n=="function"?n=b1(n):n=sd(n);for(var t=this._groups,e=t.length,i=[],r=[],s=0;s<e;++s)for(var a=t[s],o=a.length,l,c=0;c<o;++c)(l=a[c])&&(i.push(n.call(l,l.__data__,c,a)),r.push(l));return new un(i,r)}function ad(n){return function(){return this.matches(n)}}function od(n){return function(t){return t.matches(n)}}var S1=Array.prototype.find;function E1(n){return function(){return S1.call(this.children,n)}}function M1(){return this.firstElementChild}function w1(n){return this.select(n==null?M1:E1(typeof n=="function"?n:od(n)))}var A1=Array.prototype.filter;function T1(){return Array.from(this.children)}function C1(n){return function(){return A1.call(this.children,n)}}function R1(n){return this.selectAll(n==null?T1:C1(typeof n=="function"?n:od(n)))}function P1(n){typeof n!="function"&&(n=ad(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=i[r]=[],l,c=0;c<a;++c)(l=s[c])&&n.call(l,l.__data__,c,s)&&o.push(l);return new un(i,this._parents)}function ld(n){return new Array(n.length)}function L1(){return new un(this._enter||this._groups.map(ld),this._parents)}function ya(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}ya.prototype={constructor:ya,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function D1(n){return function(){return n}}function I1(n,t,e,i,r,s){for(var a=0,o,l=t.length,c=s.length;a<c;++a)(o=t[a])?(o.__data__=s[a],i[a]=o):e[a]=new ya(n,s[a]);for(;a<l;++a)(o=t[a])&&(r[a]=o)}function N1(n,t,e,i,r,s,a){var o,l,c=new Map,h=t.length,u=s.length,d=new Array(h),p;for(o=0;o<h;++o)(l=t[o])&&(d[o]=p=a.call(l,l.__data__,o,t)+"",c.has(p)?r[o]=l:c.set(p,l));for(o=0;o<u;++o)p=a.call(n,s[o],o,s)+"",(l=c.get(p))?(i[o]=l,l.__data__=s[o],c.delete(p)):e[o]=new ya(n,s[o]);for(o=0;o<h;++o)(l=t[o])&&c.get(d[o])===l&&(r[o]=l)}function U1(n){return n.__data__}function F1(n,t){if(!arguments.length)return Array.from(this,U1);var e=t?N1:I1,i=this._parents,r=this._groups;typeof n!="function"&&(n=D1(n));for(var s=r.length,a=new Array(s),o=new Array(s),l=new Array(s),c=0;c<s;++c){var h=i[c],u=r[c],d=u.length,p=O1(n.call(h,h&&h.__data__,c,i)),_=p.length,g=o[c]=new Array(_),m=a[c]=new Array(_),f=l[c]=new Array(d);e(h,u,g,m,f,p,t);for(var v=0,y=0,S,C;v<_;++v)if(S=g[v]){for(v>=y&&(y=v+1);!(C=m[y])&&++y<_;);S._next=C||null}}return a=new un(a,i),a._enter=o,a._exit=l,a}function O1(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function k1(){return new un(this._exit||this._groups.map(ld),this._parents)}function B1(n,t,e){var i=this.enter(),r=this,s=this.exit();return typeof n=="function"?(i=n(i),i&&(i=i.selection())):i=i.append(n+""),t!=null&&(r=t(r),r&&(r=r.selection())),e==null?s.remove():e(s),i&&r?i.merge(r).order():r}function z1(n){for(var t=n.selection?n.selection():n,e=this._groups,i=t._groups,r=e.length,s=i.length,a=Math.min(r,s),o=new Array(r),l=0;l<a;++l)for(var c=e[l],h=i[l],u=c.length,d=o[l]=new Array(u),p,_=0;_<u;++_)(p=c[_]||h[_])&&(d[_]=p);for(;l<r;++l)o[l]=e[l];return new un(o,this._parents)}function H1(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var i=n[t],r=i.length-1,s=i[r],a;--r>=0;)(a=i[r])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function V1(n){n||(n=G1);function t(u,d){return u&&d?n(u.__data__,d.__data__):!u-!d}for(var e=this._groups,i=e.length,r=new Array(i),s=0;s<i;++s){for(var a=e[s],o=a.length,l=r[s]=new Array(o),c,h=0;h<o;++h)(c=a[h])&&(l[h]=c);l.sort(t)}return new un(r,this._parents).order()}function G1(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function W1(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function X1(){return Array.from(this)}function $1(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],r=0,s=i.length;r<s;++r){var a=i[r];if(a)return a}return null}function Y1(){let n=0;for(const t of this)++n;return n}function q1(){return!this.node()}function j1(n){for(var t=this._groups,e=0,i=t.length;e<i;++e)for(var r=t[e],s=0,a=r.length,o;s<a;++s)(o=r[s])&&n.call(o,o.__data__,s,r);return this}function Z1(n){return function(){this.removeAttribute(n)}}function K1(n){return function(){this.removeAttributeNS(n.space,n.local)}}function J1(n,t){return function(){this.setAttribute(n,t)}}function Q1(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function tS(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function eS(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function nS(n,t){var e=ka(n);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((t==null?e.local?K1:Z1:typeof t=="function"?e.local?eS:tS:e.local?Q1:J1)(e,t))}function cd(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function iS(n){return function(){this.style.removeProperty(n)}}function rS(n,t,e){return function(){this.style.setProperty(n,t,e)}}function sS(n,t,e){return function(){var i=t.apply(this,arguments);i==null?this.style.removeProperty(n):this.style.setProperty(n,i,e)}}function aS(n,t,e){return arguments.length>1?this.each((t==null?iS:typeof t=="function"?sS:rS)(n,t,e??"")):vr(this.node(),n)}function vr(n,t){return n.style.getPropertyValue(t)||cd(n).getComputedStyle(n,null).getPropertyValue(t)}function oS(n){return function(){delete this[n]}}function lS(n,t){return function(){this[n]=t}}function cS(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function hS(n,t){return arguments.length>1?this.each((t==null?oS:typeof t=="function"?cS:lS)(n,t)):this.node()[n]}function hd(n){return n.trim().split(/^|\s+/)}function Pc(n){return n.classList||new ud(n)}function ud(n){this._node=n,this._names=hd(n.getAttribute("class")||"")}ud.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function fd(n,t){for(var e=Pc(n),i=-1,r=t.length;++i<r;)e.add(t[i])}function dd(n,t){for(var e=Pc(n),i=-1,r=t.length;++i<r;)e.remove(t[i])}function uS(n){return function(){fd(this,n)}}function fS(n){return function(){dd(this,n)}}function dS(n,t){return function(){(t.apply(this,arguments)?fd:dd)(this,n)}}function pS(n,t){var e=hd(n+"");if(arguments.length<2){for(var i=Pc(this.node()),r=-1,s=e.length;++r<s;)if(!i.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?dS:t?uS:fS)(e,t))}function mS(){this.textContent=""}function gS(n){return function(){this.textContent=n}}function _S(n){return function(){var t=n.apply(this,arguments);this.textContent=t??""}}function vS(n){return arguments.length?this.each(n==null?mS:(typeof n=="function"?_S:gS)(n)):this.node().textContent}function xS(){this.innerHTML=""}function bS(n){return function(){this.innerHTML=n}}function yS(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t??""}}function SS(n){return arguments.length?this.each(n==null?xS:(typeof n=="function"?yS:bS)(n)):this.node().innerHTML}function ES(){this.nextSibling&&this.parentNode.appendChild(this)}function MS(){return this.each(ES)}function wS(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function AS(){return this.each(wS)}function TS(n){var t=typeof n=="function"?n:rd(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function CS(){return null}function RS(n,t){var e=typeof n=="function"?n:rd(n),i=t==null?CS:typeof t=="function"?t:Rc(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)})}function PS(){var n=this.parentNode;n&&n.removeChild(this)}function LS(){return this.each(PS)}function DS(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function IS(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function NS(n){return this.select(n?IS:DS)}function US(n){return arguments.length?this.property("__data__",n):this.node().__data__}function FS(n){return function(t){n.call(this,t,this.__data__)}}function OS(n){return n.trim().split(/^|\s+/).map(function(t){var e="",i=t.indexOf(".");return i>=0&&(e=t.slice(i+1),t=t.slice(0,i)),{type:t,name:e}})}function kS(n){return function(){var t=this.__on;if(t){for(var e=0,i=-1,r=t.length,s;e<r;++e)s=t[e],(!n.type||s.type===n.type)&&s.name===n.name?this.removeEventListener(s.type,s.listener,s.options):t[++i]=s;++i?t.length=i:delete this.__on}}}function BS(n,t,e){return function(){var i=this.__on,r,s=FS(t);if(i){for(var a=0,o=i.length;a<o;++a)if((r=i[a]).type===n.type&&r.name===n.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=e),r.value=t;return}}this.addEventListener(n.type,s,e),r={type:n.type,name:n.name,value:t,listener:s,options:e},i?i.push(r):this.__on=[r]}}function zS(n,t,e){var i=OS(n+""),r,s=i.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var l=0,c=o.length,h;l<c;++l)for(r=0,h=o[l];r<s;++r)if((a=i[r]).type===h.type&&a.name===h.name)return h.value}return}for(o=t?BS:kS,r=0;r<s;++r)this.each(o(i[r],t,e));return this}function pd(n,t,e){var i=cd(n),r=i.CustomEvent;typeof r=="function"?r=new r(t,e):(r=i.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),n.dispatchEvent(r)}function HS(n,t){return function(){return pd(this,n,t)}}function VS(n,t){return function(){return pd(this,n,t.apply(this,arguments))}}function GS(n,t){return this.each((typeof t=="function"?VS:HS)(n,t))}function*WS(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],r=0,s=i.length,a;r<s;++r)(a=i[r])&&(yield a)}var XS=[null];function un(n,t){this._groups=n,this._parents=t}function hs(){return new un([[document.documentElement]],XS)}function $S(){return this}un.prototype=hs.prototype={constructor:un,select:_1,selectAll:y1,selectChild:w1,selectChildren:R1,filter:P1,data:F1,enter:L1,exit:k1,join:B1,merge:z1,selection:$S,order:H1,sort:V1,call:W1,nodes:X1,node:$1,size:Y1,empty:q1,each:j1,attr:nS,style:aS,property:hS,classed:pS,text:vS,html:SS,raise:MS,lower:AS,append:TS,insert:RS,remove:LS,clone:NS,datum:US,on:zS,dispatch:GS,[Symbol.iterator]:WS};function Pr(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function us(n,t){var e=Object.create(n.prototype);for(var i in t)e[i]=t[i];return e}function hi(){}var Pi=.7,xr=1/Pi,lr="\\s*([+-]?\\d+)\\s*",ts="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Sn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",YS=/^#([0-9a-f]{3,8})$/,qS=new RegExp(`^rgb\\(${lr},${lr},${lr}\\)$`),jS=new RegExp(`^rgb\\(${Sn},${Sn},${Sn}\\)$`),ZS=new RegExp(`^rgba\\(${lr},${lr},${lr},${ts}\\)$`),KS=new RegExp(`^rgba\\(${Sn},${Sn},${Sn},${ts}\\)$`),JS=new RegExp(`^hsl\\(${ts},${Sn},${Sn}\\)$`),QS=new RegExp(`^hsla\\(${ts},${Sn},${Sn},${ts}\\)$`),pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Pr(hi,Li,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:mu,formatHex:mu,formatHex8:tE,formatHsl:eE,formatRgb:gu,toString:gu});function mu(){return this.rgb().formatHex()}function tE(){return this.rgb().formatHex8()}function eE(){return md(this).formatHsl()}function gu(){return this.rgb().formatRgb()}function Li(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=YS.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?_u(t):e===3?new Se(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?Zs(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?Zs(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=qS.exec(n))?new Se(t[1],t[2],t[3],1):(t=jS.exec(n))?new Se(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=ZS.exec(n))?Zs(t[1],t[2],t[3],t[4]):(t=KS.exec(n))?Zs(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=JS.exec(n))?bu(t[1],t[2]/100,t[3]/100,1):(t=QS.exec(n))?bu(t[1],t[2]/100,t[3]/100,t[4]):pu.hasOwnProperty(n)?_u(pu[n]):n==="transparent"?new Se(NaN,NaN,NaN,0):null}function _u(n){return new Se(n>>16&255,n>>8&255,n&255,1)}function Zs(n,t,e,i){return i<=0&&(n=t=e=NaN),new Se(n,t,e,i)}function Lc(n){return n instanceof hi||(n=Li(n)),n?(n=n.rgb(),new Se(n.r,n.g,n.b,n.opacity)):new Se}function Sa(n,t,e,i){return arguments.length===1?Lc(n):new Se(n,t,e,i??1)}function Se(n,t,e,i){this.r=+n,this.g=+t,this.b=+e,this.opacity=+i}Pr(Se,Sa,us(hi,{brighter(n){return n=n==null?xr:Math.pow(xr,n),new Se(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Pi:Math.pow(Pi,n),new Se(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Se(wi(this.r),wi(this.g),wi(this.b),Ea(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:vu,formatHex:vu,formatHex8:nE,formatRgb:xu,toString:xu}));function vu(){return`#${Ei(this.r)}${Ei(this.g)}${Ei(this.b)}`}function nE(){return`#${Ei(this.r)}${Ei(this.g)}${Ei(this.b)}${Ei((isNaN(this.opacity)?1:this.opacity)*255)}`}function xu(){const n=Ea(this.opacity);return`${n===1?"rgb(":"rgba("}${wi(this.r)}, ${wi(this.g)}, ${wi(this.b)}${n===1?")":`, ${n})`}`}function Ea(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function wi(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function Ei(n){return n=wi(n),(n<16?"0":"")+n.toString(16)}function bu(n,t,e,i){return i<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new ln(n,t,e,i)}function md(n){if(n instanceof ln)return new ln(n.h,n.s,n.l,n.opacity);if(n instanceof hi||(n=Li(n)),!n)return new ln;if(n instanceof ln)return n;n=n.rgb();var t=n.r/255,e=n.g/255,i=n.b/255,r=Math.min(t,e,i),s=Math.max(t,e,i),a=NaN,o=s-r,l=(s+r)/2;return o?(t===s?a=(e-i)/o+(e<i)*6:e===s?a=(i-t)/o+2:a=(t-e)/o+4,o/=l<.5?s+r:2-s-r,a*=60):o=l>0&&l<1?0:a,new ln(a,o,l,n.opacity)}function br(n,t,e,i){return arguments.length===1?md(n):new ln(n,t,e,i??1)}function ln(n,t,e,i){this.h=+n,this.s=+t,this.l=+e,this.opacity=+i}Pr(ln,br,us(hi,{brighter(n){return n=n==null?xr:Math.pow(xr,n),new ln(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Pi:Math.pow(Pi,n),new ln(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,i=e+(e<.5?e:1-e)*t,r=2*e-i;return new Se(Vo(n>=240?n-240:n+120,r,i),Vo(n,r,i),Vo(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new ln(yu(this.h),Ks(this.s),Ks(this.l),Ea(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=Ea(this.opacity);return`${n===1?"hsl(":"hsla("}${yu(this.h)}, ${Ks(this.s)*100}%, ${Ks(this.l)*100}%${n===1?")":`, ${n})`}`}}));function yu(n){return n=(n||0)%360,n<0?n+360:n}function Ks(n){return Math.max(0,Math.min(1,n||0))}function Vo(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}const gd=Math.PI/180,_d=180/Math.PI,Ma=18,vd=.96422,xd=1,bd=.82521,yd=4/29,cr=6/29,Sd=3*cr*cr,iE=cr*cr*cr;function Ed(n){if(n instanceof En)return new En(n.l,n.a,n.b,n.opacity);if(n instanceof zn)return Md(n);n instanceof Se||(n=Lc(n));var t=$o(n.r),e=$o(n.g),i=$o(n.b),r=Go((.2225045*t+.7168786*e+.0606169*i)/xd),s,a;return t===e&&e===i?s=a=r:(s=Go((.4360747*t+.3850649*e+.1430804*i)/vd),a=Go((.0139322*t+.0971045*e+.7141733*i)/bd)),new En(116*r-16,500*(s-r),200*(r-a),n.opacity)}function ql(n,t,e,i){return arguments.length===1?Ed(n):new En(n,t,e,i??1)}function En(n,t,e,i){this.l=+n,this.a=+t,this.b=+e,this.opacity=+i}Pr(En,ql,us(hi,{brighter(n){return new En(this.l+Ma*(n??1),this.a,this.b,this.opacity)},darker(n){return new En(this.l-Ma*(n??1),this.a,this.b,this.opacity)},rgb(){var n=(this.l+16)/116,t=isNaN(this.a)?n:n+this.a/500,e=isNaN(this.b)?n:n-this.b/200;return t=vd*Wo(t),n=xd*Wo(n),e=bd*Wo(e),new Se(Xo(3.1338561*t-1.6168667*n-.4906146*e),Xo(-.9787684*t+1.9161415*n+.033454*e),Xo(.0719453*t-.2289914*n+1.4052427*e),this.opacity)}}));function Go(n){return n>iE?Math.pow(n,1/3):n/Sd+yd}function Wo(n){return n>cr?n*n*n:Sd*(n-yd)}function Xo(n){return 255*(n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055)}function $o(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function rE(n){if(n instanceof zn)return new zn(n.h,n.c,n.l,n.opacity);if(n instanceof En||(n=Ed(n)),n.a===0&&n.b===0)return new zn(NaN,0<n.l&&n.l<100?0:NaN,n.l,n.opacity);var t=Math.atan2(n.b,n.a)*_d;return new zn(t<0?t+360:t,Math.sqrt(n.a*n.a+n.b*n.b),n.l,n.opacity)}function jl(n,t,e,i){return arguments.length===1?rE(n):new zn(n,t,e,i??1)}function zn(n,t,e,i){this.h=+n,this.c=+t,this.l=+e,this.opacity=+i}function Md(n){if(isNaN(n.h))return new En(n.l,0,0,n.opacity);var t=n.h*gd;return new En(n.l,Math.cos(t)*n.c,Math.sin(t)*n.c,n.opacity)}Pr(zn,jl,us(hi,{brighter(n){return new zn(this.h,this.c,this.l+Ma*(n??1),this.opacity)},darker(n){return new zn(this.h,this.c,this.l-Ma*(n??1),this.opacity)},rgb(){return Md(this).rgb()}}));var wd=-.14861,Dc=1.78277,Ic=-.29227,Ba=-.90649,es=1.97294,Su=es*Ba,Eu=es*Dc,Mu=Dc*Ic-Ba*wd;function sE(n){if(n instanceof Ai)return new Ai(n.h,n.s,n.l,n.opacity);n instanceof Se||(n=Lc(n));var t=n.r/255,e=n.g/255,i=n.b/255,r=(Mu*i+Su*t-Eu*e)/(Mu+Su-Eu),s=i-r,a=(es*(e-r)-Ic*s)/Ba,o=Math.sqrt(a*a+s*s)/(es*r*(1-r)),l=o?Math.atan2(a,s)*_d-120:NaN;return new Ai(l<0?l+360:l,o,r,n.opacity)}function Zl(n,t,e,i){return arguments.length===1?sE(n):new Ai(n,t,e,i??1)}function Ai(n,t,e,i){this.h=+n,this.s=+t,this.l=+e,this.opacity=+i}Pr(Ai,Zl,us(hi,{brighter(n){return n=n==null?xr:Math.pow(xr,n),new Ai(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Pi:Math.pow(Pi,n),new Ai(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=isNaN(this.h)?0:(this.h+120)*gd,t=+this.l,e=isNaN(this.s)?0:this.s*t*(1-t),i=Math.cos(n),r=Math.sin(n);return new Se(255*(t+e*(wd*i+Dc*r)),255*(t+e*(Ic*i+Ba*r)),255*(t+e*(es*i)),this.opacity)}}));const za=n=>()=>n;function Ad(n,t){return function(e){return n+e*t}}function aE(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(i){return Math.pow(n+i*t,e)}}function Nc(n,t){var e=t-n;return e?Ad(n,e>180||e<-180?e-360*Math.round(e/360):e):za(isNaN(n)?t:n)}function oE(n){return(n=+n)==1?Ee:function(t,e){return e-t?aE(t,e,n):za(isNaN(t)?e:t)}}function Ee(n,t){var e=t-n;return e?Ad(n,e):za(isNaN(n)?t:n)}const ns=(function n(t){var e=oE(t);function i(r,s){var a=e((r=Sa(r)).r,(s=Sa(s)).r),o=e(r.g,s.g),l=e(r.b,s.b),c=Ee(r.opacity,s.opacity);return function(h){return r.r=a(h),r.g=o(h),r.b=l(h),r.opacity=c(h),r+""}}return i.gamma=n,i})(1);function lE(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,i=t.slice(),r;return function(s){for(r=0;r<e;++r)i[r]=n[r]*(1-s)+t[r]*s;return i}}function cE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function hE(n,t){var e=t?t.length:0,i=n?Math.min(e,n.length):0,r=new Array(i),s=new Array(e),a;for(a=0;a<i;++a)r[a]=Uc(n[a],t[a]);for(;a<e;++a)s[a]=t[a];return function(o){for(a=0;a<i;++a)s[a]=r[a](o);return s}}function uE(n,t){var e=new Date;return n=+n,t=+t,function(i){return e.setTime(n*(1-i)+t*i),e}}function Je(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function fE(n,t){var e={},i={},r;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in n?e[r]=Uc(n[r],t[r]):i[r]=t[r];return function(s){for(r in e)i[r]=e[r](s);return i}}var Kl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Yo=new RegExp(Kl.source,"g");function dE(n){return function(){return n}}function pE(n){return function(t){return n(t)+""}}function Td(n,t){var e=Kl.lastIndex=Yo.lastIndex=0,i,r,s,a=-1,o=[],l=[];for(n=n+"",t=t+"";(i=Kl.exec(n))&&(r=Yo.exec(t));)(s=r.index)>e&&(s=t.slice(e,s),o[a]?o[a]+=s:o[++a]=s),(i=i[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,l.push({i:a,x:Je(i,r)})),e=Yo.lastIndex;return e<t.length&&(s=t.slice(e),o[a]?o[a]+=s:o[++a]=s),o.length<2?l[0]?pE(l[0].x):dE(t):(t=l.length,function(c){for(var h=0,u;h<t;++h)o[(u=l[h]).i]=u.x(c);return o.join("")})}function Uc(n,t){var e=typeof t,i;return t==null||e==="boolean"?za(t):(e==="number"?Je:e==="string"?(i=Li(t))?(t=i,ns):Td:t instanceof Li?ns:t instanceof Date?uE:cE(t)?lE:Array.isArray(t)?hE:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?fE:Je)(n,t)}function mE(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}var wu=180/Math.PI,Jl={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Cd(n,t,e,i,r,s){var a,o,l;return(a=Math.sqrt(n*n+t*t))&&(n/=a,t/=a),(l=n*e+t*i)&&(e-=n*l,i-=t*l),(o=Math.sqrt(e*e+i*i))&&(e/=o,i/=o,l/=o),n*i<t*e&&(n=-n,t=-t,l=-l,a=-a),{translateX:r,translateY:s,rotate:Math.atan2(t,n)*wu,skewX:Math.atan(l)*wu,scaleX:a,scaleY:o}}var Js;function gE(n){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?Jl:Cd(t.a,t.b,t.c,t.d,t.e,t.f)}function _E(n){return n==null||(Js||(Js=document.createElementNS("http://www.w3.org/2000/svg","g")),Js.setAttribute("transform",n),!(n=Js.transform.baseVal.consolidate()))?Jl:(n=n.matrix,Cd(n.a,n.b,n.c,n.d,n.e,n.f))}function Rd(n,t,e,i){function r(c){return c.length?c.pop()+" ":""}function s(c,h,u,d,p,_){if(c!==u||h!==d){var g=p.push("translate(",null,t,null,e);_.push({i:g-4,x:Je(c,u)},{i:g-2,x:Je(h,d)})}else(u||d)&&p.push("translate("+u+t+d+e)}function a(c,h,u,d){c!==h?(c-h>180?h+=360:h-c>180&&(c+=360),d.push({i:u.push(r(u)+"rotate(",null,i)-2,x:Je(c,h)})):h&&u.push(r(u)+"rotate("+h+i)}function o(c,h,u,d){c!==h?d.push({i:u.push(r(u)+"skewX(",null,i)-2,x:Je(c,h)}):h&&u.push(r(u)+"skewX("+h+i)}function l(c,h,u,d,p,_){if(c!==u||h!==d){var g=p.push(r(p)+"scale(",null,",",null,")");_.push({i:g-4,x:Je(c,u)},{i:g-2,x:Je(h,d)})}else(u!==1||d!==1)&&p.push(r(p)+"scale("+u+","+d+")")}return function(c,h){var u=[],d=[];return c=n(c),h=n(h),s(c.translateX,c.translateY,h.translateX,h.translateY,u,d),a(c.rotate,h.rotate,u,d),o(c.skewX,h.skewX,u,d),l(c.scaleX,c.scaleY,h.scaleX,h.scaleY,u,d),c=h=null,function(p){for(var _=-1,g=d.length,m;++_<g;)u[(m=d[_]).i]=m.x(p);return u.join("")}}}var vE=Rd(gE,"px, ","px)","deg)"),xE=Rd(_E,", ",")",")");function Pd(n){return function(t,e){var i=n((t=br(t)).h,(e=br(e)).h),r=Ee(t.s,e.s),s=Ee(t.l,e.l),a=Ee(t.opacity,e.opacity);return function(o){return t.h=i(o),t.s=r(o),t.l=s(o),t.opacity=a(o),t+""}}}const bE=Pd(Nc);var yE=Pd(Ee);function SE(n,t){var e=Ee((n=ql(n)).l,(t=ql(t)).l),i=Ee(n.a,t.a),r=Ee(n.b,t.b),s=Ee(n.opacity,t.opacity);return function(a){return n.l=e(a),n.a=i(a),n.b=r(a),n.opacity=s(a),n+""}}function Ld(n){return function(t,e){var i=n((t=jl(t)).h,(e=jl(e)).h),r=Ee(t.c,e.c),s=Ee(t.l,e.l),a=Ee(t.opacity,e.opacity);return function(o){return t.h=i(o),t.c=r(o),t.l=s(o),t.opacity=a(o),t+""}}}const EE=Ld(Nc);var ME=Ld(Ee);function Dd(n){return(function t(e){e=+e;function i(r,s){var a=n((r=Zl(r)).h,(s=Zl(s)).h),o=Ee(r.s,s.s),l=Ee(r.l,s.l),c=Ee(r.opacity,s.opacity);return function(h){return r.h=a(h),r.s=o(h),r.l=l(Math.pow(h,e)),r.opacity=c(h),r+""}}return i.gamma=t,i})(1)}const wE=Dd(Nc);var AE=Dd(Ee),yr=0,Vr=0,Br=0,Id=1e3,wa,Gr,Aa=0,Di=0,Ha=0,is=typeof performance=="object"&&performance.now?performance:Date,Nd=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Fc(){return Di||(Nd(TE),Di=is.now()+Ha)}function TE(){Di=0}function Ta(){this._call=this._time=this._next=null}Ta.prototype=Ud.prototype={constructor:Ta,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?Fc():+e)+(t==null?0:+t),!this._next&&Gr!==this&&(Gr?Gr._next=this:wa=this,Gr=this),this._call=n,this._time=e,Ql()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ql())}};function Ud(n,t,e){var i=new Ta;return i.restart(n,t,e),i}function CE(){Fc(),++yr;for(var n=wa,t;n;)(t=Di-n._time)>=0&&n._call.call(void 0,t),n=n._next;--yr}function Au(){Di=(Aa=is.now())+Ha,yr=Vr=0;try{CE()}finally{yr=0,PE(),Di=0}}function RE(){var n=is.now(),t=n-Aa;t>Id&&(Ha-=t,Aa=n)}function PE(){for(var n,t=wa,e,i=1/0;t;)t._call?(i>t._time&&(i=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:wa=e);Gr=n,Ql(i)}function Ql(n){if(!yr){Vr&&(Vr=clearTimeout(Vr));var t=n-Di;t>24?(n<1/0&&(Vr=setTimeout(Au,n-is.now()-Ha)),Br&&(Br=clearInterval(Br))):(Br||(Aa=is.now(),Br=setInterval(RE,Id)),yr=1,Nd(Au))}}function Tu(n,t,e){var i=new Ta;return t=t==null?0:+t,i.restart(r=>{i.stop(),n(r+t)},t,e),i}var LE=id("start","end","cancel","interrupt"),DE=[],Fd=0,Cu=1,tc=2,la=3,Ru=4,ec=5,ca=6;function Va(n,t,e,i,r,s){var a=n.__transition;if(!a)n.__transition={};else if(e in a)return;IE(n,e,{name:t,index:i,group:r,on:LE,tween:DE,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:Fd})}function Oc(n,t){var e=fn(n,t);if(e.state>Fd)throw new Error("too late; already scheduled");return e}function An(n,t){var e=fn(n,t);if(e.state>la)throw new Error("too late; already running");return e}function fn(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function IE(n,t,e){var i=n.__transition,r;i[t]=e,e.timer=Ud(s,0,e.time);function s(c){e.state=Cu,e.timer.restart(a,e.delay,e.time),e.delay<=c&&a(c-e.delay)}function a(c){var h,u,d,p;if(e.state!==Cu)return l();for(h in i)if(p=i[h],p.name===e.name){if(p.state===la)return Tu(a);p.state===Ru?(p.state=ca,p.timer.stop(),p.on.call("interrupt",n,n.__data__,p.index,p.group),delete i[h]):+h<t&&(p.state=ca,p.timer.stop(),p.on.call("cancel",n,n.__data__,p.index,p.group),delete i[h])}if(Tu(function(){e.state===la&&(e.state=Ru,e.timer.restart(o,e.delay,e.time),o(c))}),e.state=tc,e.on.call("start",n,n.__data__,e.index,e.group),e.state===tc){for(e.state=la,r=new Array(d=e.tween.length),h=0,u=-1;h<d;++h)(p=e.tween[h].value.call(n,n.__data__,e.index,e.group))&&(r[++u]=p);r.length=u+1}}function o(c){for(var h=c<e.duration?e.ease.call(null,c/e.duration):(e.timer.restart(l),e.state=ec,1),u=-1,d=r.length;++u<d;)r[u].call(n,h);e.state===ec&&(e.on.call("end",n,n.__data__,e.index,e.group),l())}function l(){e.state=ca,e.timer.stop(),delete i[t];for(var c in i)return;delete n.__transition}}function NE(n,t){var e=n.__transition,i,r,s=!0,a;if(e){t=t==null?null:t+"";for(a in e){if((i=e[a]).name!==t){s=!1;continue}r=i.state>tc&&i.state<ec,i.state=ca,i.timer.stop(),i.on.call(r?"interrupt":"cancel",n,n.__data__,i.index,i.group),delete e[a]}s&&delete n.__transition}}function UE(n){return this.each(function(){NE(this,n)})}function FE(n,t){var e,i;return function(){var r=An(this,n),s=r.tween;if(s!==e){i=e=s;for(var a=0,o=i.length;a<o;++a)if(i[a].name===t){i=i.slice(),i.splice(a,1);break}}r.tween=i}}function OE(n,t,e){var i,r;if(typeof e!="function")throw new Error;return function(){var s=An(this,n),a=s.tween;if(a!==i){r=(i=a).slice();for(var o={name:t,value:e},l=0,c=r.length;l<c;++l)if(r[l].name===t){r[l]=o;break}l===c&&r.push(o)}s.tween=r}}function kE(n,t){var e=this._id;if(n+="",arguments.length<2){for(var i=fn(this.node(),e).tween,r=0,s=i.length,a;r<s;++r)if((a=i[r]).name===n)return a.value;return null}return this.each((t==null?FE:OE)(e,n,t))}function kc(n,t,e){var i=n._id;return n.each(function(){var r=An(this,i);(r.value||(r.value={}))[t]=e.apply(this,arguments)}),function(r){return fn(r,i).value[t]}}function Od(n,t){var e;return(typeof t=="number"?Je:t instanceof Li?ns:(e=Li(t))?(t=e,ns):Td)(n,t)}function BE(n){return function(){this.removeAttribute(n)}}function zE(n){return function(){this.removeAttributeNS(n.space,n.local)}}function HE(n,t,e){var i,r=e+"",s;return function(){var a=this.getAttribute(n);return a===r?null:a===i?s:s=t(i=a,e)}}function VE(n,t,e){var i,r=e+"",s;return function(){var a=this.getAttributeNS(n.space,n.local);return a===r?null:a===i?s:s=t(i=a,e)}}function GE(n,t,e){var i,r,s;return function(){var a,o=e(this),l;return o==null?void this.removeAttribute(n):(a=this.getAttribute(n),l=o+"",a===l?null:a===i&&l===r?s:(r=l,s=t(i=a,o)))}}function WE(n,t,e){var i,r,s;return function(){var a,o=e(this),l;return o==null?void this.removeAttributeNS(n.space,n.local):(a=this.getAttributeNS(n.space,n.local),l=o+"",a===l?null:a===i&&l===r?s:(r=l,s=t(i=a,o)))}}function XE(n,t){var e=ka(n),i=e==="transform"?xE:Od;return this.attrTween(n,typeof t=="function"?(e.local?WE:GE)(e,i,kc(this,"attr."+n,t)):t==null?(e.local?zE:BE)(e):(e.local?VE:HE)(e,i,t))}function $E(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function YE(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function qE(n,t){var e,i;function r(){var s=t.apply(this,arguments);return s!==i&&(e=(i=s)&&YE(n,s)),e}return r._value=t,r}function jE(n,t){var e,i;function r(){var s=t.apply(this,arguments);return s!==i&&(e=(i=s)&&$E(n,s)),e}return r._value=t,r}function ZE(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var i=ka(n);return this.tween(e,(i.local?qE:jE)(i,t))}function KE(n,t){return function(){Oc(this,n).delay=+t.apply(this,arguments)}}function JE(n,t){return t=+t,function(){Oc(this,n).delay=t}}function QE(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?KE:JE)(t,n)):fn(this.node(),t).delay}function tM(n,t){return function(){An(this,n).duration=+t.apply(this,arguments)}}function eM(n,t){return t=+t,function(){An(this,n).duration=t}}function nM(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?tM:eM)(t,n)):fn(this.node(),t).duration}function iM(n,t){if(typeof t!="function")throw new Error;return function(){An(this,n).ease=t}}function rM(n){var t=this._id;return arguments.length?this.each(iM(t,n)):fn(this.node(),t).ease}function sM(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;An(this,n).ease=e}}function aM(n){if(typeof n!="function")throw new Error;return this.each(sM(this._id,n))}function oM(n){typeof n!="function"&&(n=ad(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=i[r]=[],l,c=0;c<a;++c)(l=s[c])&&n.call(l,l.__data__,c,s)&&o.push(l);return new $n(i,this._parents,this._name,this._id)}function lM(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,i=t.length,r=e.length,s=Math.min(i,r),a=new Array(i),o=0;o<s;++o)for(var l=t[o],c=e[o],h=l.length,u=a[o]=new Array(h),d,p=0;p<h;++p)(d=l[p]||c[p])&&(u[p]=d);for(;o<i;++o)a[o]=t[o];return new $n(a,this._parents,this._name,this._id)}function cM(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function hM(n,t,e){var i,r,s=cM(t)?Oc:An;return function(){var a=s(this,n),o=a.on;o!==i&&(r=(i=o).copy()).on(t,e),a.on=r}}function uM(n,t){var e=this._id;return arguments.length<2?fn(this.node(),e).on.on(n):this.each(hM(e,n,t))}function fM(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function dM(){return this.on("end.remove",fM(this._id))}function pM(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Rc(n));for(var i=this._groups,r=i.length,s=new Array(r),a=0;a<r;++a)for(var o=i[a],l=o.length,c=s[a]=new Array(l),h,u,d=0;d<l;++d)(h=o[d])&&(u=n.call(h,h.__data__,d,o))&&("__data__"in h&&(u.__data__=h.__data__),c[d]=u,Va(c[d],t,e,d,c,fn(h,e)));return new $n(s,this._parents,t,e)}function mM(n){var t=this._name,e=this._id;typeof n!="function"&&(n=sd(n));for(var i=this._groups,r=i.length,s=[],a=[],o=0;o<r;++o)for(var l=i[o],c=l.length,h,u=0;u<c;++u)if(h=l[u]){for(var d=n.call(h,h.__data__,u,l),p,_=fn(h,e),g=0,m=d.length;g<m;++g)(p=d[g])&&Va(p,t,e,g,d,_);s.push(d),a.push(h)}return new $n(s,a,t,e)}var gM=hs.prototype.constructor;function _M(){return new gM(this._groups,this._parents)}function vM(n,t){var e,i,r;return function(){var s=vr(this,n),a=(this.style.removeProperty(n),vr(this,n));return s===a?null:s===e&&a===i?r:r=t(e=s,i=a)}}function kd(n){return function(){this.style.removeProperty(n)}}function xM(n,t,e){var i,r=e+"",s;return function(){var a=vr(this,n);return a===r?null:a===i?s:s=t(i=a,e)}}function bM(n,t,e){var i,r,s;return function(){var a=vr(this,n),o=e(this),l=o+"";return o==null&&(l=o=(this.style.removeProperty(n),vr(this,n))),a===l?null:a===i&&l===r?s:(r=l,s=t(i=a,o))}}function yM(n,t){var e,i,r,s="style."+t,a="end."+s,o;return function(){var l=An(this,n),c=l.on,h=l.value[s]==null?o||(o=kd(t)):void 0;(c!==e||r!==h)&&(i=(e=c).copy()).on(a,r=h),l.on=i}}function SM(n,t,e){var i=(n+="")=="transform"?vE:Od;return t==null?this.styleTween(n,vM(n,i)).on("end.style."+n,kd(n)):typeof t=="function"?this.styleTween(n,bM(n,i,kc(this,"style."+n,t))).each(yM(this._id,n)):this.styleTween(n,xM(n,i,t),e).on("end.style."+n,null)}function EM(n,t,e){return function(i){this.style.setProperty(n,t.call(this,i),e)}}function MM(n,t,e){var i,r;function s(){var a=t.apply(this,arguments);return a!==r&&(i=(r=a)&&EM(n,a,e)),i}return s._value=t,s}function wM(n,t,e){var i="style."+(n+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(t==null)return this.tween(i,null);if(typeof t!="function")throw new Error;return this.tween(i,MM(n,t,e??""))}function AM(n){return function(){this.textContent=n}}function TM(n){return function(){var t=n(this);this.textContent=t??""}}function CM(n){return this.tween("text",typeof n=="function"?TM(kc(this,"text",n)):AM(n==null?"":n+""))}function RM(n){return function(t){this.textContent=n.call(this,t)}}function PM(n){var t,e;function i(){var r=n.apply(this,arguments);return r!==e&&(t=(e=r)&&RM(r)),t}return i._value=n,i}function LM(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,PM(n))}function DM(){for(var n=this._name,t=this._id,e=Bd(),i=this._groups,r=i.length,s=0;s<r;++s)for(var a=i[s],o=a.length,l,c=0;c<o;++c)if(l=a[c]){var h=fn(l,t);Va(l,n,e,c,a,{time:h.time+h.delay+h.duration,delay:0,duration:h.duration,ease:h.ease})}return new $n(i,this._parents,n,e)}function IM(){var n,t,e=this,i=e._id,r=e.size();return new Promise(function(s,a){var o={value:a},l={value:function(){--r===0&&s()}};e.each(function(){var c=An(this,i),h=c.on;h!==n&&(t=(n=h).copy(),t._.cancel.push(o),t._.interrupt.push(o),t._.end.push(l)),c.on=t}),r===0&&s()})}var NM=0;function $n(n,t,e,i){this._groups=n,this._parents=t,this._name=e,this._id=i}function Bd(){return++NM}var Nn=hs.prototype;$n.prototype={constructor:$n,select:pM,selectAll:mM,selectChild:Nn.selectChild,selectChildren:Nn.selectChildren,filter:oM,merge:lM,selection:_M,transition:DM,call:Nn.call,nodes:Nn.nodes,node:Nn.node,size:Nn.size,empty:Nn.empty,each:Nn.each,on:uM,attr:XE,attrTween:ZE,style:SM,styleTween:wM,text:CM,textTween:LM,remove:dM,tween:kE,delay:QE,duration:nM,ease:rM,easeVarying:aM,end:IM,[Symbol.iterator]:Nn[Symbol.iterator]};function UM(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var FM={time:null,delay:0,duration:250,ease:UM};function OM(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function kM(n){var t,e;n instanceof $n?(t=n._id,n=n._name):(t=Bd(),(e=FM).time=Fc(),n=n==null?null:n+"");for(var i=this._groups,r=i.length,s=0;s<r;++s)for(var a=i[s],o=a.length,l,c=0;c<o;++c)(l=a[c])&&Va(l,n,t,c,a,e||OM(l,t));return new $n(i,this._parents,n,t)}hs.prototype.interrupt=UE;hs.prototype.transition=kM;function BM(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function Ca(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,i=n.slice(0,e);return[i.length>1?i[0]+i.slice(2):i,+n.slice(e+1)]}function Sr(n){return n=Ca(Math.abs(n)),n?n[1]:NaN}function zM(n,t){return function(e,i){for(var r=e.length,s=[],a=0,o=n[0],l=0;r>0&&o>0&&(l+o+1>i&&(o=Math.max(1,i-l)),s.push(e.substring(r-=o,r+o)),!((l+=o+1)>i));)o=n[a=(a+1)%n.length];return s.reverse().join(t)}}function HM(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var VM=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Ra(n){if(!(t=VM.exec(n)))throw new Error("invalid format: "+n);var t;return new Bc({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Ra.prototype=Bc.prototype;function Bc(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}Bc.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function GM(n){t:for(var t=n.length,e=1,i=-1,r;e<t;++e)switch(n[e]){case".":i=r=e;break;case"0":i===0&&(i=e),r=e;break;default:if(!+n[e])break t;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var zd;function WM(n,t){var e=Ca(n,t);if(!e)return n+"";var i=e[0],r=e[1],s=r-(zd=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,a=i.length;return s===a?i:s>a?i+new Array(s-a+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+Ca(n,Math.max(0,t+s-1))[0]}function Pu(n,t){var e=Ca(n,t);if(!e)return n+"";var i=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const Lu={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:BM,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>Pu(n*100,t),r:Pu,s:WM,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function Du(n){return n}var Iu=Array.prototype.map,Nu=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function XM(n){var t=n.grouping===void 0||n.thousands===void 0?Du:zM(Iu.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",s=n.numerals===void 0?Du:HM(Iu.call(n.numerals,String)),a=n.percent===void 0?"%":n.percent+"",o=n.minus===void 0?"−":n.minus+"",l=n.nan===void 0?"NaN":n.nan+"";function c(u){u=Ra(u);var d=u.fill,p=u.align,_=u.sign,g=u.symbol,m=u.zero,f=u.width,v=u.comma,y=u.precision,S=u.trim,C=u.type;C==="n"?(v=!0,C="g"):Lu[C]||(y===void 0&&(y=12),S=!0,C="g"),(m||d==="0"&&p==="=")&&(m=!0,d="0",p="=");var R=g==="$"?e:g==="#"&&/[boxX]/.test(C)?"0"+C.toLowerCase():"",A=g==="$"?i:/[%p]/.test(C)?a:"",N=Lu[C],E=/[defgprs%]/.test(C);y=y===void 0?6:/[gprs]/.test(C)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y));function w(I){var T=R,F=A,x,z,J;if(C==="c")F=N(I)+F,I="";else{I=+I;var G=I<0||1/I<0;if(I=isNaN(I)?l:N(Math.abs(I),y),S&&(I=GM(I)),G&&+I==0&&_!=="+"&&(G=!1),T=(G?_==="("?_:o:_==="-"||_==="("?"":_)+T,F=(C==="s"?Nu[8+zd/3]:"")+F+(G&&_==="("?")":""),E){for(x=-1,z=I.length;++x<z;)if(J=I.charCodeAt(x),48>J||J>57){F=(J===46?r+I.slice(x+1):I.slice(x))+F,I=I.slice(0,x);break}}}v&&!m&&(I=t(I,1/0));var Y=T.length+I.length+F.length,$=Y<f?new Array(f-Y+1).join(d):"";switch(v&&m&&(I=t($+I,$.length?f-F.length:1/0),$=""),p){case"<":I=T+I+F+$;break;case"=":I=T+$+I+F;break;case"^":I=$.slice(0,Y=$.length>>1)+T+I+F+$.slice(Y);break;default:I=$+T+I+F;break}return s(I)}return w.toString=function(){return u+""},w}function h(u,d){var p=c((u=Ra(u),u.type="f",u)),_=Math.max(-8,Math.min(8,Math.floor(Sr(d)/3)))*3,g=Math.pow(10,-_),m=Nu[8+_/3];return function(f){return p(g*f)+m}}return{format:c,formatPrefix:h}}var Qs,Hd,Vd;$M({thousands:",",grouping:[3],currency:["$",""]});function $M(n){return Qs=XM(n),Hd=Qs.format,Vd=Qs.formatPrefix,Qs}function YM(n){return Math.max(0,-Sr(Math.abs(n)))}function qM(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Sr(t)/3)))*3-Sr(Math.abs(n)))}function jM(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,Sr(t)-Sr(n))+1}function ZM(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}function KM(n){return function(){return n}}function JM(n){return+n}var Uu=[0,1];function rr(n){return n}function nc(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:KM(isNaN(t)?NaN:.5)}function QM(n,t){var e;return n>t&&(e=n,n=t,t=e),function(i){return Math.max(n,Math.min(t,i))}}function tw(n,t,e){var i=n[0],r=n[1],s=t[0],a=t[1];return r<i?(i=nc(r,i),s=e(a,s)):(i=nc(i,r),s=e(s,a)),function(o){return s(i(o))}}function ew(n,t,e){var i=Math.min(n.length,t.length)-1,r=new Array(i),s=new Array(i),a=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<i;)r[a]=nc(n[a],n[a+1]),s[a]=e(t[a],t[a+1]);return function(o){var l=s1(n,o,1,i)-1;return s[l](r[l](o))}}function nw(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function iw(){var n=Uu,t=Uu,e=Uc,i,r,s,a=rr,o,l,c;function h(){var d=Math.min(n.length,t.length);return a!==rr&&(a=QM(n[0],n[d-1])),o=d>2?ew:tw,l=c=null,u}function u(d){return d==null||isNaN(d=+d)?s:(l||(l=o(n.map(i),t,e)))(i(a(d)))}return u.invert=function(d){return a(r((c||(c=o(t,n.map(i),Je)))(d)))},u.domain=function(d){return arguments.length?(n=Array.from(d,JM),h()):n.slice()},u.range=function(d){return arguments.length?(t=Array.from(d),h()):t.slice()},u.rangeRound=function(d){return t=Array.from(d),e=mE,h()},u.clamp=function(d){return arguments.length?(a=d?!0:rr,h()):a!==rr},u.interpolate=function(d){return arguments.length?(e=d,h()):e},u.unknown=function(d){return arguments.length?(s=d,u):s},function(d,p){return i=d,r=p,h()}}function rw(){return iw()(rr,rr)}function sw(n,t,e,i){var r=h1(n,t,e),s;switch(i=Ra(i??",f"),i.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(t));return i.precision==null&&!isNaN(s=qM(r,a))&&(i.precision=s),Vd(i,a)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=jM(r,Math.max(Math.abs(n),Math.abs(t))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=YM(r))&&(i.precision=s-(i.type==="%")*2);break}}return Hd(i)}function aw(n){var t=n.domain;return n.ticks=function(e){var i=t();return c1(i[0],i[i.length-1],e??10)},n.tickFormat=function(e,i){var r=t();return sw(r[0],r[r.length-1],e??10,i)},n.nice=function(e){e==null&&(e=10);var i=t(),r=0,s=i.length-1,a=i[r],o=i[s],l,c,h=10;for(o<a&&(c=a,a=o,o=c,c=r,r=s,s=c);h-- >0;){if(c=$l(a,o,e),c===l)return i[r]=a,i[s]=o,t(i);if(c>0)a=Math.floor(a/c)*c,o=Math.ceil(o/c)*c;else if(c<0)a=Math.ceil(a*c)/c,o=Math.floor(o*c)/c;else break;l=c}return n},n}function zc(){var n=rw();return n.copy=function(){return nw(n,zc())},ZM.apply(n,arguments),aw(n)}function Wr(n,t,e){this.k=n,this.x=t,this.y=e}Wr.prototype={constructor:Wr,scale:function(n){return n===1?this:new Wr(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new Wr(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Wr.prototype;var Te;(function(n){n.RGB="RGB",n.HSL="HSL",n.HSL_LONG="HSL_LONG",n.HSV="HSV",n.HSV_LONG="HSV_LONG",n.HCL="HCL",n.HCL_LONG="HCL_LONG",n.LAB="LAB",n.CUBEHELIX="CUBEHELIX",n.CUBEHELIX_LONG="CUBEHELIX_LONG"})(Te||(Te={}));function Hc(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function Gd(n,t){var e=Object.create(n.prototype);for(var i in t)e[i]=t[i];return e}function fs(){}var rs=.7,Pa=1/rs,hr="\\s*([+-]?\\d+)\\s*",ss="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Mn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",ow=/^#([0-9a-f]{3,8})$/,lw=new RegExp("^rgb\\("+[hr,hr,hr]+"\\)$"),cw=new RegExp("^rgb\\("+[Mn,Mn,Mn]+"\\)$"),hw=new RegExp("^rgba\\("+[hr,hr,hr,ss]+"\\)$"),uw=new RegExp("^rgba\\("+[Mn,Mn,Mn,ss]+"\\)$"),fw=new RegExp("^hsl\\("+[ss,Mn,Mn]+"\\)$"),dw=new RegExp("^hsla\\("+[ss,Mn,Mn,ss]+"\\)$"),Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Hc(fs,Ga,{copy:function(n){return Object.assign(new this.constructor,this,n)},displayable:function(){return this.rgb().displayable()},hex:Ou,formatHex:Ou,formatHsl:pw,formatRgb:ku,toString:ku});function Ou(){return this.rgb().formatHex()}function pw(){return Wd(this).formatHsl()}function ku(){return this.rgb().formatRgb()}function Ga(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=ow.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?Bu(t):e===3?new Xe(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?ta(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?ta(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=lw.exec(n))?new Xe(t[1],t[2],t[3],1):(t=cw.exec(n))?new Xe(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=hw.exec(n))?ta(t[1],t[2],t[3],t[4]):(t=uw.exec(n))?ta(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=fw.exec(n))?Vu(t[1],t[2]/100,t[3]/100,1):(t=dw.exec(n))?Vu(t[1],t[2]/100,t[3]/100,t[4]):Fu.hasOwnProperty(n)?Bu(Fu[n]):n==="transparent"?new Xe(NaN,NaN,NaN,0):null}function Bu(n){return new Xe(n>>16&255,n>>8&255,n&255,1)}function ta(n,t,e,i){return i<=0&&(n=t=e=NaN),new Xe(n,t,e,i)}function mw(n){return n instanceof fs||(n=Ga(n)),n?(n=n.rgb(),new Xe(n.r,n.g,n.b,n.opacity)):new Xe}function La(n,t,e,i){return arguments.length===1?mw(n):new Xe(n,t,e,i??1)}function Xe(n,t,e,i){this.r=+n,this.g=+t,this.b=+e,this.opacity=+i}Hc(Xe,La,Gd(fs,{brighter:function(n){return n=n==null?Pa:Math.pow(Pa,n),new Xe(this.r*n,this.g*n,this.b*n,this.opacity)},darker:function(n){return n=n==null?rs:Math.pow(rs,n),new Xe(this.r*n,this.g*n,this.b*n,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:zu,formatHex:zu,formatRgb:Hu,toString:Hu}));function zu(){return"#"+qo(this.r)+qo(this.g)+qo(this.b)}function Hu(){var n=this.opacity;return n=isNaN(n)?1:Math.max(0,Math.min(1,n)),(n===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(n===1?")":", "+n+")")}function qo(n){return n=Math.max(0,Math.min(255,Math.round(n)||0)),(n<16?"0":"")+n.toString(16)}function Vu(n,t,e,i){return i<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new mn(n,t,e,i)}function Wd(n){if(n instanceof mn)return new mn(n.h,n.s,n.l,n.opacity);if(n instanceof fs||(n=Ga(n)),!n)return new mn;if(n instanceof mn)return n;n=n.rgb();var t=n.r/255,e=n.g/255,i=n.b/255,r=Math.min(t,e,i),s=Math.max(t,e,i),a=NaN,o=s-r,l=(s+r)/2;return o?(t===s?a=(e-i)/o+(e<i)*6:e===s?a=(i-t)/o+2:a=(t-e)/o+4,o/=l<.5?s+r:2-s-r,a*=60):o=l>0&&l<1?0:a,new mn(a,o,l,n.opacity)}function gw(n,t,e,i){return arguments.length===1?Wd(n):new mn(n,t,e,i??1)}function mn(n,t,e,i){this.h=+n,this.s=+t,this.l=+e,this.opacity=+i}Hc(mn,gw,Gd(fs,{brighter:function(n){return n=n==null?Pa:Math.pow(Pa,n),new mn(this.h,this.s,this.l*n,this.opacity)},darker:function(n){return n=n==null?rs:Math.pow(rs,n),new mn(this.h,this.s,this.l*n,this.opacity)},rgb:function(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,i=e+(e<.5?e:1-e)*t,r=2*e-i;return new Xe(jo(n>=240?n-240:n+120,r,i),jo(n,r,i),jo(n<120?n+240:n-120,r,i),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var n=this.opacity;return n=isNaN(n)?1:Math.max(0,Math.min(1,n)),(n===1?"hsl(":"hsla(")+(this.h||0)+", "+(this.s||0)*100+"%, "+(this.l||0)*100+"%"+(n===1?")":", "+n+")")}}));function jo(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}var ic=.7,Gu=1/ic;function _w(n){if(n instanceof ai)return new ai(n.h,n.s,n.v,n.opacity);n instanceof La||(n=La(n));var t=n.r/255,e=n.g/255,i=n.b/255,r=Math.min(t,e,i),s=Math.max(t,e,i),a=s-r,o=NaN,l=a/s,c=s;return a&&(t===s?o=(e-i)/a+(e<i)*6:e===s?o=(i-t)/a+2:o=(t-e)/a+4,o*=60),new ai(o,l,c,n.opacity)}function on(n,t,e,i){return arguments.length===1?_w(n):new ai(n,t,e,i??1)}function ai(n,t,e,i){this.h=+n,this.s=+t,this.v=+e,this.opacity=+i}var ds=ai.prototype=on.prototype=Object.create(Ga.prototype);ds.constructor=ai;ds.brighter=function(n){return n=n==null?Gu:Math.pow(Gu,n),new ai(this.h,this.s,this.v*n,this.opacity)};ds.darker=function(n){return n=n==null?ic:Math.pow(ic,n),new ai(this.h,this.s,this.v*n,this.opacity)};ds.rgb=function(){var n=isNaN(this.h)?0:this.h%360+(this.h<0)*360,t=isNaN(this.h)||isNaN(this.s)?0:this.s,e=this.v,i=this.opacity,r=e*t,s=r*(1-Math.abs(n/60%2-1)),a=e-r;return n<60?tr(r,s,0,a,i):n<120?tr(s,r,0,a,i):n<180?tr(0,r,s,a,i):n<240?tr(0,s,r,a,i):n<300?tr(s,0,r,a,i):tr(r,0,s,a,i)};ds.displayable=function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.v&&this.v<=1&&0<=this.opacity&&this.opacity<=1};function tr(n,t,e,i,r){return La((n+i)*255,(t+i)*255,(e+i)*255,r)}function Xd(n){return function(){return n}}function $d(n,t){return function(e){return n+e*t}}function vw(n,t){var e=t-n;return e?$d(n,e>180||e<-180?e-360*Math.round(e/360):e):Xd(isNaN(n)?t:n)}function ha(n,t){var e=t-n;return e?$d(n,e):Xd(isNaN(n)?t:n)}function Yd(n){return function(t,e){var i=n((t=on(t)).h,(e=on(e)).h),r=ha(t.s,e.s),s=ha(t.v,e.v),a=ha(t.opacity,e.opacity);return function(o){return t.h=i(o),t.s=r(o),t.v=s(o),t.opacity=a(o),t+""}}}const xw=Yd(vw);var bw=Yd(ha);function rc(n,t,e,i){for(let s=0;s<10;s++)n.beginPath(),n.strokeStyle=s%2===0?"white":"black",n.arc(t,e,i,s/10*(2*Math.PI),(s+1)/10*(2*Math.PI)),n.stroke()}class Wa{constructor(t){if(t)typeof t=="string"?this.parent=document.querySelector(t):this.parent=t;else throw"No element given!"}}class er extends Wa{constructor(t,e){super(t),this.callbacks=new Map,this.callbackCounter=0;const r=Object.assign({label:void 0,initialValue:0,min:void 0,max:void 0,step:1,integerOnly:!0},e);this.parent.classList.add("tfe-number-input-field-root"),this.input=document.createElement("input"),this.input.classList.add("tfe-number-input-field-input"),this.input.type="number",r.min!==void 0&&(this.input.min=r.min.toString(),this.min=r.min),r.max!==void 0&&(this.input.max=r.max.toString(),this.max=r.max),this.input.step=r.step.toString(),this.step=r.step,this.integerOnly=r.integerOnly,this.setValue(r.initialValue),r.label?(this.label=document.createElement("label"),this.label.classList.add("tfe-number-input-field-label"),this.label.innerText=r.label,this.label.appendChild(this.input),this.parent.appendChild(this.label)):this.parent.appendChild(this.input),this.setUpEventListeners()}addListener(t){const e=this.callbackCounter++;return this.callbacks.set(e,t),t(this.value),e}removeListener(t){this.callbacks.delete(t)}getValue(){return this.value}setValue(t,e=!0){if(t===this.value)return;let i=t;this.min!==void 0&&t<this.min?i=this.min:this.max!==void 0&&t>this.max&&(i=this.max),this.value=this.integerOnly?Math.round(i):i,this.input.valueAsNumber=this.value,e&&this.callbacks.forEach(r=>{r(this.value)})}validateInput(){return this.min!==void 0&&this.input.valueAsNumber<this.min?this.input.valueAsNumber=this.min:this.max!==void 0&&this.input.valueAsNumber>this.max&&(this.input.valueAsNumber=this.max),Number.isFinite(this.input.valueAsNumber)?this.input.valueAsNumber:null}validateFinalInput(){return this.validateInput()===null?(this.input.valueAsNumber=this.min,this.min):null}setUpEventListeners(){this.input.addEventListener("wheel",t=>{t.preventDefault(),t.deltaY>0?this.setValue(this.value-this.step):t.deltaY<0&&this.setValue(this.value+this.step)}),this.input.addEventListener("input",()=>{const t=this.validateInput();t!==null&&this.setValue(t)}),this.input.addEventListener("focusout",()=>{const t=this.validateFinalInput();t!==null&&this.setValue(t)}),this.input.addEventListener("keypress",t=>{if(t.key==="Enter"){const e=this.validateFinalInput();e!==null&&this.setValue(e)}})}}class yw extends Wa{constructor(t,e){super(t),this.CANVAS_SIZE=256,this.controlPointSize=7,this.callbacks=new Map,this.callbackCounter=0;const r=Object.assign({initialColor:"#FFF"},e);this.hsv=on(r.initialColor),Number.isNaN(this.hsv.h)&&(this.hsv.h=180),Number.isNaN(this.hsv.s)&&(this.hsv.s=1),this.backUpHue=this.hsv.h,this.backUpSaturation=this.hsv.s,this.parent.classList.add("tfe-color-picker"),this.parent.innerHTML=`
      <div class="tfe-color-picker-root">
        <div class="tfe-color-picker-sl-picker" style="width: ${this.CANVAS_SIZE}px; height: ${this.CANVAS_SIZE}px">
          <canvas class="tfe-color-picker-sl-picker-canvas" width="${this.CANVAS_SIZE}" height="${this.CANVAS_SIZE}" />
        </div>
        <div class="tfe-color-picker-h-picker"  style="height: ${this.CANVAS_SIZE}px">
          <canvas class="tfe-color-picker-h-picker-canvas" width="18" height="${this.CANVAS_SIZE}" />
        </div>
        <form class="tfe-color-picker-input-root">
          <div class="tfe-color-preview" style="background: ${this.getHEX()}"></div>
          <div></div>
          <div class="tfe-color-picker-h-input"></div>
          <div class="tfe-color-picker-s-input"></div>
          <div class="tfe-color-picker-v-input"></div>
          <div></div>
          <div class="tfe-color-picker-r-input"></div>
          <div class="tfe-color-picker-g-input"></div>
          <div class="tfe-color-picker-b-input"></div>
          <div></div>
          <label>hex:
            <input class="tfe-color-picker-hex-input" type="text" minlength="4" maxlength="7" value="${this.getHEX()}">
          </label>
        </form>
      </div>
    `,this.svCanvas=this.parent.querySelector(".tfe-color-picker-sl-picker-canvas"),this.svContext=this.svCanvas.getContext("2d",{alpha:!1}),this.drawSVPicker(),this.addSVEventListener(),this.hCanvas=this.parent.querySelector(".tfe-color-picker-h-picker-canvas"),this.hCanvas.style.background="linear-gradient(#f00, #f0f, #00f, #0ff, #0f0, #ff0, #f00)",this.hContext=this.hCanvas.getContext("2d",{alpha:!0}),this.drawHPicker(),this.addHEventListener(),this.previewElement=this.parent.querySelector(".tfe-color-preview"),this.inputFields={h:new er(this.parent.querySelector(".tfe-color-picker-h-input"),{label:"h: ",min:0,max:360,initialValue:this.hsv.h}),s:new er(this.parent.querySelector(".tfe-color-picker-s-input"),{label:"s: ",min:0,max:100,initialValue:this.hsv.s*100}),v:new er(this.parent.querySelector(".tfe-color-picker-v-input"),{label:"v: ",min:0,max:100,initialValue:this.hsv.v*100}),r:new er(this.parent.querySelector(".tfe-color-picker-r-input"),{label:"r: ",min:0,max:255,initialValue:this.hsv.rgb().r}),g:new er(this.parent.querySelector(".tfe-color-picker-g-input"),{label:"g: ",min:0,max:255,initialValue:this.hsv.rgb().g}),b:new er(this.parent.querySelector(".tfe-color-picker-b-input"),{label:"b: ",min:0,max:255,initialValue:this.hsv.rgb().b}),hex:this.parent.querySelector(".tfe-color-picker-hex-input")},this.addInputEventListeners()}addListener(t){const e=this.callbackCounter++;return this.callbacks.set(e,t),t(this),e}removeListener(t){this.callbacks.delete(t)}setHEX(t){this.hsv=on(t),this.validateHueAndSaturation(),this.sendUpdate(),this.updateAll()}setRGB(t,e,i){this.hsv=on(`rgb(${t},${e},${i})`),this.validateHueAndSaturation(),this.sendUpdate(),this.updateAll()}setRGBNormalized(t,e,i){this.setRGB(t*255,e*255,i*255)}setHSL(t,e,i){this.hsv=on(`hsl(${t} ${e} ${i})`),this.validateHueAndSaturation(),this.sendUpdate(),this.updateAll()}setHSLNormalized(t,e,i){this.setHSL(t*360,e*100,i*100)}setHSV(t,e,i){this.hsv=on(t,e,i),this.validateHueAndSaturation(),this.sendUpdate(),this.updateAll()}setHSVNormalized(t,e,i){this.setHSV(t*360,e*100,i*100)}getHEX(){return this.hsv.formatHex()}getRGB(){const t=this.hsv.rgb();return{r:t.r,g:t.g,b:t.b}}getRGBNormalized(){const t=this.hsv.rgb();return{r:t.r/255,g:t.g/255,b:t.b/255}}getHSL(){const t=br(this.hsv.formatHsl());return{h:t.h,s:t.s*100,l:t.l*100}}getHSLNormalized(){const t=br(this.hsv.formatHsl());return{h:t.h/360,s:t.s,l:t.l}}getHSV(){return{h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100}}getHSVNormalized(){return{h:this.hsv.h/360,s:this.hsv.s,v:this.hsv.v}}getColor(){const t=this.getRGB(),e=this.getHSL(),i=this.getHSV(),r=this.getHEX();return{rgb:t,hsl:e,hsv:i,hex:r}}getColorNormalized(){const t=this.getRGBNormalized(),e=this.getHSLNormalized(),i=this.getHSVNormalized(),r=this.getHEX();return{rgb:t,hsl:e,hsv:i,hex:r}}sendUpdate(){this.previewElement.style.backgroundColor=this.getHEX(),this.callbacks.forEach(t=>{t(this)})}updateAll(){this.drawAll(),this.updateInputFields()}drawAll(){this.drawHPicker(),this.drawSVPicker()}drawSVPicker(){this.svContext.fillStyle=on(this.hsv.h,1,1).formatHex(),this.svContext.fillRect(0,0,this.CANVAS_SIZE,this.CANVAS_SIZE);const t=this.svContext.createLinearGradient(0,this.CANVAS_SIZE/2,this.CANVAS_SIZE,this.CANVAS_SIZE/2);t.addColorStop(0,"rgb(255, 255, 255)"),t.addColorStop(1,"rgb(255, 255, 255, 0)"),this.svContext.fillStyle=t,this.svContext.fillRect(0,0,this.CANVAS_SIZE,this.CANVAS_SIZE);const e=this.svContext.createLinearGradient(this.CANVAS_SIZE/2,this.CANVAS_SIZE,this.CANVAS_SIZE/2,0);e.addColorStop(0,"rgb(0, 0, 0)"),e.addColorStop(1,"rgb(0, 0, 0, 0)"),this.svContext.fillStyle=e,this.svContext.fillRect(0,0,this.CANVAS_SIZE,this.CANVAS_SIZE);const i=this.hsv.s*this.CANVAS_SIZE,r=(1-this.hsv.v)*this.CANVAS_SIZE;rc(this.svContext,i,r,this.controlPointSize)}drawHPicker(){this.hContext.clearRect(0,0,this.hCanvas.width,this.hCanvas.height);const t=this.hCanvas.width/2,e=(1-this.hsv.h/360)*this.hCanvas.height;rc(this.hContext,t,e,this.controlPointSize)}addSVEventListener(){let t=!1,e=null;const i=(r,s)=>{this.hsv.s=Zo(r/this.CANVAS_SIZE,0,1),this.backUpSaturation=this.hsv.s,this.hsv.v=Zo(1-s/this.CANVAS_SIZE,0,1),this.sendUpdate(),this.drawSVPicker(),this.updateHSVInputFields(),this.updateRGBInputFields(),this.updateHEXInputField()};this.svCanvas.addEventListener("mousedown",r=>{r.button===0&&(e=new AbortController,document.addEventListener("mousemove",s=>{s.preventDefault(),i(s.clientX-this.svCanvas.getBoundingClientRect().x,s.clientY-this.svCanvas.getBoundingClientRect().y)},{signal:e.signal}),t=!0,i(r.offsetX,r.offsetY))}),document.addEventListener("mouseup",()=>{t&&e&&(e.abort(),e=null,t=!1)})}addHEventListener(){let t=!1,e=null;const i=r=>{this.hsv.h=Zo(Math.round((1-r/this.CANVAS_SIZE)*360),0,360),this.backUpHue=this.hsv.h,this.sendUpdate(),this.drawAll(),this.inputFields.h.setValue(this.hsv.h),this.updateRGBInputFields(),this.updateHEXInputField()};this.hCanvas.addEventListener("mousedown",r=>{e=new AbortController,document.addEventListener("mousemove",s=>{s.preventDefault(),i(s.clientY-this.svCanvas.getBoundingClientRect().y)},{signal:e.signal}),t=!0,i(r.offsetY)}),document.addEventListener("mouseup",()=>{t&&e&&(e.abort(),e=null,t=!1)})}addInputEventListeners(){this.setupNumberInputListeners(),this.setupHEXListeners()}setupNumberInputListeners(){let t=!1;const e=()=>{t||(t=!0,this.sendUpdate(),this.drawAll(),this.updateRGBInputFields(),this.updateHEXInputField(),t=!1)},i=(r,s,a)=>{t||(t=!0,this.hsv=on(`rgb(${Math.round(r)},${Math.round(s)},${Math.round(a)})`),this.validateHueAndSaturation(),this.sendUpdate(),this.drawAll(),this.updateHSVInputFields(),this.updateHEXInputField(),t=!1)};this.inputFields.h.addListener(r=>{r!==this.hsv.h&&(this.hsv.h=r,this.backUpHue=r,e())}),this.inputFields.s.addListener(r=>{r!==this.hsv.s&&(this.hsv.s=r/100,this.backUpSaturation=this.hsv.s,e())}),this.inputFields.v.addListener(r=>{r!==this.hsv.v&&(this.hsv.v=r/100,e())}),this.inputFields.r.addListener(r=>{const s=this.hsv.rgb();r!==s.r&&i(r,s.g,s.b)}),this.inputFields.g.addListener(r=>{const s=this.hsv.rgb();r!==s.g&&i(s.r,r,s.b)}),this.inputFields.b.addListener(r=>{const s=this.hsv.rgb();r!==s.b&&i(s.r,s.g,r)})}setupHEXListeners(){this.inputFields.hex.addEventListener("input",t=>{const e=t.currentTarget,i=e.value;i.match(/#([0-7a-fA-F]{3}$|[0-7a-fA-F]{6}$)/)?(this.hsv=on(i),this.validateHueAndSaturation(),this.sendUpdate(),this.drawAll(),this.updateRGBInputFields(),this.updateHSVInputFields(),e.classList.remove("tfe-color-picker-input-hex-invalid")):e.classList.add("tfe-color-picker-input-hex-invalid")}),this.inputFields.hex.addEventListener("focusout",t=>{const e=t.currentTarget;e.value.match(/#([0-7a-fA-F]{3}$|[0-7a-fA-F]{6}$)/)||(e.value=this.getHEX(),e.classList.remove("tfe-color-picker-input-hex-invalid"))})}updateInputFields(){this.updateHSVInputFields(),this.updateRGBInputFields(),this.updateHEXInputField()}updateHSVInputFields(){this.inputFields.h.setValue(this.hsv.h,!1),this.inputFields.s.setValue(this.hsv.s*100,!1),this.inputFields.v.setValue(this.hsv.v*100,!1)}updateRGBInputFields(){const t=this.hsv.rgb();this.inputFields.r.setValue(t.r,!1),this.inputFields.g.setValue(t.g,!1),this.inputFields.b.setValue(t.b,!1)}updateHEXInputField(){this.inputFields.hex.value=this.getHEX()}validateHueAndSaturation(){Number.isNaN(this.hsv.h)?this.hsv.h=this.backUpHue:this.backUpHue=this.hsv.h,Number.isNaN(this.hsv.s)?this.hsv.s=this.backUpSaturation:this.backUpSaturation=this.hsv.s}}function Zo(n,t,e){return Math.max(t,Math.min(e,n))}document.head.querySelector("#tfe-color-picker-style")===null&&document.head.insertAdjacentHTML("beforeend",`
    <style id="tfe-color-picker-style">
      .tfe-color-picker-root {
        display: flex;
        justify-content: center;
      }
    
      .tfe-color-picker-sl-picker {
        border: 1px solid grey;
      }
    
      .tfe-color-picker-h-picker {
        width: 18px;
        margin-left: 12px;
        border: 1px solid grey;
      }
    
      .tfe-color-picker-input-root {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        align-content: space-evenly;
        margin-left: 12px;
        margin-bottom: 0;
      }
    
      .tfe-color-preview {
        height: 50px;
        width: 100%;
        border: 1px solid grey;
        border-radius: 25px;
      }
    
      .tfe-color-picker-input-root > label {
        text-align: right;
      }
    
      .tfe-color-picker-input-root input {
        width: 60px;
        text-align: right;
        font-family: monospace;
      }
    
      .tfe-color-picker-input-hex-invalid:focus-visible {
        outline-color: red;
      }
    </style>`);var zr={exports:{}},Wu;function Sw(){if(Wu)return zr.exports;Wu=1;function n(s){return s===null?"null":typeof s>"u"?"undefined":typeof s=="object"?Array.isArray(s)?"array":"object":typeof s}function t(s){return n(s)==="object"?i(s):n(s)==="array"?e(s):s}function e(s){return s.map(t)}function i(s){const a={};for(const o in s)s.hasOwnProperty(o)&&(a[o]=t(s[o]));return a}function r(s,a=[],o={}){const l={arrayBehaviour:o.arrayBehaviour||"replace"},c=a.map(u=>u||{}),h=s||{};for(let u=0;u<c.length;u++){const d=c[u],p=Object.keys(d);for(let _=0;_<p.length;_++){const g=p[_],m=d[g],f=n(m),v=n(h[g]);if(f==="object")if(v!=="undefined"){const y=v==="object"?h[g]:{};h[g]=r({},[y,i(m)],l)}else h[g]=i(m);else if(f==="array")if(v==="array"){const y=e(m);h[g]=l.arrayBehaviour==="merge"?h[g].concat(y):y}else h[g]=e(m);else h[g]=m}}return h}return zr.exports=function(a,...o){return r(a,o)},zr.exports.noMutate=function(...a){return r({},a)},zr.exports.withOptions=function(a,o,l){return r(a,o,l)},zr.exports}var Ew=Sw();const Vc=wf(Ew),Ko=new WeakMap;function qd(n){if(Ko.has(n))return Ko.get(n);const t=zc().domain(n.colorStops.map(e=>e.stop)).range(n.colorStops.map(e=>e.color)).interpolate(ww(n.interpolationMethod));return Ko.set(n,t),t}function sc(n,t){const e=qd(n);return n.discrete&&n.bins?e(Math.floor(t*n.bins)/(n.bins-1)):e(t)}function Mw(n){if(!n.discrete||!n.bins)return[];const t=n.colorStops[0].stop,r=(n.colorStops[n.colorStops.length-1].stop-t)/n.bins,s=qd(n),a=[];for(let o=0;o<n.bins;o++){const l=t+o*r,c=l+r,h=(l+c)/2,u=s(Math.floor(h*n.bins)/(n.bins-1));a.push({lowerBound:l,center:h,upperBound:c,color:u})}return a}function ww(n){switch(n){case Te.RGB:return ns;case Te.HSL:return bE;case Te.HSL_LONG:return yE;case Te.HSV:return xw;case Te.HSV_LONG:return bw;case Te.HCL:return EE;case Te.HCL_LONG:return ME;case Te.LAB:return SE;case Te.CUBEHELIX:return wE;case Te.CUBEHELIX_LONG:return AE}}class Aw extends Wa{constructor(t,e){super(t),this.callbacks=new Map,this.callbackCounter=0;const i={initialColorMap:{colorStops:[{stop:0,color:"green"},{stop:.5,color:"yellow"},{stop:1,color:"red"}],interpolationMethod:Te.HSL,discrete:!1,bins:7},showStopNumbers:!1,interpolationMethodsEditable:!0,binSelectorEditable:!0,controlPointSize:7},r=Vc(i,e);this.colorStops=r.initialColorMap.colorStops,this.sortControlPoints(),this.showStopNumbers=r.showStopNumbers,this.interpolationMethod=r.initialColorMap.interpolationMethod,this.discrete=r.initialColorMap.discrete,this.bins=r.initialColorMap.bins,this.controlPointSize=r.controlPointSize,this.parent.classList.add("tfe-color-map-editor"),this.rootElement=document.createElement("div"),this.rootElement.classList.add("tfe-color-map-editor-root"),this.rootElement.style.display="flex",this.rootElement.style.flexDirection="column",this.rootElement.style.gap="5px",this.parent.appendChild(this.rootElement),this.canvas=document.createElement("canvas"),this.canvas.width=this.parent.clientWidth,this.canvas.height=this.parent.clientHeight,this.rootElement.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d",{alpha:!1}),this.colorPickerContainer=document.createElement("div"),this.colorPickerContainer.classList.add("tfe-color-map-editor-color-picker-container"),this.colorPickerContainer.style.width="fit-content",this.colorPickerContainer.style.padding="12px",this.colorPickerContainer.style.backgroundColor="white",this.colorPickerContainer.style.border="1px solid black",this.colorPickerContainer.style.visibility="hidden",this.colorPickerContainer.style.position="relative",this.parent.appendChild(this.colorPickerContainer),this.colorPicker=new yw(this.colorPickerContainer),this.setUpInputElements(r),this.draw(),this.addCanvasEventListeners()}setColorStops(t){this.colorStops=t,this.sortControlPoints(),this.draw(),this.sendUpdates()}getColorStops(){return this.colorStops}setInterpolationMethods(t){this.interpolationMethod=t,this.interpolationMethodElement&&(this.interpolationMethodElement.value=this.interpolationMethod),this.draw(),this.sendUpdates()}getInterpolationMethods(){return this.interpolationMethod}setDiscrete(t){this.discrete=t,this.discreteElement&&(this.binsElement.disabled=!this.discrete),this.draw(),this.sendUpdates()}isDiscrete(){return this.discrete}setBins(t){this.bins=Math.max(t,0),this.binsElement&&(this.binsElement.valueAsNumber=this.bins),this.draw(),this.sendUpdates()}getBins(){return this.bins}setColorMap(t){this.colorStops=t.colorStops,this.sortControlPoints(),this.discrete=t.discrete,this.bins=Math.max(t.bins||0,0),this.interpolationMethod=t.interpolationMethod,this.discreteElement&&this.binsElement&&(this.discreteElement.checked=this.discrete,this.binsElement.valueAsNumber=this.bins,this.binsElement.disabled=!this.discrete),this.interpolationMethodElement&&(this.interpolationMethodElement.value=this.interpolationMethod),this.draw(),this.sendUpdates()}getColorMap(){return{colorStops:this.colorStops,interpolationMethod:this.interpolationMethod,discrete:this.discrete||void 0,bins:this.discrete?this.bins:void 0}}getDiscreteColorMap(){return Mw(this.getColorMap())}addListener(t){const e=this.callbackCounter++;return this.callbacks.set(e,t),t(this),e}removeListener(t){this.callbacks.delete(t)}sendUpdates(){this.callbacks.forEach(t=>t(this))}sortControlPoints(){this.colorStops.sort((t,e)=>t.stop-e.stop)}draw(){for(let t=0;t<this.canvas.width;++t)this.ctx.fillStyle=sc({colorStops:this.colorStops,interpolationMethod:this.interpolationMethod,discrete:this.discrete,bins:this.bins},t/(this.canvas.width-1)),this.ctx.fillRect(t,0,1,this.canvas.height);for(let t=0;t<this.colorStops.length;t++){const e=this.colorStops[t].stop*this.canvas.width,i=.5*this.canvas.height,r=this.colorStops[t].color;if(this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.arc(e,i,this.controlPointSize,0,2*Math.PI),this.ctx.fill(),rc(this.ctx,e,i,this.controlPointSize),this.showStopNumbers){t===0?this.ctx.textAlign="left":t===this.colorStops.length-1?this.ctx.textAlign="right":this.ctx.textAlign="center";const s=br(r).l;this.ctx.fillStyle=s<.5?"white":"black",this.ctx.fillText(this.colorStops[t].stop.toPrecision(3),e,this.canvas.height-1)}}}addCanvasEventListeners(){let t=!1,e=!1,i=-1,r=null;const s=l=>{i=-1;for(let c=0;c<this.colorStops.length;c++){const h=this.colorStops[c];if(Math.abs(h.stop*this.canvas.width-l.offsetX)<this.controlPointSize){i=c,e=!0;break}}e&&(r=new AbortController,document.addEventListener("mousemove",c=>{if(c.preventDefault(),i>0&&i<this.colorStops.length-1){const h=c.clientX-this.canvas.getBoundingClientRect().x,u=this.colorStops[i-1].stop+Number.EPSILON,d=this.colorStops[i+1].stop-Number.EPSILON;this.colorStops[i].stop=Math.max(u,Math.min(d,h/this.canvas.width)),this.draw(),this.sendUpdates()}t=!0},{signal:r.signal}))};this.canvas.addEventListener("mousedown",l=>{if(t=!1,l.button===0){if(s(l),!e){const c=Math.max(0,Math.min(1,l.offsetX/this.canvas.width)),h=sc({colorStops:this.colorStops,interpolationMethod:this.interpolationMethod,discrete:this.discrete,bins:this.bins},c),u={stop:c,color:h};this.colorStops.push(u),this.sortControlPoints(),this.draw(),this.sendUpdates(),s(l)}}else if(l.button===2){l.preventDefault();for(let c=1;c<this.colorStops.length-1;c++){const u=this.colorStops[c].stop*this.canvas.width-l.offsetX,d=.5*this.canvas.height-l.offsetY;if(Math.sqrt(u*u+d*d)<this.controlPointSize){this.colorStops.splice(c,1),this.draw(),this.sendUpdates();return}}}}),this.canvas.addEventListener("contextmenu",l=>(l.preventDefault(),l.stopPropagation(),!1)),document.addEventListener("mouseup",()=>{e&&r&&(r.abort(),r=null,e=!1,i=-1)});let a=-1;this.canvas.addEventListener("click",l=>{if(t)return;l.stopPropagation();let c=null;for(let h=0;h<this.colorStops.length&&(c=this.colorStops[h],!(Math.abs(c.stop*this.canvas.width-l.offsetX)<this.controlPointSize));h++);if(c!==null){const h=this.canvas.height/2+this.canvas.getBoundingClientRect().y,u=window.innerHeight,d=this.colorPickerContainer.clientHeight;if(h+d<u){const m=this.canvas.height/2;this.colorPickerContainer.style.bottom=`${m}px`}else if(h-d>0){const m=this.canvas.height/2+d;this.colorPickerContainer.style.bottom=`${m}px`}else{const m=this.canvas.height/2+d/2;this.colorPickerContainer.style.bottom=`${m}px`}const p=c.stop*this.canvas.width+this.canvas.getBoundingClientRect().x,_=window.innerWidth,g=this.colorPickerContainer.clientWidth;if(p+g<_){const m=c.stop*this.canvas.width;this.colorPickerContainer.style.left=`${m}px`}else if(p-g>0){const m=c.stop*this.canvas.width-g;this.colorPickerContainer.style.left=`${m}px`}else{const m=c.stop*this.canvas.width-g/2;this.colorPickerContainer.style.left=`${m}px`}this.colorPickerContainer.style.visibility="visible",this.colorPicker.removeListener(a),this.colorPicker.setHEX(c.color),a=this.colorPicker.addListener(m=>{c.color=m.getHEX(),this.draw(),this.sendUpdates()})}}),document.addEventListener("click",()=>{this.colorPickerContainer.style.visibility="hidden"}),this.colorPickerContainer.addEventListener("click",l=>l.stopPropagation()),new ResizeObserver(()=>{this.canvas.width=this.parent.clientWidth,this.canvas.height=this.parent.clientHeight,this.draw()}).observe(this.parent)}setUpInputElements(t){if(!t.interpolationMethodsEditable&&!t.binSelectorEditable)return;const e=document.createElement("div");if(e.classList.add("tfe-color-map-editor-settings"),e.style.display="flex",e.style.flexDirection="row",e.style.justifyContent="space-between",e.style.alignItems="center",e.style.flexWrap="wrap",this.rootElement.appendChild(e),t.interpolationMethodsEditable){const i=document.createElement("label");i.classList.add("tfe-color-map-editor-interpolation-method-label"),i.innerText="Interpolation: ",this.interpolationMethodElement=document.createElement("select"),this.interpolationMethodElement.classList.add("tfe-color-map-editor-interpolation-method-select");for(let r of Object.keys(Te)){const s=document.createElement("option");s.classList.add("tfe-color-map-editor-interpolation-method-option"),s.value=r,s.innerText=r.replace("_"," "),this.interpolationMethodElement.options.add(s)}this.interpolationMethodElement.value=this.interpolationMethod,this.interpolationMethodElement.addEventListener("change",()=>{this.interpolationMethod=Te[this.interpolationMethodElement.value],this.draw(),this.sendUpdates()}),i.appendChild(this.interpolationMethodElement),e.appendChild(i)}if(t.binSelectorEditable){const i=document.createElement("div");i.classList.add("tfe-color-map-editor-bin-selector"),i.style.display="flex",i.style.flexDirection="row",i.style.gap="10px",i.style.alignItems="center",e.appendChild(i);const r=document.createElement("label");r.classList.add("tfe-color-map-editor-bin-selector-checkbox-label"),r.innerText="discrete: ",i.appendChild(r),this.discreteElement=document.createElement("input"),this.discreteElement.classList.add("tfe-color-map-editor-bin-selector-checkbox"),this.discreteElement.type="checkbox",this.discreteElement.checked=this.discrete,r.appendChild(this.discreteElement);const s=document.createElement("label");s.classList.add("tfe-color-map-editor-bin-selector-number-label"),s.innerText="bins: ",i.appendChild(s),this.binsElement=document.createElement("input"),this.binsElement.classList.add("tfe-color-map-editor-bin-selector-number-input"),this.binsElement.style.width="50px",this.binsElement.disabled=!this.discrete,this.binsElement.type="number",this.binsElement.min="0",this.binsElement.step="1",this.binsElement.valueAsNumber=this.bins,this.discreteElement.addEventListener("change",()=>{this.discrete=this.discreteElement.checked,this.binsElement.disabled=!this.discrete,this.draw(),this.sendUpdates()}),this.binsElement.addEventListener("change",()=>{this.bins=this.binsElement.valueAsNumber,this.draw(),this.sendUpdates()}),this.binsElement.addEventListener("wheel",o=>{o.preventDefault();let l=this.binsElement.valueAsNumber;o.deltaY>0?l=Math.max(l-1,0):o.deltaY<0&&(l=Math.max(l+1,0)),this.binsElement.valueAsNumber=Math.round(l),this.bins=this.binsElement.valueAsNumber,this.draw(),this.sendUpdates()});const a=o=>{const l=o.currentTarget;(!l.valueAsNumber||l.valueAsNumber<0)&&(l.valueAsNumber=0,this.bins=this.binsElement.valueAsNumber),this.draw(),this.sendUpdates()};this.binsElement.addEventListener("focusout",a),this.binsElement.addEventListener("keypress",o=>{o.key==="Enter"&&a(o)}),s.appendChild(this.binsElement)}}}class Tw extends Wa{constructor(t,e){super(t),this.callbacks=new Map,this.callbackCounter=0;const i={initialAlphaStops:[{stop:0,alpha:0},{stop:.5,alpha:.5},{stop:1,alpha:1}],initialColorMap:{colorStops:[{stop:0,color:"black"},{stop:1,color:"black"}],interpolationMethod:Te.RGB},controlPointSize:7,showAlphaGrid:!0,alphaGridSize:8},r=Vc(i,e);this.alphaStops=r.initialAlphaStops,this.sortControlPoints(),this.colorMap=r.initialColorMap,this.controlPointSize=r.controlPointSize,this.showAlphaGrid=r.showAlphaGrid,this.alphaGridSize=r.alphaGridSize,this.parent.classList.add("tfe-transparency-editor"),this.canvas=document.createElement("canvas"),this.canvas.width=this.parent.clientWidth,this.canvas.height=this.parent.clientHeight,this.canvas.style.imageRendering="pixelated",this.parent.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.updateAlphaRange(),this.draw(),this.addEventListeners()}addListener(t){const e=this.callbackCounter++;return this.callbacks.set(e,t),t(this),e}removeListener(t){this.callbacks.delete(t)}getTransferFunction(){return{alphaStops:this.alphaStops,colorMap:this.colorMap}}getRGB(t){return sc(this.colorMap,t)}getAlpha(t){return this.alphaRange(t)}getRGBA(t){const e=Sa(this.getRGB(t));return e.opacity=this.getAlpha(t),e.formatHex8()}addControlPoint(t,e){this.alphaStops.push({stop:t,alpha:e}),this.sortControlPoints(),this.updateAlphaRange(),this.sendUpdate(),this.draw()}removeControlPointAt(t,e){let i=-1;for(let r=1;r<this.alphaStops.length-1;r++){const s=this.alphaStops[r],a=s.stop*this.canvas.width-t,o=(1-s.alpha)*this.canvas.height-e;if(Math.sqrt(a*a+o*o)<this.controlPointSize){i=r;break}}i!==-1&&(this.alphaStops.splice(i,1),this.updateAlphaRange(),this.sendUpdate(),this.draw())}getAlphaStops(){return this.alphaStops}setAlphaStops(t){this.alphaStops=t,this.sortControlPoints(),this.updateAlphaRange(),this.sendUpdate(),this.draw()}getColorMap(){return this.colorMap}setColorMap(t){this.colorMap=t,this.sendUpdate(),this.draw()}sendUpdate(){this.callbacks.forEach(t=>t(this))}updateAlphaRange(){this.alphaRange=zc().domain(this.alphaStops.map(t=>t.stop)).range(this.alphaStops.map(t=>t.alpha)).interpolate(Je)}draw(){if(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.showAlphaGrid){this.ctx.fillStyle="#CACACA";for(let t=0;t<this.canvas.height/this.alphaGridSize;t++)for(let e=0;e<this.canvas.width/this.alphaGridSize;e++)(e%2==0&&t%2==0||e%2==1&&t%2==1)&&this.ctx.fillRect(e*this.alphaGridSize,t*this.alphaGridSize,this.alphaGridSize,this.alphaGridSize)}for(let t=0;t<this.canvas.width;++t){const e=this.getAlpha(t/(this.canvas.width-1));this.ctx.fillStyle=this.getRGBA(t/(this.canvas.width-1)),this.ctx.fillRect(t,(1-e)*this.canvas.height,1,e*this.canvas.height),this.showAlphaGrid&&this.ctx.clearRect(t,0,1,(1-e)*this.canvas.height)}this.ctx.strokeStyle="black",this.ctx.beginPath();for(let t=0;t<this.alphaStops.length;t++){const e=this.alphaStops[t].stop*this.canvas.width,i=(1-this.alphaStops[t].alpha)*this.canvas.height;t===0?this.ctx.moveTo(e,i):this.ctx.lineTo(e,i)}this.ctx.stroke(),this.ctx.fillStyle="white";for(let t=0;t<this.alphaStops.length;t++){const e=this.alphaStops[t].stop*this.canvas.width,i=(1-this.alphaStops[t].alpha)*this.canvas.height;this.ctx.strokeStyle="black",this.ctx.beginPath(),this.ctx.arc(e,i,this.controlPointSize,0,2*Math.PI),this.ctx.fill(),this.ctx.stroke()}}sortControlPoints(){this.alphaStops.sort((t,e)=>t.stop-e.stop)}pixelToNormalized(t,e){const i=Math.max(0,Math.min(1,t/this.canvas.width)),r=Math.max(0,Math.min(1,1-e/this.canvas.height));return{stop:i,alpha:r}}addEventListeners(){let t=!1,e=-1,i=null;const r=a=>{e=-1;for(let o=0;o<this.alphaStops.length;o++){const l=this.alphaStops[o],c=l.stop*this.canvas.width-a.offsetX,h=(1-l.alpha)*this.canvas.height-a.offsetY;if(Math.sqrt(c*c+h*h)<this.controlPointSize){e=o,t=!0;break}}t&&(i=new AbortController,document.addEventListener("mousemove",o=>{o.preventDefault();const l=o.clientX-this.canvas.getBoundingClientRect().x,c=o.clientY-this.canvas.getBoundingClientRect().y,{stop:h,alpha:u}=this.pixelToNormalized(l,c);if(e===0)this.alphaStops[e].alpha=u;else if(e===this.alphaStops.length-1)this.alphaStops[e].alpha=u;else{const d=this.alphaStops[e-1].stop+Number.EPSILON,p=this.alphaStops[e+1].stop-Number.EPSILON;this.alphaStops[e].stop=Math.max(d,Math.min(p,h)),this.alphaStops[e].alpha=u}this.updateAlphaRange(),this.sendUpdate(),this.draw()},{signal:i.signal}))};this.canvas.addEventListener("mousedown",a=>{if(a.button===0&&r(a),!t)if(a.button===0){const{stop:o,alpha:l}=this.pixelToNormalized(a.offsetX,a.offsetY);this.addControlPoint(o,l),r(a)}else a.button===2&&(a.preventDefault(),this.removeControlPointAt(a.offsetX,a.offsetY))}),this.canvas.addEventListener("contextmenu",a=>(a.preventDefault(),a.stopPropagation(),!1)),document.addEventListener("mouseup",()=>{t&&i&&(i.abort(),i=null,t=!1,e=-1)}),new ResizeObserver(()=>{this.canvas.width=this.parent.clientWidth,this.canvas.height=this.parent.clientHeight,this.draw()}).observe(this.parent)}}class Cw{constructor(t,e){if(this.callbacks=new Map,this.callbackCounter=0,t)typeof t=="string"?this.container=document.querySelector(t):this.container=t;else throw"No element given!";const r=Vc({},e);this.container.classList.add("tfe-transfer-function-editor");const s=document.createElement("div");s.style.width="100%",s.style.minHeight="50px",this.container.append(s),this.transparencyEditor=new Tw(s,r);const a=document.createElement("div");a.style.width="100%",a.style.minHeight="10px",this.container.append(a),this.colorMapEditor=new Aw(a,r),this.colorMapEditor.addListener(o=>this.transparencyEditor.setColorMap(o.getColorMap())),this.transparencyEditor.setColorMap(this.colorMapEditor.getColorMap()),this.transparencyEditor.addListener(()=>{this.callbacks.forEach(o=>o(this))})}addListener(t){const e=this.callbackCounter++;return this.callbacks.set(e,t),t(this),e}removeListener(t){this.callbacks.delete(t)}getAlphaStops(){return this.transparencyEditor.getAlphaStops()}setAlphaStops(t){this.transparencyEditor.setAlphaStops(t)}getColorMap(){return this.colorMapEditor.getColorMap()}getDiscreteColorMap(){return this.colorMapEditor.getDiscreteColorMap()}setColorMap(t){this.colorMapEditor.setColorStops(t)}getTransferFunction(){return this.transparencyEditor.getTransferFunction()}}const Xr={MIP:0,ISO:1,EA:2,AVG:3},Rw=[{name:"Maximum Intensity",id:"MIP"},{name:"First Hit",id:"ISO"},{name:"Emission/Absorption",id:"EA"},{name:"Average",id:"AVG"}],Me={composition:"Maximum Intensity",rotations:{x:!1,y:!0,z:!1},speed:.002,samplingRate:1,threshold:.5,palette:"Greys",invertColor:!0,alphaScale:1};async function Pw(n,t){const e=await fetch(n);if(!e.ok)throw new Error(`Fetch failed: ${e.status} ${e.statusText}`);const i=await e.blob(),r=await Bx.loadAsync(i),s=Object.keys(r.files).find(c=>!r.files[c].dir);if(!s)throw new Error("No file inside zip");const o=await r.file(s).async("uint8array"),l=t.x*t.y*t.z;return o.length!==l&&console.warn(`Size mismatch: got ${o.length}, expected ${l}`),o}function Lw(n=256){const t=Zt.scale(Me.palette),e=new Uint8Array(n*4);for(let r=0;r<n;++r){const s=r/(n-1),[a,o,l]=t(s).rgb(),c=r*4;e[c+0]=a,e[c+1]=o,e[c+2]=l,e[c+3]=255}const i=new pf(e,n,1);return i.format=We,i.type=en,i.minFilter=Ce,i.magFilter=Ce,i.wrapS=ke,i.wrapT=ke,i.needsUpdate=!0,i}const Gn={scale:[-1,-1,1/1.65],xExtent:256,yExtent:256,zExtent:109},Dw={x:Gn.xExtent,y:Gn.yExtent,z:Gn.zExtent},Iw=new URL("head_256x256x109.zip","/Volume-Rendering/").toString(),Xa=await Pw(Iw,Dw);console.log("Volume data loaded:");console.log("Type:",Xa.constructor.name);console.log("Length:",Xa.length);console.log("First 20 values:",Xa.slice(0,20));const qn=new sf(Xa,Gn.xExtent,Gn.yExtent,Gn.zExtent);qn.format=uc;qn.type=en;qn.minFilter=Ce;qn.magFilter=Ce;qn.wrapS=ke;qn.wrapT=ke;qn.wrapS=ke;qn.needsUpdate=!0;let jd=Lw();const $a=new wm;$a.background=new ne(16777215);const Zd=new Mr(1,1,1),ii=new _n(Zd);ii.scale.set(Gn.scale[0],Gn.scale[1],Gn.scale[2]);const Nw=new Pm(new Lm(Zd),new gf({color:10066329}));ii.add(Nw);const wn=new Dm({glslVersion:Bl,uniforms:{dataTexture:{value:qn},colorTexture:{value:jd},cameraPosition:{value:new Q},samplingRate:{value:Me.samplingRate},threshold:{value:Me.threshold},alphaScale:{value:Me.alphaScale},invertColor:{value:Me.invertColor},composition:{value:Xr.MIP}},vertexShader:Ux,fragmentShader:Fx,side:Ie,transparent:!0});ii.material=wn;$a.add(ii);const Kd=800,Jd=600,Uw=45,Fw=Kd/Jd,Ow=.1,kw=1e3,Er=new Ke(Uw,Fw,Ow,kw);Er.position.set(0,0,-2);Er.lookAt(new Q(0,0,0));const Ni=new bx({antialias:!0});Ni.setSize(Kd,Jd);Ni.setPixelRatio(devicePixelRatio);Ni.domElement.style.border="1px solid black";document.getElementById("three-root").appendChild(Ni.domElement);const Qd=new Sx(Er,Ni.domElement);Qd.addEventListener("change",()=>Ni.render($a,Er));const Ui=new Cc({container:document.getElementById("gui-mount")}),Bw=Ui.add(Me,"composition",["Maximum Intensity","First Hit","Emission/Absorption","Average"]).name("Composition"),ac=Ui.add(Me,"threshold",0,1,1e-4).name("Iso Value").onChange(n=>{Me.threshold=n,wn.uniforms.threshold.value=n});Ui.add(Me,"alphaScale",0,2,1e-4).name("Alpha scale").onChange(n=>wn.uniforms.alphaScale.value=n);Ui.add(Me,"samplingRate",.1,4,.1).name("Sampling rate").onChange(n=>wn.uniforms.samplingRate.value=n);Ui.add(Me,"invertColor").name("Invert color").onChange(n=>{wn.uniforms.invertColor.value=n});const Gc=Ui.addFolder("Rotation");Gc.add(Me.rotations,"x").name("X");Gc.add(Me.rotations,"y").name("Y");Gc.add(Me.rotations,"z").name("Z");const ua=Ui.addFolder("Transfer Function");ua.open();const Lr=document.createElement("div");Lr.style.width="100%";Lr.style.height="300px";Lr.style.borderRadius="6px";Lr.style.background="#1f1f1f";const Ya=document.createElement("div");Ya.style.display="flex";Ya.style.gap="8px";Ya.style.marginTop="8px";const tp=ua.domElement.querySelector(":scope > .children")||ua.domElement.querySelector(".children")||ua.domElement.children[1];tp.appendChild(Lr);tp.appendChild(Ya);const ep=new Cw(Lr,{initialColorMap:{colorStops:[{stop:0,color:"blue"},{stop:.5,color:"white"},{stop:1,color:"red"}],interpolationMethod:"HSL",discrete:!1,bins:8}});function zw(n,t){if(!n||!n.length)return 1;t=Math.min(1,Math.max(0,t));const e=n.slice().sort((i,r)=>i.stop-r.stop);if(t<=e[0].stop)return e[0].alpha;for(let i=0;i<e.length-1;i++){const r=e[i],s=e[i+1];if(t>=r.stop&&t<=s.stop){const a=(t-r.stop)/Math.max(1e-6,s.stop-r.stop);return(1-a)*r.alpha+a*s.alpha}}return e[e.length-1].alpha}function Hw(n,t=256,e=1){const{colorMap:i,alphaStops:r}=n,{colorStops:s,interpolationMethod:a="RGB",discrete:o=!1,bins:l=8}=i,c=s.map(m=>m.stop),h=s.map(m=>m.color),u=a.toLowerCase(),d=Zt.scale(h).domain(c).mode(u),p=new Uint8Array(t*4),_=o?Math.max(2,l|0):t;for(let m=0;m<t;m++){let f=m/(t-1);if(o){const A=Math.floor(f*_)/(_-1);f=Math.min(1,Math.max(0,A))}const[v,y,S]=d(f).rgb(),C=Math.max(0,Math.min(1,zw(r,f)*e)),R=4*m;p[R+0]=v|0,p[R+1]=y|0,p[R+2]=S|0,p[R+3]=Math.round(255*C)}const g=new pf(p,t,1);return g.format=We,g.type=en,g.minFilter=Ce,g.magFilter=Ce,g.wrapS=ke,g.wrapT=ke,g.needsUpdate=!0,g}function np(){const n=ep.getTransferFunction(),t=Hw(n,256,Me.alphaScale);jd=t,wn.uniforms.colorTexture.value=t,wn.uniforms.colorTexture.value.needsUpdate=!0}ep.addListener(np);np();Bw.onChange(n=>{const t=Rw.find(e=>e.name===n)?.id||"MIP";wn.uniforms.composition.value=t==="MIP"?Xr.MIP:t==="ISO"?Xr.ISO:t==="EA"?Xr.EA:Xr.AVG,wn.needsUpdate=!0,t==="ISO"?ac.show():ac.hide()});ac.hide();function ip(){wn&&ii.material.uniforms.cameraPosition.value.copy(Er.position);const n=Me.speed||.002,t=Me.rotations;t.x&&(ii.rotation.x+=n),t.y&&(ii.rotation.y+=n),t.z&&(ii.rotation.z+=n),Qd.update?.(),Ni.render($a,Er),requestAnimationFrame(ip)}requestAnimationFrame(ip);

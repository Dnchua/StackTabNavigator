__d(function(r,e,t,f){"use strict";function n(r){if(r instanceof ArrayBuffer&&(r=new Uint8Array(r)),r instanceof Uint8Array)return a.fromByteArray(r);if(!ArrayBuffer.isView(r))throw new Error("data must be ArrayBuffer or typed array");var e=r,t=e.buffer,f=e.byteOffset,n=e.byteLength;return a.fromByteArray(new Uint8Array(t,f,n))}var a=e(83);t.exports=n},82);
var Monitoring=Monitoring||function(){var e=new MemoryStats;e.domElement.style.position="fixed",e.domElement.style.right="0px",e.domElement.style.bottom="0px",document.body.appendChild(e.domElement),requestAnimationFrame(function n(){e.update(),requestAnimationFrame(n)});var t=new function(){var e=document.createElement("div");e.id="stats",e.style.cssText="width:150px;opacity:0.9;cursor:pointer;position:fixed;right:80px;bottom:0px;";var t=document.createElement("div");t.id="ms",t.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#020;",e.appendChild(t);var n=document.createElement("div");n.id="msText",n.style.cssText="color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px",n.innerHTML="Repaint rate: 0/sec",t.appendChild(n);var o=20,i=[],r=Date.now();return{domElement:e,ping:function(){var e=r,t=Date.now(),a=1e3/(t-e);i.push(a),i.length>o&&i.shift();for(var d=0,m=0;m<i.length;m++)d+=i[m];n.textContent="Repaint rate: "+(d/i.length).toFixed(2)+"/sec",r=t}}};return document.body.appendChild(t.domElement),{memoryStats:e,renderRate:t}}();
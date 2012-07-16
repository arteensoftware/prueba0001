function GetWidth() 
  { 
          var x = 0; 
          if (self.innerHeight) 
          { 
                  x = self.innerWidth; 
          } 
          else if (document.documentElement && document.documentElement.clientHeight) 
          { 
                  x = document.documentElement.clientWidth; 
          } 
          else if (document.body) 
          { 
                  x = document.body.clientWidth; 
          } 
          return x; 
  } 
var isTablet=(GetWidth() >=1024)?true:false;
var carpeta=(isTablet)?'tablet':'iphone';
//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>
var actualCard=0; // indica layout actual
var animaPar1=0; // puede ser 0 y 1
var isEco=false;
function writeLayer(ID,URL) {

		  if (document.layers) {
			  var oLayer;
				oLayer = document.layers[ID].document;
			  oLayer.open();
			  oLayer.write(URL);
			  oLayer.close();
		  }else if (document.all ) {
			document.all[ID].innerHTML = URL;
			  
		  }else 
			document.getElementById(ID).innerHTML = URL;
}
function paso2(q){
var salida='';
var salida2='';
if(q==1){
	salida='<table class="label_estructura margen_superior"><tr class="label"><td class="m_t_15">Email</td><td class="campo_texto"><input name="" type="text" class="input_box"></td></tr><tr class="label"><td >Clave</td><td class="campo_texto"><input name="" type="password" class="input_box"></label></td></tr><tr><td colspan="2"><input onClick="JavaScript:goto(4);" name="si" type="button" value="Iniciar" class="m_t_15"></td></tr></table>';
	document.getElementById('mapa1').src = 'imgs/' + carpeta + '/nada.png' ;
}else{
	salida='<form name="myform"><br><br><img src="imgs/' + carpeta + '/flecha.png" alt="Flecha"><label class="bold">Eres Distribuidor o Usuario Final</label><br><label><input type="Radio" class="label_estructura bold" name="esDistribuidor" value="2" checked >Distribuidor</label>'
			+'<label><input type="Radio" class="label_estructura" name="esDistribuidor" value="3">Usuario Final</label></form>';
	salida2='<br><br><img src="imgs/' + carpeta + '/flecha.png" alt="Flecha"><label class="bold">Selecciona tu región en el mapa<br><br><input onclick="JavaScript:registro();" name="si" type="button" value="Registrar" class="normal"></label>';
	document.getElementById('mapa1').src = 'imgs/' + carpeta + '/mapa.png' ;
}
writeLayer('paso2',salida);
writeLayer('paso3',salida2);

}
function prev(){
	if(actualCard>1)
		goto(actualCard-1);
	
}
function next(){
	if(actualCard<26)
		goto(actualCard+1);
	
}
var espTecId="";
function gotoTec(q){
	espTecId=q;
	goto(18);
}
var oldCard=1;
var returnCard=1;
function goto(x){
    if(x==actualCard)
        return;

        returnCard=oldCard;
        oldCard=actualCard;
        actualCard=x;

	
	console.log("returnCard=" + returnCard);
	console.log("oldCard=" + oldCard);
	console.log("actualCard=" + actualCard);
	
	Ext.getCmp('cardPanel').getLayout().setAnimation( {
																type: 'slide',
																direction:(actualCard>=oldCard)?'left':'right'
																,duration: 300
																} );
																
	if(actualCard == 9 || actualCard == 12 || actualCard == 15 || actualCard == 17 || actualCard == 21  ){
			var animaPar2=3; // puede ser 3 y 4
			if(actualCard == 9 )
				animaPar2=2;
			if(actualCard == 12 )
				animaPar2=3;
			if(actualCard == 15 )
				animaPar2=4;
			if(actualCard == 17 )
				animaPar2=5;
			if(actualCard == 21 )
				animaPar2=6;
			
			
			Ext.getCmp('cardPanel').setActiveItem(animaPar2);
			
			if(actualCard != 21 ){
				
				writeLayer('filtrosText_' + actualCard,filtroText);
				//setExt.getCmp('panelH_' + actualCard ).setHtml( getFiltrado(actualCard) ); 
                Ext.getCmp('panelH_' + actualCard ).setHtml( textoFiltrado ); 
			}else if(actualCard==21){
					//var itemsList=Ext.getCmp('glosarioList').items;
					var myList = Ext.getCmp('glosarioList');
					var recordIndex = myList.getStore( ).find('nombre', concepto );
					myList.select(recordIndex,true,false);   
	   
					//Ext.getCmp('panelGlosario_21' ).setHtml(  '<div id="glosarioDescripcion" ><span class="tituloGlosario">' + 'concepto' + '</span><br><br>' + 'descripcion' + '<br><br><img src="glosario_ejemplo.jpg"></div>' );
			}
			setPie(x, actualCard);
			
			

			
	}else{
			if(!(oldCard == 9 || oldCard == 12 || oldCard == 15 || oldCard == 17  || oldCard == 21 ))
				animaPar1=(animaPar1 == 1)?0:1;
			Ext.getCmp('cardPanel').setActiveItem(animaPar1);
			Ext.getCmp( 'panel_' + animaPar1 ).setContentEl( 'contenedor_' + actualCard );
        
			
			if(actualCard==18){
                //NKLog('../../Documents/' + espTecId + '.jpg');
                document.getElementById('espTec').src = '../../Documents/' + espTecId + '.jpg?noCache='+new Date().getTime() ;
                //myScroll.zoom(0,0,1,100)
                //document.getElementById('espTec').src = '9_61_ft.jpg?noCache='+new Date().getTime() ;
                setTimeout(function() {
                           myScroll.zoom(0,0,1);
                            myScroll.refresh();
                           }, 200); // 200 is default zoom duration
                
			}else if(actualCard==23){
					document.getElementById('noticiaImg').src = '../../Documents/noticia.jpg?noCache='+new Date().getTime() ;
			}if(actualCard==24){
                
             
                
					document.getElementById('tipImg').src = '../../Documents/tips.jpg?noCache='+new Date().getTime() ;
			}
        if(actualCard==1 && (oldCard == 2 || oldCard == 3) )		
            paso2(2);
		
		if(actualCard==1){
			var last = new Date(versionAeS);
			writeLayer('lastUpdate',last.getDay() + "/" + (last.getMonth() + 1) +  "/" + last.getFullYear());
			 
		}
			
			if( !isTablet  || (actualCard== 23 || actualCard== 24 ) ){ //|| (actualCard== 18
				Ext.getCmp( 'panel_' + animaPar1 ).setScrollable( {
																		direction: 'vertical',
																		directionLock: true
																	});
			}else{
				Ext.getCmp( 'panel_' + animaPar1 ).setScrollable( false);
			}
			
			setPie( animaPar1, actualCard);
			
			
			
			if(actualCard == 4){
				writeLayer('menu_1','');
				Ext.create('Ext.Button', {						
							baseCls:'css_menu_' + ((isTablet)?'tablet':'iphone') + '_1',
							cls:'',
							width:(isTablet)?188:85,					
							height:(isTablet)?276:85,
							renderTo:'menu_1',
							handler :function(){
									goto(5);
								
							}
						});
				writeLayer('menu_2','');
				Ext.create('Ext.Button', {						
							baseCls:'css_menu_' + ((isTablet)?'tablet':'iphone') + '_2',
							cls:'',
							width:(isTablet)?188:85,					
							height:(isTablet)?276:85,
							renderTo:'menu_2',
							handler :function(){
									goto(22);
								
							}
						});
				writeLayer('menu_3','');
				Ext.create('Ext.Button', {						
							baseCls:'css_menu_' + ((isTablet)?'tablet':'iphone') + '_3',
							cls:'',
							width:(isTablet)?188:85,					
							height:(isTablet)?276:85,
							renderTo:'menu_3',
							handler :function(){
									goto(23);
								
							}
						});
				writeLayer('menu_4','');
				Ext.create('Ext.Button', {						
							baseCls:'css_menu_' + ((isTablet)?'tablet':'iphone') + '_4',
							cls:'',
							width:(isTablet)?188:85,					
							height:(isTablet)?276:85,
							renderTo:'menu_4',
							handler :function(){
									goto(21);
								
							}
						});
				writeLayer('menu_5','');
				Ext.create('Ext.Button', {						
							baseCls:'css_menu_' + ((isTablet)?'tablet':'iphone') + '_5',
							cls:'',
							width:(isTablet)?188:85,					
							height:(isTablet)?276:85,
							renderTo:'menu_5',
							handler :function(){
									goto(24);
								
							}
						});
			}else if(actualCard == 5){
				writeLayer('menu_1_1','');
				Ext.create('Ext.Button', {						
							baseCls:'css_menu_' + ((isTablet)?'tablet':'iphone') + '_1_1',
							cls:'',
							width:(isTablet)?191:85,
							height:(isTablet)?168:85,
							renderTo:'menu_1_1',
							handler :function(){
									goto(7);
								
							}
						});
				writeLayer('menu_1_2','');
				Ext.create('Ext.Button', {						
							baseCls:'css_menu_' + ((isTablet)?'tablet':'iphone') + '_1_2',
							cls:'',
							width:(isTablet)?191:85,
							height:(isTablet)?168:85,
							renderTo:'menu_1_2',
							handler :function(){
									goto(10);
								
							}
						});
				writeLayer('menu_1_3','');
				Ext.create('Ext.Button', {						
							baseCls:'css_menu_' + ((isTablet)?'tablet':'iphone') + '_1_3',
							cls:'',
							width:(isTablet)?191:85,
							height:(isTablet)?168:85,
							renderTo:'menu_1_3',
							handler :function(){
									goto(13);
								
							}
						});
				writeLayer('menu_1_4','');
				Ext.create('Ext.Button', {						
							baseCls:'css_menu_' + ((isTablet)?'tablet':'iphone') + '_1_4',
							cls:'',
							width:(isTablet)?191:85,
							height:(isTablet)?168:85,
							renderTo:'menu_1_4',
							handler :function(){
									goto(16);
								
							}
						});
				writeLayer('menu_1_5','');
				Ext.create('Ext.Button', {						
							baseCls:'css_menu_' + ((isTablet)?'tablet':'iphone') + '_1_5',
							cls:'',
							width:(isTablet)?191:85,
							height:(isTablet)?168:85,
							renderTo:'menu_1_5',
							handler :function(){
									goto(26);
								
							}
						});
			}else if(actualCard == 6){
				writeLayer('menu_2_1','');
				Ext.create('Ext.Button', {						
							baseCls:'css_menu_' + ((isTablet)?'tablet':'iphone') + '_2_1',
							cls:'',
							width:(isTablet)?191:85,
							height:(isTablet)?168:85,
							renderTo:'menu_2_1',
							handler :function(){
									goto(7);
								
							}
						});
				writeLayer('menu_2_2','');
				Ext.create('Ext.Button', {						
							baseCls:'css_menu_' + ((isTablet)?'tablet':'iphone') + '_2_2',
							cls:'',
							width:(isTablet)?191:85,
							height:(isTablet)?168:85,
							renderTo:'menu_2_2',
							handler :function(){
									goto(10);
								
							}
						});
				writeLayer('menu_2_3','');
				Ext.create('Ext.Button', {						
							baseCls:'css_menu_' + ((isTablet)?'tablet':'iphone') + '_2_3',
							cls:'',
							width:(isTablet)?191:85,
							height:(isTablet)?168:85,
							renderTo:'menu_2_3',
							handler :function(){
									goto(13);
								
							}
						});
				
			}else if(actualCard==1){
			
						
						
						writeLayer('mapa_1' ,'' );
						var img = Ext.create('Ext.Img', {
							src: 'imgs/' + carpeta + '/mapa.png',
							renderTo:'mapa_1',
							height: 641,
							width: 636,
							html:'<img id="mapa1" src="imgs/' + carpeta + '/nada.png" alt="Mapa Latinoamérica" width="' + GetWidth() + '">',
							listeners:{
										'tap':function( me,  e, eOpts ){
											console.log((e.pageX) + " " + (e.pageY) );
											var X=e.pageX + 100;
											var Y=e.pageY;
											
											if( X > 560 && X < 750 && Y > 65 && Y < 180)
												document.getElementById('mapa1').src = 'imgs/' + carpeta + '/mapa_mexico.jpg' ;
											else if( X > 890 && X < 1200 && Y > 180 && Y < 500)
												document.getElementById('mapa1').src = 'imgs/' + carpeta + '/mapa_brasil.jpg' ;
											else if( X > 735 && X < 940 && Y > 190 && Y < 400)
												document.getElementById('mapa1').src = 'imgs/' + carpeta + '/mapa_rola_1.jpg' ;
											else if( X > 735 && X < 1200 && Y > 400 && Y < 800)
												document.getElementById('mapa1').src = 'imgs/' + carpeta + '/mapa_rola_2.jpg' ;
											else
												document.getElementById('mapa1').src = 'imgs/' + carpeta + '/mapa.png' ;
										}
							}
							
							
						});
			}
			
			
			
			
			if(actualCard==7 || actualCard==10 || actualCard==13 || actualCard==16 ){
				
				var max=5;
				var myselect;	
				var primerVez=false;
				var qFiltro=0;
				
				if(actualCard==7 )
					qFiltro=9;
				else if(actualCard==10 )
					qFiltro=12;
				else if(actualCard==13 )
					qFiltro=15;
				else if(actualCard==16 )
					qFiltro=17;
				
				
				for(k=0;k<formActual[qFiltro].length;k++){
					myselect=document.getElementById(formActual[qFiltro][k][0])
					var filtro=formActual[qFiltro][k][1];
					if( myselect.length <1 ){
						primerVez=true;
						for(i=0;i<carac[filtro].length;i++){
							myselect.add(new Option(carac[filtro][i])) 
							if(carac[filtro][i].length > max )
								max=carac[filtro][i].length;
						}					
					}
				}	
				if(primerVez){
					var ajuste='Todos ';
					if(isTablet){
						for(i=5;i<max-6;i++)
							ajuste+='_';
					}
					
					for(k=0;k<formActual[qFiltro].length;k++){
						myselect=document.getElementById(formActual[qFiltro][k][0])
						myselect.add(new Option(ajuste, ""), myselect.options[0]);
					}
				}
					
			}
	}
	
	console.log('animaPar1:' + animaPar1 + " ," + 'contenedor_' + actualCard);
}
var concepto="";
function gotoGlosario(x){
	concepto=x;
	goto(21);
}
function getCheckedValue(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}
var esDistribuidor=true;
function registro(){
	if(getCheckedValue(document.forms["myform"].esDistribuidor) == '2')
		esDistribuidor=true;
	else
		esDistribuidor=false;
	goto(getCheckedValue(document.forms["myform"].esDistribuidor));
}
  processKeyPress=function (event)
{
    NKLog('process1' );
    NKLog('process:'+event );
    NKLog('process:'+event.charCode );
     NKLog('process:'+event.keyCode );
    if(event.keyCode==13){
        NKLog('press' );
        document.getElementById('btnCalcular').focus();
         NKLog('11' );
        document.getElementById('btnCalcular').click();
        NKLog('12' );
    }
}


var filtrados=new Array();
filtrados['Modelo']="";
filtrados['Resolución']="";
filtrados['Brillo']="";
filtrados['Tiro']="";

var filtroText="";
var textoFiltrado="";
function setFiltrado(){
    textoFiltrado= getFiltrado(qPantallaFiltrada);
    if(textoFiltrado==""){
        Ext.Viewport.unmask();
                Ext.Msg.alert('Aviso', 'No existen productos con estas características.');
    }else{
                Ext.Viewport.unmask();
                goto(qPantallaFiltrada);
        }
}
var qPantallaFiltrada=0;
function gotoFiltradoProyectores(q){
	if (typeof q == "undefined") 
		isEco = false;
	else
		isEco=q;

	filtrados['filtradoProyectoresModelo'] = document.getElementById('filtradoProyectoresModelo').value;
	filtrados['filtradoProyectoresResolucion'] = document.getElementById('filtradoProyectoresResolucion').value;
	filtrados['filtradoProyectoresBrillo'] = document.getElementById('filtradoProyectoresBrillo').value;
	filtrados['filtradoProyectoresTiro'] = document.getElementById('filtradoProyectoresTiro').value;
	
	filtroText="";	
	if( filtrados['filtradoProyectoresModelo'] != "" )
		filtroText= filtroText + filtrados['filtradoProyectoresModelo'] + "<br>";
	if( filtrados['filtradoProyectoresResolucion'] != "" )
		filtroText= filtroText + filtrados['filtradoProyectoresResolucion'] + "<br>";
	if( filtrados['filtradoProyectoresBrillo'] != "" )
		filtroText= filtroText + filtrados['filtradoProyectoresBrillo'] + "<br>";
	if( filtrados['filtradoProyectoresTiro'] != "" )
		filtroText= filtroText + filtrados['filtradoProyectoresTiro'] + "<br>";
    Ext.Viewport.setMasked({
                           xtype: 'loadmask',
                           message: 'Buscando...'
                           });
    
    Ext.Viewport.mask();
    qPantallaFiltrada=9;
    setTimeout(setFiltrado, 100);
    //setFiltrado();
    
    
}
function gotoFiltradoMonitores(q){
	if (typeof q == "undefined") 
		isEco = false;
	else
		isEco=q;

	filtrados['filtradoMonitoresModelo'] = document.getElementById('filtradoMonitoresModelo').value;
	filtrados['filtradoMonitoresResolucion'] = document.getElementById('filtradoMonitoresResolucion').value;
	filtrados['filtradoMonitoresTamanio'] = document.getElementById('filtradoMonitoresTamanio').value;
	filtrados['filtradoMonitoresContraste'] = document.getElementById('filtradoMonitoresContraste').value;
	
	filtroText="";	
	if( filtrados['filtradoMonitoresModelo'] != "" )
		filtroText= filtroText + filtrados['filtradoMonitoresModelo'] + "<br>";
	if( filtrados['filtradoMonitoresResolucion'] != "" )
		filtroText= filtroText + filtrados['filtradoMonitoresResolucion'] + "<br>";
	if( filtrados['filtradoMonitoresTamanio'] != "" )
		filtroText= filtroText + filtrados['filtradoMonitoresTamanio'] + "<br>";
	if( filtrados['filtradoMonitoresContraste'] != "" )
		filtroText= filtroText + filtrados['filtradoMonitoresContraste'] + "<br>";
	
    Ext.Viewport.setMasked({
                           xtype: 'loadmask',
                           message: 'Buscando...'
                           });
    
    Ext.Viewport.mask();
    qPantallaFiltrada=12;
    setTimeout(setFiltrado, 100);
}
function gotoFiltradoCamaras(q){
	if (typeof q == "undefined") 
		isEco = false;
	else
		isEco=q;

	filtrados['filtradoCamarasModelo'] = document.getElementById('filtradoCamarasModelo').value;
	filtrados['filtradoCamarasResolucion'] = document.getElementById('filtradoCamarasResolucion').value;
	filtrados['filtradoCamarasZoom'] = document.getElementById('filtradoCamarasZoom').value;
	filtrados['filtradoCamarasTipo'] = document.getElementById('filtradoCamarasTipo').value;
	
	filtroText="";	
	if( filtrados['filtradoCamarasModelo'] != "" )
		filtroText= filtroText + filtrados['filtradoCamarasModelo'] + "<br>";
	if( filtrados['filtradoCamarasResolucion'] != "" )
		filtroText= filtroText + filtrados['filtradoCamarasResolucion'] + "<br>";
	if( filtrados['filtradoCamarasZoom'] != "" )
		filtroText= filtroText + filtrados['filtradoCamarasZoom'] + "<br>";
	if( filtrados['filtradoCamarasTipo'] != "" )
		filtroText= filtroText + filtrados['filtradoCamarasTipo'] + "<br>";
		
    Ext.Viewport.setMasked({
                           xtype: 'loadmask',
                           message: 'Buscando...'
                           });
    
    Ext.Viewport.mask();
    qPantallaFiltrada=15;
    setTimeout(setFiltrado, 100);
}
function gotoFiltradoVideo(q){
	if (typeof q == "undefined") 
		isEco = false;
	else
		isEco=q;
	filtrados['filtradoVideoModelo'] = document.getElementById('filtradoVideoModelo').value;	
	
	filtroText="";	
	if( filtrados['filtradoVideoModelo'] != "" )
		filtroText= filtroText + filtrados['filtradoVideoModelo'] + "<br>";
	
	
    Ext.Viewport.setMasked({
                           xtype: 'loadmask',
                           message: 'Buscando...'
                           });
    
    Ext.Viewport.mask();
    qPantallaFiltrada=17;
    setTimeout(setFiltrado, 100);
}

function calculaDistancia(){
var cm=document.getElementById('tamZapato').value*document.getElementById('numPasos').value;
writeLayer('distancia_final',doCalc(0,cm,document.getElementById('cb_distancia_final').value).toFixed(2) );

}
function doCalc(flag,cm,to)
{
console.log(flag + " , " + cm + " , " + to);
/*
Cent&iacute;metros (cm):0
<b>Metros (m)</b>:1
Kil&oacute;metros (km):2
Mil&iacute;metros (mm): 3
Inch:4
Foot:5
Yard:6
Millas (Miles):7
Fathom:8
Rod:9
Chain:10
Furlong:11
Unidades Astron&oacute;micas (UA):12
Años-luz:13
Segundos de paralaje (parsec, pc):14
Dec&iacute;metros (dm):15
Millas n&aacute;uticas:16
&Aring;ngstr&ouml;m (&Aring;):17
*/
         Rels = new Array(1,100,100000,.1,2.54,30.48,91.44,160934.4,182.88,502.92,2011.68,20116.8,14959787100000,946052800000000000,3085678000000000000,10,185201,0.00000001);
         /*for (i=0;i<Rels.length;i++)
         {
              if (i==flag)
              {
                  givenValue=document.getElementById(flag).value.replace(",",".");
                  newVal=eval(givenValue*Rels[i])
                  document.getElementById("0").value=newVal;
              }
         }*/
		 newVal=cm;//
		 var i=to;
         //for (i=1;i<Rels.length;i++)
         //{
              //newVal=eval(document.getElementById("0").value/Rels[i]);			  
			  newVal=eval(cm/Rels[i]);			  
              neg=0;
              if (newVal < 0)
              {
                  newVal*=-1;
                  neg=1;
              }
              j=0;
              while (newVal<1 && newVal>0)
              {
                     j++;
                     newVal*=10;
              }
              newVal*=100000;
              newVal=Math.round(newVal);
              newVal/=100000;
              newVal/=Math.pow(10,j);
              newVal="a"+newVal;
              cache=0;
              if (newVal.indexOf("e") != -1)
              {
                  cache=newVal.substr(newVal.indexOf("e"),5);
                  newVal=newVal.substring(0,newVal.indexOf("e"));
              }
              dig=new Array;
              for (j=1;j<5;j++)
                  dig[j]=newVal.substr(newVal.length-j-1,1);
              if (dig[1] == 9 && dig[2] == 9 && dig[3] == 9 && dig[4] == 9 && eval(newVal.substring(1,newVal.length))!= Math.round(eval(newVal.substring(1,newVal.length))))
                 {
                      rest=newVal.substring(newVal.indexOf("."),100).length-1;
                      newVal=newVal.substring(1,newVal.length-1);
                      newVal="a"+eval(eval(newVal)+Math.pow(10,-rest+2));
                  }
             for (j=1;j<5;j++)
                   dig[j]=newVal.substr(newVal.length-j-1,1);
              if (dig[1] == 0 && dig[2] == 0 && dig[3] == 0 && dig[4] == 0)
                   {
                       check=0;
                       for (j=0;j<newVal.length-5;j++)
                       {
                            if (newVal.substr(j,1)!=0)
                                check++;
                       }
                       if (check>2 && eval(newVal.substring(1,newVal.length)) != Math.round(eval(newVal.substring(1,newVal.length))))
                           newVal=newVal.substring(0,newVal.length-1);
                   }
              if (cache)
                  newVal=newVal+cache;
              newVal=newVal.substring(1,newVal.length);
              if (neg)
                  newVal*=-1;
              //document.getElementById(i).value=eval(newVal);
			  return eval(newVal);
        // }
}

function gotoFiltradoEco(){
	
	tipo = document.getElementById('filtradoProyectoresTipo').value;	
	if(tipo == 1)
		gotoFiltradoProyectores(true);
	else if(tipo == 2)
		gotoFiltradoMonitores(true);
	else if(tipo == 3)
		gotoFiltradoCamaras(true);
	else if(tipo == 4)
		gotoFiltradoVideo(true);
   
}

function getFiltrado(q){
	console.log(filtrados['Tiro'])
	var campo='Color';
	var numResultado=0;	
	var salida=''
	salida=salida +'<section class="especificaciones_tecnicas"><table class="tabla_productos propiedad_box propiedades tipo_' + q +  '">' ;
	for(var j=0;j<propiedades1[q].length;j++){	
	
	if(propiedades1[q][j] == 'ECO')
				continue;
	
		if(q== 12 && propiedades1[q][j] == 'Application')
				continue;
		else if(q== 15 && propiedades1[q][j] == 'Type')
				continue;
					
				
			
		salida=salida +'<tr class="' + clases1[q][j] + '">';
		
		for(var i=0;i<modelos1[q].length;i++){
				var isValid=true;
				for(k=0;k<formActual[q].length;k++){
					if( filtrados[formActual[q][k][0]] != "" ){
						console.log( ( modelos1[q][i][ formActual[q][k][2] ] + "" ).toLowerCase() + " = " + ( filtrados[ formActual[q][k][0] ] + "").toLowerCase() )
						if (( modelos1[q][i][ formActual[q][k][2] ] + "" ).toLowerCase().indexOf( ( filtrados[ formActual[q][k][0] ] + "").toLowerCase() ) >= 0 ){
						}						
						else{
							isValid=false;
							break;
						}
					}
				}
				
				

//formActual[9]=[ ["filtradoProyectoresModelo",'Modelo_9'],
								

					if(!isValid)	{
					continue;
					}	
            
            numResultado++;

			
				

							if(j>0){
								
							
								salida=salida +'<td  >' + modelos1[q][i][propiedades1[q][j]] + '</td>';
								
							}else{
								if( modelos1[q][i]['Imagen'] == '0')
									salida=salida +'<td  ><img class="ancho_' + q + '" src="imgs/no_image.jpg" alt="Proyector"><br>' + modelos1[q][i][propiedades1[q][j]] + '</td>';
								else{
                                    //NKLog('../../Documents/' + q + '_' + modelos1[q][i]['Imagen'] + '.jpg');
									if( modelos1[q][i]['Ft'] == '0')
										salida=salida +'<td><img class="ancho_' + q + '" src="../../Documents/' + q + '_' + modelos1[q][i]['Imagen'] + '.jpg?noCache='+new Date().getTime()+'" alt="Proyector"><br>' + modelos1[q][i][propiedades1[q][j]] + '</td>';
									else
										salida=salida +'<td><a href="javascript:gotoTec(\'' + q + '_' + modelos1[q][i]['Ft'] + '_ft\');"><img class="ancho_' + q + '" src="../../Documents/' + q + '_'  + modelos1[q][i]['Imagen'] + '.jpg?noCache='+new Date().getTime()+'" alt="Proyector"><br>' + modelos1[q][i][propiedades1[q][j]] + '</a></td>';
								}
							}

							
				
				
			
		}
		salida=salida +'</tr>';
	}
	
			
	
	salida=salida +'</table></section>';
    
    if(numResultado == 0)
        salida="";
	
			return salida;
}
function setPie(activeItem,actualCard){
	var htmlAux='';
	
	if( actualCard==2 || actualCard==3 || actualCard==5 || actualCard== 7 ||actualCard== 9 ||actualCard== 18 ||actualCard== 22||actualCard== 23||actualCard== 24||actualCard== 25
		|| actualCard== 10 || actualCard== 12 || actualCard== 13 || actualCard== 16 || actualCard== 15 || actualCard== 17 || actualCard== 19 || actualCard== 20 || actualCard== 21 || actualCard== 26 || actualCard== 27 
	){
	Ext.fly('panel_pie_' + activeItem ).setHtml('');
		if(isTablet)
			htmlAux='<footer>' +
							'<div class="pie_contenedor_benq">' +
										'<div class="herramientas_pie">						' +
											'<div id="ayuda">' +
													'<div id="btn_ayuda_+' + actualCard + '"><img src="imgs/' + carpeta + '/btn_ayuda.png" alt="Botón Ayuda"></div>' +
													//'<a href="#"><img src="imgs/' + carpeta + '/btn_ayuda.png" alt="Botón Ayuda"></a>' +
											'</div>' +
											
											'<div id="enviar">' +
													'<div id="btn_enviar_+' + actualCard + '"><img src="imgs/' + carpeta + '/btn_ayuda.png" alt="Botón Ayuda"></div>' +
													//'<a href="#"><img src="imgs/' + carpeta + '/btn_enviar.png" alt="Botón enviar"></a>' +
											'</div>' +
											'<div id="guardar">' +
													'<div id="btn_guardar_+' + actualCard + '"><img src="imgs/' + carpeta + '/btn_ayuda.png" alt="Botón Ayuda"></div>' +
													//'<a href="javascript:prev();"><img src="imgs/' + carpeta + '/btn_guardar.png" alt="Botón atrás"></a>' +
											'</div>' +
											'<div id="ir_home">' +
													'<div id="btn_home_+' + actualCard + '"/>' +
											'</div>' +
											'<div id="atras">' +
												   '<div id="btn_atras_+' + actualCard + '"/>' +
											'</div>' +
										'</div>' +
										'<div class="clear"></div>' +
							'</div> ' +
					'</footer>';					
			else
				htmlAux='<footer >' +
						'		<div class="pie_contenedor_benq">' +
						'                    <div class="herramientas_pie">						' +
						'						<div id="ayuda">' +
						'								<div id="btn_ayuda_+' + actualCard + '"><img src="imgs/' + carpeta + '/btn_ayuda.png" alt="Botón Ayuda"></div>' +
						'					  	</div>' +
						'						<div id="ir_home">' +
						'								<div id="btn_home_+' + actualCard + '"/>' +
						'					  	</div>' +
						'						<div id="enviar">' +
						'								<div id="btn_enviar_+' + actualCard + '"><img src="imgs/' + carpeta + '/btn_ayuda.png" alt="Botón Ayuda"></div>' +
						'					  </div>' +
						'						<div id="guardar">' +
						'								<div id="btn_guardar_+' + actualCard + '"><img src="imgs/' + carpeta + '/btn_ayuda.png" alt="Botón Ayuda"></div>' +
						'					  </div>' +
						'						<div id="atras">' +
						'							   <div id="btn_atras_+' + actualCard + '"/>' +
						'						</div>' +
						'					</div>' +
						'					<div class="clear"></div>' +
						'        </div> ' +
						'</footer>';
					
			
			Ext.fly('panel_pie_' + activeItem ).setHtml(htmlAux);
			if (  actualCard!=2 && actualCard!=3 && actualCard!=21 && actualCard!=22 && actualCard!=23 && actualCard!=24 && actualCard!=27 )
				Ext.create('Ext.Button', {						
							baseCls:'css_btn_home',
							cls:'',
							width:43,
							style:'margin:0px 5px 0px 5px',						
							height:37,
							renderTo:'btn_home_+' + actualCard,
							handler :function(){
									goto(4);
								
							}
						});
			
			writeLayer('btn_atras_+' + actualCard,'');
			writeLayer('btn_guardar_+' + actualCard,'');
			writeLayer('btn_enviar_+' + actualCard,'');
			
			Ext.create('Ext.Button', {						
						baseCls:'css_btn_atras',
						cls:'',
						width:43,
						style:'margin:0px 30px 0px 0px',						
						height:37,
						renderTo:( actualCard!=2 && actualCard!=3 && actualCard!=21 && actualCard!=22 && actualCard!=23 && actualCard!=24 && actualCard!=27) ? 'btn_atras_+' + actualCard : 'btn_enviar_+' + actualCard,
						handler :function(){
						
							if( isEco ){
								isEco=false;
								goto(26)
							}else if(actualCard==18 || actualCard==19 || actualCard==20 || actualCard==21  || actualCard==27){
								//concepto="";
								goto(oldCard)							
							}else if(actualCard==2 || actualCard==3)
								goto(1)
							else if(actualCard==5 || actualCard==22 || actualCard==23 || actualCard==24 || actualCard==25 )
								goto(4)
							else if(actualCard==18)
								goto(9)
							else if(actualCard==9)
								goto(7)
							else if(actualCard==12)
								goto(10)
							else if(actualCard==15)
								goto(13)
							else if(actualCard==17)
								goto(16)							
							else if( actualCard==7 || actualCard== 10 || actualCard== 12 || actualCard== 13  || actualCard== 16 || actualCard== 26 )
								goto(5)
							
							
						}
					});
					

			if( actualCard!=2 && actualCard!=3 && actualCard!=21 && actualCard!=22 && actualCard!=23 && actualCard!=24 && actualCard!=27){
			
			var posFijo="_f";
			if(actualCard==5)
				posFijo="_c";
			else if(actualCard==7)
				posFijo="_p";
			else if(actualCard==10)
				posFijo="_m";
			else if(actualCard==13)
				posFijo="_d";
			else if(actualCard==16)
				posFijo="_v";
			else if(actualCard==10)
				posFijo="_m";
			
				
					Ext.create('Ext.Button', {						
								baseCls:'css_btn_guardar' + posFijo,
								cls:'',
								width:43,
								style:'margin:0px 5px 0px 5px',						
								height:37,
								renderTo:'btn_guardar_+' + actualCard,
								handler :function(){
										
									
								}
							});					
					Ext.create('Ext.Button', {						
								baseCls:'css_btn_enviar' + posFijo,
								cls:'',
								width:43,
								style:'margin:0px 5px 0px 5px',						
								height:37,
								renderTo:'btn_enviar_+' + actualCard,
								handler :function(){
									sendMail();
									//if(esDistribuidor)	
									//	goto(19);
									//else
									//	goto(20);

								}
							});
			}
			writeLayer('btn_ayuda_+' + actualCard,'');
        if(actualCard!=27 && actualCard!=21)
			Ext.create('Ext.Button', {						
						baseCls:'css_btn_ayuda',
						cls:'',
						width:26,
						style:'margin:-5px 5px 0px 5px',						
						height:27,
						renderTo:'btn_ayuda_+' + actualCard,
						handler :function(){
								goto(27);
							
						}
					});
			
			
	}else{
		if(isTablet)
			htmlAux='<footer>' +
							'<div class="pie_contenedor_benq">' +
										'<div id="benq_sitios_latam">' +
												'<a href="javascript:openURL(\'http://Latam.BenQ.com\');" target="_blank">Latam.BenQ.com</a> /<a href="javascript:openURL(\'http://BenQ.com.mx\');" target="_blank"> BenQ.com.mx</a> / <a href="javascript:openURL(\'http://BenQ.com.br\');" target="_blank">BenQ.com.br</a>' +
										'</div>' +
										'<div id="redes" class="box_mini">' +
												'<div id="facebok">' +
														'<img src="imgs/' + carpeta + '/facebook.png" alt="Facebook logo">	' +
												'</div>' +
												'<div id="twitter">' +
														'<img src="imgs/' + carpeta + '/twitter.png" alt="Twitter logo">	' +
												'</div>' +
										'</div>' +
										'<div id="siguenos" class="box_mini">' +
												'<p>Síguenos en:</p>' +
												'<a href="javascript:openURL(\'http://twitter.com/#!/BenQ_Mexico\');" target="_blank">BenQLatam</a> / <a href="javascript:openURL(\'http://twitter.com/#!/BenQ_Mexico\');" target="_blank">BenQ_Mexico</a> / <a href="javascript:openURL(\'http://twitter.com/#!/BenQ_Mexico\');" target="_blank">BenQBrasil</a>' +
										'</div>' +
										'<div id="copyright">' +
												'<p>Copyright © 2012 BenQ </p>' +
										'</div>  ' +
										'<div class="clear"></div>   ' +
							'</div> ' +
					'</footer>';
			else
				htmlAux='<footer >' +
						'        <div class="pie_contenedor_benq" >' +
						'                    <table width="100%" border="0">' +
						'                          <tr >' +
														'<td  class="social center"><img src="imgs/iphone/facebook.png" alt="Facebook logo"><img src="imgs/iphone/twitter.png" alt="Facebook logo"><img src="imgs/iphone/benq.png" alt="Benq" /> © 2012 BenQ</td>' +
						'                          </tr>' +
						'                     </table>' +
						'                    <div class="clear"></div>   ' +
						'        </div> ' +
						'</footer>' ;
			Ext.fly('panel_pie_' + activeItem ).setHtml(htmlAux);
	}
	
}

function openURL(URL){
    //generate_js_and_attach_to_node();
   NKOpenURLInSafari(URL);
}

function sendMail(){
	//window.location.href = 'mailto:client@email.com?subject=BenQ&body=Productos BenQ';
    showComposer();
}
function showComposer()
{
    var composer = new NKMailComposer();
    //composer.setRecipient("a.voloshyn@gmail.com, voloshyn@me.com");
    composer.setSubject("BenQ");!
    composer.setBody("Productos BenQ");
    composer.show(); 
}
function get_layout_tipo1(x, scrollable){
 var template={
			xtype: 'panel',
			 layout:{
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items: [
						{
							xtype: 'panel',
							flex:1,		
							id:'panel_' + x,
							//contentEl : 'contenedor_' + x,
							styleHtmlContent: true,
							styleHtmlCls : 'contenedores',
							scrollable: scrollable,				   
						},
						{
							xtype: 'toolbar',
							docked: 'bottom',
							height:(isTablet)?70:50,
							items: [
									{
										xtype: 'panel',
										id : 'panel_pie_' + x
									}
								
							]
						}
					],
			listeners: {
						hide: function( me,  eOpts ){
							//console.log('deactivate');	
							//me.setContentEl( '' );
							//me.destroy();
						},deactivate: function( me,  eOpts ){
							//console.log('deactivate');	
							//me.setContentEl( '' );
							//me.destroy();
						}/*,
						show: function( me,  eOpts ){
							//console.log('SHOW');	
							
						},
						painted: function( me,  eOpts ){
							//console.log('painted');	
							
						}*/
						
						
					}
			}
			return template;
}
function get_layout_tipo2(x){
 var template={
			xtype: 'panel',
			 layout:{
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items: [
						{
							xtype: 'panel',
							flex:1,									
							styleHtmlCls : 'contenedor_resultados_' + x,
							styleHtmlContent: true,
							layout: 'hbox',
							items: [
								{
									//styleHtmlCls : 'menu_proyector_' + x,
									//styleHtmlContent: true,
									contentEl : 'menu_' + x ,
									 ui: 'plain',
									style: 'background-color: #5E99CC;',
									width: (isTablet)?227:100
								},								
								{
									xtype: 'panel',
									flex:1,									
									
									layout: 'vbox',
									items: [{
												styleHtmlCls : 'cabeza_resultado',
												styleHtmlContent: true,
												contentEl : 'resultado_' + x,
												style: 'background-color: #5E99CC;',
												 ui: 'plain',
												height: (isTablet)?100:66
											},{											
												styleHtmlCls : 'listado_' + x,	
												styleHtmlContent: true,
												flex:1,	
												contentEl : 'contenedor_' + x,
												//html : 'contenedor_' + x,												
												id:'panelH_' + x,
												scrollable: {
													direction: 'horizontal',
													directionLock: true
												}											
											}
										]
								}

							
							]
							
						},
						{
							xtype: 'toolbar',
							docked: 'bottom',
							height:(isTablet)?70:50,
							items: [
									{
										xtype: 'panel',
										id : 'panel_pie_' + x
									}
								
							]
						}
					]
			}
			return template;
}
function get_layout_tipo3(x){

var store = Ext.create('Ext.data.ArrayStore', {
    // store configs
    autoDestroy: true,
    storeId: 'myStore',
    // reader configs
    idIndex: 0,
	sorters: 'nombre',
	 grouper: {
                groupFn: function(record) {
                    return record.get('nombre')[0];
                }
            },

    fields: [
	   'img',
       'nombre',
       'descripcion',
       
    ],
	data:glosarioData
});

 var template={
			xtype: 'panel',
			 layout:{
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items: [
													
								{
									xtype: 'panel',
									flex:1,									
									
									layout: 'vbox',
									items: [{
												styleHtmlCls : 'cabeza_resultado',
												styleHtmlContent: true,
												contentEl : 'contenedor_' + 21,
												style: 'background-color: #5E99CC;',
												 ui: 'plain',
												height: 130
											},{
													xtype: 'panel',
													flex:1,									
													styleHtmlCls : 'contenedor_resultados_' + x,
													styleHtmlContent: true,
													layout: 'hbox',
													items: [
														{
															//give it an xtype of list for the list component
															xtype: 'list',
															id:'glosarioList',

															//set the itemtpl to show the fields for the store
															itemTpl: '<div class="palabraGlosario"><strong>{nombre}</strong></div>',

															//enable disclosure icons
															disclosure: true,

															//group the list
															grouped: true,

															//enable the indexBar
															indexBar: true,

															//set the function when a user taps on a disclsoure icon
															listeners: { 
																		'selectionchange': function( me, records,  eOpts ){
																		
																								try{
																								var record=me.getSelection( )[0];
                                                            //NKLog('../../Documents/glosario_' + record.get('img') );
																										if(record.get('img') != 0 )
																											Ext.getCmp('panelGlosario_' + x).setHtml(  '<div id="glosarioDescripcion" ><span class="tituloGlosario">' + record.get('nombre') + '</span><br><br>' + record.get('descripcion') + '<br><br><img src="../../Documents/glosario_' + record.get('img') + '.jpg?noCache='+new Date().getTime()+'"></div>' );
																										else
																											Ext.getCmp('panelGlosario_' + x).setHtml(  '<div id="glosarioDescripcion" ><span class="tituloGlosario">' + record.get('nombre') + '</span><br><br>' + record.get('descripcion') + '</div>' );
																											
																										
																									}catch(e){}													
																		}
																		//,'itemtap':function( me, index, target, record, e,  eOpts ){
																		//							try{
																		//								Ext.getCmp('panelGlosario_' + x).setHtml(  '<div id="glosarioDescripcion" ><span class="tituloGlosario">' + record.get('nombre') + '</span><br><br>' + record.get('descripcion') + '<br><br><img src="glosario_ejemplo.jpg"></div>' );
																		//							}catch(e){}													
															
																		//}
															},
															
															//onItemDisclosure: function(record, item, index, e) {
																//show a messagebox alert which shows the persons firstName
																//e.stopEvent();
																//Ext.Msg.alert('Disclose', 'Disclose more info for ' + record.get('firstName'));
															//},

															//bind the store to this list
															store: store,
															items: [
																{
																	xtype: 'toolbar',
																	docked: 'top',

																	items: [
																		{ xtype: 'spacer' },
																		{
																			xtype: 'searchfield',
																			id:'buscadorText',
																			placeHolder: 'Buscar...',
																			cls: '',
																			//baseCls:'XXXXXXXXXXXXX',
																			listeners: {
																				scope: this,
																				clearicontap : function() {
																					//call the clearFilter method on the store instance
																					store.clearFilter();
																				},
																				keyup : function( field, e,eOpts) {
																							//get the store and the value of the field
																							var value = field.getValue();
																							//alert(field.getParent( ).getParent( ).getParent( ).getStore() )
																								store = store;
																								

																							//first clear any current filters on thes tore
																							store.clearFilter();

																							//check if a value is set first, as if it isnt we dont have to do anything
																							if (value) {
																								//the user could have entered spaces, so we must split them so we can loop through them all
																								var searches = value.split(' '),
																									regexps = [],
																									i;

																								//loop them all
																								for (i = 0; i < searches.length; i++) {
																									//if it is nothing, continue
																									if (!searches[i]) continue;

																									//if found, create a new regular expression which is case insenstive
																									regexps.push(new RegExp(searches[i], 'i'));
																								}

																								//now filter the store by passing a method
																								//the passed method will be called for each record in the store
																								store.filter(function(record) {
																									var matched = [];

																									//loop through each of the regular expressions
																									for (i = 0; i < regexps.length; i++) {
																										var search = regexps[i],
																											didMatch = record.get('nombre').match(search); //|| record.get('lastName').match(search);

																										//if it matched the first or last name, push it into the matches array
																										matched.push(didMatch);
																									}

																									//if nothing was found, return false (dont so in the store)
																									if (regexps.length > 1 && matched.indexOf(false) != -1) {
																										return false;
																									} else {
																										//else true true (show in the store)
																										return matched[0];
																									}
																								});
																							}
																						}
																			}
																		},
																		{ xtype: 'spacer' }
																	]
																}
															],
															//style: 'background-color: #5E99CC;',
															width: 227
														},{
															xtype: 'panel',
															styleHtmlCls : '',	
															styleHtmlContent: true,
															flex:1,													
															html : '',												
															id:'panelGlosario_' + x,
															scrollable: {
																		direction: 'vertical',
																		directionLock: true
																	}						
														}
													]
											}

									
									]
							
						},
						{
							xtype: 'toolbar',
							docked: 'bottom',
							height:(isTablet)?70:50,
							items: [
									{
										xtype: 'panel',
										id : 'panel_pie_' + x
									}
								
							]
						}
					]
			}
			return template;
}
function sendForm(qForm){
		Ext.Viewport.setMasked({
                        xtype: 'loadmask',
                        message: 'Registrando...'
                    });
					
		Ext.Viewport.mask();
		
		var envio=[];
		for(i =0;i< document[qForm].elements.length;i++)
			envio[document[qForm].elements[i].name]=document[qForm].elements[i].value;
		
		Ext.data.JsonP.request({
           url: 'http://174.142.58.218/benq/modules/forms/forms.aspx',
            callbackKey: 'callback',
            params: envio,
			method:'POST',
			disableCaching : true,
			callback: function(success, result) {
                           
							Ext.Viewport.unmask();
							try{
									if (success) {
										if(result.success == true){
											console.log("OK:" + result.success);
											goto(4);
										}else{
											Ext.Msg.alert('Error 1', 'Servicio no disponible, por favor inténtelo más tarde.');
											console.log("ERROR EJECUCION");
										}
									}
									else {
										Ext.Msg.alert('Error 2', 'Conexión no disponible, por favor inténtelo más tarde.');
										console.log("ERROR CONECCION");
									}  
							}catch(e){
										Ext.Msg.alert('Error 3', 'Conexión no disponible, por favor inténtelo más tarde.');
										console.log("ERROR exception");
							}
                        }
        });
		
	
}
var updateData=new Array();
var iUpdate=0;
var updateError=0;

var download;
function updateProgress()
{
     //////NKLog("updateProgress");
    var progress = download.getProgress();
    if (progress == -1)
    {
        ////NKLog("Could not download file");
		////NKLog("siguiente: "+progress);
       // iUpdate++;
       // updateNow();
	   Ext.Viewport.unmask();
		Ext.Msg.alert('Error', 'Servicio no disponible, por favor inténtelo más tarde.');
        return;

    }else{
        ////NKLog("downloaded: "+progress);
        if (download.getProgress()<100)
            setTimeout(updateProgress, 100);
        else{
            //document.write('<img src="../../Documents/noticias.jpg" />')
			////NKLog("siguiente: "+progress);
			//var file = NKFile();
			//file.openFromDocuments( updateData[ iUpdate ] );
			//file.setSkipBackupBit("yes");
			//file.close();
            
			iUpdate++;
			updateNow();
            return;
            /*////NKLog("image");

            var nkOne = new NKImage();
            nkOne.loadFromDocuments("noticias.jpg");      //Filename to open
            nkOne.saveToLibrary();
            mysize=nkOne.getSize(); 
            var mySplitSize = mysize.split(",");
            width= (mySplitSize[0]);
            height= (mySplitSize[1]);
            ////NKLog("split" + height );

            
            var img_base64 = new Image();
            img_base64.src="data:image/jpg;base64," + nkOne.getBase64(0);
            document.getElementById("paso2").appendChild(img_base64);
            */
        }
            
    } 
}
var path=""
function updateNow(){
	if(iUpdate >= updateData.length){
        Ext.Viewport.unmask();
        window.location.reload();
		return;
    }
	Ext.Viewport.setMasked({
                           xtype: 'loadmask',
                           message: 'Actualizando ' + iUpdate + " de " + updateData.length,
                           });
    //NKLog("Bajando http://174.142.58.218/BENQ/modules/update/package/" + updateData[ iUpdate ]);
    download = new NKFileDownloader();
    download.openURL("http://174.142.58.218/BENQ/modules/update/package/" + updateData[ iUpdate ] );
    download.start( updateData[ iUpdate ] );
    setTimeout(updateProgress, 100);
	
	
    
}
function update(){
    //////NKLog.log("checando:'http://174.142.58.218/BENQ/modules/update/Default.aspx'");
		Ext.Viewport.setMasked({
                        xtype: 'loadmask',
                        message: 'Actualizando... por favor espere.'
                    });
					
		Ext.Viewport.mask();
		
		var envio=[];
		
		//http://174.142.58.218/BENQ/modules/core/kernel/exporta.aspx
    
		Ext.data.JsonP.request({
           url: 'http://174.142.58.218/BENQ/modules/update/Default.aspx',
            callbackKey: 'callback',
            params: envio,
			method:'POST',
			disableCaching : true,
			callback: function(success, result) {
                           
							
							try{
                               ////NKLog("1" );
									if (success) {
                               ////NKLog("2" );
                                ////NKLog("3:"+result.success );
										if(result.success == true){
                               
											////NKLog("OK:" + result.success);
											updateData=result.data;
											iUpdate=0;
											if(result.version > versionAeS){
												try{
                                                   
													////NKLog("debe actualizar");													
														updateNow();
												}catch(e){
                                                    Ext.Viewport.unmask();
													////NKLog("requiere ejecutarse desde device");
												}

                               }else{
                               Ext.Viewport.unmask();
                               Ext.Msg.alert('Aviso', 'Usted cuenta con la última versión.');
                               ////NKLog("version actualizada");
                               }
											//for(i=0;i < result.data.length;i++)
											//	console.log("bk:" + result.data[i]);
											
										}else{
                                            Ext.Viewport.unmask();
											Ext.Msg.alert('Error 1', 'Servicio no disponible, por favor inténtelo más tarde.');
											////NKLog("ERROR EJECUCION");
										}
									}
									else {
                                        Ext.Viewport.unmask();
										Ext.Msg.alert('Error 2', 'Conexión no disponible, por favor inténtelo más tarde.');
										////NKLog("ERROR CONECCION");
									}  
							}catch(e){
										Ext.Viewport.unmask();
										Ext.Msg.alert('Error 3', 'Conexión no disponible, por favor inténtelo más tarde.');
										////NKLog("ERROR exception:" + e.descripcion );
							}
                        }
        });
		
	
}
/**
 * Pinch Zoom Image
 * creates a pinch zoom able image in a scrollable container
 *
 * Can be uses with dynamic size from the height width of the container
 *
 * @example
 *     {
 *         flex: 1,
 *         xtype: 'pinchzoomimage',
 *         src: '/resources/images/casinomenu.jpg'
 *     }
 *
 * or with fixed sizes
 *
 * {
 *         xtype: 'pinchzoomimage',
 *         src: '/resources/images/casinomenu.jpg',
 *         width: 320,
 *         height: 440
 *     }
 *
 *
 * @author     Nils Dehl <mail@nils-dehl.de>
 * @www     http://www.nils-dehl.de
 *
 * @version: 1.0.0
 */
Ext.define('Ux.PinchZoomImage', {
    extend: 'Ext.Container',
    xtype: 'pinchzoomimage',
    alias: 'widget.pinchzoomimage',


    config: {
       
        src: '',
        height: null,
        width: null,		
		oldHeight: null,
        oldWidth: null,
		oldScale:null,
        scrollable: true,
        listeners: {
            painted: 'initImage'
        }
    },

    initImage: function(newImageSrc) {
        var height = this.getHeight() || this.element.getHeight(),
            width = this.getWidth() || this.element.getWidth(),
            src = this.getSrc() || newImageSrc,
            image = null;

			this.oldHeight=height;
        var oldWidth =width;
		console.log(height);
		console.log(this.oldHeight);

            if (Ext.isString(src) && src !== '') {
            image = Ext.create('Ext.Img', {
                // set mode auf empty to create a real image tag
                mode: '',
                height: height,
				oldHeight:height,
				oldWidth:width,				
				oldScale:0,
                width: width,
                src: src,
                listeners: {
                    pinch: {
                        element: 'element',
                        fn: this.onImagePinch


                    },
                    doubletap: {
                        element: 'element',
                        fn: this.onImageDoubletap
                    }
                }
            });


            this.add(image);
        }
    },


    /**
     * reset the image to initial size
     *
     * @param {} e
     */
    onImageDoubletap: function(e) {
	console.log(this.oldHeight);
        var initialWidth  = this.getInitialConfig('width'),
            initialHeight = this.getInitialConfig('height'),
            container     = this,
            image         = this.element;

		this.oldHeight=initialHeight;
        this.oldWidth =initialWidth;
		this.oldScale = 0;
		scroller = this.up('container').getScrollable().getScroller();
		scroller.scrollTo(0,0,1);
        container.setWidth(initialWidth);
        container.setHeight(initialHeight);
        image.setWidth(initialWidth);
        image.setHeight(initialHeight);
    },


    /**
     * on image pinch scale the image size
     * and set the scroller to a new position
     *
     * @param {} e eventobject
     */
    onImagePinch: function(e) {
	console.log(e.scale);
        var initialWidth  = this.oldHeight,
            initialHeight = this.oldWidth,			
            container     = this,
            image         = this.element,
            scroller = this.up('container').getScrollable().getScroller(),
            pos = scroller.getMaxPosition();

			if(this.oldScale < e.scale ){
				newWidth      = initialWidth + (e.scale*10);
				newHeight     = initialHeight + (e.scale*10);
			}else{
				newWidth      = initialWidth - ((2-e.scale)*10);
				newHeight     = initialHeight - ((2-e.scale)*10);
			}


		
		
        container.setWidth(newWidth);
        container.setHeight(newHeight);
        image.setWidth(newWidth);
        image.setHeight(newHeight);
        //scroller.scrollTo(pos.x + ((newWidth-this.oldWidth)/2), pos.y +((newHeight-this.oldHeight)/2));
		scroller.scrollBy(((newWidth-this.oldWidth)/2), ((newHeight-this.oldHeight)/2));
		
		this.oldHeight=newHeight;
        this.oldWidth =newWidth;
		this.oldScale = e.scale;
		
    },


    /**
     * if set Src is called and an
     * old image exist destroy the old
     * one and add the new one
     *
     * @param {} newImageSrc
     * @param {} oldImageSrc
     */
    applySrc: function(newImageSrc) {
        var oldImage = this.down('img');


        if (Ext.isObject(oldImage)) {
            oldImage.destroy();
        }


        this.initImage(newImageSrc);
    }


});
Ext.application({
    glossOnIcon: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@114.png'
    },

    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    requires: [
        'Ext.Button',
        'Ext.Panel',
        'Ext.Toolbar',
		'Ext.Label',
		'Ext.Anim',
		'Ext.Img',
		'Ext.Button',
		'Ext.data.Store',
        'Ext.List',
        'Ext.plugin.PullRefresh',
		'Ext.data.ArrayStore',
		'Ext.data.reader.Array',
		'Ext.field.Search',
		'Ext.data.JsonP'
    ],

    launch:function () {
	
	
	
       
        Ext.Viewport.add({
			xtype: 'panel',
			  layout: 'card',
			  id:"cardPanel",
			items:[//card 2
					get_layout_tipo1(0,{	direction: 'vertical', directionLock: true}),
					get_layout_tipo1(1,{	direction: 'vertical', directionLock: true}),
					get_layout_tipo2(9),
					get_layout_tipo2(12),
					get_layout_tipo2(15),
					get_layout_tipo2(17),
					get_layout_tipo3(21)			
			]
        });
		goto(1);
		
		if(versionAeS==0)
			update();
                
               
                
                
                
    }
	
});


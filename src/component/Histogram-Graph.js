
import 'https://www.google.com/jsapi';

            google.load('visualization','1.0',{'packages':['corechart']});
            google.setOnLoadCallback(dibujar);
           function dibujar () {
                var data = new google.visualization.DataTable();
                data.addColumn('string','Ciudad');
                data.addColumn('number','visitas');
                data.addRows([
                ['Cd Mexico',700],
                ['Bogota',651],
                ['lima',581]
                ]);
                var opciones = {'title':'visitas de mi web',
                                'width':500,
                                'heigth':300
                                } ;
                var grafica = new google.visualization.AreaChart(document.getElementById('chart'));
                grafica.draw(data,opciones);
            }

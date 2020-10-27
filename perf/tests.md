## Tests checklist
- [ ] Load
- [ ] Stress 
- [ ] Spike
- [ ] Endurance
- [ ] Scalability
- [ ] Volume

Divido cada seccion en 
1. Que hace
2. Objetivo del test

### Load
1. Prueba el sistema aumentando constantemente la carga en el sistema hasta que alcanzar el threshold.
(A huge number of users)
2. Exponer los defectos en una aplicación relacionados con el desbordamiento del búfer, pérdidas de memoria y mala gestión de la memoria. Los problemas que eventualmente surgirán como resultado de las pruebas de carga pueden incluir problemas de equilibrio de carga, problemas de ancho de banda, la capacidad del sistema existente, etc.
Determinar el límite superior de todos los componentes de una aplicación como una base de datos, hardware, red, etc. para que la aplicación pueda gestionar la carga anticipada en el futuro.
Para establecer los SLA para la aplicación.
https://www.softwaretestinghelp.com/what-is-performance-testing-load-testing-stress-testing/

### Stress
1. Too many users, too much data, towards system crash.
2. Analizar los informes post-crash para definir el comportamiento de la aplicación después de una falla.

El mayor desafío es garantizar que el sistema no comprometa la seguridad de los datos confidenciales después de la falla. En una prueba de esfuerzo exitosa, el sistema volverá a la normalidad junto con todos sus componentes incluso después de la falla más terrible.

### Spike
1. Genera un pico muy grande (en comparacion a una carga normal) en poco tiempo
2. Queremos observar como se comporta el sistema al recibir una carga muy alta en un intervalo de tiempo chico

### Endurance
1. Genera una carga alta constante durante mucho tiempo. Se puede monitorear:
- Memory leakage
- Response time
2. El propósito principal es garantizar que la aplicación sea lo suficientemente capaz de manejar cargas extendidas sin ningún deterioro del tiempo de respuesta. 
https://www.guru99.com/endurance-testing.html


### Scalability
https://www.softwaretestinghelp.com/what-is-scalability-testing/

### Volume
1. A huge amount of data
2. Volume Testing is to verify that the performance of the application is not affected by the volume of data that is being handled by the application. In order to execute a Volume Test, a huge volume of data is entered into the database. This test can be an incremental or steady test. In the incremental test, the volume of data is increased gradually.
https://www.softwaretestinghelp.com/introduction-to-performance-testing-loadrunner-training-tutorial-part-1/

### Mas links

https://cdn.softwaretestinghelp.com/wp-content/qa/uploads/2014/01/Performance-testing-types.jpg
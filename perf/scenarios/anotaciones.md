# Node - Root
Hice un par de pruebas pero como que siempre da todo bien, nose si es lo que se espera o estoy haciendo algo mal

# Node - Sleep
### Load
``` 
phases:
    - name: Reset
      duration: 20
      arrivalRate: 0
    - name: Ramp
      duration: 30
      arrivalRate: 1
      rampTo: 200 
```
Se empieza a notar algunas fallas ECONRESET entre rampTo 150 y 200

### Spike
``` 
- name: Reset
      duration: 20
      arrivalRate: 0
    - name: Ramp
      duration: 10
      arrivalRate: 3
    - name: Spike-up
      duration: 20
      arrivalRate: 3
      rampTo: 1000
    - name: Spike-down
      duration: 20
      arrivalRate: 100
      rampTo: 3
    - name: Reset
      duration: 20
      arrivalRate: 0
```
Se notan algunos errores pero el servicio no se cae. Prueba muy extrema? Pico muy alto?

### Endurance
``` 
  phases:
    - name: Reset
      duration: 20
      arrivalRate: 0
    - name: Constant
      duration: 600
      arrivalRate: 3
    - name: Reset
      duration: 20
      arrivalRate: 0

```
Se mantuvo en los mismos valores sin registrar ninguno error. Usos de CPU y memoria sin demasiada variacion.

### Volume
Como hago la simulacion de datos???

### Scalability
Se testea???

### Stress
Como se testearia???

# Node - Heavy
Todavia no lo probe en detalle pero las pocas pruebas que hicen daban muchisimos errores

```
  phases:
    - name: Reset
      duration: 20
      arrivalRate: 0
    - name: Ramp
      duration: 30
      arrivalRate: 1
      rampTo: 1.5
    - name: Plain
      duration: 60
      arrivalRate: 1.5
    - name: Reset
      duration: 20
      arrivalRate: 0
```
Sin errores, llega a demorar 1 min las responses pero anda perfecto

### Load
```
  phases:
    - name: Reset
      duration: 20
      arrivalRate: 0
    - name: Ramp
      duration: 90
      arrivalRate: 3
      rampTo: 25
    - name: Reset
      duration: 20
      arrivalRate: 0
```
Empiezan a aparecer 502 y errores
```
  Scenarios launched:  1269
  Scenarios completed: 968
  Requests completed:  968
  Mean response/sec: 9.61
  Response time (msec):
    min: 0.7
    max: 60027.3
    median: 60000.6
    p95: 60007.5
    p99: 60014.8
  Scenario counts:
    Heavy (/heavy): 1269 (100%)
  Codes:
    200: 46
    502: 922
  Errors:
    ECONNRESET: 300
    ESOCKETTIMEDOUT: 1

```

### Spike
``` 
    - name: Reset
      duration: 20
      arrivalRate: 0
    - name: Ramp
      duration: 10
      arrivalRate: 1
      rampTo: 4
    - name: Plain
      duration: 10
      arrivalRate: 4
    - name: Spike-up
      duration: 20
      arrivalRate: 4
      rampTo: 100
    - name: Spike-down
      duration: 20
      arrivalRate: 100
      rampTo: 3
    - name: Reset
      duration: 20
      arrivalRate: 0
```
```
  Scenarios launched:  2191
  Scenarios completed: 549
  Requests completed:  549
  Mean response/sec: 12.31
  Response time (msec):
    min: 3011.4
    max: 91618.3
    median: 60004.1
    p95: 60009.8
    p99: 60025.5
  Scenario counts:
    Heavy (/heavy): 2191 (100%)
  Codes:
    200: 50
    502: 499
  Errors:
    ECONNRESET: 1640
    ESOCKETTIMEDOUT: 2
```
Tuvo un pico de errores en el pico (1/3 del total que se envio). Finalmente la gran mayoria de las que quedaron en pendiente nunca fueron atendidas

### Endurance
``` 
  phases:
    - name: Reset
      duration: 20
      arrivalRate: 0
    - name: Constant
      duration: 600
      arrivalRate: 1
    - name: Reset
      duration: 20
      arrivalRate: 0

```
Se mantuvo en los mismos valores sin registrar ninguno error. Usos de CPU y memoria sin demasiada variacion.

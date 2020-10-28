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
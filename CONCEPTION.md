
# Test Driven Development

## Comportement souhaité

    calc = new Calculette() 

    calc.reset() // 0
    calc.set(100) // 100 => stocké quelque part
    calc.add(3) // 103
    calc.multiply(5) // 515
    calc.value() // 515

    calc.reset().add(1).add(2).multiply(3).value()


## Structure souhaitée

    class Calculette {
        constructor() {
            this.accumulator = 0
            // ?
        }

        add() {
        }

        multiply() {
        ..
        }
    }



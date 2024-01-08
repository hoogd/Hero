class hero{
    constructor(nome, idade, gue, mag, mong, nin){
    this.nome = nome
    this.idade = idade
    this.gue = gue
    this.mag = mag
    this.mong = mong
    this.nin = nin
    }
    info(){
       console.log("nome:" +this.nome)
      console.log(`idade:${this.idade} `)
    }
    atacar(){
      console.log(`o guerreiro atacou usando ${this.gue} `)
      console.log(`o mago atacou usando ${this.mag} `)
      console.log(`o monge atacou usando ${this.mong} `)
      console.log(`o ninja atacou usando ${this.nin} `)
  
      }
  }
  adven = new hero("Drax", 27, "espada", "magia", "artes marciais", "shuriken")
  adven.info()
  adven.atacar()
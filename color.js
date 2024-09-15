class Lawn {
  constructor(ism, code) {
    this.ism = ism;
    this.code = code;
  }
}

const KollAlwan = [
    new Lawn('ahmar','#ff0000'),
    new Lawn('akhdar','#008000'),
    new Lawn('asfar','#ffff00'),
    new Lawn('banafsaji','#800080'),
]

exports.randomLawn = () => {
    return KollAlwan[Math.floor(Math.random() * KollAlwan.length)]
}
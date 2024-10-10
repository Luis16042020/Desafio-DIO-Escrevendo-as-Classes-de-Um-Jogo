class Hero{
    constructor(name, age, type){
        this.name  = name;
        this.age   = age;
        this.type  = type;
        this.attack = this.getAttackType(type);
    }

    getAttackType(type){
        let attack;
        switch(type){
            case 'Mago':
                attack = 'magia'
                break;
        
            case 'Guerreiro':
                attack = 'espada'
                break;
        
            case 'Monge':
                attack = 'artes marciais'
                break;
        
            case 'Ninja':
                attack = 'shuriken'
                break;
        }
        return  attack;

    }

    message(){
        return`O ${this.type} atacou usando ${this.attack}`;
    }    
}

let hero = new Hero("Luis",  25, "Mago");
console.log(hero.message());





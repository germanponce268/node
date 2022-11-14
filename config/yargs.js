const argv = require('yargs')
                        .options(
                            {'b': {
                            alias:'base',
                            type: 'number',
                            demandOption:true,
                            describe:'base de las tablas'
                            }}
                        )
                        .options(
                            {'l':{
                            alias:'lista',
                            type:'boolean',
                            demandOption:false,
                            describe:'lista de tablas',
                            default:false
                            }   
                            })
                        .options(
                            {'h':{
                                alias:'hasta',
                                type:'number',
                                demandOption:false,
                                describe:'limite de las tablas',
                                default:10
                            }}
                        )
                        .check((argv,option)=>{
                            if(isNaN(argv.b)){
                                throw 'La base tiene que ser un numero';
                            } 
                            return true;
                        })
                        .argv;
module.exports = argv;
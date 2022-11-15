import { Controller, Post , Body, Get, Param} from "@nestjs/common";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('users')

export class UsuarioContoller{


    constructor(private usuarioService: UsuarioService){}

    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario : string){
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
        return usuarioEncontrado;
    }

    @Post()
    public cria(@Body() usuario : Usuario) : Usuario{
        const usuarioCriado = this.usuarioService.cria(usuario);

        return usuarioCriado;
    }
}
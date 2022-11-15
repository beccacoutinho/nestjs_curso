import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService{


    private usuarios: Array<Usuario> = [{
        id: 1,
        nomeDeUsuario: 'GabsdoLeite',
        email: 'gabsemail@alura.com',
        senha: '123456',
        nomeCompleto: 'Gabriel Leite',
        dataEntrada: new Date()
    }]; //responsavel por armazenar os usuarios recebidos

    public cria(usuario : Usuario) : Usuario{
        this.usuarios.push(usuario);

        return usuario;
    }

    public buscaPorNomeDeUsuario(nomeDeUsuario : string) : Usuario{
        return this.usuarios.find(usuario => usuario.nomeDeUsuario == nomeDeUsuario);
    }
}
import { Module } from "@nestjs/common";
import { IsNomeDeUsuarioUnicoConstraint } from "./is-nome-de-usuario-unico.validator";
import { UsuarioContoller } from "./Usuario.controller";
import { UsuarioService } from "./usuario.service";

@Module({
    controllers: [UsuarioContoller],
    providers: [
        UsuarioService, 
        IsNomeDeUsuarioUnicoConstraint
    ]
})
export class UsuarioModule{}
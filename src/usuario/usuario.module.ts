import { Module } from "@nestjs/common";
import { UsuarioContoller } from "./Usuario.controller";
import { UsuarioService } from "./usuario.service";

@Module({
    controllers: [UsuarioContoller],
    providers: [UsuarioService]
})
export class UsuarioModule{}
import { NestInterceptor, Injectable, CallHandler, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import {  HttpAdapterHost,  AbstractHttpAdapter } from "@nestjs/core";
import { map } from 'rxjs/operators';
import { NestResponse } from "./nest-response";

@Injectable()
export class TransformaRespostaInterceptor implements NestInterceptor{

    private httpAdapter: AbstractHttpAdapter;

    constructor(adapterHost: HttpAdapterHost){
        this.httpAdapter = adapterHost.httpAdapter;
    }

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle()
                    .pipe(
                        map((respostaDoControlador: NestResponse) => {
                            if(respostaDoControlador instanceof NestResponse){
                                const contexto = context.switchToHttp();
                                const response = contexto.getResponse();
                                const{headers, status, body} = respostaDoControlador;

                                const nomeDosCabecalhos = Object.getOwnPropertyNames(headers);

                                nomeDosCabecalhos.forEach( nomeDosCabecalhos => {
                                    const valorDoCabecalho = headers[nomeDosCabecalhos];
                                    this.httpAdapter.setHeader(response, nomeDosCabecalhos, valorDoCabecalho);
                                });

                                this.httpAdapter.status(response, status);

                                return body;
                            }
                            return respostaDoControlador
                        })
                    );
    }

}
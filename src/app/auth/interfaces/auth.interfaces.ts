export interface AuthInterface {
    usuario: Usuario;
    token:   string;
}

export interface Usuario {
    apellido:    string;
    nombre:      string;
    fecha:       Date;
    doctO_IDENT: string;
    usuario:     string;
}

export interface Pokemons {
    count:    number;
    next:     string;
    previous: null | string;
    results:  Pokes[];
}

export interface Pokes {
    name: string;
    url:  string;
}

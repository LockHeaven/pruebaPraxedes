export interface Character {
    info:    InfoCharacter;
    results: ResultCharacter[];
}

export interface InfoCharacter {
    count?: number;
    pages?: number;
    next:  string | null;
    prev?:  string | null;
}

export interface ResultCharacter {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export interface Location {
    name: string;
    url:  string;
}


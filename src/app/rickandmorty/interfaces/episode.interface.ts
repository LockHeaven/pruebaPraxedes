export interface Episode {
    info:    InfoEpisode;
    results: ResultEpisode[];
}

export interface InfoEpisode {
    count?: number;
    pages?: number;
    next:  string | null;
    prev?:  string | null;
}

export interface ResultEpisode {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    Date;
}
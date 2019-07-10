import {HTTP} from "@nofrills/http";
import {URL} from "url";
import {IMovie, IMovieQuality, IReleaseInfo} from "./models";

export class Radarr extends HTTP {

    /**
     * Constructor
     */
    constructor(private readonly baseUrl: URL, private readonly apiKey: string) {
        super();
    }

    /**
     * Get a single Movie
     */
    public async movie(movieId: number): Promise<IMovie> {
        return this.get<IMovie>(`${this.baseUrl.toString()}/api/movie/${movieId}`);
    }

    /**
     * Get All Movies
     */
    public async movies(): Promise<IMovie[]> {
        return this.get<IMovie[]>(`${this.baseUrl.toString()}/api/movie`);
    }

    /**
     * Get a Page of Movies
     */
    public async page(pageSize: number, start: number = 1): Promise<IMovie[]> {
        return this.get<IMovie[]>(`${this.baseUrl.toString()}/api/movie?page=${start}&pageSize=${pageSize}`);
    }

    /**
     * Get profiles
     */
    public async profiles(): Promise<IMovieQuality[]> {
        return this.get<IMovieQuality[]>(`${this.baseUrl.toString()}/api/profile`);
    }

    /**
     * Push a Release
     */
    public async release(release: IReleaseInfo): Promise<void> {
        return this.post<IReleaseInfo, void>(`${this.baseUrl.toString()}/api/release/push`, release);
    }

    /**
     * Toggle Monitor status for a Movie
     */
    public async toggleMonitor(movieId: number, toggle: boolean): Promise<void> {
        const movie = await this.movie(movieId);
        movie.monitored = toggle;
        await this.update(movie);
        this.log.info(`turned ${this.onoff(toggle)} monitoring for: "${movie.title}" (${movie.year})`);
    }

    /**
     * Update a Movie
     */
    public async update(movie: IMovie): Promise<IMovie> {
        return this.put<IMovie, IMovie>(`${this.baseUrl.toString()}/api/movie`, movie);
    }

    /**
     * Name of the Class
     */
    public get name(): string {
        return "radarr";
    }

    /**
     * HTTP Request
     */
    protected async request<TRequest>(body?: TRequest): Promise<RequestInit> {
        return {
            body: JSON.stringify(body),
            headers: {
                "accept":       "application/json,text/json",
                "content-type": "application/json",
                "x-api-key":    this.apiKey,
            },
        };
    }

    /**
     * Inverts a on/off
     */
    private onoff(value: boolean): string {
        return value ? "on" : "off";
    }
}

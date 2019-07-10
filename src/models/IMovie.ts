import {IImage, IRating} from "./index";
import {IMovieFile} from "./IMovieFile";
import {IMovieTitle} from "./IMovieTitle";

export enum MovieStatus {
    Released = "released"
}

export enum PathState {
    Static = "static"
}

export interface IMovie {
    added: Date;
    alternativeTitles: IMovieTitle[];
    cleanTitle: string;
    downloaded: boolean;
    folderName: string;
    genres: string[];
    hasFile: boolean;
    id: number;
    images: IImage[];
    imdbId: string;
    inCinemas: Date;
    isAvailable: boolean;
    lastInfoSync: Date;
    minimumAvailability: boolean;
    monitored: boolean;
    movieFile: IMovieFile;
    overview: string;
    path: string;
    pathState: PathState;
    physicalRelease: Date;
    profileId: number;
    qualityProfileId: number;
    ratings: IRating;
    runtime: number;
    secondaryYearSourceId: number;
    sizeOnDisk: number;
    sortTitle: string;
    status: MovieStatus;
    studio: string;
    tags: string[];
    title: string;
    titleSlug: string;
    tmdbId: number;
    website: string;
    year: number;
    youTubeTrailerId: string;
}

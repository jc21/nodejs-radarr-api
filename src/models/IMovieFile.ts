import {IMediaInfo, IQuality} from "./index";

export interface IMovieFile {
    dateAdded: Date;
    id: number;
    mediaInfo: IMediaInfo;
    movieId: number;
    quality: IQuality;
    relativePath: string;
    size: number;
}

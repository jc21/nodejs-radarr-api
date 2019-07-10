import {Protocol} from "./enums";

export interface IReleaseInfo {
    downloadUrl: string;
    title: string;
    protocol: Protocol;
    publishDate: string;
}

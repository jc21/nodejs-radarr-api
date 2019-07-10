import {IQualityProfile} from "./IQualityProfile";
import {IQualityType} from "./IQualityType";

export interface IProfile {
    cutoff: IQualityType;
    id: number;
    items: IQualityProfile[];
    language: string;
    name: string;
}

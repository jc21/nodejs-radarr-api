import {IRevision} from "./IRevision";
import {IQualityType} from "./IQualityType";

export interface IQuality {
    quality: IQualityType;
    revision: IRevision;
}

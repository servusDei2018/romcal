import moment from "moment";

import { Dates, Utils } from "../lib";
import { Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintBridgetOfSwedenReligious",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 23 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLordJesusChristTheEternalHighPriest",
            type: Types.FEAST,
            moment: ((y: number): moment.Moment =>
                moment.utc(
                    Dates.pentecostSunday(y)
                        .add(4, "day")
                        .toISOString(),
                ))(year),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
    ];

    // Get localized celebration names
    return Utils.localizeDates(_dates);
};

export { dates };
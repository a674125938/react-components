import { TDate } from '@ucloud-fe/calendar';
import { isFunction } from 'lodash';
import moment, { Moment } from 'moment';
import React, { ReactNode, MutableRefObject, useImperativeHandle } from 'react';
import { isRangeDateValid, Precision } from './utils';

type CallbackRangeValue = [Moment | null, Moment | null];
const formatValue = (v: TDate | null, nullable = false, defaultV: TDate) => {
    return v == null ? (nullable ? null : moment(+defaultV)) : moment(+v);
};

const useRangeErrorCover = ({
    option,
    activeS,
    activeE,
    rules,
    count,
    precision,
    cacheValue,
    calibration,
    nullableS,
    nullableE,
    d,
    setCount,
    callback
}: {
    option: string;
    activeS: boolean;
    activeE: boolean;
    count: number;
    rules: {
        range?: [TDate | void, TDate | void] | (() => [TDate, TDate]);
        maxRange?: any;
        minRange?: any;
    };
    precision: 'month' | null;
    cacheValue: [moment.Moment | null, moment.Moment | null];
    calibration: boolean;
    nullableS?: boolean;
    nullableE?: boolean;
    d: Date;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    callback: (initialValue: CallbackRangeValue) => void;
}) => {
 
    React.useEffect(() => {
        if(!calibration){
            setCount(0);
            return
        }
        if (option !== 'custom') {
            setCount(0);
        }

        if (activeE || activeS) {
            const rangeDateValidResult = isRangeDateValid(cacheValue, rules, precision);
            if (!count && rangeDateValidResult !== true) {
                let initialValue: CallbackRangeValue;
                //第一次校准 默认选项
                if (['rangeError', 'maxRangeError', 'minRangeError'].includes(rangeDateValidResult)) {
                    const [start, end] = cacheValue;
                    switch (rangeDateValidResult) {
                        case 'maxRangeError':
                            const coverEnd = moment(start as Moment).add(rules.maxRange);
                            initialValue = [formatValue(start, nullableS, d), formatValue(coverEnd, nullableE, d)];
                            break;
                        case 'minRangeError':
                            const coverStart = moment(end as Moment).subtract(rules.minRange);
                            initialValue = [formatValue(coverStart, nullableS, d), formatValue(end, nullableE, d)];
                            break;
                        default:
                            const ruleValue = isFunction(rules.range)
                                ? rules.range()
                                : (rules.range as [Moment, Moment]);
                            initialValue = [
                                formatValue(ruleValue[0], nullableS, d),
                                formatValue(ruleValue[1], nullableE, d)
                            ];
                    }
                    setCount(v => ++v);
                    callback(initialValue);
                }
            }
        }
    }, [activeS, activeE, rules, precision, cacheValue, calibration]);
};

export default useRangeErrorCover;


const alarmsDataObj = [
    {
        key: "Alarm_1", value: [
            1,
            1,
            1,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        key: "Alarm_2", value: [
            1,
            1,
            1,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    }]



const alarms = { alarmsDataArray: alarmsDataObj };

const localStorage = {};

const configData = {
    'Alarm_1.1': 'SP_Unit_F001 : Generator-Control  Comms Loss Fault',
    'Alarm_1.2': 'SP_Unit_F002 : Rig-PLC  Comms Loss Fault',
    'Alarm_1.3': 'SP_Unit_F003 : Engine-1  Comms Loss Fault',
    'Alarm_1.4': 'SP_Unit_F004 : Engine-2  Comms Loss Fault',
    'Alarm_1.5': 'SP_Unit_F005 : Engine-3  Comms Loss Fault',
    'Alarm_1.6': 'SP_Unit_F006 : Engine-4  Comms Loss Fault',
    'Alarm_1.7': 'Alarm_1.7  Description Text ****',
    'Alarm_1.8': 'Alarm_1.8  Description Text ****',
    'Alarm_1.9': 'Alarm_1.9  Description Text ****',
    'Alarm_1.10': 'Alarm_1.10  Description Text ****',
    'Alarm_1.11': 'Alarm_1.11  Description Text ****',
    'Alarm_1.12': 'Alarm_1.12  Description Text ****',
    'Alarm_1.13': 'Alarm_1.13  Description Text ****',
    'Alarm_1.14': 'Alarm_1.14  Description Text ****',
    'Alarm_1.15': 'Alarm_1.15  Description Text ****',
    'Alarm_1.16': 'Alarm_1.16  Description Text ****',
    'Alarm_1.17': 'SP_Unit_F0017 : Engines Comms Loss Fault',
    'Alarm_1.18': 'SP_Unit_F0018 : Generator-Control  Comms Loss Fault',
    'Alarm_1.19': 'SP_Unit_F0019 : Rig-PLC  Comms Loss Fault',
    'Alarm_1.20': 'SP_Unit_F0020 : Engine-1  Comms Loss Fault',
    'Alarm_1.21': 'SP_Unit_F0021 : Engine-2  Comms Loss Fault',
    'Alarm_1.22': 'SP_Unit_F0022 : Engine-3  Comms Loss Fault',
    'Alarm_1.23': 'SP_Unit_F0023 : Engine-4  Comms Loss Fault',
    'Alarm_1.24': 'Alarm_1.24  Description Text ****',
    'Alarm_1.25': 'Alarm_1.25  Description Text ****',
    'Alarm_1.26': 'Alarm_1.26  Description Text ****',
    'Alarm_1.27': 'Alarm_1.27  Description Text ****',
    'Alarm_1.28': 'Alarm_1.28  Description Text ****',
    'Alarm_1.29': 'Alarm_1.29  Description Text ****',
    'Alarm_1.30': 'Alarm_1.30  Description Text ****',
    'Alarm_1.31': 'Alarm_1.31  Description Text ****',
    'Alarm_1.32': 'Alarm_1.32  Description Text ****',
    'Alarm_2.1': 'SP_Unit_F001 : Generator-Control  Comms Loss Fault',
    'Alarm_2.2': 'SP_Unit_F002 : Rig-PLC  Comms Loss Fault',
    'Alarm_2.3': 'SP_Unit_F003 : Engine-1  Comms Loss Fault',
    'Alarm_2.4': 'SP_Unit_F004 : Engine-2  Comms Loss Fault',
    'Alarm_2.5': 'SP_Unit_F005 : Engine-3  Comms Loss Fault',
    'Alarm_2.6': 'SP_Unit_F006 : Engine-4  Comms Loss Fault',
    'Alarm_2.7': 'Alarm_1.7  Description Text ****',
    'Alarm_2.8': 'Alarm_1.8  Description Text ****',
    'Alarm_2.9': 'Alarm_1.9  Description Text ****',
    'Alarm_2.10': 'Alarm_1.10  Description Text ****',
    'Alarm_2.11': 'Alarm_1.11  Description Text ****',
    'Alarm_2.12': 'Alarm_1.12  Description Text ****',
    'Alarm_2.13': 'Alarm_1.13  Description Text ****',
    'Alarm_2.14': 'Alarm_1.14  Description Text ****',
    'Alarm_2.15': 'Alarm_1.15  Description Text ****',
    'Alarm_2.16': 'Alarm_1.16  Description Text ****',
    'Alarm_2.17': 'SP_Unit_F0017 : Engines Comms Loss Fault',
    'Alarm_2.18': 'SP_Unit_F0018 : Generator-Control  Comms Loss Fault',
    'Alarm_2.19': 'SP_Unit_F0019 : Rig-PLC  Comms Loss Fault',
    'Alarm_2.20': 'SP_Unit_F0020 : Engine-1  Comms Loss Fault',
    'Alarm_2.21': 'SP_Unit_F0021 : Engine-2  Comms Loss Fault',
    'Alarm_2.22': 'SP_Unit_F0022 : Engine-3  Comms Loss Fault',
    'Alarm_2.23': 'SP_Unit_F0023 : Engine-4  Comms Loss Fault',
    'Alarm_2.24': 'Alarm_1.24  Description Text ****',
    'Alarm_2.25': 'Alarm_1.25  Description Text ****',
    'Alarm_2.26': 'Alarm_1.26  Description Text ****',
    'Alarm_2.27': 'Alarm_1.27  Description Text ****',
    'Alarm_2.28': 'Alarm_1.28  Description Text ****',
    'Alarm_2.29': 'Alarm_1.29  Description Text ****',
    'Alarm_2.30': 'Alarm_1.30  Description Text ****',
    'Alarm_2.31': 'Alarm_1.31  Description Text ****',
    'Alarm_2.32': 'Alarm_1.32  Description Text ****',
};


const storeNotifications = (key, value, stValue) => {
    const cacheKey = 'tableItems';
    const maxLength = 2;
    if (localStorage.getItem(cacheKey) && stValue) {
        const items = JSON.parse(localStorage.getItem(cacheKey));
        const isExisted = items.filter(item => item.key === key).length > 0;
        if (!isExisted && items.length < maxLength) {
            items.push({ key, value, date: new Date().getTime() });
            localStorage.setItem(cacheKey, JSON.stringify(items));
        } else if (!isExisted && items.length >= maxLength) {
            const sortItems = items.sort((a, b) => a.date - b.date);
            sortItems.shift();
            sortItems.unshift({ key, value, date: new Date().getTime() });
            localStorage.setItem(cacheKey, JSON.stringify(sortItems));
        }
        return items;
    } else if(localStorage.getItem(cacheKey) && !stValue) {
        localStorage.removeItem(cacheKey);
    }
    localStorage.setItem(cacheKey, JSON.stringify([{ key, value, date: new Date().getTime() }]));
    return null;
};


const alarmsDataArrayMap = () => {
    alarms.alarmsDataArray.forEach((value, i) => {
        value.value.forEach((cval,index) => {
            const configKey = configData[`${value.key}.${index}`];
            if (configKey) {
                storeNotifications(configKey, value, cval);
            }
        });
       
    });
}

alarmsDataArrayMap();
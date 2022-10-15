import { Component, Input, OnInit } from '@angular/core';
export interface PeriodicElement {
  text: string;
  time: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { text: 'Gen1 will be shut down in 5 min', time: '3/31/2022 00:00:05' },
//   { text: 'Gen3 Starting in 5 min', time: '3/30/2022 06:03:09' },
//   { text: 'Gen2 started successfully', time: '3/29/2022 14:01:07' },
//   { text: 'Gen4 is not offline', time: '3/28/2022 01:00:12' },
// ];

@Component({
  selector: 'app-generators-statuses',
  templateUrl: './generators-statuses.component.html',
  styleUrls: ['./generators-statuses.component.scss'],
})
export class GeneratorsStatusesComponent implements OnInit {
  @Input() public engineDetails: any;
  @Input() public generatorDetails: any;
  @Input() public alarms: any;
  @Input() public config: any;

  displayedColumns = ['text', 'time'];
  dataSource = [];
  public configData = {
    'Alarm_1.1':	'SP_Unit_F001 : Generator-Control  Comms Loss Fault',
    'Alarm_1.2':	'SP_Unit_F002 : Rig-PLC  Comms Loss Fault',
    'Alarm_1.3':	'SP_Unit_F003 : Engine-1  Comms Loss Fault',
    'Alarm_1.4':	'SP_Unit_F004 : Engine-2  Comms Loss Fault',
    'Alarm_1.5':	'SP_Unit_F005 : Engine-3  Comms Loss Fault',
    'Alarm_1.6':	'SP_Unit_F006 : Engine-4  Comms Loss Fault',
    'Alarm_1.7':	'Alarm_1.7  Description Text **********',
    'Alarm_1.8':	'Alarm_1.8  Description Text **********',
    'Alarm_1.9':	'Alarm_1.9  Description Text **********',
    'Alarm_1.10':	'Alarm_1.10  Description Text **********',
    'Alarm_1.11':	'Alarm_1.11  Description Text **********',
    'Alarm_1.12':	'Alarm_1.12  Description Text **********',
    'Alarm_1.13':	'Alarm_1.13  Description Text **********',
    'Alarm_1.14':	'Alarm_1.14  Description Text **********',
    'Alarm_1.15':	'Alarm_1.15  Description Text **********',
    'Alarm_1.16':	'Alarm_1.16  Description Text **********',
    'Alarm_1.17':	'SP_Unit_F0017 : Engines Comms Loss Fault',
    'Alarm_1.18':	'SP_Unit_F0018 : Generator-Control  Comms Loss Fault',
    'Alarm_1.19':	'SP_Unit_F0019 : Rig-PLC  Comms Loss Fault',
    'Alarm_1.20':	'SP_Unit_F0020 : Engine-1  Comms Loss Fault',
    'Alarm_1.21':	'SP_Unit_F0021 : Engine-2  Comms Loss Fault',
    'Alarm_1.22':	'SP_Unit_F0022 : Engine-3  Comms Loss Fault',
    'Alarm_1.23':	'SP_Unit_F0023 : Engine-4  Comms Loss Fault',
    'Alarm_1.24':	'Alarm_1.24  Description Text **********',
    'Alarm_1.25':	'Alarm_1.25  Description Text **********',
    'Alarm_1.26':	'Alarm_1.26  Description Text **********',
    'Alarm_1.27':	'Alarm_1.27  Description Text **********',
    'Alarm_1.28':	'Alarm_1.28  Description Text **********',
    'Alarm_1.29':	'Alarm_1.29  Description Text **********',
    'Alarm_1.30':	'Alarm_1.30  Description Text **********',
    'Alarm_1.31':	'Alarm_1.31  Description Text **********',
    'Alarm_1.32':	'Alarm_1.32  Description Text **********',
    'Alarm_2.1':	'SP_Unit_F001 : Generator-Control  Comms Loss Fault',
    'Alarm_2.2':	'SP_Unit_F002 : Rig-PLC  Comms Loss Fault',
    'Alarm_2.3':	'SP_Unit_F003 : Engine-1  Comms Loss Fault',
    'Alarm_2.4':	'SP_Unit_F004 : Engine-2  Comms Loss Fault',
    'Alarm_2.5':	'SP_Unit_F005 : Engine-3  Comms Loss Fault',
    'Alarm_2.6':	'SP_Unit_F006 : Engine-4  Comms Loss Fault',
    'Alarm_2.7':	'Alarm_1.7  Description Text **********',
    'Alarm_2.8':	'Alarm_1.8  Description Text **********',
    'Alarm_2.9':	'Alarm_1.9  Description Text **********',
    'Alarm_2.10':	'Alarm_1.10  Description Text **********',
    'Alarm_2.11':	'Alarm_1.11  Description Text **********',
    'Alarm_2.12':	'Alarm_1.12  Description Text **********',
    'Alarm_2.13':	'Alarm_1.13  Description Text **********',
    'Alarm_2.14':	'Alarm_1.14  Description Text **********',
    'Alarm_2.15':	'Alarm_1.15  Description Text **********',
    'Alarm_2.16':	'Alarm_1.16  Description Text **********',
    'Alarm_2.17':	'SP_Unit_F0017 : Engines Comms Loss Fault',
    'Alarm_2.18':	'SP_Unit_F0018 : Generator-Control  Comms Loss Fault',
    'Alarm_2.19':	'SP_Unit_F0019 : Rig-PLC  Comms Loss Fault',
    'Alarm_2.20':	'SP_Unit_F0020 : Engine-1  Comms Loss Fault',
    'Alarm_2.21':	'SP_Unit_F0021 : Engine-2  Comms Loss Fault',
    'Alarm_2.22':	'SP_Unit_F0022 : Engine-3  Comms Loss Fault',
    'Alarm_2.23':	'SP_Unit_F0023 : Engine-4  Comms Loss Fault',
    'Alarm_2.24':	'Alarm_1.24  Description Text **********',
    'Alarm_2.25':	'Alarm_1.25  Description Text **********',
    'Alarm_2.26':	'Alarm_1.26  Description Text **********',
    'Alarm_2.27':	'Alarm_1.27  Description Text **********',
    'Alarm_2.28':	'Alarm_1.28  Description Text **********',
    'Alarm_2.29':	'Alarm_1.29  Description Text **********',
    'Alarm_2.30':	'Alarm_1.30  Description Text **********',
    'Alarm_2.31':	'Alarm_1.31  Description Text **********',
    'Alarm_2.32':	'Alarm_1.32  Description Text **********',
  };
  public cacheKey = 'tableItems';
  public cacheStoreItemsLength = 10;

  constructor() {}

  ngOnInit(): void {
    //localStorage.removeItem(this.cacheKey);
    if (
      this.alarms &&
      this.alarms.alarmsDataArray &&
      this.alarms.alarmsDataArray.length > 0
    ) {
      this.storeAlarmsDataArray();
    }
  }

  ngOnChanges(): void {
    if (
      this.alarms &&
      this.alarms.alarmsDataArray &&
      this.alarms.alarmsDataArray.length > 0
    ) {
      this.storeAlarmsDataArray();
    }
    this.dataSource = this.getNotifications();
  }

  private storeAlarmsDataArray = () => {
    this.alarms.alarmsDataArray.forEach((value, i) => {
      value.value.forEach((cval,index) => {
          const configKey = this.configData[`${value.key}.${index}`];
          if (configKey) {
              this.storeNotifications(configKey, value, cval);
          }
      });
    });
  }

  public isChangeObject()
 

  getNotifications() {
    if (localStorage.getItem(this.cacheKey)) {
      const items = JSON.parse(localStorage.getItem(this.cacheKey));
      return items.map(item => {
        return {
          ...item,
          text : item.key,
          time : item.date
        }
      })
      return items;
    }
    return [];
  }

  storeNotifications(key: string, value: any, stValue: any) {
    if (localStorage.getItem(this.cacheKey) && stValue) {
      const items = JSON.parse(localStorage.getItem(this.cacheKey));
      const isExisted = items.filter((item) => item.key === key).length > 0;
      if (!isExisted && items.length < this.cacheStoreItemsLength) {
        items.push({ key, value, date: new Date().getTime() });
        localStorage.setItem(this.cacheKey, JSON.stringify(items));
      } else if (!isExisted && items.length >= this.cacheStoreItemsLength) {
        const sortItems = items.sort((a, b) => a.date - b.date);
        sortItems.shift();
        sortItems.unshift({ key, value, date: new Date().getTime() });
        localStorage.setItem(this.cacheKey, JSON.stringify(sortItems));
      }
      return items;
    }
    if (localStorage.getItem(this.cacheKey) && !stValue) {
      const items = JSON.parse(localStorage.getItem(this.cacheKey));
      const removedItems = items.filter((item) => item.key !== key);
      localStorage.setItem(this.cacheKey, JSON.stringify(removedItems));
      return removedItems;
    }
    localStorage.setItem(
      this.cacheKey,
      JSON.stringify([{ key, value, date: new Date().getTime() }])
    );
    return null;
  }

  getGenStatus(index: any) {
    if (this.generatorDetails) {
      if (this.generatorDetails.generators[index].status === 0) {
        return {
          genError: true,
        };
      } else if (this.generatorDetails.generators[index].status === 1) {
        return {
          genSuccess: true,
        };
      } else if (this.generatorDetails.generators[index].status === 2) {
        return {
          genNa: true,
        };
      } else if (this.generatorDetails.generators[index].status === 3) {
        return {
          genSuccess: true,
        };
      }
    }
  }
}

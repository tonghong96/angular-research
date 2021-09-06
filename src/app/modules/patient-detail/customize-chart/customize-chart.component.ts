import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_kelly from '@amcharts/amcharts4/themes/kelly';
import * as am4plugins_bullets from '@amcharts/amcharts4/plugins/bullets';
import {
  Bullet,
  ColumnSeries,
  DateAxis,
  LineSeries,
  ValueAxis,
  ValueAxisDataItem,
  XYChart
} from '@amcharts/amcharts4/charts';
import {Container, Image} from '@amcharts/amcharts4/core';
import * as moment from 'moment';

@Component({
  selector: 'app-customize-chart',
  templateUrl: './customize-chart.component.html',
  styleUrls: ['./customize-chart.component.scss']
})

export class CustomizeChartComponent implements OnInit {
  public formatType = 'YYYY-MM-DD';
  public distanceDate = 20;
  public displayedDateNumber = 30;
  public startDate: Date | any = new Date();
  public endDate: Date | any = new Date();
  public chart1!: XYChart | any;
  public chart4!: XYChart | any;
  // data for loadData4()
  public data = [
    {
      date: new Date(2018, 0, 1),
      value: 60,
      value2: 65,
      value3: 60,
      value4: 160,
      value5: 120,
      heartRateValue: 1,
      heartRate: 2,
      hospitalValue: 0,
      hospital: 1,
      medicineValue: 1,
      actionValue: 1,
    }, {
      date: new Date(2018, 0, 2),
      value: 155,
      value2: 100,
      value3: 100,
      value4: 150,
      value5: 150,
      heartRateValue: 1,
      heartRate: 2,
      hospitalValue: 0,
      hospital: 1,
      medicineValue: 2,
      actionValue: 1,
    }, {
      date: new Date(2018, 0, 3),
      value: 90,
      value2: 103,
      value3: 68,
      value4: 85,
      value5: 90,
      heartRateValue: 2,
      heartRate: 2,
      hospitalValue: 1,
      hospital: 1,
      medicineValue: 2,
      actionValue: 2,
    }, {
      date: new Date(2018, 0, 4),
      value: 85,
      value2: 75,
      value3: 75,
      value4: 101,
      value5: 110,
      heartRateValue: 1,
      heartRate: 2,
      hospitalValue: 0,
      hospital: 1,
      medicineValue: 2,
      actionValue: 0,
    }, {
      date: new Date(2018, 0, 5),
      value: 95,
      value2: 110,
      value3: 160,
      value4: 63,
      value5: 142,
      heartRateValue: 0,
      heartRate: 2,
      hospitalValue: 1,
      hospital: 1,
      medicineValue: 0,
      actionValue: 0,
    }, {
      date: new Date(2018, 0, 6),
      value: 110,
      value2: 95,
      value3: 94,
      value4: 153,
      value5: 111,
      heartRateValue: 3,
      heartRate: 2,
      hospitalValue: 1,
      hospital: 1,
      medicineValue: 1,
      actionValue: 2,
    },
    {
      date: new Date(2018, 0, 7),
      value: 120,
      value2: 80,
      value3: 60,
      value4: 155,
      value5: 66,
      heartRateValue: 2,
      heartRate: 2,
      hospitalValue: 0,
      hospital: 1,
      medicineValue: 1,
      actionValue: 3,
    },
    {
      date: new Date(2018, 0, 8),
      value: 120,
      value2: 80,
      value3: 60,
      value4: 155,
      value5: 66,
      heartRateValue: 2,
      heartRate: 2,
      hospitalValue: 0,
      hospital: 1,
      medicineValue: 1,
      actionValue: 3,
    },
    {
      date: new Date(2018, 0, 9),
      value: 120,
      value2: 80,
      value3: 60,
      value4: 155,
      value5: 66,
      heartRateValue: 2,
      heartRate: 2,
      hospitalValue: 0,
      hospital: 1,
      medicineValue: 1,
      actionValue: 3,
    },
    {
      date: new Date(2018, 0, 10),
      value: 120,
      value2: 60,
      value3: 68,
      value4: 125,
      value5: 86,
      heartRateValue: 2,
      heartRate: 2,
      hospitalValue: 0,
      hospital: 1,
      medicineValue: 1,
      actionValue: 3,
    },
    {
      date: new Date(2018, 0, 11),
      value: 120,
      value2: 60,
      value3: 68,
      value4: 125,
      value5: 86,
      heartRateValue: 2,
      heartRate: 2,
      hospitalValue: 0,
      hospital: 1,
      medicineValue: 1,
      actionValue: 3,
    },
    {
      date: new Date(2018, 0, 12),
      value: 120,
      value2: 60,
      value3: 68,
      value4: 125,
      value5: 86,
      heartRateValue: 2,
      heartRate: 2,
      hospitalValue: 0,
      hospital: 1,
      medicineValue: 1,
      actionValue: 3,
    },
    {
      date: new Date(2018, 0, 13),
      value: 120,
      value2: 70,
      value3: 88,
      value4: 105,
      value5: 70,
      heartRateValue: 2,
      heartRate: 2,
      hospitalValue: 0,
      hospital: 1,
      medicineValue: 1,
      actionValue: 3,
    },
    {
      date: new Date(2018, 0, 14),
      value: 120,
      value2: 60,
      value3: 68,
      value4: 125,
      value5: 86,
      heartRateValue: 2,
      heartRate: 2,
      hospitalValue: 0,
      hospital: 1,
      medicineValue: 1,
      actionValue: 3,
    },
    {
      date: new Date(2018, 0, 15),
      value: 120,
      value2: 70,
      value3: 88,
      value4: 105,
      value5: 70,
      heartRateValue: 2,
      heartRate: 2,
      hospitalValue: 0,
      hospital: 1,
      medicineValue: 1,
      actionValue: 3,
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadData4();
    // this.loadData3();
    this.loadData1();
  }

  getEndDate(): void {
    this.endDate = new Date (moment(this.startDate).add(this.displayedDateNumber, 'days').format(this.formatType));
  }

  clickPrevMonth(): void {
    // this.startDate = new Date (moment(this.startDate).subtract(this.distanceDate, 'days').format(this.formatType));
    // this.getEndDate();
  }

  clickNextMonth(): void {
    // this.startDate = new Date (moment(this.startDate).add(this.distanceDate, 'days').format(this.formatType));
    // this.getEndDate();
  }

  clickToday(): void {
    this.startDate = new Date (moment(new Date()).subtract(this.displayedDateNumber, 'days').format(this.formatType));
    this.getEndDate();
  }

  showIndicator(indicator: Container): void {
    indicator.background.fill = am4core.color('#fff');
    indicator.background.fillOpacity = 0.8;
    indicator.width = am4core.percent(100);
    indicator.height = am4core.percent(100);

    // const indicatorLabel = indicator.createChild(am4core.Label);
    // indicatorLabel.text = 'Loading...';
    // indicatorLabel.align = 'center';
    // indicatorLabel.valign = 'middle';
    // indicatorLabel.fontSize = 20;

    const hourglass = indicator.createChild(am4core.Image);
    // hourglass.href = '/assets/images/loading03.gif';
    hourglass.href = 'https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg';
    hourglass.align = 'center';
    hourglass.valign = 'middle';
    hourglass.horizontalCenter = 'middle';
    hourglass.verticalCenter = 'middle';
    hourglass.scale = 1.5;
  }

  hideIndicator(indicator: Container): void {
    indicator.hide();
  }

  loadData4(): void {
    this.clickToday();

    am4core.useTheme(am4themes_animated);

    // Create chart instance
    this.chart4 = am4core.create('chartdiv4', am4charts.XYChart);
    const chart = this.chart4;
    chart.height = 220;

    // Add data
    chart.data = this.data ;
    chart.paddingTop = 30;

    // Create axes
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 30;
    dateAxis.renderer.grid.template.disabled = true; // tat luoi
    dateAxis.cursorTooltipEnabled = false;
    dateAxis.renderer.cellStartLocation = 0.05;
    dateAxis.renderer.cellEndLocation = 0.95;
    dateAxis.renderer.labels.template.fontSize = 12;

    // const dateAxis = this.createDateAxis(chart);

    // Create series
    this.createBloodPressure(chart, 'value3', 'Huyet ap');
    this.createSeriesAndAxis(chart, 'value2', 'Nhip tim');
    // this.createHeartRateAndHospitalAxis(chart);
    // this.createMedicineAndActionAxis(chart);

    chart.cursor = new am4charts.XYCursor();

    chart.leftAxesContainer.layout = 'vertical';
    chart.cursor.xAxis = dateAxis; // gan categoryAxis vao xAxis

    /* Configure cursor lines */
    chart.cursor.lineX.stroke = am4core.color('#003153');
    chart.cursor.lineX.strokeWidth = 2;
    chart.cursor.lineX.strokeOpacity = 0.2;
    chart.cursor.lineX.strokeDasharray = '';

    chart.cursor.lineY.disabled = true;

    // create loading
    chart.preloader.disabled = true;
    const indicator = chart.tooltipContainer.createChild(am4core.Container);
    this.showIndicator(indicator);

    setTimeout(() => {
      this.hideIndicator(indicator);
    }, 4000);
  }

  createImage(bullet: Bullet, option: {href: string; width: number; height: number}): Image {
    const image = bullet.createChild(am4core.Image);
    image.href = option.href;
    image.width = option.width;
    image.height = option.height;
    image.horizontalCenter = 'middle';
    image.verticalCenter = 'middle';
    return image;
  }

  createRange(valueAxis: ValueAxis, option: { title: string, value: number}): ValueAxisDataItem {
    const axisRanges = valueAxis.axisRanges.create();
    axisRanges.label.text = option.title;
    axisRanges.label.fontSize = 13;
    axisRanges.value = option.value;
    axisRanges.grid.strokeWidth = 0;
    axisRanges.grid.strokeOpacity = 0;
    return axisRanges;
  }

  createLineSeries(chart: XYChart, valueY: string): LineSeries {
    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = valueY;
    series.dataFields.dateX = 'date';
    series.strokeWidth = 0;
    series.strokeOpacity = 0;
    return series;
  }

  createHeartRateAndHospitalAxis(chart: XYChart): void {
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0.5;
    valueAxis.max = 2.5;
    valueAxis.strictMinMax = true;
    valueAxis.height = 50;
    valueAxis.marginTop = 10;

    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.align = 'right';

    // create heart rate range
    const heartRateRange = this.createRange(valueAxis, {title: 'Heart rate', value: 2});

    // create series for heart rate
    const heartRateSeries = this.createLineSeries(chart, 'heartRate');
    heartRateSeries.yAxis = valueAxis; // important!!!

    const heartRateBullet = heartRateSeries.bullets.push(new am4charts.Bullet());
    const heartRateImage = this.createImage(heartRateBullet, {href: '', width: 20, height: 20});

    heartRateImage.adapter.add('href', (value: any, target: any) => {
      if (target.dataItem) {
        const dataFollowDate: any = chart.data.find((dat: any) => {
          return dat.date === target.dataItem.dateX;
        });
        if (dataFollowDate && dataFollowDate.heartRateValue === 1) {
          return '/assets/images/icon_heart_rate.svg';
        } else if (dataFollowDate && dataFollowDate.heartRateValue === 2) {
          return '/assets/images/icon_running.svg';
        }
      }
      return '';
    });


    // create hospital range
    this.createRange(valueAxis, {title: 'Hospital', value: 1});

    // create series for hospital
    const hospitalSeries = this.createLineSeries(chart, 'hospital');
    hospitalSeries.yAxis = valueAxis;

    const hospitalBullet = hospitalSeries.bullets.push(new am4charts.Bullet());
    const hospitalImage = this.createImage(hospitalBullet, {href: '', width: 25, height: 25});

    hospitalImage.adapter.add('href', (value: any, target: any) => {
      if (target.dataItem) {
        const dataFollowDate: any = chart.data.find((dat: any) => {
          return dat.date === target.dataItem.dateX;
        });
        if (dataFollowDate && dataFollowDate.hospitalValue) {
          return '/assets/images/icon_hospital.svg';
        }
      }
      return '';
    });
  }

  createMedicineAndActionAxis(chart: XYChart): void {
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0.5;
    valueAxis.max = 2.5;
    valueAxis.strictMinMax = true;
    valueAxis.height = 50;

    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.align = 'right';
    valueAxis.marginBottom = 15;

    // create medicine range
    this.createRange(valueAxis, {title: 'Medicine', value: 2});

    // create series for medicine
    const medicineSeries = this.createLineSeries(chart, 'heartRate');
    medicineSeries.yAxis = valueAxis; // important!!!

    const medicineBullet = medicineSeries.bullets.push(new am4charts.Bullet());
    const medicineImage = this.createImage(medicineBullet, {href: '', width: 17, height: 17});

    medicineImage.adapter.add('href', (value: any, target: any) => {
      if (target.dataItem) {
        const dataFollowDate: any = chart.data.find((dat: any) => {
          return dat.date === target.dataItem.dateX;
        });
        if (dataFollowDate && dataFollowDate.medicineValue === 1) {
          return '/assets/images/icon_single_medicine1.svg';
        } else if (dataFollowDate && dataFollowDate.medicineValue === 2) {
          return '/assets/images/icon_single_medicine2.svg';
        }
      }
      return '';
    });


    // create action range
    this.createRange(valueAxis, {title: 'Action', value: 1});

    // create series for action
    const actionSeries = this.createLineSeries(chart, 'hospital');
    actionSeries.yAxis = valueAxis;

    const actionBullet = actionSeries.bullets.push(new am4charts.Bullet());
    const actionImage = this.createImage(actionBullet, {href: '', width: 20, height: 20});

    actionImage.adapter.add('href', (value: any, target: any) => {
      if (target.dataItem) {
        const dataFollowDate: any = chart.data.find((dat: any) => {
          return dat.date === target.dataItem.dateX;
        });
        if (dataFollowDate && dataFollowDate.actionValue === 1) {
          return '/assets/images/icon_no_smoking.svg';
        } else if (dataFollowDate && dataFollowDate.actionValue === 2) {
          return '/assets/images/icon_no_drink.svg';
        } else if (dataFollowDate && dataFollowDate.actionValue === 3) {
          return '/assets/images/icon_running.svg';
        }
      }
      return '';
    });
  }

  createColumnSeriesBH(chart: XYChart, valueAxis: ValueAxis, option: { valueY: string, name: string, color: string }): ColumnSeries {
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = option.valueY;
    series.dataFields.dateX = 'date';
    series.name = option.name;
    series.tooltipText = '{name} {dateX}: [b]{valueY}[/]';
    series.columns.template.fill = am4core.color(option.color);
    series.yAxis = valueAxis;
    series.stacked = false;
    series.columns.template.width = am4core.percent(100);

    return series;
  }

  createSeriesAndAxis(chart: XYChart, field: string, name: string): ValueAxis {
    const valueAxis: any = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.dy = -50; // thay doi de co the chuyen truc len tren hoac xuong duoi
    valueAxis.min = 0;
    valueAxis.max = 200;
    valueAxis.strictMinMax = true;
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.renderer.opposite = true;
    valueAxis.renderer.grid.template.location = 0;
    // valueAxis.renderer.grid.template.disabled = true; // tat luoi
    valueAxis.renderer.grid.template.stroke = am4core.color('red');

    valueAxis.renderer.minGridDistance = 30;
    valueAxis.align = 'right';

    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.dateX = 'date';
    series.name = name;
    series.tooltipText = '{name} {dateX}: [b]{valueY}[/]';
    series.strokeWidth = 2;
    series.yAxis = valueAxis;

    const bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.stroke = am4core.color('#fff');
    bullet.circle.strokeWidth = 2;

    return valueAxis;
  }

  createBloodPressure(chart: XYChart, field: string, name: string): ValueAxis {
    const valueAxis: any = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 200;
    valueAxis.strictMinMax = true;
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.renderer.grid.template.location = 0;
    valueAxis.renderer.minGridDistance = 25;

    const morningSeries = this.createColumnSeriesBH(chart, valueAxis, { name: 'Huyet ap sang', valueY: 'value3', color: '#0e7dde' });
    const noonSeries = this.createColumnSeriesBH(chart, valueAxis, { name: 'Huyet ap trua', valueY: 'value4', color: '#74a2e0' });
    const nightSeries = this.createColumnSeriesBH(chart, valueAxis, { name: 'Huyet ap toi', valueY: 'value5', color: '#8496ae' });

    valueAxis.renderer.minGridDistance = 30;
    valueAxis.align = 'right';

    return valueAxis;
  }

  createDateAxis(chart: XYChart): DateAxis {
    const dateAxis: DateAxis = chart.xAxes.push(new am4charts.DateAxis());
    console.log('createDateAxis this.startDate: ', this.startDate);
    console.log('createDateAxis this.endDate: ', this.endDate);
    dateAxis.min = this.startDate.getTime();
    dateAxis.max = this.endDate.getTime();
    dateAxis.strictMinMax = true;
    dateAxis.dateFormats.setKey('day', 'd');
    dateAxis.periodChangeDateFormats.setKey('day', 'd');
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.baseInterval = {
      timeUnit: 'day',
      count: 1
    };
    dateAxis.gridIntervals.setAll([
      {timeUnit: 'day', count: 1},
    ]);
    dateAxis.renderer.cellStartLocation = 0.3125;
    dateAxis.renderer.cellEndLocation = 0.6875;
    // dateAxis.renderer.grid.template.disabled = true;
    // dateAxis.renderer.labels.template.dy = 15;
    dateAxis.renderer.labels.template.fontSize = 14;
    dateAxis.renderer.labels.template.fill = am4core.color('#333333');
    dateAxis.cursorTooltipEnabled = false;
    // if (this.period && this.period > 60) {
    //   dateAxis.renderer.labels.template.disabled = true;
    // }
    // create month label for X axis
    // this.createMonthLabel();
    // this.createWeekRange();

    return dateAxis;
  }
  /**
   * Bieu do co 3 column, stack = false de khong xep chong len nhau
   */
  loadData2(): void {
    // Apply chart themes
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_kelly);

    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);

    // Add data
    chart.data = [
      {
      country: 'x0',
      research: 501.9,
      marketing: 250,
      sales: 199
    }, {
      country: 'X1',
      research: 301.9,
      marketing: 222,
      sales: 251
    }, {
      country: 'X2',
      research: 201.1,
      marketing: 170,
      sales: 199
    }, {
      country: 'X3',
      research: 165.8,
      marketing: 122,
      sales: 90
    }, {
      country: 'X4',
      research: 139.9,
      marketing: 99,
      sales: 252
    }, {
      country: 'X5',
      research: 128.3,
      marketing: 85,
      sales: 84
    }, {
      country: 'X6',
      research: 99,
      marketing: 93,
      sales: 142
    }, {
      country: 'X7',
      research: 60,
      marketing: 50,
      sales: 55
    }, {
      country: 'X8',
      research: 50,
      marketing: 42,
      sales: 25
    }];

    // Create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'country';
    categoryAxis.title.text = 'Local country offices';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;


    const  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.title.text = "Expenditure (%)";
    // valueAxis.title.text = "Expenditure (%)";
    // valueAxis.calculateTotals = true;
    // valueAxis.min = 0;
    // valueAxis.max = 100;
    // valueAxis.strictMinMax = true;
    // valueAxis.renderer.labels.template.adapter.add("text", function(text) {
    //   return text + "%";
    // });

    // Create series
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'research';
    // series.dataFields.valueYShow = "totalPercent";
    series.dataFields.categoryX = 'country';
    series.name = 'Research';
    series.tooltipText = '{name}: [bold]{valueY}[/]';
    // series.stacked = false;

    const series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = 'marketing';
    // series2.dataFields.valueYShow = "totalPercent";
    series2.dataFields.categoryX = 'country';
    series2.name = 'Marketing';
    series2.tooltipText = '{name}: [bold]{valueY}[/]';
    // series2.stacked = false;

    const series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.dataFields.valueY = 'sales';
    // series3.dataFields.valueYShow = "totalPercent";
    series3.dataFields.categoryX = 'country';
    series3.name = 'Sales';
    series3.tooltipText = '{name}: [bold]{valueY}[/]';
    series3.stacked = true;

    // Add cursor
    chart.cursor = new am4charts.XYCursor(); // show chu giai khi hover
    // Add legend
    // chart.legend = new am4charts.Legend(); // chu thich mau cua tung loai column
  }

  createHorizontalGrid(valueAxis: am4charts.ValueAxis, value: number, color: string = 'red', showLable = false): void {
    const range = valueAxis.axisRanges.create();
    range.value = value;
    range.grid.strokeWidth = 3;
    range.grid.stroke = am4core.color(color); // red
    range.grid.opacity = 1;
    if (showLable) {
      range.label.text = value.toString();
      range.label.stroke = am4core.color(color);
    }
  }

  createBullet(lineSeries: LineSeries): void {
    const bullet = lineSeries.bullets.push(new am4charts.Bullet());
    const bulletCircle = bullet.createChild(am4core.Circle);
    bulletCircle.radius = 4;
    bulletCircle.fill = am4core.color('#306F95');
  }

  createLabel(chartContainer: am4core.Container): void {
    const topContainer = chartContainer.createChild(am4core.Container);
    topContainer.layout = 'absolute';
    topContainer.toBack();
    topContainer.paddingBottom = 25;
    topContainer.width = am4core.percent(100);

    const axisTitle1 = topContainer.createChild(am4core.Label);
    axisTitle1.text = 'Blood \n pressure';
    axisTitle1.align = 'left';
    axisTitle1.textAlign = 'end';
    axisTitle1.marginLeft = -25;

    const axisTitle2 = topContainer.createChild(am4core.Label);
    axisTitle2.text = 'mmHg';
    axisTitle2.fontWeight = '600';
    axisTitle2.align = 'left';
    axisTitle2.paddingTop = 40;
    axisTitle2.fontSize = 12;
    axisTitle2.fill = am4core.color('#737a99ff');

    const axisTitle3 = topContainer.createChild(am4core.Label);
    axisTitle3.text = 'Pulse \n rate';
    axisTitle3.align = 'right';
    axisTitle3.marginRight = 27;

    const axisTitle4 = topContainer.createChild(am4core.Label);
    axisTitle4.text = 'bpm';
    axisTitle4.fontWeight = '600';
    axisTitle4.align = 'right';
    axisTitle4.paddingTop = 40;
    axisTitle4.marginRight = 42;
    axisTitle4.fontSize = 12;
    axisTitle4.fill = am4core.color('#737a99ff');
  }

  /**
   * Bieu do 1 cot + line, create bullet, highline value Y
   */
  loadData3(): void {
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_kelly);

    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.leftAxesContainer.layout = 'vertical';

    this.createLabel(chart.chartContainer);

    chart.paddingLeft = 50;
    chart.dy = 0;

    // Add data
    chart.data = [
      {
      country: 'X1',
      litres: 60,
      units: 250000,
        heartRate: 1
    }, {
      country: 'X2',
      litres: 70,
      units: 222000,
        heartRate: 2
    }, {
      country: 'X3',
      litres: 80,
      units: 170000,
        heartRate: 1
    }, {
      country: 'X4',
      litres: 90,
      units: 122000,
        heartRate: 1
    }, {
      country: 'X5',
      litres: 92,
      units: 99000,
        heartRate: 1
    }, {
      country: 'X6',
      litres: 74,
      units: 85000,
        // heartRate: 2
    }, {
      country: 'X7',
      litres: 99,
      units: 93000,
        // heartRate: 2
    }, {
      country: 'X8',
      litres: 100,
      units: 50000,
        heartRate: 2
    }, {
      country: 'X9',
      litres: 117,
      units: 42000,
        heartRate: 1
    }];

    // Create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());

    categoryAxis.cursorTooltipEnabled = false;
    categoryAxis.dataFields.category = 'country';
    // categoryAxis.title.text = "Countries";
    // categoryAxis.renderer.grid.template.location = 0; // khong cho duong luoi di qua giua column
    // categoryAxis.renderer.minGridDistance = 30; // khoang cach min giu cac gia tri truc X
    categoryAxis.renderer.grid.template.disabled = true; // tat luoi

    // First value axis
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.marginBottom = 20;

    // valueAxis.renderer.labels.template.adapter.add("text", function(text) {
    //   return text + "%";
    // });

    this.createHorizontalGrid(valueAxis, 80, 'red', true);
    this.createHorizontalGrid(valueAxis, 100, 'red', true);
    valueAxis.cursorTooltipEnabled = false;

    // Second value axis
    // const valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis2.cursorTooltipEnabled = false; // tat tooltip
    // valueAxis2.renderer.opposite = true;


    // First series
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'litres';
    series.dataFields.categoryX = 'country';
    series.name = 'Sales';
    series.columns.template.fill = am4core.color('#0e7dde');
    series.tooltipText = '{name}: [bold]{valueY}[/]';

    // Second series
    // const series2 = chart.series.push(new am4charts.LineSeries());
    // series2.dataFields.valueY = 'units';
    // series2.dataFields.categoryX = 'country';
    // series2.name = 'Units';
    // series2.tooltipText = '{name}: [bold]{valueY}[/]';
    // series2.strokeWidth = 3;
    // series2.stroke = am4core.color('#ff0000'); // red
    // series2.yAxis = valueAxis2;

    // add circle bullet for each data
    // this.createBullet(series2);


    // Third axis
    // this.createIconAxis(chart);
    // this.createLineSeries(chart);

    // the following line makes value axes to be arranged vertically.

    // create y axis for heart rate chart
    const heartRateAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 5;
    heartRateAxis.renderer.tooltip!.disabled = true;
    heartRateAxis.renderer.opacity = 0;
    heartRateAxis.renderer.grid.template.disabled = true;
    heartRateAxis.height = 40;
    heartRateAxis.marginTop = 40;
    // heartRateAxis.marginBottom = 10;
    // heartRateAxis.renderer.inversed = true;
    // heartRateAxis.renderer.labels.template.adapter.add('text', () => {
    //   return 'Heart';
    // });

    // create label for day event
    const dayRange = valueAxis.axisRanges.create();
    dayRange.label.text = 'Heart';
    // dayRange.label.dy = 40;

    // create series for day event
    const daySeries = chart.series.push(new am4charts.LineSeries());
    daySeries.dataFields.categoryX = 'country';
    daySeries.dataFields.valueY = 'heartRate';
    daySeries.strokeWidth = 0;


    const dayBullet = daySeries.bullets.push(new am4charts.Bullet());
    const image = dayBullet.createChild(am4core.Image);
    image.href = '/assets/images/icon_heart_rate.svg';
    image.width = 30;
    image.height = 30;
    image.horizontalCenter = 'middle';
    image.verticalCenter = 'middle';


    // end series 3


    // Add cursor
    chart.cursor = new am4charts.XYCursor();

    chart.cursor.xAxis = categoryAxis; // gan categoryAxis vao xAxis

    /* Configure cursor lines */
    chart.cursor.lineX.tooltipText = 'tesrr';
    chart.cursor.lineX.stroke = am4core.color('#ffca01');
    chart.cursor.lineX.strokeWidth = 4;
    chart.cursor.lineX.strokeOpacity = 0.2;
    chart.cursor.lineX.strokeDasharray = '';

    chart.cursor.lineY.disabled = true;
  }

  /**
   * bieu do 1 cot mix voi linear
   */
  loadData1(): void {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    this.chart1 = am4core.create('chartdiv2', am4charts.XYChart);
    const chart = this.chart1;
    chart.height = 220;

    // Create daily series and related axes
    const dateAxis1 = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis1.renderer.grid.template.location = 0;
    dateAxis1.renderer.minGridDistance = 50;
    dateAxis1.renderer.cellStartLocation = 0.05;
    dateAxis1.renderer.cellEndLocation = 0.95;
    dateAxis1.renderer.labels.template.fontSize = 12;

    const valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());

    const series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.dataFields.valueY = 'value';
    series1.dataFields.dateX = 'date';
    series1.data = this.generateDailyData();
    series1.xAxis = dateAxis1;
    series1.yAxis = valueAxis1;
    series1.tooltipText = '{dateX}: [bold]{valueY}[/]';

    // Create hourly series and related axes
    const dateAxis2 = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis2.renderer.grid.template.location = 0;
    dateAxis2.renderer.minGridDistance = 40;
    dateAxis2.renderer.labels.template.disabled = true;
    dateAxis2.renderer.grid.template.disabled = true;
    dateAxis2.renderer.tooltip!.disabled = true;

    const valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.renderer.opposite = true;
    valueAxis2.renderer.grid.template.disabled = true;
    valueAxis2.renderer.tooltip!.disabled = true;

    const series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = 'value';
    series2.dataFields.dateX = 'date';
    series2.data = this.generateDailyData();
    series2.xAxis = dateAxis2;
    series2.yAxis = valueAxis2;
    series2.strokeWidth = 3;
    series2.tooltipText = '{dateX}: [bold]{valueY}[/]';

    // Add cursor
    chart.cursor = new am4charts.XYCursor();

    // create loading
    chart.preloader.disabled = true;
    const indicator = chart.tooltipContainer.createChild(am4core.Container);
    this.showIndicator(indicator);

    setTimeout(() => {
      this.hideIndicator(indicator);
    }, 2000);
  }


  generateDailyData(): Array<{date: Date; value: number}> {
    const firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 10);
    firstDate.setHours(0, 0, 0, 0);
    const data = [];
    for (let i = 0; i < 25; i++) {
      const newDate = new Date(firstDate);
      newDate.setDate(newDate.getDate() + i);
      data.push({
        date: newDate,
        value: Math.round(Math.random() * 12) + 1
      });
    }
    console.log('generateDailyData: ', data);
    return data;
  }

  generateHourlyData(): Array<{date: Date | null; value: any}> {
    const firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 10);
    const data: {date: Date | null; value: any}[] = [];
    for (let i = 0; i < 10 * 24; i++) {
      const newDate = new Date(firstDate);
      newDate.setHours(newDate.getHours() + i);
      let value = null;
      if (i === 0) {
        value = Math.round(Math.random() * 10) + 1;
      } else {
        value = Math.round(data[data.length - 1].value / 100 * (90 + Math.round(Math.random() * 20)) * 100) / 100;
      }
      data.push({
        date: newDate,
        value
      });
    }
    console.log('generateHourlyData: ', data);
    return data;
  }
}

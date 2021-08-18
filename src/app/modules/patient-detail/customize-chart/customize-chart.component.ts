import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import { LineSeries } from "@amcharts/amcharts4/charts";

@Component({
  selector: 'app-customize-chart',
  templateUrl: './customize-chart.component.html',
  styleUrls: ['./customize-chart.component.scss']
})
export class CustomizeChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadData3()
    this.loadData1()
  }

  /**
   * Bieu do co 3 column, stack = false de khong xep chong len nhau
   */
  loadData2() {
    // Apply chart themes
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_kelly);

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [{
      "country": "x0",
      "research": 501.9,
      "marketing": 250,
      "sales": 199
    }, {
      "country": "X1",
      "research": 301.9,
      "marketing": 222,
      "sales": 251
    }, {
      "country": "X2",
      "research": 201.1,
      "marketing": 170,
      "sales": 199
    }, {
      "country": "X3",
      "research": 165.8,
      "marketing": 122,
      "sales": 90
    }, {
      "country": "X4",
      "research": 139.9,
      "marketing": 99,
      "sales": 252
    }, {
      "country": "X5",
      "research": 128.3,
      "marketing": 85,
      "sales": 84
    }, {
      "country": "X6",
      "research": 99,
      "marketing": 93,
      "sales": 142
    }, {
      "country": "X7",
      "research": 60,
      "marketing": 50,
      "sales": 55
    }, {
      "country": "X8",
      "research": 50,
      "marketing": 42,
      "sales": 25
    }];

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.title.text = "Local country offices";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;


    var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
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
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "research";
    // series.dataFields.valueYShow = "totalPercent";
    series.dataFields.categoryX = "country";
    series.name = "Research";
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    // series.stacked = false;

    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "marketing";
    // series2.dataFields.valueYShow = "totalPercent";
    series2.dataFields.categoryX = "country";
    series2.name = "Marketing";
    series2.tooltipText = "{name}: [bold]{valueY}[/]";
    // series2.stacked = false;

    var series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.dataFields.valueY = "sales";
    // series3.dataFields.valueYShow = "totalPercent";
    series3.dataFields.categoryX = "country";
    series3.name = "Sales";
    series3.tooltipText = "{name}: [bold]{valueY}[/]";
    series3.stacked = true;

    // Add cursor
    chart.cursor = new am4charts.XYCursor(); // show chu giai khi hover
    // Add legend
    // chart.legend = new am4charts.Legend(); // chu thich mau cua tung loai column
  }

  createHorizontalGrid(valueAxis: am4charts.ValueAxis, value: number, color: string = 'red'): void {
    const range = valueAxis.axisRanges.create();
    range.value = value;
    if ([500, 300].includes(value)) {
      range.grid.strokeWidth = 4;
      range.grid.stroke = am4core.color(color); // red
      range.grid.opacity = 1;
    }
  }

  createBullet(lineSeries: LineSeries): void {
    const bullet = lineSeries.bullets.push(new am4charts.Bullet());
    const bulletCircle = bullet.createChild(am4core.Circle);
    bulletCircle.radius = 4;
    bulletCircle.fill = am4core.color('#306F95');
  }

  /**
   * Bieu do 1 cot + line, create bullet, highline value Y
   */
  loadData3() {
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_kelly);

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [
      {
      "country": "X1",
      "litres": 501.9,
      "units": 250000
    }, {
      "country": "X2",
      "litres": 301.9,
      "units": 222000
    }, {
      "country": "X3",
      "litres": 201.1,
      "units": 170000
    }, {
      "country": "X4",
      "litres": 165.8,
      "units": 122000
    }, {
      "country": "X5",
      "litres": 139.9,
      "units": 99000
    }, {
      "country": "X6",
      "litres": 128.3,
      "units": 85000
    }, {
      "country": "X7",
      "litres": 99,
      "units": 93000
    }, {
      "country": "X8",
      "litres": 360,
      "units": 50000
    }, {
      "country": "X9",
      "litres": 50,
      "units": 42000
    }];

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());

    categoryAxis.cursorTooltipEnabled = false;
    categoryAxis.dataFields.category = "country";
    // categoryAxis.title.text = "Countries";
    // categoryAxis.renderer.grid.template.location = 0; // khong cho duong luoi di qua giua column
    // categoryAxis.renderer.minGridDistance = 30; // khoang cach min giu cac gia tri truc X
    categoryAxis.renderer.grid.template.disabled = true; // tat luoi

    // First value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.title.text = "Litres sold (M)";
    this.createHorizontalGrid(valueAxis, 300)
    this.createHorizontalGrid(valueAxis, 500, '#396478')
    valueAxis.cursorTooltipEnabled = false;

    // add icon for lable of valueAxis
    // Create range
    let event = valueAxis.axisRanges.create();
    event.value = 270;
    event.grid.disabled = true;

    // Create a Pin bullet
    let pin = new am4plugins_bullets.PinBullet();
    event.bullet = pin;

// Configure
    pin.background.pointerAngle = 0;
    pin.background.radius = 20;
    pin.background.fill = am4core.color("#c00");
    pin.image = new am4core.Image();
    // pin.image.href = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/cat.png";
    pin.image.href = "/assets/images/icon_sleep.svg";



    // Second value axis
    var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.cursorTooltipEnabled = false; // tat tooltip
    // valueAxis2.title.text = "Units sold";
    valueAxis2.renderer.opposite = true;


    // First series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";
    series.name = "Sales";
    series.columns.template.fill = am4core.color("#0e7dde")
    series.tooltipText = "{name}: [bold]{valueY}[/]";

    // Second series
    var series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "units";
    series2.dataFields.categoryX = "country";
    series2.name = "Units";
    series2.tooltipText = "{name}: [bold]{valueY}[/]";
    series2.strokeWidth = 3;
    series2.stroke = am4core.color("#ff0000"); // red
    series2.yAxis = valueAxis2;

    // add circle bullet for each data
    this.createBullet(series2)

    // Add cursor
    chart.cursor = new am4charts.XYCursor();

    chart.cursor.xAxis = categoryAxis; // gan categoryAxis vao xAxis

    /* Configure cursor lines */
    chart.cursor.lineX.tooltipText = 'tesrr';
    chart.cursor.lineX.stroke = am4core.color("#ffca01");
    chart.cursor.lineX.strokeWidth = 4;
    chart.cursor.lineX.strokeOpacity = 0.2;
    chart.cursor.lineX.strokeDasharray = "";

    chart.cursor.lineY.disabled = true;
    // chart.cursor.lineY.stroke = am4core.color("#ffca01");
    // chart.cursor.lineY.strokeWidth = 4;
    // chart.cursor.lineY.strokeOpacity = 0.2;
    // chart.cursor.lineY.strokeDasharray = "";
  }

  /**
   * bieu do 1 cot mix voi linear
   */
  loadData1() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdiv2", am4charts.XYChart);

    // Create daily series and related axes
    let dateAxis1 = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis1.title.text = 'Dateeeeeeee111'
    dateAxis1.renderer.grid.template.location = 0;
    dateAxis1.renderer.minGridDistance = 40;

    let valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = 'valueAxis11111'

    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.dataFields.valueY = "value";
    series1.dataFields.dateX = "date";
    series1.data = this.generateDailyData();
    series1.xAxis = dateAxis1;
    series1.yAxis = valueAxis1;
    series1.tooltipText = "{dateX}: [bold]{valueY}[/]";

    // Create hourly series and related axes
    let dateAxis2 = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis1.title.text = 'Dateeeeeeee222'
    dateAxis2.renderer.grid.template.location = 0;
    dateAxis2.renderer.minGridDistance = 40;
    dateAxis2.renderer.labels.template.disabled = true;
    dateAxis2.renderer.grid.template.disabled = true;
    dateAxis2.renderer.tooltip!.disabled = true;

    let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.title.text = 'valueAxis2222'
    valueAxis2.renderer.opposite = true;
    valueAxis2.renderer.grid.template.disabled = true;
    valueAxis2.renderer.labels.template.disabled = true;
    valueAxis2.renderer.tooltip!.disabled = true;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "value";
    series2.dataFields.dateX = "date";
    series2.data = this.generateDailyData();
    series2.xAxis = dateAxis2;
    series2.yAxis = valueAxis2;
    series2.strokeWidth = 3;
    series2.tooltipText = "{dateX}: [bold]{valueY}[/]";

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
  }


  generateDailyData() {
    let firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 10);
    firstDate.setHours(0, 0, 0, 0);
    let data = [];
    for(var i = 0; i < 10; i++) {
      let newDate = new Date(firstDate);
      newDate.setDate(newDate.getDate() + i);
      data.push({
        date: newDate,
        value: Math.round(Math.random() * 12) + 1
      });
    }
    console.log('generateDailyData: ', data)
    return data;
  }

  generateHourlyData() {
    let firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 10);
    let data: {date: Date | null; value: any}[] = [];
    for (var i = 0; i < 10 * 24; i++) {
      let newDate = new Date(firstDate);
      newDate.setHours(newDate.getHours() + i);
      let value = null;
      if (i == 0) {
        value = Math.round(Math.random() * 10) + 1;
      } else {
        value = Math.round(data[data.length - 1].value / 100 * (90 + Math.round(Math.random() * 20)) * 100) / 100;
      }
      data.push({
        date: newDate,
        value: value
      });
    }
    console.log('generateHourlyData: ', data)
    return data;
  }
}

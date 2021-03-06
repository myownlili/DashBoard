import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,ColumnSeries,Category, Legend, Tooltip, RangeColorSettingsDirective,RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

import {Header} from '../../components';
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis,rangeColorMapping} from '../../data/dummy';
import {useStateContext} from '../../contexts/ContentProvider';



const ColorMapping = () => {
  const { currentMode} = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Color Mappping" title="USA CLIMATE - WEATHER BY MONTH"/>
      <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true}}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]}/>
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource = {colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
              />
          </SeriesCollectionDirective>
        </ChartComponent>
    </div>
  )
}

export default ColorMapping
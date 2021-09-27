import { PivotSheet } from '@antv/s2';
import '@antv/s2/dist/s2.min.css';

fetch(
  'https://gw.alipayobjects.com/os/bmw-prod/d5eee4f7-7c09-4162-8651-9f0a16090a7c.json',
)
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById('container');
    const s2DataConfig = {
      fields: {
        rows: ['province', 'city'],
        columns: ['type'],
        values: ['price'],
      },
      data,
    };

    const s2options = {
      width: 600,
      height: 600,
      conditions: {
        background: [
          {
            field: 'price',
            mapping(fieldValue, data) {
              console.log(fieldValue, data);
              return {
                // fill 是背景字段下唯一必须的字段，用于指定文本颜色
                fill: '#CED4DE',
              };
            },
          },
        ],
      },
    };
    const s2 = new PivotSheet(container, s2DataConfig, s2options);

    s2.render();
  });
import { useState } from 'react';

import './App.css';

import { ja } from 'date-fns/locale';

import {
  Calendar,
  Checkbox,
  DatePicker,
  Dropdown,
  RadioButton,
} from '../lib/components';
import TimePicker from '../lib/components/Timepicker/Timepicker';

function App() {
  const [time, setTime] = useState(new Date());
  const [selectedId, setSelectedId] = useState('');

  return (
    <div className="space-y-6">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi qui
        veniam voluptatibus itaque alias vitae officiis consequuntur fugit
        similique? Saepe dolorem quam quos necessitatibus veniam similique
        suscipit ex architecto enim?
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi qui
        veniam voluptatibus itaque alias vitae officiis consequuntur fugit
        similique? Saepe dolorem quam quos necessitatibus veniam similique
        suscipit ex architecto enim?
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi qui
        veniam voluptatibus itaque alias vitae officiis consequuntur fugit
        similique? Saepe dolorem quam quos necessitatibus veniam similique
        suscipit ex architecto enim?
      </p>
      <Dropdown
        label={'Dropdown'}
        isError={false}
        items={[
          {
            id: '1',
            label: 'Item 1',
          },
          {
            id: '2',
            label: 'Item 2',
          },
          {
            id: '3',
            label: 'Item 3',
          },
          {
            id: '4',
            label: 'Item 4',
          },
          {
            id: '5',
            label: 'Item 5',
          },
          {
            id: '6',
            label: 'Item 6',
          },
          {
            id: '7',
            label: 'Item 7',
          },
          {
            id: '8',
            label: 'Item 8',
          },
          {
            id: '9',
            label: 'Item 9',
          },
          {
            id: '10',
            label: 'Item 10',
          },
          {
            id: '11',
            label: 'Item 11',
          },
          {
            id: '12',
            label: 'Item 12',
          },
          {
            id: '13',
            label: 'Item 13',
          },
          {
            id: '14',
            label: 'Item 14',
          },
          {
            id: '15',
            label: 'Item 15',
          },
          {
            id: '16',
            label: 'Item 16',
          },
          {
            id: '17',
            label: 'Item 17',
          },
          {
            id: '18',
            label: 'Item 18',
          },
          {
            id: '19',
            label: 'Item 19',
          },
          {
            id: '20',
            label: 'Item 20',
          },
        ]}
        selected={selectedId}
        onSelectItem={(newValue) => {
          console.log('onSelectItem');
          setSelectedId(newValue);
        }}
      />
      <RadioButton label="Only Show Information" />
      <Checkbox label="Only Show Information" />
      <TimePicker
        time={time}
        onChangeTime={(newValue) => {
          setTime(newValue);
        }}
      />
      <Calendar locale={ja} isRange />
      <DatePicker label="Hello" />
    </div>
  );
}

export default App;

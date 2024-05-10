import classNames from 'classnames';

import { FormLabel, TextInput } from '../..';
import { BadgeWarningCircle } from '../../../assets';
import { CaretDown } from '../../../assets/icons';
import Popup from '../../Popup/Popup';
import styles from './Dropdown.module.css';
import { useDropdownViewModel } from './Dropdown.viewModel';

export type DropdownItem = {
  id: string;
  label: string;
  view?: React.ReactNode;
  disabled?: boolean;
};

export type DropdownProps = {
  className?: string;
  label?: string;
  isError?: boolean;
  errorMessage?: string;
  required?: boolean;
  description?: string;
  searchable?: boolean;
  items: DropdownItem[];
  selected?: string;
  onSelectItem?: (id: string) => void;
};

const Dropdown = (props: DropdownProps) => {
  const viewModel = useDropdownViewModel(props);

  return (
    <div className={classNames(styles.container, props.className)}>
      <FormLabel
        label={props.label}
        isError={props.isError}
        description={props.description}
        required={props.required}
      />

      <Popup
        trigger={
          <div className={styles.anchor}>
            <TextInput
              value={
                viewModel.isOpen && props.searchable
                  ? viewModel.search
                  : viewModel.getSelected?.label ?? ''
              }
              onChange={viewModel.handleSearch}
              readonly={props.searchable !== true}
              onClick={viewModel.toggle}
            />
            <button
              className={classNames(styles.dropdownIcon, {
                [styles.open]: viewModel.isOpen,
              })}
              onClick={viewModel.toggle}
            >
              <CaretDown />
            </button>
          </div>
        }
        isOpen={viewModel.isOpen}
        setIsOpen={viewModel.setIsOpen}
      >
        <div className={classNames(styles.popup)}>
          {viewModel.getFiltered.map((item) => (
            <div
              key={item.id}
              className={classNames(styles.item, {
                [styles.disabled]: item.disabled,
              })}
              onClick={() => {
                if (item.disabled) return;

                props.onSelectItem?.(item.id);
                viewModel.setIsOpen(false);
              }}
            >
              {item.view ?? item.label}
            </div>
          ))}
        </div>
      </Popup>

      {props.isError && (
        <div className="flex gap-1 items-center">
          <BadgeWarningCircle />
          <FormLabel label={props.errorMessage} isError={props.isError} />
        </div>
      )}
    </div>
  );
};

export default Dropdown;

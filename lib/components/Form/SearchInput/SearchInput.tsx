import { TextInput } from '../..';
import { MagnifyingGlass } from '../../../assets/icons';
import styles from './SearchInput.module.css';

export type SearchInputProps = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { value = '', onChange } = props;
  return (
    <div className="relative">
      <div className={styles['magnify-icon']}>
        <MagnifyingGlass />
      </div>
      <TextInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;

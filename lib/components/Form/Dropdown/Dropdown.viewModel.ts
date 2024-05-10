import { useMemo, useState } from 'react';

import { DropdownProps } from './Dropdown';

export const useDropdownViewModel = (props: DropdownProps) => {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const getSelected = useMemo(() => {
    return props.items.find((item) => item.id === props.selected);
  }, [props.items, props.selected]);

  const getFiltered = useMemo(() => {
    return props.items.filter((item) => {
      if (search === '') {
        return true;
      }

      return item.label.toLowerCase().includes(search.toLowerCase());
    });
  }, [props.items, search]);

  return {
    search,
    handleSearch,
    isOpen,
    setIsOpen,
    toggle,

    getSelected,

    getFiltered,
  };
};

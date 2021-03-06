import { FaSearch } from 'react-icons/fa';

import { Input } from './styles';

export default function SearchBar() {
  return (
      <Input>
        <FaSearch size={14} color="#B9B9C4"/>
        <input type="text" placeholder="Search game titles"/>
      </Input>
  )
}
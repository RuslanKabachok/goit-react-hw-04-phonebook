import { Filter, Label } from './Filter.styled';

export default function Find({ onFindInput, inputValue }) {
  return (
    <Label>
      <Filter value={inputValue} type="text" onChange={onFindInput}></Filter>
    </Label>
  );
}

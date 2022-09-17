import {Input} from './PhonebookStyled'
export default function PhonebookFilter({ filter, handleInput }) {
    return (<Input
          type='text'
          name='filter'
          value={filter}
          onChange={handleInput}
          placeholder={"filter"}></Input>)
}